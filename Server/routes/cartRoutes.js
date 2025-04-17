const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart'); // adjust the path if needed

router.get('/:userId', async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId }).populate('items.productId');
    if (!cart) return res.status(404).json({ message: 'Cart not found' });
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/add', async (req, res) => {
  const { userId, productId } = req.body;
  if (!userId || !productId) return res.status(400).json({ message: 'userId and productId are required' });

  let cart = await Cart.findOne({ userId });
  if (!cart) cart = new Cart({ userId, items: [] });

  const existing = cart.items.find(item => item.productId.toString() === productId);
  if (existing) existing.quantity++;
  else cart.items.push({ productId, quantity: 1 });

  await cart.save();
  res.json(cart);
});

router.delete('/remove', async (req, res) => {
  const { userId, productId } = req.body;
  if (!userId || !productId) return res.status(400).json({ message: 'userId and productId are required' });

  const cart = await Cart.findOne({ userId });
  if (cart) {
    cart.items = cart.items.filter(item => item.productId.toString() !== productId);
    await cart.save();
  }
  res.json(cart);
});

module.exports = router;

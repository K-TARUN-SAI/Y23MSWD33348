import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, Col, Row, Container } from 'react-bootstrap';

function Cart({ userId }) {
  const [cart, setCart] = useState({ items: [] });

  const CART_API = process.env.REACT_APP_CART_URL;
  const ORDER_API = process.env.REACT_APP_ORDER_URL;

  const fetchCart = async () => {
    if (!userId) return;
    try {
      const res = await axios.get(`${process.env.REACT_APP_CART_URL}/${userId}`);
      setCart(res.data);
    } catch (err) {
      console.error('Failed to fetch cart:', err);
    }
  };

  const removeItem = async (productId) => {
    if (!userId) return;
    try {
      await axios.delete(`${CART_API}/remove`, { data: { userId, productId } });
      fetchCart();
    } catch (err) {
      console.error('Failed to remove item:', err);
    }
  };

  const placeOrder = async () => {
    if (!userId) return;
    try {
      await axios.post(`${ORDER_API}/place`, { userId });
      fetchCart();
    } catch (err) {
      console.error('Failed to place order:', err);
    }
  };

  useEffect(() => {
    if (!userId) return;
    fetchCart();
  }, [CART_API, userId]);

  return (
    <Container className="py-4">
      <h2>Your Cart</h2>
      <Row>
        {cart.items.map(({ productId, quantity }) => (
          <Col md={4} key={productId._id}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>{productId.name}</Card.Title>
                <Card.Text>Price: ₹{productId.price}</Card.Text>
                <Card.Text>Quantity: {quantity}</Card.Text>
                <Button variant="danger" onClick={() => removeItem(productId._id)}>Remove</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {cart.items.length > 0 && (
        <Button variant="success" onClick={placeOrder}>Place Order</Button>
      )}
    </Container>
  );
}

export default Cart;

import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Card, Button, Form, Row, Col, Container } from 'react-bootstrap';
import { QRCodeCanvas } from 'qrcode.react';
import { PencilSquare, TrashFill } from 'react-bootstrap-icons';
import AuthContext from '../context/AuthContext';

function Product() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [editingId, setEditingId] = useState(null);
  const { user } = useContext(AuthContext);

  const PRODUCT_API = https://doorstep-backend.onrender.com/api/products;
  const CART_API = https://doorstep-backend.onrender.com/api/cart;
  const ORDER_API = https://doorstep-backend.onrender.com/api/order;

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(PRODUCT_API);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  fetchData();
}, [PRODUCT_API]);


  const fetchProducts = async () => {
    try {
      const response = await axios.get(PRODUCT_API);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const saveProduct = async () => {
    try {
      const productData = { name, price, category };
      if (editingId) {
        await axios.put(`${PRODUCT_API}/${editingId}`, productData);
        setEditingId(null);
      } else {
        await axios.post(PRODUCT_API, productData);
      }
      setName('');
      setPrice('');
      setCategory('');
      fetchProducts();
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${PRODUCT_API}/${id}`);
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const editProduct = (product) => {
    setEditingId(product._id);
    setName(product.name);
    setPrice(product.price);
    setCategory(product.category);
  };
  const addToCart = async (id) => {
    await axios.post(`${process.env.REACT_APP_CART_URL}/add`, {
      userId: user.id,
      productId: id
    });
  };
  

  const orderNow = async () => {
    await axios.post(`${process.env.REACT_APP_ORDER_URL}/place`, {}, {
      headers: { Authorization: `Bearer ${user.token}` }
    });
  };
  
  return (
    <Container className="py-5">
      <h2 className="mb-5 text-center fw-bold">🛒 Product Management</h2>

      {user?.role === 'admin' && (
        <Card className="p-4 shadow-sm mb-5">
          <Form>
            <Row className="gy-3">
              <Col md={4}>
                <Form.Control
                  placeholder="Product Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Col>
              <Col md={3}>
                <Form.Control
                  placeholder="Price"
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Col>
              <Col md={3}>
                <Form.Control
                  placeholder="Category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </Col>
              <Col md={2}>
                <Button
                  variant={editingId ? "warning" : "success"}
                  onClick={saveProduct}
                  className="w-100 fw-semibold"
                >
                  {editingId ? "Update" : "Add"}
                </Button>
              </Col>
            </Row>
          </Form>
        </Card>
      )}

      <Row xs={1} md={2} lg={3} className="g-4">
        {products.map(product => (
          <Col key={product._id}>
            <Card className="h-100 shadow-sm rounded-4">
              <Card.Body>
                <Card.Title className="fw-bold">{product.name}</Card.Title>
                <Card.Text>
                  <span className="d-block mb-1"><strong>💵 Price:</strong> ₹{product.price}</span>
                  <span className="d-block"><strong>📦 Category:</strong> {product.category}</span>
                </Card.Text>

                <div className="text-center my-3">
                  <QRCodeCanvas
                    value={`Product Name: ${product.name}\nPrice: ₹${product.price}\nCategory: ${product.category}`}
                    size={128}
                    bgColor={"#ffffff"}
                    fgColor={"#000000"}
                    level={"H"}
                    includeMargin={true}
                  />
                </div>

                {user?.role === 'admin' ? (
                  <div className="d-flex justify-content-between">
                    <Button variant="outline-primary" onClick={() => editProduct(product)}>
                      <PencilSquare className="me-1" />
                      Edit
                    </Button>
                    <Button variant="outline-danger" onClick={() => deleteProduct(product._id)}>
                      <TrashFill className="me-1" />
                      Delete
                    </Button>
                  </div>
                ) : (
                  <div className="d-flex justify-content-between">
                    <Button variant="outline-success" onClick={() => addToCart(product._id)}>
                      Add to Cart
                    </Button>
                    <Button variant="primary" onClick={() => orderNow(product._id)}>
                      Order Now
                    </Button>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Product;

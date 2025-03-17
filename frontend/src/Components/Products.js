import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button, Form, Row, Col, Container } from 'react-bootstrap';

function Product() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [editingId, setEditingId] = useState(null);

  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(API_URL);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const saveProduct = async () => {
    try {
      const productData = { name, price, category };

      if (editingId) {
        await axios.put(`${API_URL}/${editingId}`, productData);
        setEditingId(null);
      } else {
        await axios.post(API_URL, productData);
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
      await axios.delete(`${API_URL}/${id}`);
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

  return (
    <Container>
      <h2 className="mb-4 text-center">Manage Products</h2>

      {/* Product Form */}
      <Form className="mb-4">
        <Row className="g-3">
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
              className="w-100"
            >
              {editingId ? "Update" : "Add"}
            </Button>
          </Col>
        </Row>
      </Form>

      {/* Product Cards */}
      <Row>
        {products.map(product => (
          <Col md={4} key={product._id} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  <strong>Price:</strong> ₹{product.price} <br />
                  <strong>Category:</strong> {product.category}
                </Card.Text>
                <Button variant="info" className="me-2" onClick={() => editProduct(product)}>Edit</Button>
                <Button variant="danger" onClick={() => deleteProduct(product._id)}>Delete</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Product;

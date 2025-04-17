import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Col, Row, Container } from 'react-bootstrap';

function Order({ userId }) {
  const [orders, setOrders] = useState([]);
  const ORDER_API = process.env.REACT_APP_ORDER_URL;

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await axios.get(`${ORDER_API}/${userId}`);
      setOrders(res.data);
    };
    fetchOrders();
  }, [ORDER_API, userId]);
  

  return (
    <Container className="py-4">
      <h2>Your Orders</h2>
      {orders.map((order, i) => (
        <div key={i} className="mb-4">
          <h5>Order #{i + 1} - {new Date(order.createdAt).toLocaleString()}</h5>
          <Row>
            {order.items.map(({ productId, quantity }) => (
              <Col md={4} key={productId._id}>
                <Card className="mb-3">
                  <Card.Body>
                    <Card.Title>{productId.name}</Card.Title>
                    <Card.Text>Price: ₹{productId.price}</Card.Text>
                    <Card.Text>Quantity: {quantity}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  );
}

export default Order;

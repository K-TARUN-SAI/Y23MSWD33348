import React from 'react';

// Sample data
const orderDetails = [
  { label: "Purchase ID", value: "ORD1234" },
  { label: "Expected Delivery Date", value: "2025-01-10" },
  { label: "Status", value: "Shipped" },
];

const customerDetails = [
  { label: "Name", value: "John Doe" },
  { label: "Email", value: "john@example.com" },
  { label: "Address", value: "123 Elm Street" },
];

const deliveryPersonDetails = [
  { label: "Name", value: "Jane Smith" },
  { label: "Contact", value: "123-456-7890" },
];

const Track = () => {
  return (
    <div>
      <h1>Track Your Order</h1>
      <table>
        <thead>
          <tr>
            <th colSpan="2"><strong>Order Details</strong></th>
          </tr>
        </thead>
        <tbody>
          {orderDetails.map((detail, index) => (
            <tr key={index}>
              <td>{detail.label}</td>
              <td>{detail.value}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="2">
              <h3><strong>Customer Details</strong></h3>
            </td>
          </tr>
          {customerDetails.map((detail, index) => (
            <tr key={index}>
              <td>{detail.label}</td>
              <td>{detail.value}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="2">
              <h3><strong>Delivery Person Details</strong></h3>
            </td>
          </tr>
          {deliveryPersonDetails.map((detail, index) => (
            <tr key={index}>
              <td>{detail.label}</td>
              <td>{detail.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Track;

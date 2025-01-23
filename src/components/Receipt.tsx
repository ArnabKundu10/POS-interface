import React from 'react';

interface Service {
  id: number;
  name: string;
  price: number;
}

interface CustomerDetails {
  name: string;
  email: string;
  phone: string;
}

interface ReceiptDetails {
  services: Service[];
  customerDetails: CustomerDetails;
  date: Date;
  total: number;
}

interface ReceiptProps {
  receipt: ReceiptDetails;
}

const Receipt: React.FC<ReceiptProps> = ({ receipt }) => {
  return (
    <div className="text-center">
      <h2>Receipt</h2>
      <p><strong>Date:</strong> {receipt.date.toLocaleDateString()}</p>
      <p><strong>Customer Name:</strong> {receipt.customerDetails.name}</p>
      <p><strong>Email:</strong> {receipt.customerDetails.email}</p>
      <p><strong>Phone:</strong> {receipt.customerDetails.phone}</p>
      <table className="table mt-3">
        <thead>
          <tr>
            <th>Service</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {receipt.services.map((service) => (
            <tr key={service.id}>
              <td>{service.name}</td>
              <td>${service.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4>Total: ${receipt.total}</h4>
    </div>
  );
};

export default Receipt;
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
   const downloadReceipt = ():void => {
      // Prepare receipt content
      const content = `
        Receipt
        ---------------------------
        Date: ${receipt.date.toLocaleDateString()}
        
        Customer Details:
        Name: ${receipt.customerDetails.name}
        Email: ${receipt.customerDetails.email}
        Phone: ${receipt.customerDetails.phone}
        
        Services:
        ${receipt.services
          .map((service) => `- ${service.name}: $${service.price}`)
          .join('\n')}
        
        ---------------------------
        Total: $${receipt.total}
      `;
  
      // Create a Blob and trigger download
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'receipt.txt';
      link.click();
      URL.revokeObjectURL(url); // Clean up
    };
  return (
   <div className="text-center">
    <div className="p-5 ms-5 me-5 border border-white">
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
      <p><button onClick={downloadReceipt} className='btn btn-design text-white fw-bold'>Download your receipt</button></p>
    </div>
    <button onClick={()=>window.location.reload()} className='m-5 btn btn-design text-white fw-bold'>Back to the Home</button>
    </div>
  );
};

export default Receipt;
import React, { useState } from 'react';

interface CustomerDetails {
  name: string;
  email: string;
  phone: string;
}

interface CheckoutProps {
  cart: { id: number; name: string; price: number }[];
  handleCheckout: (details: CustomerDetails) => void;
}

const Checkout: React.FC<CheckoutProps> = ({ cart, handleCheckout }) => {
  const [customerName, setCustomerName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleCheckout({ name: customerName, email, phone });
  };

  return (
    <div className="mb-4">
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>Add items to the cart to proceed.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" value={customerName} onChange={(e) => setCustomerName(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input type="tel" className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-success color-g">Complete Checkout</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
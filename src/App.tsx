import React, { useState } from 'react';
import ServiceList from './components/ServiceList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Receipt from './components/Receipt';
import "./App.css"

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

const App: React.FC = () => {
  const [cart, setCart] = useState<Service[]>([]);
  const [customerDetails, setCustomerDetails] = useState<CustomerDetails | null>(null);
  const [receipt, setReceipt] = useState<ReceiptDetails | null>(null);

  const addToCart = (service: Service): void => {
    if(cart.includes(service)===false)
    setCart((prevCart) => [...prevCart, service]);
    else alert("Item is already present in the cart.");
  };

  const removeFromCart = (index: number): void => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const handleCheckout = (details: CustomerDetails): void => {
    setCustomerDetails(details);
    console.log(customerDetails)
    setReceipt({
      services: cart,
      customerDetails: details,
      date: new Date(),
      total: cart.reduce((sum, item) => sum + item.price, 0),
    });
    setCart([]);
  };

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Point Of Sale <span className='color-v'>(</span> POS <span className='color-v'>)</span>  Interface </h1>
      {!receipt ? (
        <>
          <ServiceList addToCart={addToCart} />
          <Cart cart={cart} removeFromCart={removeFromCart} />
          <Checkout cart={cart} handleCheckout={handleCheckout} />
        </>
      ) : (
        <Receipt receipt={receipt} />
      )}
    </div>
  );
};

export default App;
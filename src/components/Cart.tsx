import React from 'react';

interface Service {
  id: number;
  name: string;
  price: number;
}

interface CartProps {
  cart: Service[];
  removeFromCart: (index: number) => void;
}

const Cart: React.FC<CartProps> = ({ cart, removeFromCart }) => {
  return (
    <div className="mb-4">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="list-group">
          {cart.map((item, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              {item.name} - ${item.price}
              <button className="btn btn-danger" onClick={() => removeFromCart(index)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
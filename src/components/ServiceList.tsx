import React from 'react';

interface Service {
  id: number;
  name: string;
  price: number;
}

interface ServiceListProps {
  addToCart: (service: Service) => void;
}

const services: Service[] = [
  { id: 1, name: 'Fitness Class', price: 20 },
  { id: 2, name: 'Therapy Session', price: 50 },
  { id: 3, name: 'Workshop', price: 30 },
];

const ServiceList: React.FC<ServiceListProps> = ({ addToCart }) => {
  return (
    <div className="mb-4">
      <h2>Available Services</h2>
      <ul className="list-group">
        {services.map((service) => (
          <li key={service.id} className="list-group-item d-flex justify-content-between align-items-center">
            {service.name} - ${service.price}
            <button className="btn btn-primary" onClick={() => addToCart(service)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
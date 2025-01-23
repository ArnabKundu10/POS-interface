import React from 'react';
import Fitness from '../assets/fitness.jpg'
import Therapy from '../assets/therapy.jpg'
import Workshop from '../assets/workshop.jpg'
import CartItem from './CartItem';
interface Service {
  id: number;
  name: string;
  price: number;
  img:string;
}

interface ServiceListProps {
  addToCart: (service: Service) => void;
}

const services: Service[] = [
  { id: 1, name: 'Fitness Class', price: 20, img:Fitness},
  { id: 2, name: 'Therapy Session', price: 50, img:Therapy},
  { id: 3, name: 'Workshop', price: 30, img:Workshop},
];

const ServiceList: React.FC<ServiceListProps> = ({ addToCart }) => {
  return (
    <div className="mb-4">
      <h2>Available Services</h2>
      <div className="d-flex flex-row justify-content-between flex-wrap">
        {services.map((service) => (
          <CartItem key={service.id} addToCart={addToCart} service={service}/>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
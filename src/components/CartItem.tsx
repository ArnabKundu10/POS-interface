import React from 'react'
interface Service {
   id: number;
   name: string;
   price: number;
   img:string;
 }
 
 interface ServiceListProps {
   service:Service,
   addToCart: (service: Service) => void;
 }
const CartItem: React.FC<ServiceListProps> = ({service,addToCart}) => {
  return (
   <div className="card m-2" style={{ width: '18rem' }}>
   <img src={service.img} className="card-img-top" alt={service.name} />
   <div className="card-body">
     <h5 className="card-title">{service.name}</h5>
     <p className="card-text">{service.price}$ <span className='text-decoration-line-through'>{(1.2)*(service.price)}$</span></p>
     <button onClick={()=>addToCart(service)} className="btn btn-primary btn-design">Add Service</button>
   </div>
 </div>
  )
}

export default CartItem

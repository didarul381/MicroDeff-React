import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Product = ({product}) => {
  const{id,title,price,image,category}=product;
  return (
    <div>
     <img
          className='object-cover w-full h-56 md:h-64 xl:h-80'
          src={image}
          alt=''
        />
         <Link to={`../product/${id}`} aria-label='View Item'>{title}</Link>
        
        <p>price:{price}</p>
        <Link to={`../product/${category}`} aria-label='View Item'>{category}</Link>
        
    </div>
  )
}

export default Product
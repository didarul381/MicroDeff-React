import React from 'react'
import { useLoaderData } from 'react-router-dom'

const ProductDetails = () => {
    const productDetails=useLoaderData();
    console.log(productDetails);
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto'>
        <div className=' lg:w-1/2'>
          <img
            src={productDetails.image}
            alt=''
            className='object-cover w-full  h-80 lg:h-full'
          />
        </div>
        <div className='flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2'>
          <div>
            <p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400'>
              Brand new
            </p>
          </div>
          <h5 className='mb-3 text-3xl font-extrabold leading-none sm:text-4xl'>
            {productDetails.title}
          </h5>
        
    
          <p className='mb-5 text-gray-800'>{productDetails.description.substring(0, 150)}...</p>
         
            <p className='inline-flex items-center font-semibold transition-colors duration-200 text-blue-400 hover:text-deep-purple-800'>
              Price: {productDetails.price}
            </p>
          </div>
        </div>
      </div>
   
  )
}

export default ProductDetails
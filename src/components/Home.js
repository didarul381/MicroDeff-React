import React from "react";
import { useLoaderData } from "react-router-dom";
import NewBook from "./NewBook";
import MostBoughtBook from "./MostBoughtBook";

import Product from "./Product";


const Home = () => {
  const loaderData = useLoaderData();
  const products = loaderData;
  console.log(products);
  return (
    <div className="px-4 sm:mb-20 lg:mb-5 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24">
     

    

       <section>
       
        {/* <hr className="w-10 mx-auto my-2 text-center py-6 "></hr> */}
        <div className="grid gap-6 row-gap-5 mb-4 lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-2">
          { products.map((product) => (
           <Product key={product.id} product={product}></Product>
          ))}

          
        </div>
       </section>

      
        
      </div>
    
   
  );
};

export default Home;

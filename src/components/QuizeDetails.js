import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizeDetails = () => {
    const question=useLoaderData()
    const optionAll=question.data.questions;
//    console.log(question.questions.correctAnswer)
    
  return (
   
    <div className='grid gap-6 row-gap-5 mb-4 lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-2'>
        {
            optionAll.map((option) =>(
              <div className='m-5 bg-teal-300  p-5 shadow-xl shadow-black '>
                <h3>{option.question}</h3>
                <h3>{option.correctAnswer}</h3>
               
                {
                   
                   option.options.map((o)=>(
                      
                       <p><input type="radio" className='m-2'  name="fav_language"value={o} onClick={(id)=>{ console.log(id); 
                        if(id===option.correctAnswer){toast("You are correct");}else{
                        toast("You are Wrong");
                     }}}></input>{o}</p>

                   ))
                }
                   
               
              </div>
              
            ))
        }
        <ToastContainer></ToastContainer>
    </div>
  )
}

export default QuizeDetails
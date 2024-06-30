import React from 'react'
import { useNavigate } from 'react-router-dom'

function ThankYou() {
    const navigate = useNavigate();

    return (
        <>
               <h1
                className='text-center text-orange-600 font-bold'
               >Thank You !</h1>
               <div>
               <button
                className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
                onClick={() => navigate(-1)}
              >
                {"Go Back <-"}
              </button>
               </div>
        </>
     
        
    )
}

export default ThankYou

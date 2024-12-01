"use client"
import React ,{useEffect , useState } from 'react'

const State = () => {
  const [count, setCount] = useState(0);

return(
<div className='bg-gray-700 h-screen'>
        <p className='text-center text-white text-3xl md:text-8xl font-mono pt-5 md:pt-32'>
            My Increment : {count} </p> 
            <main className='flex space-x-4 md:space-x-8 pt-12 md:pt-24 text-center place-content-center'>
           
            <button onClick={() => setCount(count +1)} className='bg-red-700 rounded-3xl md:rounded-full w-32 md:w-48 text-xl md:text-3xl text-white h-10 md:h-14' >Increment</button><br /> 
         
            <button onClick={() => setCount(0) } className='bg-white rounded-3xl md:rounded-full w-24 md:w-40 text-xl md:text-3xl text-black h-10 md:h-14' >Reset</button>
            </main>
           
    </div>
  ) 
}

export default State

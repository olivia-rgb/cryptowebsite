import { useState } from 'react'
import Accordion from './Accordion';
import Contents from '../Contents';
 

function App() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div >
          <h1 className='font-black text-center py-3'>MY REACT/TAILWIND ACCORDION</h1>
          {Contents.map((cont,index)=>(
            <Accordion  key={cont.id}  {...cont}/>
          ))}
      </div>
      <div>
        <h1 className='font-black text-xl p-3'>MY BEAUTIFUL <span className='bg-black text-white '>ACCORDION</span><br></br> USING REACT AND TAILWIND</h1>
      </div>
       
    </div>
  )
}

export default App;
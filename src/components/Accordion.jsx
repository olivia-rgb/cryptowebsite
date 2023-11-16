import React, { useState } from 'react'

function Accordion({title, content}) {
  const [show,setShow] = useState(false)
   
  function handletoggleActive(){
    setShow(!show)
    
  }
  return (
    <div className=' max-w-lg  mx-auto'>
        <div className=' flex justify-between bg-black text-white hover:cursor-pointer p rounded-sm p-6 w-[512px] '>
            <button className={`text-lg font-extrabold ${show? 'font-black' : ''}`}>{title}</button>
            <p className={`rotate-90   ${show? 'rotate-[270deg] font-black' : ''}`} onClick = {handletoggleActive}>{">"}</p>
        </div>
        <div>
         <p className={`w-[512px] bg-white font-bold p-4 max-h-28 overflow-hidden ${show ? '' : 'hidden'}`}> { show ?content:""}</p>
        </div>
    </div>
  )
}

export default Accordion;
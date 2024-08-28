import React from 'react'

function AIBots() {
  return (
    
        <div 
      className="flex flex-col min-h-screen my-5 md:flex-row items-center justify-center p-4 md:py-10 bg-cover bg-center" 
      style={{ backgroundImage: 'url("/img/bg-img/bgc1.jpeg")' }} // Replace with your background image source
    >
    <div className="flex overflow-hidden justify-center flex-col items-center px-2 py-3.5 rounded-lg bg-neutral-900 max-w-[626px] shadow-[0px_1px_3px_rgba(0,0,0,0.1)]">
      
      <div className="mt-2 text-xl font-bold leading-snug text-center text-gray-300">
        AI Bots
      </div>
      <div className="self-stretch mt-3 text-base leading-6 text-center text-gray-300 max-md:max-w-full">
        We understand the fast-paced and dynamic nature of financial markets.
        That's why
        <br />
        we've developed RoyalAsset AI Bots, a sophisticated solution that
        harnesses the power
        <br />
        of artificial intelligence to navigate the complexities of trading on
        your behalf.
      </div>
      <div className="mt-20 text-xl leading-none text-center text-gray-300 max-md:mt-10">
        Login to your Ai Bots account
      </div>
      <div className="flex overflow-hidden flex-wrap gap-6 px-2 py-2.5 mt-7 w-full rounded-md border border-gray-600 border-solid shadow-md bg-white bg-opacity-0 max-w-[546px] max-md:max-w-full">
        <div className="self-start text-2xl leading-none text-slate-500">
          person
        </div>
        <div className="flex-auto text-sm text-gray-400 w-[486px] max-md:max-w-full">
          Email Or Username
        </div>
      </div>
      <div className="flex overflow-hidden flex-wrap gap-6 p-2 mt-6 w-full whitespace-nowrap rounded-md border border-gray-600 border-solid shadow-md bg-white bg-opacity-0 max-w-[546px] max-md:max-w-full">
        <div className="self-start text-2xl leading-none text-slate-500">
          lock
        </div>
        <div className="flex-auto text-sm text-gray-400 w-[486px] max-md:max-w-full">
          Password
        </div>
      </div>
      <div className="px-16 py-3 mt-6 w-full text-xs font-semibold leading-none text-center text-gray-300 whitespace-nowrap bg-green-900 rounded max-w-[546px] max-md:px-5 max-md:max-w-full">
        Login
      </div>
      <div className="flex gap-5 justify-between mt-7 w-full text-xs font-semibold leading-none text-gray-300 max-w-[458px] max-md:max-w-full">
        <div>Don't have account? Register</div>
        <div>Forgot Password?</div>
      </div>
    </div>
  </div>
    
  )
}

export default AIBots
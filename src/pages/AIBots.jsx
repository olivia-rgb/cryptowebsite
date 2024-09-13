import React from 'react';

function AIBots() {
  return (
    <div 
      className="flex flex-col min-h-screen items-center justify-center p-4 md:p-10 bg-cover bg-center" 
      style={{ backgroundImage: 'url("/img/bg-img/bgc1.jpeg")' }} // Replace with your background image source
    >
      <div className="flex flex-col items-center px-4 py-6 rounded-lg max-w-[670px] shadow-[0px_1px_3px_rgba(0,0,0,0.1)] bg-opacity-60 w-full">
        <div className="mt-2 text-xl font-bold leading-snug text-center text-white">
          AI Bots
        </div>
        <div className="mt-3 text-base leading-6 text-center text-white">
          We understand the fast-paced and dynamic nature of financial markets.
          That's why we've developed Fidelity AI Bots, a sophisticated solution that
          harnesses the power of artificial intelligence to navigate the complexities of trading on your behalf.
        </div>
        <div className="mt-16 font-semibold text-xl leading-none text-center text-white">
          Login to your Ai Bots account
        </div>
        <div className="flex flex-col gap-6 px-2 py-2.5 mt-7 w-full shadow-md bg-white bg-opacity-0">
          <div className="flex items-center gap-4 p-2 border border-gray-600 rounded-md">

            <div className="text-xl md:text-2xl p-4 text-gray-400 flex-1">
              Email Or Username
            </div>
          </div>
          <div className="flex items-center gap-4 p-2 border border-gray-600 rounded-md">
            <div className="text-xl md:text-2xl p-4 text-gray-400 flex-1">
              Password
            </div>
          </div>
          <button className="px-5 py-4 mt-2 w-full text-xl md:text-2xl font-bold leading-none text-center text-white bg-green-900 rounded">
            Login
          </button>
          <div className="flex flex-col gap-4 text-xl font-semibold leading-none text-white text-center mt-7">
            <div>Don't have an account? Register</div>
            <div>Forgot Password?</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIBots;

import React from 'react';
import { motion } from 'framer-motion';

const ResponsiveComponent = () => {
  // Animation variants for the image and text
  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div
      className="flex flex-col my-5 md:flex-row items-center justify-center p-4 md:py-20 bg-cover bg-center"
      style={{ backgroundImage: 'url("/img/bg-img/bgc1.jpeg")' }} // Replace with your background image source
    >
      {/* Image Section */}
      <motion.div
        className="w-full py-5 md:w-1/2 flex justify-center md:justify-end mb-4 md:mb-0"
        initial="hidden"
        whileInView="visible"
        variants={imageVariants}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <img
          src="/img/spot-bg/spot3.jpg" // Replace with your image source
          alt="Example"
          className="w-full h-65 object-cover md:w-3/4 md:h-[400px] rounded-lg"
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center items-center text-center text-white md:text-left"
        initial="hidden"
        whileInView="visible"
        variants={textVariants}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className="w-[90%] pb-5 md:w-4/5">
          <h2 className="text-[clamp(2rem,5vw,2.5rem)] font-bold py-3 mb-4">
            Revolutionary Spot Trader
          </h2>
          <p className="text-[clamp(1.5rem,3vw,0 rem)]  mb-4">
            Introducing our game-changing Revolutionary Spot Trader, a pioneering platform redefining
            the landscape of trading. With lightning-fast execution and real-time market access, it's
            designed to elevate your trading experience. Our platform seamlessly integrates advanced
            tools and expert insights, empowering you to make informed decisions. Stay ahead of the
            curve with our revolutionary features and unlock new possibilities in trading. Join us in
            shaping the future of trading with the Revolutionary Spot Trader.
          </p>
          <button className="mt-4 px-8 text-2xl py-4 bg-white text-green-900 font-bold rounded-lg hover:bg-blue-600">
            Spot Trade
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ResponsiveComponent;

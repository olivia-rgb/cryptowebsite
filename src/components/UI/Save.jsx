import React from 'react';
import { motion } from 'framer-motion';

const Save = () => {
  // Animation variants for the image and text
  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div
      className="flex flex-col  md:flex-row items-center justify-center p-4 md:py-20 bg-cover bg-center"
      style={{ backgroundImage: 'url("/img/bg-img/bgc1.jpeg")' }} // Replace with your background image source
    >
      {/* Text Section */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center items-center text-center text-white md:text-left"
        initial="hidden"
        whileInView="visible"
        variants={textVariants}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className="w-[90%] pb-5 md:w-3/5">
          <h2 className="text-[clamp(2rem,5vw,2.5rem)] font-bold py-3 mb-4">
            Create Your Savings Plan in 2 minutes
          </h2>
          <h3 className='font-bold'>Get rewarded every time you hit your savings goal</h3>
          <p className="text-[clamp(1.5rem,3vw,0 rem)]  mb-4">
          Save your money and watch it grow with our high-interest savings plans. With our Fidelity savings plans, you can earn more, save conveniently, and achieve your financial goals faster. Whether you're saving for a future project or just for peace of mind, Fidelity Savings is the right plan for you. Join now and start growing your future.
          </p>
          <button className="mt-4 px-8 text-2xl py-4 bg-white text-green-900 font-bold rounded-lg hover:bg-blue-600">
            Start Application
          </button>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="w-full  md:w-2/5 flex justify-center md:justify-end mb-4 md:mb-0"
        initial="hidden"
        whileInView="visible"
        variants={imageVariants}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <img
          src="/img/other-img/savee2.png" // Replace with your image source
          alt="Example"
          className="w-full h-65 object-cover md:w-full md:h-[400px] rounded-lg"
        />
      </motion.div>
    </div>
  );
};

export default Save;

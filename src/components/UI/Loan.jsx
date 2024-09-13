import React from "react";
import { motion } from "framer-motion";
import bgImage from "/img/bg-img/bgc1.jpeg";
import chart from "/img/other-img/loannn.png";

const Loan = () => {
  // Variants for the text section animation
  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  // Variants for the image section animation
  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  const imageVariantss = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const textVariantss = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };


  return (
    <div
      className="relative w-full mb-5 h-auto bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex flex-col md:flex-row h-full">
        {/* Image Section */}
        <motion.div
          className="flex-shrink-0 w-full md:w-[55%] h-full flex items-center justify-center mt-10 md:mt-0 p-2 "
          initial="hidden"
          whileInView="visible"
          variants={imageVariants}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img
            src={chart}
            alt="Chart"
            className="w-full h-auto object-contain rounded-lg pl-10"
          />
        </motion.div>
        {/* Text Section */}
        <motion.div
          className="flex-shrink-0 w-full md:w-[45%] h-auto flex items-center justify-center p-2 "
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="text-center md:text-left ">
            <h1 className="text-white font-bold text-[clamp(1.5rem,5vw,3rem)] mb-4">
             Instant Fidelity Loan
            </h1>
            <p className="text-white text-[clamp(1rem,3vw,1.5rem)] mb-6 p-2 max-w-xl">
            Grow your business or take care of personal loans and repay conveniently. Our Loans include personal loans, SME loans, house loans, and loans for other emergencies. You can get instant approval and start growing your financial portfolio. Applying is easy and flexible, designed to help you cover all your urgent or long-term financial needs.
            </p>
            <button className="bg-white font-semibold text-green-900 hover:bg-yellow-700 py-2 px-4 rounded-lg text-[clamp(1rem,2.5vw,1.5rem)]">
              Start Application
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Loan;

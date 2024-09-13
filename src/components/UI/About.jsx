import React from "react";
import { motion } from "framer-motion";
import bgImage from "../../img/bg-img/bgc1.jpeg";
import chart from "../../img/chart.jpg";

const About = () => {
  // Variants for the text section animation
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  // Variants for the image section animation
  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div
      className="relative w-full mt-5 h-auto bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex py-12 flex-col md:flex-row h-full">
        {/* Text Section */}
        <motion.div
          className="flex-shrink-0 w-full md:w-[45%] h-auto flex items-center justify-center p-2 md:p-4"
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="text-center md:text-left md:pl-40">
            <h1 className="text-white font-bold text-[clamp(1.5rem,5vw,3rem)] mb-4">
              Fidelity Outperforms Bitcoin
            </h1>
            <p className="text-white text-[clamp(1rem,3vw,1.5rem)] mb-6 px-1">
              Bitcoin's value may fluctuate, but with Fidelity Investment, our
              next-generation AI bot can also help you profit regardless of market
              conditions. Investing with Wealth Vista is far superior to relying
              solely on your intuition. You have the option to trade with our
              industry-leading spot trader. Our spot trader platform combines
              insightful analysis and an intuitive layout to maximize your trading
              potential.
            </p>
            <button className="bg-white font-semibold text-green-900 hover:bg-yellow-700 py-2 px-4 rounded-lg text-[clamp(1rem,2.5vw,1.5rem)]">
              Trade Now
            </button>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex-shrink-0 w-full md:w-[55%] h-full flex items-center justify-center mt-10 md:mt-0 p-2 md:p-4"
          initial="hidden"
          whileInView="visible"
          variants={imageVariants}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img
            src={chart}
            alt="Chart"
            className="w-full max-h-[550px] object-contain rounded-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;

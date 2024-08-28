import React from 'react';
import { motion } from 'framer-motion';
import dashboardImage from "../../img/chart-img/chart5.jpeg";
import dashboardbg from "../../img/bg-img/bgc1.jpeg";

function Dashboard() {
  const textVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="relative flex flex-col items-center justify-start w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${dashboardbg})` }}
    >
      <div className="absolute md:top-10 left-1/2 transform -translate-x-1/2 text-center z-10">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          transition={{ duration: 1.0, ease: "easeInOut" }}
          className="text-white font-bold text-2xl md:text-6xl"
        >
          Check out our dashboard
        </motion.h1>
      </div>
      <img
        src={dashboardImage}
        alt="Dashboard"
        className="w-full h-auto max-w-full md:px-36 mt-20 md:mt-0"
      />
    </div>
  );
}

export default Dashboard;

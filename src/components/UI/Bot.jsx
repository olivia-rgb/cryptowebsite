import * as React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";

function Bot() {
  // Animation variants
  const textLeftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const textRightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2,
      },
    }),
  };

  return (
    <div 
      className="flex flex-col w-full my-5 md:flex-row items-center justify-center p-4 md:py-10 bg-cover bg-center" 
      style={{ backgroundImage: 'url("/img/bg-img/bgc1.jpeg")' }}
    >
      <div className="flex flex-col w-full md:w-4/5 ">
        <div className="flex flex-wrap gap-5 justify-center md:justify-between items-center md:items-start text-white max-md:mr-1.5 max-md:max-w-full text-center">
          <motion.div
            className="text-6xl font-bold tracking-tighter leading-[68px] max-md:max-w-full max-md:text-4xl max-md:leading-[49px]"
            initial="hidden"
            whileInView="visible"
            variants={textLeftVariants}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            Change the game
            <br />
            with our state of the
            <br />
            art AI Bots
          </motion.div>
          <motion.div
            className="flex flex-col items-start mt-2.5 text-lg tracking-normal"
            initial="hidden"
            whileInView="visible"
            variants={textRightVariants}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div className="flex gap-2 self-stretch leading-none">
              <IoMdCheckmarkCircleOutline className="" />
              <div className="grow shrink w-[221px] text-green-500">
                Premium Trading Algorithm
              </div>
            </div>
            <div className="flex gap-2 mt-7 leading-none">
              <IoMdCheckmarkCircleOutline className="" />
              <div className="basis-auto text-green-500">Smooth Backtesting</div>
            </div>
            <div className="flex gap-2 mt-7 leading-none">
              <IoMdCheckmarkCircleOutline className="" />
              <div className="basis-auto text-green-500">Loss Minimization</div>
            </div>
            <div className="flex gap-2 mt-8 leading-none">
              <IoMdCheckmarkCircleOutline className="" />
              <div className="basis-auto text-green-500">Detailed History</div>
            </div>
            <div className="flex gap-2 mt-7 leading-none">
              <IoMdCheckmarkCircleOutline className="" />
              <div className="basis-auto text-green-500">Buy & Sell Point Charts</div>
            </div>
          </motion.div>
        </div>
        <div className="mt-28 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {[
              { name: "R-Gemini Bot", price: "$500", pnl: "1% - 1.5%" },
              { name: "R-Jarvis Bot", price: "$10k", pnl: "2.5% - 3.9%" },
              { name: "R-Enigma Bot", price: "$25k", pnl: "4.5% - 7%" },
              { name: "R-Zeus Bot", price: "$50k", pnl: "8% - 9.5%" },
            ].map((bot, index) => (
              <motion.div
                key={index}
                className="flex flex-col w-3/12 max-md:w-full"
                initial="hidden"
                whileInView="visible"
                variants={cardVariants}
                custom={index}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div className="flex flex-col items-center px-6 py-7 mx-auto w-full font-medium text-center text-white rounded-2xl bg-black shadow-lg max-md:px-5 max-md:mt-6">
                  <div className="self-stretch px-16 py-7 text-sm font-bold tracking-tight leading-loose uppercase bg-green-500 rounded-2xl max-md:px-5">
                    {bot.name}
                  </div>
                  <div className="mt-16 text-2xl tracking-tight leading-none max-md:mt-10">
                    from
                  </div>
                  <div className="mt-16 text-3xl font-bold tracking-tighter leading-loose max-md:mt-10">
                    {bot.price}
                  </div>
                  <div className="mt-7 text-xl tracking-tight leading-none">
                    PNL
                  </div>
                  <div className="mt-5 text-xl tracking-tight leading-none text-green-500">
                    {bot.pnl}
                  </div>
                  <div className="flex gap-3.5 px-7 py-4 mt-12 max-w-full text-lg tracking-tight leading-3 rounded-2xl w-[182px] max-md:px-5 max-md:mt-10 bg-green-200 text-black">
                    <IoMdCheckmarkCircleOutline className="text-green-500" />
                    <div>AI Platform</div>
                  </div>
                  <div className="mt-6 text-sm tracking-tight leading-loose">
                    Minimal Losses
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-5 justify-between mt-32 max-md:mt-10 max-md:mr-1 max-md:max-w-full">
          <motion.div
            className="my-auto text-6xl font-bold tracking-tighter text-white leading-[68px] max-md:max-w-full max-md:text-4xl max-md:leading-[50px]"
            initial="hidden"
            whileInView="visible"
            variants={textLeftVariants}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            Safe and Secure
            <br />
            P2P Platform
          </motion.div>
          <motion.div
            className="flex flex-col max-md:max-w-full"
            initial="hidden"
            whileInView="visible"
            variants={textRightVariants}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div className="text-lg tracking-normal leading-6 text-white max-md:mr-2 max-md:max-w-full">
              Security with ultimate buyer and seller protection
              <br />
              guaranteed. Trade directly with other users, expanding your
              <br />
              network and diversifying your trading options.
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Bot;

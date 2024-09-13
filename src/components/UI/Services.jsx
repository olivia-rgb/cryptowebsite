import * as React from "react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function Services() {
  const [activeService, setActiveService] = React.useState(0);

  const services = [
    {
      id: 1,
      title: "AI Bots",
      description: "Maximize your trading potential with our cutting-edge AI bots. Powered by advanced algorithms, our bots analyze market trends and execute trades with precision, giving you a competitive edge.",
      image: "/img/other-img/image12.png",
    },
    {
      id: 2,
      title: "Spot Trading",
      description: "Experience seamless and secure spot trading with Royal Assets. Our platform provides real-time market access, ensuring you never miss a trading opportunity.",
      image: "/img/other-img/fidelity.png",
    },
    {
      id: 3,
      title: "P2P Trading",
      description: "Join a community of traders and investors with our peer-to-peer trading feature. Trade directly with other users, expanding your network and diversifying your trading options.",
      image: "/img/other-img/image19.png",
    },
  ];

  const activeDiv = services[activeService] || services[0];

  return (
    <div 
      className="flex flex-col w-full  md:flex-row items-center justify-center p-4 md:py-10 bg-cover bg-center" 
      style={{ backgroundImage: 'url("/img/bg-img/bgc1.jpeg")' }}
    >
      <motion.div 
        className="flex flex-col items-start w-full"
        initial="hidden"
        whileInView="visible"
        variants={textVariants}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {/* Desktop Layout */}
        <div className="hidden md:flex flex-col w-4/5 justify-center items-center mx-auto py-12">
          <motion.div 
            className="font-bold text-5xl tracking-tighter leading-none text-white"
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
          >
            Financial Growth via
          </motion.div>
          <motion.div 
            className="mt-5 text-5xl font-bold tracking-tighter text-white leading-none"
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
          >
            3 Core Services
          </motion.div>
          <div className="self-stretch flex items-center justify-center mt-40 w-10/12">
            <div className="flex gap-5">
              <motion.div 
                className="flex flex-col w-6/12"
                initial="hidden"
                whileInView="visible"
                variants={textVariants}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.6 }}
              >
                <div className="flex flex-col w-full text-white">
                  {services.map((service, index) => (
                    <motion.div
                      key={service.id}
                      className={`flex flex-wrap gap-10 pr-20 rounded bg-slate-950 bg-opacity-60 mb-4 shadow-xl ${
                        activeService === index
                          ? "border-l-[20px] border-green-900"
                          : "border-l-[20px] border-transparent"
                      }`}
                      onClick={() => setActiveService(index)}
                      onMouseOver={() => setActiveService(index)}
                      initial="hidden"
                      whileInView="visible"
                      variants={textVariants}
                      transition={{ duration: 1, ease: "easeInOut" }}
                    >
                      <div className="flex shadow-xl mb-4 shrink-0 w-3.5 h-[200px]" />
                      <div className="flex flex-col grow shrink-0 self-end mt-12 basis-0 w-fit">
                        <div className="self-start text-4xl font-bold tracking-tighter leading-none">
                          {service.id}. {service.title}
                        </div>
                        <div className="mt-8 text-lg leading-6">
                          {service.description}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div 
                className="flex flex-col ml-5 w-6/12"
                initial="hidden"
                whileInView="visible"
                variants={textVariants}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.8 }}
              >
                <img
                  loading="lazy"
                  srcSet={services[activeService].image}
                  className="object-cover self-stretch my-auto w-full aspect-[1.36]"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <motion.div 
          className="md:hidden flex flex-col justify-center items-center py-10 px-4 bg-black w-full"
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center">
            <img
              src={activeDiv.image}
              alt={activeDiv.title}
              className="w-full h-41 mb-4 rounded-t object-cover max-w-full"
            />
            <div className="flex justify-between items-center w-full">
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  className={`flex flex-col items-center p-4 border-b-8 border-white mx-2 cursor-pointer ${
                    activeService === service.id - 1 ? "border-green-500" : ""
                  }`}
                  onClick={() => setActiveService(service.id - 1)}
                  onMouseOver={() => setActiveService(service.id - 1)}
                  initial="hidden"
                  whileInView="visible"
                  variants={textVariants}
                  transition={{ duration: 1, ease: "easeInOut" }}
                >

                  <div className="text-xl flex justify-center items-center text-center text-white font-semibold">{service.title}</div>
                </motion.div>
              ))}
            </div>
            <div className="mt-4 px-10 text-center text-white flex justify-center items-center rounded shadow-md w-full">
              <p>{activeDiv.description}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Services;
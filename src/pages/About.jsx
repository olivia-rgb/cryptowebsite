import React from 'react'
import Footer from "../components/UI/Footer"
import Navbar from "../components/UI/Navbar"
import { motion } from "framer-motion";


function About() {

  const cryptoData = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d02c0fe42cd9f070a1597f05e01f5b6239cbcab5d2c9e504ac5515b9b43a482a",
      alt: "BTC",
      name: "BTC",
      description: "Bitcoin",
      price: "$62,682.6055",
      change: "-3.45%",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9d904c35c4fbee11b031fe028adfa330db0a5db561a1ad57acb06d8046a681d7",
      alt: "ETH",
      name: "ETH",
      description: "Ethereum",
      price: "$3,027.8116",
      change: "-3.79%",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/29d1d6ebe015add68bb3fb8d9a892c31ba05874cf944eb648aad9fdb1ca78266",
      alt: "USDT",
      name: "USDT",
      description: "Tether USDt",
      price: "$0.9990",
      change: "-0.08%",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6bd9dddc081bbcbaa2342a2412e890a10ff6968fde6afaa34d3d586b2ed85192",
      alt: "BNB",
      name: "BNB",
      description: "BNB",
      price: "$557.5287",
      change: "-2.84%",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/494b5c8e9acd1df265425c21cb424da27847b37e0d15e17acef4c38c35615327",
      alt: "SOL",
      name: "SOL",
      description: "Solana",
      price: "$157.0529",
      change: "-5.11%",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/494b5c8e9acd1df265425c21cb424da27847b37e0d15e17acef4c38c35615327",
      alt: "USDC",
      name: "USDC",
      description: "USDC",
      price: "$0.9999",
      change: "0.05%",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4cedc8ba63808c4e6cf778789a1197a5f9ce3f22ba9ee7a9138f9048d3d1de03",
      alt: "XRP",
      name: "XRP",
      description: "XRP",
      price: "$0.5577",
      change: "-2.91%",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef46922136b2996f4fbe9f45f36f74663b67cf80a703a64d6efde8a860160c33",
      alt: "DOGE",
      name: "DOGE",
      description: "Dogecoin",
      price: "$0.1125",
      change: "-4.64%",
    },
  ];
  
  return (
    <div>
        <div
      className="relative flex flex-col items-center justify-start w-full bg-cover bg-center"
      style={{ backgroundImage: 'url("/src/img/bg-img/bgc1.jpeg")' }}
    >
        <Navbar />
        
        <div
      className="relative flex flex-col items-center justify-start w-full bg-cover bg-center"
      style={{ backgroundImage: 'url("/src/img/bg-img/bgc1.jpeg")' }}
    >
<div className="flex gap-5 mt-40 px-4 md:px-20 max-md:flex-col">
  <motion.div
    className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, ease: "easeInOut" }}
  >
    <div className="flex flex-col items-start self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
      <motion.div
        className="text-5xl font-bold leading-tight text-white"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        Financial Growth
      </motion.div>
      <motion.div
        className="mt-3 text-3xl text-neutral-300"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        via 3 Core Services
      </motion.div>
      <div className="flex gap-5 mt-16 max-md:mt-10">
        <motion.div
          className="text-3xl font-black leading-none text-white"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          
        </motion.div>
        <motion.div
          className="text-2xl leading-tight font-bold text-white basis-auto"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Spot Trade
        </motion.div>
      </div>
      <motion.div
        className="self-stretch mt-4 ml-12 text-base leading-6 text-neutral-300 max-md:mr-1.5 max-md:max-w-full"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        Experience seamless and secure spot trading with Royal Assets. Our
        <br />
        platform provides real-time market access, ensuring you never miss
        a<br />
        trading opportunity.
      </motion.div>
      <div className="flex items-center gap-3 mt-12 max-md:mt-10">
        <motion.div
          className="grow text-3xl font-black leading-none text-white"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          
        </motion.div>
        <motion.div
          className="self-start text-3xl font-bold leading-tight text-white"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          AI Bots
        </motion.div>
      </div>
      <motion.div
        className="self-stretch mt-3.5 ml-12 text-base leading-6 text-neutral-300 max-md:max-w-full"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        Maximize your trading potential with our cutting-edge AI bots.
        <br />
        Powered by advanced algorithms, our bots analyze market trends and
        <br />
        execute trades with precision, giving you a competitive edge.
      </motion.div>
      <div className="flex gap-3 mt-12 max-md:mt-10">
        <motion.div
          className="text-3xl items-center font-black leading-none text-white"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          
        </motion.div>
        <motion.div
          className="text-3xl font-bold leading-tight text-white basis-auto"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          P2P Trading
        </motion.div>
      </div>
      <motion.div
        className="self-stretch mt-4 mr-11 ml-12 text-base leading-6 text-neutral-300 max-md:mr-2.5 max-md:max-w-full"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        Join a community of traders and investors with our peer-to-peer
        <br />
        trading feature. Trade directly with other users, expanding your
        <br />
        network and diversifying your trading options.
      </motion.div>
    </div>
  </motion.div>
  <motion.div
    className="flex flex-col justify-center items-center ml-5 w-[55%] max-md:ml-0 max-md:w-full"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, ease: "easeInOut" }}
  >
    <img src="/src/img/other-img/istock1.jpg" alt="" />
  </motion.div>
</div>
</div>


<div className="flex flex-col justify-center my-5 items-center px-20 py-10 mt-10 max-md:px-5 max-md:py-24" style={{
  background: "linear-gradient(135deg, #064e3b, black, #064e3b)", // Dark green to black gradient
}}>
  <div className="flex flex-col max-w-full w-full lg:w-[1296px]">
    <div className="self-center text-5xl font-bold leading-tight text-center text-white max-md:text-4xl">
      Stay in the know
    </div>
    <div className="self-center mt-8 text-xl leading-8 text-center text-neutral-400 max-md:max-w-full">
      Royal Assets keeps you informed in real-time about leading
      <br />
      cryptocurrencies
    </div>
    <div className="mt-14 max-md:mt-10">
      <div className="grid grid-cols-4 gap-5 max-md:grid-cols-1">
        {cryptoData.map((item, index) => (
          <div key={index} className="flex flex-col w-full bg-black rounded-xl p-5">
            <div className="flex gap-4 items-start text-base whitespace-nowrap">
              <img
                loading="lazy"
                srcSet={`${item.src}?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=100 100w, ${item.src}?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=200 200w, ${item.src}?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=400 400w, ${item.src}?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=800 800w, ${item.src}?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=1200 1200w, ${item.src}?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=1600 1600w, ${item.src}?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=2000 2000w`}
                className="object-contain rounded-2xl aspect-square w-[30px]"
                alt={item.alt}
              />
              <div className="flex flex-col mt-1.5">
                <div className="font-medium leading-tight text-white">
                  {item.name}
                </div>
                <div className="mt-2.5 text-neutral-400">{item.description}</div>
              </div>
            </div>
            <div className="mt-8 text-lg font-semibold leading-tight text-red-500">
              {item.price}<span className="text-neutral-400"> - </span>{item.change}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

    
<div className="flex gap-5 px-20 py-5 max-md:flex-col max-md:px-5">
  <div className="w-[50%] justify-center items-center max-md:w-full">
    <div className="pl-5">
      <div className="text-5xl font-bold leading-tight text-white max-md:text-4xl">
        How to Invest?
      </div>
      <div className="mt-4 text-xl text-neutral-400 max-md:mt-5">
        Start trading and grow your portfolio with Royal Assets
      </div>
    </div>

    <div className="mt-10 space-y-6 max-md:mt-10">
      <div className="flex gap-5 items-start">
        <div className="w-12 h-12 flex items-center justify-center text-2xl text-white bg-black rounded-3xl border border-solid border-white border-opacity-50">
          1
        </div>
        <div className="flex flex-col">
          <div className="text-2xl text-white">
            Sign Up On Royal Assets
          </div>
          <div className="mt-3 text-base text-neutral-400">
            Registering an account here is very simple, just a few fields
          </div>
        </div>
      </div>

      <div className="flex gap-5 items-start">
        <div className="w-12 h-12 flex items-center justify-center text-2xl text-white bg-black rounded-3xl border border-solid border-white border-opacity-50">
          2
        </div>
        <div className="flex flex-col">
          <div className="text-2xl text-white">
            Verify Your Account
          </div>
          <div className="mt-3 text-base text-neutral-400">
            Verify your account to enable you access to all features
          </div>
        </div>
      </div>

      <div className="flex gap-5 items-start">
        <div className="w-12 h-12 flex items-center justify-center text-2xl text-white bg-black rounded-full border border-solid border-white border-opacity-50">
          3
        </div>
        <div className="flex flex-col">
          <div className="text-2xl text-white">
            Deposit / Buy Crypto
          </div>
          <div className="mt-3 text-base text-neutral-400">
            Fund your cryptocurrency account to begin trading. A wide variety of payment methods are supported.
          </div>
        </div>
      </div>

      <div className="flex gap-5 items-start">
        <div className="w-12 h-12 flex items-center justify-center text-2xl text-white bg-black rounded-full border border-solid border-white border-opacity-50">
          4
        </div>
        <div className='flex flex-col'>
        <div className="text-2xl text-white">Trade</div>
        <div className="text-base text-neutral-400">
          Start buying and selling cryptocurrencies, and explore even more Royal Assets products and services!
        </div>
        </div>
      </div>
        <div className=" px-8 py-4 text-lg font-bold text-center  w-[200px] bg-white text-green-900 rounded-lg border border-solid max-md:px-5 max-md:mt-5">
          Get Started
        
      </div>
    </div>
  </div>

  <div className="flex justify-center items-center ml-5 w-[50%] max-md:ml-0 max-md:w-full">
    <img src="/src/img/other-img/how4.png" alt="" />
  </div>
</div>  


<div
    className="w-full px- py-10 bg-cover bg-center"
    style={{ backgroundImage: 'url("/src/img/bg-img/bgc1.jpeg")' }}
    >
<motion.div
  initial={{ opacity: 0, y: 200 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 1 }}
  className="w-full"
>
  <div className="w-full mx-auto py-20">
    <div className="text-5xl font-bold leading-10 pb-20 text-white text-center">
      Why Fidelity Expert Coin?
    </div>

    <div className="max-w-full mx-auto">
      <div className="flex flex-col md:flex-row md:gap-10">

        {/* 24/7 Customer Service */}
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="flex flex-col items-center md:w-3/12 max-md:w-full"
        >
          <div className="flex justify-center items-center h-16">
            <div className="text-5xl text-white font-black leading-none max-md:text-4xl">
              
            </div>
          </div>
          <div className="mt-8 text-2xl text-white font-semibold leading-tight">
            24/7 Customer Service
          </div>
          <div className="mt-6 text-base leading-6 text-white text-opacity-80 text-center md:text-left">
            Contact Royal Assets customer
            <br />
            support with your questions at
            <br />
            any time.
          </div>
        </motion.div>

        {/* Prime Membership */}
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="flex flex-col items-center mt-10 md:mt-0 md:w-3/12 max-md:w-full"
        >
          <div className="flex justify-center items-center h-16">
            <div className="text-5xl text-white font-black leading-none max-md:text-4xl">
              
            </div>
          </div>
          <div className="mt-8 text-2xl text-white font-semibold leading-tight">
            Prime Membership
          </div>
          <div className="mt-6 text-base leading-6 text-white text-opacity-80 text-center md:text-left">
            We offer Prime Membership with
            <br />
            our dedicated trading expert.
          </div>
        </motion.div>

        {/* Fidelity Community */}
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex flex-col items-center mt-10 md:mt-0 md:w-3/12 max-md:w-full"
        >
          <div className="flex justify-center items-center h-16">
            <div className="text-5xl text-white font-black leading-none max-md:text-4xl">
              
            </div>
          </div>
          <div className="mt-8 text-2xl text-white font-semibold leading-tight">
            Fidelity Community
          </div>
          <div className="mt-6 text-base leading-6 text-white text-opacity-80 text-center md:text-left">
            There is an excellent team behind
            <br />
            Royal Assets, and we adore
            <br />
            communicating with our users!
          </div>
        </motion.div>

        {/* Fidelity AI Bots */}
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="flex flex-col items-center mt-10 md:mt-0 md:w-3/12 max-md:w-full"
        >
          <div className="flex justify-center items-center h-16">
            <div className="text-5xl text-white font-black leading-none max-md:text-4xl">
              
            </div>
          </div>
          <div className="mt-8 text-2xl text-white font-semibold leading-tight">
            Fidelity Investment Bots
          </div>
          <div className="mt-6 text-base leading-6 text-white text-opacity-80 text-center md:text-left">
            We made it even
            <br />
            easier to make money with the
            <br />
            help of our revolutionary AI bots.
          </div>
        </motion.div>

      </div>
    </div>
  </div>
</motion.div>
</div>

<div className="flex flex-col md:flex-row overflow-hidden px-5 py-2.5 rounded-xl" style={{
  background: "linear-gradient(135deg, #064e3b, black, #064e3b)", // Dark green to black gradient
}}>
  
  <img
    src="/src/img/other-img/contabout.png"
    alt=""
    className="w-full md:w-[60%] object-cover rounded-lg"
  />

  
  <div className="flex flex-col justify-center md:w-[40%]">
    <div className="self-start mt-1 text-base text-neutral-400">
      Get Started Today
    </div>
    <div className="self-start mt-6 text-4xl font-semibold text-white leading-[49px] max-md:max-w-full">
      Subscribe to our newsletter &<br />
      Stay Updated
    </div>
    <div className="flex flex-col md:flex-row gap-5 mt-11 max-md:mt-10">
      <div className="flex-1 px-4 py-5 text-base bg-black rounded-lg border border-solid border-zinc-900 text-neutral-400">
        Enter your email
      </div>
      <div className="px-14 py-5 text-lg font-light leading-none text-center text-white whitespace-nowrap bg-green-900 rounded-xl border border-solid font-bold">
        Submit
      </div>
    </div>
  </div>
</div>

    </div>
  
  <Footer />
  
      </div> 
    
  )
}
export default About;
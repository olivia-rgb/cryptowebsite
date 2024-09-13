import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import spotbg from "../../img/slider-img/spotbg.png";
import spotbg1 from "../../img/slider-img/spotbg1.png";
import spotbg2 from "../../img/slider-img/spotbg2.png";
import peer1 from "../../img/p2p-img/p2p1.jpg";
import peer8 from "../../img/p2p-img/p2p8.png";
import peer2 from "../../img/p2p-img/p2p2.jpg";
import peer3 from "../../img/p2p-img/p2p3.jpg";
import peer4 from "../../img/p2p-img/p2p6.png";
import peer5 from "../../img/p2p-img/p2p7.png";
import spot3 from "../../img/spot-bg/spot1.jpg";
import spot4 from "../../img/spot-bg/spot4.jpg";
import spot5 from "../../img/spot-bg/spot3.jpg";
import bot1 from "../../img/ai-img/ai.png";
import bot2 from "../../img/ai-img/ai2.png";
import bot3 from "../../img/ai-img/ai3.png";
import bot4 from "../../img/ai-img/ai5.png";
import mkt1 from "../../img/mkt-img/mkt1.png";
import mkt2 from "../../img/mkt-img/mkt2.png";
import mkt3 from "../../img/mkt-img/mkt3.png";
import slide3 from "../../img/slider-img/slider8.png"
import bit1 from  "../../img/other-img/rbit1.png"
import bit2 from  "../../img/other-img/rbit2.png"
import bit3 from  "../../img/other-img/rbit3.png"
import bit4 from  "../../img/other-img/rbit4.png"
import st1 from  "../../img/other-img/rst1.png"
import st2 from  "../../img/other-img/rst2.png"
import { TypeAnimation } from 'react-type-animation';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    video: '/video/cryptobg.mp4',
    content: {
      title: 'Secure Your Future\nwith Fidelity Investment',
      paragraph: 'Invest with confidence.\n\nFidelity Investment is trusted by thousands,\nproven, and reliable.\n\nOur solutions are designed to provide long-term stability and growth.\nExperience financial success with our trusted expertise.',
      buttons: ['Spot', 'Bot',],
      images: [bit3,bit1, bit3]
    },
  },
  {
    id: 2,
    video: '/video/bgg1.mp4',
    content: {
      title: 'Peer-to-Peer Trading',
      paragraph: 'Experience seamless peer-to-peer trading\nwith our advanced platform.\n\nOur system ensures high efficiency and security.\nTrade with ease and confidence.\nJoin our community of successful traders.',
      buttons: ['P2P', 'Trade Now'],
      images: [peer5, peer4, peer8]
    },
  },
  {
    id: 3,
    video: '/video/bgg2.mp4',
    content: {
      title: 'Efficient Spot Trading',
      paragraph: 'Dive into our efficient spot trading system\nfor fast and effective solutions.\n\nStay ahead with real-time data and insights.\nTrade confidently and securely.\nDiscover a new level of trading efficiency.',
      buttons: ['Spot', 'Trade Now'],
      images:  [ st1, st2 , st1]
    },
  },
  {
    id: 4,
    video: '/video/bgg3.mp4',
    content: {
      title: 'Trade with Our AI BOT',
      paragraph: 'Explore the future of cryptocurrency\nwith our comprehensive marketplace.\n\nOur AI BOT offers advanced trading strategies.\nAchieve your investment goals with precision.\nJoin now to experience the future of trading.',
      buttons: ['Bot', 'Trade Now'],
      images: [bot2, bot1 , bot3]
    },
  },
  {
    id: 5,
    video: '/video/bgg4.mp4',
    content: {
      title: 'Our Crypto Marketplace',
      paragraph: 'Explore cutting-edge solutions\nfor modern investment strategies.\n\nOur marketplace offers innovative tools\nfor successful investing.\nStay ahead in the crypto world with our solutions.',
      buttons: ['Market', 'Trade Now'],
      images: [mkt1, mkt2 , mkt3]
    },
  },
];

const navLabels = ['Fidelity', 'P2P', 'SPOT', 'BOT', 'MKT'];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Slide change interval

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };

  const { video, content } = slides[activeIndex];

  return (
    <div className="relative overflow-hidden w-full h-screen">
      {/* Video Slider */}
      <div
        className="relative flex transition-transform duration-1000 h-full w-full"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="flex-shrink-0 w-full h-full relative">
            <video
              src={slide.video}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-5"></div>
            {activeIndex === index && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white p-6 z-10 max-w-4xl w-full">
                <div className="relative z-20">
                  {/* Positioned Images */}
                  {/* Desktop view */}
                  <div className="hidden md:block absolute top-0 right-0 transform translate-x-[220px] -translate-y-[60px] z-10">
                    {content.images[0] && (
                      <img src={content.images[0]} alt="Top Right" className="w-64 h-auto object-cover" />
                    )}
                  </div>
                  <div className="hidden md:block absolute bottom-0 right-0 transform translate-x-[200px] translate-y-20 z-10">
                    {content.images[1] && (
                      <img src={content.images[1]} alt="Bottom Right" className="w-64 h-auto object-cover" />
                    )}
                  </div>
                  <div className="hidden md:block absolute bottom-0 left-0 transform -translate-x-[250px] -translate-y-34 z-10">
                    {content.images[2] && (
                      <img src={content.images[2]} alt="Bottom Left" className="w-64 h-auto object-cover" />
                    )}
                  </div>
                 
                  {/* Text Content */}
                  <div className="relative z-20 p-10 pb-56 md:pb-0">
                    <div className="text-[clamp(1.5rem,5vw,4rem)] font-bold mb-4 leading-snug whitespace-pre-line">
                      {content.title}
                    </div>
                    <div className="flex items-center justify-center mb-6">
                      <span className="text-[clamp(1rem,3vw,2rem)] font-bold mr-2">
                        Fidelity Investment is:
                      </span>
                      <TypeAnimation
                        sequence={[
                          "Trusted.",
                          1000,
                          "Proven.",
                          1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className="font-extralight italic text-[clamp(1rem,3vw,2rem)]"
                      />
                    </div>
                    <div className="hidden md:block text-[clamp(1rem,3vw,1.5rem)] mb-6 leading-relaxed">
                      {content.paragraph}
                    </div>
                    <div className="flex justify-center gap-4">
                        {content.buttons.map((button, buttonIndex) => (
                          <Link
                            key={buttonIndex}
                            to={button === 'Trade Now' ? '/spot' : `/${button.toLowerCase().replace(/\s+/g, '-')}`} // Navigate to Spot for 'Trade Now'
                            className="bg-white text-green-900 font-bold py-3 px-3 rounded-lg cursor-pointer transition-colors duration-300 hover:bg-gray-700 flex items-center"
                          >
                            {button}
                            <FaArrowRight className="ml-2 text-green-900" />
                          </Link>
                        ))}
                      </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-4 w-full flex justify-center z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-14 h-14 rounded-full border-2 ${index === activeIndex ? 'border-green-700 bg-white text-green-700' : 'border-white bg-transparent text-white'} flex items-center justify-center font-bold text-sm cursor-pointer transition-opacity duration-300`}
            onClick={() => handleButtonClick(index)}
          >
            {navLabels[index]}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
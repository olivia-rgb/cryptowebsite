import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAnglesLeft, FaAnglesRight } from 'react-icons/fa6';

// Sample review data array
const reviewData = [
  {
    title: "With Fidelity’s bot I feel that I have…",
    content: "With Fidelity's bot I feel that I have finally found a safe way to invest my money into the crypto market. The bot is easy to use and is always up-to-date. My problem was that I…",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7e106373e51caa6bf120a44cce17c0c56239f08a622cf1684f1f6cf2284c1220?apiKey=f417b8c00fe14582a1a201b8017683ae&&apiKey=f417b8c00fe14582a1a201b8017683ae",
    userImageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/301e0c4164abd7ba0f47e0388a2d7d50564dc279e0b587bbc7eb9883b16a365b?apiKey=f417b8c00fe14582a1a201b8017683ae&&apiKey=f417b8c00fe14582a1a201b8017683ae",
    userName: "Noah B."
  },
  {
    title: "Fidelity Investment is smart",
    content: "Fidelity Investment is smart, trust me. It can make you money consistently, even if you have no experience. I am a beginner when it comes to this. Thanks to Fidelity I am now…",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d828e15bdf69fc32b6e9d2c00410675d5a323e2d29177a3feeee09d826771f05?apiKey=f417b8c00fe14582a1a201b8017683ae&&apiKey=f417b8c00fe14582a1a201b8017683ae",
    userImageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d277bff89dd4afa022fb7f45602cda7f722d6d389e766e879c43ce24bdf79562?apiKey=f417b8c00fe14582a1a201b8017683ae&&apiKey=f417b8c00fe14582a1a201b8017683ae",
    userName: "Oliver H."
  },
  {
    title: "I’ve used a number of different trading…",
    content: "I’ve used a number of different trading bots but all of them have been pretty bad, until I found Fidelity Investment. Finally a bot that does more than just pump and dump coin…",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d78e926b342e9f3813ee4b9f1c52f441409dffd05092164c26172b09de2db0df?apiKey=f417b8c00fe14582a1a201b8017683ae&&apiKey=f417b8c00fe14582a1a201b8017683ae",
    userImageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/6b21f9d8b9a30382b841307b02e67e81bcfdba70d054578216cd643e8dec3101?apiKey=f417b8c00fe14582a1a201b8017683ae&&apiKey=f417b8c00fe14582a1a201b8017683ae",
    userName: "Linschoten"
  },
  {
    title: "I don’t have to manually trade anymore…",
    content: "I don’t have to manually trade anymore since I started using the Fidelity bot. It trades for me, according to my rules and filters, so now I am free to set it and forget it.…",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/9dd422d1394e17d5e7ca878bef6a3def38e58015f18589b0283dd0dd454d70a2?apiKey=f417b8c00fe14582a1a201b8017683ae&&apiKey=f417b8c00fe14582a1a201b8017683ae",
    userImageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/323be66ecfdf0397a763429c306db25ee883f05d6807f73706541e9d2e63ac22?apiKey=f417b8c00fe14582a1a201b8017683ae&&apiKey=f417b8c00fe14582a1a201b8017683ae",
    userName: "Jane D."
  }
];

const ReviewCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const itemsPerPage = window.innerWidth < 768 ? 2 : 4;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + reviewData.length) % reviewData.length
    );
  };

  const currentReviews = reviewData
    .slice(currentIndex, currentIndex + itemsPerPage)
    .concat(reviewData.slice(0, Math.max(0, currentIndex + itemsPerPage - reviewData.length)));

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('review-carousel');
      if (element) {
        const rect = element.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible(inView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="w-full py-20 bg-cover bg-center" style={{ backgroundImage: 'url("/img/bg-img/bgc1.jpeg")' }}>
      <h1 className="text-3xl md:text-5xl font-bold text-center text-white mb-8">
        Fidelity is Trusted by Thousands of People Worldwide
      </h1>
      <div 
        id="review-carousel" 
        className="flex flex-col w-full items-center justify-center p-4"
      >
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 200 }}
          transition={{ duration: 1.0, type: 'tween' }}
          className="relative w-full"
        >
          <div className="relative overflow-hidden">
            <div className={`grid ${itemsPerPage === 2 ? 'grid-cols-1' : 'grid-cols-4'} gap-4`}>
              <AnimatePresence initial={false}>
                {currentReviews.map((review, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-start bg-white shadow-2xl rounded-lg overflow-hidden md:max-w-3xl lg:max-w-3xl"
                    initial={{ opacity: 0, x: -200 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 200 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="p-4">
                      <h3 className="text-xl md:text-3xl font-bold text-green-900">{review.title}</h3>
                      <p className="text-gray-900 font-semibold text-sm md:text-lg my-4">{review.content}</p>
                      <div className="flex items-center mt-2">
                        <span className="text-green-900 text-lg md:text-3xl">★★★★★</span>
                      </div>
                      <div className="flex gap-2 items-center mt-4">
                        <img src={review.userImageSrc} alt={review.userName} className="w-8 h-8 md:w-12 md:h-12 rounded-full object-cover mr-2" />
                        <span className="text-gray-800 text-sm md:text-xl font-bold">{review.userName}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-green-700 text-white rounded-full shadow-md hover:bg-yellow-600"
            >
              <FaAnglesLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-green-700 text-white rounded-full shadow-md hover:bg-yellow-600"
            >
              <FaAnglesRight size={24} />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ReviewCarousel;

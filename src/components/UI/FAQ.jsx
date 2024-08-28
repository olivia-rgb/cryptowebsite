import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaQuestion } from 'react-icons/fa';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How much profit can I make with your crypto bot?",
      answer:
        "Profit potential depends on various factors including market conditions, investment amount, and the trading strategy used. Our bot aims to maximize returns while managing risk, but past performance is not a guarantee of future results.",
    },
    {
      question: "Where will my funds be stored?",
      answer:
        "Your funds are stored securely in reputable exchanges and wallets. We use advanced security measures to ensure your assets are protected against unauthorized access.",
    },
    {
      question: "What makes your trading bot better than others?",
      answer:
        "Our bot uses advanced algorithms and machine learning to analyze market trends and make informed trading decisions. We continuously update our technology to stay ahead of the market and provide a competitive edge.",
    },
    {
      question: "Do I need to trade myself or receive prior training?",
      answer:
        "You do not need prior training to use our bot. It is designed to operate autonomously, but we offer resources and support to help you understand how it works and make the most of its features.",
    },
    {
      question: "How can I be sure that your bot is not outdated?",
      answer:
        "We regularly update our bot to incorporate the latest market data and trading strategies. Our team of experts continually monitors performance and makes improvements to ensure it remains effective.",
    },
    {
      question: "What is the minimum amount to invest?",
      answer:
        "The minimum investment amount varies depending on the specific trading strategy and platform used. We offer flexible options to accommodate different investment levels.",
    },
    {
      question: "How soon can I withdraw my profits?",
      answer:
        "Withdrawal times depend on the exchange or wallet you are using. Generally, you can withdraw profits within a few business days. We recommend checking the specific withdrawal policies of your chosen platform.",
    },
    // Add more questions as needed
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full my-5 bg-cover bg-center" style={{ backgroundImage: 'url("/img/bg-img/bgc1.jpeg")' }}>
    <div className="w-full flex flex-col items-center p-4 py-20 ">
      <div className="w-full lg:w-4/5">
        <h2 className="text-xl md:text-5xl font-bold mb-11 text-white text-center flex justify-center items-center gap-1">
          Frequently Asked Questions
          <FaQuestion className="text-white animate-pulse" />
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="border rounded-lg text-white font-bold text-xl md:text-3xl shadow-lg hover:shadow-xl"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 py-3 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="text-xl  md:2xl font-medium">{faq.question}</span>
                <span>{activeIndex === index ? "-" : "+"}</span>
              </button>
              {activeIndex === index && (
                <div className="px-4 py-7 bg-black">
                  <p className="text-lg">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default FAQSection;

import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center bg-gray-900 text-white h-screen overflow-hidden">
      {/* Title and Content */}
      <div className="relative z-10 text-center max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold mb-4">Empower Your Investments with Us</h1>
        <p className="text-lg mb-6">
          Join us to take advantage of the latest in crypto trading technology. Secure, efficient, and tailored to your needs.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </div>
       {/* Mobile view */}
       <div className="block md:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[40px] z-10">
                    {content.images[0] && (
                      <img src={content.images[0]} alt="Bottom Image" className="w-56 h-auto object-cover" />
                    )}
                  </div>

      {/* Top Right Image */}
      <div className="absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2 w-1/6 h-1/6 bg-red-500 z-0"></div>

      {/* Bottom Left Image */}
      <div className="absolute bottom-1/2 left-0 transform -translate-x-1/4 translate-y-1/2 w-1/6 h-1/6 bg-green-500 z-0"></div>

      {/* Bottom Right Image */}
      <div className="absolute bottom-1/2 right-0 transform translate-x-1/4 translate-y-1/2 w-1/6 h-1/6 bg-blue-500 z-0"></div>
    </section>
  );
};

export default HeroSection;

import React, { Suspense, lazy } from "react";
import BackgroundImage from "../../img/bg-img/bgc1.jpeg"; // Update the path to your background image

// Dynamically import the AnimatedNumbers component
const AnimatedNumbers = lazy(() => import("react-animated-numbers"));

const figuresList = [
  {
    metric: "Countries",
    value: "190",
  },
  {
    metric: "Business",
    value: "200",
  },
  {
    metric: "Payments",
    value: "100",
  },
  {
    metric: "Projects",
    value: "500",
  },
];

const Figures = () => {
  return (
    <div 
      className="relative my-5 xl:gap-16 sm:py-16 xl:px-16 w-full bg-cover bg-center" 
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      {/* Blue triangle icon at the beginning */}
      <div className="absolute top-0 left-0 w-16 h-16 bg-yellow rotate-45 transform -translate-x-1/2 -translate-y-1/2 shadow-lg"></div>
      
      {/* Blue triangle icon at the end */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-400 rotate-45 transform translate-x-1/2 -translate-y-1/2 shadow-lg"></div>

      <div className="px-8 grid grid-cols-2 gap-4 md:grid-cols-4 relative z-10">
        {figuresList.map((figure, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4 my-4  sm:my-0 w-full sm:w-auto "
          >
            <h2 className="text-white text-4xl font-bold flex flex-row pb-8">
              {/* The Suspense fallback provides a loading indicator */}
              <Suspense fallback={<div>Loading...</div>}>
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(figure.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold "
                  configs={(_, index) => ({
                    mass: 1,
                    friction: 80,
                    tensions: 140 * (index + 1),
                  })}
                />
              </Suspense>
              <span className="text-white">M</span>
            </h2>
            <p className="text-white text-2xl pt-8 border-t font-semibold">{figure.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Figures;

import * as React from "react";
import Aboutbg from "../../img/bg-img/bgc12.jpeg";
import AboutVideo from "../../img/chart-video.mp4"; // Make sure you have the video in the specified path

function About() {
  return (
    <div className="relative w-full bg-cover bg-center" style={{ backgroundImage: `url(${Aboutbg})` }}>
      <div className="flex gap-5 w-[80%] mx-auto max-md:flex-col px-8 ">
        <div className="flex flex-col justify-center w-[50%] max-md:w-full">
          <div className="flex flex-col px-5 text-lg text-white max-md:mt-10">
            <div className="text-5xl font-bold leading-[52px] max-md:text-4xl max-md:leading-10">
              At Fidelity Investment
              <br />
              Innovation meets Trading
              <br />
              We Outperform Bitcoin
            </div>
            <div className="mt-9 leading-6">
              Bitcoin's value may fluctuate, but with
              <br />
              Fidelity Investment our next-generation AI
              <br />
              bot can also help you profit regardless
              <br />
              of market conditions. Investing with
              <br />
              Wealth Vista is far superior to relying
              <br />
              solely on your intuition. You have the
              <br />
              option to trade with our industry-
              <br />
              leading spot trader. Our spot trader
              <br />
              platform combines insightful analysis
              <br />
              and an intuitive layout to maximize
              <br />
              your trading potential.
            </div>
            <div className="flex gap-5 w-[300px] justify-center px-5 text-center py-6 mt-5 font-medium rounded-2xl text-green-700 bg-white">
              <div className="flex-auto">Trade right Now</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6876e34ced2133ac5c0c46414efb3ea6ec2d923f14644fdafc1debfdb1e803c0?apiKey=f417b8c00fe14582a1a201b8017683ae&&apiKey=f417b8c00fe14582a1a201b8017683ae"
                className="shrink-0 aspect-[1.43] w-[23px]"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center w-[50%] max-md:w-full">
          <video className="w-full" controls>
            <source src={AboutVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default About;

import * as React from "react";
import { MdEmail } from "react-icons/md"; // Import the React icon

function Contact() {
  return (
    <div
      className="relative flex flex-col items-center justify-start w-full my-5 bg-cover bg-center"
      style={{ backgroundImage: 'url("/img/bg-img/bgc1.jpeg")' }}
    >
      <div className="flex flex-col items-center w-full max-w-[1200px] px-20 pt-12 pb-24 text-lg text-white max-md:px-4 max-md:pt-8 max-md:pb-16">
        <div
          className="flex flex-col justify-center items-center w-full px-20 py-28 rounded-xl shadow-lg max-w-full max-md:px-4 max-md:py-10"
          style={{
            background: "linear-gradient(135deg, #064e3b, black, #064e3b)", // Dark green to black gradient
          }}
        >
          <div className="flex flex-col items-center w-full max-w-[833px]">
            <div className="text-6xl font-bold tracking-tighter leading-none text-center max-md:text-2xl max-md:leading-snug">
              Need to hear from us directly?
            </div>
            <div className="mt-5 text-center max-md:mt-2 max-md:text-base">
              Get in touch with one of our experts via our corporate email channel
            </div>
            <div className="flex gap-3 items-center px-6 py-3 mt-6 font-medium rounded-2xl bg-white text-green-600 max-md:gap-2 max-md:px-4 max-md:py-2 max-md:mt-4">
              <div>Send Mail</div>
              <MdEmail size={23} className="shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

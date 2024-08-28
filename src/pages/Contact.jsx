import React from 'react'

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-white bg-cover bg-center" 
         style={{ backgroundImage: 'url("/img/bg-img/bgc1.jpeg")' }} // Replace with your background image source
    >
      <div className="flex flex-col items-center text-center w-[54%] max-w-full mt-24">
        <h1 className="text-5xl font-bold leading-tight max-md:text-4xl">
          We Would Love To Hear From You.
        </h1>
        <p className="mt-10 text-xl leading-8 text-neutral-400 max-md:max-w-full max-md:mx-2.5">
          In case you have questions regarding your Royal Assets account or need support, 
          please contact us. We're here to assist you 7 days a week.
        </p>
      </div>


            {/* Contact Us Section */}
            <div className="w-full flex flex-col justify-center items-center mt-10 p-6 ">
        <div className="w-full lg:w-4/5 flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-1/2 p-4">
            <img
              src="/img/other-img/contabout.png"
              alt="Contact Us"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <form className="flex flex-col">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
              ></textarea>
              <button
                type="submit"
                className="p-3 bg-green-900 text-white rounded-md hover:bg-green-900"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>




    </div>
  );
}

export default Contact;

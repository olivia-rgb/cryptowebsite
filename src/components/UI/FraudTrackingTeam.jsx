import React from 'react';
import { Link } from 'react-router-dom';


const FraudTrackingTeam = () => {
  return (
    <>
    
      {/* Fidelity Fraud Tracking Team Section */}
      <section className="flex flex-col items-center justify-center py-6">
        <div className="w-full">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Fidelity Fraud Tracking Team</h2>
          
          {/* Content */}
          <div className="flex flex-col md:flex-row max-w-[1600px] mx-auto">
            {/* Image Section */}
            <div className="w-full md:w-3/5">
              <img 
                src="/img/other-img/cyberrr.png" 
                alt="Fraud Tracking" 
                className="w-full h-[250px] md:h-[520px] object-cover shadow-lg"
              />
            </div>
            
            {/* Text Section */}
            <div className="w-full text-white bg-green-700 md:w-2/5 text-center justify-center md:text-left">
              <h3 className="text-xl md:text-3xl py-10 font-bold text-center">Report Any Suspicious Activities</h3>
              <p className="text-white text-[clamp(1rem,3vw,1.5rem)] font-semibold mb- px-4">
                We are committed to ensuring the safety and security of our community. If you suspect any fraudulent activity such as money laundering or other suspicious behavior, please file a report. 
                Fidelity offers a detailed form where users can submit information directly to our tracking team, with the option to upload evidence and provide a detailed report. Your vigilance helps protect everyone, and together, we can maintain a secure environment.
              </p>
              
              {/* File a Complaint Button */}
              <div className="flex py-2 justify-center">
                <Link to="/fraud" className="bg-white text-xl hover:bg-green-900 hover:text-white text-green-700 font-bold py-3 px-10 rounded-lg shadow-md">
                  File a Complaint
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-10 bg-gray-100">
        <div className="max-w-[1600px] mx-auto px-4">
          {/* Title */}
          <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
          
          {/* Team Members */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {/* Team Member 1 */}
            <div className=" shadow-lg rounded-lg p-6 text-center">
              <img 
                src="/img/other-img/team.png" 
                alt="Team Member 1" 
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <h3 className="text-xl font-bold mt-4">John Doe</h3>
              <p className="text-gray-700">Lead Investigator</p>
            </div>
            
            {/* Team Member 2 */}
            <div className=" shadow-lg rounded-lg p-6 text-center">
              <img 
                src="/img/other-img/team2.png" 
                alt="Team Member 2" 
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <h3 className="text-xl font-bold mt-4">Jane Smith</h3>
              <p className="text-gray-700">Forensic Analyst</p>
            </div>

            {/* Team Member 3 */}
            <div className=" shadow-lg rounded-lg p-6 text-center">
              <img 
                src="/img/other-img/team3.png" 
                alt="Team Member 3" 
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <h3 className="text-xl font-bold mt-4">Mike Johnson</h3>
              <p className="text-gray-700">Cybersecurity Expert</p>
            </div>

            {/* Team Member 4 */}
            <div className=" shadow-lg rounded-lg p-6 text-center">
              <img 
                src="/img/other-img/team5.png" 
                alt="Team Member 4" 
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <h3 className="text-xl font-bold mt-4">Sara Williams</h3>
              <p className="text-gray-700">Compliance Officer</p>
            </div>

            {/* Team Member 5 */}
            <div className=" shadow-lg rounded-lg p-6 text-center">
              <img 
                src="/img/other-img/team6.png" 
                alt="Team Member 5" 
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <h3 className="text-xl font-bold mt-4">Alex Lee</h3>
              <p className="text-gray-700">Fraud Prevention Specialist</p>
            </div>

            {/* Team Member 6 */}
            <div className=" shadow-lg rounded-lg p-6 text-center">
              <img 
                src="/img/other-img/team4.png" 
                alt="Team Member 6" 
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <h3 className="text-xl font-bold mt-4">Emily Carter</h3>
              <p className="text-gray-700">Data Analyst</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FraudTrackingTeam;

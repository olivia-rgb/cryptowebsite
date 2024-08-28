import * as React from "react";
import { GrShieldSecurity } from "react-icons/gr";
import { SiGoogleanalytics } from "react-icons/si";
import { GiPadlock } from "react-icons/gi";
import { GoGraph } from "react-icons/go";
import { LuBadgeInfo } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";
import { motion } from "framer-motion";

const titleVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

const featureVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6 },
  }),
};

function BotFeatures() {
  return (
    <div
      className="w-full py-10 bg-cover bg-center"
      style={{ backgroundImage: 'url("/img/bg-img/bgc1.jpeg")' }}
    >
      <div className="flex flex-col justify-center items-center px-20 py-56 max-md:px-5 max-md:py-24">
        <div className="flex flex-col max-w-full w-[1239px]">
          {/* Title Animation */}
          <motion.div
            className="self-start text-6xl font-bold tracking-tighter text-white leading-[68px] max-md:max-w-full max-md:text-4xl max-md:leading-[49px]"
            initial="hidden"
            whileInView="visible"
            variants={titleVariants}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            The Ultimate Bot -<br />
            All the Features
          </motion.div>

          {/* Features Animation */}
          <div className="mt-36 max-md:mt-10 max-md:mr-2 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              {[
                {
                  icon: <GrShieldSecurity className="text-3xl font-bold" />,
                  title: "Security",
                  description:
                    "Multilevel security that ensures fund protection both at exchange and with bot.",
                },
                {
                  icon: <SiGoogleanalytics className="text-3xl font-bold" />,
                  title: "Analytics",
                  description:
                    "Clear display of bot performance as compared to Bitcoin.",
                },
                {
                  icon: <GiPadlock className="text-3xl font-bold" />,
                  title: "Low risk",
                  description:
                    "Not a get-rich scheme but a long-term investment.",
                },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col w-[33%] max-md:w-full"
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  variants={featureVariants}
                >
                  <div className="flex flex-col items-start text-white max-md:mt-10">
                    {feature.icon}
                    <div className="mt-3 text-4xl font-bold tracking-tighter leading-tight">
                      {feature.title}
                    </div>
                    <div className="mt-5 text-lg leading-6">
                      {feature.description.split("\n").map((line, idx) => (
                        <div key={idx}>{line}</div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Additional Features Animation */}
          <div className="mt-24 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              {[
                {
                  icon: <GoGraph className="text-3xl font-bold" />,
                  title: "Consistent result",
                  description:
                    "Make money regardless of volatility or market type.",
                },
                {
                  icon: <LuBadgeInfo className="text-3xl font-bold" />,
                  title: "Privacy",
                  description:
                    "We do not share any of your information without permission.",
                },
                {
                  icon: <BiSupport className="text-3xl font-bold" />,
                  title: "Live support",
                  description:
                    "Support at every level means you never feel alone.",
                },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col w-[33%] max-md:w-full"
                  custom={i + 3}
                  initial="hidden"
                  whileInView="visible"
                  variants={featureVariants}
                >
                  <div className="flex flex-col items-start text-white max-md:mt-10">
                    {feature.icon}
                    <div className="mt-3 text-4xl font-bold tracking-tighter leading-tight">
                      {feature.title}
                    </div>
                    <div className="mt-5 text-lg leading-6">
                      {feature.description.split("\n").map((line, idx) => (
                        <div key={idx}>{line}</div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BotFeatures;

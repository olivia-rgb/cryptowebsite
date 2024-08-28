import * as React from "react";
import { motion } from "framer-motion";
import Image2 from '../../img/feat-img/feat1.png';
import Image4 from '../../img/feat-img/feat2.png';
import Image1 from '../../img/feat-img/feat3.png';
import Image5 from '../../img/feat-img/marketww.png';
import Image6 from '../../img/feat-img/fide2.png';

function Featured() {
  const images = [Image4, Image2, Image6, Image5, Image1]; // Use imported images

  const containerWidth = 1000; // Adjust this value based on your container's width
  const imageWidth = 150; // Width of each image
  const gap = 20; // Gap between images
  const totalImagesWidth = images.length * (imageWidth + gap);
  const duration = (totalImagesWidth + containerWidth) / containerWidth * 10; // Adjusted duration

  const imagesTwice = [...images, ...images]; 

  return (
    <div className="flex gap-5 justify-between bg-white px-5 w-full overflow-hidden">
      <motion.div
        className="flex gap-5 bg-white items-center"
        animate={{ x: [`${containerWidth}px`, `-${totalImagesWidth}px`] }} // Animation from right to left
        transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
      >
        {imagesTwice.map((src, index) => (
          <img
            key={index}
            loading="lazy"
            src={src}
            className="shrink-0 my-auto w-[150px] h-[112.5px]" // Consistent width and height
            style={{ marginLeft: gap / 2, marginRight: gap / 2 }}
            alt={`Featured ${index}`}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default Featured;

import React from "react";
import { motion } from "framer-motion";

const Card = ({image, githublink, liveSiteLink}) => {

  return (
    <>
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: '0 8px 24px rgba(0, 255, 209, 0.2)' }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-md bg-neutral-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-neutral-800 hover:border-teal-500 transition-colors duration-300"
    >
      <div className="relative w-full h-48">
        <img
          src={image}
          alt="Project preview"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 to-transparent"></div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mt-4">
          <motion.a
            href={liveSiteLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, backgroundColor: '#2dd4bf', color: '#1f2937' }}
            transition={{ duration: 0.2 }}
            className="px-4 py-2 bg-neutral-800 text-teal-400 rounded-full text-sm font-medium"
          >
            Live Site
          </motion.a>
          <motion.a
            href={githublink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, backgroundColor: '#2dd4bf', color: '#1f2937' }}
            transition={{ duration: 0.2 }}
            className="px-4 py-2 bg-neutral-800 text-teal-400 rounded-full text-sm font-medium"
          >
            GitHub
          </motion.a>
        </div>
      </div>
    </motion.div>
    </>
  );
};

export default Card;

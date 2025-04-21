import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import imgPort3 from "../assets/myImg.jpg";

const Home = () => {
  const workRoles = useRef(null);

  useEffect(() => {
    const typed = new Typed(workRoles.current, {
      strings: [
        "Full Stack Engineer",
        "Coding Enthusiast",
        "Quick Learner",
        "Backend Developer",
      ],
      startDelay: 300,
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1000,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
<div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 px-4 lg:px-8 py-16">
  <motion.div
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
  >
    <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
      Harminder{" "}
      <span className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
        Saini
      </span>
    </h1>
    <p className="text-xl lg:text-2xl text-neutral-300 mb-4 font-light">
      I'm a passionate
    </p>
    <span
      ref={workRoles}
      className="text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent min-h-[2.5rem] mb-6"
    ></span>
    {/* <motion.a
      href="#projects"
      whileHover={{ scale: 1.1, backgroundColor: "#14b8a6" }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="mt-4 px-8 py-4 bg-teal-500 text-neutral-900 rounded-full font-semibold text-lg shadow-xl hover:shadow-teal-400/50 transition-colors duration-300"
    >
      Explore My Work
    </motion.a> */}
  </motion.div>

  <motion.div
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    className="w-full lg:w-1/2 hidden lg:block"
  >

    <div className="w-[75%] h-[75%] rounded-full bg-gradient-to-br from-teal-500/20 to-cyan-500/20 flex items-center justify-center ml-40 ">
    <img
            src={imgPort3}
            alt="Harminder Singh Saini"
            className="rounded-full object-cover border-4 border-teal-500/30 shadow-xl"
          />
    </div>
  </motion.div>
    </div>
  );
};

export default Home;
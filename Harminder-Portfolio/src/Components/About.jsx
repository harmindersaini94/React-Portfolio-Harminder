import React from "react";
import imgPortfolio2 from "../assets/AboutMe.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h2>

      <div className="flex flex-wrap ">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="w-full p-3 lg:w-1/2 lg:p-16"
        >
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl"
              src={imgPortfolio2}
              alt="About ME"
              width="450px"
              height="450px"
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className="w-full p-4 lg:w-1/2 items-center justify-center"
        >
          <div className="flex justify-center lg:justify-start">
            <div className="max-w-xl text-justify">
              <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent font-bold text-xl block mb-2">
                Experienced Software Developer
              </span>
              <p className="mb-4">
                With over 4 years of experience in software development, I bring
                a robust track record of delivering high-quality software
                solutions. My educational background includes a Bachelor’s
                Degree in Computer Science and Engineering from India and a
                Post-Baccalaureate Diploma in Computing Studies from Canada.
              </p>

              <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent font-bold text-xl block mb-2">
                Technical Proficiency
              </span>
              <p className="mb-4">
                <span className="font-bold">Programming Languages: </span> C#,
                VB, Java, SAP ABAP
                <br />
                <span className="font-bold">Web Tech: </span> ASP.NET, HTML/CSS,
                JavaScript, React, React-Redux, NextJS <br />
                <span className="font-bold">
                  Databases & Backend Service:{" "}
                </span>{" "}
                MySQL, MongoDB, Firebase, Appwrite <br />
                <span className="font-bold">Cloud Technologies:</span> Microsoft
                Azure
              </p>

              <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent font-bold text-xl block mb-2">
                Professional Approach
              </span>
              <p className="mb-4">
                <span className="font-bold">Analytical: </span>I employ a
                methodical approach to problem-solving, ensuring efficient and
                effective solutions. Collaborative: I thrive in team
                environments, working closely with colleagues to achieve common
                goals. <br />
                <span className="font-bold">Continuous Learning: </span>
                Currently enhancing my skills in NextJS and Microsoft Azure to
                stay at the forefront of industry advancements.
              </p>
              <p>
                My commitment to excellence and continuous improvement drives me
                to deliver innovative and reliable software solutions. Let’s
                connect and explore how I can contribute to your next project!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

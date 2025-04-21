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
        About <span className="text-teal-600">Me</span>
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
              <span className="bg-gradient-to-r from-teal-300 via-slate-500 to-aqua-500 bg-clip-text tracking-tight text-transparent font-bold text-xl block mb-2">
                FullStack Software Engineer
              </span>
              <p className="mb-4">
              Full-Stack Engineer with 5+ years in .NET, C#, ASP.NET, Python, React, and API integrations, optimizing business processes in Agile settings
              </p>

              <span className="bg-gradient-to-r from-teal-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent font-bold text-xl block mb-2">
                Technical Proficiency
              </span>
              <p className="mb-4">
                <span className="font-bold italic">Programming:{" "}</span> 
                .NET/C#/VB, Python, JavaScript, Java, SAP ABAP <br />
                <span className="font-bold italic">Web Dev:{" "}</span>
                ASP.NET Core, Angular, React, React-Redux, Next.js, Django <br />
                <span className="font-bold italic">Databases & Backend Service:{" "}</span>
                MySQL, MongoDB, Firebase, Appwrite <br />
                <span className="font-bold italic"> Cloud Technologies:{" "}</span> 
                Azure DevOps, AWS Lambda, Azure Logic Apps, AWS S3, Amazon Lex
              </p>

            <span className="bg-gradient-to-r from-teal-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent font-bold text-xl block mb-2">
                Expertise
              </span>
              <p className="mb-4 space-y-1">
                <span className="block italic">Full Stack Web Development</span>
                <span className="block italic">RESTful API Design & Implementation</span>
                <span className="block italic">Performance Optimization & Scalability</span>
                <span className="block italic">Project Migration to Modern Architectures (MVC, React)</span>
                <span className="block italic">Debugging & Troubleshooting</span>
                <span className="block italic">LLM Integration for AI Personas and RAG Pipelines</span>
                <span className="block italic">Technical Support for Products & Services</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

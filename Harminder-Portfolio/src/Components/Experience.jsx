import React from "react";
import { motion } from "framer-motion";

const experience = [
  {
    year: "Mar 2022 - Present",
    role: "Full Stack Developer",
    Company: "Molicel",
    Description:
      "-- Migrated organization’s legacy .NET Framework 4.7.2 web application to .NET 8 using ASP.NET Core MVC, reducing processing time by 40% and memory usage by 30%\n" +
      "-- Built a real-time data visualization dashboard with React, Node.js/Express.js, SQL Server, and Plotly, improving sensor data clarity by 25%\n" +
      "-- Developed an ASP.NET Core Web API with a React frontend, streamlining data retrieval and delivering responsive interfaces, cutting latency and boosting team productivity by 40%\n" +
      "-- Collaborated with scientists to design a Python-based microservice using Scikit-learn and XGBoost, predicting battery cell self-discharge with 30% improved accuracy\n" +
      "-- Developed unit tests for critical modules using NUnit and xUnit, achieving 95% test coverage and enhancing reliability via TDD",

    technologies: [".NET/C#/VB", "Python", "ASP.NET Core", "MySql", "JavaScript", "Angular", "React"],
  },
  {
    year: "Sep 2020 - May 2021",
    role: "IT Support Assistant",
    Company: "Douglas College",
    Description:
      "-- Built a Node.js/React app for 1,000+ hostel users, enhancing operational efficiency by 30%\n" +
      "-- Developed a Scrapy-based web crawler to identify and resolve dead links on the college website, reducing manual effort by 50% and improving site reliability\n" +
      "-- Created a mentor-mentee registration system using Power Automate and SharePoint in an Agile setting, increasing workflow efficiency by 40%\n" +
      "-- Resolved enterprise application issues, cutting ticket time by 20%",

    technologies: ["Python", "MS Power Automate", "HTML/CSS", "JS", "MongoDB", "Angular", "Sharepoint"],
  },
  {
    year: "Jan 2018 - Jul 2019",
    role: "Systems Engineer, SAP ABAP",
    Company: "Tata Consultancy Services",
    Description:
      "-- Worked in an Agile Scrum team as an SAP ERP ABAP/4 developer, specializing in SAP MM, SD, and HR\n" +
      "-- Enhanced SAP MM/SD/HR modules with ABAP, implementing BADI’s and exits, reducing downtime by 30%\n" +
      "-- Performed production support and troubleshooting for critical applications, reducing system downtime by 30%",

    technologies: ["SAP", "ABAP", "ALV", "SAP HANA", "BAPI", "USER EXIT"],
  },
];
const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Exp<span className="text-teal-600">erie</span>nce  (<span className="text-teal-600">5+ Years</span>)
      </motion.h2>
      <div>
        {experience.map((experience, index) => (
          <div
            key={index}
            className="mb-8 p-5 flex flex-wrap lg:justify-center"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              className="w-full lg:w-2/4"
            >
              <p className="bg-gradient-to-r from-teal-300 via-slate-500 to-teal-500 bg-clip-text tracking-tight text-transparent font-bold text-xl mb-2">{experience.year}</p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1.2 }}
              className="w-full max-w-3xl lg:w-2/4 p-6 rounded-2xl bg-gradient-to-br from-[#ffffff33] via-[#00091d] to-[#111] shadow-lg border border-neutral-800"
            >
              <h6 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-slate-400 to-teal-500 mb-1">
                {experience.role}
              </h6>
              <p className="text-lg font-semibold text-teal-400 mb-4">{experience.Company}</p>

              <p className="mb-6 text-neutral-300 leading-relaxed whitespace-pre-line text-justify">
                {experience.Description}
              </p>

              <div className="flex flex-wrap gap-3">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-neutral-800 border border-teal-600 px-3 py-1 text-sm font-medium text-teal-300 hover:bg-teal-900/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

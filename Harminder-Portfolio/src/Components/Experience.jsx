import React from "react";
import { motion } from "framer-motion";

const experience = [
  {
    year: "Mar 2022-Present",
    role: "Full Stack Developer",
    Company: "E-One Moli Energy",
    Description:
      "• Successfully transitioned data handling from Datasets to Lists, resulting in improved performance and simplified codebase. Enhanced data access speed by 30% and reduced memory usage by 20%.\n" +
      "• Created an API endpoint using Express.js that provides scientists with a JSON response containing a list of affected cells, automating a previously manual query process thus increasing productivity by 50%.\n" +
      "• Utilized .NET's Entity Framework (EF) ORM to interact with SQL Server, enhancing my understanding of ORM functionality and how database operations are performed efficiently.\n" +
      "• Contributed to the migration of the internal website from jQuery, Knockout.js, and older JavaScript versions to a modern MVC architecture using ASP.NET Core and React, which is predicted to reduce maintenance time by 40%.\n" +
      "• Developed comprehensive unit and integration tests using Visual Studio to evaluate application performance and reliability, resulting in reduced downtime in production.",

    technologies: ["C#/VB", ".NET", "ASP.Net", "MySql", "JS", "React"],
  },
  {
    year: "Sep 2020-May-2021",
    role: "Information Technology Support Assistant",
    Company: "Douglas College",
    Description:
      "• Implemented an automated Python script using the Beautiful Soup library to detect ‘page not found’ errors due to website redirects, reducing manual effort by 50%.\n" +
      "• Created an app using Microsoft Power Automate and SharePoint for students to register as mentors or mentees, enriching student assistance across a vast array of topics.\n" +
      "• Collaborated with the team to resolve a wide range of technical issues logged by students on the student portal, resulting in an improved and refined user experience.\n" +
      "• Contributed to the development of a college-housing portal web application using React, Spring Boot, and MongoDB, providing students with essential housing information during their tenure of study.",

    technologies: ["Python", "MS Power Automate", "HTML/CSS", "JS", "MongoDB", "Sharepoint"],
  },
  {
    year: "Jan 2018 - Jul 2019",
    role: "Software Developer",
    Company: "Tata Consultancy Services",
    Description:
      "• Revamped the code base of ALV reports for streamlined data presentation, aligning with client specifications for improved analysis.\n" +
      "• Tailored SmartForms applications to user needs, achieving enhanced document generation with heightened precision.\n" +
      "• Initiated BDC recordings for SAP data migration and crafted insightful software reports leveraging data structures.\n" +
      "• Mastered various SAP objects, including Module pool, BAPI, BADI, and User Exits, to deliver robust solutions.\n" +
      "• Engaged in cross-functional training to broaden expertise in SAP modules such as MM, SD, and Success Factors.",

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
        Experience
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
              className="w-full lg:w-1/4"
            >
              <p className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent font-bold text-xl mb-2">{experience.year}</p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1.5 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent font-bold text-xl block mb-2">
                {experience.role}
                <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent font-semibold text-lg block">
                  {experience.Company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400 break-words whitespace-pre-line text-justify">
              {experience.Description}
              </p>
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-2 rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-purple-700"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

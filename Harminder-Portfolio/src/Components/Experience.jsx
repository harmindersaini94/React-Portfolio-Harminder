import React from "react";
import { motion } from "framer-motion";

const experience = [
  {
    year: "Mar 2022-Present",
    role: "Full Stack Developer",
    Company: "E-One Moli Energy",
    Description:
      "1. Utilized Agile methodologies to create custom C#/VB Windows desktop applications using .NET framework 4.5 and MVC design pattern, collaborating with end users\n" +
      "2. Designed and maintained databases using SQL Server and MySQL. Leveraged the EF migration feature to provide incremental updates to the database schema, keeping it in sync with the application’s data models.\n" +
      "3. Maintained the organization’s internal website by leveraging ASP.NET, JavaScript, and React for frontend development, and .NET framework for backend solutions.\n" +
      "4. Created multiple unit tests as well as integration tests to evaluate the application using Visual Studio. Utilized debugging for in-depth analysis of code functionality.\n" +
      "5. Enhanced desktop application efficiency by 30% through strategic code refinement and logic optimization.\n" +
      "6. Engineered and deployed a robust API tool for executing SQL queries, facilitating seamless data delivery to analysts; rigorously validated API endpoints using Postman.",

    technologies: ["C#/VB", ".NET", "ASP.Net", "MySql", "JS", "React"],
  },
  {
    year: "Sep 2020-May-2021",
    role: "Information Technology Support Assistant",
    Company: "Douglas College",
    Description:
      "1. Developed a full-stack web application using React for frontend, Spring Boot for backend microservices, and MongoDB as the database.\n" +
      "2. Implemented an automated Python script using the Beautiful Soup library, which detected ‘page not found’ errors due to website redirects, reducing manual effort by 50%.\n" +
      "3. Resolved a wide range of technical issues for students, including Blackboard logins, online class glitches, and hardware malfunctions.\n" +
      "4. Created a user-centric application leveraging Microsoft Power Automate and SharePoint, facilitating mentor-mentee connections and enriching student communication networks.",

    technologies: ["Python", "MS Power Automate", "HTML/CSS", "JS", "MongoDB", "Sharepoint"],
  },
  {
    year: "Jan 2018 - Jul 2019",
    role: "Software Developer",
    Company: "Tata Consultancy Services",
    Description:
      "1. Revamped the code base of ALV reports for streamlined data presentation, aligning with client specifications for improved analysis.\n" +
      "2. Tailored SmartForms applications to user needs, achieving enhanced document generation with heightened precision.\n" +
      "3. Initiated BDC recordings for SAP data migration and crafted insightful software reports leveraging data structures.\n" +
      "4. Mastered various SAP objects, including Module pool, BAPI, BADI, and User Exits, to deliver robust solutions.\n" +
      "5. Engaged in cross-functional training to broaden expertise in SAP modules such as MM, SD, and Success Factors.\n" +
      "6. Documented technical changes meticulously in specific tickets for comprehensive future reference.",

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

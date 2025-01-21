import React from "react";
import { motion } from "framer-motion";

const experience = [
  {
    year: "Mar 2022 - Present",
    role: "Full Stack Developer",
    Company: "E-One Moli Energy (Canada) Limited",
    Description:
      "• Migrated codebase from VB Datasets to C# Lists, utilizing Object-Oriented Programming (OOP) principles and the LINQ API, improving data access speed by 30% and reducing memory usage by 20%\n" +
      "• Developed a RESTful API with Express.js and MongoDB to automate data retrieval, increasing team productivity by 50%\n" +
      "• Implemented OAuth-based authentication and authorization in React.js, Angular and ASP.NET MVC\n" +
      "• Configured CI/CD pipeline using Jenkins as well as Azure to automate build and deployment process\n" +
      "• Actively collaborated with Product Managers, DevOps to deliver efficient and scalable solutions\n" +
      "• Gained familiarity with network topology and security principles to ensure secure system design\n" +
      "• Conducted code reviews to maintain coding standards and to improve code quality\n" +
      "• Rebuilt an internal website from jQuery and Knockout.js to ASP.NET Core with Angular, reducing maintenance efforts by 40%",

    technologies: ["C#/VB", ".NET", "ASP.Net", "MySql", "JS", "Angular", "React"],
  },
  {
    year: "Sep 2020 - May 2021",
    role: "IT Support Assistant",
    Company: "Douglas College",
    Description:
      "• Implemented a web scraper using Python and Beautiful Soup to automate the detection of dead links on a newly built college website, reducing manual effort by 50% and improving validation accuracy\n" +
      "• Built a mentor-mentee registration app using Power Automate and SharePoint, streamlining student support services and increasing registration efficiency by 40%\n" +
      "• Developed a microservice using Spring Boot, MongoDB and Angular for a college hostel, supporting over 1,000 users\n" +
      "• Resolved technical issues on student portal platforms, improving system reliability and user satisfaction by 30%\n" +
      "• Explored automated testing frameworks and implemented unit tests for critical modules",

    technologies: ["Python", "MS Power Automate", "HTML/CSS", "JS", "MongoDB", "Angular", "Sharepoint"],
  },
  {
    year: "Jan 2018 - Jul 2019",
    role: "Systems Engineer, SAP ABAP",
    Company: "Tata Consultancy Services",
    Description:
      "• 2 years of experience as an ABAP/4 programmer consultant with working knowledge in SAP modules like MM, SD and HR\n" +
      "• Experienced in enhancing standard SAP functionalities using BADI’s, Screen Exits, Menu exits, and Functional module exits\n" +
      "• Worked on creation of multiple custom reports, interfaces, customer enhancements and smart forms\n" +
      "• Worked on BDC programs to upload master data, purchase order and purchase info records",

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
        Exp<span className="text-teal-600">erie</span>nce
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
              transition={{ duration: 1.5 }}
              className="w-full max-w-xl lg:w-2/4"
            >
              <h6 className="bg-gradient-to-r from-teal-300 via-slate-500 to-teal-500 bg-clip-text tracking-tight text-transparent font-bold text-xl block mb-2">
                {experience.role}
                <span className="bg-gradient-to-r from-teal-300 via-slate-500 to-teal-500 bg-clip-text tracking-tight text-transparent font-semibold text-lg block">
                  {experience.Company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400 break-words whitespace-pre-line text-justify">
              {experience.Description}
              </p>
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-2 rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-teal-700"
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

import React from "react";
import { motion } from "framer-motion";

const experience = [
  {
    year: "Mar 2022 - Present",
    role: "Full Stack Developer",
    Company: "E-One Moli Energy (Canada) Limited",
    Description:
      "• Transitioned data handling from Datasets to Lists, achieving a 30% improvement in data access speed and a 20% reduction in memory usage, while streamlining the codebase for enhanced maintainability\n" +
      "• Designed and implemented an Express.js API endpoint to automate the retrieval of affected cell data, replacing a manual query process and increasing team productivity by 50%\n" +
      "• Leveraged .NET Entity Framework to interact with SQL Server, executing efficient database operations and optimizing ORM performance\n" +
      "• Spearheaded the migration of an internal website from legacy technologies (jQuery, Knockout.js) to a modern MVC architecture using ASP.NET Core and React, projected to reduce maintenance efforts by 40%\n" +
      "• Developed and executed comprehensive unit and integration tests in Visual Studio, ensuring application reliability and minimizing production downtime",

    technologies: ["C#/VB", ".NET", "ASP.Net", "MySql", "JS", "React"],
  },
  {
    year: "Sep 2020 - May 2021",
    role: "IT Support Assistant",
    Company: "Douglas College",
    Description:
      "• Automated error detection using Python and Beautiful Soup, reducing manual effort by 50%\n" +
      "• Developed a mentor-mentee registration app using Power Automate and SharePoint, improving student support services\n" +
      "• Contributed to the development of a web portal using React, Spring Boot, and MongoDB to address student housing needs\n" +
      "• Troubleshot technical issues, enhancing user experience across student portal platforms",

    technologies: ["Python", "MS Power Automate", "HTML/CSS", "JS", "MongoDB", "Sharepoint"],
  },
  {
    year: "Jan 2018 - Jul 2019",
    role: "Systems Engineer, SAP ABAP",
    Company: "Tata Consultancy Services",
    Description:
      "• Redesigned ALV reports for improved data visualization and client-specific analysis\n" +
      "• Enhanced SAP document workflows using Smart Forms, increasing precision and user satisfaction\n" +
      "• Delivered efficient data migration solutions through BDC recordings and SAP reports\n" +
      "• Expanded expertise in SAP modules, including MM, SD, and Success Factors, contributing to cross-functional projects",

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

import React, { useState } from "react";
import project1 from ".././assets/project1.png";
import project2 from ".././assets/project2.png";
import project3 from ".././assets/project3.png";
import { motion } from "framer-motion";
import Card from "./Card";

const projects = [
  {
    id: 1,
    title: "Portfolio",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart and used authenticationa s well.",
    technology: ["HTML", "Tailwind", "JS", "React", "Framer Motion", "Node"],
    githublink: "https://github.com/harmindersaini94/React-Portfolio-Harminder",
    liveSiteLink: "",
  },
  {
    id: 2,
    title: "Tech Blog",
    image: project2,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart and used authenticationa s well.",
      technology: ["HTML", "Tailwind", "JS", "React", "Framer Motion", "Node", "React-Redux", "React-DOM", "Appwrite"],
    githublink: "https://github.com/harmindersaini94/Final_Blog_Project",
    liveSiteLink: "",
  },
  {
    id: 3,
    title: "Interactive Todo",
    image: project3,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart and used authenticationa s well.",
      technology: ["HTML", "Tailwind", "JS", "React", "Framer Motion", "Node", "React-Redux", "React-DOM", "LocalStorage"],
    githublink: "https://github.com/harmindersaini94/Interactive_ToDo",
    liveSiteLink: "",
  },
];

const Projects = () => {

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>

      <div>
        {projects.map((project, index) => (
          <div
            key={index}
            className="mb-8 p-5 flex flex-wrap lg:justify-center"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              className="w-full lg:w-1/4 flex flex-wrap justify-center items-center gap-8 content-center"
            >
              {/* <img
                src={project.image}
                width="150px"
                height="150px"
                className="mb-6 rounded"
                alt={project.image}
              /> */}
              <Card
                image={project.image}
                githublink={project.githublink}
                liveSiteLink={project.liveSiteLink}
              />
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1.5 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technology.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
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

export default Projects;

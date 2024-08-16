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
      "1. A dynamic and responsive portfolio website built using HTML, Tailwind CSS, JavaScript, React, Framer Motion, and Node.js.\n" +
      "2. This project showcases my skills and projects with smooth animations and transitions, providing an engaging user experience.",
    technology: ["HTML", "Tailwind", "JS", "React", "Framer Motion", "Node"],
    githublink: "https://github.com/harmindersaini94/React-Portfolio-Harminder",
    liveSiteLink: "https://react-portfolio-harminder.vercel.app/",
  },
  {
    id: 2,
    title: "Tech Blog",
    image: project2,
    description:
      "1. A modern and responsive website built using HTML, Tailwind CSS, JavaScript, React, Framer Motion, Node.js, React-Redux, and React-DOM for front-end handling.\n" +
      "2. Backend, including data storage and authentication, managed by Appwrite backend service.\n" +
      "3. Hosted on Vercel for fast and reliable performance.",
    technology: [
      "HTML",
      "Tailwind",
      "JS",
      "React",
      "Framer Motion",
      "Node",
      "React-Redux",
      "React-DOM",
      "Appwrite",
    ],
    githublink: "https://github.com/harmindersaini94/Final_Blog_Project",
    liveSiteLink: "https://tech-blog-sooty-seven.vercel.app/",
  },
  {
    id: 3,
    title: "Interactive Todo",
    image: project3,
    description:
    "1. Created a responsive and interactive TODO application using React, and styled with Tailwind CSS.\n" +
    "2. State is managed in the application using Redux and made use of local storage for data management.\n" +
    "3. Hosted on Vercel for fast and reliable performance.",
    technology: [
      "HTML",
      "Tailwind",
      "JS",
      "React",
      "Framer Motion",
      "Node",
      "React-Redux",
      "React-DOM",
      "LocalStorage",
    ],
    githublink: "https://github.com/harmindersaini94/Interactive_ToDo",
    liveSiteLink: "https://interactive-todo.vercel.app/",
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
              <h6 className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent font-bold text-xl block mb-2">{project.title}</h6>
              <p className="mb-4 text-neutral-400 break-words whitespace-pre-line text-justify">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technology.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-2 rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-purple-700"
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

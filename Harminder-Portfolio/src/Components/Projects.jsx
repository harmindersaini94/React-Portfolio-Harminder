import React from 'react'
import projectimage from '.././assets/projectimage.png'

const projects = [
  {
    title: "E-Commerce Website",
    image: projectimage,
    description: "A fully functional e-commerce website with features like product listing, shopping cart and used authenticationa s well.",
    technology : ["HTML", "JavaScript", "React.JS", "MongoDB", "Node.js"]
  },
  {
    title: "E-Commerce Website",
    image: projectimage,
    description: "A fully functional e-commerce website with features like product listing, shopping cart and used authenticationa s well.",
    technology : ["HTML", "JavaScript", "React.JS", "MongoDB", "Node.js"]
  },
  {
    title: "E-Commerce Website",
    image: projectimage,
    description: "A fully functional e-commerce website with features like product listing, shopping cart and used authenticationa s well.",
    technology : ["HTML", "JavaScript", "React.JS", "MongoDB", "Node.js"]
  },
  {
    title: "E-Commerce Website",
    image: projectimage,
    description: "A fully functional e-commerce website with features like product listing, shopping cart and used authenticationa s well.",
    technology : ["HTML", "JavaScript", "React.JS", "MongoDB", "Node.js"]
  },
  {
    title: "E-Commerce Website",
    image: projectimage,
    description: "A fully functional e-commerce website with features like product listing, shopping cart and used authenticationa s well.",
    technology : ["HTML", "JavaScript", "React.JS", "MongoDB", "Node.js"]
  }
]

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h2 className='my-20 text-center text-4xl' >Projects</h2>
      <div>
        {projects.map((project, index) => (
          <div key={index} className='mb-8 p-5 flex flex-wrap lg:justify-center'>
            <div className='w-full lg:w-1/4'>
            <img src={project.image} width="150px" height="150px" className='mb-6 rounded' alt={project.image} />
            </div> 
            <div className='w-full max-w-xl lg:w-3/4'>
              <h6 className='mb-2 font-semibold'>{project.title}</h6>
              <p className='mb-4 text-neutral-400'>{project.description}</p>
              <div className='flex flex-wrap gap-2'> 
              {
                project.technology.map((tech, index) => (
                  <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>{tech}</span>
                ))
              }
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
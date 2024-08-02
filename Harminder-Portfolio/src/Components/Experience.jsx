import React from 'react'

const experience = [
  {
    year: "2024-Present",
    role: "Software Developer",
    Company: "Google",
    Desccription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam hic nesciunt dolores itaque sequi! Fugiat doloremque facilis ab dolorum! Ad commodi eveniet expedita officiis quos excepturi nisi incidunt dicta magni.Esse, recusandae! Quae doloremque labore deserunt sed culpa ea, repellat perferendis reiciendis quas ipsum saepe error quia ducimus laboriosam adipisci reprehenderit eaque totam blanditiis voluptas ipsam facilis odio voluptatum temporibus.",
    technologies: ["JS", "React", "C#", "NExt.js"]
  },
  {
    year: "2024-Present",
    role: "Software Developer",
    Company: "Google",
    Desccription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam hic nesciunt dolores itaque sequi! Fugiat doloremque facilis ab dolorum! Ad commodi eveniet expedita officiis quos excepturi nisi incidunt dicta magni.Esse, recusandae! Quae doloremque labore deserunt sed culpa ea, repellat perferendis reiciendis quas ipsum saepe error quia ducimus laboriosam adipisci reprehenderit eaque totam blanditiis voluptas ipsam facilis odio voluptatum temporibus.",
    technologies: ["JS", "React", "C#", "NExt.js"]
  },
  {
    year: "2024-Present",
    role: "Software Developer",
    Company: "Google",
    Desccription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam hic nesciunt dolores itaque sequi! Fugiat doloremque facilis ab dolorum! Ad commodi eveniet expedita officiis quos excepturi nisi incidunt dicta magni.Esse, recusandae! Quae doloremque labore deserunt sed culpa ea, repellat perferendis reiciendis quas ipsum saepe error quia ducimus laboriosam adipisci reprehenderit eaque totam blanditiis voluptas ipsam facilis odio voluptatum temporibus.",
    technologies: ["JS", "React", "C#", "NExt.js"]
  },
  {
    year: "2024-Present",
    role: "Software Developer",
    Company: "Google",
    Desccription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam hic nesciunt dolores itaque sequi! Fugiat doloremque facilis ab dolorum! Ad commodi eveniet expedita officiis quos excepturi nisi incidunt dicta magni.Esse, recusandae! Quae doloremque labore deserunt sed culpa ea, repellat perferendis reiciendis quas ipsum saepe error quia ducimus laboriosam adipisci reprehenderit eaque totam blanditiis voluptas ipsam facilis odio voluptatum temporibus.",
    technologies: ["JS", "React", "C#", "NExt.js"]
  }
]
const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h2 className='my-20 text-center text-4xl'>Experience</h2>
      <div>
        {experience.map((experience, index) => (
          <div key={index} className='mb-8 p-5 flex flex-wrap lg:justify-center'> 
            <div className='w-full lg:w-1/2'>
              <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
            </div>
            <div className='w-full max-w-xl lg:w-3/4'>
              <h6 className='mb-2 font-bold'>{experience.role} - <span className='text-sm text-purple-100'>
                {experience.Company}
                </span></h6>
                <p className='mb-4 text-neutral-400'>{experience.Desccription}</p>
                {experience.technologies.map((tech, index) => (
                  <span key={index} className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>{tech}</span>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
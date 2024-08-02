import React from 'react'
import imgPortfolio from '../assets/Portfolio_Image.jpg'

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h2 className='my-20 text-center text-4xl'>About <span className='text-neutral-500'>Me</span> </h2>
      <div className='flex flex-wrap'>
        <div className='w-full p-5 lg:w-1/2 lg:p-8'>
          <div className='flex items-center justify-center'>
           <img className='rounded-2xl' src={imgPortfolio} alt="About ME" width='450px' height='450px'/>
          </div>
        </div>
        <div className='w-full p-4 lg:w-1/2 items-center justify-center'>
            <div className='flex justify-center lg:justify-start'>
                <p className='my-2 max-w-xl py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, consectetur numquam illum ab sed totam quia quae ullam magni dolorum eum impedit commodi repudiandae aliquam nostrum doloremque delectus obcaecati? Quod.
                Deleniti necessitatibus, corrupti quasi, iusto est deserunt minima, ad temporibus repellendus fugiat pariatur! Provident, sapiente nesciunt officia sequi, totam consequatur voluptatum architecto ab ullam molestias aperiam accusamus ex reprehenderit veniam!
                Tempora odio nulla consectetur odit quam accusamus error quo, fuga nihil, nesciunt numquam placeat quibusdam iste mollitia eius blanditiis quos. Quas nobis libero quos ut sed, vero ullam magnam nisi!
                Unde perspiciatis dolor aliquam suscipit assumenda error tenetur, minus cumque sequi esse magnam! Numquam commodi quibusdam neque veritatis quas, ipsa debitis labore aliquid! Praesentium ab voluptatum modi eaque necessitatibus fuga!
                Exercitationem quaerat rerum doloremque, odio veritatis nobis minus sed quae itaque iste necessitatibus velit odit? Necessitatibus, error eum ipsam voluptates molestiae cum exercitationem soluta sequi optio natus, ipsum autem eaque.</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default About
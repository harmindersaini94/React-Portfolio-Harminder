import React from 'react'
import imgPortfolio from '../assets/Portfolio_Image.jpg'

const Home = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col p-5 mb-1 items-center lg:items-start'>
            <h1 className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl'>Harminder Saini</h1>
            <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>Full Stack Developer</span>
            <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio natus ad sed consectetur quas non perspiciatis atque ab similique magnam, ipsa corrupti aperiam odio sit impedit deleniti qui consequatur alias.
            Inventore corrupti dolor enim omnis, earum ipsum dolore ft perspiciatis quia nam delectus voluptates! Facere iure doloremque quas ipsam blanditiis, nisi temporibus tempora necessitatibus distinctio suscipit.</p>
          </div>
        </div>
        <div className='w-full p-4 lg:w-1/2 lg:p-8'>
          <div className='flex justify-center'>
            <img src={imgPortfolio} className='rounded-2xl' alt='Harminder Singh Saini' width='450px' height='450px'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
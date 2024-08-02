import React from 'react'
import {RiReactjsLine} from 'react-icons/ri'
import { FaHtml5 } from "react-icons/fa6";
import {TbBrandNextjs} from 'react-icons/tb'
import {SiMongodb} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'
import { IoLogoJavascript } from "react-icons/io5";

const TechStack = () => {
  return (
    <div className='border-b border-neutral-900 pb-24'>
        <h2 className='my-20 text-center text-4xl'>My Tech Stack</h2>
        <div className='flex flex-wrap p-2 items-center justify-center gap-4'>
          <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiReactjsLine className='text-7xl text-cyan-400' />
          </div>
          <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaHtml5 className='text-7xl text-red-400' />
          </div>
          <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <IoLogoJavascript className='text-7xl text-yellow-400' />
          </div>
          <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <TbBrandNextjs className='text-7xl' />
          </div>
          <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaNodeJs className='text-7xl text-green-400' />
          </div>
          <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiMongodb className='text-7xl text-green-500' />
          </div>
        </div>
    </div>
  )
}

export default TechStack
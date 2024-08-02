import React from 'react'
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h2 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}}
        className='my-10 text-center text-4xl'>Get in Touch
        </motion.h2>

        <div className='text-center tracking-tighter'>
            <motion.p 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:1.5}}
            className='my-4'>13325 102A Avenue</motion.p>

            <motion.p 
                  whileInView={{opacity:1, x:0}}
                  initial={{opacity:0, x:100}}
                  transition={{duration:1.5}}
            className='my-4'>7789567035</motion.p>

            <a href='#' className='border-b'>har@outlook.com</a>
        </div>
    </div>
  )
}

export default Contact
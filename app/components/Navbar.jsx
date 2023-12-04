"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import{ GiMaterialsScience } from "react-icons/gi"
import { ProjectReveal } from './ProjectReveal'

const Navbar = () => {
  return (
    <ProjectReveal>
    <div className='fixed h-screen hidden bg-[#e885548f] sm:flex text-[#1a0f09]'  >
            <div className='vertical-text flex items-center  text-lg'>

            <Link href="/"  >
                <motion.div
                    className='w-full h-32 p-4 flex justify-center items-center '
                    initial = {{
                        opacity:0.5
                    }}
                    whileHover={{
                        opacity:1,
                        background: "gray"
                        
                    }}
                >
                    <GiMaterialsScience className='w-10 h-10 text-[#1a0f09]'/>
                </motion.div>
            </Link>
            <Link href="/#about">
                <motion.div
                    className='w-full h-32 p-4 flex justify-center items-center '
                    initial = {{
                        opacity:0.5
                    }}
                    whileHover={{
                        opacity:1,
                        background: "gray"
                        
                    }}
                >
                    About
                </motion.div>
            </Link>
            <Link href="/#projects">
                <motion.div
                    className='w-full h-32 p-4 flex justify-center items-center'
                    initial = {{
                        opacity:0.5
                    }}
                    whileHover={{
                        opacity:1,
                        background: "gray"
                        
                    }}
                >
                    Projects
                </motion.div>
            </Link>    
            <Link href="/#contact">
                <motion.div
                    className='w-full h-32 p-4 flex justify-center items-center'
                    initial = {{
                        opacity:0.5
                    }}
                    whileHover={{
                        opacity:1,
                        background: "gray"
                        
                    }}
                >
                    Contact
                </motion.div>
            </Link>    
               
               

        </div>
    </div>
    </ProjectReveal>
  )
}

export default Navbar
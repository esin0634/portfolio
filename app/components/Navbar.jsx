"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='fixed h-screen hidden bg-[#080808] sm:flex' >
            <div className='vertical-text flex items-center font-thin text-lg'>

            <Link href="/"  >
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
                    logo
                </motion.div>
            </Link>
            <Link href="/#about">
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
  )
}

export default Navbar
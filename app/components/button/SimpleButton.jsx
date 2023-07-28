"use client"
import { motion } from "framer-motion"
import React, { useState } from "react";




const SimpleButton = ({ onClick, children}) => {
  const buttonVariants = {
    filled: {
      backgroundColor: "#9E00F9",
      color: "#FFFFFF",

    },
    empty: {
      backgroundColor: "transparent",
      color: "#9E00F9",
    },
  };
  const buttonTransition = {
    duration: 0.2,
    ease: "linear",
    initialPosition: "topLeft",
  };

  return (
    <motion.button 
        onClick={onClick} 
        className=' w-fit p-3 border-2 rounded border-[#9E00F9] '
        initial="empty"
        whileHover="filled"
        whileTap={{ scale: 0.9 }}
        variants={buttonVariants}
        transition={buttonTransition}
        
    >
        {children}
    </motion.button>
  )
}

export default SimpleButton
"use client"
import Link from 'next/link';
import { motion } from "framer-motion";

import { Reveal } from "./Reveal";
import confetti from 'canvas-confetti';


const Hero = () => {
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

      const handleClick = () => {
        confetti()
      }
  return (
    <section className="w-screen h-screen bg-[#0f0f0f]" >
        <div className=" h-screen flex justify-center items-center p-10 ">
            <div className="flex flex-col space-y-5">
                
                    <div className="flex flex-wrap sm:space-x-5">
                    <Reveal>
                        <h1 className=" text-8xl font-extrabold tracking-tight pb-3	">
                            Hey,
                        </h1>
                    </Reveal>
                    <Reveal>
                        <h1 className=" text-8xl font-extrabold tracking-tight pb-3	">
                            I&apos;m 
                        </h1>
                    </Reveal>    
                    <Reveal>   
                        <h1 className=" text-8xl font-extrabold tracking-tight pb-3	">
                            Esin<span className="text-[#a802f5]">.</span>
                        </h1>
                    </Reveal>
                    </div>   
                <Reveal>
                <h2 className="text-4xl">
                    I&apos;m a <span className="text-[#a802f5] font-bold">Front-End Developer</span>
                </h2>
                </Reveal>
                <Reveal>
                <p>
                    Learning to be a Software Engineer at Re:coded for the last 6 months!
                </p>
                </Reveal>
                <div className="flex items-center space-x-5 flex-wrap">
                    <Reveal>
                    <Link href ="/#contact">
                    <motion.button 
                           
                            className=' w-fit p-3 border-2 rounded border-[#9E00F9] '
                            initial="empty"
                            whileHover="filled"
                            whileTap={{ scale: 0.9 }}
                            variants={buttonVariants}
                            transition={buttonTransition}
                        >
                              Contact me
                        </motion.button>
                    </Link>
                    </Reveal>
                    <Reveal>
                        <motion.button 
                           onClick={handleClick}
                            className=' w-fit p-3 border-2 rounded border-[#9E00F9] '
                            initial="filled"
                            whileHover="empty"
                            whileTap={{ scale: 0.9 }}
                            variants={buttonVariants}
                            transition={buttonTransition}
                        >
                              <a href="/images/nBusraEsinCv.pdf" download>My resume</a>
                        </motion.button>
                    </Reveal>    
                </div>
            </div>
        </div>

    </section>
  )
}

export default Hero
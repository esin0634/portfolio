"use client"
import Link from 'next/link';
import { motion } from "framer-motion";

import { Reveal } from "./Reveal";
import confetti from 'canvas-confetti';

const Hero = () => {
    const buttonVariants = {
        filled: {
          backgroundColor: "#34783359",
          color: "#FFFFFF",
    
        },
        empty: {
          backgroundColor: "transparent",
          color: "#347833a5",
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
    <section className="w-screen md:h-screen min-h-screen text-stone-700 bg-orange-50" >
        <div className=" h-screen flex justify-center items-center p-10 ">
            <div className="flex flex-col space-y-5">
                
                    <div className="flex flex-col sm:space-x-5">
                    <div>
                        <Reveal>
                            <h1 className=" text-8xl font-extrabold tracking-tight pb-3 lg:ml-5	">
                                Hey,
                            </h1>
                        </Reveal>
                    </div>

                    <div className='flex gap-x-7'>
                        <Reveal>
                            <h1 className=" text-8xl font-extrabold tracking-tight	">
                                I'm 
                            </h1>
                        </Reveal>    
                        <Reveal>   
                            <h1 className=" text-8xl font-extrabold tracking-tight">
                                Esin<span className="text-[#347833a5]">.</span>
                            </h1>
                        </Reveal>
                    </div>
                    </div>   
                <Reveal>
                <h2 className="text-4xl lg:ml-5">
                    I'm a <span className="text-[#347833a5] font-bold">Project Manager</span>
                </h2>
                </Reveal>
                <Reveal>
                <p className='font-thin lg:ml-5 text-stone-700'>
                With the brain of a developer, the heart of a designer, and the speech of a diplomat.
                <br/>
                It's so nice to meet you 🚀                </p>
                </Reveal>
                <div className="flex items-center space-x-5 flex-wrap lg:ml-5">
                    <Reveal>
                    <Link href ="/#contact">
                    <motion.button 
                           
                            className=' w-fit p-3 border-2 rounded border-[#34783359] '
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
                            className=' w-fit p-3 border-2 rounded border-[#34783359] '
                            initial="filled"
                            whileHover="empty"
                            whileTap={{ scale: 0.9 }}
                            variants={buttonVariants}
                            transition={buttonTransition}
                        >
                              <a href="/images/BusraEsinCV.pdf" download>Click for my CV</a>
                        </motion.button>
                    </Reveal>    
                </div>
            </div>
        </div>

    </section>
  )
}

export default Hero
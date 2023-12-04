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
                
                    <div className="flex flex-wrap sm:space-x-5">
                    <Reveal>
                        <h1 className=" text-8xl font-extrabold tracking-tight pb-3	">
                            Hey,
                        </h1>
                    </Reveal>
                    <Reveal>
                        <h1 className=" text-8xl font-extrabold tracking-tight pb-3	">
                            I'm 
                        </h1>
                    </Reveal>    
                    <Reveal>   
                        <h1 className=" text-8xl font-extrabold tracking-tight pb-3	">
                            Esin<span className="text-[#347833a5]">.</span>
                        </h1>
                    </Reveal>
                    </div>   
                <Reveal>
                <h2 className="text-4xl">
                    I'm a <span className="text-[#347833a5] font-bold">Product Manager</span>
                </h2>
                </Reveal>
                <Reveal>
                <p className='font-thin'>
                I am eager to bring my diverse skill set to a team that shares my passion for innovation. 
                <br/>
                Let's create something extraordinary together, shaping the future one product at a time! 🚀                </p>
                </Reveal>
                <div className="flex items-center space-x-5 flex-wrap">
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
                              <a href="/images/NBusraEsinCv.pdf" download>Click for my CV</a>
                        </motion.button>
                    </Reveal>    
                </div>
            </div>
        </div>

    </section>
  )
}

export default Hero
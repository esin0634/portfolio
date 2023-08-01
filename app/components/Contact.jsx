"use client"
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const Contact = () => {
    const handleMailClick = () => {
        window.open(`mailto:nbusra.esin@gmail.com`, '_blank');
    }
    return (
        <div id='contact' className='w-screen md:h-screen bg-[#0f0f0f]'>
            <div className='md:h-screen flex justify-center items-center md:p-28 lg:p-40 p-5'>
                <div className=" flex flex-col justify-center items-center space-y-5">
                    <Reveal>
                    <h1 className="text-4xl lg:text-8xl font-extrabold tracking-tight flex	">
                        Contact<span className="text-[#a802f5] ">.</span>
                    </h1>
                    </Reveal>
                    <Reveal>
                    <p className="text-center font-thin md:text-lg">Shoot me an email if you want to connect! You can also find me on <a className="text-[#a802f5] font-normal hover:underline" href="https://www.linkedin.com/in/nbusraesin/">Linkedin</a> if that's more your speed.</p>
                    </Reveal>
                    <Reveal>
                    <motion.h4 className=" cursor-pointer font-thin text-2xl w-maxp " onClick={handleMailClick}
                    whileHover={{
                        color: "rgba(168, 2, 245, 1)",
                        transition : {duration : 0.1}
                    }}
                    >
                        nbusra.esin@gmail.com
                    
                    </motion.h4>
                    </Reveal>
                </div>
            
            </div>
        </div>
  )
}

export default  Contact

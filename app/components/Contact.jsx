"use client"
import { motion } from "framer-motion";

const Contact = () => {
    const handleMailClick = () => {
        window.open(`mailto:nbusra.esin@gmail.com`, '_blank');
    }
    return (
        <div id='contact' className='w-screen md:h-screen bg-[#0f0f0f]'>
            <div className='md:h-screen flex justify-center items-center md:p-28 lg:p-40 p-5'>
                <div className=" flex flex-col justify-center items-center space-y-5">
                    <h1 className="text-5xl lg:text-8xl font-extrabold tracking-tight flex	">
                        Contact<span className="text-[#a802f5] ">.</span>
                    </h1>
                    <p className="text-center font-thin">Shoot me an email if you want to connect! You can also find me on <a className="text-[#a802f5] font-normal hover:underline" href="https://www.linkedin.com/in/nbusraesin/">Linkedin</a> if that's more your speed.</p>

                    <motion.h4 className=" cursor-pointer font-thin" onClick={handleMailClick}
                    whileHover={{
                        color: "rgba(168, 2, 245, 1)",
                        scale: 1.1,
                        transition : {duration : 0.1}
                    }}
                    >
                        nbusra.esin@gmail.com
                    
                    </motion.h4>
                </div>
            
            </div>
        </div>
  )
}

export default  Contact

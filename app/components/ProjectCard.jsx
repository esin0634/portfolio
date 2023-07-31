"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import {AiFillGithub} from "react-icons/ai"
import {BiExit} from "react-icons/bi"




export const ProjectCard = ({imgNumber}) => {
    const appTitle = "App Title"
    const projectGitRepo = "https://github.com/"
    const projectDeployLink = "https://github.com/"
    const projectText = "A social community for painters to connect with others in their community. I handle everything backend (50K monthly active users)."
  return (
    <div className=' '>
        <div className='bg-neutral-800 px-7 pt-12 rounded-md'>
            <motion.div
                whileHover={{ 
                    scale: 1.1,
                    rotate: 2,
                    transition: { duration: 0.1 },  
                }}
                whileTap={{
                    scale:0.9
                }}
                transition={{ type: 'linear' }}
                className='cursor-pointer'
            >
                <Image
                    src={`/images/${imgNumber}.png`}
                    alt={`Image ${imgNumber}`}
                    width={500}
                    height={400}
                    className='rounded-t-md'
                />
            </motion.div>
        </div> 

        <div className='img-info lg:px-3 py-5 '>

            <div className='flex flex-row items-center '>
                <h1 className="text-xl lg:text-3xl font-extrabold tracking-tight w-fit">
                        {appTitle}
                </h1>
                <hr className="h-px w-full border-0 bg-neutral-600"></hr>
                <div className='flex space-x-2 p-2'> 
                    <a href={projectGitRepo}  rel="noopener noreferrer" target="_blank">
                    <AiFillGithub className='w-6 h-6 text-neutral-500 hover:text-[#a802f5]' />
                    </a>
                    <a href={projectDeployLink}rel="noopener noreferrer" target="_blank">
                        <BiExit className='w-6 h-6 text-neutral-500 hover:text-[#a802f5]' />
                    </a>
                </div>
            </div>
                <div>
                    <p className='font-thin text-sm'>{projectText}</p>
                </div>
        </div>       

    </div>
  )
}

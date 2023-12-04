"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import {AiFillGithub} from "react-icons/ai"
import {BiExit} from "react-icons/bi"
import { ProjectReveal } from './ProjectReveal';
import { Reveal } from './Reveal';




export const ProjectCard = ({imgNumber , appTitle, projectGitRepo, projectDeployLink, projectText }) => {
   
  return (
    <div>
        <ProjectReveal>
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
        </ProjectReveal>


        <div className='img-info lg:px-3 py-5 space-y-5 '>

            <div className='flex flex-row items-center  '>
            <Reveal>
                <div className='grid grid-cols-3 gap-2 items-center'>
                    <h1 className="text-xl lg:text-3xl font-extrabold tracking-tight w-fit">
                            {appTitle}
                    </h1>

                    <hr className=" col-span-2 border-t border-neutral-600 flex-grow"></hr>
                </div>
            </Reveal>
                <Reveal>
                <div className='flex space-x-2 p-2'> 
                    <a href={projectGitRepo}  rel="noopener noreferrer" target="_blank">
                    <AiFillGithub className='w-6 h-6  hover:text-[#347833a5]' />
                    </a>
                    <a href={projectDeployLink}rel="noopener noreferrer" target="_blank">
                        <BiExit className='w-6 h-6  hover:text-[#347833a5]' />
                    </a>
                </div>
                </Reveal>
            </div>
            
                <div>
                <Reveal>
                    <p className='font-thin text-sm'>{projectText}</p>
                </Reveal>
                </div>
        </div>       

    </div>
  )
}

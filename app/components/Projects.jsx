import React from 'react'
import { ProjectCard } from './ProjectCard'

const Projects = () => {
  const imageFilenames = ['1', '2', '3','4'];

    return (
        <section id='projects' className="w-screen  bg-[#0f0f0f] " >
        <div className=" flex justify-center items-center md:px-24 lg:px-40 p-5" >

          <div className=" lg:flex lg:flex-col space-y-5 ">
              
              <div className='flex flex-row items-center space-x-5' >
                <hr className="h-px w-full my-8 bg-neutral-600 border-0 "></hr>
                <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight flex	">
                    Projects <span className="text-[#a802f5] ">.</span>
                </h1>
              </div>

              <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                  {imageFilenames.map((filename) => {
                    return (
                        <div className='col-span-1' key={filename}>
                          <ProjectCard  imgNumber = {filename} />
                        </div>

                    )
                  }
                  )}

              </div>


              </div>
    
          </div>
    
    </section>
  )
}

export default Projects
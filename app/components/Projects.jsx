import React from 'react'

const Projects = () => {
    return (
        <section id='projects' className="w-screen lg:h-screen bg-[#0f0f0f] " >
        <div className="lg:h-screen flex justify-center items-center lg:p-72 p-5" >

          <div className=" lg:flex lg:flex-col space-y-5 ">
              
              <div className='flex flex-row items-center space-x-5' >
                <hr className="h-px w-full my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight flex	">
                    Projects <span className="text-[#a802f5] ">.</span>
                </h1>
              </div>

              <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>

                <div className='col-span-1'>
                  projects
                </div>
                <div className='col-span-1'>
                  projects
                </div>
                <div className='col-span-1'>
                  projects
                </div>
                <div className='col-span-1'>
                  projects
                </div>

                </div>


              </div>
    
          </div>
    
    </section>
  )
}

export default Projects
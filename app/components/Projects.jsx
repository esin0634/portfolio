import React from 'react'
import { ProjectCard } from './ProjectCard'

const Projects = () => {
  const imageFilenames = ['1', '2', '3','4'];
  const dic = {
    "1": {
      title: "Learn U",
      projectGitRepo : "https://github.com/202303-PRM-TR-FEW/LearnU-Team-1",
      projectDeployLink : "https://learn-u-team-1-lilac.vercel.app/",
      projectText : "This project aims to develop an interactive and engaging learning app that provides users with a personalized educational experience.The app will offer a wide range of courses and resources across various subjects, catering to learners of all ages and skill levels. With a focus on interactivity and convenience, this platform will empower individuals to acquire new knowledge, develop skills, and explore their educational interests at their own pace."

    },
    "2": { 
      title: "Meme App",
      projectGitRepo : "https://github.com/esin0634/meme-app",
      projectDeployLink : "https://meme-app-two.vercel.app/",
      projectText : "A project to understand API requests in NextJS. This project showcases the use of Redux for state management. The project make API requests using using react-query and retrieve data from external APIs. Redux helps manage the global state, allowing components to access and modify data without excessive prop drilling."

    },
    "3": {
      title: "SpliTter",
      projectGitRepo : "https://github.com/esin0634/nextjs-tip-calculator",
      projectDeployLink : "https://nextjs-tip-calculator-kappa.vercel.app/",
      projectText : "The app is built using Next.js, Tailwind CSS, and JavaScript, serving as a practical project to reinforce logical JavaScript and React skills. By combining the power of Next.js for server-side rendering and Tailwind CSS for streamlined UI design, the app offers an excellent hands-on learning experience for both front-end development and React concepts."

    },
    "4": {
      title: "Toplumun Sanatı",
      projectGitRepo : "https://github.com/esin0634/toplumun-sanati",
      projectDeployLink : "https://toplumun-sanati.vercel.app/",
      projectText : "An art project with ongoing creation and development using Firestore and firebase auth for authentication and Next.js"

    }
  }

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
                    const projectInfo = dic[filename]
                    return (
                        <div className='col-span-1' key={filename}>
                          <ProjectCard  imgNumber = {filename} appTitle={projectInfo.title} projectGitRepo={projectInfo.projectGitRepo} projectDeployLink={projectInfo.projectDeployLink} projectText={projectInfo.projectText}  />
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
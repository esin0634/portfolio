import React from 'react'
import { ProjectCard } from './ProjectCard'

const Projects = () => {
  const imageFilenames = ['1', '2', '3','4'];
  const dic = {
    "1": {
      title: "Learn U",
      projectGitRepo : "https://github.com/202303-PRM-TR-FEW/LearnU-Team-1",
      projectDeployLink : "https://learnu.vercel.app/",
      projectText : "This project aims to develop an interactive and engaging learning app that provides users with a personalized educational experience.The app will offer a wide range of courses and resources across various subjects, catering to learners of all ages and skill levels. With a focus on interactivity and convenience, this platform will empower individuals to acquire new knowledge, develop skills, and explore their educational interests at their own pace."

    },
    "2": { 
      title: "Movie APP",
      projectGitRepo : "https://github.com/esin0634/movie-app-REST",
      projectDeployLink : "https://movie-app-rest.vercel.app/",
      projectText : "A project to develop skills in data fetching and pre-rendering in NextJS. Used TMBD data base to search for thousands of movies and tv series. The project make API requests and retrieve data from external APIs. Used NextJs' internal dynamic routing systems including catch-all-routes and conditional rendering."

    },
    "3": {
      title: "SpliTter",
      projectGitRepo : "https://github.com/esin0634/nextjs-tip-calculator",
      projectDeployLink : "https://nextjs-tip-calculator-kappa.vercel.app/",
      projectText : "The app is built using Next.js, Tailwind CSS, and JavaScript, serving as a practical project to reinforce logical JavaScript and React skills. By combining the power of Next.js for server-side rendering and Tailwind CSS for streamlined UI design, the app offers an excellent hands-on learning experience for both front-end development and React concepts."

    },
    "4": {
      title: "Progress Tracker",
      projectGitRepo : "https://github.com/esin0634/progress-timer",
      projectDeployLink : "https://progress-timer.vercel.app/",
      projectText : "The Progress Tracker Web App is a product born out of a desire to aid individuals on their journey towards mastery. Inspired by the 10,000-hour rule, this simple yet effective tool allows users to start, pause, resume, and reset a timer with ease, making it an invaluable companion for tracking progress during practice or study sessions. What sets this app apart is its commitment to preserving your progress; even if you close the page, your session data will be waiting for you when you return, ensuring a seamless and uninterrupted path to becoming a master. Built using only vanilla JavaScript, HTML, CSS, and Sass, it combines simplicity and functionality, making it the perfect partner for anyone looking to hone their skills."

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
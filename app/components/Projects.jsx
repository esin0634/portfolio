import React from 'react'
import { ProjectCard } from './ProjectCard'

const Projects = () => {
  const imageFilenames = ['1', '2', '3','4'];
  const dic = {
    "1": {
      title: "Front-End Web App",
      projectGitRepo : "https://github.com/202303-PRM-TR-FEW/LearnU-Team-1",
      projectDeployLink : "https://learnu.vercel.app/",
      projectText : "I spearheaded an impactful 8-week web app development project, showcasing my versatility as both a Scrum Master and a Front-End Developer. Applying Scrum methodologies, I took the lead in planning sprints, defining clear goals, and assigning tasks. As the Scrum Master, I mentored team members, ensuring their well-being and fostering a collaborative environment. Daily stand-ups became a cornerstone, keeping the team focused, informed, and proactive in addressing challenges. I actively engaged in pair programming, collaborated on problem-solving, and developed reusable components to enhance code efficiency. It was a dynamic journey where teamwork and effective leadership converged to bring our vision to fruition."

    },
    "2": {
      title: "PM Case Study",
      projectGitRepo : "https://drive.google.com/file/d/1jypPErwUdYpIBVoE34oHpWipt7eNxcUd/view?usp=sharing",
      projectDeployLink : "https://drive.google.com/file/d/1jypPErwUdYpIBVoE34oHpWipt7eNxcUd/view?usp=sharing",
      projectText : "As part of the application process for the Product Manager position for a playable add startup, I successfully completed a one-day case study. Task 1 involved selecting a non-gaming brand, outlining a strategy for the brand to onboard the company using playable ads. Task 2 focused on designing a playable ad experience, including concept creation and wireframe development. For Task 3, I evaluated existing playable ads of the company, proposing critical improvements. In Task 4, I identified potential enhancements for one of the companies product, proposing a strategic plan within the tight timeframe. This case study showcases my rapid strategic thinking and ability to deliver impactful insights under time constraints."

    },
    "3": { 
      title: "Movie APP",
      projectGitRepo : "https://github.com/esin0634/movie-app-REST",
      projectDeployLink : "https://movie-app-rest.vercel.app/",
      projectText : "A project to develop skills in data fetching and pre-rendering in NextJS. Used TMBD data base to search for thousands of movies and tv series. The project make API requests and retrieve data from external APIs. Used NextJs' internal dynamic routing systems including catch-all-routes and conditional rendering."

    },
    
    "4": {
      title: "Progress Tracker",
      projectGitRepo : "https://github.com/esin0634/progress-timer",
      projectDeployLink : "https://progress-timer.vercel.app/",
      projectText : "The Progress Tracker Web App is a product born out of a desire to aid individuals on their journey towards mastery. Inspired by the 10,000-hour rule, this simple yet effective tool allows users to start, pause, resume, and reset a timer with ease, making it an invaluable companion for tracking progress during practice or study sessions. What sets this app apart is its commitment to preserving your progress; even if you close the page, your session data will be waiting for you when you return, ensuring a seamless and uninterrupted path to becoming a master. Built using only vanilla JavaScript, HTML, CSS, and Sass, it combines simplicity and functionality, making it the perfect partner for anyone looking to hone their skills."

    }
  }

    return (
        <section id='projects' className="w-screen bg-stone-500 border-rounded" >
        <div className=" flex justify-center items-center md:px-24 lg:px-40 p-5" >

          <div className=" lg:flex lg:flex-col space-y-20 ">
            
              <div className='flex flex-row items-center space-x-5' >
                <hr className="h-px w-full my-8 bg-neutral-600 border-0 "></hr>
                <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight flex	">
                    Projects <span className="text-[#347833a5] ">.</span>
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
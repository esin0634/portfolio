"use client"
import {AiFillGithub, AiFillLinkedin, AiOutlineInstagram, AiOutlineArrowRight} from "react-icons/ai"
import { GrMail } from "react-icons/gr";
import { PiCodeFill } from "react-icons/pi"
import { BsFillEmojiSmileUpsideDownFill } from "react-icons/bs"

import { Reveal } from "./Reveal";



const About = () => {
  const handleMailClick = () => {
    window.open(`mailto:nbusra.esin@gmail.com`, '_blank');
}

  const style = {
    button : `rounded-full bg-[#383838aa] w-fit px-2 `
  }

  return (
      <section id='about' className="w-screen text-stone-700" >
        <div className="flex justify-center items-center md:p-28 lg:p-40 p-5 " >
          <div className=" lg:flex lg:flex-col space-y-5 ">
              <div className=' flex flex-row items-center space-x-5' >
                <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight flex	">
                    About <span className="text-[#347833a5] ">.</span>
                </h1>
                <hr className=" h-px w-full my-8  border-0 bg-neutral-600"></hr>
              </div>
                

              <div className='lg:grid grid-cols-2 gap-4 space-y-8 lg:space-x-8'>
                
                <div className='col-span-1 text-md space-y-5 '>
                  <div>
                  <Reveal> <span className="text-neutral-700">
                    🔬 Molecular Biologist with a Tech Twist 🚀</span></Reveal>
                  <br/>
                  <Reveal> <span className=" font-light text-neutral-600">  I bring a data-driven mindset honed through my academic background in Molecular Biology and Genetics. My journey has equipped me with a unique perspective on problem-solving, analytical thinking, and a profound appreciation for detail. Aspiring to be a Product Manager, I leverage my scientific foundation to approach challenges systematically and innovate solutions.</span></Reveal>  
                  </div>
                
                  <br/>
                  <div>
                  <Reveal> <span className="text-neutral-700">🧬 Science and Technology Enthusiast 🌐</span></Reveal><br/>

                  <Reveal> <span className="font-light text-neutral-600">Beyond the realm of science, my curiosity extends into the dynamic worlds of web development and data science. My foundational knowledge in data science and computer science, coupled with hands-on experience in front-end development projects, equips me to collaborate seamlessly with developers and engineers, translating ideas into technical realities.</span></Reveal>
                  </div>
                  <br/>
                
                  <div>
                  <Reveal><span className="text-neutral-700">🎨 Illuminating Design 🧑‍🎨 </span></Reveal>
                  <br/>
                  <Reveal><span className="font-light text-neutral-600">Embracing the heart of a designer, I've immersed myself in various projects as a lighting designer. This experience not only instilled in me the fundamentals of design but also honed my strategic thinking. In fast-paced, high-stress environments, I thrived, analyzing situations on the fly to define goals and deliver impactful designs with precision and creativity. Adaptability and a knack for quick decision-making have become my allies in the face of constant change and challenges.</span></Reveal>
                  </div>
                
                  
                </div>


                <div className=" col-span-1 text-md flex flex-col justify-between py-10">
                  <div>
                  <Reveal><span className="text-neutral-700">🎭 Leader on and off the Stage 🎶</span></Reveal>
                  <br/>
                   <Reveal><span className="font-light text-neutral-600">But wait, there's more to me than just science and tech! I've taken center stage in musical productions, steering the ship in leadership roles. The stage has not only been my creative outlet but a platform to refine my leadership skills, fostering collaboration and creativity. This journey has amplified my passion for teamwork and polished my communication skills, ensuring successful collaborations with diverse teams.</span></Reveal>
                </div>
                  
                  <br/>
                  <div>
                  <Reveal><span className="text-neutral-700">💡 Passionate Product Enthusiast 🌟</span> </Reveal>
                  <br/>
                  <Reveal> <span className="font-light text-neutral-600">Here's the real crescendo: I am thrilled and absolutely bursting with excitement to be a Product Manager. My heart lies in technology and product development, and the prospect of working with a collaborative team to create products from inception to completion sends shivers down my scientific spine. It's not just a job for me; it's a thrilling journey of turning ideas into tangible, impactful solutions. I am ready to channel my diverse skills, from the analytical mindset forged in molecular sciences to the creative flair of a designer, to drive innovation and shape the future of products that make a real difference.
                  </span></Reveal>
                  </div>

                  <br/>

                  <div className="flex items-center space-x-5">
                  <Reveal>
                    <p className="text-[#347833a5] font-normal flex items-center gap-3 ">My Links <span> <AiOutlineArrowRight/> </span></p>
                    <div className="flex space-x-5">
                      <a href="https://github.com/esin0634" >
                        <AiFillGithub className="w-7 h-7 text-stone-300 hover:text-[#347833a5]" />
                      </a>
                      <a href="https://www.linkedin.com/in/nbusraesin/" >
                        <AiFillLinkedin className="w-7 h-7 text-stone-300 hover:text-[#347833a5]  " />
                      </a>
                      <a href="https://www.instagram.com/esingulerken/" >
                        <AiOutlineInstagram className="w-7 h-7 text-stone-300 hover:text-[#347833a5]" />
                      </a>
                      <div>
                        <GrMail className="w-7 h-7 text-stone-300 hover:text-[#347833a5] " onClick={handleMailClick}  />
                      </div>
                    </div>
                    </Reveal>
                  </div>
                 
                </div>
                </div>

              </div>
    
          </div>

    </section>

  )
}

export default About
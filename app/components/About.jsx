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
                
                <div className='col-span-1 text-lg space-y-5 '>
                  <div>
                  <Reveal> <span className="text-neutral-600">
                    🔬 Molecular Biologist and Geneticist with a Tech Twist 🚀</span></Reveal>
                  <br/>
                  <Reveal> <span className="font-thin"> Hello there! I'm Esin, a recent graduate from METU with a degree in Molecular Biology and Genetics. My academic journey was not only challenging but also incredibly enlightening, providing me with a profound understanding of the intricate world of molecular sciences.</span></Reveal>  
                  </div>
                
                  <br/>
                  <div>
                  <Reveal> <span className="text-neutral-600">🧬 Science and Technology Enthusiast 🌐</span></Reveal><br/>

                  <Reveal> <span className="font-thin">Beyond the realm of science, my curiosity extends into the dynamic worlds of web development and data science. I've delved into the intricacies of coding and the power of data, bridging the gap between biology and technology.</span></Reveal>
                  </div>
                  <br/>
                
                  <div>
                  <Reveal><span className="text-neutral-600">📚 Always Learning, Always Growing 🌱 </span></Reveal>
                  <br/>
                  <Reveal> <span className="font-thin">In my free time, you'll find me immersed in the joy of learning new things, especially in the realm of product management. I believe in constant self-development, and the pursuit of knowledge fuels my passion for creating innovative solutions.</span></Reveal>
                  </div>
                
                  <br/>
                  <div>
                  <Reveal><span className="text-neutral-600">🎨 Pottery Enthusiast, Tennis Aficionado, and TV Show Buff 🏺🎾📺 </span></Reveal>
                  <br/>
                  <Reveal><span className="font-thin">When I'm not busy pushing the boundaries of innovation, I find solace in the soothing art of pottery, the exhilarating game of tennis, and the captivating narratives of TV shows. It's a perfect blend of creativity, sport, and relaxation that adds richness to my multifaceted journey.</span></Reveal>
                  </div>
                
                  
                </div>


                <div className=" col-span-1 text-lg flex flex-col justify-between py-10">
                  <div>
                  <Reveal><span className="text-neutral-600">🎭 Leadership in the Limelight 🎶</span></Reveal>
                  <br/>
                   <Reveal><span className="font-thin">But wait, there's more to me than just science and tech! I've taken center stage in musical productions, steering the ship in leadership roles. The stage has not only been my creative outlet but a platform to refine my leadership skills, fostering collaboration and creativity.</span></Reveal>
                </div>
                  
                  <br/>
                  <div>
                  <Reveal><span className="text-neutral-600">💡 Passionate about Innovation and Product Development 🌟</span> </Reveal>
                  <br/>
                  <Reveal> <span className="font-thin">Here's the real crescendo: I am thrilled and absolutely bursting with excitement to be a Product Manager. My heart lies in technology and product development, and the prospect of working with a collaborative team to create products from inception to completion sends shivers down my scientific spine. It's not just a job for me; it's a thrilling journey of turning ideas into tangible, impactful solutions.</span></Reveal>
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
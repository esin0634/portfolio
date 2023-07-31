"use client"
import {AiFillGithub, AiFillLinkedin, AiOutlineInstagram, AiOutlineArrowRight} from "react-icons/ai"
import { GrMail } from "react-icons/gr";
import { PiCodeFill } from "react-icons/pi"
import { BsFillEmojiSmileUpsideDownFill } from "react-icons/bs"



const About = () => {
  const handleMailClick = () => {
    window.open(`mailto:nbusra.esin@gmail.com`, '_blank');
}

  const style = {
    button : `rounded-full bg-[#383838aa] w-fit px-2 `
  }

  return (
      <section id='about' className="w-screen md:h-screen bg-[#0f0f0f] " >
        <div className="md:h-screen flex justify-center items-center md:p-28 lg:p-40 p-5" >

          <div className=" lg:flex lg:flex-col space-y-5 ">
              
              <div className=' flex flex-row items-center space-x-5' >
                <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight flex	">
                    About <span className="text-[#a802f5] ">.</span>
                </h1>
                <hr className="h-px w-full my-8  border-0 bg-neutral-600"></hr>
              </div>

              <div className='lg:grid grid-cols-3 gap-4 space-y-8 lg:space-x-8'>
                
                <div className='col-span-2 font-thin text-lg space-y-5 '>
                  <p>As a web developer, I am passionate about creating innovative and user-friendly websites that enhance people's lives.   </p>

                  <p>I am well-versed in various programming languages such as HTML, CSS, and JavaScript, and I'm excited to use these skills to create engaging and effective web experiences that will drive business success.</p>

                  <p>With a strong skill set in problem-solving and communication, I am confident in my ability to work collaboratively with others to achieve shared goals.</p>

                  <p>My proudest accomplishment is completing a coding bootcamp where I developed several projects that demonstrated my proficiency and passion for web development. If you think you've got an opening that I might like, let's connect 🔗</p>

                  <div className="flex items-center space-x-5">
                    <p className="text-[#a802f5] font-normal flex items-center gap-3 ">My Links <span> <AiOutlineArrowRight/> </span></p>
                    <div className="flex space-x-3">
                      <a href="https://github.com/esin0634" >
                        <AiFillGithub className="w-7 h-7 text-stone-300 hover:text-[#a802f5]" />
                      </a>
                      <a href="https://www.linkedin.com/in/nbusraesin/" >
                        <AiFillLinkedin className="w-7 h-7 text-stone-300 hover:text-[#a802f5]  " />
                      </a>
                      <a href="https://www.instagram.com/esingulerken/" >
                        <AiOutlineInstagram className="w-7 h-7 text-stone-300 hover:text-[#a802f5]" />
                      </a>
                      <div>
                        <GrMail className="w-7 h-7 text-stone-300 hover:text-[#a802f5] " onClick={handleMailClick}  />
                      </div>
                    </div>
                  </div>
                </div>


                <div className="space-y-10">

                <div className=" space-y-5">
                  <div className="flex items-center space-x-3">
                    <span><PiCodeFill className="w-7 h-7 text-[#a802f5]"/></span>
                    <h4 className="font-bold text-2xl tracking-tighter	">Use at work</h4>
                  </div>
                    <div className="skills flex flex-wrap gap-3 ">
                      <div className={style.button}>JavaScript</div>
                      <div className={style.button}>React</div>
                      <div className={style.button}>CSS</div>
                      <div className={style.button}>Redux</div>
                      <div className={style.button}>Tailwind</div>
                      <div className={style.button}>Framer Motion</div>
                      <div className={style.button}>Next JS</div>
                      <div className={style.button}>Firebase</div>
                    </div>
                  <div>

                  </div>
                </div>

                <div className=" space-y-5">
                  <div className="flex items-center space-x-3">
                    <span><BsFillEmojiSmileUpsideDownFill className="w-7 h-7 text-[#a802f5]"/></span>
                    <h4 className="font-bold text-2xl tracking-tighter">For fun</h4>
                  </div>
                    <div className="skills flex flex-wrap gap-3 ">
                      <div className={style.button}>JavaScript</div>
                      <div className={style.button}>React</div>
                      <div className={style.button}>CSS</div>
                      <div className={style.button}>Redux</div>
                      <div className={style.button}>Tailwind</div>
                      <div className={style.button}>Framer Motion</div>
                      <div className={style.button}>Next JS</div>
                      <div className={style.button}>Firebase</div>
                    </div>
                  <div>

                  </div>
                </div>
                </div>

              </div>
    
          </div>
        </div>

    </section>

  )
}

export default About
import SimpleButton from "./button/simpleButton"
import Link from 'next/link';




const Hero = () => {
  return (
    <section className="w-screen md:h-screen bg-[#0f0f0f]" >
        <div className=" md:h-screen flex justify-center items-center p-10 ">
            <div className="flex flex-col space-y-5">
                <h1 className=" text-8xl font-extrabold tracking-tight	">
                    Hey, I'm Esin<span className="text-[#a802f5]">.</span>
                </h1>

                <h2 className="text-4xl">
                    I'm a <span className="text-[#a802f5] font-bold">Front-End Developer</span>
                </h2>

                <p>
                    Learning to be a Software Engineer at Re:coded for the last 6 months!
                </p>

                <Link href ="/#contact">
                    <SimpleButton >
                        Contact me
                    </SimpleButton>
                </Link>

            </div>
        </div>

    </section>
  )
}

export default Hero
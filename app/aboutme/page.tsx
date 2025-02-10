import Details from "../ui/aboutme/details"
import "../../public/app.css"
import myface from "../../public/icons/avatar.png"
import utaustin from "../../public/utaustin.png"
import react from "../../public/icons/react.png"

export default function Aboutme(){
    return (
    <div className="flex flex-col items-center overflow-hidden">

        <div className="overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 flex flex-col lg:grid lg:grid-cols-4 lg:gap-10 lg:w-3/4 h-full overflow-hidden">

            <div className="invisible lg:visible lg:fixed lg:col-span-2 lg:col-start-1 h-[100vh]">
                <div className="flex flex-col justify-around h-3/4">
                    <a href="#background">
                        <h1 className="text-2xl">
                            Background
                        </h1>
                    </a>
                    <a href="#education">
                        <h1 className="text-2xl">
                            Education
                        </h1>
                    </a>
                    <a href="#skills">
                        <h1 className="text-2xl">
                            Skills and CV
                        </h1>
                    </a>
                </div>
            </div>

            <div className="lg:col-span-3 lg:col-start-2 lg:row-span2">
                <Details 
                    title={"I'm a software developer with a focus on the web."}
                    src={myface}
                    description={`I\'m a web developer with experience in full-stack app development primarily using the Postgres-Express-React stack. My work philosophy is simple: Think ahead, move fast, and adapt quickly. I believe that a good website or application should be designed to maximize ease of use without compromising functionality.

                    In my leisure time I run a fully custom-made table-top RPG complete with its own world and lore with a close group of friends, writing stories, creating art assets, and developing mechanics to streamline the player experience.`}
                    id="background"
                />
                
                <Details 
                    title={"I’m a 2022 Graduate from UT Austin."}
                    src={utaustin}
                    description={`I graduated from the University of Texas at Austin in May 2022 with a Bachelor of Science in Physics and am currently pursuing further education in computer science in San Antonio. I\'m mostly self-taught in my programming knowledge, though I have plenty of projects to demonstrate what I know.`}
                    id="education"
                />
                <Details 
                    title={"My skills at a glance:"}
                    src={react}
                    description={`I primarily work with JavaScript and TypeScript. \n\nFront end: React, NextJS, React Mobile, TailWind.\n\nBack end: Node.js, Express, Postgres`}
                    id="skills"
                />
            </div>
        
        </div>
        </div>
    )
}

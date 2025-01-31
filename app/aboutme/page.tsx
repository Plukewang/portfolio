import Details from "../ui/aboutme/details"

export default function Projects(){
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
                    src={null}
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt  mollit anim id est laborum."
                    id="background"
                />
                
                <Details 
                    title={"I’m a 2022 Graduate from UT Austin."}
                    src={null}
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt  mollit anim id est laborum."
                    id="education"
                />
                <Details 
                    title={"My skills at a glance:"}
                    src={null}
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt  mollit anim id est laborum."
                    id="skills"
                />
            </div>
        
        </div>
        </div>
    )
}

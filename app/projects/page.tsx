import Story from "../ui/projects/story"
import preview1 from "../../public/preview1.png"
import preview2 from "../../public/previewTennoHeadlines.png"

import "../../public/app.css"
export default function Projects(){
    return (
        <div className="my-2">
            <div className="w-full h-[200px]"></div>
            <h1 className="max-md:w-full lg:my-7 text-3xl font-bold m-2 text-center">Here are a few of the projects I've worked on.</h1>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {//
                }
                <Story
                    link={"https://hereafter-react.vercel.app/"}
                    title={"The Hereafter on React"}
                    src={preview1}
                    description="Site hosting a custom RPG project and its information."
                />
                <Story
                    link={"https://tennoheadlines.vercel.app/"}
                    title={"Warframe Events Tracker"}
                    src={preview2}
                    description="A custom-made missions and rewards tracker for the game Warframe."
                />
                <Story
                    link={""}
                    title={"More To Come!"}
                    src={null}
                    description="Under construction..."
                />
                <Story
                    link={""}
                    title={"More To Come!"}
                    src={null}
                    description="Under construction..."
                />
               
            </div>
            
        </div>
    )
}

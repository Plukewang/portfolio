import Story from "../ui/projects/story"
import preview1 from "../../public/preview1.png"
import "../../public/app.css"
export default function Projects(){
    return (
        <div className="my-2">
            <h1 className="max-md:w-full lg:my-7 text-[16px] md:text-[32px] m-2 text-center">Here are a few of the projects I've worked on.</h1>

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
                    link={""}
                    title={""}
                    description=""
                />
                <Story
                    link={"https://hereafter-react.vercel.app/"}
                    title={"The Hereafter on React"}
                    description="Site hosting a custom RPG project and its information."
                />
                <Story
                    link={"https://hereafter-react.vercel.app/"}
                    title={"The Hereafter on React"}
                    description="Site hosting a custom RPG project and its information."
                />
            </div>
            
        </div>
    )
}

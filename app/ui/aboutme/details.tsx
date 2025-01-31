import Image, { StaticImageData } from "next/image";
import placeholderThumbnail from "../../../public/icons/site_thumbnail_placeholder.png";

interface detailProps{
    //takes a link, a title, and a description
    title: string
    src?: StaticImageData | null //if null, placeholder
    description: string
    id:string
}
export default function Details({title,src,description,id}:detailProps){
    return(
        <div className="mx-auto flex flex-col lg:my-10 lg:gap-y-10 lg:h--1/2 min-h-[800px] my-10 pt-10">
            <span id={id} className="h-[150px] w-full"></span>
            <h1 className="my-2 text-4xl font-semibold tracking-tight text-center sm:text-5xl lg:h-[150px]">
                {title}
            </h1>

            <div className="flex flex-col items-center justify-start lg:flex-row lg:justify-around h-1/2">

                <Image 
                    src={src? src: placeholderThumbnail}
                    alt={title? title:"placeholder title"}
                    className="lg:col-start-2 lg:row-start-2 rounded-xl object-cover h-auto m-10"
                />
                <div className="lg:col-span-2 lg:col-start-3 lg:row-start-2 lg:w-1/2 lg:max-w-7xl lg:px-8">
                    
                    <p className="mt-6 text-xl/8 ">
                        {description}
                    </p>
                </div>

                

            </div>
            
        </div>
    )
}

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import placeholderThumbnail from "../../../public/icons/site_thumbnail_placeholder.png";

interface storyProps{
    //takes a link, a title, and a description
    link: string 
    title: string
    src?: StaticImageData | null //if null, placeholder
    description: string
}

export default function Story({link,title,src,description}:storyProps){
    /* medium break point for now, fixed size 
        vertical display:
        name
        image
        description
        simple!
     */
    return(
        <div className="p-2 md:w-[350px] h-[500px] flex flex-col items-center">
            <div className="w-full h-[220px] m-3 rounded-lg flex-col justify-center items-center">
            <h2 className="text-2xl m-3 p-2 font-bold text-center md:[text-left]">{title? title:"Placeholder Name"}</h2>
            <Link
                href={link? link : "/."}
                className="h-[220px] m-3"
            >
                

                    <Image 
                        src={src? src: placeholderThumbnail}
                        alt={title? title:"placeholder title"}
                        className="rounded-xl h-full"
                    />

            </Link>
            <p className="m-3 p-2 w-[300px]">
                {description? description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis  est sed vestibulum aliquet. Etiam ullamcorper ornare dolor vel dapibus.  Nulla maximus sagittis erat eget bibendum. Sed libero augue, condimentum quis felis et, sagittis mattis risus. Ut volutpat, ante"}
            </p>
            </div>

            
        </div>
    )
}

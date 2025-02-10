import Image, {StaticImageData} from "next/image";
import Link from "next/link";

interface contactLinkProps{
    imgSrc: StaticImageData
    name: string
    link: string
}
export default function ContactLink({imgSrc, name, link}:contactLinkProps){
    return(
        
            
            <Link
                href={link}
            >
                <div className="my-5 flex gap-5 ">

                <p className="my-auto text-2xl font-bold">
                    {name}
                </p >

                <Image 
                    src={imgSrc}
                    alt={"Link to "+name}
                    width={30}
                />
                </div>
            </Link>

        
    )
}

import Image from "next/image";
import avatar from "../../public/icons/avatar.png";
import Link from "next/link";

export default function Cover(){
    return(
        <div className="w-full h-1/2 flex flex-col align-center justify-center text-center">

            <div className="flex flex-row justify-center mx-2">
            <Image src={avatar}
                width={180}
                height={180}
                alt="placeholder avatar icon" 
                className="rounded-full flex flex-row justify-center bg-[#D9D9D9]"
            />
            </div>
            

            <h1 className="max-md:w-full lg:my-7 text-[32px] md:text-[64px] mx-2">
                Hi, This Is Peiyang Wang,
            </h1>

            <h2 className="max-md:mx-2 lg:my-2 text-[20px]">
                I’m a full-stack developer with focus on React and Node.js
            </h2>

            <div className="flex flex-row justify-center ">
                <Link
                    key={"Learn more"}
                    href={'/projects'}
                    className="text-[24px] border-2 my-3 p-2 rounded-xl highlight"
                >
                    <p >{"Learn More"}</p>
                </Link>
            </div>

        </div>
    )
}

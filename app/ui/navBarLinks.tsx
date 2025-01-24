import Link from "next/link";
import clsx from "clsx";

interface navLinkBarsProps{
    top: boolean
}

export default function NavBarLinks({top}:navLinkBarsProps){
    let shown = clsx("sticky flex-row lg:w-1/3 links text-center", 
        {
            "lg:flex hidden": top===true,
            "lg:hidden flex": top===false,
        }
    );

    let position = clsx();

    return (<div className={shown}>
        <Link
            key={"My Projects"}
            href={'/projects'}
            className="text-[24px] my-3 p-2"
        >
            <h2>
                My Projects
            </h2>
        </Link>
        
        <Link
            key={"About Me"}
            href={'/aboutme'}
            className="text-[24px] my-3 p-2"
        >
            <h2>
                About Me
            </h2>
        </Link>

        <Link
            key={"Contact"}
            href={'/contact'}
            className="text-[24px] my-3 p-2"
        >
            <h2>
                Contact
            </h2>
        </Link>

    </div>)
}

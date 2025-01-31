import "../../public/styles/nav.css"
import NavBarLinks from "./navBarLinks"

export default function Navbar(){
    return (
        <div className="fixed w-full h-100px lg:h-[150px] p-3 flex lg:flex-row flex-col justify-between items-center border-b-2   navbar">

            <h1 className="flex flex-row items-center h-full m-6 font-bold text-[32px]">
                Hi, This Is Peiyang Wang,
            </h1>


            <NavBarLinks top/>

        </div>
    )
}

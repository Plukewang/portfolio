import Image from "next/image";
import linkedin from '../public/icons/linkedin.png'
import github from '../public/icons/github.png'
import gmail from '../public/icons/gmail.png'
import '../public/app.css';

export default function Footer(){
    return(
        <div id = 'footer' className="w-full flex justify-center py-8 my-8">
            <div className="w-3/6 ">
                <ul className="flex flex-row justify-center">
                    <li className="py-2 flex flex-row justify-between content-center">
                        
                        <a href="https://www.linkedin.com/in/peiyang-wang-631550261">
                            <Image src={linkedin}
                            width={40}
                            height={40}
                            alt="LinkedIn icon" 
                            className="mx-10"
                            />
                        </a>
                        
                    </li>
                    <li className="py-2 flex flex-row justify-between content-center row-start-2">
                        
                        <a href="https://github.com/Plukewang">
                            <Image src={github}
                            width={40}
                            height={40}
                            alt="GitHub icon" 
                            className="mx-10"
                            />
                        </a>
                    </li>
                    <li className="py-2 flex flex-row justify-between content-center row-start-3">
                        
                        <a href='mailto: plukewang@utexas.edu'>
                            <Image src={gmail}
                            width={40}
                            height={40}
                            alt="Email icon" 
                            className="mx-10"
                            />
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    )
}
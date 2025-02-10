
import github from "../../public/icons/github.png"
import gmail from "../../public/icons/gmail.png"
import linkedIn from "../../public/icons/linkedin.png"
import ContactLink from "../ui/contact/contactLink"
import "../../public/app.css"
export default function Contact(){
    return (
        <div className="mt-[200px] mx-5 flex flex-col justify-center items-center">

                <h1 className="my-2 text-4xl font-semibold tracking-tight text-center sm:text-5xl lg:h-[150px] ">
                    Want to contact me?
                </h1>

                <div className="lg:w-1/2 lg:max-w-7xl lg:px-8 ">
                    
                    <p className="my-6 text-3xl w-full h-[150px] ">
                        You can get in touch with me in any of the following ways: 
                    </p>

                    <span className="w-full h-1/2"></span>

                    <ContactLink 
                        imgSrc={github}
                        name="Github"
                        link="https://github.com/Plukewang"
                    />

                    <ContactLink 
                        imgSrc={linkedIn}
                        name="LinkedIn"
                        link="https://www.linkedin.com/in/peiyang-wang-631550261"
                    />

                    <ContactLink 
                        imgSrc={gmail}
                        name="Email"
                        link="mailto:plukewang@utexas.edu"
                    />
                </div>

                
        </div>
    )
}

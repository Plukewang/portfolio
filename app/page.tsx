import Image from "next/image";
import Footer from "./footer";
import avatar from "../public/icons/avatar.png"
import react from "../public/icons/react.png"
import sass from "../public/icons/sass.png"
import bootstrap from "../public/icons/boostrap.png"
import tailwind from "../public/icons/tailwind.svg"
import next from "../public/icons/next.png"
import express from "../public/icons/express.png"
import node from "../public/icons/2560px-Node.js_logo.svg.png"
import pg from "../public/icons/pg.png"

import preview1 from '../public/preview1.png'
import '../public/app.css';

export default function Home() {
  return (
    <>
    <div className="flex justify-between my-4 mx-5 sticky top-0">
      <div className="flex justify-start gap-10 font-semibold text-xl my-4">
        
        <a href='#aboutme'>
          <button className="draw"><h1>About Me</h1></button>
        </a>
        <a href='#whatido'>
          <button className="draw"><h1>What I do</h1></button>
        </a>
        <a href='#projects'>  
          <button className="draw"><h1>Projects</h1></button>
        </a>
      </div>
     
      <a href = '#interested' className="flex justify-end font-semibold text-2xl my-4 ">
        <h1 className="interested">Interested?</h1>
      </a>
    </div>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      
      <div className="text-center w-full flex flex-col items-center pb-96">
      <Image src={avatar}
          width={180}
          height={180}
          alt="placeholder avatar icon" 
          className="my-10 rounded-full border-2 border-[#0ea5e9]"
          />
        <h1 className=" my-7 text-5xl">
          Hey, I'm Peiyang Wang,
        </h1>
        <h2 className="my-2 text-2xl">
          I develop functional and easy-to-use user experiences.
        </h2>
      </div>
      
      <div id = 'aboutme' className="text-center w-full flex flex-col items-center  pb-96 ">
        <h1 className=" my-7 text-5xl">About Me</h1>
        <p className="p-5 text-lg w-3/5 text-justify">
          I'm a web developer with experience in full-stack app development primarily using the Postgres-Express-React stack. 
          My work philosophy is simple: "Think ahead, move fast, and adapt quickly." I believe that a good website or application should be designed to 
          maximize ease of use  without compromising functionality. </p>

        <p className="p-5 text-lg w-3/5 text-justify">
          In my leisure time I run a fully custom-made table-top RPG complete with its own world and lore with a close group of friends, writing stories, creating
          art assets, and developing mechanics to streamline the player experience. 
        </p>
      </div>

      <div id = 'whatido' className="text-center w-full flex flex-col items-center ">
        <h1 className=" my-7 text-5xl">What I Do</h1>
        <h2 className=" my-7 text-3xl">Front-End</h2>
          <ul className="flex items-center mb-32">
            <li><Image src={react}
                            width={150}
                            height={150}
                            alt="React icon" 
                            className="mx-2"
                            />
            </li>
            <li><Image src={next}
                            width={100}
                            height={100}
                            alt="Nextjs icon" 
                            className="mx-2"
                            />
            </li>
            <li><Image src={sass}
                            width={70}
                            height={70}
                            alt="Sass icon" 
                            className="mx-2"
                            />
            </li>
            <li><Image src={bootstrap}
                            width={70}
                            height={70}
                            alt="Boostrap icon" 
                            className="mx-2"
                            />
            </li>
            <li><Image src={tailwind}
                            width={150}
                            height={150}
                            alt="Tailwind icon" 
                            className="mx-2"
                            />
            </li>
            
          </ul>
        <h2 className=" my-7 text-3xl">Back-End</h2>
        <ul className="flex items-center mb-32">
          <li><Image src={express}
                            width={150}
                            height={150}
                            alt="expressJs icon" 
                            className="mx-2"
                            />
            </li>
            <li><Image src={node}
                            width={100}
                            height={100}
                            alt="expressJs icon" 
                            className="mx-2"
                            />
            </li>
            <li><Image src={pg}
                            width={100}
                            height={100}
                            alt="expressJs icon" 
                            className="mx-2"
                            />
            </li>
        </ul>
      </div>

      <div id = 'projects' className="text-center w-full flex flex-col items-center  pb-96 ">
        <h1 className=" my-7 text-5xl pb-20">Projects</h1>
          <ul className="flex flex-col">
            <li>
              <h2 className="p-5 text-xl">The Hereafter</h2>
              <a href="https://hereafter-react.vercel.app/">
                <Image src={preview1}
                  width={500}
                  alt="expressJs icon" 
                  className="mx-2 border-1 rounded-md preview"
                />
                </a>
                <p className="p-5">A master site for a custom-made personal table-top RPG.</p>
            </li>
          </ul>
      </div>
     
    </main>
    <div id = 'interested' className="text-center w-full flex flex-col items-center  pb-96 ">
    <h1 className=" my-7 text-3xl pb-20">
        Interested? Contact me below.
      </h1>
    </div>
    <Footer/>
    </>
  );
}

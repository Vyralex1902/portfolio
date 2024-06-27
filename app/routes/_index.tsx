import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

import "../styles/home.css";

import mypic1 from "../assets/mypic1.jpeg"
import mypic2 from "../assets/mypic2.jpeg"
import mypic3 from "../assets/mypic3.png"
import backgroundImg2 from "../assets/mainPageBackground2.jpg"
import mainGradientBackground from "../assets/mainGradientBackground.jpg"
import mainPageTextClip from "../assets/mainPageTextClip.jpg"
import tertitimg from "../assets/terminaltitle.png"

import { FaYoutube, FaInstagram } from "react-icons/fa6";
import { RxDividerVertical } from "react-icons/rx";

export const meta: MetaFunction = () => {
  return [
    { title: "Luca's Portfolio" },
    { name: "Luca's Portfolio", content: "Welcome to Luca's Portfolio!" },
  ];
};

//Home Page

export default function Index() {

  useEffect(() => {
    const ppic = document.getElementById("profilepic1");
    if (ppic) {
      const rnd = Math.floor(Math.random() * 3);
      switch (rnd) {
        case 0: ppic.setAttribute('src', mypic2); break;
        case 1: ppic.setAttribute('src', mypic3); break;
        case 2: ppic.setAttribute('src', mypic1); break;
      }
    }
    if (
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    }
    else {
      document.documentElement.classList.remove('dark');
    }

    const alert_user = (i: any, t1: any, t2: any) => {
      Swal.fire({
        icon: i,
        title: t1,
        text: t2,
        customClass: 'swal',
      })
    }

    console.log("Page loaded.");

    if (window.innerWidth < 900) {
      alert_user('info', 'Hey!', "It looks like you're on mobile! I firmly advise you to use the destkop view or just use a PC. If you use your mobile device you will miss out on many cool animations and effects, plus, the interface is very bad.");
      document.getElementById("MobileAlert")?.classList.remove("hidden");
    }
    else {
      document.getElementById("MobileAlert")?.classList.add("hidden");
    }
  });

  return (
    <div id="fulldiv" style={{ width: "100%", height: "100%" }} className="fjc flex-col items-center align-top pt-24 bg-black">
      <input type="text" className="absolute hidden" id="pageName" value={"home"} readOnly></input>
      <img className="z-0 fixed top-0 h-[100vh] w-full opacity-80 blur-[1px]" src={backgroundImg2}></img>
      <div id="MobileAlert" className="absolute top-[75px] max-w-[90vw] text-yellow-400"><p>It looks like you're on mobile! I firmly advise you to use the destkop view or just use a PC.</p></div>
      <div id="middleHeading" className="z-10 bg-white bg-opacity-20 mt-5 fjc flex-row text-white w-[35vw] h-[55px] backdrop-blur-lg
      rounded-md text-center items-center align-middle">
        <div className="flex flex-row gap-2 text-gray-600">
          <Link to="programming" className="cursor-context-menu">
            <h3 className="hover:text-green-700">Coding Knowledge</h3>
          </Link>
          <p>|</p>
          <Link to="hobbies" className="cursor-context-menu">
            <h3 className="hover:text-green-700">Passions</h3>
          </Link>
          <p>|</p>
          <Link to="mystory" className="cursor-context-menu">
            <h3 className="hover:text-green-700">My Story</h3>
          </Link>
        </div>
      </div>
      <div id="middleStory" className="z-10 flex flex-col justify-center items-center align-top max-w-[25vw] bg-white bg-opacity-20 backdrop-blur-lg p-3 text-gray-600">
        <h2>I had started programming at the age of 13. I started with VB.NET, then I migrated to...</h2>
        <Link to="mystory" className="cursor-context-menu">
          <p className="underline text-blue-600">Continue reading</p>
        </Link>
      </div>
      <div id="topdiv" className="z-10 flex flex-col items-center align-top">
        <div className="z-10 flex flex-row items-center align-top">
          <h1 id="gigatitle" className="text-white animate-slideInFromTop">LUCA MONTANARI</h1><p id="gigatitlesub" className="text-5xl text-white animate-slideInFromTop">'S</p>
        </div>
        <h1 className="text-5xl text-white -mt-5 mb-5">Portfolio</h1>
        <div className="z-10 flex align-middle items-center gap-5">
          <div className='' id='downloadbtncontainer'>
            <div className='flex justify-center pt-2'>
              <div className='w-fit'>
                <Link to="hireme" className="cursor-context-menu">
                  <div className="downloadbtn_div">
                    <motion.button className="downloadbtn" whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.8 }}>
                      <div className='flex flex-col justify-center items-center'>
                        <p className="text-blue-600">Hire Me</p>
                      </div>
                    </motion.button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <img id="profilepic1" className="w-[10vw] h-[10vw] rounded-full border-2 border-gray-600 animate-reveal"></img>
          <div className='' id='downloadbtncontainer'>
            <div className='flex justify-center pt-2'>
              <div className='w-fit'>
                <Link to="contactme" className="cursor-context-menu">
                  <div className="downloadbtn_div">
                    <motion.button className="downloadbtn" whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.8 }}>
                      <div className='flex flex-col justify-center items-center'>
                        <p className="text-blue-600">Contact Me</p>
                      </div>
                    </motion.button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="fjc mt-3 mb-20 text-blue-300 underline text-lg"><a href="mailto:luca@lucasnode.com"><p>luca@lucasnode.com</p></a></div>
      </div>

      <img className="z-20 w-[28vw]" src={tertitimg}></img>
      <div id="myinfodiv" className="z-10 -mt-2 flex flex-col justify-center items-center align-top w-[27.9vw] bg-black bg-opacity-40 backdrop-blur-lg p-3
       text-gray-300">
        <div className="flex flex-col items-left align-top">
          <h2 className="text-4xl">
            <span className="text-green-400">.age</span>&nbsp; <span className="text-purple-400">$&gt;</span> 18 years old
            <br />
            <span className="text-green-400">.loc</span> &nbsp;&nbsp;<span className="text-purple-400">$&gt;</span> Living in <span className="text-green-500">It</span><span className="text-white">a</span><span className="text-red-500">ly</span>
            <br />
            <span className="text-green-400">.lang</span> <span className="text-purple-400">$&gt;</span> Speaking en & it
          </h2>
        </div>
      </div>
      <div id="myinfodiv1" className="z-10 mt-10 flex flex-col justify-center items-center align-top w-[425px] bg-black bg-opacity-40 backdrop-blur-lg p-3
       text-gray-300 rounded-md">
        <h2 className="text-3xl">
          <span className="text-purple-400">Current Profession &gt;</span> Student
        </h2>
      </div>
      <div id="freelancingSectionDiv" className="z-10 mt-10 mb-20 flex flex-col justify-center items-center align-top w-[40vw] bg-white bg-opacity-10
      backdrop-blur-md p-3 text-gray-300 rounded-lg">
        <div className="flex flex-col items-center align-top mb-6">
          <h1 className="text-4xl text-[#2dc590]">
            Freelancing Services
          </h1>
        </div>
        <div className="flex flex-col items-left align-top">
          <h2 className="text-xl">
            <span className="text-purple-400">~</span> front-end web development
            <br />
            <span className="text-purple-400">~</span> simple to advanced pc app development (macOS, Windows)
          </h2>
        </div>
        <div className='mt-4' id='downloadbtncontainer'>
          <div className='flex justify-center pt-2'>
            <div className='w-fit'>
              <Link to="buyservice" className="cursor-context-menu">
                <div className="downloadbtn_div">
                  <motion.button className="downloadbtn" whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.8 }}>
                    <div className='flex flex-col justify-center items-center'>
                      <p className="text-blue-600">Buy a service</p>
                    </div>
                  </motion.button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="z-10 fixed text-left bottom-3 left-3 opacity-70 text-white">
        <p>Make sure to disable any darkmode extension like Noir.</p>
      </div>
      <div className="z-10 fixed text-left bottom-3 right-3 opacity-70 text-white">
        <p>All copyright® rights reserved to Luca Montanari.</p>
      </div>

      <div id="bottomLinks" className="z-10 fixed bottom-0 flex flex-row text-center text-white bg-gray-700 bg-opacity-95 py-2 px-5">
        <div className="flex flex-row gap-2 align-midde text-white">
          <a href="https://is.gd/VuJcew" className="mt-[5px]">
            <FaYoutube className="h-8 w-8 hover:text-green-500" />
          </a>
          <RxDividerVertical className="w-8 h-8 mt-1" />
          <a href="https://is.gd/flpzrg" className="mt-[5px]">
            <FaInstagram className="w-8 h-8 hover:text-green-500" />
          </a>
        </div>
      </div>
    </div >
  );
}
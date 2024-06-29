import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

import "../styles/home.css";

import mypic1 from "../assets/mypic1.jpeg"
import mypic2 from "../assets/mypic2.jpeg"
import mypic3 from "../assets/mypic3.png"
import mypic3noback from "../assets/mypic3noback.png"
import MyMainPic from "../assets/mypic2noback.png"
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
    // const ppic = document.getElementById("profilepic1");
    // if (ppic) {
    //   const rnd = Math.floor(Math.random() * 3);
    //   switch (rnd) {
    //     case 0: ppic.setAttribute('src', mypic2); break;
    //     case 1: ppic.setAttribute('src', mypic3); break;
    //     case 2: ppic.setAttribute('src', mypic1); break;
    //   }
    // }
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

    //const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    //   document.getElementById("glitchText")!.onmouseover = event => {
    //     setInterval(() => {
    //       document.getElementById("glitchText")!.innerText.split('')
    //         .map((letter, index) => {
    //           if (index < 1) {
    //             return document.getElementById("glitchText")!.getAttribute('value');
    //           }
    //                   .map(letter => letters[Math.floor(Math.random() * 26)]).join('');
    //         })
    //     }, 30);
    //   }
  });

  return (
    <div id="fulldiv" style={{ width: "100vw", height: "100%" }} className="fjc flex-col items-center align-top pt-24 bg-[#081b29]">
      <input type="text" className="absolute hidden" id="pageName" value={"home"} readOnly></input>
      {/* <img className="z-0 fixed top-0 h-[100vh] w-full opacity-[0.03] blur-[1px]" src={backgroundImg2}></img> */}
      <div id="MobileAlert" className="absolute top-[75px] max-w-[90vw] text-yellow-400"><p>It looks like you're on mobile! I firmly advise you to use the destkop view or just use a PC.</p></div>
      <div className="w-screen h-screen flex flex-col items-center mt-[20vh] -mb-[25vh]">
        <div className="w-screen justify-center flex"><div id="ttldiv" className="z-10 flex flex-col items-left align-middle">
          <h1 id="ttl" className="text-white animate-slideInFromTop text-[90px] font-[Montserrat]">Welcome, I'm Luca</h1>
          <h2 id="subttl" className="ml-1 bg-gradient-to-r from-blue-600 to-cyan-400 inline-block text-transparent bg-clip-text text-[50px] font-[Montserrat]">Web and App Developer</h2>
          <h2 className="ml-2 mb-5 text-cyan-700 text-[20px] font-[Montserrat]">Building websites and apps  for startups and individuals with <span className="underline">creativity</span> in mind.</h2>
          <div className="flex gap-2">
            <p className="text-white font-[Montserrat] ml-2">A thriving life starts from the ground up and rises steadily...</p>
            <Link to="mystory" className="cursor-context-menu">
              <p className="underline text-purple-600 hover:text-purple-500">read my story</p>
            </Link></div>
          <div className="z-10 flex justify-start gap-5 mt-5 ml-2">
            <div id='downloadbtncontainer'>
              <div className='flex justify-start pt-2'>
                <div className='w-fit'>
                  <Link to="hireme" className="cursor-context-menu">
                    <div className="downloadbtn_div">
                      <motion.button className="homepagebtn" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.8 }}>
                        <div className='flex flex-col justify-center items-center'>
                          <p>Hire Me</p>
                        </div>
                      </motion.button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div id='downloadbtncontainer'>
              <div className='flex justify-center pt-2'>
                <div className='w-fit'>
                  <Link to="contactme" className="cursor-context-menu">
                    <div className="downloadbtn_div">
                      <motion.button className="homepagebtn" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.8 }}>
                        <div className='flex flex-col justify-center items-center'>
                          <p>Contact Me</p>
                        </div>
                      </motion.button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start mt-5 ml-3 text-lg text-left"><a href="mailto:luca@lucasnode.com">
            <p className="text-gray-400 underline hover:text-purple-600">luca@lucasnode.com</p></a></div>
        </div>
          <img id="profilepic1" className="w-[22vw] animate-revealmainimg opacity-[0.2] hover:opacity-[0.5] transition-all" src={MyMainPic}></img>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} viewport={{ amount: 0.9 }}>
        <img id="terminalimg" className="z-10 w-[40vw]" src={tertitimg}></img>
        <div id="myinfodiv" className="z-10 -mt-2 flex flex-col justify-center items-center align-top w-[39.8vw] bg-black bg-opacity-40 backdrop-blur-lg p-3
       text-gray-300 shadow-xl">
          <div className="flex flex-col items-left align-top">
            <h2 className="text-4xl">
              <span className="text-green-400">.age</span>&nbsp; <span className="text-purple-400">$&gt;</span> 18 years old
              <br />
              <span className="text-green-400">.loc</span> &nbsp;&nbsp;<span className="text-purple-400">$&gt;</span> Living in <span className="text-green-500">It</span><span className="text-white">a</span><span className="text-red-500">ly</span>
              <br />
              <span className="text-green-400">.lang</span> <span className="text-purple-400">$&gt;</span> Speaking en & it
            </h2>
            <h2 className="text-3xl mt-5">
              <span className="text-purple-400">Current Profession &gt;</span> Student
            </h2>
          </div>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} viewport={{ amount: 0.9 }} id="freelancingSectionDiv" className="z-10 mt-10 mb-10 flex flex-col justify-center items-center align-top w-[40vw] bg-black bg-opacity-30
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
                  <motion.button className="homepagebtnlarger" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.8 }}>
                    <div className='flex flex-col justify-center items-center'>
                      <p>Buy a service</p>
                    </div>
                  </motion.button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0.25 }}
        whileInView={{ opacity: 1 }} viewport={{ amount: 0.9 }} id="freelancingSectionDiv" className="z-10 mb-10 flex flex-col justify-center items-center align-top w-[40vw] bg-black bg-opacity-30
      backdrop-blur-md p-3 text-gray-300 rounded-lg">
        <div className="flex flex-col items-center align-top">
          <h1 className="text-4xl text-[#2dc590]">
            Support my projects
          </h1>
          <p className="mt-5 max-w-[30vw]">I've never earned anything with my projects and hours of 'work'. Any monetary donation would be insanely helpful.</p>
        </div>
        <div className='mt-4' id='downloadbtncontainer'>
          <div className='flex justify-center pt-2'>
            <div className='w-fit'>
              <Link to="donate" className="cursor-context-menu">
                <div className="downloadbtn_div">
                  <motion.button className="homepagebtnlarger" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.8 }}>
                    <div className='flex flex-col justify-center items-center'>
                      <p>Donate</p>
                    </div>
                  </motion.button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>


      <motion.div initial={{ opacity: 0.25 }}
        whileInView={{ opacity: 1 }} viewport={{ amount: 0.9 }} id="freelancingSectionDiv" className="z-10 mb-20 flex flex-col justify-center items-center align-top w-[40vw] bg-black bg-opacity-30
      backdrop-blur-md p-3 text-gray-300 rounded-lg">
        <div className="flex flex-col items-center align-top">
          <h1 className="text-4xl text-[#2dc590]">
            My Tech
          </h1>
          <p className="mt-5 mb-3 max-w-[30vw] font-[RanchinoLight] text-3xl">My everyday tech right now</p>
        </div>
        <div className="flex justify-center flex-col">
          <p>
            <span className="text-purple-400">~</span> iPhone 15 Pro Max
            <br /><span className="text-purple-400">~</span> AirPods Pro 1
            <br /><span className="text-purple-400">~</span> Apple Watch SE 2
            <br /><span className="text-purple-400">~</span> MacBook Air M3 15'
            <br /><span className="text-purple-400">~</span> Apple Magic Mouse
            <br /><span className="text-purple-400">~</span> Windows Desktop PC (<Link to="pcspecs" className="cursor-context-menu"><span className="text-purple-600 hover:text-purple-500">specs</span></Link>)
          </p>
        </div>
      </motion.div>

      <div className="z-10 fixed text-left bottom-3 left-3 opacity-70 text-white">
        <p>Make sure to disable any darkmode extension like Noir.</p>
      </div>
      <div className="z-10 fixed text-left bottom-3 right-3 opacity-70 text-white">
        <p>All copyright® rights reserved to Luca Montanari.</p>
      </div>

      <div id="bottomLinks" className="z-10 fixed bottom-0 flex flex-row text-center text-white bg-gray-700 backdrop-blur-md bg-opacity-80 py-2 px-5">
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

// function glitchEffect() {
//       return (
//         <div className="glitchText">
//           <h1 data-value="TEST" id="glitchText">TEST</h1>
//         </div>
//       );
//     }
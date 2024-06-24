import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import "../styles/home.css";

import mypic2 from "../assets/mypic2.jpeg"
import backgroundImg1 from "../assets/mainPageBackground.jpg"
import macFrame from "../assets/mac-frame.png"
import tertitimg from "../assets/terminaltitle.png"

import { FaYoutube, FaInstagram } from "react-icons/fa6";
import { RxDividerVertical } from "react-icons/rx";

export const meta: MetaFunction = () => {
  return [
    { title: "Luca's Portfolio" },
    { name: "Luca's Portfolio", content: "Welcome to Luca's Portfolio!" },
  ];
};

export default function Index() {

  useEffect(() => {
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

    console.log("Page loaded.");
  });

  return (
    <div style={{ width: "100%", height: "100%" }} className="flex flex-col justify-center items-center align-top pt-24 bg-white dark:bg-[#1E1E1E]">
      <img className="z-0 absolute top-0 h-[100vh] w-full" src={backgroundImg1}></img>
      {/* <img className="z-0 absolute w-[140vh] mt-[70px] opacity-75" src={macFrame}></img> */}
      <div id="topdiv" className="z-10 flex flex-col justify-center items-center">
        <h1 id="title" className="darkmode-text-h2 animate-slideInFromTop">Luca's Portfolio</h1>
        <img src={mypic2} className="w-24 h-24 rounded-full border-2 border-gray-600 animate-reveal"></img>
      </div>
      <div id="middleHeading" className="z-10 bg-gray-400 bg-opacity-30 mt-5 flex flex-row text-black dark:text-white w-[75vh] h-[55px] backdrop-blur-lg border-1 border-gray-300
      rounded-md text-center items-center justify-center align-middle">
        <div className="flex flex-row gap-2 text-gray-600">
          <a href="/portfolio/programming">
            <h3 className="hover:text-green-700">Coding Knowledge</h3>
          </a>
          <p>|</p>
          <a href="/portfolio/hobbies">
            <h3 className="hover:text-green-700">Passions</h3>
          </a>
          <p>|</p>
          <a href="/portfolio/mystory">
            <h3 className="hover:text-green-700">My Story</h3>
          </a>
        </div>
      </div>
      <div id="middleStory" className="z-10 flex flex-col justify-center items-center align-top max-w-[500px] bg-gray-400 bg-opacity-40 backdrop-blur-lg p-3 text-gray-700">
        <h2>I had started programming at the age of 13. I started with VB.NET, then I migrated to...</h2>
        <a href="/portfolio/mystory"><p className="underline text-blue-600">Continue reading</p></a>
      </div>
      <div className="flex flex-row gap-8 mt-3">
        <div className='' id='downloadbtncontainer'>
          <div className='flex justify-center pt-2'>
            <div className='w-fit'>
              <a href='/'>
                <div className="downloadbtn_div">
                  <motion.button className="downloadbtn" whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.8 }}>
                    <div className='flex flex-col justify-center items-center'>
                      <p>Hire Me</p>
                    </div>
                  </motion.button>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className='' id='downloadbtncontainer'>
          <div className='flex justify-center pt-2'>
            <div className='w-fit'>
              <a href='/portfolio/contactme'>
                <div className="downloadbtn_div">
                  <motion.button className="downloadbtn" whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.8 }}>
                    <div className='flex flex-col justify-center items-center'>
                      <p>Contact Me</p>
                    </div>
                  </motion.button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <img className="z-10 w-[425px] h-[20px]" src={tertitimg}></img>
      <div id="myinfodiv" className="z-10 -mt-1 flex flex-col justify-center items-left align-top w-[425px] bg-black bg-opacity-40 backdrop-blur-lg p-3
       text-gray-300 rounded-md">
        <h2 className="text-3xl">
          <span className="text-green-400">.age</span>&nbsp; <span className="text-purple-400">$&gt;</span> 18 years old
          <br />
          <span className="text-green-400">.loc</span> &nbsp;&nbsp;<span className="text-purple-400">$&gt;</span> Living in <span className="text-green-500">It</span><span className="text-white">a</span><span className="text-red-500">ly</span>
          <br />
          <span className="text-green-400">.lang</span> <span className="text-purple-400">$&gt;</span> Speaking en & it
        </h2>
      </div>
      <div id="myinfodiv" className="z-10 mt-10 flex flex-col justify-center items-center align-top w-[425px] bg-black bg-opacity-40 backdrop-blur-lg p-3
       text-gray-300 rounded-md">
        <h2 className="text-3xl">
          <span className="text-purple-400">Current Profession &gt;</span> Student
        </h2>
      </div>
      {/* <div className="z-10 absolute bottom-0 flex flex-row text-center text-white">
        <h1 id="quote" className="mb-10">
          "Try whatever you can, go beyond your limits."
          <p className="text-3xl">- Luca M.</p>
        </h1>
      </div> */}
      <div id="bottomLinks" className="z-10 absolute bottom-0 flex flex-row text-center text-white bg-gray-700 bg-opacity-95 py-2 px-5">
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
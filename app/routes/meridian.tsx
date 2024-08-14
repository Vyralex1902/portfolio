import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


import "../styles/meridian.css";
import "../styles/global.css";
import milogo from "../assets/milogo.png"
import mpatt from "../assets/Meridian Pattern.png"


export default function Programming() {

  useEffect(() => {
    const headingIconElement1 = document.getElementById("headingIcon1");
    const headingIconElement3 = document.getElementById("headingIcon3");
    const headingIconElement4 = document.getElementById("headingIcon4");

    const headingIconElement2 = document.getElementById("headingIcon2");
    headingIconElement2!.classList.remove("heading-icon");
    headingIconElement2!.classList.add("heading-icon-selected");

    headingIconElement3!.classList.remove("heading-icon-selected");
    headingIconElement3!.classList.add("heading-icon");
    headingIconElement1!.classList.remove("heading-icon-selected");
    headingIconElement1!.classList.add("heading-icon");
    headingIconElement4!.classList.remove("heading-icon-selected");
    headingIconElement4!.classList.add("heading-icon");

    console.log("Page loaded.");
  });

  return (
    <div className="flex flex-col align-top">
      <input type="text" className="absolute hidden" id="pageName" value={"meridian"} readOnly></input>
      <div style={{ width: "100vw", height: "auto" }} className="flex flex-col items-center darkmode-bg
       text-black dark:text-white">
        {/* <img src={mpatt} className="fixed w-[100vw] h-auto opacity-10"></img> */}
        <div id="topdiv" className="z-10 flex flex-col justify-center items-center mb-5 mt-20">
          <h1 id="title" className="darkmode-text-h2 animate-slideInFromTop">Project Meridian (MKI)</h1>
        </div>
        <div id="sectionContainer" className="flex flex-col items-center h-[100vh]">
          <div id="sectionDiv">
            <h2 className="text-center text-3xl">Welcome to Project <span id="futuraf">Meridian MKI</span></h2>
            <p className="text-md max-w-[500px] text-gray-400 mb-2 -mt-1 text-center">where "virtual assistant" takes on a completely different meaning.
            </p>
            <p>
              <span className="text-purple-400">&gt;</span> Release date: <span className="text-cyan-800 dark:text-cyan-500">TBD</span><br />
              <span className="text-purple-400">&gt;</span> Devopment time: <span className="text-cyan-800 dark:text-cyan-500">25th July 2024 -&gt; TBD</span><br />
              <span className="text-purple-400">&gt;</span> Languages used: <span className="text-cyan-800 dark:text-cyan-500">Python</span>
              <span className="text-black dark:text-white">,</span>
              <span className="text-cyan-800 dark:text-cyan-500"> C</span>
              <span className="text-black dark:text-white">,</span>
              <span className="text-cyan-800 dark:text-cyan-500"> C++</span>
              <br />
              <span className="text-purple-400">&gt;</span> Open-Source: <span className="text-cyan-800 dark:text-cyan-500">Not yet</span><br />
              <span className="text-purple-400">&gt;</span> "Pro" price: <span className="text-cyan-800 dark:text-cyan-500">TBD</span><br />
            </p>
          </div>
          <p className="text-3xl -mb-7 mt-5 z-10 text-white">Presented and developed by</p>
          <img src={milogo} className="w-[50vw] h-auto dark:bg-transparent bg-gray-700 rounded-md"></img>
          <div className="flex gap-5 mb-10">
            <div id='downloadbtncontainer'>
              <div className='flex justify-start pt-2'>
                <div className='w-fit'>
                  <Link to="tutorial" className="cursor-context-menu" >
                    <div className="downloadbtn_div">
                      <motion.button id="btnlink" className="w-[250px] h-[52px] bg-transparent border-2 border-blue-600 rounded-[10px] text-blue-600
                         font-bold hover:bg-blue-600 hover:text-[#081b29] text-lg font-[Montserrat] transition-all" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.8 }}>
                        <div className='flex justify-center items-center'>
                          <p className="-ml-5">Get Started</p>
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
                  <Link to="docs" className="cursor-context-menu">
                    <div className="downloadbtn_div">
                      <motion.button className="w-[250px] h-[52px] bg-transparent border-2 border-blue-600 rounded-[10px] text-blue-600
                         font-bold hover:bg-blue-600 hover:text-[#081b29] text-lg font-[Montserrat] transition-all" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.8 }}>
                        <div className='flex flex-col justify-left -ml-5'>
                          <p>Docs</p>
                        </div>
                      </motion.button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div id="sectionDiv">
            <h2 className="text-center">What is it?</h2>
            <p className="max-w-[50vw]">
              <span id="futuraf">Meridian MKI</span> is a project designed to be the Final-Level virtual assistant for macOS, Windows and maybe even iOS.<br />
              It fuses every useful feature that a virtual assistant could have and also bundles even rarer features usually only available with third party software.<br />
              It basically is a mix of useful tools. It can be useful for everybody, from developers to designers to software enthusiast.<br />
              I also made up a company name: "<span id="futuraf">Meridian Industries</span>" that might actually become reality one day.<br />
              I designed <span id="futuraf">Meridian</span>'s and <span id="futuraf">Meridian Industries</span>' logos myself.
            </p>
          </div>
          <div id="sectionDiv">
            <h2 className="text-center">Why?</h2>
            <p className="max-w-[50vw]">
              This project has been created mainly for myself (Luca Montanari), to make my life easier and learn Python in the meantime.<br />
              But making this public sounds good to me, maybe other people can find this useful too.<br />
              I took inspiration from Iron-Man's Jarvis and other real virtual assistants.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
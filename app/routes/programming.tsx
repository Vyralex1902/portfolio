import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


import "../styles/programming.css";
import "../styles/global.css";

import arrowsvg from "../assets/arrow.svg"


export default function Programming() {

  useEffect(() => {
    console.log("Page loaded.");
  });

  return (
    <div className="flex flex-col align-top">
      <input type="text" className="absolute hidden" id="pageName" value={"programming"} readOnly></input>
      <div style={{ width: "100%", height: "100vh" }} className="flex flex-col items-center align-top darkmode-bg
       text-black dark:text-white">
        <div id="topdiv" className="z-10 flex flex-col justify-center items-center mb-10 mt-20">
          <h1 id="title" className="darkmode-text-h2 animate-slideInFromTop">Luca's Coding Knowledge</h1>
        </div>
        <div id="sectionContainer" className="flex flex-col items-start h-[100vh]">
          <div id="sectionDiv">
            <h2>Programming Languages I currently know (2024)</h2>
            <p className="text-sm max-w-[500px] text-gray-400 my-1 text-center -ml-6">The number next to the language, inside of the brackets,
              is the total amount of years of experience I have with that specific language. <br />y = years; m = months
            </p>
            <p>
              <span className="text-purple-400">&gt;</span> C# <span className="text-cyan-800 dark:text-cyan-500">[5y]</span><br />
              <span className="text-purple-400">&gt;</span> JS & TS <span className="text-cyan-800 dark:text-cyan-500">[4m]</span><br />
              <span className="text-purple-400">&gt;</span> HTML <span className="text-cyan-800 dark:text-cyan-500">[4m]</span><br />
              <span className="text-purple-400">&gt;</span> CSS <span className="text-cyan-800 dark:text-cyan-500">[4m]</span><br />
            </p>
          </div>
          <div id="sectionDiv">
            <h2>Programming Languages I am currently learning (2024)</h2>
            <p>
              <span className="text-purple-400">&gt;</span> Swift
            </p>
          </div>
          <div id="sectionDiv">
            <h2>Languages I will probably study</h2>
            <p>
              <span className="text-purple-400">&gt;</span> Python
            </p>
          </div>
          <div id='downloadbtncontainer' className="mt-[10vh]">
            <div className='flex justify-start pt-2'>
              <div className='w-fit'>
                <Link to="myprojects" className="cursor-context-menu" >
                  <div className="downloadbtn_div">
                    <motion.button id="btnlink" className="w-[250px] h-[52px] bg-transparent border-2 border-blue-600 rounded-[10px] text-blue-600
    font-bold hover:bg-blue-600 hover:text-[#081b29] text-lg font-[Montserrat] transition-all" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.8 }}>
                      <div className='flex justify-center items-center'>
                        <p className="-ml-5">Explore my projects</p>
                        <img id="arrowimg1" src={arrowsvg}></img>
                      </div>
                    </motion.button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative bottom-6">
          <a href="/portfolio/contactme">
            <p className="underline text-blue-600 dark:text-blue-500">
              Suggest a programming language
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
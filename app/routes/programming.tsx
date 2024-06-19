import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import "../styles/programming.css";
import "../styles/global.css";

import mypic2 from "../assets/mypic2.jpeg"

export default function Programming() {

  useEffect(() => {
    console.log("Page loaded.");
  });

  return (
    <div>
      {/* <img src={mypic2} className="w-1 h-1 rounded-full animate-reveal absolute left-0 ml-5"></img> */}
      <div style={{ width: "100%", height: "100%" }} className="flex flex-col justify-center items-center align-top pt-20 bg-white dark:bg-[#1E1E1E]
       text-black dark:text-white">
        <div id="topdiv" className="z-10 flex flex-col justify-center items-center mb-10">
          <h1 id="title" className="darkmode-text-h2 animate-slideInFromTop">Luca's Coding Knowledge</h1>
        </div>
        <div id="sectionDiv">
          <h2>Programming Languages I currently know (2024)</h2>
          <p>
            <span className="text-purple-400">&gt;</span> C# <br />
            <span className="text-purple-400">&gt;</span> JS & TS <br />
            <span className="text-purple-400">&gt;</span> HTML <br />
            <span className="text-purple-400">&gt;</span> CSS <br />
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
      </div>
    </div>
  );
}
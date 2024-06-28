import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";

import "../styles/global.css";

export default function PCSpecsPage() {

  useEffect(() => {
    console.log("Page loaded.");
  });

  return (
    <div className="flex flex-col align-top bg-white dark:bg-[#1E1E1E]">
      <input type="text" className="absolute hidden" id="pageName" value={"pcspecs"} readOnly></input>
      <div style={{ width: "100%", height: "100vh" }} className="flex flex-col items-center align-top bg-white dark:bg-[#1E1E1E] text-white">
        <div id="topdiv" className="z-10 flex flex-col align-top items-center mt-20">
          <h1 id="title" className="text-white animate-slideInFromTop">My Desktop PC's Specs</h1>
        </div>
        <div className="z-10 flex flex-col align-top items-center max-w-[70vw] mt-10 mb-10 backdrop-blur-md bg-black bg-opacity-5 rounded-lg p-4" id="text-container">
          <p className="text-white text-3xl">
            <span className="text-purple-400">WIN. VERSION ~</span> Windows 11 Pro
            <br /><span className="text-purple-400">CPU ~</span> Intel i7-11700 2.5Ghz
            <br /><span className="text-purple-400">eGPU ~</span> NVIDIA RTX 3060
            <br /><span className="text-purple-400">RAM ~</span> 16GB
            <br /><span className="text-purple-400">STORAGE ~</span> 1TB SAMSUNG SSD
            <br /><span className="text-purple-400">MAIN MONITOR ~</span> Samsung Odyssey G5 2K 144Hz
          </p>
        </div>
      </div>
    </div>
  );
}
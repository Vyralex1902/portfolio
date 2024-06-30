import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "../styles/docs.css";
import "../styles/global.css";

// export const meta: MetaFunction = () => {
//   return [
//     { title: "Luca Docs" },
//     { name: "Luca Docs", content: "My documentations about topics I've found interesting and hard to find answers about. From 2024." },
//   ];
// };

export default function DocsPage() {

  useEffect(() => {
    console.log("Page loaded.");
  });

  return (
    <div className="flex flex-col align-top">
      <input type="text" className="absolute hidden" id="pageName" value={"docs"} readOnly></input>
      <div style={{ width: "100%", height: "100vh" }} className="flex flex-col items-center align-top darkmode-bg
       text-black dark:text-white">
        <div id="topdiv" className="z-10 flex flex-col justify-center items-center mb-10 mt-20">
          <h1 id="title" className="darkmode-text-h2 animate-slideInFromTop">Luca's Docs</h1>
          <h2>My documentations about topics I've found interesting and hard to find answers about. Since june 2024.</h2>
        </div>
        <div className="flex flex-row justify-center">
          <input type="text" placeholder="Search for a topic" className="placeholder-gray-400 bg-gray-800"></input>
        </div>
        <div id="sectionContainer" className="items-center text-center h-[100vh]">
          <div id="sectionDiv" className="flex flex-col items-center mb-10">
            <h2 className="text-3xl">Learning</h2>
            <p className="text-sm max-w-[500px] text-cyan-600 dark:text-cyan-400 text-center">
              sep2023-now
            </p>
          </div>
          <div id="sectionDiv" className="flex flex-col items-center mb-10">
            <h2>Tech</h2>
            <p className="text-sm max-w-[500px] text-cyan-600 dark:text-cyan-400 text-center">
              jul2006-now
            </p>
          </div>
          <div id="sectionDiv" className="flex flex-col items-center mb-10">
            <h2>Gym / Weight Lifting</h2>
            <p className="text-sm max-w-[500px] text-cyan-600 dark:text-cyan-400 text-center">
              dec2022-now
            </p>
          </div>
          <div id="sectionDiv" className="flex flex-col items-center mb-10">
            <h2>Hiking</h2>
            <p className="text-sm max-w-[500px] text-cyan-600 dark:text-cyan-400 text-center">
              jul2018-now
            </p>
          </div>
          <div id="sectionDiv" className="flex flex-col items-center mb-10">
            <h2>Fountain Pens</h2>
            <p className="text-sm max-w-[500px] text-cyan-600 dark:text-cyan-400 text-center">
              feb2024-now
            </p>
          </div>
          <div id="sectionDiv" className="flex flex-col items-center">
            <h2>Card Magic Tricks</h2>
            <p className="text-sm max-w-[500px] text-cyan-600 dark:text-cyan-400 text-center">
              feb2024-march2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
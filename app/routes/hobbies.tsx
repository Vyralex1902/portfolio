import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import "../styles/hobbies.css";
import "../styles/global.css";

export default function HobbiesPage() {

  useEffect(() => {
    console.log("Page loaded.");
  });

  return (
    <div className="flex flex-col align-top">
      <div style={{ width: "100%", height: "100vh" }} className="flex flex-col items-center align-top bg-white dark:bg-[#1E1E1E]
       text-black dark:text-white">
        <div id="topdiv" className="z-10 flex flex-col justify-center items-center mb-10 mt-20">
          <h1 id="title" className="darkmode-text-h2 animate-slideInFromTop">Luca's Hobbies and Free Time Activities</h1>
        </div>

      </div>
    </div>
  );
}
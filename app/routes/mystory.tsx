import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { FaCrown } from "react-icons/fa6";

import "../styles/mystory.css";
import "../styles/global.css";

export default function HobbiesPage() {

  useEffect(() => {


    console.log("Page loaded.");
  });

  return (
    <div style={{ width: "100%", height: "100%" }} className="flex flex-col align-top bg-[rgba(14,16,17,1)] mb-10">
      <input type="text" className="absolute hidden" id="pageName" value={"mystory"} readOnly></input>
      <div style={{ width: "100%", height: "100vh" }} className="flex flex-col items-center align-top bg-[rgba(14,16,17,1)] text-white">
        <div id="topdiv" className="z-10 flex flex-col align-top items-center mt-20 mb-10">
          <h1 id="title" className="text-white animate-slideInFromTop">Luca's Story</h1>
          <h3 id="subtitle" className="text-sky-600">How I started programming</h3>
        </div>
        <div className="z-10 bg-[rgba(14,16,17,1)] flex flex-col align-top items-center max-w-[70vw]">
          <p id="typedtext" className="text-white text-xl">
            It all started in <span className="text-blue-500">January 2016</span> when I was 9 years old. I began to develop an interest in coding. Initially, I watched YouTube videos about programming and coding. Since my English skills were quite poor, I primarily watched Italian videos. These videos provided me with a general overview of what coding was and the challenges involved in learning it. At first, I thought, "Okay, this is hard. Let's just wait and add it to my future schedule.”<br /><br />
            At the <span className="text-blue-500">age of 13</span>, I began learning my first programming language: VB.NET. After grasping the basics of this language, I decided to enhance my skills by learning C#, a more advanced high-level programming language primarily used for creating applications with the Microsoft .NET Framework. I dedicated about four years to learning and practicing C# before expanding my skill set with additional programming languages. I knew from the start that programming would be my future career.<br /><br />
            I have always been passionate about technology, especially software. For me, programming is the next level of loving tech because it involves creating it. While it's not hardware, software is crucial for any smart technology. Being a programmer opens up countless opportunities, from full-stack web development to PLC programming. The limitless possibilities are one of the things I love most about programming.<br /><br />
            After deciding to learn new languages, I immediately jumped into JavaScript and web development. I always admired the amazing websites I encountered and wanted to create them myself. Later, I also learned TypeScript, HTML, and CSS, and decided that front-end web development would be my primary focus when searching for a job. I will hopefully graduate from high school in <span className="text-blue-500">2025</span>. I’ll also attended university and get a degree in IT. I’ll then also get a Master's degree and begin searching for a job.
            <br /><br />Unfortunately, I've lost every project that I've made before 2024... which were a lot. Since I lost every backup of them, now I have no
            memory left of them, no screenshots, no files, nothing. This is very bad news for me, since I have no proof of my work with C# of the past 5 years.
          </p>
        </div>
      </div>
    </div>
  );
}
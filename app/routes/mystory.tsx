import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { FaCrown } from "react-icons/fa6";
import { PiNumberFour, PiNumberCircleThree, PiNumberCircleTwo, PiNumberFive, PiNumberSix } from "react-icons/pi";

import "../styles/mystory.css";
import "../styles/global.css";

export default function HobbiesPage() {

  useEffect(() => {
    console.log("Page loaded.");
  });

  return (
    <div className="flex flex-col align-top">
      <div style={{ width: "100%", height: "100vh" }} className="flex flex-col items-center align-top bg-white dark:bg-[#1E1E1E]
       text-black dark:text-white">
        <div id="topdiv" className="z-10 flex flex-col align-top items-center mt-20">
          <h1 id="title" className="darkmode-text-h2 animate-slideInFromTop">Luca's Story</h1>
          <h3 id="subtitle">How I started programming</h3>
        </div>
        <div className="flex flex-col align-top items-center max-w-[100vh] mt-10" id="text-container">
          <p className="text-black dark:text-white">
            It all started during january 2016. I was 9. I started getting interested on coding.
            I then proceded to have a look at some youtube videos about programming and coding.
            I watched some italian videos, because my english knowledge was pretty much under the floor.
            With those videos, I got a pretty soft and general overview about what coding really was and how hard learning it was going to be.
            I then thought "Okay, this is hard. Let's just wait and add it to my future schedule.".
            At the age of 13 I actually started learning my first programming language: VB.NET.

          </p>
        </div>
      </div>
    </div>
  );
}
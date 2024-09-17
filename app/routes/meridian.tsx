import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


import "../styles/meridian.css";
import "../styles/global.css";
import milogo from "../assets/milogo.png"
import mlogo from "../assets/Meridian.png"
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

  const features = [
    "Task scheduling and automation",
    "Process Management",
    "Built-in anti-malware scan",
    "Personal devices Interconnection",
    "Files and strings encryption",
    "Translator and string manipulation",
    "Language detection",
    "Triggered actions",
    "Network management",
    "Customizable settings",
    "O.C.R.",
    "Meridian-AI",
    "Resources monitoring",
    "Context awareness",
    "Behavioral adaptation",
    "Conversational optimization",
    "Notification to devices",
    "File manipulation",
    "Advanced CLI tools",
    "String correction",
    "Device settings management",
    "Describe documents",
    "Describe images",
    "Tell facts and jokes",
    "Play minigames",
    "Advanced IRL calculations (BMI,BAC)",
    "Machine optimization",
    "Encryption of files and strings",
    "Password manipulation",
    "AI text manipulation",
    "Multiple LLM selection",
    "Hidden eastereggs",
  ]

  return (
    <div className="flex flex-col align-top">
      <input type="text" className="absolute hidden" id="pageName" value={"meridian"} readOnly></input>
      <div id="heroSection" style={{ width: "100vw", height: "100vh" }} className="flex flex-col items-center align-middle text-white">
        <div className="flex w-[100vw] h-[auto] justify-center mt-[15vh]">
          <h1 id="title1" className="text-8xl font-[Futura]">Meridian</h1>
          <h1 className="text-8xl font-[K2D] bg-gradient-to-r from-[#006EFF] via-[#00A8E2] to-[#00FFB7] inline-block text-transparent bg-clip-text">NEXT</h1>
        </div>
        <div className="flex items-center">
          <img src={milogo} className="w-[50vw] h-auto bg-transparent -ml-5"></img>
          <h1 id="mki" className="text-4xl -ml-5">MKI</h1>
        </div>
        <div className="flex flex-col items-center mt-10">
          <h1 id="catchPhrase" className="text-5xl font-[Poppins]">More than your average virtual assistant</h1>
          <img src={mlogo} className="w-[20vw] h-auto bg-transparent mt-10"></img>
        </div>
      </div>


      <div style={{ width: "100vw", height: "auto" }} className="flex flex-col items-center text-white bg-gradient-to-b from-[#0C338C] to-[#00AF92]">
        <div className="mb-10">
          <h1 className="text-5xl font-[Poppins]">
            <span className="text-[#006EFF] font-[K2D] text-6xl">N</span>
            atural&nbsp;
            <span className="text-[#00A8E2] font-[K2D] text-6xl">E</span>
            ngagement&nbsp;
            <span className="text-[#00FFB7] font-[K2D] text-6xl">X</span>
            ecution&nbsp;
            <span className="text-[#00FFB7] font-[K2D] text-6xl">T</span>
            ecnologies
          </h1>
        </div>
        <motion.div initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }} viewport={{ amount: 0.8 }}>
          <div id="sectionDivFirst" className="backdrop-blur-md rounded-xl bg-white/5">
            <div className="text-center flex flex-col">
              <h2 className="text-3xl">Welcome to Project <span id="futuraf">Meridian MKI</span></h2>
              <p className="text-md text-gray-400 mb-2 w-[100%]">where "virtual assistant" takes on a completely different meaning.
              </p>
            </div>
            <p className="pl-[120px]">
              <span className="text-purple-400">&gt;</span> Release date: <span className="text-orange-400 ">TBD</span><br />
              <span className="text-purple-400">&gt;</span> Estimated release date: <span className="text-orange-400 ">13/07/2025</span><br />
              <span className="text-purple-400">&gt;</span> Devopment time: <span className="text-orange-400 ">25th July 2024 -&gt; TBD</span><br />
              <span className="text-purple-400">&gt;</span> Languages used: <span className="text-orange-400 ">Python</span>
              <span className="text-white">,</span>
              <span className="text-orange-400"> C</span>
              <span className="text-white">,</span>
              <span className="text-orange-400"> C++</span>
              <br />
              <span className="text-purple-400">&gt;</span> Open-Source: <span className="text-orange-400 ">Not yet</span><br />
              <span className="text-purple-400">&gt;</span> "Pro" price: <span className="text-orange-400 ">TBD</span><br />
            </p>
          </div>
        </motion.div>
        <div id="sectionContainer" className="flex flex-col items-center h-[auto] mb-20">
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
            <h2 className="text-center text-3xl">What is it?</h2>
            <p className="max-w-[50vw]">
              <span id="futuraf">Meridian MKI</span> is a project designed to be the Final-Level virtual assistant for macOS, Windows and maybe even iOS.<br />
              It fuses every useful feature that a virtual assistant could have and also bundles even rarer features usually only available with third party software.<br />
              It basically is a mix of useful tools. It can be useful for everybody, from developers to designers to software enthusiast.<br />
              I also made up a company name: "<span id="futuraf">Meridian Industries</span>" that might actually become reality one day.<br />
              I designed <span id="futuraf">Meridian</span>'s and <span id="futuraf">Meridian Industries</span>' logos myself.
            </p>
          </div>
          <div id="sectionDiv">
            <h2 className="text-center text-3xl">Why?</h2>
            <p className="max-w-[50vw]">
              This project has been created mainly for myself (Luca Montanari), to make my life easier and learn Python in the meantime.<br />
              But making this public sounds good to me, maybe other people can find this useful too.<br />
              I took inspiration from Iron-Man's Jarvis and other real virtual assistants.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#00AF92] to-emerald-800 text-white p-8 w-[100vw] h-[auto]">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            We can't list every feature, they are <span className="underline">too many</span>.
          </h1>
          <p className="text-xl md:text-2xl text-center mb-12">But here are some...</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-20 border-[0.5px] border-white/30 rounded-full py-3 px-6 text-center flex items-center justify-center h-full"
              >
                <span className="text-sm md:text-base">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div >
  );
}
import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { IoMdSend } from "react-icons/io";

import "../styles/contactme.css";
import "../styles/global.css";

export default function ContactMe() {

  useEffect(() => {
    console.log("Page loaded.");
  });

  return (
    <div className="flex flex-col align-top">
      <div style={{ width: "100%", height: "100vh" }} className="flex flex-col items-center align-top bg-white dark:bg-[#1E1E1E] text-black dark:text-white">
        <div id="topdiv" className="z-10 flex flex-col align-top items-center mt-20">
          <h1 id="title" className="text-gray-500 animate-slideInFromTop">Contact Luca</h1>
        </div>
        <div id="formContainer" className="flex flex-col align-top items-center">
          <div id="formDiv" className="flex flex-col justify-start">
            <div id="nameDiv" className="flex flex-col items-start align-top">
              <label className="underline text-sm">Full name</label>
              <textarea id="_name" className="resize-none bg-white dark:bg-[#1E1E1E] w-[500px] h-8 max-h-8 placeholder-gray-500" placeholder="John Wick"></textarea>
            </div>
            <div id="mailDiv" className="flex flex-col items-start align-top">
              <label className="underline text-sm">E-Mail</label>
              <textarea id="_mail" className="resize-none bg-white dark:bg-[#1E1E1E] w-[500px] h-8 max-h-8 placeholder-gray-500" placeholder="youremail@domain.com"></textarea>
            </div>
            <div id="messageDiv" className="flex flex-col items-start align-top">
              <label className="underline text-sm">Message</label>
              <textarea id="_message" className="resize-none bg-white dark:bg-[#1E1E1E] w-[500px] h-[200px] max-h-[200px] placeholder-gray-500" placeholder="Hey! I would like to suggest you an app: AppName. Here is the link: https://google.com"></textarea>
            </div>
            <div id="submitDiv" className="flex flex-row justify-center w-[400px]">
              <motion.button className="submitbtn" whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.8 }}>
                <div className='flex flex-row justify-center align-middle'>
                  <IoMdSend />
                  <p>Send</p>
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
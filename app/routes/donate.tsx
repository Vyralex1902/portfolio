import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import "../styles/global.css";

export default function DonatePage() {

  useEffect(() => {
    console.log("Page loaded.");
  });

  return (
    <div className="flex flex-col align-top darkmode-bg" style={{ width: "100vw", height: "100vh" }}>
      <input type="text" className="absolute hidden" id="pageName" value={"donate"} readOnly></input>
      <div style={{ width: "100%", height: "auto" }} className="flex flex-col items-center align-top darkmode-bg text-white">
        <div id="topdiv" className="z-10 flex flex-col align-top items-center mt-20">
          <h1 id="title" className="text-gray-500 animate-slideInFromTop">Donate to Luca</h1>
        </div>
        <form action="https://www.paypal.com/donate" method="post" target="_top">
          <input type="hidden" name="hosted_button_id" value="AET2KMM66MX96" />
          <motion.button name="submit" className="w-[200px] h-[50px] bg-gray-500 rounded-lg font-sans border-black dark:border-white border-2"
            whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.8 }}>
            <div className='flex flex-col justify-center items-center'>
              <p>DONATE</p>
            </div>
          </motion.button>
          {/* <input type="image" src="https://pics.paypal.com/00/s/YWM5ODNjYTItZDMxMC00NDdlLThkMGQtOTg0N2VjMzcyYzI1/file.JPG" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" /> */}
          <img alt="" src="https://www.paypal.com/en_IT/i/scr/pixel.gif" width="1" height="1" />
        </form>
      </div>
    </div>
  );
}
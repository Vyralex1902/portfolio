import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";

import mypic1 from "../assets/mypic1.jpg"

export const meta: MetaFunction = () => {
  return [
    { title: "Luca's Portfolio" },
    { name: "Luca's Portfolio", content: "Welcome to Luca's Portfolio!" },
  ];
};

export default function Index() {

  useEffect(() => {
    if (
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    }
    else {
      document.documentElement.classList.remove('dark');
    }

    console.log("Page loaded.");
  });

  return (
    <div style={{ width: "100%", height: "100%" }} className="flex flex-col justify-center items-center align-top pt-20 bg-white dark:bg-[#1E1E1E]">
      <div id="topdiv" className="flex flex-col justify-center items-center">
        <h1 id="title" className="darkmode-text-h2">Luca's Portfolio</h1>
        <img src={mypic1} className="w-24 h-24 rounded-full border-2 border-gray-600"></img>
      </div>
    </div>
  );
}
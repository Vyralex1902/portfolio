import { FaHome } from "react-icons/fa";
import { IoCodeSlashOutline } from "react-icons/io5";
import { TbGymnastics } from "react-icons/tb";
import { IoMoonSharp } from "react-icons/io5";
import { FaHistory } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { motion } from "framer-motion";


import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./styles/heading.css";

import mypic1 from "./assets/mypic1.jpeg"
import mypic2 from "./assets/mypic2.jpeg"
import mypic3 from "./assets/mypic3.png"
import pill from "./assets/Pill.png"

var switchableTheme = true;
var currentPictureIndex = 0;

const Heading = () => {
  useEffect(() => {
    const ppic = document.getElementById("profilepic");
    if (ppic) {
      const rnd = Math.floor(Math.random() * 3);
      currentPictureIndex = rnd;
      switch (rnd) {
        case 0: ppic.setAttribute('src', mypic2); break;
        case 1: ppic.setAttribute('src', mypic3); break;
        case 2: ppic.setAttribute('src', mypic1); break;
      }
    }

    const headingIconElement1 = document.getElementById("headingIcon1");
    const headingIconElement2 = document.getElementById("headingIcon2");
    const headingIconElement3 = document.getElementById("headingIcon3");
    const headingIconElement4 = document.getElementById("headingIcon4");

    headingIconElement1!.onclick = (e) => {
      headingIconElement1!.classList.remove("heading-icon");
      headingIconElement1!.classList.add("heading-icon-selected");

      headingIconElement2!.classList.remove("heading-icon-selected");
      headingIconElement2!.classList.add("heading-icon");
      headingIconElement3!.classList.remove("heading-icon-selected");
      headingIconElement3!.classList.add("heading-icon");
      headingIconElement4!.classList.remove("heading-icon-selected");
      headingIconElement4!.classList.add("heading-icon");
    }
    headingIconElement2!.onclick = (e) => {
      headingIconElement2!.classList.remove("heading-icon");
      headingIconElement2!.classList.add("heading-icon-selected");

      headingIconElement1!.classList.remove("heading-icon-selected");
      headingIconElement1!.classList.add("heading-icon");
      headingIconElement3!.classList.remove("heading-icon-selected");
      headingIconElement3!.classList.add("heading-icon");
      headingIconElement4!.classList.remove("heading-icon-selected");
      headingIconElement4!.classList.add("heading-icon");
    }
    headingIconElement3!.onclick = (e) => {
      headingIconElement3!.classList.remove("heading-icon");
      headingIconElement3!.classList.add("heading-icon-selected");

      headingIconElement1!.classList.remove("heading-icon-selected");
      headingIconElement1!.classList.add("heading-icon");
      headingIconElement2!.classList.remove("heading-icon-selected");
      headingIconElement2!.classList.add("heading-icon");
      headingIconElement4!.classList.remove("heading-icon-selected");
      headingIconElement4!.classList.add("heading-icon");
    }
    headingIconElement4!.onclick = (e) => {
      headingIconElement4!.classList.remove("heading-icon");
      headingIconElement4!.classList.add("heading-icon-selected");

      headingIconElement1!.classList.remove("heading-icon-selected");
      headingIconElement1!.classList.add("heading-icon");
      headingIconElement2!.classList.remove("heading-icon-selected");
      headingIconElement2!.classList.add("heading-icon");
      headingIconElement3!.classList.remove("heading-icon-selected");
      headingIconElement3!.classList.add("heading-icon");
    }

    if (
      document.getElementById("pageName")?.getAttribute('value') == "home"
    ) {
      headingIconElement1!.classList.remove("heading-icon");
      headingIconElement1!.classList.add("heading-icon-selected");

      headingIconElement2!.classList.remove("heading-icon-selected");
      headingIconElement2!.classList.add("heading-icon");
      headingIconElement3!.classList.remove("heading-icon-selected");
      headingIconElement3!.classList.add("heading-icon");
      headingIconElement4!.classList.remove("heading-icon-selected");
      headingIconElement4!.classList.add("heading-icon");
    }

    if (
      document.getElementById("pageName")?.getAttribute('value') == "buyservice"
      || document.getElementById("pageName")?.getAttribute('value') == "home"
      || document.getElementById("pageName")?.getAttribute('value') == "mystory"
      || document.getElementById("pageName")?.getAttribute('value') == "hireme"
    ) {
      if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
          document.documentElement.classList.add('dark');
          localStorage.setItem('color-theme', 'dark');
        }

        // if NOT set via local storage previously
      } else {
        if (document.documentElement.classList.contains('light')) {
          document.documentElement.classList.add('dark');
          localStorage.setItem('color-theme', 'dark');
        }
      }
    }

    console.log("Heading loaded.");
  });

  return (
    <div className="fixed top-0 flex flex-row pt-1 pb-1 z-50 justify-center w-screen h-[75px]">
      <div id="headingThing" className="min-w-[700px] backdrop-blur-lg border-gray-500 border-opacity-20 border-[1.5px] flex w-fit justify-center py-2 rounded-lg items-center bg-[rgba(16,18,19,0.8)]">
        <motion.button id="picbtn" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} onClick={togglePicture} className="ml-5 w-14 h-14 align-middle flex justify-center rounded-full animate-reveal absolute left-0 top-[5px]">
          <img id="profilepic" className=" w-14 h-14 align-middle rounded-full animate-reveal"></img></motion.button>
        <div className="flex w-fit justify-center absolute justify-self-center gap-2" style={{ width: "50%" }}>
          <HeadingIcon id="headingIcon1" text="Home" link="/" ></HeadingIcon>
          <HeadingIcon id="headingIcon2" text="Development" link="/programming" ></HeadingIcon>
          <HeadingIcon id="headingIcon3" text="Passions" link="/hobbies" ></HeadingIcon>
          <HeadingIcon id="headingIcon4" text="My Story" link="/mystory" ></HeadingIcon>
          {/* <HeadingIcon icon={<FaHome style={{ width: "50%", height: "50%", color: "white" }} />} text="Home" link="/" ></HeadingIcon>
          <HeadingIcon icon={<IoCodeSlashOutline style={{ width: "50%", height: "50%", color: "white" }} />} text="Coding Knowledge" link="/programming" ></HeadingIcon>
          <HeadingIcon icon={<TbGymnastics style={{ width: "50%", height: "50%", color: "white" }} />} text="Passions" link="/hobbies" ></HeadingIcon>
          <HeadingIcon icon={<FaHistory style={{ width: "50%", height: "50%", color: "white" }} />} text="My Story" link="/mystory" ></HeadingIcon> */}
        </div>
        <div id="themeToggle" className="border-2 border-white border-opacity-20 w-12 h-12 rounded-3xl bg-black bg-opacity-35 hover:bg-opacity-50
          dark:bg-white dark:bg-opacity-20 justify-center align-middle flex items-center absolute right-0 mr-5">
          <button className="flex align-middle justify-center"><IoMoonSharp style={{ color: "white", width: "22px", height: "22px" }} onClick={toggleTheme} /></button></div>
      </div>
    </div>
  );
};

const HeadingIcon = ({ id, text = 'Text', link }: { id: string, text: string, link: any }) => (
  <Link to={link} className="cursor-context-menu">
    <div id={id} className="heading-icon group z-50 cursor-context-menu font-[Arial] text-[15px]">
      {text}
    </div>
  </Link>
);

const togglePicture = () => {
  const ppic = document.getElementById("profilepic");
  if (ppic) {
    if (currentPictureIndex < 2) {
      currentPictureIndex++;
    }
    else {
      currentPictureIndex = 0;
    }
    switch (currentPictureIndex) {
      case 0: ppic.setAttribute('src', mypic2); break;
      case 1: ppic.setAttribute('src', mypic3); break;
      case 2: ppic.setAttribute('src', mypic1); break;
    }
  }
}

const toggleTheme = () => {
  if (
    document.getElementById("pageName")?.getAttribute('value') == "buyservice"
    || document.getElementById("pageName")?.getAttribute('value') == "home"
    || document.getElementById("pageName")?.getAttribute('value') == "mystory"
    || document.getElementById("pageName")?.getAttribute('value') == "hireme"
  ) {
    switchableTheme = false;
  }
  else {
    switchableTheme = true;
  }

  if (switchableTheme) {
    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      }

      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      }
    }
    console.log("Theme toggled.");
  }
  else {
    alert("Sorry, you can't switch to dark theme on this page. I locked it either because it only looks good in light mode or because these is no need to switch it.");
  }
}
export default Heading;
import { FaHome } from "react-icons/fa";
import { IoCodeSlashOutline } from "react-icons/io5";
import { TbGymnastics } from "react-icons/tb";
import { IoMoonSharp } from "react-icons/io5";
import { FaHistory } from "react-icons/fa";
import { IoBag } from "react-icons/io5";

import { useEffect } from "react";
import { Link } from "react-router-dom";

const Heading = () => {
  return (
    <div className="fixed top-0 flex flex-row pt-1 pb-1 z-50 justify-center w-screen h-[75px]">
      <div className="backdrop-blur-lg border-gray-500 border-opacity-40 border-2 flex w-fit justify-center py-2 rounded-lg items-center" style={{ width: "50%" }}>
        <div className="flex w-fit justify-center absolute justify-self-center gap-2" style={{ width: "50%" }}>
          <HeadingIcon icon={<FaHome style={{ width: "50%", height: "50%", color: "white" }} />} text="Home" link="/" ></HeadingIcon>
          <HeadingIcon icon={<IoCodeSlashOutline style={{ width: "50%", height: "50%", color: "white" }} />} text="Coding Knowledge" link="/programming" ></HeadingIcon>
          <HeadingIcon icon={<TbGymnastics style={{ width: "50%", height: "50%", color: "white" }} />} text="Free Time" link="/hobbies" ></HeadingIcon>
          <HeadingIcon icon={<FaHistory style={{ width: "50%", height: "50%", color: "white" }} />} text="My Story" link="/mystory" ></HeadingIcon>
          <HeadingIcon icon={<IoBag style={{ width: "50%", height: "50%", color: "white" }} />} text="Current Occupation" link="/work-now" ></HeadingIcon>
        </div>
        <div id="themeToggle" className="border-2 border-white border-opacity-20 w-12 h-12 rounded-3xl bg-black bg-opacity-35 hover:bg-opacity-50
          dark:bg-white dark:bg-opacity-20 justify-center align-middle flex items-center absolute right-0 mr-5">
          <button className="flex align-middle justify-center"><IoMoonSharp style={{ color: "white", width: "22px", height: "22px" }} onClick={toggleTheme} /></button></div>
      </div>
    </div>
  );
};

const HeadingIcon = ({ icon, text = 'Text', link }: { icon: any, text: any, link: any }) => (
  <Link to={link} className="cursor-context-menu">
    <div className="heading-icon group z-50 cursor-context-menu">
      {icon}

      <span className="heading-tooltip group-hover:scale-100 bg-gray-800 bg-opacity-75 z-50">
        {text}
      </span>
    </div>
  </Link>
);

const toggleTheme = () => {
  console.log("Theme toggled.");
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
}
export default Heading;
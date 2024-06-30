import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "../styles/docs.css";
import "../styles/global.css";

export const meta: MetaFunction = () => {
  return [
    { title: "Luca Docs" },
    { name: "Luca Docs", content: "My documentations about topics I've found interesting and hard to find answers about." },
  ];
};

export default function DocsPage() {

  useEffect(() => {
    const cardsElement = document.getElementById("cards");
    if (cardsElement) {
      cardsElement.onmousemove = e => {
        for (const card of document.getElementsByClassName("card")) {
          const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

          card.setAttribute("style", "--mouse-x: " + x + "px; --mouse-y:" + y + "px;");
        };
      }
    }

    const searchBox = document.getElementById("searchBox");
    searchBox!.addEventListener('input', function (event) {
      const target = event.target as HTMLInputElement;
      const currentValue: string = target.value.toLowerCase();

      // Get all <h3> elements within cards
      const h3Elements = document.querySelectorAll('#cards .card .card-content .card-info-wrapper .card-info .card-info-title h3');

      h3Elements.forEach(h3 => {
        const h3Text = h3.textContent!.toLowerCase();
        const cardElement = h3.closest('.card') as HTMLElement;

        if (h3Text.includes(currentValue)) {
          // Show the card if it contains the search value
          cardElement.classList.remove('invisible');
        } else {
          // Hide the card if it does not contain the search value
          cardElement.classList.add('invisible');
        }
      });
    });

    console.log("Page loaded.");
  });

  return (
    <div className="flex flex-col align-top">
      <input type="text" className="absolute hidden" id="pageName" value={"docs"} readOnly></input>
      <div style={{ width: "100%", height: "100vh" }} className="darkmode-bg fixed z-0"></div>
      <div style={{ width: "100%", height: "100vh" }} className="flex flex-col items-center align-top darkmode-bg
       text-black dark:text-white">
        <div id="topdiv" className="z-10 flex flex-col justify-center items-center mb-10 mt-20 text-black dark:text-white">
          <h1 id="title" className="text-black dark:text-white animate-slideInFromTop">Luca's Docs</h1>
          <h2 className="text-black dark:text-white">My documentations about topics I've found interesting and hard to find answers about.</h2>
          <h4 className="text-gray-700 dark:text-gray-500">This is my way to share some of the thousands things I learn every month.</h4>
        </div>
        <div className="flex flex-row justify-center z-10">
          <input id="searchBox" type="text" placeholder="Search for a topic..." className="placeholder-gray-400 bg-gray-800 w-[30vw] rounded-md"></input>
        </div>
        <GlowCards></GlowCards>
      </div>
    </div>
  );
}

function GlowCards({ }) {
  return (
    <div id='card-body' className="bg-[#1E1E1E] dark:bg-white/[.025]">
      <div id="cards">
        <div className="card" onClick={() => { window.location.href = 'https://lucasnode.com/docs' }}>
          <div className="card-content">
            <div className="card-info-wrapper">
              <div className="card-info">
                <div className="card-info-title">
                  <h3>Serverless hosting vs traditional</h3>
                  <h4>June 2024</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card" onClick={() => { window.location.href = 'https://lucasnode.com/docs' }}>
          <div className="card-content">
            <div className="card-info-wrapper">
              <div className="card-info">
                <div className="card-info-title">
                  <h3>Javascript vs Typescript</h3>
                  <h4>June 2024</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card" onClick={() => { window.location.href = 'https://lucasnode.com/docs' }}>
          <div className="card-content">
            <div className="card-info-wrapper">
              <div className="card-info">
                <div className="card-info-title">
                  <h3>Quick search algorithm</h3>
                  <h4>July 2024</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card" onClick={() => { window.location.href = 'https://lucasnode.com/docs' }}>
          <div className="card-content">
            <div className="card-info-wrapper">
              <div className="card-info">
                <div className="card-info-title">
                  <h3>JS Arrow Functions</h3>
                  <h4>July 2024</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card" onClick={() => { window.location.href = 'https://lucasnode.com/docs' }}>
          <div className="card-content">
            <div className="card-info-wrapper">
              <div className="card-info">
                <div className="card-info-title">
                  <h3>React vs vanilla HTML/JS</h3>
                  <h4>July 2024</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card" onClick={() => { window.location.href = 'https://lucasnode.com/docs' }}>
          <div className="card-content">
            <div className="card-info-wrapper">
              <div className="card-info">
                <div className="card-info-title">
                  <h3>Quicksorting algorithm</h3>
                  <h4>July 2024</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
}
"use client";
import Image from "next/image";
import { useState } from "react";
import ProjectComponent from "./components/projectComponent";

export default function Home() {
  const [button1Shadow, setButton1Shadow] = useState("5px 5px 0px lime"); // the drop shadwo fo the new project button
  const [button2Shadow, setButton2Shadow] = useState("5px 5px 0px lime"); // the drop shadow of the donate button

  const data = [
    {
      title: "Learn Web Dev",
      task: "Buy the course",
    },
    {
      title: "Build App",
      task: "Design Landing page",
    },
    {
      title: "Buy Groceries",
      task: "Make List",
    },
    {
      title: "Learn 3D Modelling",
      task: "Build Donut",
    },
    {
      title: "Submit the Piles Files",
      task: "Examine your Piles",
    },
    {
      title: "Make Beats",
      task: "Learn FL Studio",
    },
    
  ]

  // changes the drop shadow of the donate button to 10px
  function hoverBtnNewProject() {
    setButton1Shadow("10px 10px 0px lime");
  }

  // brings back the drop shadow of the new project button to normal
  function unHoverBtnNewProject() {
    setButton1Shadow("5px 5px 0px lime");
  }

  // changes the drop shadow of the donate button to 10px
  function hoverBtnDonate() {
    setButton2Shadow("10px 10px 0px lime");
  }

  // brings back the drop shadow of donate button to normal
  function unHoverBtnDonate() {
    setButton2Shadow("5px 5px 0px lime");
  }

  return (
    <div className="flex flex-col justify-start min-h-screen pl-16 pr-16 pt-16 pb-0 bg-[#090314]">
      <div className="flex flex-row space-x-50 justify-center">
        <button
          className="btn w-70 h-24 font-bold bg-orange-500 text-black text-4xl"
          style={{ boxShadow: button1Shadow }}
          onMouseEnter={hoverBtnNewProject}
          onMouseLeave={unHoverBtnNewProject}
        >
          New Project
        </button>
        <h1
          className="font-handjet text-9xl font-black"
          style={{ textShadow: "3px 3px 0px orange", color: "lime" }}
        >
          GOOD MORNING
        </h1>
        <button
          className="btn w-70 h-24 font-bold bg-orange-500 text-black text-4xl"
          style={{ boxShadow: button2Shadow }}
          onMouseEnter={hoverBtnDonate}
          onMouseLeave={unHoverBtnDonate}
        >
          Buy Me a Coffee !
        </button>
      </div>
      {/* <div style={{ height: "1rem" }}></div> */}
      <div className="min-h-screen flex items-center justify-center pt-0 pr-22 pl-22 pb-0 ">
        <div className="grid grid-cols-3 mx-auto w-full gap-20">
          {data.map((project, index) => (
            <ProjectComponent 
              title={project.title}
              task={project.task} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

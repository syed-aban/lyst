"use client"
import Link from "next/link";
import { use, useState } from "react";
import {useRouter} from "next/navigation"

export default function NewProject() {

    const [NextAction, SetNextAction] = useState("2px 2px 0px lime");
    const [Project, SetProject] = useState("2px 2px 0px lime");
    const [Btn, SetBtn] = useState("2px 2px 0px lime");
    const router = useRouter();
    const [Title, SetTitle] = useState("");
    const [Task, SetTask] = useState("");

    async function handleSubmit() {
        //get title and task data and print them
        console.log("Title: ", Title);
        console.log("Task: ", Task);

        //make an api call (post req)
        const res = await fetch("http://localhost:3000/api/projects", {
            method: "POST",
            body: JSON.stringify({
                title: Title,
                task: Task,
            })
        })

        //handle error
        if (!res.ok) {
            throw new Error("Failed to create project");
        }

        console.log(res);

        //push to home route
        router.push("/")
    }


    return (
<div className="flex flex-col justify-center items-center min-h-screen pl-16 pr-16 pt-16 pb-0 bg-[#090314]">
    <fieldset className="fieldset w-xs border-0 p-4 rounded-box bg-orange-500" style={{ boxShadow: "5px 5px 0px lime"}}>
        <legend className="fieldset-legend text-6xl">Project Details</legend>
        
        <label className="fieldset-label text-3xl">Title</label>
        <input
            type="text"
            className="input w-full p-3 border-1/2 border-black rounded-sm focus:outline-none bg-[#090314] text-white transition-all duration-150 ease-in-out"
            style={{ boxShadow: Project }}
            placeholder="Project title"
            onMouseEnter={() => {
                SetProject("5px 5px 0px lime");
            }}
            onMouseLeave={() => {
                SetProject("2px 2px 0px lime");
            }}
            onChange={(e) =>  SetTitle(e.target.value)}
        />

        <div className="h-5"></div>
        
        <label className="fieldset-label text-3xl">Task</label>
        <input
            type="text"
            className="input w-full p-3 border-1/2 border-black rounded-sm focus:outline-none bg-[#090314] text-white transition-all duration-150 ease-in-out"
            style={{ boxShadow: NextAction }}
            placeholder="Next action"
            onMouseEnter={() => {
                SetNextAction("5px 5px 0px lime");
            }}
            onMouseLeave={() => {
                SetNextAction("2px 2px 0px lime");
            }}
            onChange={(e) =>  SetTask(e.target.value)}
        />

        <div className="h-5"></div>

        <button className="btn bg-[#090314] text-white"
        style={{ boxShadow: Btn }}
        onMouseEnter={() => {
            SetBtn("5px 5px 0px lime");
        }}
        onMouseLeave={() => {
            SetBtn("2px 2px 0px lime");
        }}
        onClick={() => {handleSubmit()}}
        >SUBMIT</button>
    </fieldset>
</div>
    );
}
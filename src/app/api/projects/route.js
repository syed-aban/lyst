import connectDB from "@/lib/connectDB";
import Project from "@/models/projectModel";
import { NextResponse } from "next/server";

export async function POST(req){
    const {title, task} = await req.json();
    
    await connectDB(); 
    await Project.create({title, task})

    return NextResponse.json({
        status: 201,
        message: "Project created successfully",
        data: {title, task}
    })
}
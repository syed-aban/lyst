import connectDB from "@/lib/connectDB";
import Project from "@/models/projectModel";
import { NextResponse } from "next/server";

export async function POST(req){
    try {
        const {title, task} = await req.json();
        
        await connectDB(); 
        await Project.create({title, task})
    
        return NextResponse.json({
            status: 201,
            message: "Project created successfully",
            data: {title, task}
        })
    } catch (error) {
        console.log("Error uploading data",error.message)
    }
}

export async function GET(req){
    try {
        await connectDB();
        const projects = await Project.find()
        return NextResponse.json({
            data: projects
        })
    } catch (error) {
        console.log("Error fetching data", error.message)
    }
}

export async function DELETE(req){
    try {
        const {title, task} = await req.json();

        await connectDB();
        await Project.deleteOne({title, task})
        return NextResponse.json({
            status: 200,
            message: "Project deleted successfully",
            data: {title, task}
        })

    } catch (error) {
        console.log("Error deleting data", error.message)
    }
}
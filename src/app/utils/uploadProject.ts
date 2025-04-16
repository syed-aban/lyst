import mongoose, { mongo, Mongoose } from "mongoose";
import connectDB from "./connectDB";
import { NextResponse } from "next/server";

// define the schema
const ProjectSchema = new mongoose.Schema({
    title: String,
    task: String,
})

// create a mongoode model
const ProjectModel = mongoose.model("Project", ProjectSchema);

export default async function uploadProject(title: string, task: string){
    // connect to the database
    await connectDB();

    // turn data into json
    const data = {
        title: title,
        task: task
    }

    // insert json into the database
    try {
        const res = await ProjectModel.create(data);
        console.log("data uploaded successfully")
        return NextResponse.json({
            message: "Data uploaded successfully",
            data: res,
        })
    } catch (error:any) {
        console.log("there was an error while uploading data to DB")
        return NextResponse.json({
            error: error.message,
        })
    }
}
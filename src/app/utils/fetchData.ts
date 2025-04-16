import mongoose from "mongoose";
import connectDB from "./connectDB";
import { NextResponse } from "next/server";

export default async function fetchData(){

    // Define the schema
    const ProjectSchema = new mongoose.Schema({
        title: String,
        task: String,
    });

    // Create the Mongoose model (check if it already exists to avoid recompilation errors)
    const ProjectModel = mongoose.models.Project || mongoose.model("Project", ProjectSchema);

    try {
        // connect to db
        await connectDB();

        // fetch all the data from the database
        const data = await ProjectModel.find({});
        console.log("data fetched successfully")

        return data;

    } catch (error:any) {
        console.log("fetching error")
        NextResponse.json({ 
            message: error.message
        })
    }

}
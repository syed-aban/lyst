import mongoose from "mongoose";
import { NextResponse } from "next/server";

const MONGODB_URI = process.env.MONGODB_URI;

export default async function connectDB() {
    try {
        if (!MONGODB_URI) {
            throw new Error("MONGODB_URI is not defined in the environment variables");
        }
        else{
            const res = await mongoose.connect(MONGODB_URI);
            console.log("connected to DB")
            return res;
        }
    } catch (error: any) {
        console.log("error connecting to DB", error.message)
        return NextResponse.json({
            message: "Error connecting to DB",
            error: error.message
        })
    }
}
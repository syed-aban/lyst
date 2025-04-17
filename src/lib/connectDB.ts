import mongoose, { mongo } from "mongoose";

type ConnectionObject = {
    isConnected?: number;
}

const connection: ConnectionObject = {};

async function connectDB(): Promise<void> {
    if(connection.isConnected) {
        console.log("MongoDB is already connected");
        return;
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || "", {})
        console.log(db)
        connection.isConnected = db.connections[0].readyState
        console.log("DB connected successfully")

    } catch (error) {
        console.log("database connection failed", error)
        process.exit(1)
        
    }
}

export default connectDB;

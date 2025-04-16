import mongoose from "mongoose";
import connectDB from "./connectDB";

// Define the schema
const ProjectSchema = new mongoose.Schema({
    title: String,
    task: String,
});

// Create the Mongoose model (check if it already exists to avoid recompilation errors)
const ProjectModel = mongoose.models.Project || mongoose.model("Project", ProjectSchema);

export default async function deleteProject(title: string) {
    try {
        // Connect to the database
        await connectDB();

        // Delete the project by title
        const result = await ProjectModel.deleteOne({ title });

        if (result.deletedCount === 0) {
            console.log("No project found with the given title");
            return {
                message: "No project found with the given title",
            };
        }

        console.log("Project deleted successfully");
        return {
            message: "Project deleted successfully",
        };
    } catch (error: any) {
        console.error("Error deleting project:", error.message);
        throw new Error(`Error deleting project: ${error.message}`);
    }
}
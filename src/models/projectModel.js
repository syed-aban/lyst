import mongoose, {Schema} from 'mongoose';

const projectSchema = new Schema({
        title: String,
        task: String
    }
)

const Project = mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;
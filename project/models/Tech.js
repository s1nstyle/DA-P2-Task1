import mongoose from "mongoose";

const techSchema = new mongoose.Schema({
    stack: String,
});

const Tech = mongoose.models.Tech || mongoose.model('Tech', techSchema);

export default Tech;
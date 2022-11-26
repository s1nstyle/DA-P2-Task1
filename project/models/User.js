import mongoose from "mongoose";

// Password should be encrypted but for the sake of the exercise, we are just going to keep it private.
// You normally want to use the google authentication, or encrypt the password in a more safer manner.
const userSchema = new mongoose.Schema({
    password: String,
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
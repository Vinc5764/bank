import { Schema, models, model } from "mongoose";


const UserSchema = new Schema({
    email: { type: String, required: false, unique: true },
    contactNumber: { type: String, required: false, unique: true },
    name: { type: String, required: false },
    constituency: { type: String, required: false },
    date: { type: Date, default: Date.now },
})

const User = models.User || model("User", UserSchema)
export default User
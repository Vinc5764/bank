import { Schema, models, model } from "mongoose";

const UserSchema = new Schema(
  {
    name: { type: String, required: false },
    email: { type: String, required: true, unique: true },

    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },

    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["admin", "member", "newmember"],
      default: "member",
    },
    donations: { type: Number, required: false, default: 0 },
    constituency: { type: String, required: false },
    contactNumber: { type: String, required: false },
  },
  { timestamps: true }
);

const User = models.Userrss || model("Userrss", UserSchema);
export default User;

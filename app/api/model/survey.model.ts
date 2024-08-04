import { Schema, models, model } from "mongoose";

const SurveySchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  embedUrl: { type: String, required: true },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  createdAt: { type: Date, default: Date.now },
});

const Survey = models.Surveyy || model("Surveyy", SurveySchema);
export default Survey;

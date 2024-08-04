import { Schema, models, model } from "mongoose";

const DonationSchema = new Schema(
  {
    amount: { type: Number, required: true },
    donor: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
  },
  { timestamps: true }
);

const Donation = models.Donation || model("Donation", DonationSchema);
export default Donation;

import mongoose from "mongoose";
import validator from "validator";
const newsletterSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
    validate: validator.isEmail,
  },
});

export const Newsletter = mongoose.model("Newsletter", newsletterSchema);
import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
  subject: String,
  email: {
    type: String,
    required: [true, "Email Required!"],
  },
  message: String,
});

const Contact =
  mongoose.models.contact || mongoose.model("contact", contactSchema);

export default Contact;

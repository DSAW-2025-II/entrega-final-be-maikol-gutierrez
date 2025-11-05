import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  telefono: { type: String },
  idUniversitario: { type: String },
  role: { type: String, enum: ["pasajero", "conductor"], default: "pasajero" },
});

export default mongoose.model("User", userSchema);
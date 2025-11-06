import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
  {
    tripId: { type: mongoose.Schema.Types.ObjectId, ref: "Trip", required: true, index: true },
    senderId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    receiverId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    message: { type: String, required: true },
    read: { type: Boolean, default: false }
  },
  { timestamps: true }
);

// Índice compuesto para búsquedas eficientes
MessageSchema.index({ tripId: 1, createdAt: -1 });
MessageSchema.index({ senderId: 1, receiverId: 1 });

export default mongoose.models.Message || mongoose.model("Message", MessageSchema);


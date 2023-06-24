import mongoose from "mongoose";

const CardTableSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    passHash: {
        type: String,
        required: true,
    },
    avatarUrl: String
}, {
    timestamps: true
});

export default mongoose.model('CardTable', CardTableSchema);

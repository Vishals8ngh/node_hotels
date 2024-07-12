const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 18,
        max: 120
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
    // Add more fields as needed
});

// Create a model based on the schema
const User = mongoose.model('User', userSchema);

module.exports = User;

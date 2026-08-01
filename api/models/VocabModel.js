const mongoose = require("mongoose");

// Defines the schema for a single vocabulary pair
const vocabSchema = new mongoose.Schema({
    english: {
        type: String,
        required: [true, "English word cannot be empty."],
        minlength: [3, "English word must be at least 3 characters."],
        maxlength: [20, "English word cannot exceed 20 characters."]
    },
    german: {
        type: String,
        required: [true, "German word cannot be empty."],
        minlength: [3, "German word must be at least 3 characters."],
        maxlength: [20, "German word cannot exceed 20 characters."]
    }
}, { 
    timestamps: true // Optional: Adds createdAt and updatedAt timestamps automatically
},{
    versionKey: false // Optional: Disables the __v field that Mongoose adds by default
}
);

// Creates and exports the model for the "vocabularies" collection
const VocabModel = mongoose.model("vocab", vocabSchema);
module.exports = VocabModel;
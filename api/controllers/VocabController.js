// Controllers/VocabController.js
const VocabModel = require("../models/VocabModel"); // Adjust path if necessary

// @desc    Create a new vocabulary entry
// @route   POST /api/vocabs
const createVocab = async (req, res) => {
    try {
        const newVocab = await VocabModel.create(req.body);
        res.status(201).json({
            success: true,
            message: "Vocabulary word created successfully.",
            data: newVocab
        });
    } catch (err) {
        console.error("Error creating vocab:", err.message);
        res.status(500).json({ success: false, error: err.message });
    }
};

// @desc    Get all vocabulary entries
// @route   GET /api/vocabs
const viewAllVocabs = async (req, res) => {
    try {
        const vocabs = await VocabModel.find({});
        res.status(200).json({
            success: true,
            count: vocabs.length,
            data: vocabs
        });
    } catch (err) {
        console.error("Error fetching vocabs:", err.message);
        res.status(500).json({ success: false, error: err.message });
    }
};

// @desc    Get a single vocabulary entry by ID
// @route   GET /api/vocabs/:id
const viewVocabById = async (req, res) => {
    try {
        const { id } = req.params;
        const vocab = await VocabModel.findById(id);
        
        if (!vocab) {
            return res.status(404).json({ success: false, message: "Vocabulary item not found." });
        }
        
        res.status(200).json({ success: true, data: vocab });
    } catch (err) {
        console.error("Error fetching vocab by ID:", err.message);
        res.status(500).json({ success: false, error: err.message });
    }
};

// @desc    Update a vocabulary entry by ID
// @route   PUT /api/vocabs/:id
const updateVocabById = async (req, res) => {
    try {
        const { id } = req.params;
        
        // new: true returns the updated doc; runValidators: true enforces schema constraints
        const updatedVocab = await VocabModel.findByIdAndUpdate(id, req.body, { 
            new: true, 
            runValidators: true 
        });

        if (!updatedVocab) {
            return res.status(404).json({ success: false, message: "Vocabulary item not found." });
        }

        res.status(200).json({
            success: true,
            message: "Vocabulary updated successfully.",
            data: updatedVocab
        });
    } catch (err) {
        console.error("Error updating vocab:", err.message);
        res.status(500).json({ success: false, error: err.message });
    }
};

// @desc    Delete ALL vocabulary entries
// @route   DELETE /api/vocabs
const deleteAllVocabs = async (req, res) => {
    try {
        const result = await VocabModel.deleteMany({});
        res.status(200).json({
            success: true,
            message: "All vocabulary entries deleted successfully.",
            count: result.deletedCount
        });
    } catch (err) {
        console.error("Error deleting all vocabs:", err.message);
        res.status(500).json({ success: false, error: err.message });
    }
};

// @desc    Delete a vocabulary entry by ID
// @route   DELETE /api/vocabs/:id
const deleteVocabById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedVocab = await VocabModel.findByIdAndDelete(id);

        if (!deletedVocab) {
            return res.status(404).json({ success: false, message: "Vocabulary item not found." });
        }

        res.status(200).json({
            success: true,
            message: "Vocabulary item deleted successfully."
        });
    } catch (err) {
        console.error("Error deleting vocab:", err.message);
        res.status(500).json({ success: false, error: err.message });
    }
};

module.exports = {
    createVocab,
    viewAllVocabs,
    viewVocabById,
    updateVocabById,
    deleteAllVocabs,
    deleteVocabById
};
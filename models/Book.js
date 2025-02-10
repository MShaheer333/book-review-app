const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    isbn: { type: String, required: true, unique: true },
    reviews: [{
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        review: String,
    }]
}, { timestamps: true });

module.exports = mongoose.model("Book", BookSchema);

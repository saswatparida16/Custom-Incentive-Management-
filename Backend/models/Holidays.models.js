const mongoose = require('mongoose');

const holidaySchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
        required: true
    },
    holidayName: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    destination: {
        type: String,
        required: true
    },
    location: {
        type: String
    },
    amenities: {
        type: String,
        required: true
    }
})// Disable default _id field

// Create Holiday model
const Holiday = mongoose.model('Holiday', holidaySchema);

// Export Holiday model
module.exports = Holiday;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recordSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    datePurchased: {
        type: Date,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    item: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: [
            'paid',
            'overdue',
            'pending'
        ]
    },
    dueDate: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Record', recordSchema);

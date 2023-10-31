const mongoose = require('mongoose');
const Schema = mongoose.Schema

let book_schema = new Schema({
    BOOK_ID: {
        type: String, index: true, unique: true
    },
    TITLE: {
        type: String, required: true
    },
    AUTHOR: {
        type: String, required: true
    },
    SUMMARY: {
        type: String, required: true
    },
}, {
    timestamps: { createdAt: 'CREATED_DATE', updatedAt: 'UPDATED_DATE' },
    versionKey: false
})

book_schema.pre("save", generateBookingId)

function generateBookingId(next) {
    this.BOOK_ID = 'BK' + Math.random().toString(32).split('.')[1].toUpperCase()
    next()
}
module.exports = mongoose.model('Books', book_schema, 'Books')
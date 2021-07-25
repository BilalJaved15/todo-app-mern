const mongoose = require("mongoose");
const schema = mongoose.Schema

const itemSchema = new schema({
    title: {
        type: String,
        required: true
    },
    // userEmail: {
    //     type: String,
    //     required: true
    // }
}, { timestamps: true })

const Item = mongoose.model('Item', itemSchema)

module.exports = Item;
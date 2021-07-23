import mongoose from "mongoose"
const schema = mongoose.Schema

const itemSchema = new schema({
    title: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Item = mongoose.model('Item', itemSchema)

export default Item
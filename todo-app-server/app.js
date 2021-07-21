import express from "express"
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import mongoose from "mongoose";
import itemsModel from "./api/Item/items.model.js";
import cors from "cors"


const mongodb = 'mongodb+srv://root:SamsungS22@cluster0.zyixp.mongodb.net/item-database?retryWrites=true&w=majority'
const __filename = fileURLToPath(
    import.meta.url);
const __dirname = dirname(__filename);
const port = 5000
const app = express()

app.use(express.json());
app.use(cors());

mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("LESS GOO CONNECTED")
    app.listen(port, () => {
        console.log(`Server is Listening On ${port}`)
    })
}).catch(err => (console.log(err)))

app.get("/", (req, res) => {
    res.send("<h1>TODO APP SERVER</h1>")
})


app.post("/add-item", async(req, res) => {
    console.log("SERVER CALLED AT /add-item")
    const myresponse = await itemsModel.createItem(req.body.title)
    res.json(myresponse)
})

app.get("/get-items", async(req, res) => {
    console.log("SERVER CALLED AT /get-items")
    const myresponse = await itemsModel.getItems()
    res.json(myresponse)
})
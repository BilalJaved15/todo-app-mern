const express = require("express")
const mongoose = require("mongoose");
const itemModel = require("./api/Item/item.model.js");
const cors = require("cors");
const { userModel } = require("./api/User/user.model.js");
require('dotenv').config();

const port = 5000
const app = express()

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.DB_KEY, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
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
    const myresponse = await itemModel.createItem(req.body.title)
    res.json(myresponse)
})

app.post("/add-user", async(req, res) => {
    console.log("SERVER CALLED AT /add-user")
    const myresponse = await userModel.createUser(req.body.name, req.body.email, req.body.password)
    res.json(myresponse)
})

app.get("/get-items", async(req, res) => {
    console.log("SERVER CALLED AT /get-items")
    const myresponse = await itemModel.getItems()
    res.json(myresponse)
})

app.delete("/delete-item", async(req, res) => {
    console.log("SERVER CALLED AT /delete-item")
    console.log(req.body.id)
    const myresponse = await itemModel.deleteItem(req.body.id)
    console.log(myresponse)
    res.json(myresponse)
})
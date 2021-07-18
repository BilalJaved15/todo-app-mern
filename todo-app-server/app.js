import express from "express"
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(
    import.meta.url);
const __dirname = dirname(__filename);
const port = 3000
const app = express()

app.listen(port, () => {
    console.log(`Server is Listening On ${port}`)
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/templates/index.html')
})

app.get("/add-item", (req, res) => {
    res.send("<h1>Add Item</h1>")
})
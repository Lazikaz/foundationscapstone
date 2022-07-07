const express = require ("express")
const path = require("path")

const app = express()

app.get("/article", (req, res) => {
    res.sendFile(path.join(__dirname, "../front-end/article.html"))
})

app.get("/article/styles", (req, res) => {
    res.sendFile(path.join(__dirname, "../front-end/articleStyles.css"))
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../front-end/index.html"))
})

app.listen(process.env.PORT, () => {console.log("running!")})
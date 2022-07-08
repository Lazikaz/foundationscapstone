const express = require ("express")
const path = require("path")
let cors = require("cors")
const dotenv = require("dotenv").config()

const app = express()
app.use(cors())
app.use(express.json())

//Index----------------------------------------------------------

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../front-end/index.html"))
})

app.get("/styles", (req, res) => {
    res.sendFile(path.join(__dirname, "../front-end/styles.css"))
})

//---------------------------------------------------------------
//Article--------------------------------------------------------

app.get("/article", (req, res) => {
    res.sendFile(path.join(__dirname, "../front-end/article.html"))
})

app.get("/article/styles", (req, res) => {
    res.sendFile(path.join(__dirname, "../front-end/articleStyles.css"))
})

//----------------------------------------------------------------
//Admin-----------------------------------------------------------

app.get("/adminpage", (req, res) => {
    res.sendFile(path.join(__dirname, "../front-end/adminPage.html"))
})

app.get("/adminpage/styles", (req, res) => {
    res.sendFile(path.join(__dirname, "../front-end/adminPageStyles.css"))
})

app.get("/adminpage/js", (req, res) => {
    res.sendFile(path.join(__dirname, "../front-end/adminPage.js"))
})

app.post("/api/adminpage", (req, res) => {
    res.send(
        {
            "key": "1"
        }
    )
})

//----------------------------------------------------------------
//CHANGE TO process.env.PORT
app.listen(process.env.PORT || 4005, () => {console.log(`running!`)})
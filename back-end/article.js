const express = require ("express")
const path = require("path")

const app = express()


//Index html and styles------------------------------------------

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../front-end/index.html"))
})

app.get("/styles", (req, res) => {
    res.sendFile(path.join(__dirname, "../front-end/styles.css"))
})

//----------------------------------------------------------------
//Article html and styles-----------------------------------------

app.get("/article", (req, res) => {
    res.sendFile(path.join(__dirname, "../front-end/article.html"))
})

app.get("/article/styles", (req, res) => {
    res.sendFile(path.join(__dirname, "../front-end/articleStyles.css"))
})

//----------------------------------------------------------------
//Admin tools html and styles-------------------------------------

app.get("/adminpage", (req, res) => {
    res.sendFile(path.join(__dirname, "../front-end/adminPage.html"))
})

app.get("/adminpage/styles", (req, res) => {
    res.sendFile(path.join(__dirname, "../front-end/adminPageStyles.css"))
})

//----------------------------------------------------------------

app.listen(process.env.PORT, () => {console.log("running!")})
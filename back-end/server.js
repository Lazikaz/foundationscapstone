const express = require ("express")
const path = require("path")
let cors = require("cors")
const Sequelize = require("sequelize")
const { default: axios } = require("axios")
    const sequelize = new Sequelize("postgres://juzzsrrhzkputg:52c548b2c00595c7a51528034c4ef0397125e6f111fc242f05a4f376d9df096e@ec2-52-86-115-245.compute-1.amazonaws.com:5432/d5i61prr90rjn7", {
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false
            }
        }
    })

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

app.get("/js", (req, res) => {
    res.sendFile(path.join(__dirname, "../front-end/index.js"))
})

app.get("/api/index", (req, res) => {
    sequelize.query("SELECT * FROM articles")
    .then(dbRes => res.status(200).send(dbRes[0]))
})



//---------------------------------------------------------------
//Article--------------------------------------------------------

app.get("/article", (req, res) => {
    res.sendFile(path.join(__dirname, "../front-end/article.html"))
})

app.get("/article/styles", (req, res) => {
    res.sendFile(path.join(__dirname, "../front-end/articleStyles.css"))
})

app.get("/article/js", (req, res) => {
    res.sendFile(path.join(__dirname, "../front-end/article.js"))
})

app.get("/api/article", (req, res) => {
    sequelize.query(`SELECT * FROM articles WHERE article_id = ${req.query.id}`)
    .then(dbRes => {res.status(200).send(dbRes[0])})
})

app.get("/api/random", (req, res) => {
    sequelize.query(`SELECT article_id FROM articles`)
    .then(dbRes => {
        console.log(dbRes[0])
        let array = []
        for(i = 0; i < dbRes[0].length; i++){
            array.push(dbRes[0][i].article_id)
        }
        let sendingArticle = array[Math.round(Math.random() * (array.length - 1))]
        console.log(sendingArticle)
        res.status(200).send({"sendingArticle": `${sendingArticle}`})
    })
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
    sequelize.query(`INSERT INTO articles (title, image, description, article_content) VALUES ('${req.body.title}', '${req.body.image}', '${req.body.desc}', '${req.body.content}')`)
    .then(dbRes => res.status(200).send("successful"))
})

//----------------------------------------------------------------
//CHANGE TO process.env.PORT
app.listen(process.env.PORT || 4005, () => {console.log(`running!`)})
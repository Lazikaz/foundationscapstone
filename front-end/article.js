const query = window.location.search
const articleID = new URLSearchParams(query)
const id = articleID.get("id")

const image = document.getElementById("image")
const summary = document.getElementById("summary")
const article = document.getElementById("article")
let randomArticleLink = document.getElementById("randomarticle")

function loadContent(){
    axios.get(`https://capstonebloveall.herokuapp.com/api/article/?id=${id}`)
    .then(res => {
        console.log(res.data)
        image.setAttribute("src", res.data[0].image)
        article.textContent = res.data[0].article_content
        summary.textContent = res.data[0].description
    })
}

function chooseRandomArticle(){
    axios.get(`https://capstonebloveall.herokuapp.com/api/random`)
    .then(res => {
        randomArticleLink.setAttribute("href", `/article/?id=${res.data.sendingArticle}`)
    })
}

loadContent()
chooseRandomArticle()
let randomArticleLink = document.getElementById("randomarticle")

function getArticles(){
    axios.get("https://capstonebloveall.herokuapp.com/api/index")
    .then(res => {
        for(i in res.data){
            let article = document.createElement("li")
            let list = document.getElementById("theList")
            let image = document.createElement("img")
            let link = document.createElement("a")
            let name = document.createElement("h3")

            list.appendChild(article)
            article.appendChild(link)
            link.appendChild(image)
            link.appendChild(name)
            link.setAttribute("href", `/article/?id=${res.data[i].article_id}`)
            image.setAttribute("src", `${res.data[i].image}`)
            name.textContent = `${res.data[i].title}`
        }
    })
}

function chooseRandomArticle(){
    axios.get(`https://capstonebloveall.herokuapp.com/api/random`)
    .then(res => {
        console.log(res.data)
        randomArticleLink.setAttribute("href", `/article/?id=${res.data.sendingArticle}`)
    })
}

getArticles()
chooseRandomArticle()
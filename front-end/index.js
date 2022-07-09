function getArticles(){
    axios.get("https://capstonebloveall.herokuapp.com/api/index")
    .then(res => {
        for(i in res.data){
            let article = document.createElement("li")
            let list = document.getElementsByName("ul")
            let image = document.createElement("img")
            let link = document.createElement("a")
            let name = document.createElement("h3")

            list.append(article)
            article.append(link)
            link.append(image)
            link.append(name)
            link.setAttribute("href", `/article/${res.data[i].article_id}`)
            image.setAttribute("src", `${res.data[i].image}`)
            name.textContent = `${res.data[i].title}`
        }
    })
}

getArticles()
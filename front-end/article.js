const query = window.location.search
const articleID = new URLSearchParams(query)
const id = articleID.get("id")
alert(id)

const image = document.getElementById("image")
const summary = document.getElementById("summary")
const article = document.getElementById("article")

function loadContent(){
    axios.get(`https://capstonebloveall.herokuapp.com/api/article/${id}`)
    .then(res => {
        image.setAttribute("src", res.data.image)
        article.textContent = res.data.article_content
        summary.textContent = res.data.description
    })
}

loadContent()
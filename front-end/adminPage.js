const articleTitle = document.getElementById("articleTitle")
const articleImage = document.getElementById("articleImage")
const imageDesc = document.getElementById("imageDesc")
const articleContent = document.getElementById("articleContent")
const submitButton = document.getElementById("submitButton")

const submitArticle = (event) => {
    event.preventDefault()
    //CHANGE TO HEROKU
    axios.post("http://127.0.0.1:58144/api/adminpage", 
    {
        "title": articleTitle.value,
        "image": articleImage.value,
        "desc": imageDesc.value,
        "content": articleContent.value
    })
    .then(res => {
        alert("Article submitted!")
    })
    .catch(() => {
        alert("failed")
    })
}

submitButton.addEventListener("click", submitArticle)
const articleTitle = document.getElementById("articleTitle")
const articleImage = document.getElementById("articleImage")
const imageDesc = document.getElementById("imageDesc")
const articleContent = document.getElementById("articleContent")
const submitButton = document.getElementById("submitButton")

const submitArticle = (event) => {
    event.preventDefault()
    //CHANGE TO HEROKU
    axios.post("https://capstonebloveall.herokuapp.com/api/adminpage", 
    {
        "title": articleTitle.value,
        "image": articleImage.value,
        "desc": imageDesc.value,
        "content": articleContent.value
    })
    .then(res => {
        alert("Article successfully submitted!")
    })
    .catch(() => {
        alert("failed")
    })
}

submitButton.addEventListener("click", submitArticle)
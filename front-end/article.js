const query = window.location.search
const article = new URLSearchParams(query)
const id = article.get("id")
alert(id)

// function loadContent(){
//     axios.get("")
// }
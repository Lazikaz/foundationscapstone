function getArticles(){
    axios.get("https://capstonebloveall.herokuapp.com/api/index")
    .then(res => {
        console.log(res)
    })
}

getArticles()
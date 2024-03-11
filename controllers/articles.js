const getArticles = (req, res) => {
    console.log("rendu serveur");
    res.send({
        articles
    })
}

module.exports = {getArticles}
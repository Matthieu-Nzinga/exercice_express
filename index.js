const express = require('express');
const server = express();
const articles = require('./models/articles.json');
const articlesRouter = require('./routes/articles');


server.use(express.json())

server.use('/articles', articlesRouter)

articlesRouter.get('/', (req, res) => {
    console.log("rendu serveur");
    res.send({
        name:"kadea"
    })
})

server.listen(3001, () => console.log("server is running"))
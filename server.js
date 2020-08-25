const express = require('express')
const nunjucks = require ('nunjucks')

const videos = require ("./data")
const server = express()

server.use(express.static('public'))


server.set("view engine", "njk" )

nunjucks.configure("views",{
    express: server
})

server.get("/", function(req, res){
   const data = {
       avatar_url: "https://lh3.googleusercontent.com/a-/AOh14GinkR4Ft0T7ZDuBzWy0qfY2DaKEaPwb-vCw8T3ldQ=s96-c-rg-br100",
       name: "Gabriel Fernandes",
       role: "Programador - Designer",
       description: `Programador junior, construindo um futuro no nomadismo digital Camarada do <a href = "https://www.youtube.com/channel/UC7Xog4-zhRQKbahvs27I7Ow"
       target="_blank">Pinho</a>`


   }
   
    return res.render("about")

})

server.get("/portfolio", function(req, res){
    return res.render("portfolio",{items: videos})

})

server.listen(5000, function(){
    console.log("server ta fino meu")
})
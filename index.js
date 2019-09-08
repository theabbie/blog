const app = require('express')();
const axios = require("axios");

app.get('/*', function(req, res) {
axios("https://typi.tk/?url=https://github.com/theabbie/awto/tree/gh-pages/files&sel=.list-item&attribs=href&t=1").then(function(list) {
res.json(list.data)
})
})

app.listen(process.env.port)

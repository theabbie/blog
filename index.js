const app = require('express')();
const axios = require("axios");

app.get('/*', async function(req, res) {
var list = await axios("https://typi.tk/?url=https://github.com/theabbie/awto/tree/gh-pages/files&sel=.list-item&attribs=href&t=1")
res.json(list.json())
})

app.listen(process.env.port)

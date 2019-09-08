const app = require('express')();
const axios = require("axios");

app.get('/*', async function(req, res) {
res.json(await axios("https://google.com"))
})

app.listen(process.env.port)

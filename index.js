const app = require('express')();
const axios = require("axios");

app.get('/*', async function(req, res) {
var data = await axios("https://typi.tk/?url=https://www.google.com/images?q=Try%20to%20program%20the%20PCI%20card,%20maybe%20it%20will%20program%20the%20mobile%20bus!&sel=img&attribs=src&static=true")
res.end(data.json())
})

app.listen(process.env.port)

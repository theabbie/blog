const app = require('express')();

app.get('/*', async function(req, res) {
res.type("text/html").end(await axios("https://google.com"))
})

app.listen(process.env.port)

const app = require('express')();

app.get('/*', function(req, res) {
res.type("text/html").end("<h1>Hello world</h1>")
})

app.listen(process.env.port)

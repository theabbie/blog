const app = require('express')();
const axios = require("axios");

app.get('/*', function(req, res) {
axios("https://typi.tk/?url=https://github.com/theabbie/awto/tree/gh-pages/files&sel=.list-item&attribs=href&t=1").then(function(list) {
var url = req.protocol + '://' + req.get('host') + req.url;
res.type("text/html").end(
`<html>
<head>
<title>
The Sorry Mind
</title>
<script type="application/ld+json">
{
   "@context":"https://schema.org",
   "@type":"Article",
   "name":"The Sorry Mind",
   "url":"${url}",
   "sameAs":"https://twitter.com/theabbiee",
   "mainEntity":"${url}",
   "author":{
      "@type":"Organization",
      "name":"Abhishek Chaudhary"
   },
   "publisher":{
      "@type":"Organization",
      "name":"Abhishek Chaudhary",
      "logo":{
         "@type":"ImageObject",
         "url":"https://cdn.jsdelivr.net/gh/theabbie/awto@gh-pages/files/circle-cropped.png"
      }
   },
   "datePublished":"2004-10-22T20:08:26Z",
   "dateModified":"2019-09-06T05:59:20Z",
   "image":"https://cdn.jsdelivr.net/gh/theabbie/awto@gh-pages/files/circle-cropped.png",
   "headline":"${decodeURIComponent(req.url.substring(1))}"
}
</script>
</head>
<body>

</body>
</html>`
)
})
})

app.listen(process.env.port)

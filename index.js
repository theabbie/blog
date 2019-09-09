const app = require('express')();
const axios = require("axios");

app.get('/*', async function(req, res) {
var raw = await axios("https://typi.tk/?url=https://github.com/theabbie/awto/tree/gh-pages/articles&sel=.list-item&attribs=href&t=1");
var root = "https://"+req.headers.host+"/";
var path = decodeURIComponent(req.url.split("?")[0].substring(1))
res.type("text/html").end(
`<html>
<head>
<title>
The Sorry Mind
</title>
<meta name="description" content="The Sorry Mind is about a person who knew People more than them and never told them.">
<meta name="keywords" content="The Sorry Mind, Blog" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
<script type="application/ld+json">
{
   "@context":"https://schema.org",
   "mainEntityOfPage": {
         "@type": "WebPage",
         "@id": "${root+path}"
      },
   "@type":"Article",
   "name":"The Sorry Mind",
   "url":"${root+path}",
   "sameAs":"https://twitter.com/theabbiee",
   "mainEntity":"${root+path}",
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
   "headline":"${path+"|The Sorry Mind"}"
}
</script>
</head>
<body>
${
(function() {
var list = raw.data.map(x => decodeURIComponent(x.attrib.split("/").reverse()[0]))
var tmp ="<ul>";
list.forEach(function(x) {
tmp+="<li>"+x+"</li>";
})
tmp+="</ul>";
return tmp;
})()
}
</body>
</html>`
)
})

app.listen(process.env.port)

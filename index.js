const app = require('express')();
const axios = require("axios");

app.get('/*', async function(req, res) {
var root = "https://"+req.headers.host+"/";
var path = decodeURIComponent(req.url.split("?")[0].substring(1))
var raw = await axios("https://typi.tk/?url=https://github.com/theabbie/awto/tree/gh-pages/articles&sel=.list-item&attribs=href&t=1");
var list = raw.data.map(x => decodeURIComponent(x.attrib.split("/").reverse()[0]))
var content = await axios("https://typi.tk/?url=https://github.com/theabbie/awto/blob/gh-pages/articles/"+path+"&sel=.js-file-line&attribs=class&t=1&join= &pad=@");
function repeat(str,arr) {
var rs = "";
arr.forEach(function(x) {rs+=str.split("||").join("x")})
return rs;
}
res.type("text/html").end(
`<!DOCTYPE html>
<html lang="en">
<head>
<title>
The Sorry Mind
</title>
<meta name="description" content="The Sorry Mind is about a person who knew People more than them and never told them.">
<meta name="keywords" content="The Sorry Mind, Blog" />
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
<link rel="shortcut icon" type="image/x-icon" href="https://cdn.jsdelivr.net/gh/theabbie/awto@gh-pages/files/circle-cropped.png">
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
<style>
@font-face {
font-family: kirvy;
font-display: swap;
src: url('https://cdn.jsdelivr.net/gh/theabbie/example@gh-pages/files/kirvy.otf');
}
* {font-family: kirvy;}
body {margin: 0 0 0 0;}
a {text-decoration: none; color: black;}
</style>
</head>
<body>
<div class="container-fluid">
<div class="row">
<div class="col-sm-3">
<ul>
${repeat("<li>||</li>",list)}
</ul>
</div>
<div class="col-sm-9"></div>
${content.data}
</div> 
</div>
</body>
</html>`
)
})

app.listen(process.env.port)

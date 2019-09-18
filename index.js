const app = require('express')();
const axios = require("axios");

app.get('/*', async function(req, res) {
var root = "https://"+req.headers.host+"/";
var path = decodeURIComponent(req.url.split("?")[0].substring(1))
var title = path.split("/").reverse()[0];
var raw = await axios("https://typi.tk/?url=https://github.com/theabbie/awto/tree/gh-pages/articles/"+path+"&sel=.list-item&attribs=href&t=1");
var list = raw.data.map(x => decodeURIComponent(x.attrib.split("/").reverse()[0]))
var content = await axios("https://typi.tk/?url=https://github.com/theabbie/awto/blob/gh-pages/articles/"+path+"&sel=.js-file-line&attribs=class&t=1&join= &pad=@");
function repeat(str,arr) {
var rs = "";
arr.forEach(function(x) {rs+=(str.split("||").join(x)+"\n")})
return rs;
}
res.type("text/html").end(
`<!DOCTYPE html>
<html lang="en">
<head>
<title>
${path==""?"The Sorry Mind":title+" | The Sorry Mind"}
</title>
<meta name="description" content="The Sorry Mind is about a person who knew People more than them and never told them.">
<meta name="keywords" content="The Sorry Mind, Blog" />
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
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
   "headline":"${title+" | The Sorry Mind"}"
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
<div class="jumbotron jumbotron-fluid">
<div class="container-fluid text-center">
<h1>The Sorry Mind</h1>      
</div>
</div>
<div class="row">
<div class="col-sm-2">
<ul class="list-group">
${repeat("<li class='list-group-item'><a href='"+path+"/||'>||</a></li>",list)}
</ul>
</div>
<div class="col-sm-7" style="margin-top: 20px;">
<nav aria-label="breadcrumb">
  <ul class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">Home</a></li>
    ${(function() {
    var rs = "";
    path.split("/").splice(0,path.split("/").length-1).forEach(function(x,i) {rs+="<li class='breadcrumb-item'><a href='/"+path.split("/").splice(0,i+1).join("/")+"'>"+x+"</a></li>"})
    return rs;
    })()}
    <li class="breadcrumb-item active" aria-current="page">${title}</li>
  </ul>
</nav>
${list.length==0?"<h3>"+title+"</h3>":""}
${content.data}
</div>
<div class="col-sm-3" style="margin-top: 20px;">
<div class="card">
<img class="card-img-top" src="https://cdn.jsdelivr.net/gh/theabbie/awto@gh-pages/files/IMG_20190720_184556.jpg" alt="Abhishek" style="width:100%">
<div class="card-body">
<h4 class="card-title">Abhishek</h4>
<p class="card-text">
Being a developer sometimes feels so amazing because we are instructing non-living machines to do wonderful tasks, it is more than an art and few picasso's exist
</p>
<a href="https://github.com/theabbie" class="btn btn-primary"><i class='fab fa-github'></i> Github</a>
</div>
</div>
</div>
</div> 
</div>
</body>
</html>`
)
})

app.listen(process.env.port)

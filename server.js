var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articalOne={
    title :'Artical-one',
    heading:'Artical-one',
    date :'11 aug, 2017',
    content:`<p>this is paragraph for my first artical!this is paragraph for my first articalthis is paragraph for my first articalthis is paragraph for my first articalthis is paragraph for my first articalthis is paragraph for my first artical
        </p>
   <p>this is paragraph for my first artical!this is paragraph for my first articalthis is paragraph for my first articalthis is paragraph for my first articalthis is paragraph for my first articalthis is paragraph for my first artical
  </p> `
};
function createtemplate(data)
{
    var title=data.title;
    var date=data.date;
    var content=data.content;
    var heading=data.heading;

var htmltemplate=`
<html>
    <head>
    <title>
        ${title}
    </title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
    <div class="container">
        <div>
            <a href="/">HOME</a>
        </div>
        <hr/>
        <h3>
        ${heading}
        </h3>
        <div>
            ${date}
        </div>
        ${content}


</div>
   </body>
</html>
  `;
  return htmltemplate;
}



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/artical-one',function(req,res){
  res.send(createtemplate(articalOne));
}
);
app.get('/artical-two',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'artical-two.html'));
}
);
app.get('/artical-three',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'artical-three.html'));
}
);

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

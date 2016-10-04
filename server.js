var express = require('express'); //importing packages to create server
var morgan = require('morgan');
var path = require('path');

var app = express();               //creating an object
app.use(morgan('combined'));

//js for reduced code

var articles={
 'article-one':{
    
    title : 'Article-One | imad',
    heading:'Article One',
    content:` <p>
                hai this is article one and we are here to test whether this works.<br>
                It is great to have you people here and we are going to learn HTML5 and CSS3.<br>
                Learn well and deploy your first webapp and always keep learning.<br>
            </p>`,
    date:'05-Sep-2016',
},

 'article-two':{
    
    title: 'Article-Two | imad',
    heading:'Article Two',
    content:` <p>
               Hai this is article two and iam making a lot of progress.
            </p>`,
    date:'10-Sep-2016',
},

'article-three':{
    
    title : 'Article-Three | imad',
    heading:'Article Three',
    content:` <p>
                great going guys you have completed major portion of this course and keep learning.
            </p>`,
    date:'15-Sep-2016',
},
};

function createTemplate(data){
var title=data.title;
var heading=data.heading;
var date=data.date;
var content=data.content;

//creating common template for all three pages

var htmlTemplate=`<!doctype html>
<html>
<head>
      <link href="/ui/style.css" rel="stylesheet" />
    
  
    <title>
        ${title}
    </title>
    
    <meta name="viewport" content="width=device-width, initial-scale=1"  />
    
</head>
<body>
  <div class=container>   <!-- giving a class name for entire division -->
     <div>
        <a href="/">HOME</a>
     </div>
     <hr />
     <div>
         <h3>${heading}</h3>
        
     </div>
    
     <div>
        <h6>${date}</h6>
     </div>
    
     <div>
        ${content}
     </div>
</div>
</body>
</html>
`;
return htmlTemplate;

}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'ui','index.html'));
});

app.get('/:articleName',function (req,res){
    var articleName=req.params.articleName;                        //facility provided by express framework
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});





app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

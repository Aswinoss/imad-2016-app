//articles are dynamic and ajax for counter api and names listing
var express = require('express'); //importing packages to create server
var morgan = require('morgan');
var path = require('path');
var Pool  =  require('pg').Pool;

var config={                                     //db credentials
    
  user:'aswinoss',
  database:'aswinoss',
  host:'db.imad.hasura-app.io',
  port:'5432',
  password:process.env.DB_PASSWORD         //this environment variable allows you to connect wo pswd provided by hasura
  
  };


var app = express();               //creating an object
app.use(morgan('combined'));

//js for reduced code


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
      <script>
      window.alert("welcome to ${title}");
      </script>
    
  
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
        <h6>${date.toDateString()}</h6>          //js function to converrt timeline into date as readable string
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

//db endpoint for connection

var pool=new Pool(config);                      //connects when server restarts so globally declared


app.get('/test-db',function(req,res){    
                                                           //db connectivity code
pool.query('SELECT * FROM test',function(err,result){
    if(err){
        res.status(500).send(err.toString());
    }
    else{
        res.send(JSON.stringify(result.rows));             //to properly display data in clear form
    }    
    
});

});


var counter=0;

app.get('/counter',function(req,res)
{
    counter =counter+1;
    res.send(counter.toString());                                   //sending in string format as send func can send only strings
});


//new link for displaying entered name or new url endpoint

var names=[];
app.get('/submit_name',function(req,res){  //url submit_name?name=xxxx

var name=req.query.name;                //or   submit_name/:name and var name=req.params.name;

names.push(name);
res.send(JSON.stringify(names));          //stringify is a JSON func used to convert array into string

});


app.get('/article/:articleName',function (req,res){
    
    //$1(library (must use)) is used to prevent user end and implement random queries in url
    pool.query("SELECT * FROM article WHERE title=$1",[req.params.articleName],function(err,result){
                                                                        //(req.params)facility provided by express framework
        if(err){
            res.status(500).send(err.toString());
        }
        else{
            if(result.rows.length === 0){
                res.status(404).send('Article not found');
            }
            else{
                 var articleData = result.rows[0];
                 res.send(createTemplate(articleData));
                
            }
        }
    });
                        
   
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

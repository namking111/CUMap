const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

//Init App
const app = express();

//View Engine
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

//Body Parser Middleware
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
//parse application/json
app.use(bodyParser.json())

//Set Public Folder (Store pic, etc.)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/views/index.html'));
})

//Start Server
app.listen(3000, function(){
    console.log('Server strated on port 3000..');
})
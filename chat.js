const express = require("express");
var path = require('path');
const alert = require('alert-node');


const app = express();

const jsonParser = express.json();
app.use(express.static(path.join(__dirname, 'public')));
  
app.post("/*", jsonParser, function (request, response) {
    if (request.body.userName === 'Maxim'){
        request.body.userName = 'Мамай';
    }
    console.log(request.body);

    if (request.headers['user-agent'] === 'Mozilla/6.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.158 Safari/537.36'){
        alert('Браузер говно')
        
    }
    else {

        response.json(request.body); 
    }

});
  
app.get("/*", function(request, response){

    response.sendFile(__dirname + "/public/index.html");
    
});

app.listen(4000);
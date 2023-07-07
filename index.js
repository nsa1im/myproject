const express = require('express'); //import express
const app = express(); //instanticiating an instance of express
const port = 3000;

app.set('views', 'views'); //name of the property, value/response
app.set('view engine', 'hbs'); //tell me the enginr
app.use(express.static('public')); //make this folder public available to everyone


app.get('/', function (request, response) {
	response.render('home', {name: 'John Doe'}); //listen to incoming requests
});

app.listen(port); //start the server
console.log('server is listening on port 3000');
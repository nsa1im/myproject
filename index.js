const express = require('express');
const app = express();
const fs = require('fs');
const port = process.env.PORT || 3000;

app.set('views', 'views');
app.set('view engine', 'hbs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/store-bmi-result', (req, res)=>{
    const bmiResult = {
        height: req.body.height,
        weight: req.body.weight,
        bmi: req.body.bmi,
    };
    const jsonResult = JSON.stringify(bmiResult);
    
    fs.appendFile('bmi-results.json', jsonResult + '\n', (err)=>{
        if(err){
            console.error(err);
            res.status(500).send('Error Storing BMI Result');
        } else {
            res.send('BMI result stored successfully');
        }
    });
});
app.get('/', function (request, response){
    response.render('reports');
});

app.listen(port);
console.log(`server is listening on port ${port}`);
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.set('view engine','ejs');

// parse application/x-www-form-urlencoded
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// parse application/json
// app.use(bodyParser.json())
// app.use('/assets', function (req, res, next) {
//     console.log(req.url);
//     next();
// })

app.use(express.static('./public'));

app.get('/', function (req, res) {
    res.render('index');
});


app.get('/contact', function (req, res) {

    res.render('contact', {qs: req.query});
});


app.post('/contact', urlencodedParser, function (req, res) {
       res.render('contact-successs', {data: req.body});
});


app.get('/profile/:name', function (req, res) {
     var data = {age: 29, job: 'ninja', hobbies: ['eating','fighting','fishing']};
     res.render('profile',{person: req.params.name, data: data});
});

app.listen(3000);


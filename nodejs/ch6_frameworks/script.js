var express = require('express')
    , js = require('ejs')
    , recipes = require('./recipes');

var app = express();



// Register ejs as .html. If we did
// not call this, we would need to
// name our views foo.ejs instead
// of foo.html. The __express method
// is simply a function that engines
// use to hook into the Express view
// system by default, so if we want
// to change "foo.ejs" to "foo.html"
// we simply pass _any_ function, in this
// case `ejs.__express`.

app.engine('.html', require('ejs').__express);

// Optional since express defaults to CWD/views

app.set('views', __dirname + '/views');

// Without this you would need to
// supply the extension to res.render()
// ex: res.render('users.html').
app.set('view engine', 'html');

app.use(express.bodyParser());

app.get('/', function (req, res) {   
   res.render('index.ejs', { title: 'Clever Kitchens' });
});

app.get('/recipes', recipes.list);


app.get('/recipes/suggest', function foo(req, res) {
    res.render('suggest.ejs', { title: 'Suggest a Recipe' });
   
});

app.post('/recipes/suggest', recipes.suggest);

app.get('/recipes/:title', recipes.single);

app.get('/*', function (req, res) {
    res.render('error.ejs', { title: 'Error', body: 'If all else fails, we hit this page.' });
});


app.listen(3000);
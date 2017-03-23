var recipes = require('./data/recipes').data;

exports.list = function (req, res) {
    res.render('recipes.ejs', { 'title': 'Clever Kitchens &mdash; Recipes', 'recipes': recipes });
};

exports.single = function (req, res) {
    var data = recipes.filter(function (recipe) {
        return (recipe.url === req.params.title);
    });

    if (data.length > 0) {
        data = data[0];
        data.title = 'Clever Kitchens &mdash; Recipe';
        res.render('recipe.ejs', data);
    } else {
       // res.staus(404);
        res.render('error.ejs', { title: 'Recipe not found' });
    }
};

exports.suggest = function (req, res) {
    res.render('suggest-results.ejs', {
        title: 'Clever Kitchens &mdash; Thanks!',
        name: req.body.name,
        ingredients: req.body.ingredients,
        directions: req.body.directions
    });
};
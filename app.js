const express = require('express');
const mongoose = require('mongoose')
const exprsBars = require('express-handlebars');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded());

express.static(path.join(__dirname, 'views'));

app.engine('.hbs', exprsBars({
    defaultLayout: false,
    extname: '.hbs'
}))

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));


app.listen(5000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Listening 5000...');
    }
})
const express = require('express');
const mongoose = require('mongoose')
const exprsBars = require('express-handlebars');
const path = require('path');

const PORT = process.env.PORT || 3000

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

express.static(path.join(__dirname, 'views'));

app.engine('.hbs', exprsBars({
    defaultLayout: false,
    extname: '.hbs'
}))

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

async function start() {
    try {
        await mongoose.connect(
            'mongodb+srv://vlad:1q2w3e4r@cluster0.zheix.mongodb.net/users?authSource=admin',
            {
                useNewUrlParser: true,
                useFindAndModify: false,
                useUnifiedTopology: true
            }
        )
        app.listen(PORT, (err) => {
            if(err){
                console.log(err);
            } else {
                console.log('Listening port', PORT)
            }

        })
    } catch (e) {
        console.log(e)
    }
}

start();
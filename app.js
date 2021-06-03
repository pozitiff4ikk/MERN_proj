const express = require('express');
const mongoose = require('mongoose')
const exprsBars = require('express-handlebars');
const path = require('path');
const userRoutes = require('./routes/user.router')

const PORT = process.env.PORT || 3000

const app = express();

const hbs = exprsBars.create({
    defaultLayout: false,
    extname: 'hbs'
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'views')))

app.engine('hbs', hbs.engine);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(userRoutes);

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
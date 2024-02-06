const express = require('express')
const app = express()
const ejs = require('ejs')
const mongoose = require('mongoose')
const expressSession = require('express-session')
const flash = require('connect-flash')

const port = 4000;
// Contrller 
const indexControllers = require('./controllers/indexControllers');

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())
app.use(flash())
app.set('view engine', 'ejs')

app.get('/', indexControllers)

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})
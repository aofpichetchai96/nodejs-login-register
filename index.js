const express = require('express')
const app = express()
const ejs = require('ejs')
const mongoose = require('mongoose')
const expressSession = require('express-session')
const flash = require('connect-flash')

require('dotenv').config();
const port = process.env.PORT_SERVER;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

// MongoDB Connection
mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.7sunlh9.mongodb.net/?retryWrites=true&w=majority`)
// mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.7sunlh9.mongodb.net/?retryWrites=true&w=majority`,{
//     useNewUrlParser: true
// })

// Contrllers
const indexControllers = require('./controllers/indexControllers');
const loginControllers = require('./controllers/loginControllers');
const registerControllers = require('./controllers/registerControllers');

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(flash())
app.set('view engine', 'ejs')

app.get('/', indexControllers)
app.get('/login', loginControllers)
app.get('/register', registerControllers)


app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})
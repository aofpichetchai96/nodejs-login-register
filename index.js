const express = require('express')
const app = express()
const ejs = require('ejs')
const mongoose = require('mongoose')
const expressSession = require('express-session')
const flash = require('connect-flash')

require('dotenv').config();
const port = process.env.PORT_SERVER;

const dbPassword = process.env.DB_PASSWORD;
const CONNECTION_APP_CODE = process.env.CONNECTION_APP_CODE;
const searchPassword_str = '<password>';
const connect_MongoDB = CONNECTION_APP_CODE.replace(searchPassword_str,dbPassword);

// MongoDB Connection
mongoose.connect(`${connect_MongoDB}`)
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB Successfully');
});

global.loggedIn = null
 
// Contrllers
const indexControllers = require('./controllers/indexControllers');
const loginControllers = require('./controllers/loginControllers');
const registerControllers = require('./controllers/registerControllers');
const storeuserControllers = require('./controllers/storeuserControllers');
const loginUserControllers = require('./controllers/loginUserControllers');
const logoutUserControllers = require('./controllers/logoutUserControllers');
 
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(flash())
app.use(expressSession({ 
    secret: 'node-secret',
	resave: false,
	saveUninitialized: true
}))
app.use("*", (req, res, next) => {
	loggedIn = req.session.userId	
	next()
})
app.set('view engine', 'ejs')

app.get('/', indexControllers)
app.get('/login', loginControllers)
app.get('/register', registerControllers)
app.post('/user/register', storeuserControllers)
app.post('/user/login', loginUserControllers)
app.get('/logout', logoutUserControllers)

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
}) 
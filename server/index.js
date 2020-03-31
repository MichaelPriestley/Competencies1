require('dotenv').config()
const express = require('express'),
  massive = require('massive'),
  ctrl = require('./controllers'),
  authCtrl = require('./authControllers')
  session = require('express-session'),
  checkUser = require('./checkUser'),
  { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env

const app = express()

app.use(express.json())

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    rejectUnauthorized: false,
    cookie: {maxAge: 1000 * 60 * 60 * 24 * 7},
    secret: SESSION_SECRET
  })
)

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false
  }
}).then(db => {
  app.set('db', db)
  console.log('|---Database connected---|')
  app.listen(SERVER_PORT, () => console.log(`|---Server is running on Port: ${SERVER_PORT}`))
}).catch(err => console.log(err))

app.get('/api/songs', ctrl.getAllSongs)
app.get('/api/albums', ctrl.getAllAlbums)
app.get('/api/artists', ctrl.getAllArtists)
app.get ('/api/genre', ctrl.getSongsByGenre)

app.post('/api/register', checkUser, authCtrl.register)
app.post('/api/login', checkUser, authCtrl.login)
//MIDDLEWARE EXAMPLES **********************************
app.post('/api/logout', authCtrl.logout)
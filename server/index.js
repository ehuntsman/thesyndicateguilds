const secrets = require('./secrets.js');

const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller.js');
const massive = require('massive');
const cors = require('cors');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const{ CONNECTION_STRING, SERVER_PORT } = secrets;

massive(CONNECTION_STRING)
.then(dbInstance => {
    app.set('db', dbInstance)
    console.log('Database is connected')
})
.catch((err) => console.error('Database connection error', err))


app.get('/api/all-guilds', controller.getAllGuilds);

app.get('/api/all-users', controller.getAllUsers);
app.get('/api/user/:id', controller.getOneUser);
app.put('/api/user/:id/', controller.updateUser);
// app.post('/api/all-users', function(req,res){controller.addUser});
app.post('/api/all-users', controller.addUser);


app.listen(SERVER_PORT, () => {
    console.log(`Server connected and running on port ${SERVER_PORT}`)
})
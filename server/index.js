// require('dotenv').config()
const secrets = require('./secrets.js');

const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller.js');
const massive = require('massive');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env;
const{ CONNECTION_STRING, SERVER_PORT } = secrets;

massive(CONNECTION_STRING)
.then(dbInstance => {
    app.set('db', dbInstance)
    console.log('Database is connected')
})
.catch((err) => console.error('Database connection error', err))


app.get('/api/all-guilds', controller.getAllGuilds);

app.listen(SERVER_PORT, () => {
    console.log(`Server connected and running on port ${SERVER_PORT}`)
})
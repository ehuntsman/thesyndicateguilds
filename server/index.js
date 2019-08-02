const secrets = require('./secrets.js');

const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller.js');
const massive = require('massive');
const cors = require('cors');

const app = express();


massive(secrets.CONNECTION_STRING)
.then(dbInstance => {
    app.set('db', dbInstance)
    console.log('Database is connected', dbInstance)
})
.catch((err) => console.error('Database connection error', err))

app.use(cors());
app.use(bodyParser.json());

app.get('/api/guilds', controller.getAllGuilds);

// app.get('/api/all-features', controller.getAllFeatures)

app.listen(secrets.PORT, () => {
    console.log(`Server connected and running on port ${secrets.PORT}`)
});
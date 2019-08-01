const secrets = require('./secrets.js');

const express = require('express');
const bodyParser = require('body-parser');
const controller = require("./controller.js");
const massive = require('massive');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 3001;

const{ CONNECTION_STRING } = secrets;
 
massive(CONNECTION_STRING)
.then(db => {
 app.set('db', db)
 console.log('Database is connected')
})
.catch((err) => console.error('Database connection error', err))
 
 
app.get('/api/guilds', controller.getAllGuilds);

app.listen(PORT, () => {
 console.log(`Server connected and running on port ${PORT}`)
});



// const secrets = require('./secrets.js');

// const express = require('express');
// const bodyParser = require('body-parser');
// const controller = require('./controller.js');
// const massive = require('massive');
// const cors = require('cors');

// const app = express();

// const{ CONNECTION_STRING, PORT, SESSION_SECRET, } = secrets

// massive(CONNECTION_STRING)
// .then(dbInstance => {
//     app.set('db', dbInstance)
//     // console.log('Database is connected')
// })
// .catch((err) => console.error('Database connection error', err))

// app.use(cors());
// app.use(bodyParser.json());

// app.get('/api/all-features', controller.getAllGuilds)

// app.listen(PORT, () => {
//     console.log(`Server connected and running on port ${PORT}`)
// });
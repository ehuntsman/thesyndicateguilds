const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");
const massive = require('massive');


const ctrl = require("./controller.js");

const app = express();
app.use(cors());
app.use(json());



const secrets = require('./secrets.js');
var connectionString = secrets.connectionString

massive(connectionString)
  .then(db => {
    app.set("db", db);
  })
  .catch(console.log);

 
const PORT = 3001;

// app.get('/api/volumes', ctrl.getAllVolumes);
 
app.listen(PORT || 3001, () => {
  console.log(`App listening on port ${PORT || 3001}!`);
});
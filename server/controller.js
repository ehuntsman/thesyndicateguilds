
function getAllGuilds(req, res){
  const db = req.app.get('db')
  console.log(req.body)
  db.get_all_guilds()
  .then((guild) => {
      res.status(200).send(guild)
  })
  .catch((error) => {
      console.log('controller error', error)
      res.status(500).send(error)
  })
}

function getAllUsers(req, res){
  const db = req.app.get('db')
  console.log(req.body)
  db.get_all_users()
  .then((user) => {
      res.status(200).send(user)
  })
  .catch((error) => {
      console.log('controller error', error)
      res.status(500).send(error)
  })
}

function getOneUser(req,res) {
  const dbInstance = req.app.get('db');
  const {params} = req;
  dbInstance.getUser([params.id])
  .then( user => res.status(200).send(user[0]) )
  .catch( () => res.status(500).send() );
}

function getUserByEmail(req, res){
  const dbInstance = req.app.get('db');
  dbInstance.getUserById([req.body.email])
  .then( user => res.status(200).send(user[0]) )
  .catch( () => res.status(500).send() );
}

function updateUser(req,res){
  const dbInstance = req.app.get('db');
  dbInstance.update_user([req.bodyname, req.body.email, req.body.username, req.params.id]).then( user => {
    res.status(200).send(user)
  }).catch( (err) => {
    console.log(err)
    res.status(500).send(err)
  })
}

function addUser(req,res){
  console.log(req.session)
  const db = req.app.get('db')
  const { email } = req.body
  db.add_user({ email})
  .then(() => {
      res.status(200).send("user added")
  })
  .catch((error) => {
      console.log(error)
      res.status(500).send(error)
  })
}

module.exports = {
  getAllGuilds,
  getAllUsers,
  getOneUser,
  addUser,
  getUserByEmail,
  updateUser
}
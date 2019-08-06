
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

module.exports = {
  getAllGuilds
}
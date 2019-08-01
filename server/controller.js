const getAllGuilds = (req, res) => {
  const dbInstance = req.app.get('db')
  console.log(req.app.get('db'), "this is the instance")
  // dbInstance
  //   .get_all_guilds()
  //   .then(news => res.status(200).send(guild))
  //   .catch(() => res.status(500).send());
 }

 module.exports = {
  getAllGuilds
}

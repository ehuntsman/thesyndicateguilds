const getAllVolumes = (req, res, next) => {
  const dbInstance = req.app.get("db");
  dbInstance
    .get_all_volumes()
    .then(volumes => res.status(200).send(volumes))
    .catch(() => res.status(500).send());
};

module.exports = {
  getAllVolumes,
};
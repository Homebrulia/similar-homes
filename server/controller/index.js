const pgdb = require('../../db/postgres/model');

var getSimilar = (req, res) => {
  const id = req.params.id;
  pgdb.getSimilar(id, (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(404);
    } else {
      var neighborhood = data.rows[0].address.split(',')[1].trim();
      var obj = {}
      obj.similarHomes = data.rows;
      obj.neighborhood = neighborhood;
      res.json(obj);
    }
  });
};

module.exports.getSimilar = getSimilar;
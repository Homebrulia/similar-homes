const { Pool } = require('pg')

const pool = new Pool({
  host: 'localhost',
  user: '',
  password: '',
  database: 'similar_homes'
})

var getSimilar = (id, callback) => {
  pool.query(`SELECT * FROM listings where id IN (select similar_listing_id from similar_listings where listing_id = ${id})`, (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(null, res);
    }
  })
};

module.exports.getSimilar = getSimilar;
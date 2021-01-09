const { Pool } = require('pg')

const pool = new Pool({
  host: '13.57.188.150',
  user: 'postgres',
  password: 'sdc',
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
var {Client} = require('pg');
var Promise = require('bluebird');

var client = new Client({
	host: 'localhost',
  user: '',
  password: '',
  database: 'similar_homes'
})
client.connect();

Promise.promisifyAll(client);

var drop = `
DROP TABLE IF EXISTS user_fav;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS similar_listings;
DROP TABLE IF EXISTS listings;
`;

var listings = `
	CREATE TABLE listings (
		id serial PRIMARY KEY,
		url VARCHAR ( 100 ) UNIQUE NOT NULL,
		price INT NOT NULL,
		bed SMALLINT NOT NULL,
		bath SMALLINT NOT NULL,
		sqft INT NOT NULL,
		address VARCHAR ( 100 ) UNIQUE NOT NULL
	);
`
var similar_listings = `
	CREATE TABLE similar_listings (
		listing_id INT NOT NULL,
		similar_listing_id INT NOT NULL,
		FOREIGN KEY(listing_id) REFERENCES listings(id) ON DELETE CASCADE,
		FOREIGN KEY(similar_listing_id) REFERENCES listings(id) ON DELETE CASCADE
	);
`
var users = `
	CREATE TABLE users(
		id serial PRIMARY KEY,
		name VARCHAR(20) NOT NULL
	);
`
var user_fav = `
	CREATE TABLE user_fav(
		user_id INT NOT NULL,
		listing_id INT NOT NULL,
		FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
		FOREIGN KEY(listing_id) REFERENCES listings(id) ON DELETE CASCADE,
	);
`

var createTable = (name) => {
	client.queryAsync(name)
		.then((res) => {
			console.log('created');
		})
		.catch((err) => {
			console.log(err);
		});
}

createTable(drop);
createTable(listings);
createTable(similar_listings);
createTable(users);
createTable(user_fav);






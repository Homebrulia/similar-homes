DROP DATABASE IF EXISTS similar_homes;

CREATE DATABASE similar_homes;

\c similar_homes;

CREATE TABLE listings (
	id serial PRIMARY KEY,
	url VARCHAR ( 100 ) UNIQUE NOT NULL,
	price INT NOT NULL,
	bed INT NOT NULL,
	bath INT NOT NULL,
	sqft INT NOT NULL,
	address VARCHAR ( 100 ) UNIQUE NOT NULL
);

CREATE TABLE users(
  id serial PRIMARY KEY,
  name VARCHAR(20) NOT NULL
);

CREATE TABLE user_fav(
  listing_id INT NOT NULL,
  user_id INT NOT NULL,
  FOREIGN KEY(listing_id) REFERENCES listings(id) ON DELETE CASCADE,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);




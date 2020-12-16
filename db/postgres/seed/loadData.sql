\c similar_homes;

COPY listings(id, url, price, bed, bath, sqft, address)
FROM '/Users/shailee/Documents/Programming/HackReactor/image-carousel-sdc/db/postgres/seed/listings.csv'
DELIMITER '^'
CSV HEADER;

COPY similar_listings(listing_id, similar_listing_id)
FROM '/Users/shailee/Documents/Programming/HackReactor/image-carousel-sdc/db/postgres/seed/similarListings.csv'
DELIMITER '^'
CSV HEADER;

COPY users(id, name)
FROM '/Users/shailee/Documents/Programming/HackReactor/image-carousel-sdc/db/postgres/seed/users.csv'
DELIMITER '^'
CSV HEADER;

COPY user_fav(user_id, listing_id)
FROM '/Users/shailee/Documents/Programming/HackReactor/image-carousel-sdc/db/postgres/seed/userFav.csv'
DELIMITER '^'
CSV HEADER;
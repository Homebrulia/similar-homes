arangoimport --file "/Users/shailee/Documents/Programming/HackReactor/image-carousel-sdc/db/arango/listings.csv" --type csv --collection "listings" --server.database "similar_homes";

arangoimport --file "/Users/shailee/Documents/Programming/HackReactor/image-carousel-sdc/db/arango/similarListings.csv" --type csv --collection "similar_listings" --server.database "similar_homes";

arangoimport --file "//Users/shailee/Documents/Programming/HackReactor/image-carousel-sdc/db/arango/users.csv" --type csv --collection "users" --server.database "similar_homes";

arangoimport --file "/Users/shailee/Documents/Programming/HackReactor/image-carousel-sdc/db/arango/userFav.csv" --type csv --collection "user_fav" --server.database "similar_homes";
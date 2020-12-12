var db = require('arangojs')();
var username = 'root';
var password = '';
db.useBasicAuth(username, password);

db.dropDatabase('similar_homes')
  .then(() => {
    console.log('Database deleted');
    return db.createDatabase('similar_homes')
  })
  .then(() => {
    console.log('Database created');
    return db.useDatabase('similar_homes');
  })
  .then(() => {
    var listings = db.collection('listings');
    var schema = {
      rule: {
        type: "object",
        properties: {
          _key: { type: "number"},
          url: { type: "string", "maxLength" : 100},
          price: { type: "number"},
          bed: { type: "number"},
          bath: { type: "number"},
          sqft: { type: "number"},
          address: { type: "string", "maxLength" : 100},
        },
        required: ["url", "price", "bed", "bath", "sqft", "address"]
      },
      level: "moderate",
      message: "Schema validation failed."
    };
    return listings.create({'schema': schema, 'keyOptions': {type: 'autoincrement'} });
  })
  .then(() => {
    console.log('listings created');
    var similar_listings = db.collection('similar_listings');
    var schema = {
      rule: {
        properties: {
          listing_id : {type: "number"},
          similar_listings: {
            type: "string",
            items: {
              type: "object",
              maximum: 12,
            }
          }
        },
        required: ["listing_id", "similar_listings"]
      },
      level: "none",
      message: "Schema validation failed."
    };
    return similar_listings.create({'schema': schema});
  })
  .then(() => {
    console.log('similar_listings created');
    var users = db.collection('users');
    var schema = {
      rule: {
        properties: {
          _key: { type: "number"},
          name: { type: "string", "maxLength" : 30},
        },
        required: ["name"]
      },
      level: "moderate",
      message: "Schema validation failed."
    };
    return users.create({'schema': schema, 'keyOptions': {type: 'autoincrement'} });
  })
  .then(() => {
    console.log('users created');
    var user_fav = db.collection('user_fav');
    var schema = {
      rule: {
        properties: {
          user_id : {type: "number"},
          fav_listings: {
            type: "array",
            items: {
              type: "object",
            }
          }
        },
        required: ["user_id", "fav_listings"]
      },
      level: "none",
      message: "Schema validation failed."
    };
    return user_fav.create({'schema': schema});
  })
  .then(() => {
    console.log('user_fav created');
  })
  .catch(err => console.error('Failed to create:', err));


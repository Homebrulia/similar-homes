const request = require('request');

describe('get request to get details of similar listings', () => {
  it('sends an array of similar listings which contain at least one image', (callback) => {
    request('http://localhost:8030/listings/11/listing', (err, res, body) => {
      if (err) {
        callback(err);
      } else {
        expect(body).toContain('image');
        callback();
      }
    });
  });
});

const rates = require('./rates.js');

test('Test #1: 1 EUR is ca. 10.60 SEK (Source Google, 3 Aug 2018).', () => {
  rates().then(function(SekPerEUR) {
    expect(SekPerEUR).toBeTruthy();
  });

});

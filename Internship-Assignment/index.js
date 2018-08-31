var rates = require('./rates.js');

rates().then(
  function(EurPerSEK) {
    console.log(EurPerSEK);
  }
)

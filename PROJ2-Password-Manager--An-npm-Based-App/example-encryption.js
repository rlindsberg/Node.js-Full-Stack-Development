//CRYPTOGRAPHY CHALLENGE

//encrypt an object
var crypto = require('crypto-js');

var secretObj = {
  name: 'James',
  secretName: '007'
}
var secretKey = 'ej0RT-WEO0TÇ7&/8713jkJK.D]-1';

var secretJSON = JSON.stringify(secretObj)
var encryptedJSON = crypto.AES.encrypt(secretJSON, secretKey);
console.log('Encrypted JSON is :' + encryptedJSON);


//decrypt an object

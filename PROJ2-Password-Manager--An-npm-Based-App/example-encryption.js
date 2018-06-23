var crypto = require('crypto-js');

var secretMessage = "I hid the crisps under the couch! Don't tell anyone!";
var secretKey = 'bad-key';

var encryptedMessage = crypto.AES.encrypt(secretMessage, secretKey);

console.log('Encrypted message is: ' + encryptedMessage);

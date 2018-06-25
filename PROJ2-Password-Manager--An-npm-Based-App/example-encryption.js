var crypto = require('crypto-js');

var secretMessage = "I hid the crisps under the couch! Don't tell anyone!";
var secretKey = 'bad-key';

//encrypt mes
var encryptedMessage = crypto.AES.encrypt(secretMessage, secretKey);
console.log('Encrypted message is: ' + encryptedMessage);

//decrypt mes
var decryptedBytes = crypto.AES.decrypt(encryptedMessage, secretKey);
var decryptedMessage = decryptedBytes.toString(crypto.enc.Utf8);

console.log("Decrypted message is : " + decryptedMessage);

var keythereum = require("keythereum");
var datadir = '/home/rebecca/miniproj/blockchain/test';
var fs=require('fs-extra');
fs.readFile('account.txt', 'utf8', (err, data) => {
    if (err) throw err;
    else{
        const password = "90210";
        var keyObject = keythereum.importFromFile(data, datadir);
        var privateKey = keythereum.recover(password, keyObject);
        //Import account to metamask
        console.log('Private Key:' + privateKey.toString('hex'));
    }
  });

const Web3=require('web3');
const passwordmanager = require('./build/PasswordManager.json');
const web3=new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const fs=require('fs-extra');
const deploy=async()=>{
    const accounts= await web3.eth.getAccounts();
    console.log('Account:' + accounts[0]); 
    fs.appendFile('account.txt',accounts[0])
    console.log('Balance:' + await web3.eth.getBalance(accounts[0]) + 'wei');
    
    await web3.eth.personal.unlockAccount(accounts[0], '90210',600)
        
    console.log('Deploying..');
   
    const result = await new web3.eth.Contract(JSON.parse(passwordmanager.interface))
      .deploy({ data: '0x' + passwordmanager.bytecode})
      .send({from: accounts[0], gas: '1000000' });
    fs.appendFile('address.js',"var addr='"+result.options.address+"';\nexport default addr;")
    console.log('Contract deployed successfully.\n')
};
deploy();
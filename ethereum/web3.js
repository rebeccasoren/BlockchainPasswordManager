import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined'){
 //We are in browser and metamask exists
 web3 = new Web3(window.web3.currentProvider);
}
else {
  //we are on server
  const provider = new Web3.providers.HttpProvider("http://localhost:8545");
  web3 = new Web3(provider);
}

export default web3;
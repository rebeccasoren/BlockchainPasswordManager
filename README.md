# Password Management System using Blockchain

React Application for managing passwords using Smart Contracts, deployed on a private Blockchain Network.

## Installations
This application requires [Geth, Golang's Ethereum Client](https://geth.ethereum.org/docs/install-and-build/installing-geth) to deploy private blockchain.

## Deployment

### Deploying Private Blockchain
Run ``` npm run blockchain``` to initialise and run the chain

To delete chain data, remove the *blockchain/test* folder

### Deploying Smart Contract
#### Pre Requisites
Create an account using `personal.newAccount()` and set appropriate passphrase. 

Mine ether into this account using `miner.start()` and using `miner.stop()` once a few blocks have been mined.

Check your balance using `eth.getBalance(eth.accounts[0])`

#### Deployment
Run `compile.js` and then `deploy.js` from *ethereum* folder. 

### Deploying Web Application 
Run the command `npm run start` to start the *next.js* server and launch the user interface for the application.

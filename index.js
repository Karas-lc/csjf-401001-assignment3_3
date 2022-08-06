const Web3 = require('web3');
if (typeof web3 !== 'undefined'){
    web3 = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/b2c2f0104141408687cf5cd77930206e"))
}
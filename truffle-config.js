const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  
solc: {
    optimizer:{
      enabled: true,
      runs: 200
    }
   },


  networks: {
   
    development: {
      host: "127.0.0.1",     
      port: 8545,            
    network_id: "*",       
   },
   matic: {
    provider: () => new HDWalletProvider(mnemonic, `https://rpc-mumbai.maticvigil.com`),
    network_id: 80001,
    confirmations: 2,
    timeoutBlocks: 200,
    skipDryRun: true
  },
  
  },

  mocha: {
    
  },

 
  compilers: {
    solc: {
      version: "0.8.13", 
     
    }
  },
};

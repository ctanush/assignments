const express= require('express')
const app =express()
const fs = require('fs')
const Web3 = require('web3');
// const contract = require('truffle-contract');
app.use(express.json())
var web3 = new Web3(new Web3.providers.HttpProvider('https://rpc-mumbai.maticvigil.com/v1/4971b9c83ef22bbc07343e2770cec78790e374c9'))
const walletAddressPrivateKey = '5cd0b02451cc74f0ceb1280faf4b6844dca9305f7677ef97e2396c788a6ab29b';
const abi = JSON.parse(fs.readFileSync("./loyalty_overview.json")); 
const contract = new web3.eth.Contract(abi["abi"],'0x2955f1Dac8F28dB3a1d891Aff956C244016D5B38');

const regBusiness = async(name,email,add,sym)=>{
    const gas = await contract.methods.regBusiness(name,email,add,sym,4).estimateGas({from:'0xdae9669e371a879a8d012b130B4eD32BC11DfDA1'}) 
    const nonce = await web3.eth.getTransactionCount('0xdae9669e371a879a8d012b130B4eD32BC11DfDA1', "latest");
    const transaction = {
        from: '0xdae9669e371a879a8d012b130B4eD32BC11DfDA1' ,
        to: '0x2955f1Dac8F28dB3a1d891Aff956C244016D5B38' ,
        nonce : nonce,
        gas: gas+100,
        data : contract.methods.regBusiness(name,email,add,sym,4).encodeABI()
    };
    const signPromise = await web3.eth.accounts.signTransaction(
        transaction,
        walletAddressPrivateKey
    );
    const signedTransaction = await web3.eth  .sendSignedTransaction(
        signPromise["rawTransaction"]
    );
    const hash = await signedTransaction["transactionHash"];
    console.log(hash);
        return hash;
        
}

const regCustomer = async(name1,name2,email,add,)=>{
    const gas = await contract.methods.regCustomer(name1,name2,email,add).estimateGas({from:'0xdae9669e371a879a8d012b130B4eD32BC11DfDA1'}) 
    const nonce = await web3.eth.getTransactionCount('0xdae9669e371a879a8d012b130B4eD32BC11DfDA1', "latest");
    const transaction = {
        from: '0xdae9669e371a879a8d012b130B4eD32BC11DfDA1' ,
        to: '0x2955f1Dac8F28dB3a1d891Aff956C244016D5B38' ,
        nonce : nonce,
        gas: gas+100,
        data : contract.methods.regCustomer(name1,name2,email,add).encodeABI()
    };
    const signPromise = await web3.eth.accounts.signTransaction(
        transaction,
        walletAddressPrivateKey
    );
    const signedTransaction = await web3.eth.sendSignedTransaction(
        signPromise["rawTransaction"]
    );
    const hash = await signedTransaction["transactionHash"];
    console.log(hash);
    return hash;

}

const joinBusiness = async(bs_ad,cs_ad)=>{
    let add1 = bs_ad;
    let add2 = cs_ad;
    const gas = await contract.methods.joinBusiness(add1,add2).estimateGas({from:'0xdae9669e371a879a8d012b130B4eD32BC11DfDA1'}); 
    const nonce = await web3.eth.getTransactionCount('0xdae9669e371a879a8d012b130B4eD32BC11DfDA1', "latest");
    const transaction = {
        from: '0xdae9669e371a879a8d012b130B4eD32BC11DfDA1' ,
        to: '0x2955f1Dac8F28dB3a1d891Aff956C244016D5B38' ,
        nonce : nonce,
        gas: gas+100,
        data : contract.methods.joinBusiness(add1,add2).encodeABI()
    };
    const signPromise = await web3.eth.accounts.signTransaction(
        transaction,
        walletAddressPrivateKey
    );
    const signedTransaction = await web3.eth.sendSignedTransaction(
        signPromise["rawTransaction"]
    );
    const hash = await signedTransaction["transactionHash"];
    console.log(signedTransaction);
    return hash;

}

const connectBusiness = async(add1,add2,rate)=>{
    const gas = await contract.methods.connectBusiness(add1,add2,rate).estimateGas({from:'0xdae9669e371a879a8d012b130B4eD32BC11DfDA1'});
    const nonce = await web3.eth.getTransactionCount(add2, "latest");
    const transaction = {
        from: '0xdae9669e371a879a8d012b130B4eD32BC11DfDA1' ,
        to: '0x2955f1Dac8F28dB3a1d891Aff956C244016D5B38' ,
        nonce : nonce,
        gas: gas+100,
        data : contract.methods.connectBusiness(add1,add2,rate).encodeABI()
    };
    const signPromise = await web3.eth.accounts.signTransaction(
        transaction,
        walletAddressPrivateKey
    );
    const signedTransaction = await web3.eth.sendSignedTransaction(
        signPromise["rawTransaction"]
    );
    const hash = await signedTransaction["transactionHash"];
    return hash;

}

const reward = async(bs_ad,cs_ad,value)=>{
    add2 = bs_ad;
    add1 = cs_ad;
    const gas = await contract.methods.reward(add1,value,add2).estimateGas({from:'0xdae9669e371a879a8d012b130B4eD32BC11DfDA1'});
    const nonce = await web3.eth.getTransactionCount('0xdae9669e371a879a8d012b130B4eD32BC11DfDA1', "latest");
    const transaction = {
        from: '0xdae9669e371a879a8d012b130B4eD32BC11DfDA1' ,
        to: '0x2955f1Dac8F28dB3a1d891Aff956C244016D5B38' ,
        nonce : nonce,
        gas: gas+100,
        data : contract.methods.reward(add1,value,add2).encodeABI()
    };
    const signPromise = await web3.eth.accounts.signTransaction(
        transaction,
        walletAddressPrivateKey
    );
    const signedTransaction = await web3.eth.sendSignedTransaction(
        signPromise["rawTransaction"]
    );
    const hash = await signedTransaction["transactionHash"];
    return hash;

}

const spend = async(bs_fr_ad,bs_to_ad,cs_ad,value)=>{
    add1 = bs_to_ad;
    add2 = bs_fr_ad;
    add3 = cs_ad;

    const gas = await contract.methods.spend(add1,add2,add3,value).estimateGas({from:'0xdae9669e371a879a8d012b130B4eD32BC11DfDA1'});
    const nonce = await web3.eth.getTransactionCount(add3, "latest");
    const transaction = {
        from: '0xdae9669e371a879a8d012b130B4eD32BC11DfDA1' ,
        to: '0x2955f1Dac8F28dB3a1d891Aff956C244016D5B38' ,
        nonce : nonce,
        gas: gas+100,
        data : contract.methods.spend(add1,add2,add3,value).encodeABI()
    };
    const signPromise = await web3.eth.accounts.signTransaction(
        transaction,
        walletAddressPrivateKey
    );
    const signedTransaction = await web3.eth.sendSignedTransaction(
        signPromise["rawTransaction"]
    );
    const hash = await signedTransaction["transactionHash"];
    console.log(signedTransaction);
    return hash;

}

const cust_shwcoins = async(cs_ad,bs_ad)=>{
    add1 = cs_ad;
    add2 = bs_ad;
    const coins = await contract.methods.shwcoins(add1,add2).call({from:add2}) 
    console.log(coins);
    return coins; 
        
}

const shwcoin = async(add)=>{
    const coins = await contract.methods.shwcoin(add).call({from:add}) 
    return coins;    
}

const txh = reward('0xDB276f985CDd07A5Fc78374DDB927b8815d24e8e','0xdae9669e371a879a8d012b130B4eD32BC11DfDA1',1000);
console.log(txh);

// 0x8B5ee60Cc977fA88310d06000C466A673dc46a23 : FlipKart
// 0xDB276f985CDd07A5Fc78374DDB927b8815d24e8e : Meesho
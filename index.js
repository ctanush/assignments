require('dotenv').config();
const express= require('express')
const app =express()
const fs = require('fs')
const Web3 = require('web3');
// const mongodb = require('mongodb').MongoClient
const contract = require('truffle-contract');
app.use(express.json())

// if (typeof web3 !== 'undefined') {
//     var web3 = new Web3(web3.currentProvider)
//   } else {
var web3 = new Web3(new Web3.providers.HttpProvider('https://rpc-mumbai.maticvigil.com/v1/4971b9c83ef22bbc07343e2770cec78790e374c9'))
// }

// const testnet = 'http://127.0.0.1:8545';
const walletAddress = '0x892813471761cF5235599d0363264E1aDeEaB5ED';
const walletAddressPrivateKey = '7ddd4f2c0e80f64c79199daf5101e75cc9cd6661989d997a82b3c66ed2ec7da9';
const abi = JSON.parse(fs.readFileSync("./loyalty_overview.json")); 
// const web3 = new Web3(new Web3.providers.HttpProvider(testnet));

// web3.eth.personal.unlockAccount(web3.eth.defaultAccount);

// web3.eth.setProvider('https://localhost:8545');

let loi = contract(abi['abi']);


async function main(){

// var bs = await web3.eth.getAccounts();

    // let lt = loi.at('0x41fffb446550b68286bb2e3fb44f19b3e04861b3');
    // web3.eth.defaultAccount = bs[0];
    const contract = new web3.eth.Contract(abi["abi"],'0xfbd8E022EFF3492947340f64d911Ca3004d5316d');
    // let supply = await contract.methods.totalSupply().call();
    // const nonce = await web3.eth.getTransactionCount(bs[0], "latest");
    // contract.options.address = process.env.FT_CONTRACT;
    // let lt = await contract.methods.regCustomer("Tanush","C",'test@gmail.com',bs[5]).send({from:bs[0],to:'0xcd08800cbb7361df660888234d820156d9af5c00',gas:140917},function(error,trh){console.log(error)});
    // let lt = await contract.methods.regCustomer("Tanush","C",'test@gmail.com',bs[5]).estimateGas({from:bs[0]});
    // let lt1 = await contract.methods.regBusiness("Flipkart",'test1@gmail.com','0xDB276f985CDd07A5Fc78374DDB927b8815d24e8e','SC',4).estimateGas({from:'0xdae9669e371a879a8d012b130B4eD32BC11DfDA1'});

    // const lt = await contract.methods.shwCustomer(bs[5]).call({from:bs[0]});
    // const ls1 = await contract.methods.joinBusiness(bs[1]).send({from:bs[4],gas:70900});
    //   let ls = await contract.methods.shwcoin(bs[1]).call({from:bs[1]});
    // //   let l1 = await contract.methods.reward(bs[4], 1).send({from:bs[1]});
    add1 = '0xDB276f985CDd07A5Fc78374DDB927b8815d24e8e';
    add2 = '0xB153FA238eDA3D280e58B2DACba9482C91e4bB9E';
    const gas = await contract.methods.joinBusiness(add1).estimateGas({from:add2}) 
    // const nonce = await web3.eth.getTransactionCount(add2, "latest");
    const transaction = {
        from: add2 ,
        to: '0xfbd8E022EFF3492947340f64d911Ca3004d5316d',
        gas: gas+100,
        data : contract.methods.joinBusiness(add1).encodeABI()
    };
    const signPromise = await web3.eth.accounts.signTransaction(
        transaction,
        walletAddressPrivateKey
    );
    const signedTransaction = await web3.eth.sendSignedTransaction(
        signPromise["rawTransaction"]
    );
    const hash = signedTransaction["transactionHash"];
    console.log(signedTransaction);

    // const lt = await contract.methods.joinBusiness(add1).call({from:'0xdae9669e371a879a8d012b130B4eD32BC11DfDA1'});
    // console.log(gas);
    // console.log(lt1);
    // console.log(lt1);
    console.log("hello world");
}
main().catch(console.error).finally(() => process.exit());
// mongodb.connect(process.env.DB,{ useUnifiedTopology: true },(err,client)=>{
//     const db =client.db('Cluster0')
//     //home
//     routes(app,db)
//     app.listen(process.env.PORT || 8082, () => {
//         console.log('listening on port 8082');
//      })
// })
<div>
<p>v1</p>
<p2>v2</p2>
<btn onClick = {(v1)=>{setdata(v1);handleSubmit;}}>
    
</btn>
</div>
require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give close brown slab carpet rate pitch honey give kangaroo army gift'; 
let testAccounts = [
"0x5fa5242b34365c5b95e4a4e2bf17464879352310751d20ea7e7dc8fe101e0f4e",
"0xa27cd2d02dff8c60afda56d42ad7da8d7c8ca9ab31e9d423f3707c7e3d12e436",
"0x96928e3d8ef55d66db391f43c91cfcbe57003efa17b2a57b5cd949c533cf3c03",
"0x52f2f71fab7b06a7ba381dd1fd87c8a82ac714af26183762fa0cdd6d6b12f298",
"0xa3d92e43a5bbe5b6154159194f889c980616a78f816a3f365866192c3f5a5900",
"0xdbaa9f4a6c9fa6b966318a5494ececa122c0bfdb61e24dfa252da4603f68246d",
"0x0ef99558c319f637452dd39c96e161f39d6edab3a025251b9dac6cb353f3d067",
"0xbc432ddc438cf5e99e23b03efed56c7306e736d531011e3a29edc90454a5727c",
"0x9e324a5ca3f1688e6b9210b629c747b990d657fddfdcc80d9ecf80ecd54e6099",
"0x4486a56b0d1671dfb402317f9ac513342cfa798ae2f08373dadc8a0966984263"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


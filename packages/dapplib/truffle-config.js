require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'hockey knife olympic system index rebel mad pupil inflict kiwi army gate'; 
let testAccounts = [
"0x7b47a5764bc526271f2ab366ad05d163c451ed2614863daaf95fc2a2f84f4948",
"0xd7f8cee61111b87cecdff94f12c8697a1d8b38704f62ecb77beef69f047e3865",
"0xbcdd56ae6d5d7094475ee96f21eca730b439472d7c8ef6fcb460f613996d1525",
"0xdb183ce0e4c1b245d6e2280cf21f52ac8dca8a96e44fcaffe6526a6d5cdab87b",
"0x18205892e0bd0a403852b72fdf20689d8b012f90e218d97a53d9c6dbfa18de72",
"0x2b679c4a96608e1682859aae3f1201f98aa4a2c2499015eab5124a492be9c714",
"0xdea370d9f03e338a75de55bf4483fc154e8989091b924621af485fcaa979b068",
"0xaa4d3d54bd77239edaa6be10cf7285b32c2876ac2d6c7a3fcf40a844140e7bde",
"0x987bf7feb526adee8bc88b890b78fd4a7dc5e9fcb2d556f20a95761a5bdf0d90",
"0xb8b4bb42d9387fa188d0a85cbfe8af8f20a432b252e8865696751ebf18b9e8ce"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



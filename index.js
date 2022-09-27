

// Option 1
// const sdk = require('api')('@opensea/v1.0#10fy4ug30l7qohm4q');

// sdk.retrievingASingleAsset({
//   include_orders: 'false',
//   asset_contract_address: '0x495f947276749ce646f68ac8c248420045cb7b5e',
//   token_id: '95118621335302583986196255549743974714674372013615311494377442856954276872193',
//   'x-api-key': ''

// })
//   .then(res => console.log(res))
//   .catch(err => console.error(err.toJSON()));




// NOTE: Getting error ('SyntaxError: Validation failed. /paths/asset/{asset_contract_address}/{token_id}/validate/get has a path parameter named "validate")


// Option 2

const Web3 = require('web3')
const {OpenSeaSDK, Network} = require('opensea-js')
// This example provider won't let you make transactions, only read-only calls:
const provider = new Web3.providers.HttpProvider('https://api.opensea.io')

const openseaSDK = new OpenSeaSDK(provider, {
  networkName: Network.Main,
  apiKey: ' '

})

openseaSDK.api.getAsset({ tokenAddress: '0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb'})
.then(res=>{
  console.log(res)
}).catch(err=>{
  console.log(err)
})


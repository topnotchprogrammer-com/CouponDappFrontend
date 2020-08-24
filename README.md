# Coupon Dapp

## Development

1. Install docker - https://docs.docker.com/engine/install/, https://docs.docker.com/engine/install/linux-postinstall/
2. Install docker compose - https://docs.docker.com/compose/install/
3. Run `docker-compose build` to build containers
4. Run `docker-compose up` to start react application and gnache-cli
5. Install MetaMask browser extension - https://metamask.io/download.html
6. Select `localhost:8545` network in MetaMask
7. Open your app http://localhost:3000
8. Open http://localhost:5002/webui to access IPFS

### Gnache accounts:
 1. 0x7E5F4552091A69125d5DfCb7b8C2659029395Bdf (1000 ETH)
 2. 0x2B5AD5c4795c026514f8317c7a215E218DcCD6cF (1000 ETH)
 3. 0x6813Eb9362372EEF6200f3b1dbC3f819671cBA69 (1000 ETH)
 4. 0x1efF47bc3a10a45D4B230B5d10E37751FE6AA718 (1000 ETH)
 5. 0xe1AB8145F7E55DC933d51a18c793F901A3A0b276 (1000 ETH)
 6. 0xE57bFE9F44b819898F47BF37E5AF72a0783e1141 (1000 ETH)
 7. 0xd41c057fd1c78805AAC12B0A94a405c0461A6FBb (1000 ETH)
 8. 0xF1F6619B38A98d6De0800F1DefC0a6399eB6d30C (1000 ETH)
 9. 0xF7Edc8FA1eCc32967F827C9043FcAe6ba73afA5c (1000 ETH)
10. 0xfaE394561e33e242c551d15D4625309EA4c0B97f (1000 ETH)

### Gnache private keys:
 1. 0x0000000000000000000000000000000000000000000000000000000000000001
 2. 0x0000000000000000000000000000000000000000000000000000000000000002
 3. 0x0000000000000000000000000000000000000000000000000000000000000003
 4. 0x0000000000000000000000000000000000000000000000000000000000000004
 5. 0x0000000000000000000000000000000000000000000000000000000000000005
 6. 0x0000000000000000000000000000000000000000000000000000000000000006
 7. 0x0000000000000000000000000000000000000000000000000000000000000007
 8. 0x0000000000000000000000000000000000000000000000000000000000000008
 9. 0x0000000000000000000000000000000000000000000000000000000000000009
10. 0x0000000000000000000000000000000000000000000000000000000000000010


### Contract migration address:

```
0x7E5F4552091A69125d5DfCb7b8C2659029395Bdf
```

### Globally accessible objects:
1. `window.web3` - https://web3js.readthedocs.io/en/v1.2.11/
2. `window.contract` - web3 contract connected to our contract
3. `window.ethereum` - metamask (provided by MetaMask extension)
4. `window.ipfs` - https://github.com/ipfs/js-ipfs/tree/master/docs/core-api

### Running contract functions:

```
// send example
contract.methods.setAccount().send({from: '0x7E5F4552091A69125d5DfCb7b8C2659029395Bdf'}, function(error, result){
    console.log(result, error)
})

// call example
contract.methods.getInventory().call({from: '0x7E5F4552091A69125d5DfCb7b8C2659029395Bdf'}, function(error, result){
    console.log(result, error)
})
contract.methods.showInventory().call({from: '0x7E5F4552091A69125d5DfCb7b8C2659029395Bdf'}, function(error, result){
    console.log(result, error)
})
```

### IPFS:

```
// send JSON data to IPFS, and log address
for await (const result of ipfs.add(JSON.stringify({data:"test2"}))) {
    console.log(result.path);
}

// retrive JSON data from IPFS
for await (const file of ipfs.get('QmQTrGWofFgFCzgSzd9PqGFawdqQ5HCrywm2ETv2Dsa1ph')) {
  let content = ''
  for await (const chunk of file.content) {
    content += chunk.toString()
  }
  console.log(JSON.parse(content))
}
```

## Production

1. Production website is hosted on heroku: https://coupon-dapp.herokuapp.com/
2. Deployment is automatically made by https://circleci.com for every master push
3. In progress...
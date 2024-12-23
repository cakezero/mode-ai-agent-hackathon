export const memeProp = {
  abi: [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "symbol",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "supply",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "MustSendETH",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "MustSpecifyTokenAmount",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "UNISWAP_V2_FACTORY",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "UNISWAP_V2_ROUTER",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amountTokenDesired",
          "type": "uint256"
        }
      ],
      "name": "addLiquidityETH",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getTokenAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "memeToken",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "pair",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "swapETHForMeme",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amountIn",
          "type": "uint256"
        }
      ],
      "name": "swapMemeForETH",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "uniswapRouter",
      "outputs": [
        {
          "internalType": "contract IUniswapV2Router",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "weth",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    }
  ],
  bytecode:
    "0x608060405234801561000f575f80fd5b50604051612f35380380612f358339818101604052810190610031919061053c565b5f838383604051610041906103af565b61004d93929190610625565b604051809103905ff080158015610066573d5f803e3d5ffd5b509050805f806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555073ee567fe1712faf6149d80da1e6934e354124cfe360035f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060035f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ad5c46486040518163ffffffff1660e01b8152600401602060405180830381865afa158015610166573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061018a91906106c2565b60025f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505f8054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663095ea7b373ee567fe1712faf6149d80da1e6934e354124cfe37fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6040518363ffffffff1660e01b81526004016102579291906106fc565b6020604051808303815f875af1158015610273573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906102979190610758565b5073f62c03e08ada871a0beb309762e260a7a6a880e673ffffffffffffffffffffffffffffffffffffffff1663c9c653965f8054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518363ffffffff1660e01b8152600401610327929190610783565b6020604051808303815f875af1158015610343573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061036791906106c2565b60015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050506107aa565b61173d806117f883390190565b5f604051905090565b5f80fd5b5f80fd5b5f80fd5b5f80fd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b61041b826103d5565b810181811067ffffffffffffffff8211171561043a576104396103e5565b5b80604052505050565b5f61044c6103bc565b90506104588282610412565b919050565b5f67ffffffffffffffff821115610477576104766103e5565b5b610480826103d5565b9050602081019050919050565b8281835e5f83830152505050565b5f6104ad6104a88461045d565b610443565b9050828152602081018484840111156104c9576104c86103d1565b5b6104d484828561048d565b509392505050565b5f82601f8301126104f0576104ef6103cd565b5b815161050084826020860161049b565b91505092915050565b5f819050919050565b61051b81610509565b8114610525575f80fd5b50565b5f8151905061053681610512565b92915050565b5f805f60608486031215610553576105526103c5565b5b5f84015167ffffffffffffffff8111156105705761056f6103c9565b5b61057c868287016104dc565b935050602084015167ffffffffffffffff81111561059d5761059c6103c9565b5b6105a9868287016104dc565b92505060406105ba86828701610528565b9150509250925092565b5f81519050919050565b5f82825260208201905092915050565b5f6105e8826105c4565b6105f281856105ce565b935061060281856020860161048d565b61060b816103d5565b840191505092915050565b61061f81610509565b82525050565b5f6060820190508181035f83015261063d81866105de565b9050818103602083015261065181856105de565b90506106606040830184610616565b949350505050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61069182610668565b9050919050565b6106a181610687565b81146106ab575f80fd5b50565b5f815190506106bc81610698565b92915050565b5f602082840312156106d7576106d66103c5565b5b5f6106e4848285016106ae565b91505092915050565b6106f681610687565b82525050565b5f60408201905061070f5f8301856106ed565b61071c6020830184610616565b9392505050565b5f8115159050919050565b61073781610723565b8114610741575f80fd5b50565b5f815190506107528161072e565b92915050565b5f6020828403121561076d5761076c6103c5565b5b5f61077a84828501610744565b91505092915050565b5f6040820190506107965f8301856106ed565b6107a360208301846106ed565b9392505050565b611041806107b75f395ff3fe608060405260043610610094575f3560e01c806397b3d8ca1161005857806397b3d8ca1461016f57806399d8fae314610179578063a82ed9ec146101a3578063a8aa1b31146101cd578063d06d04cc146101f75761009b565b806310fe9ae81461009f5780633fc8cef3146100c957806366dc34a7146100f3578063735de9f71461011b578063972598e7146101455761009b565b3661009b57005b5f80fd5b3480156100aa575f80fd5b506100b3610213565b6040516100c091906109f2565b60405180910390f35b3480156100d4575f80fd5b506100dd61023a565b6040516100ea91906109f2565b60405180910390f35b3480156100fe575f80fd5b5061011960048036038101906101149190610a4f565b61025f565b005b348015610126575f80fd5b5061012f610516565b60405161013c9190610ad5565b60405180910390f35b348015610150575f80fd5b5061015961053b565b60405161016691906109f2565b60405180910390f35b61017761055e565b005b348015610184575f80fd5b5061018d610778565b60405161019a91906109f2565b60405180910390f35b3480156101ae575f80fd5b506101b7610790565b6040516101c491906109f2565b60405180910390f35b3480156101d8575f80fd5b506101e16107a8565b6040516101ee91906109f2565b60405180910390f35b610211600480360381019061020c9190610a4f565b6107cd565b005b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b5f8111610297576040517ed8767d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6060600267ffffffffffffffff8111156102b4576102b3610aee565b5b6040519080825280602002602001820160405280156102e25781602001602082028036833780820191505090505b5090505f8054906101000a900473ffffffffffffffffffffffffffffffffffffffff16815f8151811061031857610317610b1b565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505060025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160018151811061038857610387610b1b565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250505f8054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b815260040161041e93929190610b57565b6020604051808303815f875af115801561043a573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061045e9190610bc1565b5060035f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166318cbafe5835f8433610168426104ae9190610c19565b6040518663ffffffff1660e01b81526004016104ce959493929190610d3c565b5f604051808303815f875af11580156104e9573d5f803e3d5ffd5b505050506040513d5f823e3d601f19601f820116820180604052508101906105119190610ecb565b505050565b60035f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b5f8054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b5f3411610597576040517fd73ab2e100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6060600267ffffffffffffffff8111156105b4576105b3610aee565b5b6040519080825280602002602001820160405280156105e25781602001602082028036833780820191505090505b50905060025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16815f8151811061061a57610619610b1b565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250505f8054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160018151811061068857610687610b1b565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505060035f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16637ff36ab5345f8433610168426107119190610c19565b6040518663ffffffff1660e01b81526004016107309493929190610f12565b5f6040518083038185885af115801561074b573d5f803e3d5ffd5b50505050506040513d5f823e3d601f19601f820116820180604052508101906107749190610ecb565b5050565b73f62c03e08ada871a0beb309762e260a7a6a880e681565b73ee567fe1712faf6149d80da1e6934e354124cfe381565b60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b5f3411610806576040517fd73ab2e100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f811161083e576040517ed8767d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330846040518463ffffffff1660e01b815260040161089a93929190610b57565b6020604051808303815f875af11580156108b6573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108da9190610bc1565b5060035f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f305d719345f8054906101000a900473ffffffffffffffffffffffffffffffffffffffff16845f80336101684261094b9190610c19565b6040518863ffffffff1660e01b815260040161096c96959493929190610f5c565b60606040518083038185885af1158015610988573d5f803e3d5ffd5b50505050506040513d601f19601f820116820180604052508101906109ad9190610fbb565b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6109dc826109b3565b9050919050565b6109ec816109d2565b82525050565b5f602082019050610a055f8301846109e3565b92915050565b5f604051905090565b5f80fd5b5f80fd5b5f819050919050565b610a2e81610a1c565b8114610a38575f80fd5b50565b5f81359050610a4981610a25565b92915050565b5f60208284031215610a6457610a63610a14565b5b5f610a7184828501610a3b565b91505092915050565b5f819050919050565b5f610a9d610a98610a93846109b3565b610a7a565b6109b3565b9050919050565b5f610aae82610a83565b9050919050565b5f610abf82610aa4565b9050919050565b610acf81610ab5565b82525050565b5f602082019050610ae85f830184610ac6565b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b610b5181610a1c565b82525050565b5f606082019050610b6a5f8301866109e3565b610b7760208301856109e3565b610b846040830184610b48565b949350505050565b5f8115159050919050565b610ba081610b8c565b8114610baa575f80fd5b50565b5f81519050610bbb81610b97565b92915050565b5f60208284031215610bd657610bd5610a14565b5b5f610be384828501610bad565b91505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f610c2382610a1c565b9150610c2e83610a1c565b9250828201905080821115610c4657610c45610bec565b5b92915050565b5f819050919050565b5f610c6f610c6a610c6584610c4c565b610a7a565b610a1c565b9050919050565b610c7f81610c55565b82525050565b5f81519050919050565b5f82825260208201905092915050565b5f819050602082019050919050565b610cb7816109d2565b82525050565b5f610cc88383610cae565b60208301905092915050565b5f602082019050919050565b5f610cea82610c85565b610cf48185610c8f565b9350610cff83610c9f565b805f5b83811015610d2f578151610d168882610cbd565b9750610d2183610cd4565b925050600181019050610d02565b5085935050505092915050565b5f60a082019050610d4f5f830188610b48565b610d5c6020830187610c76565b8181036040830152610d6e8186610ce0565b9050610d7d60608301856109e3565b610d8a6080830184610b48565b9695505050505050565b5f80fd5b5f601f19601f8301169050919050565b610db182610d98565b810181811067ffffffffffffffff82111715610dd057610dcf610aee565b5b80604052505050565b5f610de2610a0b565b9050610dee8282610da8565b919050565b5f67ffffffffffffffff821115610e0d57610e0c610aee565b5b602082029050602081019050919050565b5f80fd5b5f81519050610e3081610a25565b92915050565b5f610e48610e4384610df3565b610dd9565b90508083825260208201905060208402830185811115610e6b57610e6a610e1e565b5b835b81811015610e945780610e808882610e22565b845260208401935050602081019050610e6d565b5050509392505050565b5f82601f830112610eb257610eb1610d94565b5b8151610ec2848260208601610e36565b91505092915050565b5f60208284031215610ee057610edf610a14565b5b5f82015167ffffffffffffffff811115610efd57610efc610a18565b5b610f0984828501610e9e565b91505092915050565b5f608082019050610f255f830187610c76565b8181036020830152610f378186610ce0565b9050610f4660408301856109e3565b610f536060830184610b48565b95945050505050565b5f60c082019050610f6f5f8301896109e3565b610f7c6020830188610b48565b610f896040830187610c76565b610f966060830186610c76565b610fa360808301856109e3565b610fb060a0830184610b48565b979650505050505050565b5f805f60608486031215610fd257610fd1610a14565b5b5f610fdf86828701610e22565b9350506020610ff086828701610e22565b925050604061100186828701610e22565b915050925092509256fea264697066735822122060be5e744a87badc00d7fae134e255a7c7721bb63e858c8d61e3e04150edde2264736f6c634300081a0033608060405234801561000f575f80fd5b5060405161173d38038061173d8339818101604052810190610031919061049e565b82828160039081610042919061072a565b508060049081610052919061072a565b50505061007833670de0b6b3a76400008361006d9190610826565b61008060201b60201c565b50505061094f565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036100f0575f6040517fec442f050000000000000000000000000000000000000000000000000000000081526004016100e791906108a6565b60405180910390fd5b6101015f838361010560201b60201c565b5050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610155578060025f82825461014991906108bf565b92505081905550610223565b5f805f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050818110156101de578381836040517fe450d38c0000000000000000000000000000000000000000000000000000000081526004016101d593929190610901565b60405180910390fd5b8181035f808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361026a578060025f82825403925050819055506102b4565b805f808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516103119190610936565b60405180910390a3505050565b5f604051905090565b5f80fd5b5f80fd5b5f80fd5b5f80fd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b61037d82610337565b810181811067ffffffffffffffff8211171561039c5761039b610347565b5b80604052505050565b5f6103ae61031e565b90506103ba8282610374565b919050565b5f67ffffffffffffffff8211156103d9576103d8610347565b5b6103e282610337565b9050602081019050919050565b8281835e5f83830152505050565b5f61040f61040a846103bf565b6103a5565b90508281526020810184848401111561042b5761042a610333565b5b6104368482856103ef565b509392505050565b5f82601f8301126104525761045161032f565b5b81516104628482602086016103fd565b91505092915050565b5f819050919050565b61047d8161046b565b8114610487575f80fd5b50565b5f8151905061049881610474565b92915050565b5f805f606084860312156104b5576104b4610327565b5b5f84015167ffffffffffffffff8111156104d2576104d161032b565b5b6104de8682870161043e565b935050602084015167ffffffffffffffff8111156104ff576104fe61032b565b5b61050b8682870161043e565b925050604061051c8682870161048a565b9150509250925092565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f600282049050600182168061057457607f821691505b60208210810361058757610586610530565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026105e97fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826105ae565b6105f386836105ae565b95508019841693508086168417925050509392505050565b5f819050919050565b5f61062e6106296106248461046b565b61060b565b61046b565b9050919050565b5f819050919050565b61064783610614565b61065b61065382610635565b8484546105ba565b825550505050565b5f90565b61066f610663565b61067a81848461063e565b505050565b5b8181101561069d576106925f82610667565b600181019050610680565b5050565b601f8211156106e2576106b38161058d565b6106bc8461059f565b810160208510156106cb578190505b6106df6106d78561059f565b83018261067f565b50505b505050565b5f82821c905092915050565b5f6107025f19846008026106e7565b1980831691505092915050565b5f61071a83836106f3565b9150826002028217905092915050565b61073382610526565b67ffffffffffffffff81111561074c5761074b610347565b5b610756825461055d565b6107618282856106a1565b5f60209050601f831160018114610792575f8415610780578287015190505b61078a858261070f565b8655506107f1565b601f1984166107a08661058d565b5f5b828110156107c7578489015182556001820191506020850194506020810190506107a2565b868310156107e457848901516107e0601f8916826106f3565b8355505b6001600288020188555050505b505050505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6108308261046b565b915061083b8361046b565b92508282026108498161046b565b915082820484148315176108605761085f6107f9565b5b5092915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61089082610867565b9050919050565b6108a081610886565b82525050565b5f6020820190506108b95f830184610897565b92915050565b5f6108c98261046b565b91506108d48361046b565b92508282019050808211156108ec576108eb6107f9565b5b92915050565b6108fb8161046b565b82525050565b5f6060820190506109145f830186610897565b61092160208301856108f2565b61092e60408301846108f2565b949350505050565b5f6020820190506109495f8301846108f2565b92915050565b610de18061095c5f395ff3fe608060405234801561000f575f80fd5b5060043610610091575f3560e01c8063313ce56711610064578063313ce5671461013157806370a082311461014f57806395d89b411461017f578063a9059cbb1461019d578063dd62ed3e146101cd57610091565b806306fdde0314610095578063095ea7b3146100b357806318160ddd146100e357806323b872dd14610101575b5f80fd5b61009d6101fd565b6040516100aa9190610a5a565b60405180910390f35b6100cd60048036038101906100c89190610b0b565b61028d565b6040516100da9190610b63565b60405180910390f35b6100eb6102af565b6040516100f89190610b8b565b60405180910390f35b61011b60048036038101906101169190610ba4565b6102b8565b6040516101289190610b63565b60405180910390f35b6101396102e6565b6040516101469190610c0f565b60405180910390f35b61016960048036038101906101649190610c28565b6102ee565b6040516101769190610b8b565b60405180910390f35b610187610333565b6040516101949190610a5a565b60405180910390f35b6101b760048036038101906101b29190610b0b565b6103c3565b6040516101c49190610b63565b60405180910390f35b6101e760048036038101906101e29190610c53565b6103e5565b6040516101f49190610b8b565b60405180910390f35b60606003805461020c90610cbe565b80601f016020809104026020016040519081016040528092919081815260200182805461023890610cbe565b80156102835780601f1061025a57610100808354040283529160200191610283565b820191905f5260205f20905b81548152906001019060200180831161026657829003601f168201915b5050505050905090565b5f80610297610467565b90506102a481858561046e565b600191505092915050565b5f600254905090565b5f806102c2610467565b90506102cf858285610480565b6102da858585610512565b60019150509392505050565b5f6012905090565b5f805f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b60606004805461034290610cbe565b80601f016020809104026020016040519081016040528092919081815260200182805461036e90610cbe565b80156103b95780601f10610390576101008083540402835291602001916103b9565b820191905f5260205f20905b81548152906001019060200180831161039c57829003601f168201915b5050505050905090565b5f806103cd610467565b90506103da818585610512565b600191505092915050565b5f60015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905092915050565b5f33905090565b61047b8383836001610602565b505050565b5f61048b84846103e5565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461050c57818110156104fd578281836040517ffb8f41b20000000000000000000000000000000000000000000000000000000081526004016104f493929190610cfd565b60405180910390fd5b61050b84848484035f610602565b5b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610582575f6040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016105799190610d32565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036105f2575f6040517fec442f050000000000000000000000000000000000000000000000000000000081526004016105e99190610d32565b60405180910390fd5b6105fd8383836107d1565b505050565b5f73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610672575f6040517fe602df050000000000000000000000000000000000000000000000000000000081526004016106699190610d32565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036106e2575f6040517f94280d620000000000000000000000000000000000000000000000000000000081526004016106d99190610d32565b60405180910390fd5b8160015f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f208190555080156107cb578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516107c29190610b8b565b60405180910390a35b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610821578060025f8282546108159190610d78565b925050819055506108ef565b5f805f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050818110156108aa578381836040517fe450d38c0000000000000000000000000000000000000000000000000000000081526004016108a193929190610cfd565b60405180910390fd5b8181035f808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610936578060025f8282540392505081905550610980565b805f808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516109dd9190610b8b565b60405180910390a3505050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f610a2c826109ea565b610a3681856109f4565b9350610a46818560208601610a04565b610a4f81610a12565b840191505092915050565b5f6020820190508181035f830152610a728184610a22565b905092915050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f610aa782610a7e565b9050919050565b610ab781610a9d565b8114610ac1575f80fd5b50565b5f81359050610ad281610aae565b92915050565b5f819050919050565b610aea81610ad8565b8114610af4575f80fd5b50565b5f81359050610b0581610ae1565b92915050565b5f8060408385031215610b2157610b20610a7a565b5b5f610b2e85828601610ac4565b9250506020610b3f85828601610af7565b9150509250929050565b5f8115159050919050565b610b5d81610b49565b82525050565b5f602082019050610b765f830184610b54565b92915050565b610b8581610ad8565b82525050565b5f602082019050610b9e5f830184610b7c565b92915050565b5f805f60608486031215610bbb57610bba610a7a565b5b5f610bc886828701610ac4565b9350506020610bd986828701610ac4565b9250506040610bea86828701610af7565b9150509250925092565b5f60ff82169050919050565b610c0981610bf4565b82525050565b5f602082019050610c225f830184610c00565b92915050565b5f60208284031215610c3d57610c3c610a7a565b5b5f610c4a84828501610ac4565b91505092915050565b5f8060408385031215610c6957610c68610a7a565b5b5f610c7685828601610ac4565b9250506020610c8785828601610ac4565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f6002820490506001821680610cd557607f821691505b602082108103610ce857610ce7610c91565b5b50919050565b610cf781610a9d565b82525050565b5f606082019050610d105f830186610cee565b610d1d6020830185610b7c565b610d2a6040830184610b7c565b949350505050565b5f602082019050610d455f830184610cee565b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f610d8282610ad8565b9150610d8d83610ad8565b9250828201905080821115610da557610da4610d4b565b5b9291505056fea2646970667358221220c973a89c4ac0193e6cef557a5294c98c6f0943146a07fb83317d0265273566a064736f6c634300081a0033",
} as const;

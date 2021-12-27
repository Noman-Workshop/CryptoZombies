/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ZombieAttack, ZombieAttackInterface } from "../ZombieAttack";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "zombieId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "dna",
        type: "uint256",
      },
    ],
    name: "NewZombie",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_zombieId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_targetId",
        type: "uint256",
      },
    ],
    name: "attack",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_zombieId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_newDna",
        type: "uint256",
      },
    ],
    name: "changeDna",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_zombieId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_newName",
        type: "string",
      },
    ],
    name: "changeName",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "cooldownTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    name: "createRandomZombie",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "dnaDigits",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_zombieId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_kittyId",
        type: "uint256",
      },
    ],
    name: "feedOnKitty",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "getZombiesByOwner",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_zombieId",
        type: "uint256",
      },
    ],
    name: "levelUp",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "setKittyContractAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
    ],
    name: "setLevelUpFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "zombies",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "dna",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "readyTime",
        type: "uint64",
      },
      {
        internalType: "uint32",
        name: "level",
        type: "uint32",
      },
      {
        internalType: "uint16",
        name: "winCount",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "lossCount",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526010600155600154600a6200001a9190620002c6565b6002556201518060035566038d7ea4c6800060085560006009556046600a553480156200004657600080fd5b50620000676200005b6200006d60201b60201c565b6200007560201b60201c565b62000317565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160011c9050919050565b6000808291508390505b6001851115620001c7578086048111156200019f576200019e62000139565b5b6001851615620001af5780820291505b8081029050620001bf8562000168565b94506200017f565b94509492505050565b600082620001e25760019050620002b5565b81620001f25760009050620002b5565b81600181146200020b576002811462000216576200024c565b6001915050620002b5565b60ff8411156200022b576200022a62000139565b5b8360020a91508482111562000245576200024462000139565b5b50620002b5565b5060208310610133831016604e8410600b8410161715620002865782820a90508381111562000280576200027f62000139565b5b620002b5565b62000295848484600162000175565b92509050818404811115620002af57620002ae62000139565b5b81810290505b9392505050565b6000819050919050565b6000620002d382620002bc565b9150620002e083620002bc565b92506200030f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484620001d0565b905092915050565b61290d80620003276000396000f3fe6080604052600436106100f35760003560e01c8063715018a61161008a578063c39cbef111610059578063c39cbef1146102e6578063ccf670f81461030f578063e1fa763814610338578063f2fde38b14610361576100f3565b8063715018a6146102505780637bff0a01146102675780638da5cb5b14610290578063b319c6b7146102bb576100f3565b80634412e104116100c65780634412e104146101965780635f4623f1146101d35780635faf2880146101fc578063692c662714610225576100f3565b80630ce90ec2146100f857806317a7f4cc146101145780632052465e1461013d5780633ccfd60b1461017f575b600080fd5b610112600480360381019061010d9190611a4d565b61038a565b005b34801561012057600080fd5b5061013b60048036038101906101369190611a7a565b610435565b005b34801561014957600080fd5b50610164600480360381019061015f9190611a4d565b610562565b60405161017696959493929190611bc1565b60405180910390f35b34801561018b57600080fd5b50610194610676565b005b3480156101a257600080fd5b506101bd60048036038101906101b89190611c87565b610748565b6040516101ca9190611d72565b60405180910390f35b3480156101df57600080fd5b506101fa60048036038101906101f59190611c87565b61089b565b005b34801561020857600080fd5b50610223600480360381019061021e9190611a7a565b61095b565b005b34801561023157600080fd5b5061023a610aaf565b6040516102479190611d94565b60405180910390f35b34801561025c57600080fd5b50610265610ab5565b005b34801561027357600080fd5b5061028e60048036038101906102899190611ee4565b610b3d565b005b34801561029c57600080fd5b506102a5610bda565b6040516102b29190611f3c565b60405180910390f35b3480156102c757600080fd5b506102d0610c03565b6040516102dd9190611d94565b60405180910390f35b3480156102f257600080fd5b5061030d60048036038101906103089190611fb7565b610c09565b005b34801561031b57600080fd5b5061033660048036038101906103319190611a4d565b610d69565b005b34801561034457600080fd5b5061035f600480360381019061035a9190611a7a565b610def565b005b34801561036d57600080fd5b5061038860048036038101906103839190611c87565b6110eb565b005b60085434146103ce576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103c590612063565b60405180910390fd5b600481815481106103e2576103e1612083565b5b9060005260206000209060030201600201600881819054906101000a900463ffffffff1680929190610413906120e1565b91906101000a81548163ffffffff021916908363ffffffff1602179055505050565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e98b7f4d836040518263ffffffff1660e01b81526004016104929190611d94565b6101406040518083038186803b1580156104ab57600080fd5b505afa1580156104bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104e3919061215b565b9091929394959697985090919293949596975090919293949596509091929394955090919293945090919293509091925090915090508091505061055d83826040518060400160405280600581526020017f6b697474790000000000000000000000000000000000000000000000000000008152506111e3565b505050565b6004818154811061057257600080fd5b906000526020600020906003020160009150905080600001805461059590612269565b80601f01602080910402602001604051908101604052809291908181526020018280546105c190612269565b801561060e5780601f106105e35761010080835404028352916020019161060e565b820191906000526020600020905b8154815290600101906020018083116105f157829003601f168201915b5050505050908060010154908060020160009054906101000a900467ffffffffffffffff16908060020160089054906101000a900463ffffffff169080600201600c9054906101000a900461ffff169080600201600e9054906101000a900461ffff16905086565b61067e6113ec565b73ffffffffffffffffffffffffffffffffffffffff1661069c610bda565b73ffffffffffffffffffffffffffffffffffffffff16146106f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106e9906122e7565b60405180910390fd5b60006106fc610bda565b90508073ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f19350505050158015610744573d6000803e3d6000fd5b5050565b60606000600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205467ffffffffffffffff8111156107a5576107a4611db9565b5b6040519080825280602002602001820160405280156107d35781602001602082028036833780820191505090505b5090506000805b600480549050811015610890578473ffffffffffffffffffffffffffffffffffffffff166005600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561087d578083838151811061086257610861612083565b5b602002602001018181525050818061087990612307565b9250505b808061088890612307565b9150506107da565b508192505050919050565b6108a36113ec565b73ffffffffffffffffffffffffffffffffffffffff166108c1610bda565b73ffffffffffffffffffffffffffffffffffffffff1614610917576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161090e906122e7565b60405180910390fd5b80600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b601482816004828154811061097357610972612083565b5b906000526020600020906003020160020160089054906101000a900463ffffffff1663ffffffff1610156109dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109d39061239c565b60405180910390fd5b836005600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610a7e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a7590612408565b60405180910390fd5b8360048681548110610a9357610a92612083565b5b9060005260206000209060030201600101819055505050505050565b60015481565b610abd6113ec565b73ffffffffffffffffffffffffffffffffffffffff16610adb610bda565b73ffffffffffffffffffffffffffffffffffffffff1614610b31576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b28906122e7565b60405180910390fd5b610b3b60006113f4565b565b6000600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414610bbf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bb690612474565b60405180910390fd5b6000610bca826114b8565b9050610bd68282611503565b5050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60035481565b6002838160048281548110610c2157610c20612083565b5b906000526020600020906003020160020160089054906101000a900463ffffffff1663ffffffff161015610c8a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c819061239c565b60405180910390fd5b846005600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610d2c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d2390612408565b60405180910390fd5b848460048881548110610d4257610d41612083565b5b90600052602060002090600302016000019190610d609291906118da565b50505050505050565b610d716113ec565b73ffffffffffffffffffffffffffffffffffffffff16610d8f610bda565b73ffffffffffffffffffffffffffffffffffffffff1614610de5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ddc906122e7565b60405180910390fd5b8060088190555050565b816005600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610e91576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e8890612408565b60405180910390fd5b600060048481548110610ea757610ea6612083565b5b90600052602060002090600302019050600060048481548110610ecd57610ecc612083565b5b906000526020600020906003020190506000610ee9606461178d565b9050600a54811161103957610f26610f21600185600201600c9054906101000a900461ffff1661ffff166117ed90919063ffffffff16565b611803565b83600201600c6101000a81548161ffff021916908361ffff160217905550610f7a610f7560018560020160089054906101000a900463ffffffff1663ffffffff166117ed90919063ffffffff16565b611803565b61ffff168360020160086101000a81548163ffffffff021916908363ffffffff160217905550610fd2610fcd600185600201600e9054906101000a900461ffff1661ffff166117ed90919063ffffffff16565b611803565b82600201600e6101000a81548161ffff021916908361ffff1602179055506110348683600101546040518060400160405280600681526020017f7a6f6d62696500000000000000000000000000000000000000000000000000008152506111e3565b6110e3565b61106b611066600185600201600e9054906101000a900461ffff1661ffff166117ed90919063ffffffff16565b611803565b83600201600e6101000a81548161ffff021916908361ffff1602179055506110bb6110b6600184600201600c9054906101000a900461ffff1661ffff166117ed90919063ffffffff16565b611803565b82600201600c6101000a81548161ffff021916908361ffff1602179055506110e283611854565b5b505050505050565b6110f36113ec565b73ffffffffffffffffffffffffffffffffffffffff16611111610bda565b73ffffffffffffffffffffffffffffffffffffffff1614611167576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161115e906122e7565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156111d7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111ce90612506565b60405180910390fd5b6111e0816113f4565b50565b826005600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611285576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161127c90612408565b60405180910390fd5b60006004858154811061129b5761129a612083565b5b906000526020600020906003020190506112b481611895565b6112f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112ea90612572565b60405180910390fd5b6002548461130191906125c1565b93506000600285836001015461131791906125f2565b6113219190612648565b9050604051602001611332906126d0565b60405160208183030381529060405280519060200120846040516020016113599190612716565b60405160208183030381529060405280519060200120141561139c57606360648261138491906125c1565b8261138f919061272d565b61139991906125f2565b90505b6113db6040518060400160405280600681526020017f4e6f4e616d65000000000000000000000000000000000000000000000000000081525082611503565b6113e482611854565b505050505050565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080826040516020016114cc9190612716565b6040516020818303038152906040528051906020012060001c90506000600254826114f791906125c1565b90508092505050919050565b60046040518060c001604052808481526020018381526020016003544261152a91906125f2565b67ffffffffffffffff168152602001600163ffffffff168152602001600061ffff168152602001600061ffff168152509080600181540180825580915050600190039060005260206000209060030201600090919091909150600082015181600001908051906020019061159f929190611960565b506020820151816001015560408201518160020160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060608201518160020160086101000a81548163ffffffff021916908363ffffffff160217905550608082015181600201600c6101000a81548161ffff021916908361ffff16021790555060a082015181600201600e6101000a81548161ffff021916908361ffff1602179055505050600061166360016004805490506118c490919063ffffffff16565b9050336005600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061170a6001600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546117ed90919063ffffffff16565b600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507f88f026aacbbecc90c18411df4b1185fd8d9be2470f1962f192bf84a27d0704b781848460405161178093929190612761565b60405180910390a1505050565b60006117a560016009546117ed90919063ffffffff16565b6009819055508142336009546040516020016117c393929190612808565b6040516020818303038152906040528051906020012060001c6117e691906125c1565b9050919050565b600081836117fb91906125f2565b905092915050565b600061ffff801682111561184c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611843906128b7565b60405180910390fd5b819050919050565b6003544261186291906125f2565b63ffffffff168160020160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555050565b6000428260020160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1611159050919050565b600081836118d2919061272d565b905092915050565b8280546118e690612269565b90600052602060002090601f016020900481019282611908576000855561194f565b82601f1061192157803560ff191683800117855561194f565b8280016001018555821561194f579182015b8281111561194e578235825591602001919060010190611933565b5b50905061195c91906119e6565b5090565b82805461196c90612269565b90600052602060002090601f01602090048101928261198e57600085556119d5565b82601f106119a757805160ff19168380011785556119d5565b828001600101855582156119d5579182015b828111156119d45782518255916020019190600101906119b9565b5b5090506119e291906119e6565b5090565b5b808211156119ff5760008160009055506001016119e7565b5090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b611a2a81611a17565b8114611a3557600080fd5b50565b600081359050611a4781611a21565b92915050565b600060208284031215611a6357611a62611a0d565b5b6000611a7184828501611a38565b91505092915050565b60008060408385031215611a9157611a90611a0d565b5b6000611a9f85828601611a38565b9250506020611ab085828601611a38565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611af4578082015181840152602081019050611ad9565b83811115611b03576000848401525b50505050565b6000601f19601f8301169050919050565b6000611b2582611aba565b611b2f8185611ac5565b9350611b3f818560208601611ad6565b611b4881611b09565b840191505092915050565b611b5c81611a17565b82525050565b600067ffffffffffffffff82169050919050565b611b7f81611b62565b82525050565b600063ffffffff82169050919050565b611b9e81611b85565b82525050565b600061ffff82169050919050565b611bbb81611ba4565b82525050565b600060c0820190508181036000830152611bdb8189611b1a565b9050611bea6020830188611b53565b611bf76040830187611b76565b611c046060830186611b95565b611c116080830185611bb2565b611c1e60a0830184611bb2565b979650505050505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611c5482611c29565b9050919050565b611c6481611c49565b8114611c6f57600080fd5b50565b600081359050611c8181611c5b565b92915050565b600060208284031215611c9d57611c9c611a0d565b5b6000611cab84828501611c72565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b611ce981611a17565b82525050565b6000611cfb8383611ce0565b60208301905092915050565b6000602082019050919050565b6000611d1f82611cb4565b611d298185611cbf565b9350611d3483611cd0565b8060005b83811015611d65578151611d4c8882611cef565b9750611d5783611d07565b925050600181019050611d38565b5085935050505092915050565b60006020820190508181036000830152611d8c8184611d14565b905092915050565b6000602082019050611da96000830184611b53565b92915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611df182611b09565b810181811067ffffffffffffffff82111715611e1057611e0f611db9565b5b80604052505050565b6000611e23611a03565b9050611e2f8282611de8565b919050565b600067ffffffffffffffff821115611e4f57611e4e611db9565b5b611e5882611b09565b9050602081019050919050565b82818337600083830152505050565b6000611e87611e8284611e34565b611e19565b905082815260208101848484011115611ea357611ea2611db4565b5b611eae848285611e65565b509392505050565b600082601f830112611ecb57611eca611daf565b5b8135611edb848260208601611e74565b91505092915050565b600060208284031215611efa57611ef9611a0d565b5b600082013567ffffffffffffffff811115611f1857611f17611a12565b5b611f2484828501611eb6565b91505092915050565b611f3681611c49565b82525050565b6000602082019050611f516000830184611f2d565b92915050565b600080fd5b600080fd5b60008083601f840112611f7757611f76611daf565b5b8235905067ffffffffffffffff811115611f9457611f93611f57565b5b602083019150836001820283011115611fb057611faf611f5c565b5b9250929050565b600080600060408486031215611fd057611fcf611a0d565b5b6000611fde86828701611a38565b935050602084013567ffffffffffffffff811115611fff57611ffe611a12565b5b61200b86828701611f61565b92509250509250925092565b7f63616e2774206c6576656c20757020776974686f757420657468000000000000600082015250565b600061204d601a83611ac5565b915061205882612017565b602082019050919050565b6000602082019050818103600083015261207c81612040565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006120ec82611b85565b915063ffffffff821415612103576121026120b2565b5b600182019050919050565b60008115159050919050565b6121238161210e565b811461212e57600080fd5b50565b6000815190506121408161211a565b92915050565b60008151905061215581611a21565b92915050565b6000806000806000806000806000806101408b8d03121561217f5761217e611a0d565b5b600061218d8d828e01612131565b9a5050602061219e8d828e01612131565b99505060406121af8d828e01612146565b98505060606121c08d828e01612146565b97505060806121d18d828e01612146565b96505060a06121e28d828e01612146565b95505060c06121f38d828e01612146565b94505060e06122048d828e01612146565b9350506101006122168d828e01612146565b9250506101206122288d828e01612146565b9150509295989b9194979a5092959850565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061228157607f821691505b602082108114156122955761229461223a565b5b50919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006122d1602083611ac5565b91506122dc8261229b565b602082019050919050565b60006020820190508181036000830152612300816122c4565b9050919050565b600061231282611a17565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612345576123446120b2565b5b600182019050919050565b7f7a6f6d6269652069736e277420706f77657266756c20656e6f75676800000000600082015250565b6000612386601c83611ac5565b915061239182612350565b602082019050919050565b600060208201905081810360008301526123b581612379565b9050919050565b7f756e617574686f72697a6564206f7065726174696f6e00000000000000000000600082015250565b60006123f2601683611ac5565b91506123fd826123bc565b602082019050919050565b60006020820190508181036000830152612421816123e5565b9050919050565b7f63616e277420637265617465206f6e65206f726967696e616c207a6f6d626965600082015250565b600061245e602083611ac5565b915061246982612428565b602082019050919050565b6000602082019050818103600083015261248d81612451565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006124f0602683611ac5565b91506124fb82612494565b604082019050919050565b6000602082019050818103600083015261251f816124e3565b9050919050565b7f7a6f6d62696520697320696e20636f6f6c646f776e0000000000000000000000600082015250565b600061255c601583611ac5565b915061256782612526565b602082019050919050565b6000602082019050818103600083015261258b8161254f565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006125cc82611a17565b91506125d783611a17565b9250826125e7576125e6612592565b5b828206905092915050565b60006125fd82611a17565b915061260883611a17565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561263d5761263c6120b2565b5b828201905092915050565b600061265382611a17565b915061265e83611a17565b92508261266e5761266d612592565b5b828204905092915050565b600081905092915050565b7f6b69747479000000000000000000000000000000000000000000000000000000600082015250565b60006126ba600583612679565b91506126c582612684565b600582019050919050565b60006126db826126ad565b9150819050919050565b60006126f082611aba565b6126fa8185612679565b935061270a818560208601611ad6565b80840191505092915050565b600061272282846126e5565b915081905092915050565b600061273882611a17565b915061274383611a17565b925082821015612756576127556120b2565b5b828203905092915050565b60006060820190506127766000830186611b53565b81810360208301526127888185611b1a565b90506127976040830184611b53565b949350505050565b6000819050919050565b6127ba6127b582611a17565b61279f565b82525050565b60008160601b9050919050565b60006127d8826127c0565b9050919050565b60006127ea826127cd565b9050919050565b6128026127fd82611c49565b6127df565b82525050565b600061281482866127a9565b60208201915061282482856127f1565b60148201915061283482846127a9565b602082019150819050949350505050565b7f53616665436173743a2076616c756520646f65736e27742066697420696e203160008201527f3620626974730000000000000000000000000000000000000000000000000000602082015250565b60006128a1602683611ac5565b91506128ac82612845565b604082019050919050565b600060208201905081810360008301526128d081612894565b905091905056fea26469706673582212208ffc9c5e68252b8b11fbea50a9924f02e27f28470a91e9bf0f47c88a2df04a5d64736f6c63430008090033";

type ZombieAttackConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ZombieAttackConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ZombieAttack__factory extends ContractFactory {
  constructor(...args: ZombieAttackConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ZombieAttack> {
    return super.deploy(overrides || {}) as Promise<ZombieAttack>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ZombieAttack {
    return super.attach(address) as ZombieAttack;
  }
  connect(signer: Signer): ZombieAttack__factory {
    return super.connect(signer) as ZombieAttack__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ZombieAttackInterface {
    return new utils.Interface(_abi) as ZombieAttackInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ZombieAttack {
    return new Contract(address, _abi, signerOrProvider) as ZombieAttack;
  }
}

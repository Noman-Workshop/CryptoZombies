/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ZombieHelper, ZombieHelperInterface } from "../ZombieHelper";

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
  "0x60806040526010600155600154600a6200001a9190620002bc565b6002556201518060035566038d7ea4c680006008553480156200003c57600080fd5b506200005d620000516200006360201b60201c565b6200006b60201b60201c565b6200030d565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160011c9050919050565b6000808291508390505b6001851115620001bd578086048111156200019557620001946200012f565b5b6001851615620001a55780820291505b8081029050620001b5856200015e565b945062000175565b94509492505050565b600082620001d85760019050620002ab565b81620001e85760009050620002ab565b81600181146200020157600281146200020c5762000242565b6001915050620002ab565b60ff8411156200022157620002206200012f565b5b8360020a9150848211156200023b576200023a6200012f565b5b50620002ab565b5060208310610133831016604e8410600b84101617156200027c5782820a9050838111156200027657620002756200012f565b5b620002ab565b6200028b84848460016200016b565b92509050818404811115620002a557620002a46200012f565b5b81810290505b9392505050565b6000819050919050565b6000620002c982620002b2565b9150620002d683620002b2565b9250620003057fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484620001c6565b905092915050565b6123f4806200031d6000396000f3fe6080604052600436106100e85760003560e01c8063692c66271161008a578063b319c6b711610059578063b319c6b7146102b0578063c39cbef1146102db578063ccf670f814610304578063f2fde38b1461032d576100e8565b8063692c66271461021a578063715018a6146102455780637bff0a011461025c5780638da5cb5b14610285576100e8565b80633ccfd60b116100c65780633ccfd60b146101745780634412e1041461018b5780635f4623f1146101c85780635faf2880146101f1576100e8565b80630ce90ec2146100ed57806317a7f4cc146101095780632052465e14610132575b600080fd5b6101076004803603810190610102919061166c565b610356565b005b34801561011557600080fd5b50610130600480360381019061012b9190611699565b610401565b005b34801561013e57600080fd5b506101596004803603810190610154919061166c565b61052e565b60405161016b969594939291906117e0565b60405180910390f35b34801561018057600080fd5b50610189610642565b005b34801561019757600080fd5b506101b260048036038101906101ad91906118a6565b610714565b6040516101bf9190611991565b60405180910390f35b3480156101d457600080fd5b506101ef60048036038101906101ea91906118a6565b610867565b005b3480156101fd57600080fd5b5061021860048036038101906102139190611699565b610927565b005b34801561022657600080fd5b5061022f610a7b565b60405161023c91906119b3565b60405180910390f35b34801561025157600080fd5b5061025a610a81565b005b34801561026857600080fd5b50610283600480360381019061027e9190611b03565b610b09565b005b34801561029157600080fd5b5061029a610ba6565b6040516102a79190611b5b565b60405180910390f35b3480156102bc57600080fd5b506102c5610bcf565b6040516102d291906119b3565b60405180910390f35b3480156102e757600080fd5b5061030260048036038101906102fd9190611bd6565b610bd5565b005b34801561031057600080fd5b5061032b6004803603810190610326919061166c565b610d35565b005b34801561033957600080fd5b50610354600480360381019061034f91906118a6565b610dbb565b005b600854341461039a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161039190611c82565b60405180910390fd5b600481815481106103ae576103ad611ca2565b5b9060005260206000209060030201600201600881819054906101000a900463ffffffff16809291906103df90611d00565b91906101000a81548163ffffffff021916908363ffffffff1602179055505050565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e98b7f4d836040518263ffffffff1660e01b815260040161045e91906119b3565b6101406040518083038186803b15801561047757600080fd5b505afa15801561048b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104af9190611d7a565b9091929394959697985090919293949596975090919293949596509091929394955090919293945090919293509091925090915090508091505061052983826040518060400160405280600581526020017f6b69747479000000000000000000000000000000000000000000000000000000815250610eb3565b505050565b6004818154811061053e57600080fd5b906000526020600020906003020160009150905080600001805461056190611e88565b80601f016020809104026020016040519081016040528092919081815260200182805461058d90611e88565b80156105da5780601f106105af576101008083540402835291602001916105da565b820191906000526020600020905b8154815290600101906020018083116105bd57829003601f168201915b5050505050908060010154908060020160009054906101000a900467ffffffffffffffff16908060020160089054906101000a900463ffffffff169080600201600c9054906101000a900461ffff169080600201600e9054906101000a900461ffff16905086565b61064a6110bc565b73ffffffffffffffffffffffffffffffffffffffff16610668610ba6565b73ffffffffffffffffffffffffffffffffffffffff16146106be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106b590611f06565b60405180910390fd5b60006106c8610ba6565b90508073ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f19350505050158015610710573d6000803e3d6000fd5b5050565b60606000600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205467ffffffffffffffff811115610771576107706119d8565b5b60405190808252806020026020018201604052801561079f5781602001602082028036833780820191505090505b5090506000805b60048054905081101561085c578473ffffffffffffffffffffffffffffffffffffffff166005600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610849578083838151811061082e5761082d611ca2565b5b602002602001018181525050818061084590611f26565b9250505b808061085490611f26565b9150506107a6565b508192505050919050565b61086f6110bc565b73ffffffffffffffffffffffffffffffffffffffff1661088d610ba6565b73ffffffffffffffffffffffffffffffffffffffff16146108e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108da90611f06565b60405180910390fd5b80600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b601482816004828154811061093f5761093e611ca2565b5b906000526020600020906003020160020160089054906101000a900463ffffffff1663ffffffff1610156109a8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161099f90611fbb565b60405180910390fd5b836005600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610a4a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a4190612027565b60405180910390fd5b8360048681548110610a5f57610a5e611ca2565b5b9060005260206000209060030201600101819055505050505050565b60015481565b610a896110bc565b73ffffffffffffffffffffffffffffffffffffffff16610aa7610ba6565b73ffffffffffffffffffffffffffffffffffffffff1614610afd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610af490611f06565b60405180910390fd5b610b0760006110c4565b565b6000600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414610b8b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b8290612093565b60405180910390fd5b6000610b9682611188565b9050610ba282826111d3565b5050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60035481565b6002838160048281548110610bed57610bec611ca2565b5b906000526020600020906003020160020160089054906101000a900463ffffffff1663ffffffff161015610c56576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c4d90611fbb565b60405180910390fd5b846005600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610cf8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cef90612027565b60405180910390fd5b848460048881548110610d0e57610d0d611ca2565b5b90600052602060002090600302016000019190610d2c9291906114f9565b50505050505050565b610d3d6110bc565b73ffffffffffffffffffffffffffffffffffffffff16610d5b610ba6565b73ffffffffffffffffffffffffffffffffffffffff1614610db1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610da890611f06565b60405180910390fd5b8060088190555050565b610dc36110bc565b73ffffffffffffffffffffffffffffffffffffffff16610de1610ba6565b73ffffffffffffffffffffffffffffffffffffffff1614610e37576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e2e90611f06565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610ea7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e9e90612125565b60405180910390fd5b610eb0816110c4565b50565b826005600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610f55576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f4c90612027565b60405180910390fd5b600060048581548110610f6b57610f6a611ca2565b5b90600052602060002090600302019050610f848161145d565b610fc3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fba90612191565b60405180910390fd5b60025484610fd191906121e0565b935060006002858360010154610fe79190612211565b610ff19190612267565b9050604051602001611002906122ef565b60405160208183030381529060405280519060200120846040516020016110299190612335565b60405160208183030381529060405280519060200120141561106c57606360648261105491906121e0565b8261105f919061234c565b6110699190612211565b90505b6110ab6040518060400160405280600681526020017f4e6f4e616d650000000000000000000000000000000000000000000000000000815250826111d3565b6110b48261148c565b505050505050565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000808260405160200161119c9190612335565b6040516020818303038152906040528051906020012060001c90506000600254826111c791906121e0565b90508092505050919050565b60046040518060c00160405280848152602001838152602001600354426111fa9190612211565b67ffffffffffffffff168152602001600163ffffffff168152602001600061ffff168152602001600061ffff168152509080600181540180825580915050600190039060005260206000209060030201600090919091909150600082015181600001908051906020019061126f92919061157f565b506020820151816001015560408201518160020160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060608201518160020160086101000a81548163ffffffff021916908363ffffffff160217905550608082015181600201600c6101000a81548161ffff021916908361ffff16021790555060a082015181600201600e6101000a81548161ffff021916908361ffff1602179055505050600061133360016004805490506114cd90919063ffffffff16565b9050336005600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506113da6001600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546114e390919063ffffffff16565b600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507f88f026aacbbecc90c18411df4b1185fd8d9be2470f1962f192bf84a27d0704b781848460405161145093929190612380565b60405180910390a1505050565b6000428260020160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1611159050919050565b6003544261149a9190612211565b63ffffffff168160020160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555050565b600081836114db919061234c565b905092915050565b600081836114f19190612211565b905092915050565b82805461150590611e88565b90600052602060002090601f016020900481019282611527576000855561156e565b82601f1061154057803560ff191683800117855561156e565b8280016001018555821561156e579182015b8281111561156d578235825591602001919060010190611552565b5b50905061157b9190611605565b5090565b82805461158b90611e88565b90600052602060002090601f0160209004810192826115ad57600085556115f4565b82601f106115c657805160ff19168380011785556115f4565b828001600101855582156115f4579182015b828111156115f35782518255916020019190600101906115d8565b5b5090506116019190611605565b5090565b5b8082111561161e576000816000905550600101611606565b5090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b61164981611636565b811461165457600080fd5b50565b60008135905061166681611640565b92915050565b6000602082840312156116825761168161162c565b5b600061169084828501611657565b91505092915050565b600080604083850312156116b0576116af61162c565b5b60006116be85828601611657565b92505060206116cf85828601611657565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b60005b838110156117135780820151818401526020810190506116f8565b83811115611722576000848401525b50505050565b6000601f19601f8301169050919050565b6000611744826116d9565b61174e81856116e4565b935061175e8185602086016116f5565b61176781611728565b840191505092915050565b61177b81611636565b82525050565b600067ffffffffffffffff82169050919050565b61179e81611781565b82525050565b600063ffffffff82169050919050565b6117bd816117a4565b82525050565b600061ffff82169050919050565b6117da816117c3565b82525050565b600060c08201905081810360008301526117fa8189611739565b90506118096020830188611772565b6118166040830187611795565b61182360608301866117b4565b61183060808301856117d1565b61183d60a08301846117d1565b979650505050505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061187382611848565b9050919050565b61188381611868565b811461188e57600080fd5b50565b6000813590506118a08161187a565b92915050565b6000602082840312156118bc576118bb61162c565b5b60006118ca84828501611891565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61190881611636565b82525050565b600061191a83836118ff565b60208301905092915050565b6000602082019050919050565b600061193e826118d3565b61194881856118de565b9350611953836118ef565b8060005b8381101561198457815161196b888261190e565b975061197683611926565b925050600181019050611957565b5085935050505092915050565b600060208201905081810360008301526119ab8184611933565b905092915050565b60006020820190506119c86000830184611772565b92915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611a1082611728565b810181811067ffffffffffffffff82111715611a2f57611a2e6119d8565b5b80604052505050565b6000611a42611622565b9050611a4e8282611a07565b919050565b600067ffffffffffffffff821115611a6e57611a6d6119d8565b5b611a7782611728565b9050602081019050919050565b82818337600083830152505050565b6000611aa6611aa184611a53565b611a38565b905082815260208101848484011115611ac257611ac16119d3565b5b611acd848285611a84565b509392505050565b600082601f830112611aea57611ae96119ce565b5b8135611afa848260208601611a93565b91505092915050565b600060208284031215611b1957611b1861162c565b5b600082013567ffffffffffffffff811115611b3757611b36611631565b5b611b4384828501611ad5565b91505092915050565b611b5581611868565b82525050565b6000602082019050611b706000830184611b4c565b92915050565b600080fd5b600080fd5b60008083601f840112611b9657611b956119ce565b5b8235905067ffffffffffffffff811115611bb357611bb2611b76565b5b602083019150836001820283011115611bcf57611bce611b7b565b5b9250929050565b600080600060408486031215611bef57611bee61162c565b5b6000611bfd86828701611657565b935050602084013567ffffffffffffffff811115611c1e57611c1d611631565b5b611c2a86828701611b80565b92509250509250925092565b7f63616e2774206c6576656c20757020776974686f757420657468000000000000600082015250565b6000611c6c601a836116e4565b9150611c7782611c36565b602082019050919050565b60006020820190508181036000830152611c9b81611c5f565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611d0b826117a4565b915063ffffffff821415611d2257611d21611cd1565b5b600182019050919050565b60008115159050919050565b611d4281611d2d565b8114611d4d57600080fd5b50565b600081519050611d5f81611d39565b92915050565b600081519050611d7481611640565b92915050565b6000806000806000806000806000806101408b8d031215611d9e57611d9d61162c565b5b6000611dac8d828e01611d50565b9a50506020611dbd8d828e01611d50565b9950506040611dce8d828e01611d65565b9850506060611ddf8d828e01611d65565b9750506080611df08d828e01611d65565b96505060a0611e018d828e01611d65565b95505060c0611e128d828e01611d65565b94505060e0611e238d828e01611d65565b935050610100611e358d828e01611d65565b925050610120611e478d828e01611d65565b9150509295989b9194979a5092959850565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611ea057607f821691505b60208210811415611eb457611eb3611e59565b5b50919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000611ef06020836116e4565b9150611efb82611eba565b602082019050919050565b60006020820190508181036000830152611f1f81611ee3565b9050919050565b6000611f3182611636565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611f6457611f63611cd1565b5b600182019050919050565b7f7a6f6d6269652069736e277420706f77657266756c20656e6f75676800000000600082015250565b6000611fa5601c836116e4565b9150611fb082611f6f565b602082019050919050565b60006020820190508181036000830152611fd481611f98565b9050919050565b7f756e617574686f72697a6564206f7065726174696f6e00000000000000000000600082015250565b60006120116016836116e4565b915061201c82611fdb565b602082019050919050565b6000602082019050818103600083015261204081612004565b9050919050565b7f63616e277420637265617465206f6e65206f726967696e616c207a6f6d626965600082015250565b600061207d6020836116e4565b915061208882612047565b602082019050919050565b600060208201905081810360008301526120ac81612070565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600061210f6026836116e4565b915061211a826120b3565b604082019050919050565b6000602082019050818103600083015261213e81612102565b9050919050565b7f7a6f6d62696520697320696e20636f6f6c646f776e0000000000000000000000600082015250565b600061217b6015836116e4565b915061218682612145565b602082019050919050565b600060208201905081810360008301526121aa8161216e565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006121eb82611636565b91506121f683611636565b925082612206576122056121b1565b5b828206905092915050565b600061221c82611636565b915061222783611636565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561225c5761225b611cd1565b5b828201905092915050565b600061227282611636565b915061227d83611636565b92508261228d5761228c6121b1565b5b828204905092915050565b600081905092915050565b7f6b69747479000000000000000000000000000000000000000000000000000000600082015250565b60006122d9600583612298565b91506122e4826122a3565b600582019050919050565b60006122fa826122cc565b9150819050919050565b600061230f826116d9565b6123198185612298565b93506123298185602086016116f5565b80840191505092915050565b60006123418284612304565b915081905092915050565b600061235782611636565b915061236283611636565b92508282101561237557612374611cd1565b5b828203905092915050565b60006060820190506123956000830186611772565b81810360208301526123a78185611739565b90506123b66040830184611772565b94935050505056fea264697066735822122084caf9879bcb189fa3a27f66e5935d7b444ee2e5ac350c473954d210ad20caa464736f6c63430008090033";

type ZombieHelperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ZombieHelperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ZombieHelper__factory extends ContractFactory {
  constructor(...args: ZombieHelperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ZombieHelper> {
    return super.deploy(overrides || {}) as Promise<ZombieHelper>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ZombieHelper {
    return super.attach(address) as ZombieHelper;
  }
  connect(signer: Signer): ZombieHelper__factory {
    return super.connect(signer) as ZombieHelper__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ZombieHelperInterface {
    return new utils.Interface(_abi) as ZombieHelperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ZombieHelper {
    return new Contract(address, _abi, signerOrProvider) as ZombieHelper;
  }
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ZombieFactory, ZombieFactoryInterface } from "../ZombieFactory";

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
  "0x60806040526010600155600154600a6200001a9190620002b1565b600255620151806003553480156200003157600080fd5b5062000052620000466200005860201b60201c565b6200006060201b60201c565b62000302565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160011c9050919050565b6000808291508390505b6001851115620001b2578086048111156200018a576200018962000124565b5b60018516156200019a5780820291505b8081029050620001aa8562000153565b94506200016a565b94509492505050565b600082620001cd5760019050620002a0565b81620001dd5760009050620002a0565b8160018114620001f65760028114620002015762000237565b6001915050620002a0565b60ff84111562000216576200021562000124565b5b8360020a91508482111562000230576200022f62000124565b5b50620002a0565b5060208310610133831016604e8410600b8410161715620002715782820a9050838111156200026b576200026a62000124565b5b620002a0565b62000280848484600162000160565b925090508184048111156200029a576200029962000124565b5b81810290505b9392505050565b6000819050919050565b6000620002be82620002a7565b9150620002cb83620002a7565b9250620002fa7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484620001bb565b905092915050565b61110880620003126000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80637bff0a011161005b5780637bff0a01146100df5780638da5cb5b146100fb578063b319c6b714610119578063f2fde38b146101375761007d565b80632052465e14610082578063692c6627146100b7578063715018a6146100d5575b600080fd5b61009c60048036038101906100979190610973565b610153565b6040516100ae96959493929190610aa7565b60405180910390f35b6100bf610267565b6040516100cc9190610b0f565b60405180910390f35b6100dd61026d565b005b6100f960048036038101906100f49190610c5f565b6102f5565b005b610103610392565b6040516101109190610ce9565b60405180910390f35b6101216103bb565b60405161012e9190610b0f565b60405180910390f35b610151600480360381019061014c9190610d30565b6103c1565b005b6004818154811061016357600080fd5b906000526020600020906003020160009150905080600001805461018690610d8c565b80601f01602080910402602001604051908101604052809291908181526020018280546101b290610d8c565b80156101ff5780601f106101d4576101008083540402835291602001916101ff565b820191906000526020600020905b8154815290600101906020018083116101e257829003601f168201915b5050505050908060010154908060020160009054906101000a900467ffffffffffffffff16908060020160089054906101000a900463ffffffff169080600201600c9054906101000a900461ffff169080600201600e9054906101000a900461ffff16905086565b60015481565b6102756104b9565b73ffffffffffffffffffffffffffffffffffffffff16610293610392565b73ffffffffffffffffffffffffffffffffffffffff16146102e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102e090610e0a565b60405180910390fd5b6102f360006104c1565b565b6000600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414610377576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161036e90610e76565b60405180910390fd5b600061038282610585565b905061038e82826105d0565b5050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60035481565b6103c96104b9565b73ffffffffffffffffffffffffffffffffffffffff166103e7610392565b73ffffffffffffffffffffffffffffffffffffffff161461043d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161043490610e0a565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156104ad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104a490610f08565b60405180910390fd5b6104b6816104c1565b50565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080826040516020016105999190610f64565b6040516020818303038152906040528051906020012060001c90506000600254826105c49190610faa565b90508092505050919050565b60046040518060c00160405280848152602001838152602001600354426105f7919061100a565b67ffffffffffffffff168152602001600163ffffffff168152602001600061ffff168152602001600061ffff168152509080600181540180825580915050600190039060005260206000209060030201600090919091909150600082015181600001908051906020019061066c929190610886565b506020820151816001015560408201518160020160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060608201518160020160086101000a81548163ffffffff021916908363ffffffff160217905550608082015181600201600c6101000a81548161ffff021916908361ffff16021790555060a082015181600201600e6101000a81548161ffff021916908361ffff16021790555050506000610730600160048054905061085a90919063ffffffff16565b9050336005600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506107d76001600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461087090919063ffffffff16565b600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507f88f026aacbbecc90c18411df4b1185fd8d9be2470f1962f192bf84a27d0704b781848460405161084d93929190611060565b60405180910390a1505050565b60008183610868919061109e565b905092915050565b6000818361087e919061100a565b905092915050565b82805461089290610d8c565b90600052602060002090601f0160209004810192826108b457600085556108fb565b82601f106108cd57805160ff19168380011785556108fb565b828001600101855582156108fb579182015b828111156108fa5782518255916020019190600101906108df565b5b509050610908919061090c565b5090565b5b8082111561092557600081600090555060010161090d565b5090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b6109508161093d565b811461095b57600080fd5b50565b60008135905061096d81610947565b92915050565b60006020828403121561098957610988610933565b5b60006109978482850161095e565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156109da5780820151818401526020810190506109bf565b838111156109e9576000848401525b50505050565b6000601f19601f8301169050919050565b6000610a0b826109a0565b610a1581856109ab565b9350610a258185602086016109bc565b610a2e816109ef565b840191505092915050565b610a428161093d565b82525050565b600067ffffffffffffffff82169050919050565b610a6581610a48565b82525050565b600063ffffffff82169050919050565b610a8481610a6b565b82525050565b600061ffff82169050919050565b610aa181610a8a565b82525050565b600060c0820190508181036000830152610ac18189610a00565b9050610ad06020830188610a39565b610add6040830187610a5c565b610aea6060830186610a7b565b610af76080830185610a98565b610b0460a0830184610a98565b979650505050505050565b6000602082019050610b246000830184610a39565b92915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610b6c826109ef565b810181811067ffffffffffffffff82111715610b8b57610b8a610b34565b5b80604052505050565b6000610b9e610929565b9050610baa8282610b63565b919050565b600067ffffffffffffffff821115610bca57610bc9610b34565b5b610bd3826109ef565b9050602081019050919050565b82818337600083830152505050565b6000610c02610bfd84610baf565b610b94565b905082815260208101848484011115610c1e57610c1d610b2f565b5b610c29848285610be0565b509392505050565b600082601f830112610c4657610c45610b2a565b5b8135610c56848260208601610bef565b91505092915050565b600060208284031215610c7557610c74610933565b5b600082013567ffffffffffffffff811115610c9357610c92610938565b5b610c9f84828501610c31565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610cd382610ca8565b9050919050565b610ce381610cc8565b82525050565b6000602082019050610cfe6000830184610cda565b92915050565b610d0d81610cc8565b8114610d1857600080fd5b50565b600081359050610d2a81610d04565b92915050565b600060208284031215610d4657610d45610933565b5b6000610d5484828501610d1b565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610da457607f821691505b60208210811415610db857610db7610d5d565b5b50919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000610df46020836109ab565b9150610dff82610dbe565b602082019050919050565b60006020820190508181036000830152610e2381610de7565b9050919050565b7f63616e277420637265617465206f6e65206f726967696e616c207a6f6d626965600082015250565b6000610e606020836109ab565b9150610e6b82610e2a565b602082019050919050565b60006020820190508181036000830152610e8f81610e53565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000610ef26026836109ab565b9150610efd82610e96565b604082019050919050565b60006020820190508181036000830152610f2181610ee5565b9050919050565b600081905092915050565b6000610f3e826109a0565b610f488185610f28565b9350610f588185602086016109bc565b80840191505092915050565b6000610f708284610f33565b915081905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610fb58261093d565b9150610fc08361093d565b925082610fd057610fcf610f7b565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006110158261093d565b91506110208361093d565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561105557611054610fdb565b5b828201905092915050565b60006060820190506110756000830186610a39565b81810360208301526110878185610a00565b90506110966040830184610a39565b949350505050565b60006110a98261093d565b91506110b48361093d565b9250828210156110c7576110c6610fdb565b5b82820390509291505056fea264697066735822122062a2061e5748bfd47d1fa175df654be51bbf4d4e89addb88c3e02cc4a04eeb8164736f6c63430008090033";

type ZombieFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ZombieFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ZombieFactory__factory extends ContractFactory {
  constructor(...args: ZombieFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ZombieFactory> {
    return super.deploy(overrides || {}) as Promise<ZombieFactory>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ZombieFactory {
    return super.attach(address) as ZombieFactory;
  }
  connect(signer: Signer): ZombieFactory__factory {
    return super.connect(signer) as ZombieFactory__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ZombieFactoryInterface {
    return new utils.Interface(_abi) as ZombieFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ZombieFactory {
    return new Contract(address, _abi, signerOrProvider) as ZombieFactory;
  }
}
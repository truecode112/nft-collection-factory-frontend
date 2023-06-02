/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC721, ERC721Interface } from "../ERC721";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620027a6380380620027a68339818101604052810190620000379190620002be565b81600090805190602001906200004f92919062000071565b5080600190805190602001906200006892919062000071565b505050620003a8565b8280546200007f9062000372565b90600052602060002090601f016020900481019282620000a35760008555620000ef565b82601f10620000be57805160ff1916838001178555620000ef565b82800160010185558215620000ef579182015b82811115620000ee578251825591602001919060010190620000d1565b5b509050620000fe919062000102565b5090565b5b808211156200011d57600081600090555060010162000103565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200018a826200013f565b810181811067ffffffffffffffff82111715620001ac57620001ab62000150565b5b80604052505050565b6000620001c162000121565b9050620001cf82826200017f565b919050565b600067ffffffffffffffff821115620001f257620001f162000150565b5b620001fd826200013f565b9050602081019050919050565b60005b838110156200022a5780820151818401526020810190506200020d565b838111156200023a576000848401525b50505050565b6000620002576200025184620001d4565b620001b5565b9050828152602081018484840111156200027657620002756200013a565b5b620002838482856200020a565b509392505050565b600082601f830112620002a357620002a262000135565b5b8151620002b584826020860162000240565b91505092915050565b60008060408385031215620002d857620002d76200012b565b5b600083015167ffffffffffffffff811115620002f957620002f862000130565b5b62000307858286016200028b565b925050602083015167ffffffffffffffff8111156200032b576200032a62000130565b5b62000339858286016200028b565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200038b57607f821691505b60208210811415620003a257620003a162000343565b5b50919050565b6123ee80620003b86000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb46514610224578063b88d4fde14610240578063c87b56dd1461025c578063e985e9c51461028c576100cf565b80636352211e146101a657806370a08231146101d657806395d89b4114610206576100cf565b806301ffc9a7146100d457806306fdde0314610104578063081812fc14610122578063095ea7b31461015257806323b872dd1461016e57806342842e0e1461018a575b600080fd5b6100ee60048036038101906100e99190611449565b6102bc565b6040516100fb9190611491565b60405180910390f35b61010c61039e565b6040516101199190611545565b60405180910390f35b61013c6004803603810190610137919061159d565b610430565b604051610149919061160b565b60405180910390f35b61016c60048036038101906101679190611652565b6104b5565b005b61018860048036038101906101839190611692565b6105cd565b005b6101a4600480360381019061019f9190611692565b61062d565b005b6101c060048036038101906101bb919061159d565b61064d565b6040516101cd919061160b565b60405180910390f35b6101f060048036038101906101eb91906116e5565b6106ff565b6040516101fd9190611721565b60405180910390f35b61020e6107b7565b60405161021b9190611545565b60405180910390f35b61023e60048036038101906102399190611768565b610849565b005b61025a600480360381019061025591906118dd565b61085f565b005b6102766004803603810190610271919061159d565b6108c1565b6040516102839190611545565b60405180910390f35b6102a660048036038101906102a19190611960565b610968565b6040516102b39190611491565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061038757507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806103975750610396826109fc565b5b9050919050565b6060600080546103ad906119cf565b80601f01602080910402602001604051908101604052809291908181526020018280546103d9906119cf565b80156104265780601f106103fb57610100808354040283529160200191610426565b820191906000526020600020905b81548152906001019060200180831161040957829003601f168201915b5050505050905090565b600061043b82610a66565b61047a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047190611a73565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006104c08261064d565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610531576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052890611b05565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610550610ad2565b73ffffffffffffffffffffffffffffffffffffffff16148061057f575061057e81610579610ad2565b610968565b5b6105be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105b590611b97565b60405180910390fd5b6105c88383610ada565b505050565b6105de6105d8610ad2565b82610b93565b61061d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161061490611c29565b60405180910390fd5b610628838383610c71565b505050565b6106488383836040518060200160405280600081525061085f565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156106f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ed90611cbb565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610770576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161076790611d4d565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600180546107c6906119cf565b80601f01602080910402602001604051908101604052809291908181526020018280546107f2906119cf565b801561083f5780601f106108145761010080835404028352916020019161083f565b820191906000526020600020905b81548152906001019060200180831161082257829003601f168201915b5050505050905090565b61085b610854610ad2565b8383610ed8565b5050565b61087061086a610ad2565b83610b93565b6108af576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108a690611c29565b60405180910390fd5b6108bb84848484611045565b50505050565b60606108cc82610a66565b61090b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161090290611ddf565b60405180910390fd5b60006109156110a1565b905060008151116109355760405180602001604052806000815250610960565b8061093f846110b8565b604051602001610950929190611e3b565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610b4d8361064d565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610b9e82610a66565b610bdd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bd490611ed1565b60405180910390fd5b6000610be88361064d565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610c2a5750610c298185610968565b5b80610c6857508373ffffffffffffffffffffffffffffffffffffffff16610c5084610430565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610c918261064d565b73ffffffffffffffffffffffffffffffffffffffff1614610ce7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cde90611f63565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d57576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d4e90611ff5565b60405180910390fd5b610d62838383611219565b610d6d600082610ada565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610dbd9190612044565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610e149190612078565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4610ed383838361121e565b505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610f47576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f3e9061211a565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516110389190611491565b60405180910390a3505050565b611050848484610c71565b61105c84848484611223565b61109b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611092906121ac565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b60606000821415611100576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611214565b600082905060005b6000821461113257808061111b906121cc565b915050600a8261112b9190612244565b9150611108565b60008167ffffffffffffffff81111561114e5761114d6117b2565b5b6040519080825280601f01601f1916602001820160405280156111805781602001600182028036833780820191505090505b5090505b6000851461120d576001826111999190612044565b9150600a856111a89190612275565b60306111b49190612078565b60f81b8183815181106111ca576111c96122a6565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856112069190612244565b9450611184565b8093505050505b919050565b505050565b505050565b60006112448473ffffffffffffffffffffffffffffffffffffffff166113ba565b156113ad578373ffffffffffffffffffffffffffffffffffffffff1663150b7a0261126d610ad2565b8786866040518563ffffffff1660e01b815260040161128f949392919061232a565b602060405180830381600087803b1580156112a957600080fd5b505af19250505080156112da57506040513d601f19601f820116820180604052508101906112d7919061238b565b60015b61135d573d806000811461130a576040519150601f19603f3d011682016040523d82523d6000602084013e61130f565b606091505b50600081511415611355576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161134c906121ac565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506113b2565b600190505b949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611426816113f1565b811461143157600080fd5b50565b6000813590506114438161141d565b92915050565b60006020828403121561145f5761145e6113e7565b5b600061146d84828501611434565b91505092915050565b60008115159050919050565b61148b81611476565b82525050565b60006020820190506114a66000830184611482565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156114e65780820151818401526020810190506114cb565b838111156114f5576000848401525b50505050565b6000601f19601f8301169050919050565b6000611517826114ac565b61152181856114b7565b93506115318185602086016114c8565b61153a816114fb565b840191505092915050565b6000602082019050818103600083015261155f818461150c565b905092915050565b6000819050919050565b61157a81611567565b811461158557600080fd5b50565b60008135905061159781611571565b92915050565b6000602082840312156115b3576115b26113e7565b5b60006115c184828501611588565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006115f5826115ca565b9050919050565b611605816115ea565b82525050565b600060208201905061162060008301846115fc565b92915050565b61162f816115ea565b811461163a57600080fd5b50565b60008135905061164c81611626565b92915050565b60008060408385031215611669576116686113e7565b5b60006116778582860161163d565b925050602061168885828601611588565b9150509250929050565b6000806000606084860312156116ab576116aa6113e7565b5b60006116b98682870161163d565b93505060206116ca8682870161163d565b92505060406116db86828701611588565b9150509250925092565b6000602082840312156116fb576116fa6113e7565b5b60006117098482850161163d565b91505092915050565b61171b81611567565b82525050565b60006020820190506117366000830184611712565b92915050565b61174581611476565b811461175057600080fd5b50565b6000813590506117628161173c565b92915050565b6000806040838503121561177f5761177e6113e7565b5b600061178d8582860161163d565b925050602061179e85828601611753565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6117ea826114fb565b810181811067ffffffffffffffff82111715611809576118086117b2565b5b80604052505050565b600061181c6113dd565b905061182882826117e1565b919050565b600067ffffffffffffffff821115611848576118476117b2565b5b611851826114fb565b9050602081019050919050565b82818337600083830152505050565b600061188061187b8461182d565b611812565b90508281526020810184848401111561189c5761189b6117ad565b5b6118a784828561185e565b509392505050565b600082601f8301126118c4576118c36117a8565b5b81356118d484826020860161186d565b91505092915050565b600080600080608085870312156118f7576118f66113e7565b5b60006119058782880161163d565b94505060206119168782880161163d565b935050604061192787828801611588565b925050606085013567ffffffffffffffff811115611948576119476113ec565b5b611954878288016118af565b91505092959194509250565b60008060408385031215611977576119766113e7565b5b60006119858582860161163d565b92505060206119968582860161163d565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806119e757607f821691505b602082108114156119fb576119fa6119a0565b5b50919050565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b6000611a5d602c836114b7565b9150611a6882611a01565b604082019050919050565b60006020820190508181036000830152611a8c81611a50565b9050919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b6000611aef6021836114b7565b9150611afa82611a93565b604082019050919050565b60006020820190508181036000830152611b1e81611ae2565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b6000611b816038836114b7565b9150611b8c82611b25565b604082019050919050565b60006020820190508181036000830152611bb081611b74565b9050919050565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b6000611c136031836114b7565b9150611c1e82611bb7565b604082019050919050565b60006020820190508181036000830152611c4281611c06565b9050919050565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b6000611ca56029836114b7565b9150611cb082611c49565b604082019050919050565b60006020820190508181036000830152611cd481611c98565b9050919050565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b6000611d37602a836114b7565b9150611d4282611cdb565b604082019050919050565b60006020820190508181036000830152611d6681611d2a565b9050919050565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b6000611dc9602f836114b7565b9150611dd482611d6d565b604082019050919050565b60006020820190508181036000830152611df881611dbc565b9050919050565b600081905092915050565b6000611e15826114ac565b611e1f8185611dff565b9350611e2f8185602086016114c8565b80840191505092915050565b6000611e478285611e0a565b9150611e538284611e0a565b91508190509392505050565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b6000611ebb602c836114b7565b9150611ec682611e5f565b604082019050919050565b60006020820190508181036000830152611eea81611eae565b9050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000611f4d6025836114b7565b9150611f5882611ef1565b604082019050919050565b60006020820190508181036000830152611f7c81611f40565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611fdf6024836114b7565b9150611fea82611f83565b604082019050919050565b6000602082019050818103600083015261200e81611fd2565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061204f82611567565b915061205a83611567565b92508282101561206d5761206c612015565b5b828203905092915050565b600061208382611567565b915061208e83611567565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156120c3576120c2612015565b5b828201905092915050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b60006121046019836114b7565b915061210f826120ce565b602082019050919050565b60006020820190508181036000830152612133816120f7565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b60006121966032836114b7565b91506121a18261213a565b604082019050919050565b600060208201905081810360008301526121c581612189565b9050919050565b60006121d782611567565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561220a57612209612015565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061224f82611567565b915061225a83611567565b92508261226a57612269612215565b5b828204905092915050565b600061228082611567565b915061228b83611567565b92508261229b5761229a612215565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081519050919050565b600082825260208201905092915050565b60006122fc826122d5565b61230681856122e0565b93506123168185602086016114c8565b61231f816114fb565b840191505092915050565b600060808201905061233f60008301876115fc565b61234c60208301866115fc565b6123596040830185611712565b818103606083015261236b81846122f1565b905095945050505050565b6000815190506123858161141d565b92915050565b6000602082840312156123a1576123a06113e7565b5b60006123af84828501612376565b9150509291505056fea2646970667358221220cc44d59999a6c6b1afc97c5c0a7bc292e9f45a50491030fba48a7a1c15b8c2ce64736f6c63430008090033";

export class ERC721__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC721>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): ERC721 {
    return super.attach(address) as ERC721;
  }
  connect(signer: Signer): ERC721__factory {
    return super.connect(signer) as ERC721__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721Interface {
    return new utils.Interface(_abi) as ERC721Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC721 {
    return new Contract(address, _abi, signerOrProvider) as ERC721;
  }
}
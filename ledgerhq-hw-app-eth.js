(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ledgerhq-hw-app-eth"],{

/***/ "CS7j":
/*!***************************************************************!*\
  !*** ./node_modules/@ledgerhq/hw-app-eth/lib-es/contracts.js ***!
  \***************************************************************/
/*! exports provided: getInfosForContractMethod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInfosForContractMethod", function() { return getInfosForContractMethod; });
/* harmony import */ var _ledgerhq_cryptoassets_data_dapps_ethereum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ledgerhq/cryptoassets/data/dapps/ethereum */ "EkQ0");
/* harmony import */ var _ledgerhq_cryptoassets_data_dapps_ethereum__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ledgerhq_cryptoassets_data_dapps_ethereum__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Retrieve the metadatas a given contract address and a method selector
 */

const getInfosForContractMethod = (contractAddress, selector) => {
  const lcSelector = selector.toLowerCase();
  const lcContractAddress = contractAddress.toLowerCase();

  if (lcContractAddress in _ledgerhq_cryptoassets_data_dapps_ethereum__WEBPACK_IMPORTED_MODULE_0___default.a) {
    const contractSelectors = _ledgerhq_cryptoassets_data_dapps_ethereum__WEBPACK_IMPORTED_MODULE_0___default.a[lcContractAddress];

    if (lcSelector in contractSelectors) {
      return {
        payload: contractSelectors[lcSelector]["serialized_data"],
        signature: contractSelectors[lcSelector]["signature"],
        plugin: contractSelectors[lcSelector]["plugin"],
        erc20OfInterest: contractSelectors[lcSelector]["erc20OfInterest"],
        abi: contractSelectors["abi"]
      };
    }
  }
};
//# sourceMappingURL=contracts.js.map

/***/ }),

/***/ "EkQ0":
/*!********************************************************************!*\
  !*** ./node_modules/@ledgerhq/cryptoassets/data/dapps/ethereum.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "0x5d3a536e4d6dbd6114cc1ead35777bab948e3643": {
    "0xa0712d68": {
      "plugin": "Compound",
      "serialized_data": "08436f6d706f756e645d3a536e4d6dbd6114cc1ead35777bab948e3643a0712d68",
      "signature": "304402201d01e8ba9af5ca38da50ad21f5c75c51eada79ece415bc5a4312d0bbc7837df8022002202f22cedb7bb6e3ddabd4e3a8a95bf9a619fac769d459d2a61367f87b2bc2"
    },
    "0xdb006a75": {
      "plugin": "Compound",
      "serialized_data": "08436f6d706f756e645d3a536e4d6dbd6114cc1ead35777bab948e3643db006a75",
      "signature": "3045022100d344d8f641b9bdda6cd872e0d572c0c0beaa973fda19dc3e6e3c6e1c09d6947d02204ced2c978601e383da4c689c8010a8b422f241efe7b6b4d13dc01645dd4ae96f"
    },
    "0x852a12e3": {
      "plugin": "Compound",
      "serialized_data": "08436f6d706f756e645d3a536e4d6dbd6114cc1ead35777bab948e3643852a12e3",
      "signature": "3045022100815c65999cf9eb8e4842af02c79c0d5d577746ff290a6b9403e0da9d409a4d1a0220274110ccb0009e32284fb0d9b3d7778cc431b717bb0a3102891eed7644396bd3"
    },
    "abi": [
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "underlying_",
            "type": "address"
          },
          {
            "internalType": "contract ComptrollerInterface",
            "name": "comptroller_",
            "type": "address"
          },
          {
            "internalType": "contract InterestRateModel",
            "name": "interestRateModel_",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "initialExchangeRateMantissa_",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "name_",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "symbol_",
            "type": "string"
          },
          {
            "internalType": "uint8",
            "name": "decimals_",
            "type": "uint8"
          },
          {
            "internalType": "address payable",
            "name": "admin_",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "implementation_",
            "type": "address"
          },
          {
            "internalType": "bytes",
            "name": "becomeImplementationData",
            "type": "bytes"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "cashPrior",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "interestAccumulated",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "borrowIndex",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "totalBorrows",
            "type": "uint256"
          }
        ],
        "name": "AccrueInterest",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "borrower",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "borrowAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "accountBorrows",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "totalBorrows",
            "type": "uint256"
          }
        ],
        "name": "Borrow",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "error",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "info",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "detail",
            "type": "uint256"
          }
        ],
        "name": "Failure",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "liquidator",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "borrower",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "repayAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "cTokenCollateral",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "seizeTokens",
            "type": "uint256"
          }
        ],
        "name": "LiquidateBorrow",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "minter",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "mintAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "mintTokens",
            "type": "uint256"
          }
        ],
        "name": "Mint",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "oldAdmin",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "newAdmin",
            "type": "address"
          }
        ],
        "name": "NewAdmin",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "contract ComptrollerInterface",
            "name": "oldComptroller",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "contract ComptrollerInterface",
            "name": "newComptroller",
            "type": "address"
          }
        ],
        "name": "NewComptroller",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "oldImplementation",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "newImplementation",
            "type": "address"
          }
        ],
        "name": "NewImplementation",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "contract InterestRateModel",
            "name": "oldInterestRateModel",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "contract InterestRateModel",
            "name": "newInterestRateModel",
            "type": "address"
          }
        ],
        "name": "NewMarketInterestRateModel",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "oldPendingAdmin",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "newPendingAdmin",
            "type": "address"
          }
        ],
        "name": "NewPendingAdmin",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "oldReserveFactorMantissa",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "newReserveFactorMantissa",
            "type": "uint256"
          }
        ],
        "name": "NewReserveFactor",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "redeemer",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "redeemAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "redeemTokens",
            "type": "uint256"
          }
        ],
        "name": "Redeem",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "payer",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "borrower",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "repayAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "accountBorrows",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "totalBorrows",
            "type": "uint256"
          }
        ],
        "name": "RepayBorrow",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "benefactor",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "addAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "newTotalReserves",
            "type": "uint256"
          }
        ],
        "name": "ReservesAdded",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "admin",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "reduceAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "newTotalReserves",
            "type": "uint256"
          }
        ],
        "name": "ReservesReduced",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "_acceptAdmin",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "uint256",
            "name": "addAmount",
            "type": "uint256"
          }
        ],
        "name": "_addReserves",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "uint256",
            "name": "reduceAmount",
            "type": "uint256"
          }
        ],
        "name": "_reduceReserves",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "contract ComptrollerInterface",
            "name": "newComptroller",
            "type": "address"
          }
        ],
        "name": "_setComptroller",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "implementation_",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "allowResign",
            "type": "bool"
          },
          {
            "internalType": "bytes",
            "name": "becomeImplementationData",
            "type": "bytes"
          }
        ],
        "name": "_setImplementation",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "contract InterestRateModel",
            "name": "newInterestRateModel",
            "type": "address"
          }
        ],
        "name": "_setInterestRateModel",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address payable",
            "name": "newPendingAdmin",
            "type": "address"
          }
        ],
        "name": "_setPendingAdmin",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "uint256",
            "name": "newReserveFactorMantissa",
            "type": "uint256"
          }
        ],
        "name": "_setReserveFactor",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "accrualBlockNumber",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "accrueInterest",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "admin",
        "outputs": [
          {
            "internalType": "address payable",
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          }
        ],
        "name": "allowance",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "balanceOfUnderlying",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "uint256",
            "name": "borrowAmount",
            "type": "uint256"
          }
        ],
        "name": "borrow",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "borrowBalanceCurrent",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "borrowBalanceStored",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "borrowIndex",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "borrowRatePerBlock",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "comptroller",
        "outputs": [
          {
            "internalType": "contract ComptrollerInterface",
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
          {
            "internalType": "uint8",
            "name": "",
            "type": "uint8"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "name": "delegateToImplementation",
        "outputs": [
          {
            "internalType": "bytes",
            "name": "",
            "type": "bytes"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "name": "delegateToViewImplementation",
        "outputs": [
          {
            "internalType": "bytes",
            "name": "",
            "type": "bytes"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "exchangeRateCurrent",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "exchangeRateStored",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "getAccountSnapshot",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getCash",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "implementation",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "interestRateModel",
        "outputs": [
          {
            "internalType": "contract InterestRateModel",
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "isCToken",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "borrower",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "repayAmount",
            "type": "uint256"
          },
          {
            "internalType": "contract CTokenInterface",
            "name": "cTokenCollateral",
            "type": "address"
          }
        ],
        "name": "liquidateBorrow",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "uint256",
            "name": "mintAmount",
            "type": "uint256"
          }
        ],
        "name": "mint",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "pendingAdmin",
        "outputs": [
          {
            "internalType": "address payable",
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "uint256",
            "name": "redeemTokens",
            "type": "uint256"
          }
        ],
        "name": "redeem",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "uint256",
            "name": "redeemAmount",
            "type": "uint256"
          }
        ],
        "name": "redeemUnderlying",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "uint256",
            "name": "repayAmount",
            "type": "uint256"
          }
        ],
        "name": "repayBorrow",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "borrower",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "repayAmount",
            "type": "uint256"
          }
        ],
        "name": "repayBorrowBehalf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "reserveFactorMantissa",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "liquidator",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "borrower",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "seizeTokens",
            "type": "uint256"
          }
        ],
        "name": "seize",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "supplyRatePerBlock",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "totalBorrows",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "totalBorrowsCurrent",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "totalReserves",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "dst",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "transfer",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "src",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "dst",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "underlying",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }
    ]
  },
  "0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5": {
    "0x1249c58b": {
      "plugin": "Compound",
      "serialized_data": "08436f6d706f756e644ddc2d193948926d02f9b1fe9e1daa0718270ed51249c58b",
      "signature": "3044022016dce2a1cf10e6635f1beeb5003a8d0cc3766fc17be88ecc44031187a0488c9b022043de1c6ae0f700a08dd2f1f5cbdb379acb89b83d3375d973516a0babb1e0c409"
    },
    "0xdb006a75": {
      "plugin": "Compound",
      "serialized_data": "08436f6d706f756e644ddc2d193948926d02f9b1fe9e1daa0718270ed5db006a75",
      "signature": "3045022100a1326e502b21790d466403b17fd41f35bf6e85587339cc51e4b0217e4e30b28b022040442d2b68fd5dd71735ee9a0fc5b834275314cbb7df3da8501d97b5764a35ce"
    },
    "0x852a12e3": {
      "plugin": "Compound",
      "serialized_data": "08436f6d706f756e644ddc2d193948926d02f9b1fe9e1daa0718270ed5852a12e3",
      "signature": "3044022007c52cd0b6baa6fe8d60fd62c4aa230daac5d4a7ef738d9c28fefaec981baf3c022023f49e213360273bde3abdcbc06c26e080d8fddc06477470473cf044e18ffb45"
    },
    "abi": [
      {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "spender",
            "type": "address"
          },
          {
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "mint",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "reserveFactorMantissa",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "account",
            "type": "address"
          }
        ],
        "name": "borrowBalanceCurrent",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "exchangeRateStored",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "src",
            "type": "address"
          },
          {
            "name": "dst",
            "type": "address"
          },
          {
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "pendingAdmin",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "balanceOfUnderlying",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getCash",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "newComptroller",
            "type": "address"
          }
        ],
        "name": "_setComptroller",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "totalBorrows",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "repayBorrow",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "comptroller",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "reduceAmount",
            "type": "uint256"
          }
        ],
        "name": "_reduceReserves",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "initialExchangeRateMantissa",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "accrualBlockNumber",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "totalBorrowsCurrent",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "redeemAmount",
            "type": "uint256"
          }
        ],
        "name": "redeemUnderlying",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "totalReserves",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "account",
            "type": "address"
          }
        ],
        "name": "borrowBalanceStored",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "accrueInterest",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "dst",
            "type": "address"
          },
          {
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "transfer",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "borrowIndex",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "borrower",
            "type": "address"
          },
          {
            "name": "cTokenCollateral",
            "type": "address"
          }
        ],
        "name": "liquidateBorrow",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "supplyRatePerBlock",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "liquidator",
            "type": "address"
          },
          {
            "name": "borrower",
            "type": "address"
          },
          {
            "name": "seizeTokens",
            "type": "uint256"
          }
        ],
        "name": "seize",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "newPendingAdmin",
            "type": "address"
          }
        ],
        "name": "_setPendingAdmin",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "exchangeRateCurrent",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "account",
            "type": "address"
          }
        ],
        "name": "getAccountSnapshot",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          },
          {
            "name": "",
            "type": "uint256"
          },
          {
            "name": "",
            "type": "uint256"
          },
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "borrowAmount",
            "type": "uint256"
          }
        ],
        "name": "borrow",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "redeemTokens",
            "type": "uint256"
          }
        ],
        "name": "redeem",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "owner",
            "type": "address"
          },
          {
            "name": "spender",
            "type": "address"
          }
        ],
        "name": "allowance",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "borrower",
            "type": "address"
          }
        ],
        "name": "repayBorrowBehalf",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "_acceptAdmin",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "newInterestRateModel",
            "type": "address"
          }
        ],
        "name": "_setInterestRateModel",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "interestRateModel",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "admin",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "borrowRatePerBlock",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "newReserveFactorMantissa",
            "type": "uint256"
          }
        ],
        "name": "_setReserveFactor",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "isCToken",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "name": "comptroller_",
            "type": "address"
          },
          {
            "name": "interestRateModel_",
            "type": "address"
          },
          {
            "name": "initialExchangeRateMantissa_",
            "type": "uint256"
          },
          {
            "name": "name_",
            "type": "string"
          },
          {
            "name": "symbol_",
            "type": "string"
          },
          {
            "name": "decimals_",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "interestAccumulated",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "borrowIndex",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "totalBorrows",
            "type": "uint256"
          }
        ],
        "name": "AccrueInterest",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "minter",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "mintAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "mintTokens",
            "type": "uint256"
          }
        ],
        "name": "Mint",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "redeemer",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "redeemAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "redeemTokens",
            "type": "uint256"
          }
        ],
        "name": "Redeem",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "borrower",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "borrowAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "accountBorrows",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "totalBorrows",
            "type": "uint256"
          }
        ],
        "name": "Borrow",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "payer",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "borrower",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "repayAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "accountBorrows",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "totalBorrows",
            "type": "uint256"
          }
        ],
        "name": "RepayBorrow",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "liquidator",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "borrower",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "repayAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "cTokenCollateral",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "seizeTokens",
            "type": "uint256"
          }
        ],
        "name": "LiquidateBorrow",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "oldPendingAdmin",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "newPendingAdmin",
            "type": "address"
          }
        ],
        "name": "NewPendingAdmin",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "oldAdmin",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "newAdmin",
            "type": "address"
          }
        ],
        "name": "NewAdmin",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "oldComptroller",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "newComptroller",
            "type": "address"
          }
        ],
        "name": "NewComptroller",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "oldInterestRateModel",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "newInterestRateModel",
            "type": "address"
          }
        ],
        "name": "NewMarketInterestRateModel",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "oldReserveFactorMantissa",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "newReserveFactorMantissa",
            "type": "uint256"
          }
        ],
        "name": "NewReserveFactor",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "admin",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "reduceAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "newTotalReserves",
            "type": "uint256"
          }
        ],
        "name": "ReservesReduced",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "error",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "info",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "detail",
            "type": "uint256"
          }
        ],
        "name": "Failure",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "to",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "spender",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      }
    ]
  },
  "0x39aa39c021dfbae8fac545936693ac917d5e7563": {
    "0xa0712d68": {
      "plugin": "Compound",
      "serialized_data": "08436f6d706f756e6439aa39c021dfbae8fac545936693ac917d5e7563a0712d68",
      "signature": "3045022100e2e5b47f874dc73a69f4c173e3a42bc465c7676fd5cd7418ccaaac1e9354f97002206737751faa640e99f9948ba1d49559e6d4c5b27706051d0fe43b23df3f34eb79"
    },
    "0xdb006a75": {
      "plugin": "Compound",
      "serialized_data": "08436f6d706f756e6439aa39c021dfbae8fac545936693ac917d5e7563db006a75",
      "signature": "304402203c9fe6a607de137c9b79afe596e5a35460b750ed126e6c55b48694d87f48467202207434bb00fb10b63d1dd0ff72eb731bf90f4a7613b49952b37707b091cfa5d1d6"
    },
    "0x852a12e3": {
      "plugin": "Compound",
      "serialized_data": "08436f6d706f756e6439aa39c021dfbae8fac545936693ac917d5e7563852a12e3",
      "signature": "304402207c0189dcc3f7a3510092a17ec2f1c3a185b2bbff507d0f3d8a50bc3d23fb025402202f3aad577ebef6382f54f3ed90056c1de0197746540ab454d42f8f36bb0651e7"
    },
    "abi": [
      {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "spender",
            "type": "address"
          },
          {
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "repayAmount",
            "type": "uint256"
          }
        ],
        "name": "repayBorrow",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "reserveFactorMantissa",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "account",
            "type": "address"
          }
        ],
        "name": "borrowBalanceCurrent",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "exchangeRateStored",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "src",
            "type": "address"
          },
          {
            "name": "dst",
            "type": "address"
          },
          {
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "borrower",
            "type": "address"
          },
          {
            "name": "repayAmount",
            "type": "uint256"
          }
        ],
        "name": "repayBorrowBehalf",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "pendingAdmin",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "balanceOfUnderlying",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getCash",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "newComptroller",
            "type": "address"
          }
        ],
        "name": "_setComptroller",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "totalBorrows",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "comptroller",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "reduceAmount",
            "type": "uint256"
          }
        ],
        "name": "_reduceReserves",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "initialExchangeRateMantissa",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "accrualBlockNumber",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "underlying",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "totalBorrowsCurrent",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "redeemAmount",
            "type": "uint256"
          }
        ],
        "name": "redeemUnderlying",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "totalReserves",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "account",
            "type": "address"
          }
        ],
        "name": "borrowBalanceStored",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "mintAmount",
            "type": "uint256"
          }
        ],
        "name": "mint",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "accrueInterest",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "dst",
            "type": "address"
          },
          {
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "transfer",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "borrowIndex",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "supplyRatePerBlock",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "liquidator",
            "type": "address"
          },
          {
            "name": "borrower",
            "type": "address"
          },
          {
            "name": "seizeTokens",
            "type": "uint256"
          }
        ],
        "name": "seize",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "newPendingAdmin",
            "type": "address"
          }
        ],
        "name": "_setPendingAdmin",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "exchangeRateCurrent",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "account",
            "type": "address"
          }
        ],
        "name": "getAccountSnapshot",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          },
          {
            "name": "",
            "type": "uint256"
          },
          {
            "name": "",
            "type": "uint256"
          },
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "borrowAmount",
            "type": "uint256"
          }
        ],
        "name": "borrow",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "redeemTokens",
            "type": "uint256"
          }
        ],
        "name": "redeem",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "owner",
            "type": "address"
          },
          {
            "name": "spender",
            "type": "address"
          }
        ],
        "name": "allowance",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "_acceptAdmin",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "newInterestRateModel",
            "type": "address"
          }
        ],
        "name": "_setInterestRateModel",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "interestRateModel",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "borrower",
            "type": "address"
          },
          {
            "name": "repayAmount",
            "type": "uint256"
          },
          {
            "name": "cTokenCollateral",
            "type": "address"
          }
        ],
        "name": "liquidateBorrow",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "admin",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "borrowRatePerBlock",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "newReserveFactorMantissa",
            "type": "uint256"
          }
        ],
        "name": "_setReserveFactor",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "isCToken",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "name": "underlying_",
            "type": "address"
          },
          {
            "name": "comptroller_",
            "type": "address"
          },
          {
            "name": "interestRateModel_",
            "type": "address"
          },
          {
            "name": "initialExchangeRateMantissa_",
            "type": "uint256"
          },
          {
            "name": "name_",
            "type": "string"
          },
          {
            "name": "symbol_",
            "type": "string"
          },
          {
            "name": "decimals_",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "interestAccumulated",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "borrowIndex",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "totalBorrows",
            "type": "uint256"
          }
        ],
        "name": "AccrueInterest",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "minter",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "mintAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "mintTokens",
            "type": "uint256"
          }
        ],
        "name": "Mint",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "redeemer",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "redeemAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "redeemTokens",
            "type": "uint256"
          }
        ],
        "name": "Redeem",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "borrower",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "borrowAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "accountBorrows",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "totalBorrows",
            "type": "uint256"
          }
        ],
        "name": "Borrow",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "payer",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "borrower",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "repayAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "accountBorrows",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "totalBorrows",
            "type": "uint256"
          }
        ],
        "name": "RepayBorrow",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "liquidator",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "borrower",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "repayAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "cTokenCollateral",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "seizeTokens",
            "type": "uint256"
          }
        ],
        "name": "LiquidateBorrow",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "oldPendingAdmin",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "newPendingAdmin",
            "type": "address"
          }
        ],
        "name": "NewPendingAdmin",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "oldAdmin",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "newAdmin",
            "type": "address"
          }
        ],
        "name": "NewAdmin",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "oldComptroller",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "newComptroller",
            "type": "address"
          }
        ],
        "name": "NewComptroller",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "oldInterestRateModel",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "newInterestRateModel",
            "type": "address"
          }
        ],
        "name": "NewMarketInterestRateModel",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "oldReserveFactorMantissa",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "newReserveFactorMantissa",
            "type": "uint256"
          }
        ],
        "name": "NewReserveFactor",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "admin",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "reduceAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "newTotalReserves",
            "type": "uint256"
          }
        ],
        "name": "ReservesReduced",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "error",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "info",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "detail",
            "type": "uint256"
          }
        ],
        "name": "Failure",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "to",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "spender",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      }
    ]
  },
  "0xb3319f5d18bc0d84dd1b4825dcde5d5f7266d407": {
    "0xa0712d68": {
      "plugin": "Compound",
      "serialized_data": "08436f6d706f756e64b3319f5d18bc0d84dd1b4825dcde5d5f7266d407a0712d68",
      "signature": "30440220247499df8557d212c609105b19248f2103b6dce5e475724f0f1370a61bf5162002202f6af6c2e45a78cb0acf0b8fb37d57b6860b0d003e3bcfe6f6acfecddd4e2754"
    },
    "0xdb006a75": {
      "plugin": "Compound",
      "serialized_data": "08436f6d706f756e64b3319f5d18bc0d84dd1b4825dcde5d5f7266d407db006a75",
      "signature": "30450221009e609aa1e1915ae93416dca68290b6a06b674ed4d936dbe6d90311512b345518022012eb1b2654614cad7d40b3bdbaad48eb17b83b8f25cfeac46f541ee6b5f34578"
    },
    "0x852a12e3": {
      "plugin": "Compound",
      "serialized_data": "08436f6d706f756e64b3319f5d18bc0d84dd1b4825dcde5d5f7266d407852a12e3",
      "signature": "30440220161ffc6594f0aa89136d1909aa2782cc85fc50b5ce128e6d63564dd6723db87f02202c1bac84674495815b14f14e52a5f933bb8374193ecf625e8720e957722686f1"
    },
    "abi": [
      {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "spender",
            "type": "address"
          },
          {
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "repayAmount",
            "type": "uint256"
          }
        ],
        "name": "repayBorrow",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "reserveFactorMantissa",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "account",
            "type": "address"
          }
        ],
        "name": "borrowBalanceCurrent",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "exchangeRateStored",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "src",
            "type": "address"
          },
          {
            "name": "dst",
            "type": "address"
          },
          {
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "borrower",
            "type": "address"
          },
          {
            "name": "repayAmount",
            "type": "uint256"
          }
        ],
        "name": "repayBorrowBehalf",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "pendingAdmin",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "balanceOfUnderlying",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getCash",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "newComptroller",
            "type": "address"
          }
        ],
        "name": "_setComptroller",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "totalBorrows",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "comptroller",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "reduceAmount",
            "type": "uint256"
          }
        ],
        "name": "_reduceReserves",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "initialExchangeRateMantissa",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "accrualBlockNumber",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "underlying",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "totalBorrowsCurrent",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "redeemAmount",
            "type": "uint256"
          }
        ],
        "name": "redeemUnderlying",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "totalReserves",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "account",
            "type": "address"
          }
        ],
        "name": "borrowBalanceStored",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "mintAmount",
            "type": "uint256"
          }
        ],
        "name": "mint",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "accrueInterest",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "dst",
            "type": "address"
          },
          {
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "transfer",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "borrowIndex",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "supplyRatePerBlock",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "liquidator",
            "type": "address"
          },
          {
            "name": "borrower",
            "type": "address"
          },
          {
            "name": "seizeTokens",
            "type": "uint256"
          }
        ],
        "name": "seize",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "newPendingAdmin",
            "type": "address"
          }
        ],
        "name": "_setPendingAdmin",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "exchangeRateCurrent",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "account",
            "type": "address"
          }
        ],
        "name": "getAccountSnapshot",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          },
          {
            "name": "",
            "type": "uint256"
          },
          {
            "name": "",
            "type": "uint256"
          },
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "borrowAmount",
            "type": "uint256"
          }
        ],
        "name": "borrow",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "redeemTokens",
            "type": "uint256"
          }
        ],
        "name": "redeem",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "owner",
            "type": "address"
          },
          {
            "name": "spender",
            "type": "address"
          }
        ],
        "name": "allowance",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "_acceptAdmin",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "newInterestRateModel",
            "type": "address"
          }
        ],
        "name": "_setInterestRateModel",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "interestRateModel",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "borrower",
            "type": "address"
          },
          {
            "name": "repayAmount",
            "type": "uint256"
          },
          {
            "name": "cTokenCollateral",
            "type": "address"
          }
        ],
        "name": "liquidateBorrow",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "admin",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "borrowRatePerBlock",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "newReserveFactorMantissa",
            "type": "uint256"
          }
        ],
        "name": "_setReserveFactor",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "isCToken",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "name": "underlying_",
            "type": "address"
          },
          {
            "name": "comptroller_",
            "type": "address"
          },
          {
            "name": "interestRateModel_",
            "type": "address"
          },
          {
            "name": "initialExchangeRateMantissa_",
            "type": "uint256"
          },
          {
            "name": "name_",
            "type": "string"
          },
          {
            "name": "symbol_",
            "type": "string"
          },
          {
            "name": "decimals_",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "interestAccumulated",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "borrowIndex",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "totalBorrows",
            "type": "uint256"
          }
        ],
        "name": "AccrueInterest",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "minter",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "mintAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "mintTokens",
            "type": "uint256"
          }
        ],
        "name": "Mint",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "redeemer",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "redeemAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "redeemTokens",
            "type": "uint256"
          }
        ],
        "name": "Redeem",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "borrower",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "borrowAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "accountBorrows",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "totalBorrows",
            "type": "uint256"
          }
        ],
        "name": "Borrow",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "payer",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "borrower",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "repayAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "accountBorrows",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "totalBorrows",
            "type": "uint256"
          }
        ],
        "name": "RepayBorrow",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "liquidator",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "borrower",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "repayAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "cTokenCollateral",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "seizeTokens",
            "type": "uint256"
          }
        ],
        "name": "LiquidateBorrow",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "oldPendingAdmin",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "newPendingAdmin",
            "type": "address"
          }
        ],
        "name": "NewPendingAdmin",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "oldAdmin",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "newAdmin",
            "type": "address"
          }
        ],
        "name": "NewAdmin",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "oldComptroller",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "newComptroller",
            "type": "address"
          }
        ],
        "name": "NewComptroller",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "oldInterestRateModel",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "newInterestRateModel",
            "type": "address"
          }
        ],
        "name": "NewMarketInterestRateModel",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "oldReserveFactorMantissa",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "newReserveFactorMantissa",
            "type": "uint256"
          }
        ],
        "name": "NewReserveFactor",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "admin",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "reduceAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "newTotalReserves",
            "type": "uint256"
          }
        ],
        "name": "ReservesReduced",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "error",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "info",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "detail",
            "type": "uint256"
          }
        ],
        "name": "Failure",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "to",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "spender",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      }
    ]
  },
  "0xf650c3d88d12db855b8bf7d11be6c55a4e07dcc9": {
    "0xa0712d68": {
      "plugin": "Compound",
      "serialized_data": "08436f6d706f756e64f650c3d88d12db855b8bf7d11be6c55a4e07dcc9a0712d68",
      "signature": "3045022100e21e9d85453761784eadc85636a962f6777128911f2d385fb75b43f6f2f0d254022016f05d0fb9a068f4b4371b869a9ee708c47d8ce568d272223277fabf7c6ef6ee"
    },
    "0xdb006a75": {
      "plugin": "Compound",
      "serialized_data": "08436f6d706f756e64f650c3d88d12db855b8bf7d11be6c55a4e07dcc9db006a75",
      "signature": "3045022100b22b83ce4bf9c64c610b16ae2290e099254e8830aafdbd62cc28a42acf5c9acd0220474ba67ab2ef6d4cb8e1f7dd5ac9f2d77cf98b9723caa14f7cbb3ace7dcd22c0"
    },
    "0x852a12e3": {
      "plugin": "Compound",
      "serialized_data": "08436f6d706f756e64f650c3d88d12db855b8bf7d11be6c55a4e07dcc9852a12e3",
      "signature": "3045022100d386d7ef9f7f3d1a95953045c9e8927b6b474b1c9da811ea423c936ffb88bce4022074deb4f8f8afa595478c04dde495c00f1414dae245720164c4e1b4e647687af9"
    },
    "abi": [
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "underlying_",
            "type": "address"
          },
          {
            "internalType": "contract ComptrollerInterface",
            "name": "comptroller_",
            "type": "address"
          },
          {
            "internalType": "contract InterestRateModel",
            "name": "interestRateModel_",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "initialExchangeRateMantissa_",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "name_",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "symbol_",
            "type": "string"
          },
          {
            "internalType": "uint8",
            "name": "decimals_",
            "type": "uint8"
          },
          {
            "internalType": "address payable",
            "name": "admin_",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "implementation_",
            "type": "address"
          },
          {
            "internalType": "bytes",
            "name": "becomeImplementationData",
            "type": "bytes"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "cashPrior",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "interestAccumulated",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "borrowIndex",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "totalBorrows",
            "type": "uint256"
          }
        ],
        "name": "AccrueInterest",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "borrower",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "borrowAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "accountBorrows",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "totalBorrows",
            "type": "uint256"
          }
        ],
        "name": "Borrow",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "error",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "info",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "detail",
            "type": "uint256"
          }
        ],
        "name": "Failure",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "liquidator",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "borrower",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "repayAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "cTokenCollateral",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "seizeTokens",
            "type": "uint256"
          }
        ],
        "name": "LiquidateBorrow",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "minter",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "mintAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "mintTokens",
            "type": "uint256"
          }
        ],
        "name": "Mint",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "oldAdmin",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "newAdmin",
            "type": "address"
          }
        ],
        "name": "NewAdmin",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "contract ComptrollerInterface",
            "name": "oldComptroller",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "contract ComptrollerInterface",
            "name": "newComptroller",
            "type": "address"
          }
        ],
        "name": "NewComptroller",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "oldImplementation",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "newImplementation",
            "type": "address"
          }
        ],
        "name": "NewImplementation",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "contract InterestRateModel",
            "name": "oldInterestRateModel",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "contract InterestRateModel",
            "name": "newInterestRateModel",
            "type": "address"
          }
        ],
        "name": "NewMarketInterestRateModel",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "oldPendingAdmin",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "newPendingAdmin",
            "type": "address"
          }
        ],
        "name": "NewPendingAdmin",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "oldReserveFactorMantissa",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "newReserveFactorMantissa",
            "type": "uint256"
          }
        ],
        "name": "NewReserveFactor",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "redeemer",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "redeemAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "redeemTokens",
            "type": "uint256"
          }
        ],
        "name": "Redeem",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "payer",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "borrower",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "repayAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "accountBorrows",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "totalBorrows",
            "type": "uint256"
          }
        ],
        "name": "RepayBorrow",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "benefactor",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "addAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "newTotalReserves",
            "type": "uint256"
          }
        ],
        "name": "ReservesAdded",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "admin",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "reduceAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "newTotalReserves",
            "type": "uint256"
          }
        ],
        "name": "ReservesReduced",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "_acceptAdmin",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "uint256",
            "name": "addAmount",
            "type": "uint256"
          }
        ],
        "name": "_addReserves",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "uint256",
            "name": "reduceAmount",
            "type": "uint256"
          }
        ],
        "name": "_reduceReserves",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "contract ComptrollerInterface",
            "name": "newComptroller",
            "type": "address"
          }
        ],
        "name": "_setComptroller",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "implementation_",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "allowResign",
            "type": "bool"
          },
          {
            "internalType": "bytes",
            "name": "becomeImplementationData",
            "type": "bytes"
          }
        ],
        "name": "_setImplementation",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "contract InterestRateModel",
            "name": "newInterestRateModel",
            "type": "address"
          }
        ],
        "name": "_setInterestRateModel",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address payable",
            "name": "newPendingAdmin",
            "type": "address"
          }
        ],
        "name": "_setPendingAdmin",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "uint256",
            "name": "newReserveFactorMantissa",
            "type": "uint256"
          }
        ],
        "name": "_setReserveFactor",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "accrualBlockNumber",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "accrueInterest",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "admin",
        "outputs": [
          {
            "internalType": "address payable",
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          }
        ],
        "name": "allowance",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "balanceOfUnderlying",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "uint256",
            "name": "borrowAmount",
            "type": "uint256"
          }
        ],
        "name": "borrow",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "borrowBalanceCurrent",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "borrowBalanceStored",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "borrowIndex",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "borrowRatePerBlock",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "comptroller",
        "outputs": [
          {
            "internalType": "contract ComptrollerInterface",
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
          {
            "internalType": "uint8",
            "name": "",
            "type": "uint8"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "name": "delegateToImplementation",
        "outputs": [
          {
            "internalType": "bytes",
            "name": "",
            "type": "bytes"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "name": "delegateToViewImplementation",
        "outputs": [
          {
            "internalType": "bytes",
            "name": "",
            "type": "bytes"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "exchangeRateCurrent",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "exchangeRateStored",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "getAccountSnapshot",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getCash",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "implementation",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "interestRateModel",
        "outputs": [
          {
            "internalType": "contract InterestRateModel",
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "isCToken",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "borrower",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "repayAmount",
            "type": "uint256"
          },
          {
            "internalType": "contract CTokenInterface",
            "name": "cTokenCollateral",
            "type": "address"
          }
        ],
        "name": "liquidateBorrow",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "uint256",
            "name": "mintAmount",
            "type": "uint256"
          }
        ],
        "name": "mint",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "pendingAdmin",
        "outputs": [
          {
            "internalType": "address payable",
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "uint256",
            "name": "redeemTokens",
            "type": "uint256"
          }
        ],
        "name": "redeem",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "uint256",
            "name": "redeemAmount",
            "type": "uint256"
          }
        ],
        "name": "redeemUnderlying",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "uint256",
            "name": "repayAmount",
            "type": "uint256"
          }
        ],
        "name": "repayBorrow",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "borrower",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "repayAmount",
            "type": "uint256"
          }
        ],
        "name": "repayBorrowBehalf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "reserveFactorMantissa",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "liquidator",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "borrower",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "seizeTokens",
            "type": "uint256"
          }
        ],
        "name": "seize",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "supplyRatePerBlock",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "totalBorrows",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "totalBorrowsCurrent",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "totalReserves",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "dst",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "transfer",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "src",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "dst",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "underlying",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }
    ]
  },
  "0xc11b1268c1a384e55c48c2391d8d480264a3a7f4": {
    "0xa0712d68": {
      "plugin": "Compound",
      "serialized_data": "08436f6d706f756e64c11b1268c1a384e55c48c2391d8d480264a3a7f4a0712d68",
      "signature": "3045022100e2968945511f181185bb9c38f0e3d5a30d77f65efcc337a29ed7efdf0fef515d02205996e738fb665163e223977e1d63b5f3a4db12b47e5fd6b32c6cfad5fe750c33"
    },
    "0xdb006a75": {
      "plugin": "Compound",
      "serialized_data": "08436f6d706f756e64c11b1268c1a384e55c48c2391d8d480264a3a7f4db006a75",
      "signature": "3045022100955599c6dcb1bebb60052ca2d8f4c09950bd084b5f55efa1cca6df6a2f2f33b102200f9607465ada40b3cbd9aee2ff0ff7a5bd9a8bcede8c527f7c91bf9b936b0ffa"
    },
    "0x852a12e3": {
      "plugin": "Compound",
      "serialized_data": "08436f6d706f756e64c11b1268c1a384e55c48c2391d8d480264a3a7f4852a12e3",
      "signature": "3045022100d397ac236631a1d7d1c7c71a591e0e78c8bc5fbdc8945f002a4eae2f18314d8602203df6b5ba296ded323f9599c7ab8675c6bbc09f3c070bd8b044c41252eba7ff12"
    },
    "abi": [
      {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "spender",
            "type": "address"
          },
          {
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "repayAmount",
            "type": "uint256"
          }
        ],
        "name": "repayBorrow",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "reserveFactorMantissa",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "account",
            "type": "address"
          }
        ],
        "name": "borrowBalanceCurrent",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "exchangeRateStored",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "src",
            "type": "address"
          },
          {
            "name": "dst",
            "type": "address"
          },
          {
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "borrower",
            "type": "address"
          },
          {
            "name": "repayAmount",
            "type": "uint256"
          }
        ],
        "name": "repayBorrowBehalf",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "pendingAdmin",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "balanceOfUnderlying",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getCash",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "newComptroller",
            "type": "address"
          }
        ],
        "name": "_setComptroller",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "totalBorrows",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "comptroller",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "reduceAmount",
            "type": "uint256"
          }
        ],
        "name": "_reduceReserves",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "initialExchangeRateMantissa",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "accrualBlockNumber",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "underlying",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "totalBorrowsCurrent",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "redeemAmount",
            "type": "uint256"
          }
        ],
        "name": "redeemUnderlying",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "totalReserves",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "account",
            "type": "address"
          }
        ],
        "name": "borrowBalanceStored",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "mintAmount",
            "type": "uint256"
          }
        ],
        "name": "mint",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "accrueInterest",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "dst",
            "type": "address"
          },
          {
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "transfer",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "borrowIndex",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "supplyRatePerBlock",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "liquidator",
            "type": "address"
          },
          {
            "name": "borrower",
            "type": "address"
          },
          {
            "name": "seizeTokens",
            "type": "uint256"
          }
        ],
        "name": "seize",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "newPendingAdmin",
            "type": "address"
          }
        ],
        "name": "_setPendingAdmin",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "exchangeRateCurrent",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "account",
            "type": "address"
          }
        ],
        "name": "getAccountSnapshot",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          },
          {
            "name": "",
            "type": "uint256"
          },
          {
            "name": "",
            "type": "uint256"
          },
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "borrowAmount",
            "type": "uint256"
          }
        ],
        "name": "borrow",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "redeemTokens",
            "type": "uint256"
          }
        ],
        "name": "redeem",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "owner",
            "type": "address"
          },
          {
            "name": "spender",
            "type": "address"
          }
        ],
        "name": "allowance",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "_acceptAdmin",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "newInterestRateModel",
            "type": "address"
          }
        ],
        "name": "_setInterestRateModel",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "interestRateModel",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "borrower",
            "type": "address"
          },
          {
            "name": "repayAmount",
            "type": "uint256"
          },
          {
            "name": "cTokenCollateral",
            "type": "address"
          }
        ],
        "name": "liquidateBorrow",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "admin",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "borrowRatePerBlock",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "newReserveFactorMantissa",
            "type": "uint256"
          }
        ],
        "name": "_setReserveFactor",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "isCToken",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "name": "underlying_",
            "type": "address"
          },
          {
            "name": "comptroller_",
            "type": "address"
          },
          {
            "name": "interestRateModel_",
            "type": "address"
          },
          {
            "name": "initialExchangeRateMantissa_",
            "type": "uint256"
          },
          {
            "name": "name_",
            "type": "string"
          },
          {
            "name": "symbol_",
            "type": "string"
          },
          {
            "name": "decimals_",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "interestAccumulated",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "borrowIndex",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "totalBorrows",
            "type": "uint256"
          }
        ],
        "name": "AccrueInterest",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "minter",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "mintAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "mintTokens",
            "type": "uint256"
          }
        ],
        "name": "Mint",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "redeemer",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "redeemAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "redeemTokens",
            "type": "uint256"
          }
        ],
        "name": "Redeem",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "borrower",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "borrowAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "accountBorrows",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "totalBorrows",
            "type": "uint256"
          }
        ],
        "name": "Borrow",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "payer",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "borrower",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "repayAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "accountBorrows",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "totalBorrows",
            "type": "uint256"
          }
        ],
        "name": "RepayBorrow",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "liquidator",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "borrower",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "repayAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "cTokenCollateral",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "seizeTokens",
            "type": "uint256"
          }
        ],
        "name": "LiquidateBorrow",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "oldPendingAdmin",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "newPendingAdmin",
            "type": "address"
          }
        ],
        "name": "NewPendingAdmin",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "oldAdmin",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "newAdmin",
            "type": "address"
          }
        ],
        "name": "NewAdmin",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "oldComptroller",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "newComptroller",
            "type": "address"
          }
        ],
        "name": "NewComptroller",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "oldInterestRateModel",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "newInterestRateModel",
            "type": "address"
          }
        ],
        "name": "NewMarketInterestRateModel",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "oldReserveFactorMantissa",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "newReserveFactorMantissa",
            "type": "uint256"
          }
        ],
        "name": "NewReserveFactor",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "admin",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "reduceAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "newTotalReserves",
            "type": "uint256"
          }
        ],
        "name": "ReservesReduced",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "error",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "info",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "detail",
            "type": "uint256"
          }
        ],
        "name": "Failure",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "to",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "spender",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      }
    ]
  },
  "0x6c8c6b02e7b2be14d4fa6022dfd6d75921d90e4e": {
    "0xa0712d68": {
      "plugin": "Compound",
      "serialized_data": "08436f6d706f756e646c8c6b02e7b2be14d4fa6022dfd6d75921d90e4ea0712d68",
      "signature": "3045022100bf70202f316255a51e8f3219d8801f855cae5ef90d4d35104ea3649b07f2f4bb022007853c4b24c1faf34272914ee2d579f7c33df35cd47faac20146207d797a859b"
    },
    "0xdb006a75": {
      "plugin": "Compound",
      "serialized_data": "08436f6d706f756e646c8c6b02e7b2be14d4fa6022dfd6d75921d90e4edb006a75",
      "signature": "3045022100a5a1cf15ec44c687d80a7404133263b058985b4982c9c61210680508cec04e1f02202a4b10fed7e5e48cddeeffef3c506a0729fe62cf44359f7c720340f5e16a470b"
    },
    "0x852a12e3": {
      "plugin": "Compound",
      "serialized_data": "08436f6d706f756e646c8c6b02e7b2be14d4fa6022dfd6d75921d90e4e852a12e3",
      "signature": "304402203a62daf293f498c06102dc322eb1f2be9aad9ee09da5647983e73ebd8542afd9022040bc7dc7a703663650b9ac9afe98f02755f5209cd633795331ec5cc51e023657"
    },
    "abi": [
      {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "spender",
            "type": "address"
          },
          {
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "repayAmount",
            "type": "uint256"
          }
        ],
        "name": "repayBorrow",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "reserveFactorMantissa",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "account",
            "type": "address"
          }
        ],
        "name": "borrowBalanceCurrent",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "exchangeRateStored",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "src",
            "type": "address"
          },
          {
            "name": "dst",
            "type": "address"
          },
          {
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "borrower",
            "type": "address"
          },
          {
            "name": "repayAmount",
            "type": "uint256"
          }
        ],
        "name": "repayBorrowBehalf",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "pendingAdmin",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "balanceOfUnderlying",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getCash",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "newComptroller",
            "type": "address"
          }
        ],
        "name": "_setComptroller",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "totalBorrows",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "comptroller",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "reduceAmount",
            "type": "uint256"
          }
        ],
        "name": "_reduceReserves",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "initialExchangeRateMantissa",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "accrualBlockNumber",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "underlying",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "totalBorrowsCurrent",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "redeemAmount",
            "type": "uint256"
          }
        ],
        "name": "redeemUnderlying",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "totalReserves",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "account",
            "type": "address"
          }
        ],
        "name": "borrowBalanceStored",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "mintAmount",
            "type": "uint256"
          }
        ],
        "name": "mint",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "accrueInterest",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "dst",
            "type": "address"
          },
          {
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "transfer",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "borrowIndex",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "supplyRatePerBlock",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "liquidator",
            "type": "address"
          },
          {
            "name": "borrower",
            "type": "address"
          },
          {
            "name": "seizeTokens",
            "type": "uint256"
          }
        ],
        "name": "seize",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "newPendingAdmin",
            "type": "address"
          }
        ],
        "name": "_setPendingAdmin",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "exchangeRateCurrent",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "account",
            "type": "address"
          }
        ],
        "name": "getAccountSnapshot",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          },
          {
            "name": "",
            "type": "uint256"
          },
          {
            "name": "",
            "type": "uint256"
          },
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "borrowAmount",
            "type": "uint256"
          }
        ],
        "name": "borrow",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "redeemTokens",
            "type": "uint256"
          }
        ],
        "name": "redeem",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "owner",
            "type": "address"
          },
          {
            "name": "spender",
            "type": "address"
          }
        ],
        "name": "allowance",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "_acceptAdmin",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "newInterestRateModel",
            "type": "address"
          }
        ],
        "name": "_setInterestRateModel",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "interestRateModel",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "borrower",
            "type": "address"
          },
          {
            "name": "repayAmount",
            "type": "uint256"
          },
          {
            "name": "cTokenCollateral",
            "type": "address"
          }
        ],
        "name": "liquidateBorrow",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "admin",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "borrowRatePerBlock",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "newReserveFactorMantissa",
            "type": "uint256"
          }
        ],
        "name": "_setReserveFactor",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "isCToken",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "name": "underlying_",
            "type": "address"
          },
          {
            "name": "comptroller_",
            "type": "address"
          },
          {
            "name": "interestRateModel_",
            "type": "address"
          },
          {
            "name": "initialExchangeRateMantissa_",
            "type": "uint256"
          },
          {
            "name": "name_",
            "type": "string"
          },
          {
            "name": "symbol_",
            "type": "string"
          },
          {
            "name": "decimals_",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "interestAccumulated",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "borrowIndex",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "totalBorrows",
            "type": "uint256"
          }
        ],
        "name": "AccrueInterest",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "minter",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "mintAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "mintTokens",
            "type": "uint256"
          }
        ],
        "name": "Mint",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "redeemer",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "redeemAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "redeemTokens",
            "type": "uint256"
          }
        ],
        "name": "Redeem",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "borrower",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "borrowAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "accountBorrows",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "totalBorrows",
            "type": "uint256"
          }
        ],
        "name": "Borrow",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "payer",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "borrower",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "repayAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "accountBorrows",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "totalBorrows",
            "type": "uint256"
          }
        ],
        "name": "RepayBorrow",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "liquidator",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "borrower",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "repayAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "cTokenCollateral",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "seizeTokens",
            "type": "uint256"
          }
        ],
        "name": "LiquidateBorrow",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "oldPendingAdmin",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "newPendingAdmin",
            "type": "address"
          }
        ],
        "name": "NewPendingAdmin",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "oldAdmin",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "newAdmin",
            "type": "address"
          }
        ],
        "name": "NewAdmin",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "oldComptroller",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "newComptroller",
            "type": "address"
          }
        ],
        "name": "NewComptroller",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "oldInterestRateModel",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "newInterestRateModel",
            "type": "address"
          }
        ],
        "name": "NewMarketInterestRateModel",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "oldReserveFactorMantissa",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "newReserveFactorMantissa",
            "type": "uint256"
          }
        ],
        "name": "NewReserveFactor",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "admin",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "reduceAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "newTotalReserves",
            "type": "uint256"
          }
        ],
        "name": "ReservesReduced",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "error",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "info",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "detail",
            "type": "uint256"
          }
        ],
        "name": "Failure",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "to",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "spender",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      }
    ]
  },
  "0x158079ee67fce2f58472a96584a73c7ab9ac95c1": {
    "0xa0712d68": {
      "plugin": "Compound",
      "serialized_data": "08436f6d706f756e64158079ee67fce2f58472a96584a73c7ab9ac95c1a0712d68",
      "signature": "304402202a28ff715fbe2c837228469e721344765302561e589f77b3875fc1baef0984cd02206532153849fc47e62a59eb417b7b5eb317bde061736f0710e07fcf1e5a2b7459"
    },
    "0xdb006a75": {
      "plugin": "Compound",
      "serialized_data": "08436f6d706f756e64158079ee67fce2f58472a96584a73c7ab9ac95c1db006a75",
      "signature": "304402203218be07a366cd322ef13096b6b310118072e70bcebca873d8d2f3f201e8426c022059aa2f4856d9505b831a80a453ecd4bddc51a470e2c217ded112d6050428931b"
    },
    "0x852a12e3": {
      "plugin": "Compound",
      "serialized_data": "08436f6d706f756e64158079ee67fce2f58472a96584a73c7ab9ac95c1852a12e3",
      "signature": "304502210080d4322e5d45f5d5e8912f8d18d554a6ebbe883e464e04294113928e26e42028022062003bed2bb6042d65234242b3a9bf14d22e8e99398ff61e4c8a897b159bd78a"
    },
    "abi": [
      {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "spender",
            "type": "address"
          },
          {
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "repayAmount",
            "type": "uint256"
          }
        ],
        "name": "repayBorrow",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "reserveFactorMantissa",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "account",
            "type": "address"
          }
        ],
        "name": "borrowBalanceCurrent",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "exchangeRateStored",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "src",
            "type": "address"
          },
          {
            "name": "dst",
            "type": "address"
          },
          {
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "borrower",
            "type": "address"
          },
          {
            "name": "repayAmount",
            "type": "uint256"
          }
        ],
        "name": "repayBorrowBehalf",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "pendingAdmin",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "balanceOfUnderlying",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getCash",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "newComptroller",
            "type": "address"
          }
        ],
        "name": "_setComptroller",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "totalBorrows",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "comptroller",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "reduceAmount",
            "type": "uint256"
          }
        ],
        "name": "_reduceReserves",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "initialExchangeRateMantissa",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "accrualBlockNumber",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "underlying",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "totalBorrowsCurrent",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "redeemAmount",
            "type": "uint256"
          }
        ],
        "name": "redeemUnderlying",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "totalReserves",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "account",
            "type": "address"
          }
        ],
        "name": "borrowBalanceStored",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "mintAmount",
            "type": "uint256"
          }
        ],
        "name": "mint",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "accrueInterest",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "dst",
            "type": "address"
          },
          {
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "transfer",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "borrowIndex",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "supplyRatePerBlock",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "liquidator",
            "type": "address"
          },
          {
            "name": "borrower",
            "type": "address"
          },
          {
            "name": "seizeTokens",
            "type": "uint256"
          }
        ],
        "name": "seize",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "newPendingAdmin",
            "type": "address"
          }
        ],
        "name": "_setPendingAdmin",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "exchangeRateCurrent",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "account",
            "type": "address"
          }
        ],
        "name": "getAccountSnapshot",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          },
          {
            "name": "",
            "type": "uint256"
          },
          {
            "name": "",
            "type": "uint256"
          },
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "borrowAmount",
            "type": "uint256"
          }
        ],
        "name": "borrow",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "redeemTokens",
            "type": "uint256"
          }
        ],
        "name": "redeem",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "owner",
            "type": "address"
          },
          {
            "name": "spender",
            "type": "address"
          }
        ],
        "name": "allowance",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "_acceptAdmin",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "newInterestRateModel",
            "type": "address"
          }
        ],
        "name": "_setInterestRateModel",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "interestRateModel",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "borrower",
            "type": "address"
          },
          {
            "name": "repayAmount",
            "type": "uint256"
          },
          {
            "name": "cTokenCollateral",
            "type": "address"
          }
        ],
        "name": "liquidateBorrow",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "admin",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "borrowRatePerBlock",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "newReserveFactorMantissa",
            "type": "uint256"
          }
        ],
        "name": "_setReserveFactor",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "isCToken",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "name": "underlying_",
            "type": "address"
          },
          {
            "name": "comptroller_",
            "type": "address"
          },
          {
            "name": "interestRateModel_",
            "type": "address"
          },
          {
            "name": "initialExchangeRateMantissa_",
            "type": "uint256"
          },
          {
            "name": "name_",
            "type": "string"
          },
          {
            "name": "symbol_",
            "type": "string"
          },
          {
            "name": "decimals_",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "interestAccumulated",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "borrowIndex",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "totalBorrows",
            "type": "uint256"
          }
        ],
        "name": "AccrueInterest",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "minter",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "mintAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "mintTokens",
            "type": "uint256"
          }
        ],
        "name": "Mint",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "redeemer",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "redeemAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "redeemTokens",
            "type": "uint256"
          }
        ],
        "name": "Redeem",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "borrower",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "borrowAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "accountBorrows",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "totalBorrows",
            "type": "uint256"
          }
        ],
        "name": "Borrow",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "payer",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "borrower",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "repayAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "accountBorrows",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "totalBorrows",
            "type": "uint256"
          }
        ],
        "name": "RepayBorrow",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "liquidator",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "borrower",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "repayAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "cTokenCollateral",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "seizeTokens",
            "type": "uint256"
          }
        ],
        "name": "LiquidateBorrow",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "oldPendingAdmin",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "newPendingAdmin",
            "type": "address"
          }
        ],
        "name": "NewPendingAdmin",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "oldAdmin",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "newAdmin",
            "type": "address"
          }
        ],
        "name": "NewAdmin",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "oldComptroller",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "newComptroller",
            "type": "address"
          }
        ],
        "name": "NewComptroller",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "oldInterestRateModel",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "newInterestRateModel",
            "type": "address"
          }
        ],
        "name": "NewMarketInterestRateModel",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "oldReserveFactorMantissa",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "newReserveFactorMantissa",
            "type": "uint256"
          }
        ],
        "name": "NewReserveFactor",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "admin",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "reduceAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "newTotalReserves",
            "type": "uint256"
          }
        ],
        "name": "ReservesReduced",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "error",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "info",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "detail",
            "type": "uint256"
          }
        ],
        "name": "Failure",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "to",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "spender",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      }
    ]
  },
  "0xf5dce57282a584d2746faf1593d3121fcac444dc": {
    "0xa0712d68": {
      "plugin": "Compound",
      "serialized_data": "08436f6d706f756e64f5dce57282a584d2746faf1593d3121fcac444dca0712d68",
      "signature": "304402200f285b98614526c25c2fd6d8a74e41b6b3bf24846bd7486dee7dd12634e09cc6022064b1281775fe296d1df4dc99427b5dc57a3e82c06e4203f7ad04ea9ff0b7b22c"
    },
    "0xdb006a75": {
      "plugin": "Compound",
      "serialized_data": "08436f6d706f756e64f5dce57282a584d2746faf1593d3121fcac444dcdb006a75",
      "signature": "30440220667a2c0546fa49ac9d86c50075502aa79f082aaeae82061ddfb5453497cae186022006d8107b6e333eca5e3393f9b38818112b698c16465c846fd46c269fd6f33e03"
    },
    "0x852a12e3": {
      "plugin": "Compound",
      "serialized_data": "08436f6d706f756e64f5dce57282a584d2746faf1593d3121fcac444dc852a12e3",
      "signature": "304402202ab26883dfd1150deeead12ae6b1d618f10ff907e95a9827ca451aaff6655bea0220510a216d74ea688ef5b89f32a001c31f64d7efd038ee176760976e8f7d9f7b52"
    },
    "abi": [
      {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "spender",
            "type": "address"
          },
          {
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "repayAmount",
            "type": "uint256"
          }
        ],
        "name": "repayBorrow",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "reserveFactorMantissa",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "account",
            "type": "address"
          }
        ],
        "name": "borrowBalanceCurrent",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "exchangeRateStored",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "src",
            "type": "address"
          },
          {
            "name": "dst",
            "type": "address"
          },
          {
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "borrower",
            "type": "address"
          },
          {
            "name": "repayAmount",
            "type": "uint256"
          }
        ],
        "name": "repayBorrowBehalf",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "pendingAdmin",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "balanceOfUnderlying",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getCash",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "newComptroller",
            "type": "address"
          }
        ],
        "name": "_setComptroller",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "totalBorrows",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "comptroller",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "reduceAmount",
            "type": "uint256"
          }
        ],
        "name": "_reduceReserves",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "initialExchangeRateMantissa",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "accrualBlockNumber",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "underlying",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "totalBorrowsCurrent",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "redeemAmount",
            "type": "uint256"
          }
        ],
        "name": "redeemUnderlying",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "totalReserves",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "account",
            "type": "address"
          }
        ],
        "name": "borrowBalanceStored",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "mintAmount",
            "type": "uint256"
          }
        ],
        "name": "mint",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "accrueInterest",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "dst",
            "type": "address"
          },
          {
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "transfer",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "borrowIndex",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "supplyRatePerBlock",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "liquidator",
            "type": "address"
          },
          {
            "name": "borrower",
            "type": "address"
          },
          {
            "name": "seizeTokens",
            "type": "uint256"
          }
        ],
        "name": "seize",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "newPendingAdmin",
            "type": "address"
          }
        ],
        "name": "_setPendingAdmin",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "exchangeRateCurrent",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "account",
            "type": "address"
          }
        ],
        "name": "getAccountSnapshot",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          },
          {
            "name": "",
            "type": "uint256"
          },
          {
            "name": "",
            "type": "uint256"
          },
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "borrowAmount",
            "type": "uint256"
          }
        ],
        "name": "borrow",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "redeemTokens",
            "type": "uint256"
          }
        ],
        "name": "redeem",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "owner",
            "type": "address"
          },
          {
            "name": "spender",
            "type": "address"
          }
        ],
        "name": "allowance",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "_acceptAdmin",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "newInterestRateModel",
            "type": "address"
          }
        ],
        "name": "_setInterestRateModel",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "interestRateModel",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "borrower",
            "type": "address"
          },
          {
            "name": "repayAmount",
            "type": "uint256"
          },
          {
            "name": "cTokenCollateral",
            "type": "address"
          }
        ],
        "name": "liquidateBorrow",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "admin",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "borrowRatePerBlock",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "newReserveFactorMantissa",
            "type": "uint256"
          }
        ],
        "name": "_setReserveFactor",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "isCToken",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "name": "underlying_",
            "type": "address"
          },
          {
            "name": "comptroller_",
            "type": "address"
          },
          {
            "name": "interestRateModel_",
            "type": "address"
          },
          {
            "name": "initialExchangeRateMantissa_",
            "type": "uint256"
          },
          {
            "name": "name_",
            "type": "string"
          },
          {
            "name": "symbol_",
            "type": "string"
          },
          {
            "name": "decimals_",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "interestAccumulated",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "borrowIndex",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "totalBorrows",
            "type": "uint256"
          }
        ],
        "name": "AccrueInterest",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "minter",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "mintAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "mintTokens",
            "type": "uint256"
          }
        ],
        "name": "Mint",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "redeemer",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "redeemAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "redeemTokens",
            "type": "uint256"
          }
        ],
        "name": "Redeem",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "borrower",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "borrowAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "accountBorrows",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "totalBorrows",
            "type": "uint256"
          }
        ],
        "name": "Borrow",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "payer",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "borrower",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "repayAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "accountBorrows",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "totalBorrows",
            "type": "uint256"
          }
        ],
        "name": "RepayBorrow",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "liquidator",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "borrower",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "repayAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "cTokenCollateral",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "seizeTokens",
            "type": "uint256"
          }
        ],
        "name": "LiquidateBorrow",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "oldPendingAdmin",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "newPendingAdmin",
            "type": "address"
          }
        ],
        "name": "NewPendingAdmin",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "oldAdmin",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "newAdmin",
            "type": "address"
          }
        ],
        "name": "NewAdmin",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "oldComptroller",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "newComptroller",
            "type": "address"
          }
        ],
        "name": "NewComptroller",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "oldInterestRateModel",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "newInterestRateModel",
            "type": "address"
          }
        ],
        "name": "NewMarketInterestRateModel",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "oldReserveFactorMantissa",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "newReserveFactorMantissa",
            "type": "uint256"
          }
        ],
        "name": "NewReserveFactor",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "admin",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "reduceAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "newTotalReserves",
            "type": "uint256"
          }
        ],
        "name": "ReservesReduced",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "error",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "info",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "detail",
            "type": "uint256"
          }
        ],
        "name": "Failure",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "to",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "spender",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      }
    ]
  },
  "0x35a18000230da775cac24873d00ff85bccded550": {
    "0xa0712d68": {
      "plugin": "Compound",
      "serialized_data": "08436f6d706f756e6435a18000230da775cac24873d00ff85bccded550a0712d68",
      "signature": "3044022022a474f1737b92b493358e7df6adac8614c7672b3d00a4e926b84651159de7fc02202676fdd5e2b4645275ce6f83b3ae5a1af7688d49c1ad311f2b99a5c28190a306"
    },
    "0xdb006a75": {
      "plugin": "Compound",
      "serialized_data": "08436f6d706f756e6435a18000230da775cac24873d00ff85bccded550db006a75",
      "signature": "3044022006bbedf0ace84001e8fa6b0e352c17e94b82c1db5229d30918de4e2e9633092602206021f2ebcd09b6147314bf859b776dd7697e9ca6f57b3d1ecccff327da28c637"
    },
    "0x852a12e3": {
      "plugin": "Compound",
      "serialized_data": "08436f6d706f756e6435a18000230da775cac24873d00ff85bccded550852a12e3",
      "signature": "3045022100a77522a53fbbfa302c32c3c478da986e81b4baddfb1459af83829e98afc95ebf022069e52b2377f5c5d6b3e4c3e6e0aa4fa2fe13247b1c8c4d2b846b9b67d577bd01"
    },
    "abi": [
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "underlying_",
            "type": "address"
          },
          {
            "internalType": "contract ComptrollerInterface",
            "name": "comptroller_",
            "type": "address"
          },
          {
            "internalType": "contract InterestRateModel",
            "name": "interestRateModel_",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "initialExchangeRateMantissa_",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "name_",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "symbol_",
            "type": "string"
          },
          {
            "internalType": "uint8",
            "name": "decimals_",
            "type": "uint8"
          },
          {
            "internalType": "address payable",
            "name": "admin_",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "implementation_",
            "type": "address"
          },
          {
            "internalType": "bytes",
            "name": "becomeImplementationData",
            "type": "bytes"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "cashPrior",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "interestAccumulated",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "borrowIndex",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "totalBorrows",
            "type": "uint256"
          }
        ],
        "name": "AccrueInterest",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "borrower",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "borrowAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "accountBorrows",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "totalBorrows",
            "type": "uint256"
          }
        ],
        "name": "Borrow",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "error",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "info",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "detail",
            "type": "uint256"
          }
        ],
        "name": "Failure",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "liquidator",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "borrower",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "repayAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "cTokenCollateral",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "seizeTokens",
            "type": "uint256"
          }
        ],
        "name": "LiquidateBorrow",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "minter",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "mintAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "mintTokens",
            "type": "uint256"
          }
        ],
        "name": "Mint",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "oldAdmin",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "newAdmin",
            "type": "address"
          }
        ],
        "name": "NewAdmin",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "contract ComptrollerInterface",
            "name": "oldComptroller",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "contract ComptrollerInterface",
            "name": "newComptroller",
            "type": "address"
          }
        ],
        "name": "NewComptroller",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "oldImplementation",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "newImplementation",
            "type": "address"
          }
        ],
        "name": "NewImplementation",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "contract InterestRateModel",
            "name": "oldInterestRateModel",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "contract InterestRateModel",
            "name": "newInterestRateModel",
            "type": "address"
          }
        ],
        "name": "NewMarketInterestRateModel",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "oldPendingAdmin",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "newPendingAdmin",
            "type": "address"
          }
        ],
        "name": "NewPendingAdmin",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "oldReserveFactorMantissa",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "newReserveFactorMantissa",
            "type": "uint256"
          }
        ],
        "name": "NewReserveFactor",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "redeemer",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "redeemAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "redeemTokens",
            "type": "uint256"
          }
        ],
        "name": "Redeem",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "payer",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "borrower",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "repayAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "accountBorrows",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "totalBorrows",
            "type": "uint256"
          }
        ],
        "name": "RepayBorrow",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "benefactor",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "addAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "newTotalReserves",
            "type": "uint256"
          }
        ],
        "name": "ReservesAdded",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "admin",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "reduceAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "newTotalReserves",
            "type": "uint256"
          }
        ],
        "name": "ReservesReduced",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "_acceptAdmin",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "uint256",
            "name": "addAmount",
            "type": "uint256"
          }
        ],
        "name": "_addReserves",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "uint256",
            "name": "reduceAmount",
            "type": "uint256"
          }
        ],
        "name": "_reduceReserves",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "contract ComptrollerInterface",
            "name": "newComptroller",
            "type": "address"
          }
        ],
        "name": "_setComptroller",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "implementation_",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "allowResign",
            "type": "bool"
          },
          {
            "internalType": "bytes",
            "name": "becomeImplementationData",
            "type": "bytes"
          }
        ],
        "name": "_setImplementation",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "contract InterestRateModel",
            "name": "newInterestRateModel",
            "type": "address"
          }
        ],
        "name": "_setInterestRateModel",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address payable",
            "name": "newPendingAdmin",
            "type": "address"
          }
        ],
        "name": "_setPendingAdmin",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "uint256",
            "name": "newReserveFactorMantissa",
            "type": "uint256"
          }
        ],
        "name": "_setReserveFactor",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "accrualBlockNumber",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "accrueInterest",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "admin",
        "outputs": [
          {
            "internalType": "address payable",
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          }
        ],
        "name": "allowance",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "balanceOfUnderlying",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "uint256",
            "name": "borrowAmount",
            "type": "uint256"
          }
        ],
        "name": "borrow",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "borrowBalanceCurrent",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "borrowBalanceStored",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "borrowIndex",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "borrowRatePerBlock",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "comptroller",
        "outputs": [
          {
            "internalType": "contract ComptrollerInterface",
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
          {
            "internalType": "uint8",
            "name": "",
            "type": "uint8"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "name": "delegateToImplementation",
        "outputs": [
          {
            "internalType": "bytes",
            "name": "",
            "type": "bytes"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "name": "delegateToViewImplementation",
        "outputs": [
          {
            "internalType": "bytes",
            "name": "",
            "type": "bytes"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "exchangeRateCurrent",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "exchangeRateStored",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "getAccountSnapshot",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getCash",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "implementation",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "interestRateModel",
        "outputs": [
          {
            "internalType": "contract InterestRateModel",
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "isCToken",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "borrower",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "repayAmount",
            "type": "uint256"
          },
          {
            "internalType": "contract CTokenInterface",
            "name": "cTokenCollateral",
            "type": "address"
          }
        ],
        "name": "liquidateBorrow",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "uint256",
            "name": "mintAmount",
            "type": "uint256"
          }
        ],
        "name": "mint",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "pendingAdmin",
        "outputs": [
          {
            "internalType": "address payable",
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "uint256",
            "name": "redeemTokens",
            "type": "uint256"
          }
        ],
        "name": "redeem",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "uint256",
            "name": "redeemAmount",
            "type": "uint256"
          }
        ],
        "name": "redeemUnderlying",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "uint256",
            "name": "repayAmount",
            "type": "uint256"
          }
        ],
        "name": "repayBorrow",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "borrower",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "repayAmount",
            "type": "uint256"
          }
        ],
        "name": "repayBorrowBehalf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "reserveFactorMantissa",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "liquidator",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "borrower",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "seizeTokens",
            "type": "uint256"
          }
        ],
        "name": "seize",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "supplyRatePerBlock",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "totalBorrows",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "totalBorrowsCurrent",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "totalReserves",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "dst",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "transfer",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "src",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "dst",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "underlying",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }
    ]
  },
  "0x1bd435f3c054b6e901b7b108a0ab7617c808677b": {
    "0x8f00eccb": {
      "plugin": "Paraswap",
      "serialized_data": "0850617261737761701bd435f3c054b6e901b7b108a0ab7617c808677b8f00eccb",
      "signature": "30450221009a0afd48e31d3e0ec2d7c4c362b293f8893dbcacb5b705ecb92370a031bcd85e0220697a15b3eb546033a167a476c9c7cd8c24359585e6316563dadfbacaf6e3b520",
      "erc20OfInterest": [
        "data.fromToken",
        "data.path.-1.to"
      ]
    },
    "0x58b9d179": {
      "plugin": "Paraswap",
      "serialized_data": "0850617261737761701bd435f3c054b6e901b7b108a0ab7617c808677b58b9d179",
      "signature": "3045022100fcf9f8608a5907d4a350ee04cb1f4871d1fcc55928b2884179c299f269b036cd022071846ae2faef7383de89adfc91440243f5a30b7249c899a49fa4333e882e20bf",
      "erc20OfInterest": [
        "path.0",
        "path.-1"
      ]
    },
    "0x0863b7ac": {
      "plugin": "Paraswap",
      "serialized_data": "0850617261737761701bd435f3c054b6e901b7b108a0ab7617c808677b0863b7ac",
      "signature": "3045022100f6e1a922c745e244fa3ed9a865491672808ef93f492ee0410861d748c5de201f0220160d6522499f3a84fa3e744b3b81e49e129e997b28495e58671a1169b16fa777",
      "erc20OfInterest": [
        "path.0",
        "path.-1"
      ]
    },
    "0xcfc0afeb": {
      "plugin": "Paraswap",
      "serialized_data": "0850617261737761701bd435f3c054b6e901b7b108a0ab7617c808677bcfc0afeb",
      "signature": "304402201c0cbe69aac517825b3a6eb5e7251e8fd57ff93a43bd3df52c7a841818eda81b022001a10cc326efaee2463fc96e7c29739c308fb8179bd2ac37303662bae4f7705c",
      "erc20OfInterest": [
        "fromToken",
        "toToken"
      ]
    },
    "0xec1d21dd": {
      "plugin": "Paraswap",
      "serialized_data": "0850617261737761701bd435f3c054b6e901b7b108a0ab7617c808677bec1d21dd",
      "signature": "3045022100ee2b33270cf910f481e64b7781c4693e7bc86e338476d65c30c9f3d41fa4924e022079fc72cc69954f5ab1949e7d2f3023948f10dc94c9455999eb2ef38ac25fe33d",
      "erc20OfInterest": [
        "data.fromToken",
        "data.path.0.path.-1.to"
      ]
    },
    "0xf9355f72": {
      "plugin": "Paraswap",
      "serialized_data": "0850617261737761701bd435f3c054b6e901b7b108a0ab7617c808677bf9355f72",
      "signature": "304502210083e27fb14f09dc5e52a3ab9374ff39bf5cfd1fa373f957f675f122b74a867fb202202d6e107b219ea246b8c51f19df738c4968974d17b0ee128e8a44de9254507678",
      "erc20OfInterest": [
        "path.0",
        "path.-1"
      ]
    },
    "0x33635226": {
      "plugin": "Paraswap",
      "serialized_data": "0850617261737761701bd435f3c054b6e901b7b108a0ab7617c808677b33635226",
      "signature": "3044022065ca71afa7794dfe2734a30dc898e1c68c63c88ff0f6ebda231bdc3142af95400220036ed1ce1d692602cfe3cd8f242343e46fdb4a65fd8e4336b50ffa8df630ff60",
      "erc20OfInterest": [
        "path.0",
        "path.-1"
      ]
    },
    "0xa27e8b6b": {
      "plugin": "Paraswap",
      "serialized_data": "0850617261737761701bd435f3c054b6e901b7b108a0ab7617c808677ba27e8b6b",
      "signature": "304402200f2f9a1cba30bc4b7795003a311095a8ce4820416e7899659874acec47369a6c02205efddb555434ece84b42ea3dcc53b01d8eec2c212fe0f5af057546f487a8429c",
      "erc20OfInterest": [
        "fromToken",
        "toToken"
      ]
    },
    "0xf95a49eb": {
      "plugin": "Paraswap",
      "serialized_data": "0850617261737761701bd435f3c054b6e901b7b108a0ab7617c808677bf95a49eb",
      "signature": "304402201e93873c5d1c7e07ae016757fd21f4c97bdfd4bf60e35f214e0f9e174b0f3fc80220639ff1e38daad2c7f3a5f4cafb020ebcc867f10be4c4a465e342ae791fab0c24",
      "erc20OfInterest": [
        "data.fromToken",
        "data.toToken"
      ]
    },
    "abi": [
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "adapter",
            "type": "address"
          }
        ],
        "name": "AdapterInitialized",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "initiator",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "beneficiary",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "srcToken",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "destToken",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "srcAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "receivedAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "string",
            "name": "referrer",
            "type": "string"
          }
        ],
        "name": "Bought",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "fee",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "partnerShare",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "paraswapShare",
            "type": "uint256"
          }
        ],
        "name": "FeeTaken",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "initiator",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "beneficiary",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "srcToken",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "destToken",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "srcAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "receivedAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "expectedAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "string",
            "name": "referrer",
            "type": "string"
          }
        ],
        "name": "Swapped",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "token",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "fromToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "toToken",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "fromAmount",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "toAmount",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "beneficiary",
                "type": "address"
              },
              {
                "internalType": "string",
                "name": "referrer",
                "type": "string"
              },
              {
                "internalType": "bool",
                "name": "useReduxToken",
                "type": "bool"
              },
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "exchange",
                    "type": "address"
                  },
                  {
                    "internalType": "address",
                    "name": "targetExchange",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "fromAmount",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "toAmount",
                    "type": "uint256"
                  },
                  {
                    "internalType": "bytes",
                    "name": "payload",
                    "type": "bytes"
                  },
                  {
                    "internalType": "uint256",
                    "name": "networkFee",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct Utils.BuyRoute[]",
                "name": "route",
                "type": "tuple[]"
              }
            ],
            "internalType": "struct Utils.BuyData",
            "name": "data",
            "type": "tuple"
          }
        ],
        "name": "buy",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "amountInMax",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "amountOut",
            "type": "uint256"
          },
          {
            "internalType": "address[]",
            "name": "path",
            "type": "address[]"
          },
          {
            "internalType": "uint8",
            "name": "referrer",
            "type": "uint8"
          }
        ],
        "name": "buyOnUniswap",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "factory",
            "type": "address"
          },
          {
            "internalType": "bytes32",
            "name": "initCode",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "amountInMax",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "amountOut",
            "type": "uint256"
          },
          {
            "internalType": "address[]",
            "name": "path",
            "type": "address[]"
          },
          {
            "internalType": "uint8",
            "name": "referrer",
            "type": "uint8"
          }
        ],
        "name": "buyOnUniswapFork",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "uniswapProxy",
            "type": "address"
          }
        ],
        "name": "changeUniswapProxy",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "confirmUniswapProxyChange",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getChangeRequestedBlock",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "key",
            "type": "bytes32"
          }
        ],
        "name": "getData",
        "outputs": [
          {
            "internalType": "bytes",
            "name": "",
            "type": "bytes"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getFeeWallet",
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
        "name": "getPartnerRegistry",
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
        "name": "getPendingUniswapProxy",
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
        "name": "getTimeLock",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getTokenTransferProxy",
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
        "name": "getUniswapProxy",
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
        "name": "getVersion",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getWhitelistAddress",
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
            "internalType": "address",
            "name": "whitelist",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "reduxToken",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "partnerRegistry",
            "type": "address"
          },
          {
            "internalType": "address payable",
            "name": "feeWallet",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "uniswapProxy",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "timelock",
            "type": "uint256"
          }
        ],
        "name": "initialize",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "adapter",
            "type": "address"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "name": "initializeAdapter",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "key",
            "type": "bytes32"
          }
        ],
        "name": "isInitialized",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "fromToken",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "fromAmount",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "toAmount",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "expectedAmount",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "beneficiary",
                "type": "address"
              },
              {
                "internalType": "string",
                "name": "referrer",
                "type": "string"
              },
              {
                "internalType": "bool",
                "name": "useReduxToken",
                "type": "bool"
              },
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "fromAmountPercent",
                    "type": "uint256"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                      },
                      {
                        "internalType": "uint256",
                        "name": "totalNetworkFee",
                        "type": "uint256"
                      },
                      {
                        "components": [
                          {
                            "internalType": "address payable",
                            "name": "exchange",
                            "type": "address"
                          },
                          {
                            "internalType": "address",
                            "name": "targetExchange",
                            "type": "address"
                          },
                          {
                            "internalType": "uint256",
                            "name": "percent",
                            "type": "uint256"
                          },
                          {
                            "internalType": "bytes",
                            "name": "payload",
                            "type": "bytes"
                          },
                          {
                            "internalType": "uint256",
                            "name": "networkFee",
                            "type": "uint256"
                          }
                        ],
                        "internalType": "struct Utils.Route[]",
                        "name": "routes",
                        "type": "tuple[]"
                      }
                    ],
                    "internalType": "struct Utils.Path[]",
                    "name": "path",
                    "type": "tuple[]"
                  }
                ],
                "internalType": "struct Utils.MegaSwapPath[]",
                "name": "path",
                "type": "tuple[]"
              }
            ],
            "internalType": "struct Utils.MegaSwapSellData",
            "name": "data",
            "type": "tuple"
          }
        ],
        "name": "megaSwap",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "fromToken",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "fromAmount",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "toAmount",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "expectedAmount",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "beneficiary",
                "type": "address"
              },
              {
                "internalType": "string",
                "name": "referrer",
                "type": "string"
              },
              {
                "internalType": "bool",
                "name": "useReduxToken",
                "type": "bool"
              },
              {
                "components": [
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "totalNetworkFee",
                    "type": "uint256"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "exchange",
                        "type": "address"
                      },
                      {
                        "internalType": "address",
                        "name": "targetExchange",
                        "type": "address"
                      },
                      {
                        "internalType": "uint256",
                        "name": "percent",
                        "type": "uint256"
                      },
                      {
                        "internalType": "bytes",
                        "name": "payload",
                        "type": "bytes"
                      },
                      {
                        "internalType": "uint256",
                        "name": "networkFee",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct Utils.Route[]",
                    "name": "routes",
                    "type": "tuple[]"
                  }
                ],
                "internalType": "struct Utils.Path[]",
                "name": "path",
                "type": "tuple[]"
              }
            ],
            "internalType": "struct Utils.SellData",
            "name": "data",
            "type": "tuple"
          }
        ],
        "name": "multiSwap",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "owner",
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
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address payable",
            "name": "feeWallet",
            "type": "address"
          }
        ],
        "name": "setFeeWallet",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "partnerRegistry",
            "type": "address"
          }
        ],
        "name": "setPartnerRegistry",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "whitelisted",
            "type": "address"
          }
        ],
        "name": "setWhitelistAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "fromToken",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "toToken",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "fromAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "toAmount",
            "type": "uint256"
          },
          {
            "internalType": "address[]",
            "name": "callees",
            "type": "address[]"
          },
          {
            "internalType": "bytes",
            "name": "exchangeData",
            "type": "bytes"
          },
          {
            "internalType": "uint256[]",
            "name": "startIndexes",
            "type": "uint256[]"
          },
          {
            "internalType": "uint256[]",
            "name": "values",
            "type": "uint256[]"
          },
          {
            "internalType": "address payable",
            "name": "beneficiary",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "referrer",
            "type": "string"
          },
          {
            "internalType": "bool",
            "name": "useReduxToken",
            "type": "bool"
          }
        ],
        "name": "simplBuy",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "fromToken",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "toToken",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "fromAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "toAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "expectedAmount",
            "type": "uint256"
          },
          {
            "internalType": "address[]",
            "name": "callees",
            "type": "address[]"
          },
          {
            "internalType": "bytes",
            "name": "exchangeData",
            "type": "bytes"
          },
          {
            "internalType": "uint256[]",
            "name": "startIndexes",
            "type": "uint256[]"
          },
          {
            "internalType": "uint256[]",
            "name": "values",
            "type": "uint256[]"
          },
          {
            "internalType": "address payable",
            "name": "beneficiary",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "referrer",
            "type": "string"
          },
          {
            "internalType": "bool",
            "name": "useReduxToken",
            "type": "bool"
          }
        ],
        "name": "simpleSwap",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "receivedAmount",
            "type": "uint256"
          }
        ],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "amountIn",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "amountOutMin",
            "type": "uint256"
          },
          {
            "internalType": "address[]",
            "name": "path",
            "type": "address[]"
          },
          {
            "internalType": "uint8",
            "name": "referrer",
            "type": "uint8"
          }
        ],
        "name": "swapOnUniswap",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "factory",
            "type": "address"
          },
          {
            "internalType": "bytes32",
            "name": "initCode",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "amountIn",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "amountOutMin",
            "type": "uint256"
          },
          {
            "internalType": "address[]",
            "name": "path",
            "type": "address[]"
          },
          {
            "internalType": "uint8",
            "name": "referrer",
            "type": "uint8"
          }
        ],
        "name": "swapOnUniswapFork",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "token",
            "type": "address"
          },
          {
            "internalType": "address payable",
            "name": "destination",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "transferTokens",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "contract IWETH",
            "name": "token",
            "type": "address"
          }
        ],
        "name": "withdrawAllWETH",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "stateMutability": "payable",
        "type": "receive"
      }
    ]
  }
}

/***/ }),

/***/ "HRdN":
/*!*********************************************************!*\
  !*** ./node_modules/@ledgerhq/hw-app-eth/lib-es/Eth.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Eth; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "pn0g");
/* harmony import */ var _ledgerhq_logs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ledgerhq/logs */ "vULT");
/* harmony import */ var _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ledgerhq/errors */ "qPxQ");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bignumber.js */ "kB5k");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ "wDBh");
/* harmony import */ var _erc20__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./erc20 */ "Pm4I");
/* harmony import */ var _contracts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contracts */ "CS7j");
/********************************************************************************
 *   Ledger Node JS API
 *   (c) 2016-2017 Ledger
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 ********************************************************************************/
// FIXME drop:







const starkQuantizationTypeMap = {
  eth: 1,
  erc20: 2,
  erc721: 3,
  erc20mintable: 4,
  erc721mintable: 5
};

function hexBuffer(str) {
  return Buffer.from(str.startsWith("0x") ? str.slice(2) : str, "hex");
}

function maybeHexBuffer(str) {
  if (!str) return null;
  return hexBuffer(str);
}

const remapTransactionRelatedErrors = e => {
  if (e && e.statusCode === 0x6a80) {
    return new _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_2__["EthAppPleaseEnableContractData"]("Please enable Contract data on the Ethereum app Settings");
  }

  return e;
};
/**
 * Ethereum API
 *
 * @example
 * import Eth from "@ledgerhq/hw-app-eth";
 * const eth = new Eth(transport)
 */


class Eth {
  constructor(transport, scrambleKey = "w0w") {
    this.transport = void 0;
    this.transport = transport;
    transport.decorateAppAPIMethods(this, ["getAddress", "provideERC20TokenInformation", "signTransaction", "signPersonalMessage", "getAppConfiguration", "signEIP712HashedMessage", "starkGetPublicKey", "starkSignOrder", "starkSignOrder_v2", "starkSignTransfer", "starkSignTransfer_v2", "starkProvideQuantum", "starkProvideQuantum_v2", "starkUnsafeSign", "eth2GetPublicKey", "eth2SetWithdrawalIndex", "setExternalPlugin"], scrambleKey);
  }
  /**
   * get Ethereum address for a given BIP 32 path.
   * @param path a path in BIP 32 format
   * @option boolDisplay optionally enable or not the display
   * @option boolChaincode optionally enable or not the chaincode request
   * @return an object with a publicKey, address and (optionally) chainCode
   * @example
   * eth.getAddress("44'/60'/0'/0/0").then(o => o.address)
   */


  getAddress(path, boolDisplay, boolChaincode) {
    let paths = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["splitPath"])(path);
    let buffer = Buffer.alloc(1 + paths.length * 4);
    buffer[0] = paths.length;
    paths.forEach((element, index) => {
      buffer.writeUInt32BE(element, 1 + 4 * index);
    });
    return this.transport.send(0xe0, 0x02, boolDisplay ? 0x01 : 0x00, boolChaincode ? 0x01 : 0x00, buffer).then(response => {
      let result = {};
      let publicKeyLength = response[0];
      let addressLength = response[1 + publicKeyLength];
      result.publicKey = response.slice(1, 1 + publicKeyLength).toString("hex");
      result.address = "0x" + response.slice(1 + publicKeyLength + 1, 1 + publicKeyLength + 1 + addressLength).toString("ascii");

      if (boolChaincode) {
        result.chainCode = response.slice(1 + publicKeyLength + 1 + addressLength, 1 + publicKeyLength + 1 + addressLength + 32).toString("hex");
      }

      return result;
    });
  }
  /**
   * This commands provides a trusted description of an ERC 20 token
   * to associate a contract address with a ticker and number of decimals.
   *
   * It shall be run immediately before performing a transaction involving a contract
   * calling this contract address to display the proper token information to the user if necessary.
   *
   * @param {*} info: a blob from "erc20.js" utilities that contains all token information.
   *
   * @example
   * import { byContractAddress } from "@ledgerhq/hw-app-eth/erc20"
   * const zrxInfo = byContractAddress("0xe41d2489571d322189246dafa5ebde1f4699f498")
   * if (zrxInfo) await appEth.provideERC20TokenInformation(zrxInfo)
   * const signed = await appEth.signTransaction(path, rawTxHex)
   */


  provideERC20TokenInformation({
    data
  }) {
    return provideERC20TokenInformation(this.transport, data);
  }
  /**
   * You can sign a transaction and retrieve v, r, s given the raw transaction and the BIP 32 path of the account to sign
   * @example
   eth.signTransaction("44'/60'/0'/0/0", "e8018504e3b292008252089428ee52a8f3d6e5d15f8b131996950d7f296c7952872bd72a2487400080").then(result => ...)
   */


  async signTransaction(path, rawTxHex) {
    let paths = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["splitPath"])(path);
    let offset = 0;
    let rawTx = Buffer.from(rawTxHex, "hex");
    let toSend = [];
    let response; // Check if the TX is encoded following EIP 155

    let rlpTx = ethers__WEBPACK_IMPORTED_MODULE_4__["ethers"].utils.RLP.decode("0x" + rawTxHex).map(hex => Buffer.from(hex.slice(2), "hex"));
    let rlpOffset = 0;
    let chainIdPrefix = "";

    if (rlpTx.length > 6) {
      let rlpVrs = Buffer.from(ethers__WEBPACK_IMPORTED_MODULE_4__["ethers"].utils.RLP.encode(rlpTx.slice(-3)).slice(2), "hex");
      rlpOffset = rawTx.length - (rlpVrs.length - 1); // First byte > 0xf7 means the length of the list length doesn't fit in a single byte.

      if (rlpVrs[0] > 0xf7) {
        // Increment rlpOffset to account for that extra byte.
        rlpOffset++; // Compute size of the list length.

        let sizeOfListLen = rlpVrs[0] - 0xf7; // Increase rlpOffset by the size of the list length.

        rlpOffset += sizeOfListLen - 1;
      }

      const chainIdSrc = rlpTx[6];
      const chainIdBuf = Buffer.alloc(4);
      chainIdSrc.copy(chainIdBuf, 4 - chainIdSrc.length);
      chainIdPrefix = (chainIdBuf.readUInt32BE(0) * 2 + 35).toString(16).slice(0, -2); // Drop the low byte, that comes from the ledger.

      if (chainIdPrefix.length % 2 === 1) {
        chainIdPrefix = "0" + chainIdPrefix;
      }
    }

    while (offset !== rawTx.length) {
      let maxChunkSize = offset === 0 ? 150 - 1 - paths.length * 4 : 150;
      let chunkSize = offset + maxChunkSize > rawTx.length ? rawTx.length - offset : maxChunkSize;

      if (rlpOffset != 0 && offset + chunkSize == rlpOffset) {
        // Make sure that the chunk doesn't end right on the EIP 155 marker if set
        chunkSize--;
      }

      let buffer = Buffer.alloc(offset === 0 ? 1 + paths.length * 4 + chunkSize : chunkSize);

      if (offset === 0) {
        buffer[0] = paths.length;
        paths.forEach((element, index) => {
          buffer.writeUInt32BE(element, 1 + 4 * index);
        });
        rawTx.copy(buffer, 1 + 4 * paths.length, offset, offset + chunkSize);
      } else {
        rawTx.copy(buffer, 0, offset, offset + chunkSize);
      }

      toSend.push(buffer);
      offset += chunkSize;
    }

    rlpTx = ethers__WEBPACK_IMPORTED_MODULE_4__["ethers"].utils.RLP.decode("0x" + rawTxHex);
    const decodedTx = {
      data: rlpTx[5],
      to: rlpTx[3]
    };

    const provideForContract = async address => {
      const erc20Info = Object(_erc20__WEBPACK_IMPORTED_MODULE_5__["byContractAddress"])(address);

      if (erc20Info) {
        Object(_ledgerhq_logs__WEBPACK_IMPORTED_MODULE_1__["log"])("ethereum", "loading erc20token info for " + erc20Info.contractAddress + " (" + erc20Info.ticker + ")");
        await provideERC20TokenInformation(this.transport, erc20Info.data);
      }
    };

    if (decodedTx.data.length >= 10) {
      const selector = decodedTx.data.substring(0, 10);
      const infos = Object(_contracts__WEBPACK_IMPORTED_MODULE_6__["getInfosForContractMethod"])(decodedTx.to, selector);

      if (infos) {
        let {
          plugin,
          payload,
          signature,
          erc20OfInterest,
          abi
        } = infos;

        if (plugin) {
          Object(_ledgerhq_logs__WEBPACK_IMPORTED_MODULE_1__["log"])("ethereum", "loading plugin for " + selector);
          await setExternalPlugin(this.transport, payload, signature);
        }

        if (erc20OfInterest && erc20OfInterest.length && abi) {
          const contract = new ethers__WEBPACK_IMPORTED_MODULE_4__["ethers"].utils.Interface(abi);
          const args = contract.parseTransaction(decodedTx).args;

          for (path of erc20OfInterest) {
            const address = path.split(".").reduce((value, seg) => {
              if (seg === "-1" && Array.isArray(value)) {
                return value[value.length - 1];
              }

              return value[seg];
            }, args);
            await provideForContract(address);
          }
        }
      } else {
        Object(_ledgerhq_logs__WEBPACK_IMPORTED_MODULE_1__["log"])("ethereum", "no infos for selector " + selector);
      }

      await provideForContract(decodedTx.to);
    }

    return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["foreach"])(toSend, (data, i) => this.transport.send(0xe0, 0x04, i === 0 ? 0x00 : 0x80, 0x00, data).then(apduResponse => {
      response = apduResponse;
    })).then(() => {
      const v = chainIdPrefix + response.slice(0, 1).toString("hex");
      const r = response.slice(1, 1 + 32).toString("hex");
      const s = response.slice(1 + 32, 1 + 32 + 32).toString("hex");
      return {
        v,
        r,
        s
      };
    }, e => {
      throw remapTransactionRelatedErrors(e);
    });
  }
  /**
   */


  getAppConfiguration() {
    return this.transport.send(0xe0, 0x06, 0x00, 0x00).then(response => {
      let result = {};
      result.arbitraryDataEnabled = response[0] & 0x01;
      result.erc20ProvisioningNecessary = response[0] & 0x02;
      result.starkEnabled = response[0] & 0x04;
      result.starkv2Supported = response[0] & 0x08;
      result.version = "" + response[1] + "." + response[2] + "." + response[3];
      return result;
    });
  }
  /**
  * You can sign a message according to eth_sign RPC call and retrieve v, r, s given the message and the BIP 32 path of the account to sign.
  * @example
  eth.signPersonalMessage("44'/60'/0'/0/0", Buffer.from("test").toString("hex")).then(result => {
  var v = result['v'] - 27;
  v = v.toString(16);
  if (v.length < 2) {
    v = "0" + v;
  }
  console.log("Signature 0x" + result['r'] + result['s'] + v);
  })
   */


  signPersonalMessage(path, messageHex) {
    let paths = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["splitPath"])(path);
    let offset = 0;
    let message = Buffer.from(messageHex, "hex");
    let toSend = [];
    let response;

    while (offset !== message.length) {
      let maxChunkSize = offset === 0 ? 150 - 1 - paths.length * 4 - 4 : 150;
      let chunkSize = offset + maxChunkSize > message.length ? message.length - offset : maxChunkSize;
      let buffer = Buffer.alloc(offset === 0 ? 1 + paths.length * 4 + 4 + chunkSize : chunkSize);

      if (offset === 0) {
        buffer[0] = paths.length;
        paths.forEach((element, index) => {
          buffer.writeUInt32BE(element, 1 + 4 * index);
        });
        buffer.writeUInt32BE(message.length, 1 + 4 * paths.length);
        message.copy(buffer, 1 + 4 * paths.length + 4, offset, offset + chunkSize);
      } else {
        message.copy(buffer, 0, offset, offset + chunkSize);
      }

      toSend.push(buffer);
      offset += chunkSize;
    }

    return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["foreach"])(toSend, (data, i) => this.transport.send(0xe0, 0x08, i === 0 ? 0x00 : 0x80, 0x00, data).then(apduResponse => {
      response = apduResponse;
    })).then(() => {
      const v = response[0];
      const r = response.slice(1, 1 + 32).toString("hex");
      const s = response.slice(1 + 32, 1 + 32 + 32).toString("hex");
      return {
        v,
        r,
        s
      };
    });
  }
  /**
  * Sign a prepared message following web3.eth.signTypedData specification. The host computes the domain separator and hashStruct(message)
  * @example
  eth.signEIP712HashedMessage("44'/60'/0'/0/0", Buffer.from("0101010101010101010101010101010101010101010101010101010101010101").toString("hex"), Buffer.from("0202020202020202020202020202020202020202020202020202020202020202").toString("hex")).then(result => {
  var v = result['v'] - 27;
  v = v.toString(16);
  if (v.length < 2) {
    v = "0" + v;
  }
  console.log("Signature 0x" + result['r'] + result['s'] + v);
  })
   */


  signEIP712HashedMessage(path, domainSeparatorHex, hashStructMessageHex) {
    const domainSeparator = hexBuffer(domainSeparatorHex);
    const hashStruct = hexBuffer(hashStructMessageHex);
    let paths = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["splitPath"])(path);
    let buffer = Buffer.alloc(1 + paths.length * 4 + 32 + 32, 0);
    let offset = 0;
    buffer[0] = paths.length;
    paths.forEach((element, index) => {
      buffer.writeUInt32BE(element, 1 + 4 * index);
    });
    offset = 1 + 4 * paths.length;
    domainSeparator.copy(buffer, offset);
    offset += 32;
    hashStruct.copy(buffer, offset);
    return this.transport.send(0xe0, 0x0c, 0x00, 0x00, buffer).then(response => {
      const v = response[0];
      const r = response.slice(1, 1 + 32).toString("hex");
      const s = response.slice(1 + 32, 1 + 32 + 32).toString("hex");
      return {
        v,
        r,
        s
      };
    });
  }
  /**
   * get Stark public key for a given BIP 32 path.
   * @param path a path in BIP 32 format
   * @option boolDisplay optionally enable or not the display
   * @return the Stark public key
   */


  starkGetPublicKey(path, boolDisplay) {
    let paths = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["splitPath"])(path);
    let buffer = Buffer.alloc(1 + paths.length * 4);
    buffer[0] = paths.length;
    paths.forEach((element, index) => {
      buffer.writeUInt32BE(element, 1 + 4 * index);
    });
    return this.transport.send(0xf0, 0x02, boolDisplay ? 0x01 : 0x00, 0x00, buffer).then(response => {
      return response.slice(0, response.length - 2);
    });
  }
  /**
   * sign a Stark order
   * @param path a path in BIP 32 format
   * @option sourceTokenAddress contract address of the source token (not present for ETH)
   * @param sourceQuantization quantization used for the source token
   * @option destinationTokenAddress contract address of the destination token (not present for ETH)
   * @param destinationQuantization quantization used for the destination token
   * @param sourceVault ID of the source vault
   * @param destinationVault ID of the destination vault
   * @param amountSell amount to sell
   * @param amountBuy amount to buy
   * @param nonce transaction nonce
   * @param timestamp transaction validity timestamp
   * @return the signature
   */


  starkSignOrder(path, sourceTokenAddress, sourceQuantization, destinationTokenAddress, destinationQuantization, sourceVault, destinationVault, amountSell, amountBuy, nonce, timestamp) {
    const sourceTokenAddressHex = maybeHexBuffer(sourceTokenAddress);
    const destinationTokenAddressHex = maybeHexBuffer(destinationTokenAddress);
    let paths = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["splitPath"])(path);
    let buffer = Buffer.alloc(1 + paths.length * 4 + 20 + 32 + 20 + 32 + 4 + 4 + 8 + 8 + 4 + 4, 0);
    let offset = 0;
    buffer[0] = paths.length;
    paths.forEach((element, index) => {
      buffer.writeUInt32BE(element, 1 + 4 * index);
    });
    offset = 1 + 4 * paths.length;

    if (sourceTokenAddressHex) {
      sourceTokenAddressHex.copy(buffer, offset);
    }

    offset += 20;
    Buffer.from(sourceQuantization.toString(16).padStart(64, "0"), "hex").copy(buffer, offset);
    offset += 32;

    if (destinationTokenAddressHex) {
      destinationTokenAddressHex.copy(buffer, offset);
    }

    offset += 20;
    Buffer.from(destinationQuantization.toString(16).padStart(64, "0"), "hex").copy(buffer, offset);
    offset += 32;
    buffer.writeUInt32BE(sourceVault, offset);
    offset += 4;
    buffer.writeUInt32BE(destinationVault, offset);
    offset += 4;
    Buffer.from(amountSell.toString(16).padStart(16, "0"), "hex").copy(buffer, offset);
    offset += 8;
    Buffer.from(amountBuy.toString(16).padStart(16, "0"), "hex").copy(buffer, offset);
    offset += 8;
    buffer.writeUInt32BE(nonce, offset);
    offset += 4;
    buffer.writeUInt32BE(timestamp, offset);
    return this.transport.send(0xf0, 0x04, 0x01, 0x00, buffer).then(response => {
      const r = response.slice(1, 1 + 32).toString("hex");
      const s = response.slice(1 + 32, 1 + 32 + 32).toString("hex");
      return {
        r,
        s
      };
    });
  }
  /**
   * sign a Stark order using the Starkex V2 protocol
   * @param path a path in BIP 32 format
   * @option sourceTokenAddress contract address of the source token (not present for ETH)
   * @param sourceQuantizationType quantization type used for the source token
   * @option sourceQuantization quantization used for the source token (not present for erc 721 or mintable erc 721)
   * @option sourceMintableBlobOrTokenId mintable blob (mintable erc 20 / mintable erc 721) or token id (erc 721) associated to the source token
   * @option destinationTokenAddress contract address of the destination token (not present for ETH)
   * @param destinationQuantizationType quantization type used for the destination token
   * @option destinationQuantization quantization used for the destination token (not present for erc 721 or mintable erc 721)
   * @option destinationMintableBlobOrTokenId mintable blob (mintable erc 20 / mintable erc 721) or token id (erc 721) associated to the destination token
   * @param sourceVault ID of the source vault
   * @param destinationVault ID of the destination vault
   * @param amountSell amount to sell
   * @param amountBuy amount to buy
   * @param nonce transaction nonce
   * @param timestamp transaction validity timestamp
   * @return the signature
   */


  starkSignOrder_v2(path, sourceTokenAddress, sourceQuantizationType, sourceQuantization, sourceMintableBlobOrTokenId, destinationTokenAddress, destinationQuantizationType, destinationQuantization, destinationMintableBlobOrTokenId, sourceVault, destinationVault, amountSell, amountBuy, nonce, timestamp) {
    const sourceTokenAddressHex = maybeHexBuffer(sourceTokenAddress);
    const destinationTokenAddressHex = maybeHexBuffer(destinationTokenAddress);

    if (!(sourceQuantizationType in starkQuantizationTypeMap)) {
      throw new Error("eth.starkSignOrderv2 invalid source quantization type=" + sourceQuantizationType);
    }

    if (!(destinationQuantizationType in starkQuantizationTypeMap)) {
      throw new Error("eth.starkSignOrderv2 invalid destination quantization type=" + destinationQuantizationType);
    }

    let paths = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["splitPath"])(path);
    let buffer = Buffer.alloc(1 + paths.length * 4 + 1 + 20 + 32 + 32 + 1 + 20 + 32 + 32 + 4 + 4 + 8 + 8 + 4 + 4, 0);
    let offset = 0;
    buffer[0] = paths.length;
    paths.forEach((element, index) => {
      buffer.writeUInt32BE(element, 1 + 4 * index);
    });
    offset = 1 + 4 * paths.length;
    buffer[offset] = starkQuantizationTypeMap[sourceQuantizationType];
    offset++;

    if (sourceTokenAddressHex) {
      sourceTokenAddressHex.copy(buffer, offset);
    }

    offset += 20;

    if (sourceQuantization) {
      Buffer.from(sourceQuantization.toString(16).padStart(64, "0"), "hex").copy(buffer, offset);
    }

    offset += 32;

    if (sourceMintableBlobOrTokenId) {
      Buffer.from(sourceMintableBlobOrTokenId.toString(16).padStart(64, "0"), "hex").copy(buffer, offset);
    }

    offset += 32;
    buffer[offset] = starkQuantizationTypeMap[destinationQuantizationType];
    offset++;

    if (destinationTokenAddressHex) {
      destinationTokenAddressHex.copy(buffer, offset);
    }

    offset += 20;

    if (destinationQuantization) {
      Buffer.from(destinationQuantization.toString(16).padStart(64, "0"), "hex").copy(buffer, offset);
    }

    offset += 32;

    if (destinationMintableBlobOrTokenId) {
      Buffer.from(destinationMintableBlobOrTokenId.toString(16).padStart(64, "0"), "hex").copy(buffer, offset);
    }

    offset += 32;
    buffer.writeUInt32BE(sourceVault, offset);
    offset += 4;
    buffer.writeUInt32BE(destinationVault, offset);
    offset += 4;
    Buffer.from(amountSell.toString(16).padStart(16, "0"), "hex").copy(buffer, offset);
    offset += 8;
    Buffer.from(amountBuy.toString(16).padStart(16, "0"), "hex").copy(buffer, offset);
    offset += 8;
    buffer.writeUInt32BE(nonce, offset);
    offset += 4;
    buffer.writeUInt32BE(timestamp, offset);
    return this.transport.send(0xf0, 0x04, 0x03, 0x00, buffer).then(response => {
      const r = response.slice(1, 1 + 32).toString("hex");
      const s = response.slice(1 + 32, 1 + 32 + 32).toString("hex");
      return {
        r,
        s
      };
    });
  }
  /**
   * sign a Stark transfer
   * @param path a path in BIP 32 format
   * @option transferTokenAddress contract address of the token to be transferred (not present for ETH)
   * @param transferQuantization quantization used for the token to be transferred
   * @param targetPublicKey target Stark public key
   * @param sourceVault ID of the source vault
   * @param destinationVault ID of the destination vault
   * @param amountTransfer amount to transfer
   * @param nonce transaction nonce
   * @param timestamp transaction validity timestamp
   * @return the signature
   */


  starkSignTransfer(path, transferTokenAddress, transferQuantization, targetPublicKey, sourceVault, destinationVault, amountTransfer, nonce, timestamp) {
    const transferTokenAddressHex = maybeHexBuffer(transferTokenAddress);
    const targetPublicKeyHex = hexBuffer(targetPublicKey);
    let paths = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["splitPath"])(path);
    let buffer = Buffer.alloc(1 + paths.length * 4 + 20 + 32 + 32 + 4 + 4 + 8 + 4 + 4, 0);
    let offset = 0;
    buffer[0] = paths.length;
    paths.forEach((element, index) => {
      buffer.writeUInt32BE(element, 1 + 4 * index);
    });
    offset = 1 + 4 * paths.length;

    if (transferTokenAddressHex) {
      transferTokenAddressHex.copy(buffer, offset);
    }

    offset += 20;
    Buffer.from(transferQuantization.toString(16).padStart(64, "0"), "hex").copy(buffer, offset);
    offset += 32;
    targetPublicKeyHex.copy(buffer, offset);
    offset += 32;
    buffer.writeUInt32BE(sourceVault, offset);
    offset += 4;
    buffer.writeUInt32BE(destinationVault, offset);
    offset += 4;
    Buffer.from(amountTransfer.toString(16).padStart(16, "0"), "hex").copy(buffer, offset);
    offset += 8;
    buffer.writeUInt32BE(nonce, offset);
    offset += 4;
    buffer.writeUInt32BE(timestamp, offset);
    return this.transport.send(0xf0, 0x04, 0x02, 0x00, buffer).then(response => {
      const r = response.slice(1, 1 + 32).toString("hex");
      const s = response.slice(1 + 32, 1 + 32 + 32).toString("hex");
      return {
        r,
        s
      };
    });
  }
  /**
   * sign a Stark transfer or conditional transfer using the Starkex V2 protocol
   * @param path a path in BIP 32 format
   * @option transferTokenAddress contract address of the token to be transferred (not present for ETH)
   * @param transferQuantizationType quantization type used for the token to be transferred
   * @option transferQuantization quantization used for the token to be transferred (not present for erc 721 or mintable erc 721)
   * @option transferMintableBlobOrTokenId mintable blob (mintable erc 20 / mintable erc 721) or token id (erc 721) associated to the token to be transferred
   * @param targetPublicKey target Stark public key
   * @param sourceVault ID of the source vault
   * @param destinationVault ID of the destination vault
   * @param amountTransfer amount to transfer
   * @param nonce transaction nonce
   * @param timestamp transaction validity timestamp
   * @option conditionalTransferAddress onchain address of the condition for a conditional transfer
   * @option conditionalTransferFact fact associated to the condition for a conditional transfer
   * @return the signature
   */


  starkSignTransfer_v2(path, transferTokenAddress, transferQuantizationType, transferQuantization, transferMintableBlobOrTokenId, targetPublicKey, sourceVault, destinationVault, amountTransfer, nonce, timestamp, conditionalTransferAddress, conditionalTransferFact) {
    const transferTokenAddressHex = maybeHexBuffer(transferTokenAddress);
    const targetPublicKeyHex = hexBuffer(targetPublicKey);
    const conditionalTransferAddressHex = maybeHexBuffer(conditionalTransferAddress);

    if (!(transferQuantizationType in starkQuantizationTypeMap)) {
      throw new Error("eth.starkSignTransferv2 invalid quantization type=" + transferQuantizationType);
    }

    let paths = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["splitPath"])(path);
    let buffer = Buffer.alloc(1 + paths.length * 4 + 1 + 20 + 32 + 32 + 32 + 4 + 4 + 8 + 4 + 4 + (conditionalTransferAddressHex ? 32 + 20 : 0), 0);
    let offset = 0;
    buffer[0] = paths.length;
    paths.forEach((element, index) => {
      buffer.writeUInt32BE(element, 1 + 4 * index);
    });
    offset = 1 + 4 * paths.length;
    buffer[offset] = starkQuantizationTypeMap[transferQuantizationType];
    offset++;

    if (transferTokenAddressHex) {
      transferTokenAddressHex.copy(buffer, offset);
    }

    offset += 20;

    if (transferQuantization) {
      Buffer.from(transferQuantization.toString(16).padStart(64, "0"), "hex").copy(buffer, offset);
    }

    offset += 32;

    if (transferMintableBlobOrTokenId) {
      Buffer.from(transferMintableBlobOrTokenId.toString(16).padStart(64, "0"), "hex").copy(buffer, offset);
    }

    offset += 32;
    targetPublicKeyHex.copy(buffer, offset);
    offset += 32;
    buffer.writeUInt32BE(sourceVault, offset);
    offset += 4;
    buffer.writeUInt32BE(destinationVault, offset);
    offset += 4;
    Buffer.from(amountTransfer.toString(16).padStart(16, "0"), "hex").copy(buffer, offset);
    offset += 8;
    buffer.writeUInt32BE(nonce, offset);
    offset += 4;
    buffer.writeUInt32BE(timestamp, offset);

    if (conditionalTransferAddressHex && conditionalTransferFact) {
      offset += 4;
      Buffer.from(conditionalTransferFact.toString(16).padStart(64, "0"), "hex").copy(buffer, offset);
      offset += 32;
      conditionalTransferAddressHex.copy(buffer, offset);
    }

    return this.transport.send(0xf0, 0x04, conditionalTransferAddressHex ? 0x05 : 0x04, 0x00, buffer).then(response => {
      const r = response.slice(1, 1 + 32).toString("hex");
      const s = response.slice(1 + 32, 1 + 32 + 32).toString("hex");
      return {
        r,
        s
      };
    });
  }
  /**
   * provide quantization information before singing a deposit or withdrawal Stark powered contract call
   *
   * It shall be run following a provideERC20TokenInformation call for the given contract
   *
   * @param operationContract contract address of the token to be transferred (not present for ETH)
   * @param operationQuantization quantization used for the token to be transferred
   */


  starkProvideQuantum(operationContract, operationQuantization) {
    const operationContractHex = maybeHexBuffer(operationContract);
    let buffer = Buffer.alloc(20 + 32, 0);

    if (operationContractHex) {
      operationContractHex.copy(buffer, 0);
    }

    Buffer.from(operationQuantization.toString(16).padStart(64, "0"), "hex").copy(buffer, 20);
    return this.transport.send(0xf0, 0x08, 0x00, 0x00, buffer).then(() => true, e => {
      if (e && e.statusCode === 0x6d00) {
        // this case happen for ETH application versions not supporting Stark extensions
        return false;
      }

      throw e;
    });
  }
  /**
   * provide quantization information before singing a deposit or withdrawal Stark powered contract call using the Starkex V2 protocol
   *
   * It shall be run following a provideERC20TokenInformation call for the given contract
   *
   * @param operationContract contract address of the token to be transferred (not present for ETH)
   * @param operationQuantizationType quantization type of the token to be transferred
   * @option operationQuantization quantization used for the token to be transferred (not present for erc 721 or mintable erc 721)
   * @option operationMintableBlobOrTokenId mintable blob (mintable erc 20 / mintable erc 721) or token id (erc 721) of the token to be transferred
   */


  starkProvideQuantum_v2(operationContract, operationQuantizationType, operationQuantization, operationMintableBlobOrTokenId) {
    const operationContractHex = maybeHexBuffer(operationContract);

    if (!(operationQuantizationType in starkQuantizationTypeMap)) {
      throw new Error("eth.starkProvideQuantumV2 invalid quantization type=" + operationQuantizationType);
    }

    let buffer = Buffer.alloc(20 + 32 + 32, 0);
    let offset = 0;

    if (operationContractHex) {
      operationContractHex.copy(buffer, offset);
    }

    offset += 20;

    if (operationQuantization) {
      Buffer.from(operationQuantization.toString(16).padStart(64, "0"), "hex").copy(buffer, offset);
    }

    offset += 32;

    if (operationMintableBlobOrTokenId) {
      Buffer.from(operationMintableBlobOrTokenId.toString(16).padStart(64, "0"), "hex").copy(buffer, offset);
    }

    return this.transport.send(0xf0, 0x08, starkQuantizationTypeMap[operationQuantizationType], 0x00, buffer).then(() => true, e => {
      if (e && e.statusCode === 0x6d00) {
        // this case happen for ETH application versions not supporting Stark extensions
        return false;
      }

      throw e;
    });
  }
  /**
   * sign the given hash over the Stark curve
   * It is intended for speed of execution in case an unknown Stark model is pushed and should be avoided as much as possible.
   * @param path a path in BIP 32 format
   * @param hash hexadecimal hash to sign
   * @return the signature
   */


  starkUnsafeSign(path, hash) {
    const hashHex = hexBuffer(hash);
    let paths = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["splitPath"])(path);
    let buffer = Buffer.alloc(1 + paths.length * 4 + 32);
    let offset = 0;
    buffer[0] = paths.length;
    paths.forEach((element, index) => {
      buffer.writeUInt32BE(element, 1 + 4 * index);
    });
    offset = 1 + 4 * paths.length;
    hashHex.copy(buffer, offset);
    return this.transport.send(0xf0, 0x0a, 0x00, 0x00, buffer).then(response => {
      const r = response.slice(1, 1 + 32).toString("hex");
      const s = response.slice(1 + 32, 1 + 32 + 32).toString("hex");
      return {
        r,
        s
      };
    });
  }
  /**
   * get an Ethereum 2 BLS-12 381 public key for a given BIP 32 path.
   * @param path a path in BIP 32 format
   * @option boolDisplay optionally enable or not the display
   * @return an object with a publicKey
   * @example
   * eth.eth2GetPublicKey("12381/3600/0/0").then(o => o.publicKey)
   */


  eth2GetPublicKey(path, boolDisplay) {
    let paths = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["splitPath"])(path);
    let buffer = Buffer.alloc(1 + paths.length * 4);
    buffer[0] = paths.length;
    paths.forEach((element, index) => {
      buffer.writeUInt32BE(element, 1 + 4 * index);
    });
    return this.transport.send(0xe0, 0x0e, boolDisplay ? 0x01 : 0x00, 0x00, buffer).then(response => {
      let result = {};
      result.publicKey = response.slice(0, -2).toString("hex");
      return result;
    });
  }
  /**
   * Set the index of a Withdrawal key used as withdrawal credentials in an ETH 2 deposit contract call signature
   *
   * It shall be run before the ETH 2 deposit transaction is signed. If not called, the index is set to 0
   *
   * @param withdrawalIndex index path in the EIP 2334 path m/12381/3600/withdrawalIndex/0
   * @return True if the method was executed successfully
   */


  eth2SetWithdrawalIndex(withdrawalIndex) {
    let buffer = Buffer.alloc(4, 0);
    buffer.writeUInt32BE(withdrawalIndex, 0);
    return this.transport.send(0xe0, 0x10, 0x00, 0x00, buffer).then(() => true, e => {
      if (e && e.statusCode === 0x6d00) {
        // this case happen for ETH application versions not supporting ETH 2
        return false;
      }

      throw e;
    });
  }
  /**
   * Set the name of the plugin that should be used to parse the next transaction
   *
   * @param pluginName string containing the name of the plugin, must have length between 1 and 30 bytes
   * @return True if the method was executed successfully
   */


  setExternalPlugin(pluginName, contractAddress, selector) {
    return setExternalPlugin(this.transport, pluginName, selector);
  }

} // internal helpers

function provideERC20TokenInformation(transport, data) {
  return transport.send(0xe0, 0x0a, 0x00, 0x00, data).then(() => true, e => {
    if (e && e.statusCode === 0x6d00) {
      // this case happen for older version of ETH app, since older app version had the ERC20 data hardcoded, it's fine to assume it worked.
      // we return a flag to know if the call was effective or not
      return false;
    }

    throw e;
  });
}

function setExternalPlugin(transport, payload, signature) {
  let payloadBuffer = Buffer.from(payload, "hex");
  let signatureBuffer = Buffer.from(signature, "hex");
  let buffer = Buffer.concat([payloadBuffer, signatureBuffer]);
  return transport.send(0xe0, 0x12, 0x00, 0x00, buffer).then(() => true, e => {
    if (e && e.statusCode === 0x6a80) {
      // this case happen when the plugin name is too short or too long
      return false;
    } else if (e && e.statusCode === 0x6984) {
      // this case happen when the plugin requested is not installed on the device
      return false;
    } else if (e && e.statusCode === 0x6d00) {
      // this case happen for older version of ETH app
      return false;
    }

    throw e;
  });
}
//# sourceMappingURL=Eth.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../buffer/index.js */ "tjlA").Buffer))

/***/ }),

/***/ "Pm4I":
/*!***********************************************************!*\
  !*** ./node_modules/@ledgerhq/hw-app-eth/lib-es/erc20.js ***!
  \***********************************************************/
/*! exports provided: byContractAddress, list */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "byContractAddress", function() { return byContractAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "list", function() { return list; });
/* harmony import */ var _ledgerhq_cryptoassets_data_erc20_signatures__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ledgerhq/cryptoassets/data/erc20-signatures */ "sJJu");
/* harmony import */ var _ledgerhq_cryptoassets_data_erc20_signatures__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ledgerhq_cryptoassets_data_erc20_signatures__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Retrieve the token information by a given contract address if any
 */

const byContractAddress = contract => get().byContract(asContractAddress(contract));
/**
 * list all the ERC20 tokens informations
 */

const list = () => get().list();

const asContractAddress = addr => {
  const a = addr.toLowerCase();
  return a.startsWith("0x") ? a : "0x" + a;
}; // this internal get() will lazy load and cache the data from the erc20 data blob


const get = (() => {
  let cache;
  return () => {
    if (cache) return cache;
    const buf = Buffer.from(_ledgerhq_cryptoassets_data_erc20_signatures__WEBPACK_IMPORTED_MODULE_0___default.a, "base64");
    const byContract = {};
    const entries = [];
    let i = 0;

    while (i < buf.length) {
      const length = buf.readUInt32BE(i);
      i += 4;
      const item = buf.slice(i, i + length);
      let j = 0;
      const tickerLength = item.readUInt8(j);
      j += 1;
      const ticker = item.slice(j, j + tickerLength).toString("ascii");
      j += tickerLength;
      const contractAddress = asContractAddress(item.slice(j, j + 20).toString("hex"));
      j += 20;
      const decimals = item.readUInt32BE(j);
      j += 4;
      const chainId = item.readUInt32BE(j);
      j += 4;
      const signature = item.slice(j);
      const entry = {
        ticker,
        contractAddress,
        decimals,
        chainId,
        signature,
        data: item
      };
      entries.push(entry);
      byContract[contractAddress] = entry;
      i += length;
    }

    const api = {
      list: () => entries,
      byContract: contractAddress => byContract[contractAddress]
    };
    cache = api;
    return api;
  };
})();
//# sourceMappingURL=erc20.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../buffer/index.js */ "tjlA").Buffer))

/***/ }),

/***/ "pn0g":
/*!***********************************************************!*\
  !*** ./node_modules/@ledgerhq/hw-app-eth/lib-es/utils.js ***!
  \***********************************************************/
/*! exports provided: defer, splitPath, eachSeries, foreach, doIf, asyncWhile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defer", function() { return defer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitPath", function() { return splitPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eachSeries", function() { return eachSeries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foreach", function() { return foreach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doIf", function() { return doIf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asyncWhile", function() { return asyncWhile; });
/********************************************************************************
 *   Ledger Node JS API
 *   (c) 2016-2017 Ledger
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 ********************************************************************************/
function defer() {
  let resolve, reject;
  let promise = new Promise(function (success, failure) {
    resolve = success;
    reject = failure;
  });
  if (!resolve || !reject) throw "defer() error"; // this never happens and is just to make flow happy

  return {
    promise,
    resolve,
    reject
  };
} // TODO use bip32-path library

function splitPath(path) {
  let result = [];
  let components = path.split("/");
  components.forEach(element => {
    let number = parseInt(element, 10);

    if (isNaN(number)) {
      return; // FIXME shouldn't it throws instead?
    }

    if (element.length > 1 && element[element.length - 1] === "'") {
      number += 0x80000000;
    }

    result.push(number);
  });
  return result;
} // TODO use async await

function eachSeries(arr, fun) {
  return arr.reduce((p, e) => p.then(() => fun(e)), Promise.resolve());
}
function foreach(arr, callback) {
  function iterate(index, array, result) {
    if (index >= array.length) {
      return result;
    } else return callback(array[index], index).then(function (res) {
      result.push(res);
      return iterate(index + 1, array, result);
    });
  }

  return Promise.resolve().then(() => iterate(0, arr, []));
}
function doIf(condition, callback) {
  return Promise.resolve().then(() => {
    if (condition) {
      return callback();
    }
  });
}
function asyncWhile(predicate, callback) {
  function iterate(result) {
    if (!predicate()) {
      return result;
    } else {
      return callback().then(res => {
        result.push(res);
        return iterate(result);
      });
    }
  }

  return Promise.resolve([]).then(iterate);
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "sJJu":
/*!**********************************************************************!*\
  !*** ./node_modules/@ledgerhq/cryptoassets/data/erc20-signatures.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "AAAAaQYkQkFTRURooRjvRQYwUerEnH5kfOWs5IpopQAAABIAAAABMEQCIH5b5ihZFGW57kW2LV0Ge+uZ6tJ0hYdDcbITA3E3tgqXAiBTObPXE9mQtcYUqYwgsROXiuNv9yMkGD01ZzpAtxST/AAAAGkFJFJPUEWdR4lPi+y2i5zzQo0lYxGv/osGiwAAABIAAAABMEUCIQDyGDTg5JsxR5S91d80y/cEMpkqCJB4tBOCw424XMTg9QIgLneXEryJ0DyftZkGI4KPexJ03xDAsUst8S+G2amlR3QAAABmA1pDTrnvdwtqXhLkWYPF2AVFJYqjjzt4AAAACgAAAAEwRAIgWXcG8FH83w3k6uNlQtEOrQ/qv+BC44F31dMZ+Dl0V0sCICtoia5heX2KdOKo0fqgPXIONM1op42i2QjgsLoibGFEAAAAZgNaUljkHSSJVx0yIYkkba+l694fRpn0mAAAABIAAAABMEQCIAroY0widiqLpB0qyx4GjczpRzN8bdmE8TuCDTlhdpUjAiAzBqSdimw1sRphCI4VcLOSjKOg22vTb1d7Xvh2KFYf9wAAAGkFMHhCVEO27XZExpQW1ntSLiC8KUqam0BbMQAAAAgAAAABMEUCIQDZSSILUcwrmLzvsBuavU6b9oS9ReIiype4ZfSNys8/UwIgWymErBwsNc7GJ83qSoi6NrMPfAksPFlzjATC6/dlOLwAAABmA1pYQ4Pivo0RT5ZhIhOEs6UNJLlqVlP1AAAAEgAAAAEwRAIgEcMy91bfmgGYSEmB4L+jEgojKuN4fb8/WsuzKbR+5bQCIExA2p4RGYEaIufLRa4Jd1MlpX/WpQb/FS6PJwZHIOBQAAAAaQUxMFNFVH/0FpprUSK2ZMUclXJ9h3UOwHyEAAAAEgAAAAEwRQIhAMALuqleFCD7TnqBr1FpDqfI4wDBQDvIDUw8YgWCD5ZcAiA2ngwosAtArYbP/9yveIoODiy66CPfEOk7pzt90uG07wAAAGcEVFNIUFJXlEc/erVxXIHQbRD1LRHMBSgEAAAAEgAAAAEwRAIgYhU+Mw/gREeOJYUeNBzwJNy+0qnYhBIc7JSLHPnK7DYCIDhlEsNh3HPLkcz6BOSNw7cLFxSPpKjP/raYkN4nmmRXAAAAaAVXUkhMMU+8HtogzY0fOfykH2RsMXvODhOvAAAAEgAAAAEwRAIgcm/59B1LLCBRHLkRCTMPzbT1xjDAPVL+w+9oxkKog3sCICl3iJmuVy7evwCV1RsQAFH2rPzkPtYRnxspwayxYM8RAAAAZgJXVK3Cun1p278to/qZgyHb0+3Btgz1AAAAAAAAAAEwRQIhAPn9EHHg73gACMUMI4XQRqFnqRUKE9OcHbCN2/eTYiATAiARRdSzUGMjOA0dBYaUE6NbtVVh0F9Yd4L0uHHZZ4y8KwAAAGgFMUlOQ0gRERERERfcCqeLdw+mpzgDQSDDAgAAABIAAAABMEQCIEYj5fE3XFSkRhV66Kc5IEKEzwU2NLer0IPcX10mdcTnAiBv+UtMhLqek/RAZcONfJJQZiH6aboE92eqWCId6K+/FwAAAGYDRlNUMQyT38HF40zfUWeBA/Y8QXYgic0AAAAGAAAAATBEAiAuLBeIcpGCpoDZ8cpfzACn3RdhVXAemsQFX4C3Hkv6WgIgbLzRY0eWJ3+FLNo2JxJZ0ticE/YOFUArH05opsvY44EAAABnAzFTRw9ycUs1o2YoXfhYhqLuF0YBKSoXAAAAEgAAAAEwRQIhAMXvrAIvzBe47PQeizokOJH6M/aVRfOrr/S88yojr2kGAiBZmz9qxTe6UPNXrTmNz2Hz6MiFXO0hvflT/lF7nr6zlgAAAGYDMVdP/bwa3Cbw+Phgal1jt9OjzSHCKyMAAAAIAAAAATBEAiAbyt40SQDF/RtPyyJzHmojvwGTOjEyerrMGmyf44DBPwIgBL8PODgPxEjIAUkMdqwmaos1bFnvf9lydonvOV4rj7YAAABmAzIyeABz5eUuK0/iGNddmU7is8gvnIfqAAAACAAAAAEwRAIgZq2GKbzkO1qtMsYKWm/5T83wOqe+aHXfZlbmVVIT2Z4CIGnKX/iIuqGbSIOzY+JJ/SLzWpp8E87VHGoL9tn00u91AAAAZgMzMDCuyYpwiBBBSHjDvN9GqtMd7UpFVwAAABIAAAABMEQCICM+v7LsalHCu+eYCNUz2Oc+2NJtrGoBnGfiFTM+5PGvAiBKportZqyZebEJ7Qb4EKx7eKdCB+9mDrMGEtRFCKwsbwAAAGYDRklUPHL8qFI2hv2eV0Cwgm+kuzduAkEAAAASAAAAATBEAiBe9JjRhFWUotqvFkhZ0aNnBABWtNvBGNx/rUKRnXhmnAIgBpC0OQghDTzzcJ+4wnlgzhC1gWdqnIV4tIzxnl84KaMAAABpBUtXQVRUJBumcldKeKOmBM3QqUQppzqEoyQAAAASAAAAATBFAiEAvh43CLMaMIBk0XDIKHVRHzEEc28X1/u25qmxNpfOvssCIHPXpDTVVF8XYv0isaVoZaakWhC2z+p8Q18ueaY0j9OYAAAAZgNNUEiIiIAa9NmAaC5H8akDbliUeeg1xQAAABIAAAABMEQCIBRNqX/zDjxkdvXy4lM5WPC3A9aj0OQ5cF8hwjx4VBxDAiA1sF8iCA/nQwMPYAjo810PSSg9D9vLL0+tCVqWrjp0qQAAAGcDRVhFQS05fdygfXU+Pgxh42f7G0dLPn0AAAASAAAAATBFAiEAgyNoU/xV65LZJa/KOJkHcpJsNB5X7jsNPffMbqcFe2wCIA8CqLhzOZad2QmFGnNBoH9mKGo+damfy6/O4dhEJ+jMAAAAZgNJTkqEv//9cC2STG2bJfhxUb8PsaiRPgAAABIAAAABMEQCIHh5oz6S54JLJvsn6zk0fvpm3OEc0GcwXjc5Jv0mwteeAiBp/7zm4D+3GijtrlmnRMvWe9kucGFAaIPXhY0+h6w+pAAAAGcEQUFWRX/GZQDISnatfpyTQ3v8WsM+LdrpAAAAEgAAAAEwRAIgQkX7Y/dIVm+UqO2rOeM+0n0kfOK+yvd/W5lLJSgNRpsCIC7bJ1GkdALfGdPj83zC2hAEVpiXf3b4rs5JlXIz/1f0AAAAaARMRU5EgPt4S37WZzDosdvZggr9KZMaqwMAAAASAAAAATBFAiEAiSNx72MZ2b0pwyXtkDty4NEZITFII7fL5RfmO6YQzSgCIAZL5ycJe1DPLqFN021C0+/x4Kg07S4naeqqj8JbvOhwAAAAaQVhQUFWRbo9lofPUP4lPNLhz+7eHWeHNE7VAAAAEgAAAAEwRQIhAOLIJr2ShV2cMynlJbynvEpJn8J/Wf7Q7yU0WNhvoAl+AiBOFuAqGv8CsmYc4ggHSqyQtGNV+DdZYlRHhulLqT068gAAAGgFYUFBVkX/yX1y4T4BCWUCy461Le5W902tewAAABIAAAABMEQCIFv0pgz1eYpKyQhxHT5AgivcqJQ26372/PAgrBV5M/axAiBpN99jJFlZ2/eKQLJ03YNlN6t4k531lU0nkYMLh2Z8ZAAAAGgEYUJBTCcvl7elajh66UI1C7x99XAPikV2AAAAEgAAAAEwRQIhAJ4QPTMH3KOPe6Waq4KBQgAeObaj0MYIzbo7PTrxYDr7AiBhsYwD2VTxEZTF3kF4CZsU100Lxs40fhwsk69XALMoRwAAAGgEYUJBVOG6D7RMyw0RuA+S9PjtlMo/9R0AAAAAEgAAAAEwRQIhAOxtoLMgjyAlASzPA21zauFiXmejapm4o29TK8MMaqFcAiBlhaVQ3JIhtfVl1CmjsL3BgeHKzJX8YMmUzuUSkCj+BQAAAGcEYUJBVAXsk8A2W6rqv3rv+wly6n7N05zxAAAAEgAAAAEwRAIgFJ2Fdt5Nmzlb+I0Gt7yMrvynu1bsuae20eVwfbL2TRQCIGWVxd58Gea+bhaSacNMCQ27iAk/4mE7A/JCzopTE+EvAAAAaAVhQlVTRG7g97tQpUq1JT2gZnsNwu5SbDCoAAAAEgAAAAEwRAIgLvLqHFvsVjxjDJzjxQADY+Gq43+UjvD4W9qsqAaS+30CIARsH1c9c+XOHFl9akMSusYmbwVjBX+FCaugatgKgXd3AAAAaAVhQlVTRKNhcYMmwVcVWRwplCfGIIb2mSPZAAAAEgAAAAEwRAIgSWt9PW9Fu1PM+Jc41LvuGnQGYrG0SCI5C4F+CmjnqTICIA8y0jH2PA7BCT/YqVewIgH5Pu52NdWP6Y8pqYVWe2qlAAAAaARhQ1JWja5ssEaIxi2Tntm2jTK8YuSZcLEAAAASAAAAATBFAiEA5+T+rFNvk2chzSWGU7zsI1zYPiB9QjW3YX4Mwc9m3iwCIC3+FnHXfPgWKa+QyrfgXguBUb2FxMlBdVhjsbx6hFpSAAAAZwRhREFJ/B5pD2Hv2WEpSz4c4zE/vYqk+F0AAAASAAAAATBEAiAPs0PGLZePAqcTFqTUhFpy5cbIdP1/5VCtp5ugiCXp0QIgGOLxQzPQSqV9DU7sRKuWxh4v/8c5N8PVOEBqQ3qdzzcAAABnBGFEQUkCgXG8p3RAiXuCTKcdHFbKxVtoowAAABIAAAABMEQCIHkjzbS5q6Q0vUMmlCUVeiZQ+HIvZWjs2F3kAlgyV6QsAiAPuRae6YHwqVCw0FSLsA5SAQZCEZyybzKVsdn2mOZ2/wAAAGgEYUVOSnEttU2qg2tT7x7Luca6O577Bz9AAAAAEgAAAAEwRQIhAK5tMIvHiKwODHX+ssrO58SefKzSZp6mtLUQgZgAdaeqAiBzmWppoMmUXp9kFY9Y6bgcNXJIwp7ycJ79etkHAAss1wAAAGgEYUVOSqxt8mpZDwjcyV1aRwWuirvIhQnvAAAAEgAAAAEwRQIhAMw5yPF5VVqynPfXRPcAwioRb5luHAOauLP2zoEEPTr/AiAIFCgTTzWmJdYh/Qa9sfAYmDoDBcBZ03Esd+mOzigsMwAAAGgEYUVUSDo6Zaqw3SoX4/GUe6FhOM030IwEAAAAEgAAAAEwRQIhAPxEf6jxT7lOoRrupSx0iZlkmuK51xRpTIuRfYSlIZ7+AiADqF6Z3g4mQhA5Bx3Z1X+euKqavk+jOlmVaqDg6lPm/QAAAGgFYUdVU0TTfufk9FLGY4yWU25oCQ3oy821gwAAAAIAAAABMEQCIG3CL51QSKJNmdJf9P1L4jE8fWZUuhlic+GJMb7MvilKAiBlPtWPjGHXugfSRovk/NvAmJmX6ONOFNIH+EWIupP1nAAAAGgEYUtOQ52RvkTAbTc6iiJuHzsUaVYIOAPrAAAAEgAAAAEwRQIhAIefi7KCdoOC25aXM5SoVf/4TMAoaQ0E2nAMnrN5tfCLAiB62dtJhPfOxZmz+rPwTOp4Du5jdmMtIyhj2EqtpY7RbwAAAGgEYUtOQznGs+QtamedfXdneP6IC8lIfC7aAAAAEgAAAAEwRQIhAMU5TmTnXcmo0Dj+aMKN2jfV7QVWt4KCLzFhYvQXph0yAiBE35ONyBI5lxIOFUe5NauIaMPLdJa6T7Af1T+GUCxVJQAAAGgFYUxFTkR9LTaI30XOfFUuGcJ+AHZz2pIEuAAAABIAAAABMEQCIDspbzpfcW/ghXtejXG8UDDUqCZDySfGh80VJkZx5KBVAiAAsK5AopsQqCHBYxfEWxnsagOA3aEHDHbHpNiVfCBbqAAAAGgFYUxJTkumS9bHDLkFH2qbofFj/cB+DftfhAAAABIAAAABMEQCIEgJMCgRb61oIMoNV3Do4mca2+RYj7V0CzqDeob+Fo77AiAZHY8ERGZi0qEc6aDznLl7DCtp9DSQGP0228/S62wXbAAAAGkFYUxJTkuga8JbWAXV+NgoR9GRy0r1o+hz4AAAABIAAAABMEUCIQC8ZuzmvPVHqqcNecwvvpWb7Fg/tTN46iNWgBSrmMHeeQIgIfsYRW5Qd/kI6Z8CZOgWQ5Hljye/t7I9I807oIb708UAAABpBWFNQU5Bb85KQBtrgKzlK6rv5EIb0Yjnb28AAAASAAAAATBFAiEAiU08rcnuZYs3QgMFaDGtaZf5Q+9YFqEN7/JTSXsEh3cCIE6jGTNFJwq0L3/5QbN+8nf0mvlmu+MPhT15s0B2QMvsAAAAaQVhTUFOQaaFphFxuzDUByszjIDLeyyGXIc+AAAAEgAAAAEwRQIhALI3kuAkb0zTLgebuU2cDykgwFrUuEvVxaqUeR3BarjHAiBsVusPmU+Np7G8TSqsG7jYxs6FgI6UyG8r7hWvUzP/rAAAAGcEYU1LUn3rXoML4p+R4pi6X/E1a7f4FGmYAAAAEgAAAAEwRAIgJsGEyBLvDI1jItLIRtbjPXC3oK5nKVKSgUW3hy1fKqUCIFboi+ukCUlfbfYkey42fhAGoudsp5kYiQg+DgfKlqhYAAAAZwRhTUtSxxPl4UnV0HFdzRwVagIJdufla4gAAAASAAAAATBEAiAyxkBw5xBwf9P4BLn8z5Sn7xxg9wo/VjIlouqVRQYH3gIgKKCenamomRNvHQl8hLObYvg3zcsuvxu3VveSf6pO4hEAAABoBGFSRU5plIzAP0eLlSg/fb8c52TQ/H7FTAAAABIAAAABMEUCIQCMkulQ1wxdEfpsX4CoC45ig3AVPK3SSevPkQ6C4Yt5qwIgPhNAj76y2fSONemycQ3A5dLFlCzC2si/tW9RpQaqCmsAAABoBGFSRU7MEqvk/4HJN41nDeG1f44N0ijXegAAABIAAAABMEUCIQD0ryFoUObiKtusKdWUY9UrsHQm5EktYZTF1UPwDQz8kgIgRS84jG+ormrJVY9RBMs4U8y2R55cV/miQuFK2lQZGAcAAABnBGFSRVBxAQqdADRFrGDE5qcBfB6JpHe0OAAAABIAAAABMEQCIBa8WOwXOcTxwZUWZGbCSGaPWpevtjssW+khEg2fFrW6AiBvCia91gyHsk3UrLqf0pcNS/3CstCr/yTgEt6aNt+f5wAAAGcEYVNOWDKMTIC8esoINNs35mAKbEnhLaTeAAAAEgAAAAEwRAIgJOtQM+g0DCBJG89sEOqHtKDx/9p6S3FUPiC7xovu5lACIDRmhr/u3k/SO7+pMS3wInEgOD4xwmuxP42+FUyiOSk1AAAAZwRhU05YNfawUsWY2TPWmk7sTQTHOhkf5sIAAAASAAAAATBEAiB+29JKic+BbEh7dB0XW+HMIsa+tenOijLz1vMZwYAu1AIgEHMHLWCACF4IuLAKtd0bWzl6aWfenEZL/tuq+fPcSJUAAABoBWFTVVNEYlrmMAD0YgBJkSC5BnFkIL0FkkAAAAASAAAAATBEAiBLKjfueFI9HcsAQ6RC618nR0z8dVS90m9OQBXxS08PyQIgOS6ZDLpQADsJLWWczRZnJNM8qnfagtJlGZIREa1HniQAAABoBWFTVVNEbFAkzU+KWREBGcVviTNAOlOVVesAAAASAAAAATBEAiAd6HZ6l8CmunRg27jPTOtX3wd62AQDD1IWN5DWsR1xSwIgLafn0LgugSkqenYRtTXdr/LjKJkOWALkSimCuXQ7cCQAAABoBWFUVVNETam4EwV9BLrvTlgA42CDcXtKA0EAAAASAAAAATBEAiALYKFchbC/ilZe71rQ/uQXGYYIYSnAp5If7EnnPmtuLgIgAwNVn+xK5pRhUXdQ8/oNiXcZxt0LFOGMa3/6YtPehm8AAABpBWFUVVNEEBzAX0pRwDGfVw1eFGqMYlGY5jYAAAASAAAAATBFAiEAmX9M5T1eX9PZ42tCWxyQVpseotDA864Fvp/eJm+1AOgCIExyidZXBL4/UtfhymSPcsvSb8/cg0KktmwaVgNyziT1AAAAaARhVU5JudfLVfRjQFzfvk6QptLfAcK5K/EAAAASAAAAATBFAiEAx5aL/5INqISZD7k9hZqxqRBIh6II51RHuWY1SUQXFkMCIC2LdxiLC1jsD74nDJIZegkk34xZPQQqmXw1ghQevIliAAAAaARhVU5JsSRUESegplfwVtndBhiMTxsOWqsAAAASAAAAATBFAiEA+WDcYXJpElT5VgExU8HZe8iK9mE/TQ+T9MEuvcsHxkICIGkCIFmEyL2Q4bIlI0pw0U/Cpa7Ecu8UTluvKZTjTZ4zAAAAaAVhVVNEQ5ugDWhWpO30ZlvKLCMJk2VyRzt+AAAABgAAAAEwRAIgXwOjYIT0KAqMKVlnR6d/+kJjvl7bRCEUw7MRQAcz1g8CIA/XoAxfxICC7R1ARkKMapySVLlXRsihp/0Ih9Gc2kgMAAAAaQVhVVNEQ7zKYLthk0CAlRNppkj7A99PliY8AAAABgAAAAEwRQIhALaa3IAy2bL4g7IBEC5z99gAug53vi4/4GnS5JNOk3mXAiBsnhLOT65CcwFaHsVIs2/lJSOLhOTsrowB27IhcJvP2gAAAGgFYVVTRFRx/IYPfTpZKkqYdA452zHSXbZa6AAAAAYAAAABMEQCIFp+bapbDhIjB84BEgjh4M0ZOJDAj9719EuY3NW1r0tQAiBL7sf03o56RocxrD9YjaNVrrI5++vIovQteGKeA32x2AAAAGkFYVVTRFQ+07R90T7JqYtE5iBKUj52ayJYEQAAAAYAAAABMEUCIQD8unoEeoORgRuO8hvgk+Fc6Pa4VLXbskPliTOwDhgOWQIgFLxGFs8r1D8FoEnPULTfEJsjGhepv/m2l3lx4kARnWMAAABpBWFXQlRD/EuO1FngDlQAvoA6m7OVQjT9UOMAAAAIAAAAATBFAiEAhmo/1tu7/GHJ5T2DCqpzoZcZje+gbs2FEOBpfLN4knECICwgabywFjfwxGCUzE6+dn6S6zdd0+6SImfQFpd62YOpAAAAaAVhV0JUQ5/1j0/7KfoiZqsl514qizUDMRZWAAAACAAAAAEwRAIgTa5BzHc3fxjgOQ+7lnn/Swkm5krcZe+4URv0BMRFUvgCIEP9eBMPCFV/joApc9nYQK0xjugXZhview6IR57fn2prAAAAaQVhV0VUSAMLqB8cGNKAY28yr4C5qtAs8IVOAAAAEgAAAAEwRQIhAI9+pnVDAZ6SR/b2hOnHyol3vTSXdQAORgTNan3WAkn3AiA3xXQ7uTW08dRfjGjlceraK0aaYiwFjOMoSc0FyBSF1AAAAGoHYVhTVVNISfJWzHhH6Rn6ybgIzCFsrIfM8vR6AAAAEgAAAAEwRAIga5sGFfEfIyn3JslPL+AWTZZvtW5Jgm0vSnG36h0byI8CIBjM4fILrPya00SSeapYExzajXdpEcvK3qVQ1ty4ngRXAAAAaARhWUZJEuUed9qqWKoOkkfbdRDqS0b5vq0AAAASAAAAATBFAiEA2lpZA7wDpNipnozM90T/bBauVMEJ/YvuHiSdcis4cF0CIG8ownCAU1jxwesMG0/SVfvI/rsj3DVv/TGLQo6VvNyKAAAAZwRhWUZJUWXSQnfNBj9axE79RHsnAl6IjzcAAAASAAAAATBEAiAohSlBHStf3YMPTsNjqtLGbwHIP6p7eO2Zcfs+I7SzTgIgcsh5LSw9SkBCKWt16T4DwrFxRao8HTH2x636qJSwh24AAABnBGFaUlhvsIVcQE4JxHw/vKJfCNTkH58GLwAAABIAAAABMEQCIFE5wzJFwjfYDD61y1KmsCs6Enz41naf2TgFVh+lqfOpAiAfXDo9pqtH9pYtp3qDRyWRkUPl2OqmzD2WPb3efEMejQAAAGgEYVpSWN9/9UqsrL/0Lf4p3WFEpptin4yeAAAAEgAAAAEwRQIhANcKcS4QOfbFZA+UKiyQ9R21WHDEpBlf1s2FHbVRSGC5AiB5X++da21T3jH4eZcaCtY5UuZkWZq6CwBE0bzyDlxLngAAAGcER0hTVD84Lb2WDjqbvOriJlHogVjSeRVQAAAAEgAAAAEwRAIgBJZeB2CfZi7aL3axHmTMGdJPPt46UWjw4Yy3/DV7jX4CIEbLn+nn9cvuqEcFI0zNWZTEDw53LOF7lak+3mDYpRo+AAAAZgNSVELsSRwQiOrpkreiFO+womatCSenKgAAABIAAAABMEQCIGgHg27eIRLrHrBtQZWOEmqRDFPeDC4Dh50To+oAqiNsAiADrubG5USV1XWLEmxriTmbFfMh+j7Zs20dDTm5v4exHgAAAGcEQUJDSMx9JtjqYoG7NjyESFFfLGH3vBnwAAAAEgAAAAEwRAIgQTjdUk/0LQc8l0hY2MszdxV33XXR1QtXrLM1z6zwFiUCIAJc+6IA6MGdXmybmEamCM7SdOunC8BuBcIWApDvRYPSAAAAaQVBQllTUw6Na0ceMy8UDn2du5nl44Ivco2mAAAAEgAAAAEwRQIhAMI8Va+589yI2fYNFsSoLUKg2/5Y5xx+9jr+TJ5LdNwqAiBIVRh7EGiqy12j5dsfLdYsF8Cazvnewg5ep6hiSVKmygAAAGYDQUNDE/G3/fvh/GZnbVZIPiGx7LQLWOIAAAASAAAAATBEAiByngRNEpt/c/Y56v5ALdbODJrAcoHimfaciQ7DXxaIVAIgblbMIau6G2N8cwlvu9UyGNpuD+yt7pvH9NAEJM9LTF0AAABnA0FSRHWqew0CUy84M7ZsfwrTU3bTc934AAAAEgAAAAEwRQIhAP4cnIeOfzK94eKUZ+ZC9hpiD9zlqdG38BStkuimNL0BAiAs8ds3yQE4ommbQPBMqeHmnhXgwD7AbrlopftHJ0a0IAAAAGYDQUNFBhRxEAIrdouo+ZqPOF3xGhUanMgAAAAAAAAAATBEAiAllvjQDdTaJlG4hX3iIDj1MjCPTJqZXadCFGiECFU9QQIgUGvPTJSSPGtoCCFaAE8YTeeQPYKFZCLzlXQfjMyJsFYAAABqB0FEQUJFQVKzKZ1Lq5O/BNWxG8Sc1t+tH3fSPwAAABIAAAABMEQCIA4P7OUgwU4u+/opgcNamjlmqJ/XJKOG2DC/dA2vZ+D5AiA9RmRI9PMec+TcyfKHyyrNYn2J4/9vQ2sPD0v260mS+QAAAGsHQURBQlVMTEPeEUXNIvCpzJnlHCBeboEWHfa5AAAAEgAAAAEwRQIhAMAU1PnrDrkIwkDprgW11R+L0iW0n8kKH/XD0EYGFxSpAiAQJJKWNxiaj5nqVTeiun9Rv9E4LekajE7brN4VMUrqLQAAAGYDQURCK6rJMwz5rEedgZGVeU15rQx2FuMAAAASAAAAATBEAiA8cD+BTzW2Kz8/saoXRrZvF52sh4J9U8L4sUnaJEhbVQIgEFlzCRD9ewcPaLKlJd2o9oCrWiUt7BsgawURqZnlvyYAAABnA0FETGYOcUg3hfZhM1SLEPaSbcMysG5hAAAAEgAAAAEwRQIhAMMWSWKP4/fuYbgkGv7OrssMyu1++OJ0/DFThRshn3hqAiAp8+ElEItR3ZkirsqfwfHAK2iynXzZx3khFaLuN2dI/QAAAGcDQURYreAMKCRNXOF9cuQDMLHDGM0St8MAAAASAAAAATBFAiEApbRsHdWus5gZjDkOeQjRxkM7OnQLFkbZ+7vG8xIFmp8CIB6mGgjVI7O4+RjPkN+RluWFk+2wkVmH7lCGyfJrgPJVAAAAZgNBRFhEcLuH13uWOgE9uTm+My+SfyuZLgAAAAQAAAABMEQCIBTUxgc+74XZcD0YcecPsgE+bHQCTZSmf8+ywG7K/tz7AiBIIkrjUTArkiGAtxhqjyNWOhXGj0Tj1Hq4OO6Pecf19gAAAGcDQURI5po1OzFS3Xtwb/fdQP4dGLeALTEAAAASAAAAATBFAiEAu/BQOfyESmumh39lT7ut2CmR9uPSXZsrgZI+4lZ1ZtUCIHiKf3S2lbOMdCUJx9fgdBiicldbLkClwaVQVVGE6aijAAAAZwNBREmIEMY0cNOGOZVMa0GqxUWEjEZISgAAABIAAAABMEUCIQDHxMZgTH9a6dUOuG1vcOq6qxfMmeQZFv3cIsPQJfJ+sAIgSUw2UAzMJ1drXy2U77bCegGdh1GBLu73ckBgBR1kYkkAAABnBEFEU1RCKGao8LAyxc8d+97zGiD0UJVisAAAAAAAAAABMEQCIFToCcTj0ok052+xlw03eBOzrgk0JkUpyCoxvNnlr30lAiBFsfQSgzoTWnJddn1+MhgPTfNHX3AolX5fFO5N9ZszxwAAAGYDQURU0NbWxf5KZ300PMQzU2u3F7rhZ90AAAAJAAAAATBEAiB3DBHAbpzEwsCUL5aWlZ2vCnDWUpZV8rXlzQcwarmAGQIgDGb5QjCZR/wu4WO+qyRlc+l0VJvAFgO7oLOnKrBON50AAABoBEFEQ0+2w9yFeEWnE9NTHOpaxUb2dnmS9AAAAAYAAAABMEUCIQDyk9h9pUyWKQ036eMdaP69C82T8LQTz19e5G6ya/NvLwIgRqfjEwYPqoYAapWIyg40orlUqlg+h8Adrv/TeHEMT2YAAABpBUFFUkdPka8Puyirp+MUA8tFcQbOeTl/1OYAAAASAAAAATBFAiEAyCAECXwm9qlzfbGgJgVgpil40jcEaI+kbUPf2Oc56hMCIHV29bVEEgKtND1lNtTp3RN0DFTfgfK0/JGel0DdprfSAAAAaQVBRVJHT64xuFv+YnR9CDa4Jgi0gwNho9N6AAAAEgAAAAEwRQIhANwUvzpqUtjJZtgU81ZKRy05Jkf3iYIEALnKZSENawjLAiA9LArgp2hYk2aro720jGki3bUD7SlrgPZne/5+HGvr+wAAAGcEQVJOWAw3vPRWvGYcFNWWaDMlYjB21+KDAAAAEgAAAAEwRAIgPBTv9y+AouR6Rw7cnLpSRNvFfnIvomdA1v6bYrNIhYUCICFKK3sRoL9xT9+Q6sJPlbBv4CGrqU6OAW+kAoR4nhP4AAAAZgNBUk66XxGxaxVXks87LmiA6HBoWaiutgAAAAgAAAABMEQCIDte2zM5sKLN9FBI8/CXjJFGDm50Lbd+1kfHtAmqnNDlAiBwbXRuQIxeZYrXnvVxjaARC5VCiJu3NHqUKqrbtWJFeAAAAGYCQUVcqacbHQGEnAqVSQzABVlxf88NHQAAABIAAAABMEUCIQCXbVY0R3t5Vx7NyuCxo7DvRaXVtknJGeMBbbJvvCaBAQIgfPw4lXbthNOJ4ZZQM6ii2Chca4NZhiFoiysVLZGV3xIAAABmA0RMVAfjxwZTVIsE8KdZcMH4G0y7+2BvAAAAEgAAAAEwRAIgNm/69udd9Lc1YyfA9jcfceRX9UFkMcWZwa6E6hqTOW4CICD9mrhi7yJYlq62NhE/XD2730DK6rFOCsGoy9HmurtcAAAAZgNYQUkmi3l26U6EpIv4srV7o0tZ7YNqdAAAAAgAAAABMEQCIDLsjoKXuF2UK85t8z9LpZNIUYB9udywYMEyQxqKU7qEAiA8nfOUybzCp5xSoEDxNhCxmVvQI3JJ5/WM5P1wU5l8VwAAAGcDQUlEN+h4m7mZbKyRVs1fX9Mlmea5EokAAAASAAAAATBFAiEA5otZuJNeDG3R7SZrdcv3P7pq23EJZ44eHoC/4ERz2zACIHA015c/LH+YOLCFYOQOSoGSnYCy4CFE0TKX9SOZr3WUAAAAZwNBSUTReLIMYAdXK9H9AdIFzCDTK0pgFQAAAAgAAAABMEUCIQCyony+aceMbngsDT4GU2+dElKMIyQBo7sxfvY3ktzCzgIgFGkQ+w3QQ7bsFu+M/8l7ALxwdeU4JhZjVNSm9mF6WGAAAABnA0FJWBBjzlJCZdWjpiT0kUrNVz3YnOmIAAAAEgAAAAEwRQIhAJtfNcaVdJhHrfdlPyA5Wz+gkGAqVXLvwQU74+nxnUh4AiB8V3QGzZeu8+bLy8q4e9k9NN1EFRBz64RrZIVEzIT7+wAAAGcDQVBUI648WzmxLwaT4FQ17qoeUdjGFTAAAAASAAAAATBFAiEAhA1ovF1uH2NuajxdSl6Hrk2kewSpIt4Kfe9t/Q/NGz4CIFDp395pf90Ece1623Sg67BTL0Hkuya76ZmmAm+dbyyZAAAAZwNBVEgVQ9D4NInoKhNE32gnsj1UHyNaUAAAABIAAAABMEUCIQC1ZyuD3wu+vbDn025sXTs3iweAZ7WHOO2Ek0WO0HCsbgIgCxp0lQpO9PquH8Ue6ZDNGCGIw2PbTln086GXDYOd23UAAABmA0FMSUKJwEOhI5LxAnMH+1gnLY69hTkSAAAAEgAAAAEwRAIgS926pusPpfgAgrsaXSLmIGqm8KE/uvFlC7A8a/2jecQCIC9AQQzIdVLIrUgWDhy27H9ssk4G7fE4A7zHfGswBBqqAAAAZwRBSU9OTO2nkGpe0heXhc06QKae6LyZxGYAAAAIAAAAATBEAiB+hG9oSpgN3nqpKyzoYZI+Bwwyw3Rbf5Dtb9DMsY2X7gIgIGAyvKfA743F2NaIBkbtyY0e/eYlhwieWjvDaRi7nRAAAABnA0FTVCcFSxOxt5izRbWRpNIuZWLUfqdaAAAABAAAAAEwRQIhAN2vpc3pr0pPOEEIG+3y55jvhsM9ROnZLeh3NnhjzP91AiBGNYkmFr5jfHGewsri1h5GPlu9c6iqjvlsnaR2/q2nZgAAAGcDQUlSJ9zh7E0/csPkV8xQNU8fl13e9IgAAAAIAAAAATBFAiEA9LPP8oem0Fp4O0h/bkPVz0jpOZLTAWNPJMaIFrPDmawCICrR6LEKeo/idZ8LCzGFLlenT+VJb5dAsK/ByJ9pGx5MAAAAaAVBS0lUQTMB7mP7Kfhj8jM71EZqy0bNgyPmAAAAEgAAAAEwRAIgJgFqIaV8gwArhN68xrhGFpk0lKxoVoBPKGWhSfFnbHcCIGq/7h8SQUdR5mVMZ12jLip3f77Pv9Pu5dA5r3+94eUQAAAAaARBS1JPirdAQGPsTbz9RZghWZLcP47IU9cAAAASAAAAATBFAiEAoMlZqtL4kS2kOZhkPJH9X2k/I0NpQ7E9dZ5FsEkxgJUCIG3sh96VvYnpN0vK9AK7KaoBiH446e1PnUZAc+KUizs3AAAAZwRBREVMlNhjFz7ndDnkKSKE/xP61Us7oYIAAAASAAAAATBEAiBUPknKyfXuKvucDHbdQ0wKTAQlSQ+OiZy2y619Tdqk/QIgL5PJOzlx36k5EOpiCmgO0jJZoaTOa4u1IyMlvNwmG5EAAABoBEFMQ1jb200W7aRR0FA7hUz3nVVpf5DI3wAAABIAAAABMEUCIQCl0eM0HYzLQrlXqnAItpq4N3do4BeChsvRcG5JORBJlgIgfSfrnAYZ7WgHio1t0UXEjgEDVsB1sD0qV7UfGn8W3KAAAABpBWFsVVNEvG2g/prV87DVgWAoiReqVmU2YOkAAAASAAAAATBFAiEAxBybopjIqdP8VbrHuuY4Ei/e/n0TsV2tRw4OzHiyB8YCICI1eZQEKNDDATh7HCrqz1hixE9Bp0Gr3v4cbvRh1SPpAAAAaARBTENPGBpjdG063PNWy8c6ziKDL/ux7loAAAAIAAAAATBFAiEArnFn4DQqGitk7rc0mGJtRNPq2iQf+Oc8Vx3grZN0IvQCIBRKLya4gjD96hmsvAFK5cE5wzCEJwpfksbiUlofsOJqAAAAaAVBTEVQSCdwKiYSbgs3Aq9j7gmsTRoITvYoAAAAEgAAAAEwRAIgdIz1cvMWcAHd9x3V5u5xAt4DG4eujmaqmx/aIIKAKnoCIFWApvilmlnVZpBoTDOBwwWi4+dXRRE+sUXqoO47c6PZAAAAaARBTEVYi6bcxmfT/2TBohI85y/18BmeUxUAAAAEAAAAATBFAiEA+uvDM0+LHQsQV9HFG3bIPEBSXAS2eQWIh4KcoY9b2IcCIDo1SpcuMhmyUO1x98D7sEvptf8uGj99/Ytl/Un9jhQkAAAAawhBTEdPQkVBUgV/sQ4/7AAaQOa3XTowuZ4j5UEHAAAAEgAAAAEwRAIgTvVRt3W4tVdNFn3KayfndP+qb/XMFu6DhB1aF952emsCIBV27jQ/1/+FIYNCr7numfUpUd1IIso870OKrg7yjARHAAAAbAhBTEdPQlVMTFhJNjV9aPUUPxLi5k8AiduTgU2tAAAAEgAAAAEwRQIhAIm4wZ+tC1/8sgb7uRhSrqyOhMHepuA2rDate5lar51UAiB2SymUdTsnkA8PAijqaCE4kgKOMQQZ1nonQ/aQTJAH/QAAAGwJQUxHT0hFREdF/cPVfreDnKaKL616k3mcjor6YbcAAAASAAAAATBEAiASoGGuUCaPAsxqpXH8yc/IzMYSQXsJK2ekauaovJkjNgIgeaKttOH2KWC/WSqYvZW99v8tk1sMqSr1t4nRkzcZP2YAAABoBUFMSUNFrFEGbXvsZdxFiTaNo2iyEnRdY+gAAAAGAAAAATBEAiBCd69bZUOeY4vWJzGmycwpPU6VQ/RV3LNqVrXrzylqWAIgHEOQSwbV9VUjPoOQCp/QJl39urJRutnajkDufjit+2AAAABoBEFMSVPqYQsRU0d3IHSNwT7TeAA5QdhPqwAAABIAAAABMEUCIQD0tGOntUPqeFZ9zUBjGUFj9ms44HoxMJZh4h+eZh5sJQIgWh9KOdisA108Let3q69cZ2PU2BmDw97+9PAM/Ur0cLAAAABmA1NPQy0Olb1Hldes4No8D/e3BqWXDrnTAAAAEgAAAAEwRAIgG1ceqEMM/iijIUvtmFkWvDVVcNjJzFXCfNS6sDS3tuYCIFgo8hD+nxNSouJZvJjAu44UJXRfBhfCjxDdA8FcYpawAAAAZgNBVFPl9Vo7dIdFMamTWbgzuShmpmCfawAAAAQAAAABMEQCIHzmkv0nizRXKh7HK2RMyuT708kR7E9vqVYpBR3aWr0fAiBPlf6cLK8bqN1+E/qlb8CBNunlTCEFUA5SPvSJfsrCUQAAAGcEQUxCVACotzjkU//YWKft8DvM/iBBLw6wAAAAEgAAAAEwRAIgHBuNl7kGPqsZsGEu/jt7dEO1GzqNn78ddXfPaRO1MtYCIAPwWQhytVkYizU99OTfL3qOY+4ui+rSpl3zJhwdaB3XAAAAZgNBTFZ0TJw20cwyaKS5suKMYLF1LIXpfQAAABIAAAABMEQCIGgMLcOYCdXjcdPPtlXJkCKWJTEEKTgGBn/2pUnMWpC4AiBit0Cdf5H6EHsiLCy0AJ3uQrlEKyYAochD9F+Jq/Yr0wAAAGcDQUxQRUufJJvBSS7plXk7vD5XuDDxpekAAAASAAAAATBFAiEAknkoP8F1i5BraTwnZIx5zNxofyCsBiuMfmGRmhZSGJ4CICmmL0cM4TK2QwFGQs6qXgXMw6HX31l9xnh2uMzgarWvAAAAaQVBTFBIQaH6oRPL5TQ23yj/Cu5UJ1wTtAl1AAAAEgAAAAEwRQIhAM293L+vD7QvUFo4Ly6ue3pZQcna6S6EED5iZYRhJ2f+AiAl40nVBg8pKfok8Fb8qxdERNaw9VyRj2Iw9komzHx6jQAAAGgFQUxQSFKqmRmdHpZEtYh5bzIVCJh4RA1Y4AAAABIAAAABMEQCIE2uCjOcl5R0XHaJZ78cngrqiolPk5tfo/520wVKbl6TAiAJfY2JcKAHQtrF8fOytDExJsIzjnXH1TlmoipZRHak1wAAAGsHQUxUQkVBUpC0F6tGJEDPWXZ7z3LQ2RykLyHtAAAAEgAAAAEwRQIhANN8gBhTRXGrXRicGc60IMHRqOxwrk2wgC6iLEt83jiuAiBz5N16Ntt3cIF6BxK83V68eYJO4h5NsCYayBI8rXwAAwAAAGoHQUxUQlVMTNgpZkzb8xlbLOdgR6Zd4p5+0KmoAAAAEgAAAAEwRAIgC8su3QXSL4mZtLDSCXSc9b7GEQg7AuWpOukZDGyOr7sCIFrrDH/2ZUhNNBKvuRp/QwgiCgc4lehdalI10nVzaTaQAAAAZwNBTFRBm47RVRgKjJxkFF522tScCk77lwAAABIAAAABMEUCIQDSBXr/UYHtzyEJE709p4psSZz7W6TfwI9c8C26dpUPNgIge6bvEqkUguR3uVb8u0AUzzpTS+gEkkgdX576RYJG4dsAAABsCEFMVEhFREdFJY/skLd4jmDaO8b4HVg53Fs2oRAAAAASAAAAATBFAiEApzPTkIiAwzpyM25VTgNf7sjfa+2PrP5aXp78bD1TfzICIBVP4r0pGOdmvb2X31aOhqIklemVohjSV4cntmar9OdeAAAAZwRBTFRTY4rBSeqO+aEobEG5dwF6pzWebPoAAAASAAAAATBEAiA+cfYNSW6RoZjtX/4RkGPpvGt6V+xVxS/YSuvL5WmSHwIgGpZhLaLryxUhHiS6urm9Rj6hPkBb3Tll85DJVje9ULgAAABnA0FMToGFvEdXVy2iphD4h1YcMimPGldIAAAAEgAAAAEwRQIhALGfnQuHJ/21P5HN7jAz1wcv12yd8KxyUmFxacuttFjXAiBi4e61qNty59YFQ41uqoOomObtsv9GF2PRnZac4hNwzAAAAGcDQUxW/BeYbuwHtJNI0kI4dV/zun9/0oIAAAAIAAAAATBFAiEA7b0TpVjTAQfPaXhdoAF3PldvynvpPXWC0Gv+8xmKpQ4CIGO+kWawbNyZGIRiQZ/UB3PZWqMNqQhhwIlXN5OxumfvAAAAZgNBTFhJsSe8M85+FYbsKM7GplsRJZbIIgAAABIAAAABMEQCIGpLNoiyOjK419E3AB0dVjRM8CZSERAtIX0WGmCWqLj4AiAmtFKR+hjv7ff7xpy5vWWRQAA0nTXyt0snBuVg1r1fPQAAAGcEQUxYT0MX6kgg+NnqahA1U6icsmG26n8qAAAABAAAAAEwRAIgGLRdFQpXTCSoLOfYw0yGB/ALZUHoUUPJ727QbhEChYUCIH61GX69BraY0u2SDCoI/RN+43/U1040ZPljLUso3diPAAAAZwNBTUJNw2Q9vGQrcsFY5/PS/yMt9hy2zgAAABIAAAABMEUCIQCCaKY7h+9/26kSsRtXrBI4PTc+X4XFR2uxXkNcexPEYQIgYJGdepASYnGwQODHBFW8M/LNfD2A0EMujV6/zpJaB24AAABnBEFNVEOEk2z3Ywqj4n3Zr/losUDVruSfWgAAAAgAAAABMEQCIH0+uqDk9DYxFQBLrrKxSlgfD7AvIC3uVQKLrtVSuiBWAiAMsp/0EjFXD9zko25lc4B/3RIuPRfqLOMwIs67nsO5HAAAAGcEQU1JU5Sb7Yhsc58aMnNimzMg2wxQJMcZAAAACQAAAAEwRAIgEBriGyKOwt4uLHDDrAcei8oaqaVgmhY1itxTv0VSu3oCIAuP8a2ZodWttHB8+KgPdHHioMYaJ7W2xIfFdVYqHBToAAAAZwRBTUxUyg5yaWANNT9wsUrRGKSVdUVcDy8AAAASAAAAATBEAiA0qmGDV0wjERG6olxHMTQi3gWe9ig8GSwxhl3DYjcZAQIgEGLBpXT9XxFUHuOr+QwpoF7bcCuXBbauEO+/yERjUA4AAABnA0FNTzjIeqibK4zZuVtzbh+nthLqlyFpAAAAEgAAAAEwRQIhAP94zybCBRammzLsNd4xSSRAPs/u9uaOEDFJ6/XJ4LAIAiBUye5CZ+vvZ6DvMTMwB/N5UxSgZNrzmXCSbD+HvRBCDgAAAGcDQU1Oc3+YrIylnyxorWWOPD2MiWPkCkwAAAASAAAAATBFAiEAnczQMxgEngOO27cbElWINSFbssKwbirJjjQfXzTWme0CIETD3GttZGWPpm9XYKs7OLDvoyI+qKYrYd0wGofku1NgAAAAZwNBTVD/IIF3Zct/c9S94uZuBn5Y0RCVwgAAABIAAAABMEUCIQDf1kOxaf92G3kIssJURDN+DTydZj/c4i/lrI/jSzkhyAIgYhRyHwBoSzogZggH+U9xXwKVQ/KV10SstN+JHU1PrPwAAABnBEFNUEzUa6bZQgUNSJ29k4oskJpdUDmhYQAAAAkAAAABMEQCIGgr4iHlVG/sTPgSO8PNfGkKobYgcha1itf35qH6LE+RAiA3kga8zLuANwXHodGM4QyfKmEGLalK4INNF9DHfX4YJAAAAGkFRk9SVEh3+6F5x53lt2U/aLUDmvlAraYM4AAAABIAAAABMEUCIQD4ZoYMN2ZRgkihe/vBZ/gb2zFNF0lr725HKQn7ZYBmrAIgJWYsaA84kSLkWVKiO2EDQJdIHjC+A0mhlKta29OfVGgAAABnBGFFVEjpWiA7GpGpCPm5zkZFnRAQeMLDywAAABIAAAABMEQCICNfZ3Cc+34EfJRTPvKQDThKNPnqhyXxBruoVPT9Yrj2AiBT09PcSA+SDdqf+ZusUrMrCij0TLDoTKRi3oFLmTG6KgAAAGcEQU5LUoKQMzzvnm1SjdVhj7l6dvJo8+3UAAAAEgAAAAEwRAIgEUgl0+VaCGVRyNlgqzIsE6PRjOf/WAPlEeUDyKpRHQgCIE/h2DMEYV6YUhZ5XFrGS5QICvzD0GXVw4LszrXrfhgjAAAAaAUkQU5SWMrnKnoP2QRs9rFlylTJ46OHIQngAAAAEgAAAAEwRAIhAOm374h9ScAzgppdrWKDyLClHtLec8bXvH4Q861M/qs3Ah8EPZEkja01TC0UVXXNpAVzFJS2CgeipbUeq+dpB+osAAAAaARYQU1Q+RGn7EaixvpJGTIS/koqm5WFHCcAAAAJAAAAATBFAiEAi7D4rifR1Yu+0LLKgocXlJr7XNQB0xSdQbhh//oUclACID0DoSmRDOfbRG/qFiag8bgJLKR7gptmz+dz7pypz8r4AAAAaQZNQVRURVIclJGGWh3nfFtuGdLmpfHXpvKyXwAAABIAAAABMEQCIGcJw0DorGMkkzDngboD8eKWfF79W4dARh7KLcK2sObjAiAbixkbX6O1O3TYYls7lXCk0EnsTSOG194Kxc5enl1yGAAAAGcEQVBJMws4IQ6hFBFVfBNFfU2n3G6nMbiKAAAAEgAAAAEwRAIgNV18IVEazyLNr0yorAPIhT9YvQ+LuL9dgV0YR7CgB7ICIH+Hh66BACheViM4WUJpg2sCFjJ8+zMCwIzkAYK0Txa7AAAAZwRBUElTTA++G7RmEpFeeWfSwyE81NhyV60AAAASAAAAATBEAiB6lrk0uRN8xIDeBybIK0mwupBYN8+dfi2XNUjZNO6oXgIgcee4FRSitEMhnBUtKJ0WesCxupxk9SGDtkuhrjTe6kgAAABnBEFQSVj1Hr+aJtvAKxP4s6kRDaxHpNYteAAAABIAAAABMEQCIAfI3nnRUUldk9obdXYDwEirxdhT32lO9dLkuQ2tjWeNAiApr8KsRNDHMNvqFB7DOLxYMrfFS4yuzmcfNZwXN0NBgwAAAGYDQVBPrrBHK8OxWNwWkMeXnuRbdiQ7TaUAAAASAAAAATBEAiA0ct4IXjwY+i5/ckA41ri/py++NLoufcGVDdgJI9UrwQIgfL9ct1sH+LiJPPpZ+VjaCgLJQHZVh8GDIY2tgNeMVlYAAABnA0ExOLp9y6Kt4xm8dy2033Wna6AN+zGwAAAAEgAAAAEwRQIhALKh8Kz5CKeZNNJqKGa89JQmbZCCFis8YDfds67a7SOHAiAILrd24cJqwkp5VyZtVIAWw/ZUZFk46OLNFkVBEjEC2AAAAGcEQVBPVBbB5bryG5+kvJ8sN05NwZ+rWsXcAAAAEgAAAAEwRAIgclLd4qBeN/dCK4Ev/ejHyHD0SHITTudiptWvUl7Oo/8CIEYoT8wfieJJDCnYr1tUIigE1b2E2QD/O6TJPzWwP+9EAAAAaARBUFBDGnqL2RBvK42XfghYLcfSTHI6sNsAAAASAAAAATBFAiEA2d+qWS9YPBhW2Mqf04ybSqP6QvOnKIWHbmVJ4YDUtGYCIBPczKAAA4YDbylh2qVmyZOKlA/Cid1hxWni4IMnuklaAAAAZwNBUFmVpEkvAoqh/UMupxFGtDPntERmEQAAABIAAAABMEUCIQDpTYMZhBJbcY2xioJSzTSsFnOFcqb9IRuvrrBnyALVNgIgURqOOeUfHqc3BIlwTclDj3mgDHXPA3+DRYbBuiKy4e8AAABmA0FOVJYLI2oHzxImY8QwM1BgmmansojAAAAAEgAAAAEwRAIgIcAYbhDswyXetJQebtvl02Y4z5bNpLCEad6le1CKEm8CIA8DXT0En/h/vDsJ3MuJdnW29JwX6Fa60JJBj3hIS/1bAAAAZwNBTkrNYrHEA/p2G6rfx0xSXOK1F4CxhAAAABIAAAABMEUCIQCT3/ak6IakxkIXWNmIvT1etZ4JOrHwLz0O3aJLM9rv4AIgP1wT98bd5BCxV1CWVh0f2/psubs1WC51QaFFmHTIpYwAAABnA0FOVKEXAAAA8nnYGh08x1Qw+qAX+louAAAAEgAAAAEwRQIhAPz59p53SF0VUebPN2dN+r/xqb5SuUfrFEJqRGhHc88lAiAaOYo47435OnOtBb938wKqM1EXjXujZ4UOXz4pIoylcgAAAGcEQVJCSVv/xF10DCE+GbaLQOntiXBfSV5EAAAAEgAAAAEwRAIgQIFLMW3tjWx1MwH0iEJO9JY5NuzwcXSXd7jo9P3ve98CIBQdwKywzczcRGl3aO0aqRq2iSvozbopkHsvu4v+WUxjAAAAZgNBUkKvvsTWW8exFthRB/0F2RJJECm/RgAAABIAAAABMEQCIHH27Nj1QlgYgcVkJDbKMJs28t4njQHHDmb41SucxMfOAiAYIB5cQ4f7ejYqxE8GcEEJgqhM/VfAzdlM5kO/J/tQwgAAAGcEQVJDVBJF74D02eAu2UJTdej2SbkiGzHYAAAACAAAAAEwRAIgASDRlYcAyb8mJXEvGWBGb2BNwqLhHTMwr8sTqscwZ90CIBUQnCQINA0+RtMYlbUFZBYKjPuPzE0Vktsm/ynW7WuwAAAAZwNBUkOscJ/LRKQ8NfDaTjFjsRehfzdw9QAAABIAAAABMEUCIQDNUggBbHXwK6MN6bSG6c+m5EodSUkJ/xYSUWgIIoL40wIgDhwoPxFVPAgKmLHWLfPSrkCS2vunm2Iu9M2v/6wniWYAAABrB1NUQUJMRXjNkVOLkbS6d5fTmi9m5jgQtQoz0AAAABIAAAABMEUCIQDRj7IVXDtKbhoOtn4lSHXB44khvmr/FL6IBYqrELIK6QIgQlw5Jlb9juW7Q+oh1kpVB/DgQWu/1efiTHGB9cLjSsUAAABnBEFSQ0FipnONiH9H4pdnb6sFuQJwmxBsZAAAABIAAAABMEQCIC0MP0xfJ5bpcTDvOtYMcLxhzpSH6O9g3/DPis1mHA7oAiAWHJon4GS4mo/TUkv6gYgBUY+Y9g4WzUwPaHjgX1FC0QAAAGgEQkVBUq8WJJHAshkAwB9MwPcRAjiqzevnAAAABAAAAAEwRQIhANJJ/Ebo1zO4PD3OFV+AUUkvh5gNdb6LmM0NO6qmE80JAiBcu8bkfy7eBhBaoRs6044nZT6bYwD4zIubXXtSzJ44RwAAAGcDQUJUuY1Ml0JdmQjmblOm/fZzrMoL6YYAAAASAAAAATBFAiEAsGkxKK/2BZ4nEQTFPZBWl+IXCXgwCYQcKEF4+9CXU2UCIHNJFXvWiPoTUdFPVOR1SIfyGEkOnFj95wO+f+pORIW+AAAAaARBUkNIHz+dMGhWj4BAd1vi6MA8EDxh868AAAASAAAAATBFAiEAvhiTCHONtqrleS9DD2KJJPDnKfUMf1hC5Gy2PrLiz1wCIHoHthxTqWGV5mvCuCeaMJ1Hv1Yihhqjs9lvqO9Q7SOeAAAAaQZBUklBMjDt9laGGKAMbwkIv3dYoW92tuBK+QAAABIAAAABMEQCIBQGgLaAFk3HW0YlUyyR7IC6qVRgDP0zid+Dl6g1Ne3EAiAu7vltJQloieDSamuJatuYmEUvDLq3jglLxv5LUr4e1AAAAGgEQVJLRakkj45A1LnDyo69jgfpvLlCxhbYAAAABAAAAAEwRQIhAJV1SM/ywhfnfbp1PmjILDvyZNTrl1VwYDBIXv4pUBe8AiAzKfLnoDJKq8bA9UVo1AvlLxqDtMvy9txP3JTmPhNxJwAAAGgFQVJNT1ITN97xb5tIb67QKT62I9yDld/kagAAABIAAAABMEQCIAVumZ+4ZP3EA216NKlUtPulz/4YcYZBtcwHhSW9BllmAiAf9GU13qw/RNEUISxHnFiNkB6rl/peHnZe6rG5KW3OXQAAAGYEQVJQQbpQkzwmj1Z73IbhrBMb4HLGsLcaAAAAEgAAAAEwQwIgPrAfRgq8IyXMnO7BenSEIi9L0ifweexyYvE1WM4mYHoCHxsSRnBBZo3zM6K2NfCocSKjE0fLyzSvt2p6AdrGISsAAABmA0FSVP7Az3/geKUAq/FfEoSVjyIEnCx+AAAAEgAAAAEwRAIgQJ1O6VlTRn9IusDFzUyUnKhTSl75vucsnJP5yqx6TC8CIDB8M+91PjD2DeME6XD2v0KcvxjZYDqSYXodUV2K+jV1AAAAaARBUlRT8BPg6ibLOGswIXg6MgG/JlJ3j5MAAAASAAAAATBFAiEA6f7pCpuJuDweXSmSyy6C0SYfcwMTa6ibULZWh7cuL00CICMe/bzh9utLltWtWS0a3ofork1vJaEhwu3JGhsu0RPMAAAAZwNBS0McpDoXC61hkyLm9U1GtX5QTbZjqgAAABIAAAABMEUCIQDulgFlG8uSJ0NycOpEkcitm7+zbLlyQ8PayUkfKg4fygIgeDOnpuusDtplBeTKEtOFnitmPGheJhEz/ibUFjho/Z8AAABnA0FSWHcF+qNLFuttd9/HgSviNnumsCSOAAAACAAAAAEwRQIhAIRpNUWTsJFfVBLbQwU67me21bDwulOu0K6QInJst3luAiAtdfwYGCr9AUx8qID2VQtg/NyuaWVUnJ/Wdg1fj8tfqAAAAGcDQVJYsNkmwbw9eAZPPhB11b2aJPNa5sUAAAASAAAAATBFAiEA4drQKPVufi8Ifr8zE/HdNK7r9gpIeRWIXQO4wsjX6kICIHYObVNPDvDb6CFMMSGu2dtxFL9TjxS9W8vpf43lsU4JAAAAaARBU1NZ+iVi2hu6e5VPJsdHJd9R+2JkYxMAAAASAAAAATBFAiEA9vfit2gjLHHwgiJP6lq5JRoN5OoIoY0QRJhSewRsTaoCIFG5VfIFK/fqJ3lSwTDTnQMCPzGeb9cP7l289AunVuUzAAAAZgNBVFgaDyq0bsYw+f1jgCkCe1Uq+mS5TAAAABIAAAABMEQCIGyX4Tl+RqaW9PVkgexl+/Wu27qf+Wduvi1z6TtRR8NMAiBLI8BXkEIkidtrmCTj5v5hkgRjtO6tPwO/7fEAOjCx+QAAAGgFQVNUUk97IpOMqEGqOSyT27f0xCF449ZeiAAAAAQAAAABMEQCIBvTlRWFPYqSZwOcEWeHBKWjBYMfoAmtoSyPbzue+tRqAiB0kODhIAv2kEpBOlAJSimEt6KQCcTmA46IY3Un5Yc/SgAAAGgFQVNUUk/L1V1P/ENGcUJ2GnZHY2UrSLlp/wAAABIAAAABMEQCIH1MjaJ9P5pnSBUeXKvQQQhee8TN8P9ZZ8rTtK+a2my8AiBrGFJR5g+knUP6uwsN5HujgkduCR1q2T7Wr7gPxSad9QAAAGgEQVRSSdrNaTR95Cur+uzQnciJWDeHgPtiAAAAAAAAAAEwRQIhANf8qPerZvEqZ0qkzLafiRpPug0Sx4OTT0+vcB9iXjXnAiBC6QMx4ZshiSTGN4jePQxpxDgqJItQw8/+MpxPOctMuQAAAGYDQVRIFwUtUelUWSwQRjIMI3Grq2xz7xAAAAASAAAAATBEAiB5GwOKlhnsINpW+fvcDL3mO+LQnpPXeyBDxzZODxCNLgIgI7Y9a3KP63P4vsIXVTkJgWlpKabq/15Q5iiXOYFw+I4AAABmA0FUTHi3+tpVpk3YldjIw1d53Ytn+ooFAAAAEgAAAAEwRAIgXUnHYODXkpYvO5sZSPJu2tYozAiplsEtgxMsZwA1gSYCIEF1dE7Xr3F7P9uk3wzztP6l3+gc+IPHVs2+R6CFyk1dAAAAZwNBVFSIeDTTuNRQtrqxCcJS3z2ihtc85AAAABIAAAABMEUCIQDn+TfyP5IpZ13gTSheHDwtCkD98NnKEQwjzFOHLkJX3wIgfsNtbfOPDNBTnSn6vDz3tFH6K4qjlqv3a2wGmncGXNMAAABmA0FUTZsR78qqGJD27lLGu3z4FTrF10E5AAAACAAAAAEwRAIgAlGtjGePx4Eed9I9WmK106HaB3GzgAdeejVWdmNjhS0CICERiX2bfjHy6xqVlXjYXsjoKtkZFb8xJvJt0IGm9+SNAAAAbAhBVE9NQkVBUjuDSmIHUagR9l2PWZs7cmF6RBjQAAAAEgAAAAEwRQIhAN4hmSFjfPP0Bq4e9+8GN23ILFIMKiVqa6TmC7GkW/iAAiB74KYjcI3GIhmSqklCcAPb0LfT2+F3WTZA7Ri5xW0MnAAAAGsIQVRPTUJVTEx18AOLj7/Mr+KrmlFDFliHG6UYLAAAABIAAAABMEQCIDKZ6KxY8qka6nLTnYx4IQzC2HqJCopG43RDlqFxekyzAiAzkguC23XcE5Mwp+H4L4jdxiz1UKAa0Ee05/WUZXlDZAAAAGgEQVRNSZeutQZuGlkOhotRFFe+tv6Z0yn1AAAAEgAAAAEwRQIhAMM0oE6zomZa9djYt1BLKT0zVb8FB+F3sWZLZVuDmj48AiAjEWDScHo21f3rtWPt2rrx5QCW6nu79JRyU4pW+KVL0AAAAGgEQVRUTmM5eE2UeNpDEGpCkZZ3KgKcLxd9AAAAEgAAAAEwRQIhAOlu6qs4PfarlnlCfh1pgI1NrUq5DGXkyaC6aVISbBWWAiBUBIJGG2NVRUeV785uSnFqFsbD7bWuXfKcs6YQ+TOlTgAAAGcDQVVDwS0Jm+MVZ63U5OTQ1FaRw/WPVmMAAAASAAAAATBFAiEA79JItM90de8BQhZsL3z4JueDuydVdq9arfXVOSWrD5cCIAm3YZNXE4DGhaX2yVk78GIGoewIKr8+Is1qTIkkv+83AAAAaAVBVURJTxiqpxFXBei+lL/+veV6+b/CZbmYAAAAEgAAAAEwRAIgGHFJfPQWDROwl0DVDusocPMIq/ONKncCkAwDPNPKL38CIDW4dJS+SXdsPwh+IUxXsBBsNY9TfRJj2w7EmvJ0U87MAAAAZwNSRVAZhTZen3g1mptq12DjJBL0pEXoYgAAABIAAAABMEUCIQCuj+Lw6fKyulUSd4Aa6pylLQZKN+CG5PcQIPaU75ezPwIgMaXWylVFJSo0rwHoPbg8G6lZGOYdoMpy10ZKrUyP2fEAAABnBEFVUkHNz8D2bFIv0IahtyXqPA7rn56IFAAAABIAAAABMEQCIBf9uDXQEoRHq4ZL+mI1DL2dATYwerZTKRuD5n3THzdWAiBLa7xVxiOftTLUCtpxFZ4LjQL6s+fXXm/HUdeYv5SumQAAAGYDQVJFkq+6QTv55do5GaUi43GIS+rHYwkAAAAIAAAAATBEAiArNE/nSw8RkAYwkc95fYQkS8m9ovUh9KQzOL1spG85mQIgPWol6mFqZLwgR31e1M8MdBTLOuyCMOPIK9HD1nxy6e8AAABmA0FPQZqxZdeVAZttiz6XHdqRBxQhMF5aAAAAEgAAAAEwRAIgfVxyFRKFIsq9m4xblz20hYRBr6MQthy/BkDbAmb8NeECIGKOrzgj+cEJu87m2fCQ/lJIOWzfzAAqJd1gYeJqELc9AAAAZwRVUlVTbF+8kOTXj3DMUCXbAFs5sDkU/AwAAAASAAAAATBEAiAMubEkOrx2F3tD6+oBhuizP6ru/jMyT3JGafgyOkCi/gIgbSpJvSMPNa+Jgd/BiBwe+8+iXWAYMKm6CAoTCmfieicAAABnA0FXWFTkbMiViDGOOWTKLBvpTbnVyj37AAAAEgAAAAEwRQIhALCWsdN3D9nux1l4r+2ntjS8RihXht8tXnjoa7YUrpZVAiB4nEyIVho5fnrhaDMV16CEfrafk53NT7IhgSYpORWhZQAAAGcDQVdYpR/HFCKjD6f/pgWzYMOyg1AbW/YAAAASAAAAATBFAiEAmia6xpkECgRo5YD9Rvf0YcDIumvT3N03hR6hnB/aq2ACIAWTq0KcE7uYvnSTpO92JM5JD9NBT1hQ1Wqa2NdWQjGmAAAAZgNBV1ge/fxhRsrYkJgXKErpkyXvHK9iPgAAABIAAAABMEQCIBAmuYnDpGmjpgEsxg5IPNTfl16myvu54QdndVoM4n0OAiAHygOG2rPJui6iKJnv8j7P9XWPAHpcU2h2TndL047IzAAAAGYDQVdHaWrMLeVktIaC1x0IR7NjL4fJpAIAAAASAAAAATBEAiAXv+rTnC5LMOkNWwwg6RPZkCNFRn6TLA+8/VV18TvF3gIgWzjpO67EQ47qNUEACaRkYOdLjQG3ke3FmoM6EwIzNe4AAABmA0FXUKltR8YhqDFtT5U547OBgMcGfoTKAAAAEgAAAAEwRAIgJQvFC9cysJqCKO2xwNllMYYctWh1Og5XJDJjtvfmmEICIBmlSaHpSFW1KXZ4R+DWwdWaS/c1HRGSmhwKFi9rK32bAAAAZwNBV1O4mQPd44mfAoC5mRMWjugzp4lrkwAAABIAAAABMEUCIQCjb2QNcYpqPrrQMkZobygUo3JdH9rNolaqbg/chU0TBQIgJXEPkiczfiHhjhZGRV59RRAgMamsRBiA/EOLhRwmwU4AAABmA0FUUy2u4aph1golLcgFZEmaaYAoU1g6AAAABAAAAAEwRAIgHflNXgVpcjiqJemP+7bcrubeNNW+kyYpRKHN2XMHc00CIHlT1yqyyKBf5vh4Ts1f/S/2xj9oz9Np9t+DW9Xn3wXWAAAAaAROSU9YyBPqXjtIvr7tt5arQqMMVZmwF0AAAAAEAAAAATBFAiEA5yIXW+26YPEQI3AGQ8xKl6K89IbHzI/tzeTVYMyJgosCIF4+6ZQqpZFSy2r8DAPliZEb2Yp/8NzztxkNdTaHt3ZXAAAAZgNOSU9VVOBOdlM+HRTFLwW+72ydMp4eMAAAAAAAAAABMEQCIQDHn2/sVXLdj/xl9gU7lnkQ5+slP407p6YhT+LkuF05gwIfZqqKJgwpYaUJPO6TuaQ8/X2COBnNAhpR0w6lFEO+KAAAAGcDQVZB7SR5gDlrEBabsdNvbieO0WcApg8AAAAEAAAAATBFAiEAhGnKgsckfp2C9E1x6e21ThZ97E00KRVrGaundmMPSwoCIAazG6NlH4fsqDvO0PVkl2um30G8LVAVQO4SI4ezp4YBAAAAZwRBVkVYMCEffem/NTNMf2FUXo7Qm/nZzBUAAAASAAAAATBEAiAzxrAVwqfiPWqIMRjzOSSRi1IVqJro435/CyE37D5w0QIgJl/UfppU1KjZaH4ZFHlJyky/cJcvq2JBFYAt0TzYFRcAAABmA0FWVA2I7W50u/2WuDEjFji2bAVXHoJPAAAAEgAAAAEwRAIgLmmTx14nScWCOsWeSPdALe0xV+sSxcTdzhZwzD+8npoCICCH89ltJQtC5hhy8JJbri37otukQkptiN5FPIQnJRaEAAAAaARXT1JLpoZRT699VCiSZvSD0eSFLJnhPscAAAAIAAAAATBFAiEA8/dwSMReaNibPdcl21FgW6HUIEPMHrZxtngQxwVFpZYCIGZrXYqWoYGBLCMYXFAmY2Y6MPUZmVX6xwTmMSaqruAfAAAAZgNBWDHNS0sPMoSjOsScZ5YexuERcIMYzwAAAAUAAAABMEQCIA5NdPizokarCK/tOLRBWr6XQUo1Et6XYb/QKjh6fNqTAiAv80nmnd7acvDbjE+D7J6zbJQSvQCPY9daI5hCGbYPUAAAAGYDQVhTuw4X72X4KrAY2O3XdujdlAMnsosAAAASAAAAATBEAiAIQvjqj3wGH5BoazKnmPMXBr25yHu0gEnV507iydW0BAIgbbDQLSYQbzHhSQWxxmPIqxnwS0CURCSY3DKwT2u2mD8AAABnA0FYU/XWaWJzduvUEeNLmPGchoyKulraAAAAEgAAAAEwRQIhAOAZ3G0bkF/LlMcxsZJ94VbWjQi8Cwtd5jPhuswXr4YeAiAaXHnd0a5cqOCNKEqCOJaoSRRkeX6AdgRm8SiMxNV4OQAAAGYDQVhOcfhbLkaXa9ITArZDKYaP0V6w0ScAAAASAAAAATBEAiAt/4/znej11v+q1eqCbewPrjIhjBxexA83ijyTknfjBwIgC20Cs9dMm/sFo0HExle4CpzUrLsBCMI2QY4P7ZCyA2kAAABoBEFYUFLdACCx1bpHpU4usWgA1zvrZUb5GgAAABIAAAABMEUCIQDToeBSBi2C1lta25AFMjYS4cHsL78ANQTZo12AEN+u2wIgPazNfaddGipCANJJGoq4S5ldtxzi3fq/GiYYUpQlA9wAAABnBEFYUFLDnmJqBMWXHXcOMZdg15JlApdeRwAAABIAAAABMEQCIDkSqUNjRLZbzBS+xLjZMZALwp8VqgSpMOdReAmxhfn9AiAtKWAwq8FnqIsFoBlLjc9M7uBvpgyumjMCXj8o/FwXXwAAAGcDQkJD59PkQT4prjWwiTFA9FAJZcdDZeUAAAASAAAAATBFAiEAmAeX1L7+A45ros02ewywKldH8hgBXUtjV4vT1AOx6Q4CICYops1UQrG7bWizoiviKDE42BTZlIrn03i6URzbqyWtAAAAaARCMkJYXVH8ztMRSou16QzdD51oK8vMU5MAAAASAAAAATBFAiEA/SUlh4GFYZWO2F+7jIFGBf7BZnNFcBPd6YxaTCp64MgCIDyOMEgTOY/l3i9BrwWJjhpYtFdL5B94WK9jnhht+j+EAAAAZgNCQUM0Sfwc0DYlW6HrGdZf9LoriQOmmgAAABIAAAABMEQCICfRQW9+QW8cz2URQvYBJHPJzMvtCtSillx5spNczdxUAiBzXIXhDwjWVFjNj/dywNuYgHNEUbN2zVh9dIQEcpcnUQAAAGoGQkFER0VSNHKlpxllSZrNgZl6VLuo2FLG5T0AAAASAAAAATBFAiEA7JyhRT9eXz+g85CZH5iRqdYGLKTNovZHkLD67CWv2t4CIH8mZ2Vsn5aGaAuT/iTiNtgA6mh/JZ3z5Cb5rUmSAjJtAAAAaQZCQUVQQVlr/6B6GwzrxHTOaDPq8r5jJiUkSQAAAAQAAAABMEQCIFwLlXkMWXWW6ju+3JBDLP+aeN/CfCwnSH/ovAwb+BOFAiBZ3V9e4oJQ4ceERRfvHu31SVvWK+vxOatliktUMQZGowAAAGcDQkFMuhAAAGJaN1RCOXimDJMXxYpCTj0AAAASAAAAATBFAiEAgfHsAPs6skcmt0OrbSV2qNOiUPsLfw1WAOV++DynmUcCIBIvBfRXqIyFdJUg5VnGOka29cqVnnfiH7zCzZZzTRtuAAAAZwNCQU0is/qqjfl49rr+GKreGNwuPfoODAAAABIAAAABMEUCIQCpm/aVxAXn8IROxgUbwGkZ545CbAcqYq1RJba/3zaIugIgJ3YQ92AxRr7TDTKf8mWUBu/HABJep6qia9H3oGSdHUQAAABoBUJBTkNBmYs7gryduhc5kL56+3cniLWsuL0AAAASAAAAATBEAiB3IZv45vFrOHuqOtivtx3eO5EXpd5pvSYBNciUjVa+FAIgJZeCKxG7/LDPGLs4lYlrQQNi8gb7YkpVsQFmVhIhFqcAAABmA0JOVB9XPW+z8T1on/hEtM43eU15p/8cAAAAEgAAAAEwRAIgUC76VD2+oa2iCJhFvF4CjJxrXPm9emTc+tkiX93B68sCID3qOdlyxbqSMjawmMbzcc3kj2smDdmBCmy+No/YFTaEAAAAaARVU0RCMJYnr2Dwkm2qYEG4J5SEMS8r8GAAAAASAAAAATBFAiEAroGCBUNBorJqKUAA+CvVS48w+D1jNuBXoA7IKlMLl50CIBodRvvLpC0uCe1aciNbHE3ksh0ulGT78740FXYEj0CeAAAAaARCQU5EuhHQDF90JV9WpeNm9Pd/Whhtf1UAAAASAAAAATBFAiEAwFOOTo8ZxrcbCHWDDce1doziiwuUZv3f5JwCoPy3A8QCIGRQISL4l5r2I1UOqnweVkBbNI4ADKPS0d2FRrYaVcMWAAAAaQVCQ0FTSLW7SFZ7/Qv+nksI74t/kVVswqESAAAAEgAAAAEwRQIhAPnVQPkuFc13oaPaISk/CZuo+IrvZavUN1wVGG1Vyy8KAiBnPuXH3iz7TZU0W1envAHEhhuFUY36xddEdXbhxWNAdgAAAGYDQktDyIvgTICYVrdePf4Z603PCjsVMXoAAAAIAAAAATBEAiBq/PMGhKv+HDrnBw5uB6ky306YefssWQlOw8Ecl+m23gIgLjQzdl0wzyWiWdk4fUZ0jubu36vVvxqFMTg7dPc9C/4AAABmA0JOS8gMXkAiAXKzat7iyVHybypXeBDFAAAACAAAAAEwRAIgGn5FYtS03sJy3WJeiWdjOp9YO8lLZLOxZXRErPd+2ysCIGHRUgUk1k36yS6QZro1L2w2KxY2+D+gYlFMMCrY0XS1AAAAZgNCS1hFJFvFkhnuqvbNPzguB4pGH/neewAAABIAAAABMEQCIFY357ZnuO+HrimGm1rqqlaAzNC3E8qVzYu4f3a2sMZaAiBA3UCZQ7mbnH57VxCMBmZodUYjons8JaKjcGnvJF6yaQAAAGcEQkFOWPh/DZFT/qVJxyitYcuAFZWmi3PeAAAAEgAAAAEwRAIgdWIPoIvo0WI2gfETFyBQuSMJD09tbgefZEQMNUXJQToCIAPCZinbhs8wLgY0PWh93AD7SVFZSTq2KxVG8XpKqMqXAAAAZgNCQU83TLjCcTDiyeBPRDA/PINRud5hwQAAABIAAAABMEQCICrxu8/7e0wSyiWWo9wkS5a929kderfLd3Yfi+jROWJsAiA7fTC403dKh52nDG0HJg/HUIlLVDp8IqX9XphbMISHuwAAAGcEQk9ORAOR0gIfidwzn2D/+EVG6iPjN3UPAAAAEgAAAAEwRAIgTBQOU1WEMXRXNOdaxLjj7efbeiwI8SI47rxiCr4FVUYCIH58agATMNVi3pz2cQD7uY9v4GX71jRoyVIzuOazua4ZAAAAZwRCQVJUVMnqLpyejthl20pM5nEcKg1QY7oAAAASAAAAATBEAiAbYTtP3mOQS9xmeBRnNoTrj/07FffDDOOj5vJzFZEj6AIgESYUg9kyWw3EDykwu3XplfmYAT6sQsoEhjTnPL1/mCwAAABmA0JBU6ftKbJT2LTjEJzgfID8Vw+BtjaWAAAAEgAAAAEwRAIgAsBLaOAj69B+6LmWuxqj/iZKn4O+9mx18z9dTfLgqW0CIFTYn+30Uyy4R1GNLmayWPjoNfLHt2mR7Bi9D8r/GLnCAAAAaARCQVNFBxUOkZtN5f1qY94fk4SCg5byX9wAAAAJAAAAATBFAiEAjdH9LjDmgKBH1JE+JUzgCpihXQrohbMlaw5J5AkI8DECIA7N0CpQqqMi5ReHmf7C5WbezDIG7HBhqatx/894g6pBAAAAaQVCQVNJQ/Jckch+Cx/ZtAZK8PQnFXqrAZOnAAAAEgAAAAEwRQIhANR1RYQPUXf3HSg1PNCLiDifi8RP0UiKjILWZ34XWvNdAiBz4h/7Wr73x7Dh9f2v/nOeO/0him8Y905GpNpDHVRJawAAAGgEQlNLVMA4QbUTVgAxJwfTnrKvDSrV1RqRAAAAEgAAAAEwRQIhAI7iwyVdNt8uyZp+tA1Ee0Qp7WXKNcdTcOPNlYvnm3xOAiAhmvphxBKN27JLxkJ8eBKYhznd8C2lZ8zRx6teSdrBAQAAAGYDQkFUDYd19khDBnmnCemNKwy2JQ0oh+8AAAASAAAAATBEAiA56IPUnLsQ6GgFJ2wzLUxNISVfHc6BbLVP7+VIQSYxYQIgAJVZbnRmJmHJO38xwOkoLjOlcVE0wOfTqYz1pGN+1fEAAABnA0JBWJoCQrejPay+QO25J4NPlus5+PvLAAAAEgAAAAEwRQIhAJfHv696k5niwjsyEvGSRXv4GV8+A9G7Ixd1yjgc0JLlAiAfGvP/kDHcuSlsdBSJA/RdOt6B1cBVKbbHnvV1V42S5QAAAGcDQkJONaaWQoVwg7ovML+rc12sx/C6yWkAAAASAAAAATBFAiEAoPOeqnVUJwi/aKzObQjwGHaGgOf5LULFTsMhheymjvQCIG0Z/fekLzH8Gl/JfCD2ZdFHzeU0ic+jwpomvkbX8UFNAAAAaARCQ0FQH0HkLQqePA3TuhW1JzQng7QyAKkAAAAAAAAAATBFAiEAkZ8Xb56B0Y3ztUYq+Ptd2rjL/AHt/8+OK+U4hJcuUrECIDnDpducDSu6GCIsJF5CDo8tG2wPqGib/e0tLZOUeQKTAAAAaARCQ0ROHnl86YbDz/RHL3041cSrpV3+/kAAAAAPAAAAATBFAiEAgqwdiJ0EcvgQGm79pZbOzqLEj2lgmFsfA3TZA4nHcEcCICD0pObJeKmxKBYUGmvS2z0jAVwCy+jxrHGjgjPSg5bEAAAAawdCQ0hCRUFSqfxl2jYGTOVF6HaQ4G9d4QxSxpAAAAASAAAAATBFAiEA1VXK/wlNdxgrebAYUNT341/I/cP1jZDxW41fB5VFAJECIH+waiag0lFXl+H3500zviMPfP993wvQAMtQyouqleXdAAAAagdCQ0hCVUxMTBM+CB37WFjjnMp05pv2A9QJ5XoAAAASAAAAATBEAiBmDhbXJ1X7vJ3s8JSRxAlF+5d9jq/6OVnjdJltC3oJRgIgaBq9wxlP0Db4aWulYcBBP6atGVZzsHvQFlFlC+PxeMsAAABsCEJDSEhFREdFAuiKaJ/fuSDnqmF0+3q3Kt08VpQAAAASAAAAATBFAiEA3DTTkeiAn/LX1zUZFEN2xlHjqy+2lnp6axD24V9iQpgCIECbVAGwlvqS26JONvq0Jez1nymKTi60lQPFvBCSSRzDAAAAZgNCQ0y8EjRVLr6jK1EhGQNWu6bTuyJbtQAAABIAAAABMEQCIBTaE+0XzuIbhfdy14SOK4LmANBJnnDt2vZXoJGSvU8zAiArFHEnw4ndHRUEwkjvKxWsvkDIOfHMPFig60sUavtBcgAAAGgEQkNQVBxEgXUNql/1IaKnSQ2Zge1GRl29AAAAEgAAAAEwRQIhAP4dxSL5yT7PkywgZspmxwqAkTwfKJxXCB3zC7sdFT4rAiA0dpQj2zdItnBwMwk8FWPHNCvYdaa7RpHWKCUr4wRhZQAAAGYDQkRQ89y8bXKk4YkveRe3xDt0Ex34SA4AAAASAAAAATBEAiBy7kh8S0u6ZcUrYKjdcnI96LlbFg2TIvL1TpWtEJ06EwIgVKYxDJF8XTQkT5NnnhvBnzCuGDUN3Z3tVz8MLqii8hAAAABoBEJFQVIBbuc3MkioC94f1rqgATEdIzs8+gAAABIAAAABMEUCIQCnRBpAEwS4vOf+DbDgErcRxP0E1kckhIlWid+J5jwnkwIgEvW7QP2qWmJYaL04fcqBgf/Mh0tiK0T0jpZTmp/kk/cAAABsCEJFQVJTSElUSN7hnIG4mpq0czYbrnoZIQ8t6qQAAAASAAAAATBFAiEAkYFrixjbnzgWk4g470UD4IfsiaHbI3j0TMbQbMOIzQECIAXZR5zepf5AnLL3/BtAYonLtpyX/wtajrOfHHarqNDXAAAAaARCRUFUL7ErzPb13TOLdr54SpOt4HJCVpAAAAASAAAAATBFAiEAub3eHxyRL0FGz/c0NaHQV6qRlrehhiiryIzJoSjgAeQCIA/8HN+hH1LBuV3qDdljibIpwtkHeyGsS81Ggav18wOeAAAAZgNCRUVNj8FFOg81npnJZ1lU5lbYDZlvvwAAABIAAAABMEQCIGHl4v9kzikWoHV4Thy/Ivu0lmt56kYm1VTqLp443CeMAiBwkKvk6Fu45Og/10i+3WWXbpcYjm2jNAyG5pqDPq7n3QAAAGcEQkNCQ3NnpoA51HBPML+/bZSAIMOwffxZAAAAEgAAAAEwRAIga/2P5KVhXi2CvJnNFh2wFHdNty8ifLOIkhBT/b7rj9UCIEXeH6iEWUDNpAqUdxn2/F4T9qabtIeKy2W4vmNbetARAAAAawhCZWVyQ29pbnTB5LjK5ZJp7B2F09TzJDlgSPSsAAAAAAAAAAEwRAIge9avG+yFWEE8vDAq0D9k31C0fxYXkfK0fLlVmpScWY4CIAxqzn4iwjt4OT6YPXxvFWFnX8FBLCEe60kwfX/gCFaqAAAAZwNCVUPKPBimW4Auwmf49IAlRef1PSTHXgAAABIAAAABMEUCIQDsJ0Kp+88Q2Gw0JWrVVZDg7MkexJYvLEhXhOuSMPuHFgIgJ4bHjekmfVRyEfMSPLjsxSLBjNyPPoQ7/rUEc1RTGnkAAABnA0JCSTfUBRCi9byYqnoPe/SzRTvPuQrBAAAAEgAAAAEwRQIhAPEnvxEFufLZ+Wxt+A+IyoU5RRLPDeAU7NaJWv7YiThhAiBqLzPBSHI2xfwKZY/1YYUy3uQFC3fJMNzN+KHHlP/xXwAAAGgETUFSS2fFl2JLF7Fvt3lZIXNgt80YKEJTAAAACQAAAAEwRQIhAI+sovlheH7zpxqOLGFJvLgvztlMZUCCevCf9DACyYuOAiAtdTBDenjdqjNFRQ157SxbHRD0Ug8WtsHqQEno0qzS1QAAAGgEQk5GVNosQk/JjHQcLU7y9CiXzv7Yl8p1AAAACQAAAAEwRQIhAORGa5C8BqbqQ3ZgssK88nG2Hmnx9GsMgPa3OkyF+BJMAiBHv+yy38wJfQvtHm4b5VJRcR4NA+SgAe9N7O14/A1mZwAAAGgFQkVSUllq65XwbNqEyjRcLeDzt/lpI6RPTAAAAA4AAAABMEQCIHG7fkdH8tOQrDhbAT9zF08Sib/KPcqcYBkxv/8Iji9AAiBH97HrdzX7Wh2hViEG2prDvw4S9wwUjZKC5rixJfvp9QAAAGcDQlBD6GWgT7DVZRB+r5BJ7yLCfdDEu+8AAAASAAAAATBFAiEAwZXB1pwDdbkj3TM+7l6ML2BJi3pdPKZR9icRA986r0ICIH+5AjGm7cU7bwfxwJpKJuyGjVmsNcWqmjhFOGwxl9FcAAAAZwNCRVSKozp4mfzI6l++amCKEJw4k6G4sgAAABIAAAABMEUCIQDaDbVjDz33qr6JU749VGkLgvfkLJpcIcAEf+w9ed6NbQIgaBAZ901wdEIqgNNeJUinyJoWDQq8ayOFm6GHMJkTS5oAAABmA0JIUv5dkIya2F9lEYXapqR3Bybisn0JAAAAEgAAAAEwRAIgNW4R4x0N1HiEOM4TlKuFFZKEH9+WNN+aRbQLB4vT1JUCICcVY/tIO0S9sh6prKEyYQwHoaIuhCyV4J1HpWPsw3kDAAAAagZCRVRIRVIUySbyKQBEtkfhvyBy5ntJXv8ZBQAAABIAAAABMEUCIQCPzl0FSzOkBZF0CQgJJVS3ct2qne2JH0hNNFxhudeT6QIgJh4Wlw9mscQ4I6OpoALmyImS/00fOhAysaWZNJvfq50AAABnA0JLQrK/63C5A/G6rH8rosYpNMfluXTEAAAACAAAAAEwRQIhAJ6e5ikMDLDfM6WBmPkePEAv3T2ZG3BtkRZOTQRSfuZBAiAFZqlW0fuASEDyBJA3sCLom8qAKLvA2p14GovP7f5QEwAAAGkFQkVQUk/PPIvi4sQjMdqA7yEOmxswfAPTagAAABIAAAABMEUCIQCuTSwd75kCRKb3AJAOriot4hfanIZWq7sWqIcKSV0Q6QIgWCXmOJYpcqXEyXGdixC4ghPE73p+smCkM0dUgcqIoowAAABnBEJFVFJ2MYbrjUhW1TbtRHgwKXEhT+vGqQAAABIAAAABMEQCIA8mrjttkGU+tgxxTHboZDlE6yVXkFiIxYPWehCOB7ByAiBVLSChE4ThLo589CgQUcMn9CJm2qtmF2cUeqm1v5vJWwAAAGoGQkVUVEVSp5JaoqbkV1qwx00WnzvD4D1MMZoAAAAEAAAAATBFAiEAusL/4qdxslIpSBjDBZZbw2rOr7nOgCs2ArnqGijWIYwCIDFMieN31A9Orz4Wx+KGfmLN1QkYA6KjY47wBU9JWOhiAAAAaARCWk5U4a7phJU2X8F5aZwbs+dh+nFr7mIAAAASAAAAATBFAiEA3/pjJaE8dHL98KX7RyenpP/eBwzC1pOv+DlVOC4NAcUCICisMNkFXiK6f8nkMmohJSrPDA1admkoIaPefanl6VDHAAAAZwNCZXo4Odi6MSdRqgJI/taousuEMI4g7QAAABIAAAABMEUCIQC+OqHe3cJ467JZyzjnetaCwiBjHira22ok4RcXPUIl1gIgSumI41qAIQRu4ZjCHRn1Bcw+qc1RvvCuqlU1OghEjiwAAABmA0JHR+pUyB/g9y3o6Gttx4qScao5JeO1AAAAEgAAAAEwRAIgRGvypGhJLrXMSD91bVuxaQi8CJ8PK1P3s1DFgV5BPgECIBiuUB4LVQCYpUgDdClD3cug96GfZiLSB5a+8MGSDqVZAAAAaARCSFBD7nQRD7WhAHsGKC4N5dc6Yb9B2c0AAAASAAAAATBFAiEAuiG54Vzy5XLZh8HbbuadBdraEY326YfLS9TagvNBhHYCIAMsKPW7V4jneBsjHUKVcy0g063gYTU8UC1hOCJWx3ERAAAAZgNCSUQl4UdBcMTAqmT6mBI73I20nXgC+gAAABIAAAABMEQCIFu4HwTKmtpc8IVvyNNFBv+o8fQT0Gmd68/s0ziqLDYpAiA1FHolQkJ94QrARnoWdDIMTLAVJ5cNhhkfQwnZwS1spgAAAGcDQkJPhPfES2/tEID2R+NU1VJZW+LMYC8AAAASAAAAATBFAiEAraIXaWXT5EceJZRoJeqtLNR60qwxeUWkKrSmT5p1W/gCIH8MUK/Yc5bn3XZu+LphG5+0en2wQ7haPzL7GbXW6xWsAAAAZgNLRVlM2YivutNyibqvU8E+mOK9RqrqjAAAABIAAAABMEQCIAbfzQnhyClTDu3wat1jsuDPm0kGjl0SM1unWcsGnTobAiBVJ02BGMbJJrK+68YXLOXJQdEcW1gQVAt+5kPBFRizXwAAAGcEVFJZYixTflYk5K+Ip65AYMAiYJN2yNDrAAAABgAAAAEwRAIgQmYeoy+JzXOEalz85n/HlOYtvgq8Q7CUX6c9aCypxTkCIA3HDT1/WHOWbItOgN7dQzXh4+jqqb1B8B8BMTsHvXAAAAAAZwNCQVLHPyR0ABrR1q7WFa9TYxFIz5jeawAAABIAAAABMEUCIQDJb0F6FAZVg9wsueOCD1M4NwSUZFktQNhpWzGnp47J3AIgZh+I2O/nPlB9d1xOcu6zuUtIegh70ieFnjh0piZhc3UAAABnA1hCTEmuwHUuaNAoLbVExnf2ukB7oX7XAAAAEgAAAAEwRQIhAJ2ea1NaN7Mzk6pfI4GE6p9BsV/ptEoX2oF5jw7gTmQDAiA0f0lPs5BI50K2DybN30SvWt3jMsCVLjpfcofSU6YGGgAAAGcEQlVTRE+rsUXWRlKpSNclMwI/bnpiPHxTAAAAEgAAAAEwRAIgZey8jv5MZSmMqkwo8Ti4fSuJAPz7UNGMfHNU6D3fZlICIEUhBhkqoDq5Xfp/aGQtt+jt3ggThvJMcenCMeZN6OUhAAAAaARCQlRDm+idKkzRAtj+zGv52nk76ZXCJUEAAAAIAAAAATBFAiEA/A4OA2LL/UKiSxCb3Iv9AolifOTeCYZgBUreibdIAjECIBVWhJYbgyg/kivlxm/ZxXj2JnigDVCKjtwgTsAczBWpAAAAaARCRE9UeIT1HcFBA4c3HOYXR8tiZOHa7gsAAAAKAAAAATBFAiEAvtS9X/KWpeUCNgV0xZdJiqNM1eJ6ACMb6rC1hjZcY2cCIFzOVnjCAbh12Te6oz9DMTreTSXLEFC2yNFH4K0ZqdQBAAAAaARCRklMjha/RwZf6EOoL0OZuvWrrE4IIrcAAAASAAAAATBFAiEAwJFzrPW2YuTuA4DDnyB+vYrHK3Infe6PBHqTJ0OTy28CIFxQgiZdIQNMFkBfliREjwGkvrRxfguBxG0DurLsXwUQAAAAZgNCTkPvUck3f+sphW5hYlyvk5C9C2fqGAAAAAgAAAABMEQCIC2bwF8X4LCcrju+6AWznOGpQtopp9eFuGeaD2Vcg0MZAiAOCXSgtIWGuLKxqzFZl0EcupCnDTPcu21mHRQTV8doVgAAAGcEQklPVMB6FQ7K3yzDUvVYY5bjRKaxdiXrAAAACQAAAAEwRAIgd7ZMjqyr1ttrnmpdgPVROOwVvVXyvH39GK4AH3of6mQCIHLzkqPGDhBfl6xy2pNn2Cx/vC7JnrxjE1tSxN+kV2MqAAAAaARCSVJEcEAd/RQqFtxwMcVuhi/IjLlTfOAAAAASAAAAATBFAiEA66CUl/GRxZ0mOA5zJpVzRBrFZouqh++IzK+WT9iCv/QCIAFZchkRz4kFz+7Ib23BvKyXtYphtoyQVlZL6CERSMLJAAAAZwRCVENBAnJYNuvz7Nsc3xx7Avy7+qJzavgAAAAIAAAAATBEAiByszCNb8VYpG7uIrdNk8+8apP1AOnIDN4sPExByoXxOwIgNbLS3YHCR0AEXAt4IRE6xWZ7iGgL9b9/TBTPX5ckad0AAABnA0JBUyoF0i2webxAwvd6HR/3A6VuYxzBAAAACAAAAAEwRQIhAM5DNKLxYOkOmZ3AM5DnuZ9zTcmM62oCoJ2B98bTTXpNAiBt/KGMa50vRcMETXWpy01HhkibEm8oY1YCHmjvrNMGSwAAAGcDQlRap2lC0Ez7u3o/IGh6wdEdFQGF840AAAASAAAAATBFAiEAzErU+hgldxTOXEdOV14gbHs9otOcohze0jxGOJdAPr0CIHAgLRFsif+wNpur7dsYwRxF/9ifj7OXEXlPQNLKNcS/AAAAZgNCQ1YQFGE+Kzy8TVdQVNSYLlgNm5nXsQAAAAgAAAABMEQCIBYVH8UK8siRZynRM2rzNk5B3ii1iiywpMcBnYRT2QOAAiApQPtCfGHvH5koQp84nW/xDrl3DdBNJcOGasIBW4us8AAAAGoGQklUQ0FSCLTIZq6dG+VqBuDDAgVLT/4Ge0MAAAAIAAAAATBFAiEA6Wks51KkYoFrk5hlZFjTcV0rDwugo/lHii6MD1WUeywCIHKQbFBchWXNLeooNHqo+DAzmr9Y2YaLZiDEpVcbu7tdAAAAZgNCVFEWsOYqwTovrtNtGLziNW0lqzz60wAAABIAAAABMEQCIEBo2hc1ReVXJQd3nDcL0/MoIELUAoVVe4iUzuRQydr+AiAVybKeD2BtW+zBwckW8E1D+849fVsReGW3QetTEWpfBgAAAGUCVkSam7m0sRv47M/4S1imzMzUBYp/DQAAAAgAAAABMEQCIBhtehp9iTGKUC9MlM/SBSMSj5rXQCBgRUCdt/FSOdttAiA2NxZaoDYqXfZ/PLKTsC6YLBHrgcIz0nSHq61u2pbTTwAAAGcEQlRDRiJZJ/j6cdFu4HlouHRjZNHZ+Dm9AAAACAAAAAEwRAIgHkmCsMC087dcZlTxm89cANyjWN18SBhVZSPHX8uAsw4CICGsQQeMg3o57vQllf4oJTmwjcienT7EL8ai25dpjzV+AAAAaQZCVENPTkWH9ejDQlIYg388tn25Qa8MATI+VgAAABIAAAABMEQCICSUEOnG2Jkx/A2ShogtZpaefV1OXaUBEvb0nCuIuddQAiBLdVuRJmylxxLPZr7GA+vLaURDiWyY84zRco/PYmv/MAAAAGgEQlRDUmqsjLmGHkK/gln1q9xq466JkJ4RAAAACAAAAAEwRQIhALeIG/xDzkNXUSAy0RzqqVUwOtayC/YevSFBkaQCSexIAiAnbHetA3uVB36/xFFPm3u5sQoAnNZ52dKscf+1ZJYzpgAAAGcDQlRL24ZG9bSHtd2Xn6xhg1DoUBj1V9QAAAASAAAAATBFAiEAiurmGwjU4EQFSNx5eqTnIAq52ytooFJVXyWr7OtO0xwCIEAJRYyw5McaO35w48XiIaStkEox2J6uZvCrzIkyG2RMAAAAaARCVEMwxPM/Fe0vLF+NW1Qt0wUYpQ2fhD8AAAASAAAAATBFAiEAu3GoKAF2x7f1w1tAAl/W+3Ficvkj1hZJWv9oJuxGg8YCIBrGjrQtyfvOQQ8/mmM5yERPMgs4DJLOkdtNTUBdg99TAAAAZwRCU09WJpRq2l7LV/Oh+RYFBQzkXEgsnrEAAAAIAAAAATBEAiASfU+AUTrfym+QcV7qDMxKBLrUctjcitYl07J4giLiIAIgcJ3veSoqqaii3md0+8yhSU5CRNP9u7QUU1EOyZMf67YAAABnA0JERxlhszMZae1SdwdR/HGO9TCDi23uAAAAEgAAAAEwRQIhALXalCghleAvJG3UWEL/dgx32K13L025dKgAeZxrz77XAiACKFlx3eSM+2vLmn4bwds3BkeaOe7h5ZXBz+L9NRyndgAAAGcEQ1NOTynXUnesfwM1shZdCJXocly/ZY1zAAAACAAAAAEwRAIgORMrI3W4NkfVZ9tDkpaaUe4ma/7/3AsPQSatwwd3NDACIAIsE5Z/B4l+juiBTUPbeZ1EGI6ifWKqSq994WlM5XbDAAAAbQlFVEhCVEM3NTKmwEAEXZYuS476AJVMfSPM0KK4rQAAABIAAAABMEUCIQC7qVGxgWtYHGYKgShuBBszKGN7Ut+aMDrYZ1+aTjkMeQIgHSeDdgetDv+g8YvYrccNiFbbL4C3eaQpGO4piVwlDmcAAABsCUJUQ0VUSDc1MqNfxQGcTcUJOUvU10WRoL+IUsGVAAAAEgAAAAEwRAIgO0+RvPiz6fEXkuDQaPLflyWpXYsPuWGiI2Om5tzYD5gCIAs/RYEIWnOunhxXsjzRvdA6ZSvpRbm7ojAduMeNk3m8AAAAZwNCVFQICqB+LHGFFQ1+TamIOKjS/qw9/AAAAAAAAAABMEUCIQCyHhXdRnwR4f7QAnJ/3uDHA628Mr6gLzwz42djlX1kqgIgI6wwv3XAoIXxWURVq4pRQisM7ovUoKsyRN3X1rm30mkAAABnA0JUUkmaa3e8JcJrz4Jl4hArGz3RYXAkAAAAEgAAAAEwRQIhAOm429tNk/NKLhEeMPk5J2LjUDjL8bzEOhQJ2KotWKG2AiBaA6xcM3pKIVEz8DPXjwcmywZHVsyvHUWnfeO5I0JOGwAAAGcDRkxYcLFH4B6ShefOaLm6Q3/jqRkOdWoAAAASAAAAATBFAiEAueqhh0K1GQ6By4yUqbsWAnJTN08/Tv76io6UmfQrSk8CIEHtiAYHINELPjlbiJTiBOM8jDc8PA6QC+OgAa7cmWIsAAAAZwRHRUFSG5gOBZQ949s6RZxyMlM40ye29akAAAASAAAAATBEAiBIhIr6hf4XCFcA60ogvxFHfgk2qIpE4qoUf/ycvri3dgIgPkJTASgTUR2AA0NYtHuBv99AU9vJSJn4q46LOWcSJDQAAABnBEJIQU9tfH12TW8d+iVsdKu0xNeGHY7mTAAAABIAAAABMEQCIEdT8lGKfyRREoU/jm+DUO4roaFJUwP7kLcCEK5z2zJ7AiAs299ZDNDxV0st3I90saxOGIgBXK+DrBXoNVbUFEa+cgAAAGYDQlRSy/FfuCRvZ5+d8BNYgcspo3Rvc0sAAAASAAAAATBEAiAk7FZE4Pnq3tJ8Bj0Z9B3WwCcKxAKEXQvVIIeeY/jZhwIgfnavLOOXoto+g5I3bLzmb8R/fmN5j2XFOYKteSo74REAAABlA0JLQlw5vGjliiQqYk5PyWvnejg8UgAtAAAAEgAAAAEwQwIgSyxUTg+e1XVi/FgMyS5cb6GTzoeIKN2Br8sDJjnwMo4CH0hhGUmFf90bY88mvQzVKhajrUnb0smlCGAWNKXvhOYAAABmA0JUS/g8kRvpfITHjXMoxNuJwweQb5DcAAAABgAAAAEwRAIge0dxSplpDdphDvxggV7XNsOSqsVjlADKKDeWqQIVoMsCIGsQ+25QtvNNSpy7Av7iEudc5uKhiK/qEWMxaafrLrswAAAAZwRPUkdOHpWg05w9mKkmp3VlEIrQhPHp31wAAAASAAAAATBEAiB3MBhci1GXJKG7HnLIvnB8qkudV6Eeywjsw3V2LKEH2AIgdxMXnuDSMZx8UHuHvTw+QSE7xk97T5AzHSlhRWzc4eAAAABnA0JUTJJoXpOVZTfCW7ddXUf8pCZt1ii4AAAABAAAAAEwRQIhAN2GidhoE6Aqtk6UFQxfq0yr7Ca/gDhZlehFS9K2M7DPAiAqXcUskWfamF0Xc0GNb715pzHbncx337a7TFcb7dkqmwAAAGYDQk1YmG7iuUTELQF/Uq8hxMabhNvqNdgAAAASAAAAATBEAiAyXLPukjePetxujY12Vp2tz0fCrFrQKlJOURtFV2EgwwIgQFHV7Ie5b/GknIWwzym7oS0mRzmMBcmzwpKRAcFwkIMAAABoBEJUTVgcKJoSqFUrMU0NFT1pkf0npUqmQAAAABIAAAABMEUCIQDIHI67zAnR2A+McWjr/p0sPgV58tLekHEG0N9X43iLmAIgEI0NzlbRdG1RIjPF496s1qkaLQsjixu4NWqTRM6rQUgAAABrB0JJVFBBUkvz0p+5jS3F54yHGY3u+ZN3NF/W8QAAAAgAAAABMEUCIQDaKquOEajd/V6dvtJa0V3/PAiaU6+6JMqc3BL6sa6JQgIgWBMptoAo9VidW1Ww0HNug8N/SalqqnBm8dKjVFy0hjYAAABnA0JUUtQzE40SvrmSn/b9WD3INmPupqqlAAAAEgAAAAEwRQIhAM24YjE70P5jt8HlcyDqNQke+GHSr+Es8NisiQ27ucLhAiB9EoN+W9ey2/4ERKgWCznino7TfudLFoOdZT6py3TuiQAAAGkFQklUVE+hAeJ/Bql5hbkl4kQRG2FWDs2X2wAAABIAAAABMEUCIQCOvq4vFYl+zfphWd/Lmhm4rb6oNkz1Qm3cubZnBFFnkAIgG7Z1LothaD11t+aHTBYamJVD5KLhXmSbTD4ijt0XuPQAAABnA0JJWLMQS0udqCAl6Ln4+yizVTzi9nBpAAAAEgAAAAEwRQIhAMInsRfRmrG3w7+Mam92HwgYHI/3k8/EzwmW41MZdbTEAiBuFGiFvOmCUaMkMZTOUQfceRYIg+LO9rUWL76Lucks/gAAAGUCQkvQvRKo1evKHi+kbaWfGZPsUcPXXAAAABIAAAABMEQCICpC6h8wHeATgIKnstgdrkk06XOEVOZyqyj9QIo3oIOXAiBStws8G7YHk9Oc7ppcB1sv9KpK/zWrqUnGbajeI29oZQAAAGkFQkxBQ0st5O8etIHPSnuMn4j20uRzh8+vXwAAAAQAAAABMEUCIQDpQygSRYGngGf4FcQX2ncItgdD4GNU7QwvkjoLysd9OAIgNHXKjlLsa54nrZZePB64rRUQY6ENT5DCFeHgTOYNDPgAAABnA0JMQ0LbwA4U9xEmDmBu29TxQ5SrR4DYAAAAEgAAAAEwRQIhAOhr/xdg1tIQXYVI1zVbmhWLueitjxs3GXmEWssN84cAAiA55SEmKTsraA/ESRr9JvNZK++xz6VSgK5HYkzZ7hNTJgAAAGcDQk1D327zQzUHgL+MNBC/Bi4MAVsd1nEAAAAIAAAAATBFAiEApK8TkPTYbxul3AzebRxEoovX175ti5vy8yztdT+aVOoCIDpceHeY+Lm32VD7Dqdye8LulnorNxDkqmqGQ2hL/510AAAAZwRCTEVT55bWyhzrGwIuzlKWImv3hBEAMc0AAAASAAAAATBEAiBlflINE67toh7vXifGv4r4YQoQr0F0K7kCasINUMGmrgIgatndrhCc/luWVXVmI0PASUfVr6aEqf3Y9MW82ofk5SUAAABpBUJMSU5LQr7dZH44favsZafcOjurzGi7Zk0AAAASAAAAATBFAiEA1/urlqh1piqH+/gvrub+/Wr8fdl+2C8XFUjgNC5yQ9oCIHzAH64DttloeVaYxrlGmFNJo1l6CaqESGr/I0oS4a+rAAAAZgNYQlAo3uAdU/7Q7fX24xC/jvkxFROuQAAAABIAAAABMEQCIE9H94ISxr5ATHfBHCrHfD9w+yQ7Lk+Ahgs8ypSYLYmjAiBtJ//YIPm14EkYzGBYygXVO9UiNb109+hpW3ZtrDQFxgAAAGcDQVJZpfj8CSGIDLc0I2i9Eo64BQRCsaEAAAASAAAAATBFAiEAjecy+mSWrT3+yEYpYUMInLW2UKfw8bZuW2kBxd6haRsCIFK0tBe4Jb7ey8DhNqxyx6IWgHhvStigicvFe69FFYvaAAAAZQJCQy7LE6jEWMN5xNmnJZ4gLeA8jz0ZAAAAEgAAAAEwRAIgb+CSRyQzV4nUbT6+wBXFVIvy9wwW1yNqTJv+Aa4eVYMCIGv1yBdkmuiLf6++CwilpO2ApbrT8wKCUTwL9Cq0aITYAAAAaARCQ0lPzcQS8wbgxR4ySbiMZUI80WsyJnMAAAASAAAAATBFAiEArRZi4zgj6pYfLci76Bk3ns5xN99W4AxhbhxVhK288VkCIBi8bRYAhUjy8so0cTLnaUTeJTnpQSayigAFYrILqcKGAAAAZwRCQ0RUrPogn7c7891bv7EQG5vJmcSQYqUAAAASAAAAATBEAiAsQWdgwcbDSfFX47XP8SS4kYuuIbZtym1ax70ynJDYGgIgfW36P1O3BsuYwDR/C4Z/urEBInSAMv+uQ9JH6BG2MJEAAABmA0JDVFxSPWq+F+mOqljC32Km7JFi87mhAAAAEgAAAAEwRAIgR/HpeTfHO9BI/fpo3n6GcBtqLakhLh4cCDpvpZpZ/ssCIGvxtjASQCZV155inLgOooKTQhq/cSiBp0seW+aiCxpuAAAAZwRCTE9Db5GdZ5Z6l+o2GVojRtkkTmD+DdsAAAASAAAAATBEAiACvDN3xyC21qyLz+UxuEvdGk0WZvNjUXH2zT6rAGo9ogIgPyJ9ivwvJEOzddFx6fTGmYA5zyYLl3A1xq/JMOyhiZEAAABnA0JJVAibhfoV9ywQiMu+8jpJ24C5HdUhAAAACAAAAAEwRQIhAJaBeQ/nyG/TNbSkP6UEdGLhuvbIIc3O/CWf1szXwhT4AiBb20bRi61FBvSqyO6vSDOYA18nmuEoDLOM7gQ7Hrqk9QAAAGcETUVTSPAwRaTIB34487ji7TO4ruae34afAAAAEgAAAAEwRAIgZViDlQHeXsQSzU6Bx8a3MigZdG0wqB7b09LVPv6sdPgCIAm8NQTOlwXm703MQ4H0Wws6hAHGSzCF/1rWqOx/CCrhAAAAZgNCT1B/Hix9amm/NIJNcsU7RVDolcDYwgAAAAgAAAABMEQCIGAWIugW6U/ThiJJZKOWj+E36Xv7jsNZs9+BPO8AGnrFAiA2XhmBrnpLk1sW9OY+oFFWAZt8wQ9zeYtxwYjYpHrYnQAAAGYDQlBUMnaCd5urK/TRM36JdKud6CdafKgAAAASAAAAATBEAiBd9jZ3i5UeIT9b8HzPriPrZmo1cZaz2RWUpzme3XJ4qwIgA5ilz9qfD6kP9ZlQegljhpViGcaI5qKDtR0Dj0yq5WkAAABnBEJLUng8+eDDhaWr7J/SpxeQqjRMTo41cAAAABIAAAABMEQCIHAyi/Uyp+7L7L20PWTrKombw9LjEmv6AUzWy19varVeAiBECm/sr0fKJ1r1y+opQmvTSxtGEDVfaaBSsELNxs50SAAAAGcDQlNUUJo4t6HMDc2Dqp0GIUZj2ex8f0oAAAASAAAAATBFAiEA0P7S42CGp8J0DibX2XJUQhvdP1TdJ/ei8W0snEKA2hACIAOMk0DdTVkOMItn5vmxEJUnSQhxCgqHRK5GTuMr8yXrAAAAZwNUSVjqHzRvrwI/l061ra8Ii7zfAtdh9AAAABIAAAABMEUCIQCuPV0J3vUIjLPjecE2jO8W4jz2n9j0gt0Ui7RsGHNoNAIgOwYj6RagwtQQ3KCjtFwH948q0EBlZIuSNSBOOc8GivoAAABnA0JUVPpFbPVSUKg5CIsn7jKkJNfay1T/AAAAEgAAAAEwRQIhAPD+k+IsmKLFNn+VbkqId6WCmLdrPYzYCobv72waEWg4AiAMhwLYiKZvb2wsJnfhJKUOLanmktsgcYGsmVKJn7e7lgAAAGcDVkVFNA0r3l6yjB7tkbL3kHI+OxYGE7cAAAASAAAAATBFAiEA8eCTiDYyS9qDfKHna4TbWJszve9Azt+ZHasJ02+ZGKkCIBOrq5QB1/uPt6vZluVkN+Uwmgc9Gghm+aYJR+4Vg5UXAAAAZwNCTE8cO7EN4Vwx1dvkj7t7h3NdG32MMgAAABIAAAABMEUCIQC2OfingySvgogQopg/HgL2B2IFR9hOBWbmiMtJfWvVwgIgJwlYhKrV7HPi7WHtXs4bDcVbJO5kIKEqLbw3QF24DlQAAABnA0JQQ/IdZZeb2Jso8F7xnzxl3SodApRtAAAABAAAAAEwRQIhAMUPkp+n2K1jKlk8CVRG1bUQsVIYYzbaSIK8plchH/0/AiAoFNXQ9PSCAnyuKWJVlphP9uzrk4AgDnWrSaheHMohRQAAAGYDQkxUEHxFBM15xdJpbqADCo3U6SYBuC4AAAASAAAAATBEAiAW3cVVc2K0GI8aTcZtqxaMgNveIMrcckG/FVkav517AwIgCR0e3YdlOfvb0efQr9bvzyp8LmP2U+tIMnX5TxXwtBgAAABnBEJMVUVTnv5pvN0hqD79kSJXGmTMJeAoKwAAAAgAAAABMEQCIDuSUiwoF4HlRoAF9VT2bXk/FbM0VLqmNvsy6UM3r5/LAiBiTmf5M6LzXgFfpEMfJIKOQSwz3trb9IT4zorg9kv7wgAAAGYDQldYvRaMv506N1s43FGiArXopOUgae0AAAASAAAAATBEAiADMK2v3oJIg5PwNpHkc71scbdKBBVNU70glwbh44jNPQIgDxd1pV0a77SOaCRyatziZWx6TZ/zt17gY2kCkbFjjWEAAABnA0JMWlcyBGqINwRATyhM5B/63VsAf9ZoAAAAEgAAAAEwRQIhAJzlUDGgosDqYU3aUZmAe7ORoMUMjEwM9L+n7qkfFVNJAiB8u2fqT2eBOTH330WmLGjYCYRwHR1suHNx0EOFXrIkoQAAAGcDQk1U8Cit7lFTOxtHvqqJD+tUpFf1HokAAAASAAAAATBFAiEA72Y0ncJeQwbKJoMNcl4RqJIc5UDH5TRJfmlk3CXOKrsCIE5yEz7Ryk1uqZjuSGcJzTyVyEi2aTef0cwtVN5D50w3AAAAZgNCTkK4x3SC5F8fRN4XRfUsdEJsYxvdUgAAABIAAAABMEQCIFzPd4DCeARWxNZF/90L02GrvR+tyWDst2+MTwORuFt1AiBWmaD7Cyl22Wh+1uSv9ne0JH1CiGZy9xVFXBNFa3saUQAAAGsHQk5CQkVBUm/r38Cp2VAsRTQ/zg3wiCje9EeVAAAAEgAAAAEwRQIhAJ9pwkknRr1NK5e6GAdQf7w6R4BHSu4aKZ9BsZhcNeomAiABopX4uoljtvhPHsH7Gagvrtrod14HhGE7aGGhLFBgKwAAAGoHQk5CQlVMTJ0aYsKtmQGXaLkSb9oASplShT9uAAAAEgAAAAEwRAIgDsDxfxKCcsCmtgdyst1a/z7Qm67KPfL2W6dk7yLT10UCIGdG058mIuw5FY0mOYqSuWCPte+fDg3ogueq9Y+KRkb6AAAAawhCTkJIRURHRShArUHPJa1YMDuiTEFuedzkFhtPAAAAEgAAAAEwRAIgEq6mKbaP8ePCfgoFEb7BUPqbYSvXGZYy+OA6aY+MqSICICArYTREexI16LwyglCkWghPpxBKJ8giepkWI5E+DlOWAAAAZwNCTkPda/Vsoq2iTGg/rFDjd4PlW1evnwAAAAwAAAABMEUCIQCVtpBD8iwrSEl+aoHB1emAs4vUHCSm3ifd8zTqeUQJFAIgaV7uYAREssXo3EHOULObO6BJ173muNqlEX0DyFpFRRoAAABoBEJOU0Rmjb8QBjX1k6OEfAva8h8KCTgBiAAAABIAAAABMEUCIQCje5vbIwgHfDfJcPlP4D6gc1uIzmRO5a8/9Ckc48R1TgIgA5/hfTkFibswRruUte5QiE1eR3EjGzOtPcWx4VEii2gAAABnA0JPQt80eRGRC2yaQoa6ji7l6ko56yE0AAAAEgAAAAEwRQIhAPVuqBzWoTUwTRrH/aUMWbxdjdwqhXbZo2YaH1pWjVyzAiB4kI/eILOuvu1zZ2UaCAqKaluyExmYlmb/m2/uzOMOygAAAGYDQkxOyinbQiHBEYiKfoCxLqyKJm2j7g0AAAASAAAAATBEAiAMRGZSVlh5tbk8lZPZcjSTCzR/Sgn8hVlcIErZI9ALSgIgAj3qhgIlt9aRw+JrbOKEwaN8o4On2AfYu17fFF/gnToAAABoBEJPTFTVkwwwfXOV/4B/KSHxLF64ITGniQAAABIAAAABMEUCIQCp8h+I+KpZojWgenL7hAWJIwov284IkTTTlBueVYGgmgIgL4wwriWNcNAgqhox7DkFenPg0D5ubEJ8eNzMZKII49sAAABnBEJPTFSfI10jNUhX7+bFQduSqe8Yd2ibywAAABIAAAABMEQCIEjCyiXvaFTtZb3nKDYJddnP75l0lM92wrE6COK5DYeuAiAH2KxcjPvSdrcJWcTrXs5J31212dzWsefvvcmkatocHQAAAGcEQk9ORF3ALqmSheF2Vrg1ByJpTDUVTbHoAAAACAAAAAEwRAIgECLhFSBdQvZoomennPsatJTGDxeCjxFRWjKQkati9hICID6qtZDiuFpsuGNWMqZclntb1GWTT9p3qUtZ73n0yqBXAAAAaQZCT05ETFnS3aIjsmF8thbBWA20IeTPrmqKhQAAABIAAAABMEQCIDShnMkUk7D0w4l7mvuPMrRQQy3hp+262f7+QqqjiiZuAiB1pCIM2QCb7FUYE/sMFq5/DuQmahINDonFO4pRj97oZQAAAGkFQk9ORVM6dXMfnhYkTeAd1DFjbbfAfUKhZgAAAAQAAAABMEUCIQD9YMR7YxMfsO73mglDm61ySz7e6v8+5KtjJvcNc8f3LgIgZiig0+Ury6EU3NksHJppTZcgnTDYycwXtPH1LBailRkAAABnA0JORh3l4ADEHI01ufH0mFwjmI8FgxBXAAAAEgAAAAEwRQIhAOxcnQQr6OiCnK/PqauCqRQeznv5Vp5qX2SoWepz6gCdAiAqkO/In672EHM1p28xqDI31xAbJeTOKgSDr8Qy66TWJwAAAGgERklEQfQNlQen1IUMUqRWmMlBDiw0X3qUAAAABgAAAAEwRQIhAL61QzGQS8Om6peECFsMcWyA6nHoQBf/XyzG/StLjjyYAiAPtKobpRTIAINNQ6mJEItGbRsHzu+EggCmB9U5G2px0AAAAGcDQk9OzDQ2bjhCyhvTbB8yTRUleWD8yAEAAAASAAAAATBFAiEAmuY34PzSl8VRoGwljWJUX0mE2KIJn6p5wU4ePD60QKgCIE2lmDTFaaXg7hknyFG3q/gwwtLqQBwLxV/gJqv1RIrXAAAAaAVCT09TVD54CSBgHWHO24YP6cSpDJ6mo154AAAAEgAAAAEwRAIgYjUbhEGaGGrRJUwl0P1pq4wQB2NTVJ8tmbYgA/Gmf54CID7h/btTJALG0cdv+T6CZlBemZIDuCz/jtmaKr02BRzLAAAAZwRvQlRDgGTZrmzfCHsbzVvfNTG9XYxTemgAAAASAAAAATBEAiAD+MhMV9jxXxvj3WH2suwObE80kqUwtyMgDxqIkxNB5QIgAvnncYrUrdlIX4YYuusdnEzndSruA5HT+/UjHqXMLWsAAABpBUJPU09OxHfQONVCDGqeCwMXEvYcUSAJDekAAAASAAAAATBFAiEAz9PV/HeHfMj6EqT0thBpxQEKQ/ijrq01aXxGQfGePBoCIBMmwwzJe1lPYX0iAkDrA3ei9LgCeOhF2NDSwqIREcFLAAAAZwRCT1RT+fvoJb+yvz44evDcGMrI2H8p3qgAAAASAAAAATBEAiBt1a1lUiW9YiwRUyXGo0qbdHdlRwFi+ZnixjVPZ/KibAIgC7gDs5Ptj3S/rK9UEJnmc89UeSgbA/Vi4Wv/xhyKA8kAAABmA0JPVcLGPyPsXpfvvXVl357HZP3H1OkdAAAAEgAAAAEwRAIgB4TDBc68dpWZRCW7k4aTogBODC1t4Q8ryW65kNOKo2oCIC/AAtlW+EdDTFWHT0Z/F9ofsukhGPIucLQufUn+9KTVAAAAZwNCT1Rb6rrrsxRmhd10F29ooHIfkSl9NwAAABIAAAABMEUCIQDN+MmzutUk2e1CSm6IGIZR2EhXYC9MN+XPWvEHbsL5kAIgOf/kEHIdwaQONlN0UNi/8sdNY+dC+2o61ENqbGcMk3oAAABnBEJOVFnS1hWGg67kzIOAZ3JyCaCq9DWd4wAAABIAAAABMEQCIFYMogjBuTNTaKLD1pRwpS+9IuFucgzQAYaK/XlJKEXrAiByZiJu8+e7cakzkRJQihjfSqdJscQY0XjzWxabKTDqLAAAAGkFQk9VVFMTnZOXJ0u54sKamqiqC1h00w1i4wAAABIAAAABMEUCIQCx4B51GHqUsCRzIBkvuNBZw+ptu0MguAxL1KIwSiLJpwIgAnM+D8f+OkGnhNzmKKKqYNIC8Yv/rRV2WVNF1lOmp4EAAABmA0JPWOGheLaBvQWWTT4+0zrnMVd9nZbdAAAAEgAAAAEwRAIgXBVggMpQnSLlIhEkkEJYzf/UdXN//VcIghQqZDPZcJsCICcdRRME99aOg5KaUAGmdTFlPXT6ujg4MkDRHXH2AHcnAAAAZwRCT1hYeAEW2R5VkuWKOzx2o1FXGzmrzsYAAAAPAAAAATBEAiA6RKEiZEHZ8dzp/atj/5vc9Cr24NdmI/qTuC3rWTqiPgIgLwFRoimZMpYqG+kTu+ChGF7A+E7azppO0ZUirjGsy1wAAABnBEJSQVSed9WhJRtvfUVnIqbqxtLVmAvYkQAAAAgAAAABMEQCIEgnGNKR/Ut3iIiCPwaLAEMJKs5iISpg5+82EgTlhrAkAiA546g4J4zSEOUMOHTbKzqBYO4ZUp+/K7zZEdZK4spxAgAAAGcDQlJaQgQS52W/pthaqslLT3twjIm+LisAAAAEAAAAATBFAiEAr3HoOOTlzLR2poO6VKh3Y3foDQg8SSm9awoMuLCdgE0CIC31WmVarE45/+IHXqv2YkpRQpIh70lwqXfLhNdkFcAUAAAAZwNCUkRVjsMVLi6yF0kFzRmupONKI96a1gAAABIAAAABMEUCIQCUieG98AxTn9GC+aeI+FhwelOGRx1RuY3Q2evGrydorgIgcx3Pqjap9mbI3R2LoIBif9Yl3D8zlNcwfDHeLWGWhRsAAABmA0JCS0pgWGZs8QV+rDzTpaYUYgVHVZ/JAAAAEgAAAAEwRAIgU10s9lODuppBWkzY1dI/ttyzVkDUbkdDcE92If/TSoACIFMD8723MUQKNrGrEY6zlsmVRyIOr5oGEfXjH7cM51mOAAAAZgNCTUlyXCY+Msct3DoZvqEsWgR5qB7miAAAABIAAAABMEQCIB71U7iEtVix8Yy0w3ELQ2hrqQ07lCecT8SpJINCy5FMAiAvxj4Q04GfvOWEeYnLNUoWNWdNbM9My78mFIwVztHtSgAAAGcDQk5O2oCyADi9+WjHMHu1kHpGlILPYlEAAAAIAAAAATBFAiEA/MXAHRJSHi4yDzLEn7gRVD5Nf6nyG0WQcuPoGzs+ZTACIEOFiEIyUwClwfp35oGLqvqHNFS42+6hCKogPplRlf/jAAAAZwRCU0RD8m714FRThLfcwPKX8mdBiVhoMN8AAAASAAAAATBEAiAdpjnDh/C7m+Y37tZzUSdMD/du18nAUoB/5nC0kIwfeQIgB/vHklChyXo67pQhI4N4B1uFHonl/dpEE5TFBIMr1UIAAABnA0JTR7NKsvZcbk92T/50Crg/mCAh+u1tAAAAEgAAAAEwRQIhAMv2jt5N5dSmV2bEfHSfNxmAW2nvxlquih2v1IcZEYlQAiBIt9Zii2ZrmOTH48dgNG6n4Qs1ccba6hbjb43nWibT9wAAAGgEQlNHU6nSMsw4FxWueRQXtiTXxFCdLCjbAAAAEgAAAAEwRQIhAMpSDds5CKGV9JZlBvdhFY0ve6zoayO3JYA2j3BzeqOcAiB9NYSL6+V1NptHPaEviH28BaWdCGgM9Bhqd96sNPfv0QAAAGgEY0JTTn1LHXkyOXB0RTBdjSRW0sc19rJbAAAAEgAAAAEwRQIhAJKgbMBy7DFOVtyv/i4IH0tgbUpIY2/8yixEtkmhULNsAiBZYyNpJIbo/OzhAxrd5sPv+zBRdXZXvAeA3v/s7IzIRwAAAGsHQlNWQkVBUs5Jw8krM6FlPzSBGp1+NFAr8SuJAAAAEgAAAAEwRQIhAKlB/5kJx19F6BEF9KB8fkK2H5DidsCOAQlWy0T+4FUPAiBnq5YHp5sQT+ddkt9WqQYV75zuIBC6VYyC2K8Z1Tt3uwAAAGsHQlNWQlVMTG4TqeSuPQZ45RH7bSrVMfzw4ke/AAAAEgAAAAEwRQIhAKDZfUY+0yZKCOKtW9l+DgPpGKBdFdx+ebDMaBiQBmlPAiBZdyPwwoCL/kuwBSGNVtOGysXCHGKjTWk+20XK+zX3wgAAAGwIQlNWSEVER0X2JUzVZcXnjfsAMLCxTR5vSCokEwAAABIAAAABMEUCIQDnKuIbuut/D+a98PcuYCANh1pP73NzlHxW6n+8N+su5AIgPamPWCgT1HLOphu7YnIBzDNSYggvLCBt5pWEeKz2rssAAABsCEJUQ0VUSDUwwGrsUZG+FrlP/Je2/AE5NSc2c2UAAAASAAAAATBFAiEAqn4qCZmBOQUsOsYGLsfynHAZeSJHT1dXkP9231PM3M0CIHEXvQYzgYa6ILmfbYHIMNH+hGQdbda2XA9w1gy29pD8AAAAZwRCVENMWs0ZuckeWWsfBi8Y49Atp+2NHlAAAAAIAAAAATBEAiBlxEYnTB0f9AAZjYbUPkaP7zaoLLvqrWy5+73dBbtu4wIgI+gAuqkaqMSnfh74XOZkIAN5pTCtbGTyYY3lF1ROeFwAAABsCUJUQ01JTlZPTIHFUBf3zm5yRRztSf97qx499k0MAAAAEgAAAAEwRAIgPN8r9rbwgPpktSf5k2WhPLwhDDxDTNY/FsZk0XBkdnECICu5tgDTJgu4s6wEVyvRK4LAcTY4rAlytOuZ2QD73dWOAAAAaARCWVRFrI6oceLV9L5hiQXzb3PHYPjP3I4AAAASAAAAATBFAiEAyMKMpicVu9ZtZURhAP5QuoC4N/bRX4IJBvSUGZ8BChMCIE2pSKTR3gjTV7pyx2u1QU/ELMIoE19cYeiDJtu0LqVRAAAAZgNCVEVz3QacKZpdaR6YNiQ7yuycjB2HNAAAAAgAAAABMEQCIET5Ydn3xTprx8Qt3wBh0Hbkm4H676VwBf/t15YfsYGLAiBAKvGlG6ZayLxQ1KZwZEhnRaZC0U1vTMNr5CZ93ji8DwAAAGYDQlRMKsyrnLekjD6CKG8LL4eY0gH07D8AAAASAAAAATBEAiBtdJ12+CW/lY8497H8lPWX/szT2iYog2gAANotxQNplgIgX10fbJK0BOlHK0Lzqg0kBks0ai2YxrW2dtikgQ6uuDcAAABsCEJUTVhCRUFS2/Y394Yk+Ja5L4AegfYDG3hl7SAAAAASAAAAATBFAiEAwVvraExGQZ8KgY3pPHp0VoLscdntC4pm9FyrvbKb5HsCIE59ihCYo/oUOPDgAO7/gm4Zg/S1dzfJP9z8sn22IlnGAAAAbAhCVE1YQlVMTJiFyhAd/Y8j02SHT3mVVMUr/uggAAAAEgAAAAEwRQIhAIvXHw0zBBNHA2xJsYdJ8gWSrd045WbyLGBo+3KP7To9AiBDMjQaDzQnmRBhgq2IepUSa2KY/g27UuztOJzIl4j0aQAAAGYDQlRPNpBfyTKA9SNiocurFR8l3EZ0L7UAAAASAAAAATBEAiBGHhXADv2tZ6cNOWXs+2sV+SfcJibGILxJhjy2nSE/EQIgd2IYjI8l/ILBef6V+tzkqsqSxfqYYXxKioyAkbpt/3YAAABoBEJUUk4Dx4DNVUWYWSuXtyVt2q11mUWxJQAAABIAAAABMEUCIQDGI1V2F14tdnTG2PCi4VOUAvedrAaU0BV1CLEoH9zZNAIgLtuP4fLjlioXiQMvMusOa3oYd29Ga0P8/E+gODzm5/YAAABnBGJEQUlqT/qvqN1ABnbfgHatbHJIZ7Di6AAAABIAAAABMEQCIEy5n/HuKWyXM7+UQDD/vMTtjnYcUUpBwJGTOQllxOUOAiAdbvuy/s91lsw/jDXum5DxPmp7iF5TBlXWzWQ4v+7fPAAAAGYDQlRVtoPYOlMuLLffpSde7TaYQ2NxzJ8AAAASAAAAATBEAiB7jaCWubIz8f6genXZqsPJcbJAJy8agq2pyfa+Hen2bAIgBYxSrQrQ1L5gFTp7HiXMcD01g/PR/nB0GGWZLn9iRusAAABmA0JUWuX4Z94eqBNG31GBuLSN1rC7M1ewAAAAEgAAAAEwRAIgbD7HAGsYaXDo2zBBzVs8LulfI5m8MrK5kdGrqQXajmcCIE3muIbtUjKoX+GwQr4Xv4K7ZgNcYe85WgNnyaa752ouAAAAaARCVUJPzL8hum7wCAKrBmN4lreZ9xAfVKIAAAASAAAAATBFAiEA640drL95QWd9lYfswbtYej7KifTtamMebtckAggShnoCIF9cA2b4WpLn7WY0avDslxINvIyRUCblM0yV+4e/sWUWAAAAZwRCVUxMaOuV3Jk04ZuGaHoQ3442RCMkDpQAAAASAAAAATBEAiB8z5s5OvtiSFgGgnTaU9wIvzWxp8d6WAjXtWxENbd4CAIgUVqHNY2f0k9kgvF9bBUChzAWEaGB8coBruUwTuxh5lAAAABnA0JMWM5Z0psJquVl/u745S9Hw81TaMZjAAAAEgAAAAEwRQIhAMlX8FhJFxTzqYR2e/K4Qehai/FY98N7q1SPc0zbni8GAiAbKQCQgK7dAHB14D2WtdNIDWJj/qlPUiLJ2RruZ1MRFQAAAGsIQlVMTFNISVTQayX2ehfxK0H2FbNNh+zXFv9VoAAAABIAAAABMEQCIH24rrEk06JLw2WImw9BTvlquwWnsCIKgjN0C7EI6k4mAiBnMjC4RYs5ygG8fk83ymDnunBIz+fR/bFFfgCeB4j6wwAAAGgFQnVyblgQYjhze4W0Igx6fd/VxMr4WXKB/gAAABIAAAABMEQCIDFo8M1Qe3rkCf/7GdYD53imQbPu61ULRAt1OMuWBgAIAiAhz0wxRLKRrUWeqq6PVRM/8YbVN6ZDvmKKgXdkBejsOAAAAGcDQlRI+tVy21ZuUjSsn8PVcMTtwAUOqpIAAAASAAAAATBFAiEAsbXvnuOwh3Ns9LwVqRSQr40FXBt3r5/xdmmGJuXHLzECIAyotD9T3d5Vqj8r9ZncPZYJITo2OLc0h2qH0p6LHx3GAAAAZwNCVE3Ll+ZfB9ok1GvN0Hjr69fG5uPXUAAAAAgAAAABMEUCIQCHoS0xA1nqAOx9M8XKLfAgAxSw1VNRJm3/hruKtS8xmAIge4YcwEpogDxy7IFrldouXX3YOQgSxHdKHZghKMccFdYAAABlAkJaQ3XnrYoBuOw+0EE5n2LZzRIOAGMAAAASAAAAATBEAiBLOHXp0wG6AYBJ4SRDWUvTilNVgyS+yEYf4txaI2VMQwIgek5wwb1DPZu7f1ua9bNBQsglMzWMm8ASQGRuRd8RIAcAAABoBGlCQVSotlJJ3n+FSUvB/nX1JfVoqn36OQAAABIAAAABMEUCIQCRhf/qOtZ96KJYE9gX/HXJL3I6o0ysqp7EGbRSV6jPngIgGWXQ1FQp8zfS4s+OkV1yNdnDkg62qRTPaVeeMkuI9y8AAABnBGlFVEh3+XP8r4cUWapYzYGIHORTdZKBvAAAABIAAAABMEQCICO2u4BkbeUVvPXM++U4finjI4mHX6ztDkziKEqhwZiZAiBADpnoUqiv3zRGJQbwYh4LLpiu4e8gyhZuKph/KuTy0wAAAGcEaUtOQxzJVn6i63QIJKRfgCbM+ORpcyNNAAAAEgAAAAEwRAIgMTLaJJDtpN//eY1gNuDi/4gkkqHGLmJZ3G7HEccBFbsCIDyKUSkpLcuuRf7qR2nyfz6ZzSUU0FB1n/6ED6RtRtJsAAAAaQVpTElOSx1Jbalsr2tRixM3Nr7KhdXE+cvFAAAAEgAAAAEwRQIhAIwFOJTfVYD6SJ5qTyoOzFrXSV0wzwBXKGmtk9DIJD/KAiBn3D1G73Nf/Gec11/PtYLxRzler8YkLn3qYyJzfYnN5gAAAGcEQlpSWFbYEQiCNfEciSBpiiBKUBCniPSzAAAAEgAAAAEwRAIgSioOXXsOU/BNLZPR+VfJ3a9ExxWXQX4Jtin6GsRbV64CID4QahPUFmcXfdExck8CGeA5QiHmPf+JUdoOhT2M/wN1AAAAZwRpUkVQvVbpR3/GmXYJz0X4R5XvvaxkL/EAAAASAAAAATBEAiBnAvDlSXC7g6BjHmVTt2BauiP0jYVtfrL6hn3Q7VnZHAIgWbv3CajbpD8nFYnqwBinFhTKHgQ5dbDx0Hua9x8/W1gAAABnBGlTQUkUCUlJFS7dv80HNxcgDagv7Y3JYAAAABIAAAABMEQCICQcDoYAd1dBKxQ4dsy9/zAkRovq8KKAHdQNlafddDA9AiBa7U5trL8lDqc6CtgperpOCY7DiM8TAhe64SgzTMcUTQAAAGkFaVVTREPwE0BqCx1UQjgIPfC5OtDSy+D2XwAAAAYAAAABMEUCIQCw7DpMmQRrP+0xr9Og4E5BcwRjQoiOKkqII85M/RKP5gIgDeMa96Gp+YDKByhFsrSImr9Vl8GplBrjlUPqJYUupfgAAABpBXZCWlJYtysxkHwclfNlC2SyRp4I7azuXo8AAAASAAAAATBFAiEAueFrenNEFN5t+8eJscy/EWtxHr+5QiT4KItOfA+yHScCICFmFzzSPN3qABkLG7HTbTNionjgyR7kS85YAgAPEqwAAAAAaQVpV0JUQ7qSYleO/vizr/f2DNYp1syIWci1AAAACAAAAAEwRQIhANu2WOpc14WzTyPgeLCGvHvM0+fiHKWJIfvd1I03KMNuAiBvlXJ1ad/OY5AmDM89+/xgLg8kMYRKgLEr5W0B3SwqtwAAAGgEaVpSWKfrK8gt8YAT7MKmxTP8KURkQu3uAAAAEgAAAAEwRQIhAP5lWRfLhIkBDFjnXbax/wmn61CcxT3UczrprK7jPv9XAiArhz9lY1DHRRWXgzt2Uw7AVcvhedzjfAbD5dkFSKB5KgAAAGYDQ0NTMVzln6/TqNVit+wchUI4LScQsGwAAAASAAAAATBEAiAZtbf0zzHDCcoZgcKxYo9wn94H/6NM645dDKQFJIN0YQIgDed7MkNQD3PLCeszwaAHR/5ba4/x0Ry9QxhMxnnFo6sAAABnA0NHVPUjhGLnI1x7YoEVZ+Y90X0SwuqgAAAACAAAAAEwRQIhANOPoAQXUsdv4Vlzstiw2V27JtOBDzzhUxpVCGVS34FwAiBfAMhueLDCtXZjzT3SCZ5Zu1WOWyikc9t5L+WHY7HiDgAAAGoGQ0FMVklO3ICSqvg+AOv5sBoukLe374Z7pQMAAAAEAAAAATBFAiEAs0LVpoDcK88JOzQLmR1DuhDGbiWCJ+Cz1/TW0lAFOx4CIAF5dFrNoSQfNA9N9z9+x0D+B6do2/z+o86ZQbQD16wAAAAAaARDQU1JqAnO3um2GVbHaOqhAnLdXg/RqYUAAAAEAAAAATBFAiEAlx41C4ftZu3Yk3QjV/DP+8uAz7+QRQ/lvXGKl0EzGaoCIDW+jzEo1s8UYdggfFOjPfZzm+TlaTLA58wlWanGijNNAAAAZwNDQU4dRiQU/hTPSJx6IcrHhQn0v4zXwAAAAAYAAAABMEUCIQCuWXkLl+S2fRSK6AuMpjkESmNMt13UGFagYI3FIE9LvwIgUVj4H7yUSsMVYZn54vdYfC/x1Knm6E82WRfEhHCgSTkAAABmA0NOQuvy+ejelg9k7A/c2myygkIxMzR7AAAACAAAAAEwRAIgNAlNC4433lZHIZgU/BF4rin2B29C6q5FwApCkH9N+vUCIH/WoB4AjBbqOGebcyY30Ij5uv9Jwiug4ZCm7Yiq909cAAAAZwNDQVBDBE+GHsBA21mn4yTEBQet22cxQgAAABIAAAABMEUCIQDQp0428x9pcOvpAKPPT4oeORXO0C2ejdDamn4wq8U+kgIgegBcpjGRR/HutPb9fG1WgofNx+p8Op+Cy/bv6GuyV9gAAABoBENBUFARYTsfhAu1pA+IZthX4k2hJredcwAAAAIAAAABMEUCIQCfXLOWeijqa/8cS5OCTDmvCipC/gvj/UvP3FZGvWoQcQIgC9Epe+wYPWFI2VhpSo3VbMhPpHywJBLhz/nym0/kb/AAAABnBENBUFAE8uciH9sbUqaBabJXk+UUeP8DKQAAAAIAAAABMEQCIE3ZyBiO8Gr5GnFbgIvacpa7vPkYbJopceB/wTZ12+NDAiAWnNG1Q3Cqt421hEfn16yvaVFZESHjD21JsT3JuzHd2wAAAGcDQ0FSQj5DIs3aKRVrSaF9+9KsxLKAYA0AAAAJAAAAATBFAiEAu4yCd8SQQVHdrdLlp5kzSBeVOIHzcQEjjMLCmGmNH9YCIB5Es5yLmhDiVEegMIoQJNHeLJEbb5RQY9ofi0zv83WWAAAAaARDQVJCpReka6rWsFSna9GcRoRPcX/mn+oAAAAIAAAAATBFAiEAgFWS2/tjO4lq3BGFXgZJBudBlr7zs37APwScuUIMFtECIDb+Ycsx75EJmAT7dQ7ItHZGG/V6HBGpM/+KHIWM7LHDAAAAZwNDQVJNniOjhC/n63aCuXJc9sUHxCSkGwAAABIAAAABMEUCIQCVfL6ietFncNFjOW3TdXoEw1DjbZhwGB7iJGNVJ33gLgIgOOdqEcdMtH8jU1PsmrRnmAzOt1t82BLxi8B8wCleZ0oAAABnA0NEWCyxAdfaDrqlfT8v70bX/7e7ZFkrAAAAAAAAAAEwRQIhAIn3tAZKYmbN0NIpMYD5Ad0OttIdU2LuEdndQ+JbXFMqAiBdiZOigyENFcCzkaYlUm/ybQUelyjCfdGOuajwLwQxhQAAAGgFQ0dSSUTrZIaxO1YxSzeqysLsaInRGnY94QAAAAgAAAABMEQCICSoWkl6gADkzhwkqkBtOlrDtUKjpVGsJ+lm0NE60SYCAiBtFggWaBmD+ogS65IkNZf1UuUXohRpldp3BfDCMUXP/AAAAGUCQzjULevk7ckr1aP7tCQ+Hsz21jpKXQAAABIAAAABMEQCIAerQTmvJ31Ebllz1l0P9e1Al2e9wkOvUljOUMuHyzJuAiA3BGjvvHiuJ9024LY5jcrl1HNc77wxeRuH5W1/n7u2NwAAAGgEQ0FSRJVLiQcEaTryQmE+3vG2A4Ja/NcIAAAAEgAAAAEwRQIhAJ8ZxU4xE1IxLa1LtSkYCcqvY6U/VoJHpSZvF3UuGluZAiAnFg9ZFkzXmo1i8Df0DSk0oTmQ/mQp6WdKLQwgEmY1UwAAAGgEQ1JHT/Sc3VCtQI04fWEfiKZHF5w940krAAAAEgAAAAEwRQIhAJuO6IpYDiB1DfnXIFDerX/QtX+obRvkB5UeiRNrJVM3AiBUbwS7CwQGPPsqnoGTI9mbWNo78p3RkaQCfuzkFVuKsQAAAGYDQ1hPtu6WaHcaeb55Z+4ppj1BhPgJcUMAAAASAAAAATBEAiBdd5mLPWAFbP4SVRFWcZ4opwVrGsXt0pVryzp33ae0ugIgcCpx2fYpR0NXHyylYltVF1VQ5OlfR1YGA1kjw1MiczgAAABmA0NSRRFex58d5WfsaLeuftpQG0BmJkeOAAAAEgAAAAEwRAIgJzVqoSkDQJo4gc/OmcOLCQ3PRyZHG6fV4QtaStIDCg0CIGjDWe3hWc3MEwJVJceD94P9uFK4i/nlQJRCd1FVpf7eAAAAZgNDVFhmKrytC380Wrf/sbH7ud94lPGOZgAAABIAAAABMEQCIFzQHf7W3ahAh+P1BGRJu3pQDhfoU4aYVwtTbNC/udxaAiA/cx/3Y6enWf2A2e3BAPyrMrFVnt4UDCNi6IjCgHfqXQAAAGcEQ1RTSUkWBMD98INH3R+k7gYqgipd0GtdAAAAEgAAAAEwRAIgNQJn0bVuTE+TArB9TwZW7Glgt01lco0CthPwLjiT4vUCIARxFA5EQHbJSAJWnfysgaUotFJR7aez08b9reMkjd/uAAAAZwNDQVN3lJLTZE3fRJWqLYDEaOG3vmrx0gAAAAIAAAABMEUCIQCoUc7JJg31RMngOoJfQg9eVkK9OBXbslAHGSImZVYxQwIgZYOyvWdK3I4l+t4jWCZeEwfFdLDXOuU6N44Vk/HxsjwAAABmA0NBU+h4C0i9sF+Shpel6BVfZy7ZFGL3AAAAEgAAAAEwRAIgOJwN/tXRsJAPjl1Dg8flBbOLZBCN/x2XGlxGTDGq8nMCIHdkHN53zsE0xiwvnb9QfZYTFprSCsrS0UwWxYZuNQ+pAAAAZwNDQkMm21Q59lHK9JGofUh5nagfGRvbawAAAAgAAAABMEUCIQDiKngImMt46IwBmFQmilshDPpfaZoz7W3/raOZC4Y1dAIgLrG6Q3Xhd1zqRsrc0poBrg6mFkrmsqvXJjwFIYwc80wAAABnA0NUVBpHQ88a9MKJNROQorP+fBPS98I1AAAAEgAAAAEwRQIhAN0YHdSJ/sLOOL2wULPD9+i3GMsGDTieYN1mYJ2ZB5rZAiB+JLaKhjMSgEI6V8Ml8aGT1QK/HoQgXiZmgiOyWJUL2gAAAGcDQ0FUEjRWdGHT+Nt0llgXdL2GnIPVHJMAAAASAAAAATBFAiEAyLZNkyEcaIfbC59NQJLAyjrzD42M5PCu751Hp4AYytwCICOqVHnBbRsJGDXS8h/r4/J5LoEclksCkH3cL5Sl9MOHAAAAZwNDQVRWui7niQRh9GP3vgKqwwmfbVgRqAAAABIAAAABMEUCIQCLF5xrbp30un1sCNUygCWyndP4Dq2QhfWPJGB/0k1IXAIgKVXVK4gvDljzmYSFPm4tsPu1u1X5m4f16WuLPTZDojEAAABoBENBVFOCk7vZLEJgiyCvWIYgp2Eooz5N6QAAAAYAAAABMEUCIQD9Y04K6GHl5mjmMbrBrGsel+WofBVGgo7tcZCoHstTPgIgO04f3S1ZZ1+QE+r/kT8xOstbLbveIiWIM34sA9RVynoAAABmA0NBVGjhS7WkW5aBMn4W5SgIS52WLBo5AAAAEgAAAAEwRAIgP+CQihfbY5f9QGTVorNqq+WBe0uoCAlcraR/M0eOG9YCIGlzhWSmE+eaM/zIiM4H82N5k9vZpmnzZIrLLqV+R0oAAAAAZwRCUkVFRjnNjNUuwc8uSWpgbOKNivsceS8AAAASAAAAATBEAiBZ6EggO2BhjlOU4EA5GLn3PsBGReiNbgsnxX+uJKLaUQIgZMmr1BY8bw81yQukRd4kFvtV/T9AmyVnZijgv6JNNfcAAABnA0NDQ74R7rGG5iS48mpQRVdaE0DkBUVSAAAAEgAAAAEwRQIhALz2MvyUHkXXGv+Ld30pGoTBgTgLrQ0TsTpvHEduRT9MAiBWoRsZMgDwiJSzi32HHdJgUeMd8Ef4POHSL4gEsyhTtQAAAGcDQ0NPZ5utxVFibgGyPO7O+8m4d+oY/EYAAAASAAAAATBFAiEAnrzrLtHSZ7lpEYdsIiJrSl52dgwIog2RwcoI534cVY0CIF8oGaPNyge2yFwv6d4r+b91QHLLFqQa4kWROPvAO79GAAAAZwNDRFhv/zgGu6xSog4NebxTjVJ/aiLJawAAABIAAAABMEUCIQC/2gcKxuOVMJyOYtHht7eocFbcLa79fGwmSzn7JL79JQIgZQEbgaNHSaSnrwNPqkzf/rNQrfsAVN9Yvrsj86l8DQEAAABoBENFRUuwVsOPa33EBkNnQD4mQkzSxgZV4QAAABIAAAABMEUCIQDe1SdEVmBdxFO7VnTcKfFZ0cHWXKYuV8VakbUbvCrLGwIgIafaLztrHRfgcLUsCFEDRgj1i8sNPjk9VoSRKr+spcYAAABoBENFTFJPklTIPrUl+fzzRkkLuz7SioHGZwAAABIAAAABMEUCIQD+qI6wl8D7NN+RXBgYSULw6e/JybZT5RZY8OdUp+ETngIgO7+vVv6rbImge6/O69nSUzLe4sXWmFpU5UZFWMaVG1oAAABmA0NFTKquvm/kjlT0MbDDkM+vCwF9CdQtAAAABAAAAAEwRAIgXknKeGTd6XuEhfH6uM7K7qMFZLXT420WJNwxb6VSUGwCIAsLs93fKLbd4izW/qN7DO5weHe8oFBDlt+Jo0ek5PioAAAAZwNYQ0YBDRTTbD6mVw0kCuOsnWYDmPfEjgAAABIAAAABMEUCIQCXe4H4P+nnLifVcsCMO4C8yPgXMp4GNj12d0mWJeRDUQIgde5rBMtmXf8ufkeeEvMqPYo3gJ0XwUeVfRFiaXMqAIsAAABnBENOVFIDBCSC1kV3p72ygiYOLqTIqJwGSwAAABIAAAABMEQCIA+MVAC470O9IIClXaXYYLZ3HtaqnR0KnzgYF1fPeql9AiBU2p0+E8w28XRQUJ0CIvx0Z9nlFiBU7ShZwj0IQBK9rgAAAGcDQ1RSlqZWCae4TohCcy3rCPVsPiGsb4oAAAASAAAAATBFAiEArvTze4F6iz/DjfjXFxxQ/2o3ErMAbIZ6f/7CDvh7+UMCID5EFJ38XfmYaOBXMJqMjKtaFTxgMZveksgRz894Fe1uAAAAaQVDRU5OWhEitqDgDc4FYwgrbilT86lDhVwfAAAAEgAAAAEwRQIhAMjJ01K/LlVZlcYWQStXDcxv+JEL+H4DTIzfol9sSEkSAiBNQ4Bj6fm4xWW/iwa2+l5B2NxNu18oLuRWxkcx67wCYgAAAGYDQ0ZJEv715Xv0WHPNm2Lp29e/uZ4y1z4AAAASAAAAATBEAiAzfEYnnP3SFps6BfoMFgAGgjSB1gVbDTgZcUTe+WgTJAIgHdogCXnND52bFL3IihU0b3q13rCsIQFSIf7WuxbheeUAAABoBUNIQURTaWktM0UBCiB7dZp9Gvb8fzizXF4AAAASAAAAATBEAiB77q8VbLEu0rXGc/EYejZoM/pqsSjkmTn29qK9mRWhfgIgegFS5diaDu/uv+TSrlN21/UiDY5iv50suaCapf4xhIcAAABoBENIQUkGrwcJfJ7rf9aFxpJ1HVxm20nCFQAAABIAAAABMEUCIQCSJPSJKT6BVAug1wwoA+9AskHjSJJKQcZCX5fR0Z+53gIgDQiHHCbPG6rB9cgbom+JUfCjniRt3pxcAaWlHqxzBrEAAABoBUNIQUlOxMJhTmlM9TTUB+5J+ORNEl5GgcQAAAASAAAAATBEAiBeAX7ZslEcPLsFMjMFLb50MvbUbtzDSNNvpkCLHsZtcQIgPcMFhlRzzpaaDbvAkaIoLEt9eMVH9Nw8QqMtQORt20AAAABmA0NIWBRgpYCW2ApQovH5Vt2kl2EfpPFlAAAAEgAAAAEwRAIgUkP4v1u7+BZOR402c94HvnBVYzbkXaJcgo8h1wa2SQACIBlQ/wuPQ3CP9mTfQizDOOjDgmr0DQpCWSDmgCpmTZcBAAAAZgNDVFTj+hd6zs+4ZyHPb59CBr071nLX1QAAABIAAAABMEQCIHZbjpk4My1PTGRMsQcQ2X1vzbjm1heXbdDe3837ZT2eAiALpmFEujw6y0uFy40og0q2ebGRIDnRi4a3GomSMjkfYgAAAGYDQ0FHfUuMzgWRyQRKIu5UNTO3LpduNsMAAAASAAAAATBEAiBzT5bjvcA9d7aiJcBxAYX/z7r9VxY4JSptZ4JvZHmB4gIgdaHAWxDNlrlcMgVVU6hZ6kQo2StWj1lqIZgRkFioZYsAAABqBkNIRVJSWU7LaSsP7ezXtIa0yZBEOSeEh36MAAAABAAAAAEwRQIhAJ4+VeLU+BlMsX3npkcpLAbYOtqDTuTUjrMP9+G/1mOsAiAwqCKYQae/3MhWpmAJcS1rnr99IDMX/rAtPBH8fSRjBgAAAGgEQ0hGKxiqN1SK3BgmQRtdoqoCbn56+cpPAAAAAgAAAAEwRQIhAJ7YOA/6UZLAeJzevniH66F0CXx4oJ2bibvIPVK6bk7KAiAFgwKOK/Rn/sd7hCUWQhLis50jWgDai4oGpR+xYmk8eAAAAGYDQ0hJAAAAAAAASUbA6fQ/Te5gew7x+hwAAAAAAAAAATBEAiAL16PHhW0hH9PtFQ6IcdeKd1Fs1hVaeA48kuWN0dn/eAIgXwjdY+HMWLUbPAHDOjARkZnXaEr1NWNNBH/wr+WKYeAAAABmA0NIWjUGQk+R/TMIRGb0AtXZfwX447SvAAAAEgAAAAEwRAIgQ5MpHKHA++CFJOFd2Q5kE13DSqVWt6qxb2QUSkcgcpQCIBBH8WaB72xV7mDQ2vXQPliQ1ObQOjyoVmmCC3KlAfLcAAAAaAVDSE9OS4Rnm8Rn3GwsQKsEU4gTr/N5Y1HxAAAAEgAAAAEwRAIgDIG3adc5KJCt95Kb6Kr7+RTFt3sI88lxhTnA7XYkFkACIDO6Vre9JSMLi+D/el62H+EWphlqbirVLGINqMPYBVERAAAAZwRDQ0xD00jgeigGUFuFYSMEXSeu7ZCSS1AAAAAIAAAAATBEAiAuWikiCa3rUsvl6I/EAafAsEKgMPLZyW1O+Bpu8/ziFwIgXIB5Nhkmyo9pNdbJR0ZBEh7BmD7bVif57dFUzjlNKtwAAABnA0NIUooiedSpC2/hxLMPpmDMn5Jnl7qiAAAABgAAAAEwRQIhAPxtvVLd6FSVgwCIIILVfi02txJqFNIIp9hkJwV8qdZCAiBpJ8QSBuVS42MD6sGDi1hitMRuuW8Tkai+cpGE602hvAAAAGcEVElNRWUx8TPm3uvn8tzloEQap+8zC05TAAAACAAAAAEwRAIgEEnGvdyXlgfTJrtLZ2H/pC4EBJ4oYepPE1SxA5lRyQkCIEnzYViymg78K10gMQuQDgT1JxM8PfMun2HfKtf16pLvAAAAZwRUSU1FSF0XpvG4eAOS1T1kdRgkJTARomAAAAAIAAAAATBEAiAFaKt3kfoaZ10msc1+jZwYSX4glPZqjO/sVkubOy5DYQIgJA9XBeFrOIKSHN5G1K0h7tgk5b5tvl/DIr0YoWpelvkAAABnBENIU0K6nUGZ+rTybv41UdSQ44IUhvE1ugAAAAgAAAABMEQCIEsjC71fF2Eao0lndogiPNX9ClqutRk10M5KV03ajjxfAiB0qFKyVeWQEj0rOiEO4G0Ua9+aAhYKgloAp35G1TN+VQAAAGcDQ0lNRWxjbKn9VNvdZt5sHA/q9WN923sAAAASAAAAATBFAiEA0aXLjT0YIJyx/CDbyopdfUrAtP/s2KEkC528JBZ3Aw8CIHwO9YjaIbyfgOWo7tnVJkV91pszwjq7tZeQI8Nou9C4AAAAZwNDTkTUxDX1sJ+FXDMXyFJMsfWG5CeV+gAAABIAAAABMEUCIQDEWUjuO6JYwXflwEAa6l9ClHaf2GaxSA5zgjpVLzQ4FQIgAgEwVZ6dp4gGuA9GBHogS+/c4ACRzuCZYy7FnNuGB0UAAABpBUNvdmFsPWWDkEYClfuWP1TcCJnPscMHdt8AAAAIAAAAATBFAiEA0ZtLrpjmQsULsig+HBN3d7IwFRiS0nVmpTMiSxQqTzQCIHubWRKLQYJMNqFX+Da9zsRBOD90Wh2EEBKl6bHN7BfqAAAAZQJDSwYBLIz5e+rV3q4jcHD5WH+OeiZtAAAAAAAAAAEwRAIgb8mVCFC6Pqw2ot0w5kinRe3+t7eE+ZqA6h5Vinoaz6sCIFntN0gLLfYtQKU6HzZCBPI7XDIcm6x/fUm3VD8Q5DJDAAAAZgNYQ0wIQ5cbSsboQqUYqhhOAnHYi1y3TwAAAAgAAAABMEQCIBERWDaNBr2j434Y+2fQ8IdnXpDQ9mYtxNBAEyZg4/xYAiAgcioAc2twgz8T1MWRTv+A0EVHZSA3NKVZxsAoQXckRwAAAGYDQ0xNDtg0Pf3uMuOLTEzhWjsApZ6Q89sAAAASAAAAATBEAiAQMq/beGmRAATPWxDUaNohBJTMfCoJRaNnRnqtLGV7ugIgCTVDSzlkBngTznl0DlrktmFun6AF4yZYngnZD3XZVCEAAABnBFhDTFIeJrPQflf0U8rjD33dL5RfW/PvMwAAAAgAAAABMEQCIDnK779p/a2ELmE500uYM5UX7RZZTybg0kz/TdCHLP6XAiAMj8v4onoD0vW24O57BLGEHam9MCXopPi4kwU0puvcKgAAAGgEUE9MTHBe6WwcFghCySwa7Pz/zMnEEuPZAAAAEgAAAAEwRQIhANTj6qQmrsNOLX+AWEFY/uFvp8FtNxzRVKSjNvl4xaGYAiARblN6DzgOAbC7/iyqC1pS+1iyqEi/TpfdULhXTzCNiAAAAGcDQ08ytLHSwhfsB3ZYTOCNPdmPkO3tpEsAAAASAAAAATBFAiEA5Ijx/MQKqsnlKCdovAsXuSKgLoAymwPtZUhRoySpNy4CIBdEP2kdG4vG7WHZmG2gRtZERcimpnQy+6fSj87odWafAAAAZwRDS0NU9rxd2yGyK3ajHHGaiukEIyBV2HYAAAAFAAAAATBEAiBGptXCl0AR7aTWTFr8rEOQsxvpGVxUhnnxteeUzN+wegIgbp5B3B2+7lmbiCYqYJG6GdUdBXGb9i4BenWgeMlU+U4AAABmA0NUSYwY1qmF72l0S51XJIpFwIYYdPJEAAAAEgAAAAEwRAIgGAroeQ6EbCbMaHjAU3ihzlTqCO488amGfFQPYiBuiLICIBW+KZngCijwwqdOME2aiV507lcru0fjhWvjnbmWMx1tAAAAZwRDQ0NYN4kDoD+yw6x2u1J3PjzhE0A3ejIAAAASAAAAATBEAiA2oJst/VSSvcy0OToAqhy4kr7m/a3kj64Ef20jtTBLTwIgJ0BQMWX4tLrMLXtV39rv3hkak1x/5iUgZ7q64A27SjcAAABmA0NYQyE/vuE5S0YO7Z0fh/AGbEyluFzqAAAAEgAAAAEwRAIgKWMxw8f5a2nmrSf+H5uuHD5dOhAc5d+mVghSICSxNBgCIGIqjn5xefkGMozVrGZuiJzkF2fzxY5nXYOklyZ0sDKQAAAAZwNDTEKxwcuMfBmS26JOYov3045x2tRq6wAAABIAAAABMEUCIQC+IhJmmtFtsEJ0Y6hcRuEmRNuJgy4hPQGE+XcqhNfsmwIgFm78UuOm/hNHX0QvGiS/UN7mbtZxSHaGvDmpZK7nSMMAAABnBENNQlQ+3SNcPoQMHykoay45NwolXHtv2wAAAAgAAAABMEQCIAYwhcKE4fQWIB0hlvgdIgbtdNTrQyHDtrgfNSQRkwoUAiBfnSC5ccSjlW7I7u5HStjbFUub4MbaIdFZBJj3Yc/ttwAAAGcDQ05OhxPSZjfPSeG2tKfOVxBqq8kyU0MAAAASAAAAATBFAiEAsP0CnGjecqLTeadd+UsNaEMuyVpzVM4D9Fd8SeBWY+YCIA9aOa2uSItvo9tHGVtvu6UExCGBqMOO/FHzv+O4WgEEAAAAagZDTzJCaXRXSza87UQzOIddFxzDd+aR99T4hwAAABIAAAABMEUCIQCi2t0LLfCA+8+DLI09HUH32WUrZPIwEfEYCZMBDSu6EwIgdOGAXmdSvCCG2LuSQ0/CmfITc0CYc4iMY8Jv8hslp6UAAABmA0NDM8FmA4cF/7qzeUGFs6nZJWMqHfN9AAAAEgAAAAEwRAIgO+QIpsmw5YhC39dsh0//IIF1rxjo3aB4kJL5cn7/DI8CIDGIVZxogGOFd542lrZrCkFmdKSm6/vcqA9sIZdXgKdyAAAAZwRDQkxUKamcEmWWwNyWsCqIqeqrROzPUR4AAAASAAAAATBEAiAgb4w3PzTPZPvwvRlV8SHWVvVdS4ksUVqnNluPyBDd+gIgb6gdgN3OS0kcFQ9wNs0qPwdUpn9Z226oGVI6QSWxr14AAABmA0NPQrL36x8sN2Rb5h1zlTA1Ng52jYHmAAAAEgAAAAEwRAIgKsxt9YzmJpsz+kULYOfEkcce7c8a7wZoamNDxiDPlHoCIFzw5bkM0RS8NbwW+41TmuspL6T2f96he59Sjw7xRvgNAAAAaQVDT0NPUwxvX31VXnUY9oQaeUNr0rHu8DOBAAAAEgAAAAEwRQIhAPQjlGRHo0QHwf8rCfCZCTQV5a8aMWJwZ37YKqqZ18i/AiADfW76eXAbQU0vCaoXg2AJ/puG925mJWExMz9vyFr1/gAAAGkFQ09DT1PEx+pPqzS9n7ml4bGpjfduJuZAfAAAABIAAAABMEUCIQCrRNtKbuwmBjOB/O4iSLmPkVYlpTKrjwcLurmawlMPkwIgNGhdhRIOlwSDFYazIk6evuXrpHrFR1dvOtNJICeNq3gAAABoBUNPREVPRrSn2QbxqUO3dE3yNiXmNybXkDUAAAASAAAAATBEAiBBzoBxhZcKPEN2iepNz1Ka61SPDFpFkA9n+rgGTqM7eAIgIsYYI8BaTJh7d+njEpL1C+aHdBYYmMfIDntNtZaag5QAAABoBENvRmkaI6a/uttZ+lYwCMD7fPlt/PNOoQAAABIAAAABMEUCIQCopQgP4lxDH7ekZIxknFroVAQ4epIypE0awKDMSnaFqwIgL7SXdfPU2iSkECFOV6PEVjTjU72IczqxJEVeap0UR/kAAABnBENPSU6HsAjlf2QNlO5E/Yk/AyOvkz+RlQAAABIAAAABMEQCIBSGBRhVYKGt02eSZfP4uEDsJif/N59+t6U64Nk1OjQLAiAwTISTFDIAoy0U7v+0ZtBf1gYP3Qad+t/GQ8Z1lEfnvAAAAGcEQ09JTuYf2vR0+sBwY/IjT7nmDBFjz6hQAAAAEgAAAAEwRAIgGeRQ8PeuNX92r728JaojFDaji0BkhsWytk7zN61+YXkCIC2NFDtVweReeDx3I9E635XX8iz0k64i9N58O1X7vlwmAAAAZwNDQ1g5XcmoLj7vlisDVaPU5oGemvd20gAAABIAAAABMEUCIQDGeh/5AwK9cFzd+7zU3ZORrhWrC8LgQi93nyJV6QmwcgIgAyzacdpIpD35YEjxaCwCDRy2Rqm9iBkmXOI10zuRgvAAAABnA1hDQ02Cn4ySpmkcVjANAgyeDbmEz+K6AAAAEgAAAAEwRQIhAPb0YKJMGKDOeCJzveNUkRntyka8erT0dwJUCKhmYroAAiBxdMiEajxW7gmbqjOVCgWwtWjA4SoAkoBeVtmH1aTtIAAAAGcDQ0RUF305rGdu0cZ6KyaK1/HliCblsK8AAAASAAAAATBFAiEApgvBw3PgmEUy9LDKoJvYB3acexr2e283g6IUm3uTgK8CIEbHeMJGB9XpEuwrYGPtDQt8GVTH7SG1k4RwL23LFnPqAAAAZgNDRVQIH2evoMz4x7F1QHZ7vpXfK6jZfwAAABIAAAABMEQCIHJqqCgdAeo51JlIzFkr3W/ULOFK9Mgybw1O8h5slteRAiBVbFBvr58wV24bTyhPAzkdOjl9QK9BjNYTM5f6BoChrgAAAGcEQ09GSTE274UVkqz0nKTIJRMeNkFw+jKzAAAAEgAAAAEwRAIgIa5hIy4vrm5pdg3EXcw5j5AqJX69wchLDJOZ0fm6Z+YCICokFCstwVkuLUC3msfNlQZ26bszxEo69tjRfOmwslHWAAAAZQJDTOgdctFLFRbmisMZCkbJMwLMjtYPAAAAEgAAAAEwRAIgCOIkr57E8JmYjtACiHD97GgsYHr+uvWh7OsYZRFCvKsCICuH7EQD/v3hGtQEMCadQiUYmX7SeWiLDAFWVW3kygJDAAAAZgNYQ002rCGfkPWmo8d/KntmDjzHAfaOJQAAABIAAAABMEQCIH7uk+NE1rdczZfr7HKspMCZsJEOkqYmshOSIXvciHntAiA/EymfFftn8aTcR0z45xtCFopx5q1/gIGp4XvlNDM5cAAAAGcDWENNROLKkc6hFH8bUD5mnwbNEfsMVJAAAAASAAAAATBFAiEA15FdkTzKiHpr7YgZBgb7EhNC1oiSXrC5u99/ve9IHrgCIAD6wMlQzOCeY7IYiBlV/PGvYSml1fehIvvTg9N8Bi7nAAAAZwRDT0lMDJGwFaum97Rzjc0250EBOLKa3CkAAAAIAAAAATBEAiA3q0G1bdPrHuxM3+Kc2uDGBbqYTf4Q1G5STTGPF2m/kwIge4+qLkGhQiMN8GoHjkr+Z5Er7uYfecfU+3Jl8awQukkAAABoBENQRVi3h9TqyImXMLuMV/w8mYxJxSROwAAAAAgAAAABMEUCIQDT9S48+MdZChupJyEp+fMdV4Psfykt1y6SuFYGVOxORwIgFN8KAwRSmyriIqJMj3vK2DoLZmkA3xae/OwYj/XFPGwAAABmA0NHSa2goSAkYghZmWUtxTEKep4r8+1CAAAAEgAAAAEwRAIgZOKpz91EldMxoYWQoRzI1CEHApWPst9FJAZ3Difr/HACIEfXy8VaFOdnwtyasxfoORLKJ/vX+EK5wcbUJgFlcC7mAAAAaAVDT0lOU6SNO3n0NHciSTPkkuQvXKz0CR7MAAAAEgAAAAEwRAIgOV0Osgbz6D/N1d015Cdr1oLj2spznvnAwdJCujkKQqcCIHe5wc2c50DfeKIusMdXrrGY3iR0FQq18zhSMuxbl2heAAAAaARDT0lO61R+0dij/xRhq6p/ACL+1INuAKQAAAASAAAAATBFAiEAqAR35kvf53ioL1rFhP3vLSn2cfV40q1eovDaslrEp+kCIHANvlzW4W44yycy2bJxBwGHXepTR76T2P+MxoiXq0cSAAAAZgNDTE5BYheLeNaYVICjCLIZDuVRdGBAbQAAABIAAAABMEQCIDoLvlEJYavFmJzb/9rUp5gOAmcndvNZTZL1SJ8hh02XAiBjhksN5OI4a2ompNYtWOQtQchKzmhz2rgiHIIZQzbeLQAAAGcDQ0JUB2yX4chpBy7iL4yRl4yZtLywJZEAAAASAAAAATBFAiEAxRPDuTENPzoBCyjUbC3chBncpCNmDkaQbihP6iPiNSQCICJ3eKVI/6/B0pUZks0wJVfbCoWV+8pXvyaQL+G1fdvCAAAAaARDT01QwA6Uy2YsNSAoLm9XFyFABKfyaIgAAAASAAAAATBFAiEA/kelD5hLWn5Yxge5R7MaM2R8Yexo9uVGRZ5nN2aDkI4CICLiBHvjU2fgVP9zYSBULYV6TIXWB/8BChDOUOdo0i8lAAAAaARjWlJYszGfXRi8DYTdG0gl3N5dX3Jm1AcAAAAIAAAAATBFAiEA62jEjeCXBdw29hZM4hCP2A0+KUb3hr4uVgNIQ6XJnc0CICzVmDJVtBjJC97GBcKh0QXxSNPBzbq3TMCFb95uYBR1AAAAaARjUkVQFYB57mf84vWEcqllhKc8ermslcEAAAAIAAAAATBFAiEAzzye9RBnUfGVwbhTBNd7Di/KQNOLsjlPXYIIJkB3mZACID0pp+QboINQJN7TZfESLeIQQu6TfSLJuLKiYZTMiJrsAAAAaARjQkFUbIxrAueyvhTU+mAi39bXWSHZDk4AAAAIAAAAATBFAiEAqPUM9lqiTXpTSJnDPTrfJJH42VDrh2HR2rAZKu1/gggCIDcKuiBf3gmwIKpIcxrd+s4+LPZHhKrDuGPIQ+coSDsrAAAAZwRjREFJXTpTbk1tvWEUzB6tNXd7q5SONkMAAAAIAAAAATBEAiB6De+y1EMfXtuWVH+rzpk4P81KSXMBrvrayVv+dKGe7gIgBT9iWQ9z77S57OAtABMe4p/ZLcdSdYgGqn04t3nt/U8AAABnBENFVEhN3C0ZOUiSbQL5sf6eHaoHGCcO1QAAAAgAAAABMEQCIFybETBD+mqo19AfjrFK1yeaOIYMK1aB/qvGUZLcKYbpAiB/6z0W0SmO0qUEEJ/uv8APtwgb12iCJe85HRt1BeRQcQAAAGgEY1NBSfXc5XKCpYTSdG+vFZPTEh/KxETcAAAACAAAAAEwRQIhALaeG+lZGKkXaLTwRDZpNlJ5cu6bb1rH/8KnIPRRPAIjAiAVXEinO5Ip+nKPmhA/+feVNZH6vXMyYm+PWQzHEOT40QAAAGgEY1VOSTWhgAAjDad1ysJIc9AP+FvM3tVQAAAACAAAAAEwRQIhAL1o+ibq2aZmtMW7Z8TF3sO9CEHjuxGJNBlb7x6fB0B+AiAThKcvvzyTPRflSqb1e5NrvTSnPE6tKBUrtKcXkOdI/QAAAGgFQ1VTREM5qjnAId+66PrFRZNmk6yRfV51YwAAAAgAAAABMEQCIFjtJcBv10XTheQ15+7FaWX1WecaeQu1e77IQ4TTb8I9AiArMuRfo0qTaFGw/MFfZh3CdP79yl06dp1nCBRDNtrwTAAAAGkFQ1VTRFT2UMPYjRLbhVuL99Eb5sVaTgfcyQAAAAgAAAABMEUCIQDa1Qgifjq+wTqAaR7gO/ZGhM2H4WaeU8a5whQD10K0ZAIgUWgkxG49Qkp6K6JHuw0YIXVIdKkcMBmWqhHDkyHll9sAAABoBWNXQlRDwRsSaMGjhOVcSMI5HY1IAmSjp/QAAAAIAAAAATBEAiBMxFqj4UT5BdU+tjxBLGdi+MklGwH4fIksOfpBRGK1GgIgf/67rV8Yjn9oeTsDS5EqXmUk7e4HX8FhaZlhmXSEdpwAAABmA0NWUDjkrbRO8I8i9bW3ao8MLQ3L59yhAAAAEgAAAAEwRAIgdGhP3zYys9staWUSJpj6Ysv/TGTEerUtLoPzwy8dZEoCIEmg+Sq9D5MD3mN3ZEfytPDr4aRg+dHvsKuhq6HS4DcXAAAAZgNDREyKlcpEilLArfAFS7NALcXgnNayMgAAABIAAAABMEQCIDV07FbHXN4x6Z5Pk5xZw7nj4JZAm0aB+TcjTgBDtJvRAiADZLRgKiZbkN9wTcjEylS0aWR5wqTSsrvNcdyVejqkdgAAAGcDQ0pUOr3/MvdrQudjW9t+Ql8CMaXzqxcAAAASAAAAATBFAiEAjigT0+JzPR8Loh+KmXHKO02iCaWAPslPjB9Bo3tJro4CIHILYcv39JZqW6RsidcbdjYkJO2WyQfeQVhOq6RHy7iPAAAAZgNEQUeoJYq8jygR3UjszSCdto8l4+NGZwAAAAgAAAABMEQCIAckSrxQLx+4mcTkD3Uej9VyO9UspgkkPbnuMIP9BcDpAiBfvpeTDzU48NShRqB/UHh4k5Qz/Ier3JZghO9zl4bv2QAAAGYDQk9YY/WE+lbmDk0P6IArJ8fm47M+AH8AAAASAAAAATBEAiBUe6ZDhyLY7IkH/9uLf/39akkClj9B8O6/RtEIPDsMEwIgHC+TTsTIHegakg8yg7TQMSVqbea+P0dg/Pf8MNcdiQIAAABnA0NPU1iYkaGYGVBhy4rRp1NXo7fbrde8AAAAEgAAAAEwRQIhAK4Y9Vfwb8nCrPap7pYh2bQslx2BRfc7ajxSWKQrcDJzAiBBQJls9n/2n2t/g6rVOShydiREzIXvYDzz9okTYDrTJAAAAGYDQ1BUm2JRPIonKQz2p6nik4bmACReqBkAAAASAAAAATBEAiAB4H62VGK6sE9fiP5XoKnaua97Hn4n+jU68LUkt8m5RwIgCxH2siXqrGmoDDDM61ykGdzDUjetavGHStfq+gXrag0AAABoBFRSSULgkhbx00PdOdaqcyoIA2/uSFVa8AAAABIAAAABMEUCIQDuimOncss+xj0Hyg3RrbEMJ3CLu5YZVDwIlDDaIYpiYwIgPCwFRT5ipVZlcqFkQvWSxvpgSg/Ul9LD2CE93ci9eYsAAABoBENUR0OefSm9SZtsfaKlsur89KOdO9hF0QAAABIAAAABMEUCIQC/LftN+xakJN4WzVZq+2uLJfybx0okdDyUxVlsfUCJCQIgK5Gb2m3r0kXKJ9g5GoK4Aghk8B+5koss8J+0ZIyfPI0AAABoBENPTlbINPqZb6O+x6rTaTr0hq5T2KqLUAAAABIAAAABMEUCIQCY4W/fwE352efkcfFevj/OYDzMA1rnYc47NgW01mi75gIgYrrUCwecWL/BSfx4tQisj4FFwgm86e5RlcZAA11Gq/YAAABmA0NQTCSMJ/gU7yycUcJjmNCXFc01FC/EAAAAEgAAAAEwRAIgCSAZXJJw2L113UASUhSamqk0sHLFgj2ofQyhm3ZkdtsCIFNc4W6pqbuursghc8Ou+wfRlq9zdHIt/azEo9EdMdgcAAAAZgNDUFn0R0X71B9qG6FR3xkNsFZMX8xEEAAAABIAAAABMEQCIHNrYpFMJFJzTBn9xm3RpMlsyhEl7mG8WPawvloZqVIhAiAbqbjt8NfKkpnXlEPNOkd/gzq6iTyaecDRH2Yky4suSQAAAGgEQ1RYQ+oRdVrkHYic7sOaY+b/daArwcANAAAAEgAAAAEwRQIhAPrvQyH/h8aloAacvc5vbdKw35b5/v9PnXznzkbiB9kWAiBrKRMLl3LnihjGIdVabmmXWXoHCWjof86EL65QEsVwywAAAGcEQ09TTcS81kyyFtSf08ZDoydi80YmtFoaAAAAEgAAAAEwRAIgTiiCcfS+pBykfNPfU9G7R+q1nshUH0LKi4Hk1Ghlz/sCIEQbOANHdppzWJTT2cgLmJ5lkxlP2nBSpegHUQGnXQFxAAAAaARDT1NTZSku6t8UJs0t8cR5Oj11GfJTkTsAAAASAAAAATBFAiEA/qjqGKgNOw+boXzSLiczGPrG3YyCkTBdvpSisn1F3wwCIDF0a/5rdokRIvezLEAEeN5NZ8Vbg63Ve+w93GL6961iAAAAaARDT1NTnpZgREXsGf/tml6N17UKKciZoQwAAAASAAAAATBFAiEA8hZiYmZrRgKxC7zVzsUJs/+gu3EjBHU2fnx8FjeGaSMCIEKnVrx6aYyrwOPH3dNSJWdzPF5FdpRcaigzxZ/+LmtXAAAAZwRDT1RJ3bNCJJfmHhNUO+oGmJwHiRF1VcUAAAASAAAAATBEAiAaYaqi/e/EZwpHCSL8UiuvPTasMVw2dVeZ0wf5SY9U/wIgJ7xWLB1c1t7uswNtnu0DNqL8tPooHiVFzRKB52/G4EEAAABmA0NPVFyHJQDABWVQXzYkq0NcIi5Vjp/4AAAAEgAAAAEwRAIgVSiY/3zYU6jBUCpBSTnIXnIKmQey4QePQtNvZL5PMP4CID7V1hVYuRKsaWidu0d2u/FVo1ObOiwr7AwGuTrZNtKAAAAAaAVDT1ZFUkaIqLHykv2rF+mpDIvDedwdvYcTAAAAEgAAAAEwRAIgH2cc1XWeYpxm5JlrFZ+NoEuTH2z6xsforFHGAH2HDrICIGKfxmS2b8QKulK4CvCWfHggeGUDDojJnCHioYZ2HTIoAAAAZgNDT1atqGsbMT0dUmfj/AuzA/Citm0OpwAAABIAAAABMEQCIGmm5Ple5Mk1K1EYrvJsmGqj21kV4iPdWJp7H6tt2BKLAiBmOs7IIjYGnKMdcPVSiXe7fYoSdtp5UM9u7TNrCaG4KwAAAGcDQ09W4vtlKe9WaggObSPeC9NRMRCH1WcAAAASAAAAATBFAiEAuTRTxtmraRE5YP9pZyVqofEpm4PSsSwKNf1ZGmTWjAcCICbLRlEYcj0rFyrNQj7ffZ/2Bz1gcQA29R+97IFssgfgAAAAZwNDWEMhNAV8C0YfiY03XOrWUqyuYrWVQQAAABIAAAABMEUCIQC4UQBgRvXxF2kOTSIb6ji7ecAWojxwFgDfMJWqoPhEjwIgQkJ7rLlmhH3+yVoxS5QNgagxouLQFsc9q1L65B+jmpQAAABoBENQQVkOu2FCBOR8CbbD/rmq7K2O4GDiPgAAAAAAAAABMEUCIQCbu9YG6QX7ZzSUrlGYvYGNwHx5b158bHJ+J9+RIrGzwwIgMTw5sYaQ9qE4yE7sa/e/yesQ1KkcpeJsLa5Zwn1iMoQAAABmA0NQQ/rk7lnN2G476ei5C1OqhmMn18CQAAAAEgAAAAEwRAIgAu5OHyJ0bEw+rfSoD/DuW97eqF3DQaZ9WbQvZdoU8g8CIF1oB8OKSmZu91rcBm1brMpiX9HC8zlrfveOA80OeO1rAAAAZwRDUExPcGSqs5oPz3IhwzlnGdCRemXjVRUAAAASAAAAATBEAiA7QZBHXQ/a6UXQy5NZMaWZJvA9o3xJ6nEO6b1dyHiHlwIgOs8M7QU7z3YF4oAKFLm+00TcLSoFpiGakcz32Z2/AWMAAABmA0NSN39YW5Ewxk6en0cLYYp7rdA9ecp+AAAAEgAAAAEwRAIgd/jw0QcPCS9v94TIhPlxeSKnbqRQC0bd2pX+7J14GokCIGuRluGDzRiGgjIB9W5WPmhaOMzeqhX2maVrOG30FrMYAAAAZwRDRlRZaVaYP4s84XO0q4Q2GqCtUvONk28AAAAIAAAAATBEAiAvzg6qBgrY0h+CaYBGgengMt10nBv0p9WYTPwkMA/CegIgVHnP5WlPXhgOTqJw1xhQW9XFP0pE7oRUkp8qHJZFqusAAABmA0NSQq7zj7+/ky0a7zuAi8j72M2OH4vFAAAACAAAAAEwRAIgBTVnP8biAI5Cqc1StccpihKP5SVFEISMZA/y0O4zQvECIC3XiDm74E8e85y3s2tOmKJ0hnUe6zgbHWW2Jjby2Y70AAAAaQVDUkVBTSulkveNtkNlJ3KZKar2yQhJfLIAAAAAEgAAAAEwRQIhANG0Q28nFGPDSQ8z2s81INJawQ7qcLDymwHQV40dK5KaAiBcbmnulE023eqvVnIHzQEJkDEBxOy3A7K3KSlhbnK9WAAAAGYDQ1JU8NoRhqSXcia5E10GE+5y4insP00AAAASAAAAATBEAiA5xj9Ck9zC1jvNMIwSiggkOtqr3IJKpFewpnBRGH8x7AIgOSWDuTqcu+Gg04ty1+wPKSwO/xenefgerQzTrsmqHaIAAABnBENQQUwxkQr/VUV4R1WXCuH75/5l1fDuogAAAAgAAAABMEQCIGAxBfUHTglc5bKSo6nUq1swOAniJ0tfvSITZONdYvEpAiBWwDAL0LNh9mvRucCM1OSc/A4R949MwQr3GV7vs32F3wAAAGcEQ1JFRGcqGtT2Z/sYozOvE2Z6oK8fW1vdAAAAEgAAAAEwRAIgazbZILTYLKsqJjLoH79Nesu/TO/R1oJD3eUFUHtpP5wCIEr9QBaYGnRZlXvr+H3RaoUV5MdlXwx67PzWaWLZvEhQAAAAZQJDU0a5rZRNEFlFDaEWNREGnHGPaZ0xAAAABgAAAAEwRAIgMmQqnmYrQXcbfCT9VdF4jFKksb/VxG9pZbrS2GSBkWgCIEphHvdzcoa2XPAv6jeQNjxEr3ccYpK/df6miQNV1RMmAAAAaQVDUkVET04GA+KiejBIDl46T+VI4p7xL2S+AAAAEgAAAAEwRQIhAITI8OiQ0V2Ghj5nlO6kciQCB9zxvUHoI2q10Cdy2j7uAiAN6cXV+8S8CloLTLPNgR4bZZ8hTTDpiWKhwSj12WlckgAAAGcEQ1JNVJI4v7eBpV6sw88F99+UA4wZjNm5AAAACAAAAAEwRAIgCxzStttdQVhyaxxKWOYebgHXcUbLchdSW87XATtIo9sCIHrey/ArZcs9UjfGeZXdy7eRsUaYAoCim7ccNCpB70o6AAAAZgNDUk+gtz4f8LgJFKtv4EROZYSMTDRFCwAAAAgAAAABMEQCIHUWuVTv6GOELP0T7FK1KCJEGQr7FnCAbrraF7Iiox+0AiAiCYVRiVgkUmM4NnV5QUhKmIj1gZVUbk+dEHYLQ9TXYQAAAGcEQ01DVEe8AVl3mNzXUG3Mo2rEMC/JOoz7AAAACAAAAAEwRAIgOsZLGevbfKTz2Uk26fN3LdyhXSc+pfs5u9lxVGINOK4CIFnHcu5leC1Qc8guojOEXuqnSJS75xcAhcPEHpGvIDusAAAAaARDUlBUCDiUlddFbhlR3ffDoTFKS/tkbYsAAAASAAAAATBFAiEA5XF2OyCSzkHEPPdaTWiZ/D3FrTt6l/yx4HgX4x0brRsCIHhK2VoJ9eNZVknU0tbifNdx6pyJeHY65egq5QIQSQY3AAAAaARDUkJULPYYwZBB2dszDYIiuGCmJAIfMPsAAAASAAAAATBFAiEAtK9NcsboLMZf3WHDo0puo49oZIEuLn2lYYRU61WUgTECIAEjrt0+nHXjyS4R6raRbFzDrnBxPweaNmrHLBW/inp5AAAAZwNDUkP0Hl+8L2qsIA3YYZ4SHOHwXRUAdwAAABIAAAABMEUCIQD1u+FLHcihONfVn6wUrGa+aDNZrH0UZUq5PV7iA0PECQIgE4WveLzpTNzq9ojG1GIOGf3ThssfiCuvyWY+gxMm+FEAAABnA0NQVIjVC0Zr5VIiAZ1x+ej64X9fRfyhAAAACAAAAAEwRQIhAL+ykQ4016Wc+CorFR8FC6muJ9luOoRZ3X0rncbEd9XLAiBzOi8soC4xwd1Ar7KKOSPsuZPLkgmVI3xGDezb6jKXvwAAAGcEQ1JQVICn4EjzelBQA1HCBMtAd2b6O65/AAAAEgAAAAEwRAIgbH84KQ7FoNz/rw5DxtwsqvyWJ1dwbfUDqM0LaEJAtFwCICxUul01RQ+rITcwNEOynUMMiJeuDoZlJ2EpGNTtRRVbAAAAZgNDRkNd/4miyqTXa8KG901nvXGOuDTaYQAAABIAAAABMEQCIC7ZPDgueiYBr8msqJWie2FPMTF9zOX15ng08ufmurqjAiAjT9Zftbvy06C6uilBDF2umgQHRiXXFLpFdx2ebClAqwAAAGYDQzEwAAwQAFDpjJH5EU+l3XXOaGm/T1MAAAASAAAAATBEAiBRilJwBahnE41+pJBti1v2QZpiVqTOXoGglvIkZ8eVywIgNuGV3uzK6Ai1O+jM12piXiy/0Fn036XS6Hdx7XZWoMUAAABmA0MyMCbnUwf8DAIUcv649yeDlTHxEvMXAAAAEgAAAAEwRAIgQyBv2O/1pcEf2PUCd8QRGlwieJtNuxdi4MoVGsLOBKwCICmj/h4ByhmVMtNV+t+z347ldYAILpdzzKlfRIdMZTNdAAAAZwRDQlJMpvplMazfH5+W7d1moPlIHjXC5CoAAAAGAAAAATBEAiBO7oE4JNaJ3oFSiszf3L6rtWyOoSCFTb41qb23PK7SCAIgFJ8ro8rInPp7i9eJp1kWWWSEtfZ7ouWqcKGu8Q6r6JsAAABmA01DT7Y7YGrIEKUsyhXkS7Yw/ULY0dg9AAAACAAAAAEwRAIgUbBtvwTIQkM8xe2o7oUEQkYUHsV9uT/phQgqXmV+/HUCIHHYd3c6d2nMcoxRO5IH5kL5VJnl/H8QrV2ghWN5u1KXAAAAZgNDQk2V79H+YJn2Wn7VJN70h0gyIQlJRwAAABIAAAABMEQCIA4t93hG1k5cHaMs8ixXkl/fZHUT5phco25DtkMFdGLIAiAkW7X1BWvPXOav1h6bzcTP7UOGTRz/l+7ZntX5n0o4NgAAAGgEQ0NSQuTJTUX3rvcBil1m9Er3gOxgIzeOAAAABgAAAAEwRQIhAMcY+g1JZ3sYRcQAM9XocEUHaVOOtblW42rma8DbdpovAiAUftS9A3Xs9C0D09Y0b5OlMUlImZMfePokcbWMjfz5EgAAAGcDQ0NDKFd6bTFVm9JlzjrbYtBFhVD3uKcAAAASAAAAATBFAiEA2yDkxIdqzrI5Os496f4HLalwHioVrD+poVTwDjrXpbYCICV9Ka8EoEY/uff6APM2TP5drlKFusvNYsXGhBo8c/uYAAAAZwRDQzEwF6wYjgmniQoYROXmVHH+iwzPrfMAAAASAAAAATBEAiAMaZq1E0BiKyAmHfCWXj9WfhrQLJ0l69w/8nt5FpxJqwIgJH6t9uA8/K0GXo3Pq2xH1Ig1NHTwJapOVxCU+1xOZ74AAABnBERFUE988nGWbzY0O/AVDyXlNk95YcWCAQAAAAAAAAABMEQCIDPfcS8ppuse4luvD6c8yz2r/0xk/yAsKriX18gXPlIjAiBy7TBYDwnbOFbhPlW4Pc/yVk7APIZcXjLIF4XwfqnLywAAAGcEWENIRrQnIHHsrdadkzrc0Zypn+gGZPwIAAAAEgAAAAEwRAIgW4+kZdZSNz7FC42kmFshxQxDyd/v1fGV42lWJKV5zlsCIF0/Oe/zuEotAJhKki/Hk0f0jAb+UQgG81Lhtycn17Y5AAAAZwNLRUVy0yrBxeZr/FsIgGJx+O75FVRRZAAAAAAAAAABMEUCIQC+Vdp1giQSEYvgo9pZ1jVPLi09giWwBsyQyOT9nHnoNwIgC1OyjqCnRkao4HU5JrG0uaaEww5gYt7Vc5Jmuk6R4NIAAABmA0NMUH/OKFaJmmgG7u9wgHmF/HVUxmNAAAAACQAAAAEwRAIgJHdrqbA+PXkhvbjjmnYF+T7kxeNOqftlEhqNCAvdmBQCIGncAPT/33mfxe7xhqlK1qGoCqHxhEsx8AuSurs/O9njAAAAZgNDTEw9yaQvp6/le+A8WP1/RBGx5GbFCAAAABIAAAABMEQCICFxszNwy+cRHgazIRbdN7goZo2ezRa/UHfobDsiwAM6AiBV4fbKK/nV8wUNlXXcrIoGPY2PwF9pGSS6/+9VibF6rwAAAGYDQ01DfmZ1JVIc9hNS4uAbUPqq5985dJoAAAASAAAAATBEAiBQurm7hdGBfoCetL1ppldMCo6VajTqD2J6nxOhC4ukvwIgM3LquWbOd/02v/+UmIS1JmcrZlkKlWiknYRLcpc951QAAABmA0NTVLtJpR7lpmyjqMvlKTebpEumfmdxAAAAEgAAAAEwRAIgfQT8+UuJxWSm48emooke964wOqvSQDjsSlN+POG3lGkCICA6PwRmiOQECxsUqpwt34Y9vBNB2950dyq96xhkCGB9AAAAZwRTT1VMux8kwMFVS5mQIi8DawqtbuTK7CkAAAASAAAAATBEAiA8/JtPpOtnUR+RLXBu8SgNkKM0BxaFw5zpFdbIe/NqXgIgP+j9U2ueBdxH92xNfpoNrcIdSxHo+l7dgvN4rEEHVlEAAABnA0NURkVFdQ85r2vk8je2hp1OzKko/VqFAAAAEgAAAAEwRQIhAIgyARRLL4tYPbYlI8cHRQD1O8r++TmqON674oSIEOJ8AiACNGby5sy4C/di3JbfClwicCsMhR/XeZdgp2HCgx900AAAAGcDQ0NUM29kb4fZ9rxu1C3Ubos/2dvRXCIAAAASAAAAATBFAiEAjRLI2+FD9gQ7lDwPhnMgXyqmz66HxMi2pju2d6rak7MCIAEiOHLsj+PH0nynrlxqRdRRmgAXKx24Y+IQ7V6ImXNOAAAAZgNDVEfIfF3Yaj1Wf/KHAYhvsHRaqomNpAAAABIAAAABMEQCIGbEjddB6FpvW6qsnRPe9Na6Flf0eH9wZFR+8SrQNBf5AiBGf8SH3EsEmvsr7qdwilgSlv5qYP9vpyBU6vZM27SU4wAAAGYDQ1RMv0z9fR7e7qX2YAgnQRtBoh6wir0AAAACAAAAATBEAiA+xkxjvIYFveXMEX82970N1+9LelJLp5V8ReOYA+vW9AIgW3ou3o7sK9TfuBDzB8iEXj8sMoVHPgx+L93G5QtOBbMAAABnBEFVVE9iLf/MToPGS6lZUwpaVYBoeldYGwAAABIAAAABMEQCIFB2YuUqls9kILELl7sWgV8enevjr+8mTQ3pqqWhNFjAAiAlct4AjqjGlLSDxXRa05ltXfpaqZAff9x+iMgTsfOXbQAAAGgEQ0JJWAXDYXy/EwS5JgqmHslg8RXWe+zqAAAAEgAAAAEwRQIhAKQNWxe/TRm0vwK/JY7Z6ueUVRnp5cV1Esg+0FCd/ejfAiBWklr1XQ9HB9vJDnRPB6Gh6kMNHfEPeGWA/PGH86OVagAAAGcEQ1JOQ8mh5njJAl8NTPEp1t4NgPB9l6NvAAAAAwAAAAEwRAIgONw52uNWRXX7+cnemCbLhtWuUVZpMCGkJNbAHZG99+YCIDOtXfPXibTK65K/39sbqPLQaN5+sOiTkn7uaU7SHUtuAAAAZgNDVVITM5/QeTTNZ0Jpcm7fO1zO6d2T3gAAABIAAAABMEQCIE+OgwLKdJLTnDOUiGyCUwWsHftQ4MkKLh/pc3kFip6XAiBuF/IxWCYDuDVc8U2zNsUS2i/OIu7heaXOEW2evsE1SwAAAGcDQ1JW1TOpSXQLszBtEZzHd/qQC6A0zVIAAAASAAAAATBFAiEA5HYhvKXWrrMpJbfCcPVoPtvJ08oA7U1W1Zao4FiQed0CIBj5mHZ+2TUc1BCzNwooSoFXqh2IcGnCFKPwzI6LPta/AAAAawh1c2RrM0NSVpfido6Oc1EcqHRUXcX/gGfrGbeHAAAAEgAAAAEwRAIgXs/Siw4i0hgs6vN8GoXFSOsA5mGgKi2eOMWTyHvXFyMCIF87bWQdDR7GgIQBBTVexARr1qPuDS1IVcgYFD/xW+99AAAAaARDT1JFYjWe11Be/GH/HVb++CFYzK/6I9cAAAASAAAAATBFAiEA2nOh7UrKX8SoIOn+nCcAv6yRTkfqCZXEHI7TiJ2XwvoCIF2Q50mEM8eHKpM3/lGn51/+PDBU14A5sz9eX1GggvlhAAAAZgNDVkNB5VYAVIJOprBzLmVuOtZOIOlORQAAAAgAAAABMEQCIAuAipOPwCW7+dnPfE+06i0l1IBO7N6UDS7KoeWnIohOAiBS/Lb7Ee3mYWR6HxmB2BEPXUu+KffuEb5loPcm/Ei0UgAAAGUCY1ZQvC7MC/31ZmZABIA4waunt1JWgwAAABIAAAABMEQCIGczTwR0O5Hh1HyEzt1go1AqYbJ8qYrXaXr+Yt/iYmwTAiB5Fxr3lH3Z9k/Fq6Bz+4/iBqLTVNdnLQdFB75peoqyoQAAAGYCY1babLWKDQwBYQopxaZcMD4T6IWIfAAAABIAAAABMEUCIQCzNAUJhkTVAWTUe4dG0n9BhwT12DGYwr7YiQkEfrGKdQIgVCjULbL0KToQ3c/WDFGhteN6JoU54DqS9wOwbEBUReQAAABmA0NGaWO08+P6TkOGmM4zDjZegx98zR70AAAAEgAAAAEwRAIgM/N1GMtBH08IFdgrwxDVJ2NLCcnzic9G8twWRL2VBH4CID3Hu2TvSsHU53m69WGM3AXFriV8pNBOW4Z98uVgfRZsAAAAZwRDWUZNPwa114QGzZe98Q9cQgskHTJ1nIAAAAASAAAAATBEAiA91sltK55qePo2/nquJnGAfypyev1fjoHcQZiFPRdU6QIgLUH1kEzZ7xDfxzYur2MC6qShgBVCLtRpYMG6KKqlCzsAAABoBENZTVR4wpLRRF5rlVi/Qui8NpJx3tBi6gAAAAgAAAABMEUCIQCWkZxZKvGPqBoUXY/RJ/YJcYFJvSRI/7W69ubYo6zTHQIgDA6Gvftbg1sEMLp9klJCmQAgNbXSB9H1QRiIfQTBMuEAAABnA0NWVL5CjDhn8F3qKon8dqECtUTqx/dyAAAAEgAAAAEwRQIhALoxDCrATVeljlFYNELSbt5ziMSYu9yNq2BqXIXjE+SjAiBQCYZc/2ZjQsQgTWbw02oBvqUM4cNq4C5lsD9rhO32wwAAAGcDQ1pSAiP8cFdCFPZYE/4zbYcKxH4Uf64AAAASAAAAATBFAiEA12lTj66IoWgM0C8LlHsTBpQctntsPBsCAm7o0D9ajCUCIB/jsa3LiYCjx8YbBSxMiKUzlcXnZaMxFz1SLP5GA0AoAAAAZgNEQULasMMb80yJf7D+kNEuyUAcr1w27AAAAAAAAAABMEQCICfQYE8OSN4x2q94ii8Y3jewySQ/tGC6OvfwQ9maY8rpAiBRPH7vl9Nbkj+IEGFkjQfM37ntLI+jplCaMt2p256QeQAAAGcEREFDU6MRCOW6tUlFYNs0yVSSZYryOTV8AAAAEgAAAAEwRAIgbsRTBoCxfSj3yl1/mDAbgQwVzGFbLxc9Vuo5x9eeq64CIA3nc0LzIeqBr08QkU2+z6EeNMw6MXwb2URxqf9BiSl+AAAAaAREQUNY9rplm0GTkrci7WPU9SMoIuzv8mIAAAASAAAAATBFAiEAxp3bU8srEUMy9lf9t/Mj6lZYllsPA33VeFIJHo+7mI4CIG3XUYAQ1+s/wYEVeYv8VaUhf7zdG0OT/TsHLFdqRo4OAAAAZgNEQURbMiUU/3JyUykmN9kFQwFgDCyB6AAAAAkAAAABMEQCID6ePR1oDAOUWVUtlsqkOOV0L9el4ulJ7NM9Q19ic38aAiBgIxRM/Z2Wg4aHloifDm8HG90+qG30zhp98QiWKKWqiQAAAGcEREFESfsvJvJm+ygFo4cjDyqgozG02W+6AAAAEgAAAAEwRAIgAedvWUpGjKx1GZMCJXB8w0hxF7mfq8F+84gUYIPIUaYCIF9rrINMvCgkbtUYuQd0V/BJmoH80yBk87kZzSNLSH3mAAAAZwNEQVgLS9xHh5GJcnRlLcFe9cE1yuYeYAAAABIAAAABMEUCIQCyYSBMlxkX317vk0FDBEAb0VacRmfLCX6h9TdvxTFahwIgcRQS/7I8ylZWZWK50B2Fe/r4T5e6EaqedQRHbHVNJBYAAABnBERBRkn8l5CHMFqCbCsqAFbPq6UKrT5kOQAAABIAAAABMEQCIGaNvN4QBhZ5nwt6CwKH57qzypovtLLyeRGJcoMLOs1FAiBN9kXTqzw5zRLyjzLcqBi10mW9nWZ5j4EDZVJnxsNFZQAAAGcDU0FJidJKa0zLG2+qJiX+VivdmiMmA1kAAAASAAAAATBFAiEAuXwtNYO1Pb2gsZRjoM+XGZ3RyoSP19g7ZnGp6f900OwCIAyRuKUHf+mCcG/umd3L2qruiNwD/8eFfA7ZlxakjDGjAAAAZwNEQUlrF1R06JCUxE2pi5VO7erElScdDwAAABIAAAABMEUCIQCzqpeWMyhOsPVUWQmTM6uSzwb91Y3JDpwHAADI6WiGTAIgexDsfWYJ9R3aU9CDpuFloKvzp34TJQ5vJgdygJtJr/UAAABnBERBTEMH2eSepAIZS/SKgnba+xbk7WMzFwAAAAgAAAABMEQCIHfuwEgiBLR3bjPl8ksc2dYOApey9UDcqShziRFdx9VUAiBDOQalMu10a2I+LGKFih/qphg/GGbhUaaQ1lGGStLAtgAAAGcDREFOm3B0DnCKCDxv8431IpcCD136pe4AAAAKAAAAATBFAiEAy+IWlXIFXpsYnZx8z6qlHSOVeRH2CkfU9yGCvuKQ8hQCIDdOKnW+qDW+CRdEwzpOeuOCEjKmu/CosIJIa9LzZcTvAAAAZwNEQU+7m8JE15gSP954P8wcctO7jBiUEwAAABAAAAABMEUCIQDFIXstf7Bk42vmvhJol5TKcMOdtaVcR2kMYwRnCe7HBQIgYSPJ5L9E5WY2arnAVR6x3ZAdHDM12kmA0Rk1k38yj3cAAABnA0RBTw9RuxARlyen5eo1OAdPs0H1awmtAAAAEgAAAAEwRQIhAPoNe/Pi+wKqwotyIOIsKpF1C3JhI/6EicQoR2+gcHUlAiBVQhiTRtxxWhGG5e0KPXcFvx1ChOnqD/436BeVhd6qLgAAAGgFREFPZmnYK7kkoXB5UJA+LAphmCQCTiVM0QAAABIAAAABMEQCIDErSv/D1t85/vz69khLaRe5809h3YY4ga3YiVF8Im1wAiAgM20SecWkykjDN8rL6ryxB1Xa7fGcnTq/veEU+Zi3dgAAAGgESEFVU/IFFRG5sSE5T6dbj31OdCQzevaHAAAAEgAAAAEwRQIhANFpQxJgmtWmaVGOskppDi1gMvsdLPCcbRBfko+aYWCzAiAvxjAnzVjlAL2V6SPAdMH1A53TfZWBgSms45j5szmAywAAAGYDR0VOVD/yJ/ZKoX6hMr+Yhsq121Xcrd8AAAASAAAAATBEAiBzxQajSwjTGwMRZd1rUlaCcqRETOT81PvEAIZQePq+qQIgZhg1C7RVaAgtAhFRt4SMLemOdXcp0j938i+/M3DZkWgAAABnBERBUFOTGQ286bm9SqVGJwqNHWWQW1/dKAAAABIAAAABMEQCIDOljg9JITo0Iatgy29DKuMBEsxoGSVBR5DeBN9a0ytiAiAx8meiCVgkrh1eWodKBJtVlgDCBH1bIZ+ioHQNJjPXKgAAAGgES1RPTp8oThM3qBX+d9L/SuRlRGRbIMX/AAAAEgAAAAEwRQIhAMAogDYuKAnUeL5EiXGDZk7We4C+EbpMhc5SwieuDI6ZAiAmLw4tzWaebW3wMCHuZUyKoQvIOijwEtRkAX+ufZvktAAAAGcDRFRBabFIOVzgAVwT42v/utY/Se+HTgMAAAASAAAAATBFAiEA08ucfDdJzHT+t7aqR3TeoYID+THrGVfWphBvgicVXXUCIBkJntcIUwINVem1V8ynqku1cKshUg7aC8bsLHxbz5+IAAAAZgNEVFh2XwwW0d3CeSlcGnwksIg/YtM/dQAAABIAAAABMEQCIDPa/NBk4Lpl7PIkrub+4a56u07XqgdTlH7HNeDsW8VSAiBzcEHsbQuNh4m9GB9usGxv1wGYwem63Ka86hdMAgkZfgAAAG0JREFUQUJyb2tlG18h7pju1I0pLo4tPtgrQKlyiiIAAAASAAAAATBFAiEAxDDuLhO5UdETLV1jbpAyh0ypFuNkAG151ek/oVeBQ0ACIHRppfobW8LlLDiu0B4oIJMJh7Vv/zVXGSH7SaCzUqWMAAAAbAhEQVRBQ29pbgzw7mN4ighJ/lKX80B/cB4SLMAjAAAAEgAAAAEwRQIhAMFfFz1zJF/e9IbFg8VXH65GiGwtmmqRRZ2+cPeWsjFvAiB5gyR6LSfQ2PPsqTsgJ026J+1+qvUozSfOwsV9zsc37wAAAGcERFRSQ8IEZODDc0htKzM1V26DohixYYpeAAAAEgAAAAEwRAIgBn/L7ksvv9PejgwrSMo9qeL18LG3gYmAMksCLzB2l8ICIF6NK6BBt9D+mMcWmIkklnSGhmk52A/TSudA7DecI7hGAAAAZgNEWFSNtUyladMBmiuhJtA8N8RLXvge9gAAAAgAAAABMEQCIDhHBapeNZpUEKf1lgPqqSFCHltvkMnDZrn2/2Rt1kYsAiBgv9DRfB3C+RkGaC0gj7ocO4a56JjQZd4EUBzhe5XZiQAAAGYDREFUgckVHeDIuvzTJaV+PbWl3xzr95wAAAASAAAAATBEAiAZl229kZ7FNd1l2kXOaSQKJtv/ndJhmKNMByvF07QJGQIgL3YNBceS+o73WckBY2We07qgcsIFaE6/M6EbKlwfNxEAAABoBERBVHiru7ZEe2j/1hQdp3wYx7WHbtbFqwAAABIAAAABMEUCIQDzfkhlJgfgJaL9IJVaM1STiAmjQmf7RlMPuIdvc8+cmAIgG50G9cV1Oe3vi0DIVkE0vGY2rJD7fIxq1WK1WVsNnG0AAABnA0RBVtgt8KvT9RQl6xXvdYD9pVcnh18UAAAAEgAAAAEwRQIhAKFCwkRabmWB0RqAhs0hLx/mQjhriPfl+EF6uyaBBoi8AiAsSWIYFRDOa5eyLeRukAMGoz0KDapoi77QS4vyJqsjfAAAAGcEREFXTlgMhSDe2gpEFSKurg+fel8pYpr6AAAAEgAAAAEwRAIgI3BC4zhKK3IKqs9T7MLPve8Ui3GfhQ+LzIy6pUVtJwgCIHwJ5s/RyEaHK4eazEFMmwrhBEDEwoFeR+yXjlSdavDTAAAAZgNEQ0E4b6pHA6NKf9sZvsLhT9QnyWOEFgAAABIAAAABMEQCIHI7kDzSXSmBZ8+V5g3Wys7Tl+ULH6My6i6YtmQNDo0pAiBGQUgQW3/0T9fEA8Y+ns0op1RCzN6g4ZdO+Uk+VzVOdwAAAGYDRENMOZoOb76z10yFNXQ59Miu2WeKXL8AAAADAAAAATBEAiAuAzR7U6LbYmUbtTD6e3nwzDXtu8BFgsC7WZS62D/B8AIgBzXrN1fHOu73ZEkVBQeTdZH8OiX58xxiH8tknDI43EQAAABlA0RSUGIdePLvL9k3v8ppbKuvmnefWbPtAAAAAgAAAAEwQwIfblvXzgLrdtsSiCanTHUd9VIrCKpJ26EwJBSzjMzYHQIgE8raC40RzzX64/BnJKNaV1gRASxloTtxe6yFhp8uRtwAAABnA0RERsxO+e6vZWrBoquIZ0PpjpfgkO04AAAAEgAAAAEwRQIhAICU3q9SNXc8m3hXmQspIdeb4FAbtOpXg0/TgD74f0QiAiBtAK7eVToAeZzNUr2gHb4iCTQRhxOxZSyUHNjznUySygAAAGcDREVBgKsUHzJMPW8rGLAw8cTpXU1lh3gAAAASAAAAATBFAiEAxUfMoe5J2TitISWWLMUwwFZ9QKLQZwCJzX3Uk9mc6G0CIASuHi5hxdNsILai0RG0qJ2jiNeU38kWGlbu8HZVM1YxAAAAZgNERVAaNJbBjVWL2cbI9gnhsSn2erCBYwAAABIAAAABMEQCIA/MPxOMeg1ru7KD4Eah52Vcs8O5rMMUG1r4l+FSUp7eAiBzIiBpLlY+VEBlLGx4CXHKez3iExRNcLalVTUh7ZS2UwAAAGcDREVCFRICycGOSVZW83IoH0k+t2mJYdUAAAASAAAAATBFAiEApO+1mRXthfRphPWhJmSLJRNiJ8FO91a4u3VZ2nIqUmUCIEP92PjVOi6cBpZxlkGDuITR2lKh+oGL3B8krVzOMq5wAAAAaAREQkVUm2i/riHfWlEJMaJizs9j9BM48mQAAAASAAAAATBFAiEA6P6/pEIBc4VKwRb92pSHa1FToLOlkfEd6HYSg1Ale1MCIBP9/gnhrxcTyHXEQCL1n5kunffiz0W8unASKTJGd71mAAAAZwNERUMw8nHJ6G0rfQCmN2zZahz71fC5swAAABIAAAABMEUCIQDsWpBZ1Jmwd42R81VUKBAUBshZEvs/o4xkyrue5XNpnQIgBOmrEbQ5l88W6fgg1NywhZOP8XY27BRWZkjdD8/xxMEAAABnAyRER+4GqBppV1DnGmYrUQZvLHTPRHigAAAAEgAAAAEwRQIhAIxEBhwpBGktYfJpl+a7IJhI6Pz58ejPk+XgvZvqTfHGAiAP7sVJNYav1+cu+cSFQvgTo4TaVORM+zlDwv38SFC9kQAAAGcETUFOQQ9dL7Kft9PP7kRKIAKY9GiQjMlCAAAAEgAAAAEwRAIgFeOD/j591h1bW7gBuOKI7jD+IBYRZ+pYdkZGOzrhGZMCIDxGbEcUNOeZkZawgY+U4hJKVXNkOI2O4Z6s3KmtnClMAAAAZwNESVDHGdAQtj5bvywFUYcs1TFu0mrNgwAAABIAAAABMEUCIQDfMh024ozflQoiSZpS2Ot0MceS/lLoptm16NT9h0A4dwIgWQHpo3HrnpXtz61BBmm7+oMPtY/jTSv/+qwjVgo2/2sAAABnBERFRk/kgfIxHHdFZNUX0BXmeMJzaiXd0wAAABIAAAABMEQCIHvmruQvKkCd7FPa9yuTiYbxmBEhqCQyKMPwfHPtwzzYAiBLdIOy8GFBfA/9jc6XHsXA6l0uEMi6K4q2J/qQXYaHkwAAAGcEREZJT+47m1MfTFZMcOFLezu31RbzNRP/AAAAEgAAAAEwRAIgJkINdfSbKzs9STkhu+yUiOVEAcx2DY5zSOJ+1gNrlPwCIBxuncXrW11sjd4lBqNJcTLgoCzTc6qWcTdiSW7P1J7qAAAAaAVERUZJNfpt4ml9WeiO1/xN/loz2sQ1ZepBAAAAEgAAAAEwRAIgMwS9qqQOWcF/Yqfzk4v0//xPcQpB081+eD/zzqUUa+YCIAKJtxsTkLEHF7hHGhpYgSslnTkf/4ZRY5IQ3IiRVGCUAAAAaAREVVNEW8JfZJ/E4mBp3fTPQBD59wbCODEAAAASAAAAATBFAiEA664vsguEpHjZBpap73mqXalD+lcUyW9xOBWgRs1RaNkCIG23C41fiIc8pC5pdQn69aOyv/2S+AduBICEqdIlBhHZAAAAZgNERkQgw28GKjGGW+2KWx5RLZoaIKozOgAAABIAAAABMEQCIA3Y/h6G58kA2lrAw3TZw9ghd7nOiBG27CdFPoTAe2o6AiAl1fMSFlK4Qfw6NzsPVCBIaMJc7argxikWxVbwhoH8lQAAAGcEREZJToT0K8fKs5Mr3xx3uwhSi/8gpEGAAAAABgAAAAEwRAIgGtuP0mQq8YqA3fSjLfdVx5Pc1MJCNZrglvgNAoWdoU4CIFOVo/IivrdEZitoBkXIdePxqJqONzxkK9aJi9VX278VAAAAZgNGSU4FT3a+7WCrbb6yNQIXjFLWxd6+QAAAABIAAAABMEQCIGV415Lc3cgijKpz7X7pItkf9wNtDyBqYGuW7j+tjZ25AiAnrhqJhmzp1IompbmBH0zoA8gcGv/jZjWgmrzySLYJ/AAAAGcDUElFYHx5TNp377IfiEi3kQ7PJ0Ua6EIAAAASAAAAATBFAiEA6i9SxZys6qSQKgdfT9n7vl90YF/MGCZb5G+uczO2y2ICIFoX6+QH7rovKRo8iT2TACH8VrMJkBl6IFCCd654T5bGAAAAZwNEUEkUlMofEdSHwrvkVD6QCArrpLo8KwAAABIAAAABMEUCIQDdXHx5WLmzdzA7gW0Y5xsvTZcSXBtPTKaK46VVTfiRkwIgQ7vzwBUgriQk/eMSpPqGFYVrqrwO9XWUeatBpQtKWKcAAABnA0RGQxsqdtp30Dt/whGJ2YOPVb2EkBSvAAAACAAAAAEwRQIhAPmZNaT6v7vQu3iHSPfPdpr+w0MrmXKEmZ2XRQZKOTA5AiAEthBmCB1mf36K6vmrTypMidJS3hELMOvCj6TzRmjIoAAAAGkFREVHRU4SbBIfmeHiEd8uX43i2W+jZkfIVQAAABIAAAABMEUCIQDNJMm2c92xi0Z18tpPbx52TMtfvbV4ktg2X0gxojk7cgIgfj3lLdEWv6Wti8DvTUPUGtMoc7mf044utAoxkjhupicAAABnBERHVkMm5DdZVRMz5X8HO7B3L1AympV7MAAAABIAAAABMEQCIGKhUZXikYfbq2Mrp6BcqwQQaE2vTxgLS8f6iBJ+CWBBAiAhpjRqi8sdwaqMz8nrjENsg2v2eAEdUtZFWOKVnyE/dgAAAGgEREVHT4jvJ+aRCLJjP44cGEzDeUCgdcwCAAAAEgAAAAEwRQIhAJcCo5SJtlRLIMs74Px/FUprE7TI+i+8+hl8P0T/PLkEAiAfmg8JAXXCn1RNJiMy/j94YiFqp1/T87jTkNlGiXx3HAAAAGYDRFRU+ffCnP3xn88fKqa4SqNnvPG9FnYAAAASAAAAATBEAiEAtFBVOq1/v306WKozNAo/tKR4FSc1K71DaPNAToJQEWsCHyOzcwlgCc+esQGQyrPp1AoVzwN/PZXIA1wVmlnqSScAAABoBERFVE+rk99hf1Hh5BW1tPgRHxIta0jlXAAAABIAAAABMEUCIQDvrNzfUtGJUrbt/bWCQYEZhdPSGBbtkDJv0aZOxMxs0QIgMk5sgsmn+7og1xpETgkCffNWUEjiUW3YSkgKixvYuKYAAABoBURFTFRB3h4K5hAbRlIM9m/cCxBZxcw9EGwAAAAIAAAAATBEAiAoBCLmB4TiR4JRNcsyoNdbcp0VQe1gzNisjeADJ3mTSwIgZOLPhYRc+ThqbPKK6d6n5qyIe1sTcIPYphuFsI6O4UMAAABmA0ROWOQ+IEHcN4bhZpYe2UhKVTkDPRD7AAAAEgAAAAEwRAIgRlLeUgz/xTEtFWDHljuHrA7qITqKHMDFmoG4rXU3PB8CIAHe/b+1P4T9pc1HunWaL2Tg+ZcqIAOTWlS7mf3fj39sAAAAaARERU5UNZe/1TOpnJqgg1h7B0Q05h6wolgAAAAIAAAAATBFAiEAskWII+WSrunums1oOu/hM/tJtzgCxdHG9SBbDnr7zC0CIAX93I6M99Yq9iLvamu18EJ1mJvrbdm1R4Max4wWkf1tAAAAZwNEQ04I0ysNpj4sO8+AGcnF2EnXqdeR5gAAAAAAAAABMEUCIQDsYwCP43Ht8IxzDCpQD9ZbmHGEkdYFYcMkRpV4Qwh4ZQIgErZG/VXqn6DPvvSlQHERiys8O5/OZt7+Bd9dIhQymE4AAABoBERFUE+Jy+rF6KE/DrtMdPrfxpvoGlARBgAAABIAAAABMEUCIQCZ1CIlD4EF9bnEDjulqNf9ZYCB6relmBte+1o6WM5gIgIgdM9hqpQTJ9R1CGNI62bezQpmzKAXBoDLomkLTv5YdD4AAABmA0REWDqIBlL0e/qncZCMB92Gc6eH2u06AAAAEgAAAAEwRAIgHmN1nyGvnf8H1r+4I9r+FJ2IIt994vM/oVbQipxceTcCIA00QS1J6Aw/HnCIFJXyOf2q+maUMZ8QZ4+M01SnYJWcAAAAZwREU0dOU3qQlbeFF1l7XyBY7c1uGXgJWQkAAAAEAAAAATBEAiABqp8U3X7V1Oirlp0LSYgQ14By/y7oUk+1DG/GWhXF9wIgSijZL7RwWXouVO13NL437hhHvEEx0P1GZKbqkMcFM9oAAABmA0RUSFrclh1qw/cGLS6kX++42BZ9RLGQAAAAEgAAAAEwRAIgGayQQ5tGtE+uZQfusXBFYsaAv41uvCgg54qFRuzpLyACIByWAvD3+EI/F64dVyUqxE5EBrMaigxAAXM+wsnwZoYdAAAAZwRERVVTO2Lzgg4LA1zErWAt7ObXlrwyUyUAAAASAAAAATBEAiB3qVSbtSk8sTxdwowoGZMb0bM4QALNkHvn6Rn+q6om0QIgQ+cgrDLi1ve4QPv6uiHzrnXur38GaW8A1zq9a9sNVeIAAABmA0RFVlyvRUupLm8skp3xRmfuNg7Z/VsmAAAAEgAAAAEwRAIgcSsqbk+1jSMMZfPvZiBEqW/C3xBjuJ8+3Z/Em+uueEoCIGIXImfo+feHZsqp66pXY5Zs7pgntZoEdmRSEHiqSPhPAAAAawdEZXZjb24y3ZTenP4GNXcFGl63Rl0IMX2ICLYAAAAAAAAAATBFAiEAvq0lT2lxCBH+Xtxlt4AW3pN0jTfj5fpAEuyL1wJBYCQCIAXepkNCZqMDfXpyzIOb9hggzf25r16oeffA4j0MXN9sAAAAZwNERVcg6UhneU26Aw7ih/FAbhANA8hM0wAAABIAAAABMEUCIQC/QxcgzdRDcraIH7SusWrVDc2hbr/UcjYCvPwWuMM1wgIgCNRF/pFhMxCa2HHk3EO87TI3qDfDAX+0WwLbiWftbmYAAABnA0RFWEl7rvKUwRpfD1vqPyrbMHPbRItWAAAAEgAAAAEwRQIhAJd2+CqxVzxScFI5e1ttNuyRSbtzr7avsamBWD7oyVNNAiAfM+gT2XDisH/w8M8RJrlWHNGvsnNW4ZPgarTsFAKdhAAAAGcEREVYQXJUQFEst7eL9WszTlDjFwdBgjHLAAAAEgAAAAEwRAIgdick7hjil+zcyrcNfh5itR0DMlgOp1G0QWvXjcbM8VsCIAtcv/I97J57sGNaM+fVq79wT6VzyUDzUhrBcf7Irb5HAAAAaARERVhF3k7oBXeFp+joANtY+XhIRaXCy9YAAAASAAAAATBFAiEA7MhJfNTv9GORCAHVCTbiSL6qFR3nctXtv6R5m1CeWsMCIF86pE3vprDNPx4X6pINJDm3rwpIjB6++doXle/yiUsGAAAAZwNEWFJlzKJ5EIcnaFbpmxS8AfRmTDVj3QAAABIAAAABMEUCIQCT2i/BnWmxoaNiW5xq/RrRSn5MpYK/xLIOM4w6bfy22wIgJ9dUODrVaEbJlPe0ixUs3Gf4ObtRqTyhhfIZZTIZTfEAAABnA0RYR0Vx86OG0b0Y4l1w0RfnBn+gvZ0IAAAAEgAAAAEwRQIhALxom1URrb5LjwfsvI5p0BmNEqgyX5y6yGkWRTBhas70AiABToqHfAqOw8mH9hkxCjJ1Y13OD/kuwXD07u5snLj5KwAAAGcEREVYVCbOJRSIMsBPPX8m8yR4qf5VGXFmAAAAEgAAAAEwRAIgSDlICL22a1giAYsDijwTXnc7InJDRxy7bv8SDDzNZMwCIHGsIUgyrdqZ9Kr4TQEREZjWxmMxZsMjVgl71brDmGsmAAAAaQVidWlkbHsSP1NCGxv4UzM5v73HyYqpQWPbAAAAEgAAAAEwRQIhAKzcgX32rNBO396vR48/FBGPKMsBMZo99DIlFa5uMRQQAiA2RJAHBAmaOFVMmzqo2j1K0LpD7LHA2QSbvQZsZFQR8AAAAGUCREZDGtL/apw2WAXrrUfuAhFI1vfb4AAAABIAAAABMEQCICINE6yRZLdtyw/gfxMtb07qDN6NMygnjc4IogFo1nEWAiAZfp8ZKMNcBhRXuSku1n3DwX23N0LD5wKvEOOLhK3jowAAAGgEVVNEeOsmlzKrdab9YepgsG/plM0yqDVJAAAAEgAAAAEwRQIhALqevj/LHrny2t5Un56Qh84mAfprl5AawVyJi/BZnFAyAiBhHZuQglud5e6r21MJuvYdxxH9M+sCgbbfFI18OYDQKwAAAGcDREZWFOliv4DB+VgvQyGOVkQ+wTsBLQMAAAASAAAAATBFAiEApTfLKkgX2nGkIm09NWH8yZcioEhpYhYhLIDECm+kNxoCIEbd5hd/zYwDVJrCCVhSTKvHVduDeERZ0+mzaek45nVvAAAAZgNER1hPOv7E5aPypqGkEd7319/lDuBXvwAAAAkAAAABMEQCIAy2T34SyOnvNdHKV3FHCWo8KpdSSfnqHwZqdjlnMgyzAiBdKJHJv+RCnQvKCLVGDRR6NPwckss5ETQSM7zJWll6FgAAAGgEREdYMVW5oRwug1G0/8exFWEUi/rJl3hVAAAACQAAAAEwRQIhAKc+/1cB7aet3AEZ6x5epriBpVEy5Rxbzsnq5Ul+3f2DAiAg8+4cy8ZRFhKGvpgha6KfsksnaniK8hrYVMJCrxANJQAAAGYDREhUyhIHZH/4FAOVMNfTXfDh3S6R+oQAAAASAAAAATBEAiBUl53oL7ucndaA3SZQ1KsBPBqxrUhQ5vWEtB+1uKEviQIgYFcrCrX3YIxLF3ZoyC+4V0G62SZ7HnMAvdKzqUMUPtAAAABmA0RJQYTKi8eZcnLHz7TQzT1VzZQrPJQZAAAAEgAAAAEwRAIgCBSwWTxP8IePjPwjmRnjFRe27tVQkebpMfTF0WHJEr4CIG1aiHg42ainpf6CpFjhuCK7vS/1ZmoH8IfTgG8rL6thAAAAZgNDRVT2YMoeIo574fqLT1WDFF4xFH+1dwAAABIAAAABMEQCIACahanqMc00FCGWZzJPEoz4m9l8l7Z6fzAlmy3H4IfwAiBjltf4jQBf3VX2VGst/SCqcr0noaMSqk8GeFiOjyWAHAAAAGcERElHR3mNG+hBqConNyDOMcgixhpnpgHDAAAACQAAAAEwRAIgX7YmLutEMsqMYgeSkOXH+Aj93Rx1gDcBIZi3XRonA5UCIEeK/xDnASyExrVjwX6HTTK0T7aNGRf5IZ6o8u9SZC5AAAAAaARER0NMY7i31KPv0HNcS/+9lbMypV5OuFEAAAASAAAAATBFAiEAkhJtZQWcZyB9tpFKIiVdloXZ0D58+lNRIZjd4XesA8YCICgTbqv1MkRBHTCLaLgt3lpkE3uEpFtrzjercOulPAbVAAAAZwRER1BU9s/lPW/rruoFH0AP9fwU8Mu9rKEAAAASAAAAATBEAiATf/F7xSsUGBUFlY9JVBB4bumPHE3vC99hGifbtnUHzAIgaharAmgDRKstqnPgROIRz8OJKPbyZwTeCnx2FJLKfXgAAABnBERBWFRhcl89tABK/gFHRbIdqx4Wd8wyiwAAABIAAAABMEQCICeKPlaiFAX3mFuFE1/DKoV8iJm8tLV5giyl4yxC5Z3sAiBdvje1DHe1VjfsugjC79v7nfC5SrXbVkORvSIfXA65agAAAGYDRFBQAbPsSq4bhylSm+tJZfJ9AIeIsOsAAAASAAAAATBEAiA+DcGKYxXY5p3ies8lfOql3cmbBV2ZOCcPMB0s+ct8FgIgQoPYcrKZjVDzcZ2hGVSkcH/8IaPkoyH48hBn4tifhd4AAABnBERaQVKcsvJqI7jYmXPwjJV8TXzfdc00HAAAAAYAAAABMEQCIAfLA6rOydrWxtdSDqzTszD0V0aIhp/hYDWmNqOyLNYoAiBOs9hpPKP6f4je/V32NnShZwQE+tvG1MOahffdHu5NGQAAAGYDRFJDoVDbmx+mW0R5nU3ZSdkiwKM+5gYAAAAAAAAAATBEAiAkMA7z/lmC4HlNpqGZDJ8/fyjXwz284RWR5AnY+CC/UAIgCOSCdyw9XCOEmniiDOxEqUzQidSIOGx9/PjU6IpCsQcAAABmA1hEQrnu/EsNRypEvpOXAlTfT0AWVp0nAAAABwAAAAEwRAIgJ+g55MycBjtxxklwMc7/CdBAM195rZvyBEtDKXQJWNYCIBqKRCUKlqipGGvHSFue4G1Wn1Pqx0tXKrSgg+TyLn32AAAAZwNEVHiC/e37djVEGqWpJ5HQAfpziNqAJQAAABIAAAABMEUCIQCKqsK021i5Mn6YyRQapMYEk/auqvZ7XkhkNKVB9g6GEAIgKX45AsLoDNCHcm84rhTp4OFI2KCr/vzJ1aqxqb/Fco8AAABnBERHVFjGZggQc+jf+NPRwikqKa4aIVPsCQAAABIAAAABMEQCIDhfui62rvBQjh8U3hi/2d2MruOjSlQDlYaUsn/xwn3/AiB6v5V0desDY26+B+hq2GQTMVdGLZFipuDgypl49lw9GQAAAGgEREdUWByDUBR48TIJdwRwCEltrL1guxXvAAAAEgAAAAEwRQIhAKQbLIENOh1oAMS5FssHLsTD73FewRDVhtPyXc8Lw9hxAiAk/I30L1K/U5y4ZxmH1cE0FEGuvylQmBPAtpnRfNKUGAAAAGYDREdE4LeSfEryN2XLUTFKDgUhqWRfDioAAAAJAAAAATBEAiAQZstxCPZlCkbDfEtMz3wVjx4Devuj8lQybiHk86puOAIgSgC+hKVYNFkTJi5fhXb9y4YjVfHl7n2Rf6Lvq0n5alYAAABnA0RTVGjVNEHA4lP3bFAOVRveo9ECIGyaAAAAEgAAAAEwRQIhAO92KwS+OS2d2lgMt6cetx2m/pvvJSJVtSg3IUWYU3rUAiBK/NfOmhMAUCdyncj4YMS/r1ik4Mj1ijGANh/dMtSpqAAAAGgERFNDUAPj8MJZZfE9u8WCRnOMGD4nsmpWAAAAEgAAAAEwRQIhAJti6qdy7z1VckjhVy6lVvEkTG3Ey2pXM9nR9kKXgfQpAiAgEvjWStRK4CumHVVOqbGYQImUbaGfdxLn5ZmIcD2sUgAAAGcDREND/6k6rPSSl9UeIRgXRSg5BS/fuWEAAAASAAAAATBFAiEAk6WukLsn1zJJx6yx4kZ2Fwle7/9O4yH5tJdXD8Pc5t0CIGIutP55PDmvOZWeHcQyHfEZYso3Ian4VqWjlfKm1jsEAAAAZwNETlQKvaznDTeQI1r0SMiFR2A7lFYE6gAAABIAAAABMEUCIQDB4QlGl22mwKpoR5olMg4+v6ApusnoMLDTXPyS20y2TAIgUQAvHKP2AS7f5BepVBGFvJdwNE8G1UwQuWlGjVg06UEAAABpBURJU1RYS0cB8/gn4TMfsi/44r6sJLF+sFUAAAASAAAAATBFAiEAmafFkm96ln3xFwpV4TuU7yyrBAdMbAb2bLiUGrL2ChkCIEsJTK5u+zRXlaAGamb04trh5jtr4H08RZ/xIwW0FMeWAAAAZwRESVZYE/EcmQWgjKduPoU75j1PCUQybHIAAAASAAAAATBEAiAhcNjo6RStbrLm+2Gdv/bo01j7lShR9xZnc//tqSq/EAIgaHkhuho7esgY5SaJQKcmi1Bycvro40mv8sIqbfmC0woAAABmA0RNVCzL/zoELGhxbtKiywxUSp8dGTXhAAAACAAAAAEwRAIgGyZn8udV61hwyYUCfs1jzsIecYH/TBmw/X24kad8SQQCID4w5ZZcjZ0w5vIdnw3nxHJ6vEsJx8g4+xJKZWkGFX5+AAAAZgNETUftkYeZGbcbtpBfI68KaNIx7Ph7FAAAABIAAAABMEQCIBWbV9kuNY1xRy0/EAfX60qurjkdh+F+Ba6tLAESeH4hAiBQfAL42y3grtYsZEwI8nidp7o/cP3EaVgBKGfQa8LjmQAAAGcDRE5BgrDlBHjur945LUXRJZ7RBxtv2oEAAAASAAAAATBFAiEAiiFrqkB8UmjkY3hF7ZCyIiJW4m2JrvYK+9kdJ+ANb1ICID4zeBAESDKwl5BRtnkQhm+ZHmttCZdxJExQjtN8ioGZAAAAZwRET0NL5dragKpkd+hdCXR/KEL3mT0N9xwAAAASAAAAATBEAiBWXC7T30vTC2yBWgE3OSmSNjw5pjC05ntq2NrdVUszxgIgBBRIjqjHcqCyZAGwHLd0T5jO/zyqC5m8b3fVQbO3ye0AAABnBERPRE9D38QVnYbzo3paSz1FgLiIrX1N3QAAABIAAAABMEQCIDK+Z30f9kTrJo2XhfZ8xgRUi+jJsBicqnb/WsWhZXENAiB92dC3xIA2RWR92sPWeIF0p9nbXSb5ETRS5ezyVKfhfwAAAGwIRE9HRUJFQVLx0ylS4vuxqR5iCw/X+8ioh5pH8wAAABIAAAABMEUCIQDlLB56KILAsG4bRjq3uqbmRFnbAH7RazwdkENI9luCJgIgNTrxlGMtRNfzR35nlEDwV3LzrKZC18kUYhCKK616J+0AAABrCERPR0VCVUxMeqazP7fzld28p7ejMmSjx5n6Ym8AAAASAAAAATBEAiBPAm+ivdeEFTbfQw4GPr4n3ELhpVL+lB6n6pa6hkheqwIgAS9gDkLVEqj2JjIJWU5d9VcY0gG08DqWqZy77EQz4rEAAABnBEVMT052HTjl3fbM9s98VXWdUhB1C11g8wAAABIAAAABMEQCIEOY1P/bms/7yqHGWaBKk5LqM0MBUkL5kZM+y8fBMGXgAiAjnTZk/8bWjQWgUqiPFwnHSdsVb4sTKwJTrFOR+Qt8DAAAAGYDREdUi5w1x5r1MZxw3Zo+OFDzaIIu1k4AAAASAAAAATBEAiBNbJE2jZzLPnCAmi2ol4pJT3XizEXqoIMj8ZQufdK9SgIgIsAjkFmn5h+7Wp0Q+M6cmdO/NqBRn8dOp5YbKa2wyPkAAABoBERPTEGGU3c2cFRRbhcBTM3tHn2BTtyc5AAAABIAAAABMEUCIQCkcTW1ou8doZ0Gqr74gaRCUttudO8DhSiyKi53ahQgvgIgGxEgHYQcs39BlhbgOagki9fapDkEkqtQ/DTTj0V8TtgAAABnA0RSVJr08mlBZ3xwbP7PbTN5/wG7hdWrAAAACAAAAAEwRQIhAPGTVIK0ViiTFNJAL9zQEJ7mN/8l8jYUDGDHIaCsaP8vAiBKGkq8/MPQtwDtY/Bj1wASbSSqc66FbCEpv1TXnYcD5wAAAGgFRE9OVVTA+b1fpWmLZQX2Q5AP+lFepd9UqQAAABIAAAABMEQCIEbkph2WMS+d9Cwg3n1wTc73PEUC8ZSTNxMp5VDmN44LAiAJtBN2dnqx5wgkvx3eDrzAdCxnmULFD3aE/fUTekYdiQAAAGcDRE9SkGs/i3hFhAGI6rU8P1rTSKeHdS8AAAAPAAAAATBFAiEAhUQhQJmEmFOC15cUZKIHam52y0I2yAbXTWYMf68yF6kCIH/BH7Lv730AnUOqTUxYy/ZRp9qDf1NVp1x96bfJ7oG9AAAAZwNET1MKkTvq2A8yHnrDUoXuENnZImWctwAAABIAAAABMEUCIQCv86Dzzz2tInOLEwAy9PSZYHkg2iWaoOq/GcnmMpTzZQIgdcUdDHKNWGGG7THduWGo5yS/EmxQp50ETqx1cMcwtvEAAABnA0RPVqwyEaUCVBSvKGb/CcI/wYvJfnmxAAAAEgAAAAEwRQIhAOaDoUB+oEEKh+4GOtv6bj/7FLcfKrLqhBp6tfnTlEFsAiB8Ju97s37niyBPS91h+6eioX0zLb6NsEwZFWcPskhQLwAAAGYDRE9XdpdMe3ncimoQn9cf18655A7/U4IAAAASAAAAATBEAiBBi2mu4GSaIeEoIRCkn8n/uvDxnZhCQGdl299fUs3KGwIgb2GvTFbAtc4+m7BzuWuVsDD59w6YHJ7ak1bFxLlLPPoAAABmA0RSQ7eLMyBJOk76oQKBMMW6JvC2CF74AAAAEgAAAAEwRAIgBRJ+jVbqdaGBgr9fBwGPZkUmQLwiVaeWwMqICNwUwswCIAth5uLXo05BY657Uu3cLH/+vy0+pJ10JDPX5JEAvc3eAAAAZwREUkdOQZxNtLniXW2yrZaRzLgyyNn9oF4AAAASAAAAATBEAiBfSac5k8sBZmbh9ORehSF1+H/KEyi4aB9NAVEhgJreqQIgPrLi1e5S4IYsAE7okch89wMA5+4Z53lnI2rcdo9FZdoAAABnA0RHU2rtv43/MUNyIN81GVC6KjNiFo0bAAAACAAAAAEwRQIhANhaZhwLGDhrGc4READP5jR6SH4WFMm2CVFd3Ln0H24PAiBhS8q2akHQIWeL7VEcydupp6UJ4QVoe16j/VzURmMEKwAAAGcDRFZDGUUkNV8mr2Y0aNSZbyB6kYxz4BMAAAAIAAAAATBFAiEAson1gVl4P9KbdEsvwp+yS5WUiVq+2gbgKbI3zsQ6heECIGhipqFn8ISUDeDhj/FpPDeYgkOEGmp4IuFGEJ1H7UvcAAAAaAVEUkVBTYL03tnOybV1D7/1whha7jWvwWWHAAAABgAAAAEwRAIgNyua3xrvvLZ4tL3FVP+cRwje6746oqsmJSi9ukFc8p0CIEPD7leQJTORLsToUZR8dZwbWMXouJCLDlVb7W4ZlU+0AAAAZwNEUkMfSpVnwfmKjJ1/Amgn8Jm0Gi5U1gAAAAYAAAABMEUCIQD+G7GNWZ8QbXW8kYk1IpvjvDlK3yuCz68Gb7Up8CJh5wIgcpqD+huusPXX+P4OTAK5Eu7uXGQ92tCLkMAH9GS6iv4AAABrCERSR05CRUFSIj+1wUwAz7cM9Wu2PC7vLXT+GngAAAASAAAAATBEAiBMxKBay77mKxpcBM/IZ6KOzxvtotD+325Faw8yz36PSAIgDNh6DCs//VQPnMtVRllS3mKihNdtpQVmcoT9SLonzSkAAABsCERSR05CVUxMMzXxavkAi/0y8e5sK+XU+E+gudoAAAASAAAAATBFAiEA4tLRHKbVm0tGWP9YwgtrdW1AswyRmqvUaW8/t1WTD+QCICcefSrLf8iYb13twuql0wo8QSmFgEBhtdwDfwmxStGcAAAAZgNEUlAnmdkMbUTLmqX7w3cXfxbDPgVrggAAAAAAAAABMEQCIBm3+TKf26tFdt7Q8N7Acoc2kaEAWR6qaqxuHhyuBZYZAiBMNF3dhNBbFyPeNeL/wBgxwJkXnYmFcdl10FBV7gQTVwAAAGcERFJWSGLUwEZEMU81houkxlzCendoHeepAAAAEgAAAAEwRAIgehZBAEWDewrRJm4GsYWzlSQ30w0rp7iemckjkc/Q3CwCIEoKSVN7PCyzIqo1y8Yso6X7oqvwTGi7oBUnZm+FmJl3AAAAaAREUk9QRnK61ScQdHHLUGeoh/RlbVhaijEAAAASAAAAATBFAiEA0kpQRMaT0m9CswuJ6yFENyBFbqsipLAexPqwFXUBUQcCIG1Gd/cSLvRwRlmWg04ecUo1ClIY7LBcdb3MftAigDYyAAAAZwREUk9QPHUiZVX8SWFo1IuI34O5XxZ3HzcAAAAAAAAAATBEAiAumClJm3VhBohoNXnzz4DFNYbThGki6BhNvIXn8B25FQIgEdeUcrzZq7CdM11K1utD0rWmwGTHBl19yguTuE7vAcgAAABoBERSUFXjDgLwSZV+KlkHWJ4GumRvssMhugAAAAgAAAABMEUCIQDxcqCLSRK0WgU1CGtolqp+jk8vdddIkSDgF6kxzcqykQIgatChgzPzYKgmQ8dEHREfPCgCrL6Xe2z3Uz2tjB1Yw5oAAABnBERTTEE6/8ymTCpvTjtr2cZM0slp79HsvgAAABIAAAABMEQCIDi0VB1V1i+P2kQ2ZC2dxKyTc+OrliHrqjiWalOsxZbDAiAvKS+/Hn+G1t621lQyveUtB1zch8fOTItE5j32dhN8EAAAAGcDRFRS0jS/JBCgAJ35w8Y7YQwJc48YzNcAAAAIAAAAATBFAiEAsPObbe1HH4FKMQTHuRXHZvzN/2BuKMzuKQ0kAUQTRGgCIHzJnYl2T8t9cIyowSgJeGRrixDZQgNJ8kR+ddAxxnHYAAAAZwMyREOfwFgyIOtE+u6eLcHmPzkgTd2QkAAAABIAAAABMEUCIQDJ+vlat0wcQxLa9LIUWxhymC+dOtrU3iwjfCYaWSJTXgIgCcDChkQkqyBJpC4IEU4TwkMWHivjoTL6VvmNwe6GCJoAAABnBERVQkntf+p4w5PPexexUqjC0M2XrDF5CwAAABIAAAABMEQCIFta8yCPujJ0kk9Ux51jQe7Tl1H1CHsT9FUyBaw3TiS/AiBSE5M5n511EA5WmYx+/9i5hfsMrt3cdk2HzCn1wQTHuQAAAGoGRFVDQVRPoRfqHAyFzvZI3ytvQOULtUdcIo0AAAASAAAAATBFAiEA7dpRd0y+E9ar4GfcFxIStgSneDJDOJm9av+09q9wxmoCIE5SqCgNik05LBVQ6LF7BQDUO2HcdQtfcDyTgosI6GmYAAAAZwRERElN++6hx15MRGXLL8zJxtav6YRVjiAAAAASAAAAATBEAiBJMftSfvoxKmAbo7oEw20sWNZslNiOxVmA6m3+dEuwiQIgKyn4np3sxP124eZqFHZGp0Jha/yVPC2qB2y6yG/ziRwAAABoBERVU0uUCi2xtwCLbHdtT6rKcp1tSkqlUQAAABIAAAABMEUCIQCwoZrMflQQpoESaJ0MEycavh6l0WoOz/2wXeLpn4xsRgIgYR0pn03pwYNbzfq/3jiXKUARq+k0Cx2gppoalp0b/gEAAABoBFZET0OCvVJr23GMbU3SKR7QE6UYbK4tygAAABIAAAABMEUCIQD68rrVAwFgA26FFgS14Qqxwg3dx+dt5APEJS7RyYBfiQIgfnqVRgNHNIgsVbPS8Ie3zyaTmX3qnvKwbgoByo4uUzcAAABlAkRYlz5SaRF202RTho2dhlcniNJwQakAAAASAAAAATBEAiAAw92MKhMK1CexbkaT5qd3jI/J2k23gQJ7PMMp5J6RSQIgcCYipPd68JfUdjrHtLySi3qPm755kEd27+MVaIiW0UwAAABnA0RYRKHWXo+26Htg/sy8WC9/l4BLclUhAAAAEgAAAAEwRQIhAO/pPh9VfkebLRScTJllSWmt4gcb7CQliva3V0sHOqknAiBu/5i+8vcL15kFOlvg9DzKtY9qIo+Gokx+i77hwjJ9jwAAAGcDRFNEvS8M0Dngv8+IkByYwL+sWrJ1ZuMAAAASAAAAATBFAiEAgwFxkZHBoHrIq3F+YOByRBaJ1yqeCEDIHy8dXYAJ5LMCIBTkNHdFkEL/9LWFE6GAqGguhTDTw+333gyWO7XM79RzAAAAaARlWFJEZGjnmoDA6rD5orV0yNW8N0r1lBQAAAASAAAAATBFAiEA7vyIdgwwN8VhlFFeL1RVmKfa2CGAhQ3I0fqGjBDpHEICIFxr8GdttW/cJRmMRz/Q/D5vHUbBjLFi9R2TDEl0Z13YAAAAaARlWFJERwL4lldzmHWdXsgRXCD5mnMXR4EAAAASAAAAATBFAiEAp9x/xp7JiKMNT4s2EO6EaxALTmPoMn6BuuAbzIiVFd4CIG3AqUS6um2KqMOu6kJPXM5x3x0K6Pjwykm/NEJhKKGPAAAAaAVFNFJPV85cYDx40EfvQwMulrW3hTJPdTpPAAAAAgAAAAEwRAIgNg3THFomFjou/IJL//aTmxrwtYUSN4/CKP1Each5wpMCICAbcWq+xB0jzCHObTX+33x0dlCF5G4HPiEa8Z+/DDYMAAAAaAVFQUdMRZlPDf/brgu/CbZS1vEaST/TP0K5AAAAEgAAAAEwRAIgVdHpGCG6DCAM2gDl30qxNeM/4MI96v51Hd+0MkJSaAUCIGKkMK1gYK62fcXiya8Z7dNUtcRWeKIy8wgA+XKrK/iNAAAAaQVFQVJUSJALREkjanuyayhmAd0U0r3npqxsAAAACAAAAAEwRQIhAOiMUCTXcogXv12hjsYEOywUZsertBeH8sSWwtDc+AixAiB9XCv76uIK7aJv3kQesLjb8tUbzHp4cdEOWKyXg3SfOgAAAGcERUFTWZE9it985phqjL/uWlRyXZ7qTwcpAAAAEgAAAAEwRAIgHW8ehI2tu2SYVBvnpru+/CdVXtdtLLefIb4x/UoX1GkCIGAgxXNg4FAk8PhCJxON7fK+mpicrdIhcQFGRFidfrndAAAAZgJFWh63VLg1XTGFp0KRCb3nXkc0NLJrAAAAEgAAAAEwRQIhAJQHbK7Puf4Re+P3rGWmblA6T2K1w/GO6KFwFEeHyzxWAiAsEhMqsMacMZdU2gSY9CqW5MsQEuGlcmZt8Dz0OQUi7AAAAGcDRUhU+fD8cWfDEd0vHiHpIE+H66kBL7IAAAAIAAAAATBFAiEAtnW5hRSHwuOjqQC5aKq8z7PCajDtirPjDGw8QI8l54MCIBT6+F3fMUGgisT9oG5B/W6kThsRAVrOErVH7nxFToymAAAAZwNFTVSVAb/EiJfc7q33MRPvY10v9+5LlwAAABIAAAABMEUCIQDJn7GV6gHmwMVtDzu8DIbI5RuJhtQvtOmESxNJwckgAwIgPdCeXpWjMVCZtQw6y54n0I8Z09LaWYAQxyUyoL4PPHQAAABoBGVCQ0ivw5eIxR8MH/e1Uxfz5wKZ5SH/9gAAAAgAAAABMEUCIQDOB3rftsnrBoo/FGUU5+ht3K4dGboAm2EuPHXSZy0Q/AIgastglpbPuUuhGiQsXWFF8HX+4uh7b2xwMpG72WuXHMIAAABnA0VCQzHz2dG+zgwDP/ePptpgpgSPPhPFAAAAEgAAAAEwRQIhAMZjT1rVm08S9wPoLWTMGFFVnFGbqAZTjSXHozsq5LmfAiAvE7kZOzF1YuFRloE3JP4gSrhJGP0JfX52H7tRQITmfAAAAGcEZUJUQ+t8IAJxcuXRQ/sDDVD5HOzi0UhdAAAACAAAAAEwRAIgLawIelCbJzjX4ML+lEeE5tp6LrI5OhLuQ+B20s6nI68CIETNP0JCjZnH5hQchU9KK7gZy9oi1d+L/xIrWHQCbya8AAAAZgNFS0+mqEDlC8qlDaAXuRoNhriy1BFW7gAAABIAAAABMEQCICXvC8++ZmhqyDdxVP5286xl8AFwX/YxlbZaDCQq674ZAiB+8W3tqPEhgcZZ8aWAs5s9vhSZcevhDQYIQ/XqUPq2UwAAAGYDRUNOpXiswMt4dXgbeICQP0WU0Tz6i5gAAAACAAAAATBEAiAvfon0Cr/jBrk9KN28rAEDAZeu50amaUSen7x6Kzoe4QIgBSzAoqZgEjtK/xv5vbJELa4g+OpB+WG3yn2JYaN+C0IAAABrB0VDT1JFQUywUvijPYuwaEFOreBq9pVRmfnwEAAAABIAAAABMEUCIQD6gKamWnJ8mK+3VJArs/9spkxQVCKQPP3LnOQPxJHqhgIgDPYerw2+lbsR9THAXD5ucqz4186pdfJkEoUfW7mTlCgAAABmA0VDUIhpsfm8iyRqTXIg+DTlbd/dglXnAAAAEgAAAAEwRAIgdHMQ63kY6U1InIbKwP5HOr4Qyt9oQKmgoVpJfpEevAACIBT2Kp/GoQbvz2gN6nS0ZY879EXYmEaFhX4dExX4Nhi9AAAAZwNFRE4Fhg1FPHl0y/RlCMBsuhTiEcYpzgAAABIAAAABMEUCIQDQ8Nexdw384tqEdHrN/CfLmMpOlvUJEN/R7Ehlw+wOOwIgEllpAoAwzMDUEr7GIihhqP3q6QBmDuu+19rNsl/CeQAAAABnA0VERwhxHTsCyHWPL7OrToAihBin+OOcAAAAAAAAAAEwRQIhAJmkTl/x1GhUGBuvs8Al8yRSdym1Cy25nGP0cIwPCxlrAiA8rbK8YlSnDFV/CmTiWtC6QL6GExw3glnr5icJyi2lfAAAAGoHJEVESVNPTu1YVp1RalvTdCfr1ZKmYZwMWBlTAAAACAAAAAEwRAIgPLFDNc7r6UcJ3T8gxO/BusJX4oY1Ku5tr+azZUae1xECIHVry2SGYEX8Y6jzB2c9Zz/K6Gz4rbnoJUWO6+ip6rS4AAAAZwNFRFUqIuXMoAo9YzCPo58pIC6xs57vUgAAABIAAAABMEUCIQDZ0NpPXOd8qFQeiX6mY8XsBD8SXrE4ODvIxNGowhHVwAIgPLbH2bgTAyZwf+weQOygrn4p00+HYJ1OFnhbhTdxRuQAAABnA0VLVLqxZd+UVaoPKu0fJWVSC5HdrbTIAAAACAAAAAEwRQIhAL1VIKNSf9x0tD4hqFgHAYHRm53uKBG5UIqmhoHsdQNHAiAwGvsHS+W0NBB/3ux3659BINTkLHzVJIpETqPCB3U5QQAAAGgETEVEVcdB8GCCqkf5NykHCtDdleIjvaCRAAAACAAAAAEwRQIhAJn7p0RNAe5vM01Q+x54FsTi2/lt4CbzeNNgXDX9uHj1AiBnXe5miFn7PK+UY4pnDrOhitAH7bACov76XjkAlUSf5gAAAGcDRURD+h3i7pfkwQyUyRyytQYrifsUC4IAAAAGAAAAATBFAiEA3g6/Ucq5DXWBC2V6vWnjg+yqWK5Ogy0Y2GHfBOJXEZYCIDPkhf2EVScz/0BZsMp9hEkIsaZHYXJJPEZ2nWnSzG1zAAAAZwRXT1pYNJUP8rSH2eUoLFqzQtCKL3Eut58AAAASAAAAATBEAiAbBYYt/Vr4QmwBFUoUhkhcJu3TrtEt6hXTDWKRxTGrIAIgPso13jBOanUqh5Z3xCMPovML8oBBlg1GjxICEMYasmAAAABmA0VHR5mapkiPB25nZUSPCQq6g/u0cPyZAAAAEgAAAAEwRAIgOFm6+F5iTeuJ3FmPOBf7ri7NHKcZ9URJyFE7/H7wc8sCICwWjlKkiMRy0TTLDRXpOThZhNcqyuhLybkh24t0a3xKAAAAZwNFR1SOG0SOx638f6NfwuiFZ4vTIxduNAAAABIAAAABMEUCIQDvFhKm7heuK3ztL+ZimTV2zSrpokbV1x2fttGs0fRGQgIgKVukZbmFrQQ8W5tIKxEVEAN/dzLAd/0Tym1C/4xUbZoAAABnA0VET87U6TGYc03a/4SS1SW9JY1J6ziOAAAAEgAAAAEwRQIhAOVCTkUf1LF+iSIfABWH2KJGSyjK/t6owhMBB35w3XhKAiAZ80zhZq8CfNeOjrbOwTnGLHiTKLUDTYqVjM9dBzfE0wAAAGcDRUtUTs22OF89s4R/nEqb8/mRe7J6VFIAAAAIAAAAATBFAiEAlxLi6V4QoDB9tUC1P1OXHLn4zY3wPxnnG8C8e3cxGH0CIF/7wFlUYj4YDGApmYdoO+3R8wdiVGzovYhHt+SvAt5zAAAAZgNFTEHm/XX/OK3KS5f7zZOMhrmHckMYZwAAABIAAAABMEQCIAp2JrHnixTJQB6SY7lJF0lnWan6w0opKC+Jqu+t2OiCAiAs1eX2mTnxA7sHvKP7kwtouihVzjxF38nfr/V1/uLLLAAAAGgERUxFQ9Sf8TZhRRMTyhVT/WlUvR2bbgK5AAAAEgAAAAEwRQIhAJ9Z8PNWle1gbpBKEbMuBFQ20gp8iZgzknpqSko+ot1wAiANsEVV93/3tA7FqUvvI+P5qIxFhD8YqLeQ7FB7Sk4JggAAAGYDRUxGvyF5hZ/G1b7pv5FYYy3FFnikEA4AAAASAAAAATBEAiA6MWdvv/tt4CfqFNClpenwdivsdq/NvaofB6XOP7pH1gIgMTo2kZqu7tW2H5HJOcfZs9iDebV6VvUqwLOAn5662a4AAABoBEVMSVjIxqMaSoBtNxCns4t7KW0vq8zbqAAAABIAAAABMEUCIQDr/wmVsLCRpKka5Zrg0GOK/c6lneI9krcAjfernrB6wAIgbJb1g1aQlohGWr0xwYifDl1EHIlN9yd/HoqqfDFsz54AAABrCEVsb25HYXRlphxBam75XD4xUzY2rNtV0IRmMxUAAAASAAAAATBEAiBGkn1T4/VmacuuOTs9+au6+p+J17A8ZrwUc92hFKa9cgIgW1aWvKihxglxe/43tA7ve555LF4ahK8InJd3reSwPooAAABnA0VSRPmYbURc7TGII3e11qX1jq6nIojDAAAAEgAAAAEwRQIhAPqRa+GFRQbUGutPhFrV52A1+36CFe+8jok0BJe4CIASAiAG0DB3uQsZ6BkMCal/9wtKffyqCVsyaeTy5Bzwu5liuAAAAGoHRUxUQ09JTkQZekxE1qBZKXyva+T34XK9VsqvAAAACAAAAAEwRAIgVEStTBunQkFF3hJOSAyrqGAsIEHOUwdRIpmKkfnkTKsCIFSWH6dPhLiNkXOMj5o//YXhMsK/9LEj9SRKULuvb3OdAAAAZwNFTFmpVZLc/6PAgLS0DkWcX1aS9n23+AAAABIAAAABMEUCIQDCKKh+ZwFGSJpuIGJlpTTrqZu5C8K12mqJ/sLrotcRSAIgQCVjO5j96y6Vp2Dr61gyUDryMp659Yw/K5ufM4YDFdQAAABoBE1CUlM4ZGfx892+gyRIZQQYMRpHnuz8VwAAAAAAAAABMEUCIQDmjRbWFtt7q2dBvi1JnbqY1q4uwstkl+nBeYQn+OKdCwIgEeve6J6NfewnJ1QgPQqE9nrryknlSLkpqsRn5dKZHTEAAABmA0VNQtsKzBQ5bRCLPFV0SDrLgXhVydyNAAAACAAAAAEwRAIgCSh4XqNzzJOe+BU/zdxNiIvBjvry/GbaJL97ylSNL9MCIBGDTItfwgd6bzPVD/J+QTj8TQe0cjmjiuQQNdRsl0iaAAAAZwNFTUIouU9YsRrJRTQTKdvy5e9/i9RCJQAAAAgAAAABMEUCIQCgI92DRnpM/tAgiBBa6SJt4qbH+sYyFqxzDPSU6nQCtQIgA76LxcLUez7mPDQSE7Bw79F3u3sdWzUlKMFYP8iq6yYAAABnA0VNVrgCsk4GN8K4fS6Ld4TAVbvpIQEaAAAAAgAAAAEwRQIhANvXe+rFO7ZOmIls2I7GeM1Qv4B2ocavda18anrqwRQ5AiAZCzw5quCxPSaeWAqmMqzjdaGD53Bnj34mKRmY/rSozAAAAGcDRVBZUO5nRonXXA+I6Pg8/oxLaej9WQ0AAAAIAAAAATBFAiEA2eT4keah94EXDQtovomHBscWGpvIrSp5kbAUCU1OwJgCIB9qFRw5AVVXPKN5qY95txQa1bkzh0pHD7o6ONSzVAQHAAAAZgNFU0Q28/1o5zJaNet2jxrtqunqBonXIwAAABIAAAABMEQCIC65Os3cep9MQuDgwGOvmljEuRVpuC83kbyXjVvOsWkcAiAn3LraGPmBEa/bqsYXLstZzX/+TAb8JZ7E+CKdMlI9hQAAAGYDRU1VEyqL6OeZBSQ2CQX9smPhiWy1jssAAAASAAAAATBEAiAdpwtKUJHzHLy4fy7HSjL2uHNsOcRqWwP8Z5PDcQVBSAIgJC8aKIMkVMh/mfhGp/ocIXyxfK6NtcIh4heI7IvkD/4AAABnA0VEUsUowo/sCpDAgzKLxF9YfuIVdgoPAAAAEgAAAAEwRQIhALdqs9d7eVwT/+wCG6FON8VZWWqnN1fDBtCiD3ui3htbAiBmedDMeUQeSjYU8aoaZQUF0xIjufiU46wazdHKfGbJfwAAAGcDRU5RFuoBrLSwvKIADuVHM0i2k37m9y8AAAAKAAAAATBFAiEAqOY59aXyUoJCexJfbpBvnSED0S/yjKAXJYh7HTtBYJoCIFJgw+MwxWVRScm1ynsjs/sJbUpe8H+686tDo2pzB2oUAAAAZgNFVEs8Sj/9gToQf+vVey8BvDRCZNkP3gAAAAIAAAABMEQCIBCujBxsJtNcUc0aUn/EkNM2inK5Q99TNf2L6T6eKp2SAiAfrUTPmLfwuXGCz3s7zPE5sCrB6sD/c8RzCD/AOmA0IwAAAGYDRUxYkEjDPHuuC76a1wKxe0RTqDkA0VQAAAASAAAAATBEAiAW+v0gS5vU38WCGstkDlkU7hoR7rPQslQjemxlCobaQwIgBfdxBVSW6dmfpR4rB+CyA+32DGQxy7tGtIgaqM/uMBcAAABoBEVXVEIXjIIPhisU8xZQnsNrExI9oZpgVAAAABIAAAABMEUCIQCknTBOPwEvAA5GY4rkhXrsIGXlhmYxJI3p4r6dtDqVIQIgKbOKrqEkfDOBUCZCF4OC8fxa6Z1htwowlak4EUTXYrwAAABnA0VHVF26wk6Y4qT0OtwNyCr0A/ygY84sAAAAEgAAAAEwRQIhAIJDo0EVqRh5rGnzou0121AqJbytTlfu2qpFvMKTKqBfAiBwUsKVYGZJYIVUHxIy+FfDarXAhBo1nEH2HqyiIR2hqgAAAGYDRU5H8O5rJ7dZyYk85PCUtJrSj9FaI+QAAAAIAAAAATBEAiBZy2NalwDvylDdqo1x0ZbUMGopt03uG85ebkIdGEZNVwIgRdU+CxW8VFqcinkKQzlLdCegDnv4GatkWYx+EN6c528AAABnA0VOSvYpy9lNN5HJJQFSvY373zgOKjucAAAAEgAAAAEwRQIhALejRxDt1bZvNFlFj3L25tXeWgdDPi6kOshihdimZvShAiAcIYIsuH70eMU1lSbjKdBAOqHdNuaFZ9QlTAxh9pLlfwAAAGYDRVZO14CuK/BM2W5XfT0BR2L4MdlxKdAAAAASAAAAATBEAiB6+HFZPlstIMs931WaEIF0p4RMTxsiODjFh3oL08Z1UwIgO+hINAIJpu4GoCDBdZ0BED8GDXyUA07/EeBNIstbYPYAAABrB0VPU0JFQVI9PdYbD5pVh1miHaQhZgQrEU4S1QAAABIAAAABMEUCIQD9QA1EzKdQbjfTazec03qAP81fv+1eZaydk46aQyPQSQIgPmO9DytHfuwFduphq06TtXaT22VzI6VAIbHgDdg6P9sAAABrB0VPU0JVTEzq1/OuTguw2HhYUsw3zJ0LXnXAagAAABIAAAABMEUCIQCd/UKfW/kfbDXvoNL97A52XZdLL42KbpFGkf7gRgi5ugIgEwHbkhlCenRhnAwnzamO/WsQNlLrkmmkIJtVM31qflQAAABqBmVvc0RBQ36eQxoLjE1TLHRbEEPH+imkjU+6AAAAEgAAAAEwRQIhAL2RzBVFNt57pkmt9/ixEk1Ij6Dwu1XP2EVEL1+NcjlsAiA6EVKV5cuhTGrvmf9wcSwGPsnenErtE073nWo6yYYWOgAAAGwIRU9TSEVER0WzjyBmFTJTBt3esHlKZIJIa2t4uAAAABIAAAABMEUCIQDX/CXn2lhVHFs09PEWET8/jzji9ThCViIQeWJ+aDaRFAIgJuTYe6gf9Bw5Vr3oEcfZhzPmCLFeeAwitbjyxz+WI7kAAABmA0VRTEfdYtTQdd6tcdDgApn8VqLXR767AAAAEgAAAAEwRAIgYtCzh77PEeGOyPZOjuZSphVYETILyTZlzgmCTRL8ORMCIERGOCHgrhEfpVRdFoDPkgw27qEjiaBHn7aKAS2RKNUeAAAAZQJFU+8TRL34C+8/9EKNi+zsPupKLPV0AAAAEgAAAAEwRAIgBDpdU8e1Ewa/9bNriRgHK3gUCVDPAoroxTN0UDq8Nm8CIEPIKA2NJLBRvWpYqXUjOUeFXYlpzCJ3irCWloveGP58AAAAZwNFUlSSpbBNDtXZTXoZPR0zTT0WmW9OEwAAABIAAAABMEUCIQCCVc2VwIgPpoFUTMoRI3eUo+VWo7Zh1XW0k5NXnQF2BAIgB7k8/qsGlVFlUP9/IEukvAaIQhOTnSPhWyZU6T6UX34AAABnA0VST3TO2ncoGzORQqNoF/pfnilBK6uFAAAACAAAAAEwRQIhAOCvL6MPDgNNxWYmQnLkASlMaqBQp5zXWuL/nel7+3p7AiBBBvG88A6olBAuwWgZqy4lHayRy1uTEg1ZaRiZTVlB9gAAAGkGZXJvd2FuB7rDWEbl7VAqqRrfap56ohDy3L4AAAASAAAAATBEAiBStB2Kyfph+rKMlG4cD3x3sq3yMapOIm2G8FL8oEZ9FgIgYrbcaDMuX7iFy8sSBDMzqihPw1fjBBv1b6hDZZi6MD0AAABpBmVSdXBlZbZ3NFIeq76cdzcp23PhbMLfsgpYAAAAAgAAAAEwRAIgfTUpvTuVBt7SnYBGcwQRSHjAz1jfvl4JVTT75/PbY68CIE16EAu8kxiJeDFDHCKbaCqlCPmbcgfT9xO9+6M3Q4sTAAAAZwNFU1P8BZh70r5Imszw9QnkSwFF1oJA9wAAABIAAAABMEUCIQCCNrWsncFoDYkcaAV5LC3vQuCz99zFUAGhXZ336b0aGAIgLhTij7Lqa0MivEOgLXKEoumdHULfYBa8F1CIsiGRCyoAAABnA0VTWuih35WL43kEXitGoxqYuTouzf3tAAAAEgAAAAEwRQIhANn9Qi8qw3NvkB0VRWPp8AcZHamCYB9MacRzGsveBxD3AiBJvShENKNdKHJ+tT3J7HSicceU98xIkxiwDA0jh/2eXgAAAGsHRVRDQkVBUqNA8JN6jADbEcg8wWzsEjEBYPC2AAAAEgAAAAEwRQIhAM4X2Mvuxu4zPYScHwDHRqwKXmJ8/ItCCscJGMPhOSxoAiBaPHqSZCQkfG1kI0s3JTF4idgFursc1jRpEe64YtPccwAAAGoHRVRDQlVMTJdMmLwugvoY3pK35peh2b0laC6AAAAAEgAAAAEwRAIgD3DZ82fTWFen1A6qC4AkvO1+q2xpT373x35tOoBDCRkCIATgz3sw/6ijeQdI1MJHvdb621Fwj3fBFM6BkzrrINTqAAAAaARFVENI3XSno3afpyVhs6aeZZaPSXSMaQwAAAASAAAAATBFAiEAl2AK0b5WIk5TMVLHEXQAeI5pXo2t1lS6nn2f5BseonoCIDIt1xj0NZ/Phq23gXw2V7xHxr1/9HDZRoyJHr8hGCyLAAAAbAhFVENIRURHRVfisI50srLAQei3u7SL8c3GuK+2AAAAEgAAAAEwRQIhAOSppEbTJbZ2ziltttbP7ehK5m35+BAbrzjAIB1fHREnAiAYjls8OTg/246WbuLOqae/nt5CYm2yIYkkwvw38a6XtwAAAGkFWEJBU0VNE9YkqHuqJ4czwGihdEEq+pymyAAAABIAAAABMEUCIQCkJrmLBM+8H7Xyi+xUKuHnrYm84lCux+De2+ZnnIBvZQIgGclqQuYO3ROVyxnEDczWQfzSqjdQ1v0HXOnxXdA4UtkAAABnA1hFVAVMZHQduv3Bl4RQVJQCmCPYnDsTAAAACAAAAAEwRQIhAOnpTsDN7rxMRcAhNSUwe6LdaTwsy1L+8fFADNLpPBKgAiBcZ5ZudSoWUtCFsWzIIF+/dTBqcm95vDw+unTUEBm45QAAAGwIRVRIMTJFTUEsWpmAtBhh2R0w0OAnHRwJNFLcpQAAABIAAAABMEUCIQCSWCFsOfZqbUfchpqKlerMfWs46mqIfDRaEBloLnBOZwIgLDHj1TZ80wZ9lual8YCqFs1Cv/mWcfuz951agoBsc3AAAABrB0VUSE1BQ0/vD9odS9c93C+TpORuLlrbwtZo9AAAABIAAAABMEUCIQDjRs7yGyUG3+xqMjuL/mn+0PYUqqefHJBPsXnGtFnQ5wIgColu2ahYpRL5H6mDiu3izbvVYQgRkJcsWypxYGnms2sAAABrCEVUSDIwU01BnqRj7Ezp6eW8nP0Bh8SsOnDdlR0AAAASAAAAATBEAiALvf4wO9JeJzB4vG0h3Z4sRTo7V7oq7cUE0K6lyZRZXgIgFS0tq4kSqX4nG8+NkHN24/PvuBIAUWO0gc0DuLaXThcAAABsCEVUSDI2RU1BYUhXx1Vzk1TWiuCr1ThJz0XWpB0AAAASAAAAATBFAiEAiPHPFZWCThr35oOzA/bMXYBKE8FKdw0g6phQD7QLjpQCIH8H5SxQsFhjYDQwrlhtzG1o7ycB482HUzjixOtGudk9AAAAbQlFVEhFTUFBUFkxaxO5Ue/iWq0ctWU4WyOGmn1MSAAAABIAAAABMEUCIQCmxK6qA1AYAIpuXMdb4ZC7g7Jzhyc2/PEuKe51gpOD9gIgJDbAGp6F6xh6eoCZN+4B5aefRVbcrjU/VmA3aYQPJBUAAABrCEVUSDJ4RkxJqm6BJ4McneRa5WuxsNTU2m5WZb0AAAASAAAAATBEAiAETeYQ7ePkcdRTesxCRv9U030yFNiEjad7x8UAcNER7AIgZXXfoRO+wsdUhW4H+zG2smgu3z3tdNZauB3vesfn7NsAAABsCEVUSDUwU01Bo2Dyrz+VeQZGjA/XUmORrtCK49sAAAASAAAAATBFAiEA4H3iA4+00fbKhaqCj9RDsima9mMGSu6+qkIKgyMKz30CICc5+jRtrCsuZktpLYPy+ryA7NQ54vCwPb/9VUxLGvJaAAAAbAlFVEhCVENFTUG5/+C47i0a+UIC/+02ZSAwB0ik2AAAABIAAAABMEQCIE4IBfnfVQcPIh5xulSeEPeBu0hDMLzyjB/2J13/DaZXAiBFz/OqJ8l26ygzMdk35dJoxp0iU+WnWBSZ4QCEi2wuTQAAAG0JRVRIQlRDUlNJv3CjOhP76NAQbfMh2gz2VNLpq1AAAAASAAAAATBFAiEAp+tXscP07NK3X2NZIeF/a/0FS5+dAQh/4I3aArt+fz8CIAk0lQ6zJCRpdEzhwXCQmZ7rxtCkwKJpMaKYwWBRBdUVAAAAaARlR0FTtTqWvL3Zz3jf8gurbCvnuuyPAPgAAAAIAAAAATBFAiEA/kLIOPJuEamNIJw0FtnL+vBHo17RCEnVnAh5A0A3hIMCICU3uNED3uybjz/cXr+1Vw4cBAYsT3QOVfdomn5u1F4AAAAAbQlFVEhNSU5WT0zx5fAwhuHAzlXlTNgUa8nChDU0bwAAABIAAAABMEUCIQDHwKFqewknA/14o5fcZl2TY9j7pwrq6mJPAjzN39cNyAIgOPTn6oURxrin9CIcs3mbEITOf89YjDiyMkbDyYOkuDsAAABsCEVUSFJTSTYwk+AYmcEFMtdsDoZFN6HSZDPbvdsAAAASAAAAATBFAiEA8Vqdt1trg2LAs0lmShWfHCJzZSpUODhEArB/zu2pF2gCIDMs2i2T5gZURgUpu50I+mXeN1Q5baocXPGg7HInulZAAAAAbQlFVEhSU0lBUFkTb65DM+o2oku3UeLVBdbKT9nwCwAAABIAAAABMEUCIQD1Vwq4UlWXY8f5rBuCpKfL8KjrXFstwB+z/H/+Sv/tzgIgJQKd7Df71gZ4BBrqZ3Om9L9p2Rw1/5old90O31p15MgAAABtCUVUSFJTSUFQWZ9J7UPJClQNHPEvYXCs6NC4ihTmAAAAEgAAAAEwRQIhAPEBfKQAYNnY9Uje6NK2A24qTsOHQODzL46TBdgQloGpAiBwkjjM7kqSx2ddjS8V3dtSDzjoBGGP0piBduRzW+LgVQAAAGoHRVRIQkVBUi9eLJACwFjAY9IaBrbKu1CVATDIAAAAEgAAAAEwRAIgJiBYsVM6yMq3ZM+bWypQeglmcozYTyDfEy7Pu9juzbsCIDZsKbDAN8IbgtVVWeiOk9j1Tkp3RoFzt+qCgIB22TqIAAAAaARFVEJTG5dD9VbWXnV8TGULRVW681TLi9MAAAAMAAAAATBFAiEAhJSYmcv05cb018p//yjZKN20gawM6Kuw5ws83STnJSMCICSRgSZz9dE3Bsm4xmtfY/rK5kXB+Df7PhRcZrsBMKvNAAAAagdFVEhCVUxMhxuu1AiLhj/WQHFZ82ctcM00g30AAAASAAAAATBEAiAsBJhfxjBD+0j/iOV1EUx0C1KyrFuCfVYEwPC9WHatewIgbeMCUsLpH2aVhTyk5e+6dsdRABSQsTmpdQXJjVNfFIgAAABmA0VUSMCClCHB0mC9PLPg8Gz+LVLbLOMVAAAAEgAAAAEwRAIgCxk1UENRTb30jtMWeGk0B9eWWvDkmQJ82WP/MqHeV6kCIHj+K8KLJ7itM4okuWhDpF/RbL71bxtTYAaTF6x1MM19AAAAaARFVEhCOiZ0bdt5sbjkRQ4/T/4yhaMHOH4AAAAIAAAAATBFAiEA+D2gdWd9EKIvZdHhDZnw+iInVcn4VRNjV1wORJBDy4ECIExCGOy1dtqWs3Jcny2GmFi2PujKQvnlP0ALZ+BzW9s6AAAAaARFQ08yF/k0ddKpePUnw/fESr9ErfumDVwAAAACAAAAATBFAiEAyXkZKMKV1TbF5pA4f39eYy3tIOD32bQivviP+WwDkXoCIAkaTlLP684atrsfeUeGhUZnakr8h7CLIdzcdXcOhgeQAAAAaARFTU9OtnuIolcIo1rnwtc205jSaM5Pf4MAAAAIAAAAATBFAiEAth2qLh7itoIhOcvXRnJca7R9X0Xy9MJ1J3DVb/LMuHsCIALxDIv2Q+xR7R/E+fxA4uEuIRkPmNEyWdqhHNmcqzXAAAAAaAVFTU9OVJXaqrmARoRr9LKFPiPLojb6OUoxAAAACAAAAAEwRAIgKu+4yD3N+ODN6ct/P5mSHpE3OeElO6UUekwWPlz32sMCIHwdulYcR89MLVLGJutzhuZfU10wNx0uer9dXYyCQSDjAAAAaARFVEhE2/tCPpu/FilDiOB2lqUSDkzroMUAAAASAAAAATBFAiEAy1bQf7z4PujItAevNqKKS2rs4GsiC6Ut7gj23N2haHQCIFmjOsxwicl0WD7bDADylSnKrwQytdNFmoK8LYop6pleAAAAZwNFVEcoyNAf9jPqnNj8akUddFeInmmN5gAAAAAAAAABMEUCIQCjOIQJcZR+xU2BhvTELDdipuT1qrMwlROj4mMlrOjMIQIgKggbmrLJ1jYWYr8Ti6OmnntdvGlaB6bXSJ5XGQQ3MUEAAABnBFBVU0j0GFiFItXdAYtCXkcpkeUuu+7u7gAAABIAAAABMEQCIGvnXvgi0pbdP9TSnzcgCz9kM1ez2CwBc0WmYh+JGqTBAiBdgfxTmSwooiKsPioHciAyJsTNAT4eFLot4X8vUSCeKAAAAGcEQlRDRQiGlJwbjEEoYMQmTOuAg9E2XobPAAAACAAAAAEwRAIgWW4gpYObNN6NolFxZLz20Sts6nwPw2tStAa/rjqiiToCIAd6YdfeItnz5gxU5XOKFuz9/AgebhE7pM7EecRfed+IAAAAZwNISUepJA+8rB8LmmrfsEpTyOOwzB0URAAAABIAAAABMEUCIQDd5FZwVSYV2S+pQztx3A673UJnjKSnsWqdHuUL4etopgIgbY02xBenGArmCsUTve0fDP6atBBJkDCA7nVhswM8hSIAAABnBFJJWUELFyTMn9oBhpEe9qdZSenA0/Dy8wAAAAgAAAABMEQCIDB2pPMCJSYaA+oURDBj5y1dmwkbIWw4FOBplgH0vOGZAiARaIjxHwckBmnHeyzUuaDs1gO9wYQv19EYXs5c8jtGowAAAGYDRU5DA59QUN5JCPm13fQKTzqj8ykIY4cAAAASAAAAATBEAiAj61WXPcBvxeD4OXjY+x7jGTgJtQNbF75ZEFbKfeNB1gIgPUxhUAAca5Y5Smc3+s0y/sOKHWu2PyTIQfCctpgF6KgAAABmA0VSTrvCrhOyPXFcMHIPB5/Nm0p0CTUFAAAAEgAAAAEwRAIgQ7z2xH4Kd28GlwXzWUf5c3TLh0cNqIL9oTa1qHMW6RoCIHzziQwWNppHkAzZtCYfC2gqxhCb2kHmayzqGtRA+AU7AAAAaARESUNFLgcdKWaqfY3ssQBYhboZd9YDimUAAAAQAAAAATBFAiEAsW3i5HbtJres4NRhIHwIYn2qnghdz77M53q1gDa1mGYCIBaGYAIzle75XFrtw+kX6nmvJ+wnecN1nyYL8KC5h6+hAAAAZwRGVUVM6jjqo8hsj5t1FTO6LlYt65rN7UAAAAASAAAAATBEAiBBLTOuxXkROYTHdznaEHxsUmYBm3SJo/4NsMKDTN7DiwIgSzoCdj479rd+i2sBMt96yYUwzh/WRVe1wE9wZOST1L0AAABnA0VUUmknxp+02vIEP7sct7hsVmFBa+opAAAAEgAAAAEwRQIhANZ51mY8kBFuXDzJNUYBSrNPqOKTDEdMaub/aVLvSKoCAiBFpm0NQK3CpkbEfulxUWkhAwJZSh2ywH3GjRajjCnqZAAAAGcDTkVDzIDAUQV7d0zXUGfcSPiYfE65el4AAAASAAAAATBFAiEA67qipD297mmIEz3sVSi2UCD35sW97idH2s0kDuwPu2ACIHvpqnobEIiRZ+u3Nd5lTmSJIkWyJU5xaD2gd9KyzcfsAAAAawhFVEhIRURHRRDh6VPdullwEfi/qAarDMNBWmIrAAAAEgAAAAEwRAIgXwItt/OahDzNi9nVoDFEPd4AYIrjeyWQ0XatIlQT5ZACIDcGJbX2YhGtdR5+oCb5fnO1lGbAsJeVd0wRoPpuW0GCAAAAaQVFVEhPU1ryvhk6arypyIFwAfRXRHd9swdWAAAACAAAAAEwRQIhAO6RDqfu57g3NYwqYQw2oE5+6NLm9zD+E8GSJabLdL69AiB3EhpbBbGArp8kCmBOSANmtoKePc9R71tCsSZLn5sFSAAAAGcDRVBYNbqnIDjxJ/n4yPm0kQSfZPN3kU0AAAAEAAAAATBFAiEAh7IeZh6TYiC9uhPc1tUMDnXYZmDGAq/zh/oy6zoLy/wCICc/BvxfNnMbw/ozRqtRO4fR2UUspKNHp5hbez6cef07AAAAaARFVEhW7u7u7uKvjQ4ZQGeYYDmDCODvJNYAAAASAAAAATBFAiEAjOplo4NUBhHjYIisGnQIbyh4TwQWrY/w2G6MXnZWuecCIGfAHm7e/8hqHeEIPneFxcnygWY21KAXXpHTKloqPttlAAAAaARFVVIrV9roNlPdmeh2/x8RuXDGhrkKmi4AAAACAAAAATBFAiEAlvM2uOm4guG9RBH86gQ9ugbOLU55nDiKchxgiYySU1gCICHpsm2dG39rDmlaYszVTqV7R6qYTItPxvg3EZxIVsq1AAAAZwRFVVJUq98UeHAjX8/DQVOCjHaacLP64B8AAAAGAAAAATBEAiB3Nhq9T0/CGvhgg4o5iLjk4SEFOcqfL7BgZN28OLSrpQIgVLmBrpru0Gp96ptwnqMhvrLIw8qYFBui7GhaquTme2oAAABoBUVCQVNFhvrbgNjSz/PDaAgZ5NqZwQIyug8AAAASAAAAATBEAiAo/nJ52h7h9e1H6TaFYRySz2jg2aO48mGdGJ0wdVV2HQIgOUUx7piFW8cPPgql8YsWGoP+dH4bgIlarbYD3nONiWEAAABmAkV2i9E1uyVDlVBFyohZwFAz0HY22WMAAAAIAAAAATBFAiEAyx4oCuvFsdePGJeua8PF1bH6/7JPRGzTmPefxuBV6VsCIGYYMcom/2RBOVmy4b28ZRtQseQ4AxegMLFNnXoLR3/aAAAAZgNFVkWSMQikOcTowjFcT2Uh5c6VtE6bTAAAABIAAAABMEQCIH02GPIbzN1oPAo9hoT17I2w8sw/0YrbdwtiJbXXrMoZAiAjfNk3tDwE/iUarqux98Lx/J9DXCtWuBVzSFRHwvyQ8wAAAGcERVZFRFqu/oTg+z3R8Pz/b6dGgSSYa5G9AAAAEgAAAAEwRAIgEdn02Y412WenUXzm2Y7qFRHyaEKJ7KbF2pgUXMjJ9VUCIEhUaJmzJGT/kfU50bptReVv7eEj/hm1DqNcQOj/rmMFAAAAZwNFVk5okJ5YburI9HMV6EtMl4jdVO9luwAAABIAAAABMEUCIQCDR8zha0ByM1gKWc3S51X5Awlr5E0C+u0M2nNpS4q0wAIgdiVNjYq07mDz48t360XDyX/dM6R7C3H44kM3zIH1JsIAAABnA0VWQ7YtGN6nQEXoIjUs5LPudzGdxf8vAAAAEgAAAAEwRQIhAMVGrLqOfvntPhD+a65jqvIcs/kEBlGNRPIy2CBfELcGAiBYrOF3i7KCpqJE3HK0SYlnUUOuOhqXrQSliN+HTiEl2gAAAGYCSUTr2dmaOYLVR8W7TbfjsfnxS2frgwAAABIAAAABMEUCIQCTrmbdhbwaOf0PWUVrskmCQon1dNFlaMK0ROZSdLgELQIgfKsmejGZmrS+AKBnpCHObgmZFSZhoigY1aEgmvyDnpIAAABoBEVPVE/T5+cdIEA6bQvq1VjAvxlFKj/QAgAAABIAAAABMEUCIQCkaIfivpCpW4z3SZW9PUrBUhhH2RdHTALvDdwOkiE4TwIgY7qACOOC9fR3dYdEojhlWVSxdw2Z/fBmf+u9yJep/8AAAABnBFJJTkeUadATgFv/t9Pevl54OSN+U17EgwAAABIAAAABMEQCIEdmHBWi1bBzd4kMJzQIo+p94MO9Ml6RO4iKA15JiPzdAiBJNJAafcYPgjbGQLcz7tTopXSmhusckBu6ZEIm7h0j3QAAAGcDRVZY89tfosZrevPrDAt4JRCBbL5IE7gAAAAEAAAAATBFAiEAtYycZDT1gLYslt2Hpm+C6m5IB3jbQV8ng0rrC5gB5TgCIE4HF1yGIC5gp7iXZMrHaWYYt+kS2ROVHj4TMP4rzw6bAAAAZwNFVlp6k5u3FP0qSOvrHklaqaqnS6n6aAAAABIAAAABMEUCIQCj1BIFUNbXwn6dinoBcIlefUYSTyvIuH4F/WN3N50LsAIgHmaZ2tqGIN1mTyQ1u/n48PM+gkPLaMpZGGc4E1XyO3YAAABnA0VXT0RJl7fn/IMOIAia/qMHjNUY/PKiAAAAEgAAAAEwRQIhAIHKJyuGnAnaOH5hf54vwKeY9UfWqY9tzM8ZwkO5yFi6AiAUHSl5BHmiCoVILyuCnfTaNFrs67E0KGVvT9oOcsYFrwAAAGwIRVhDSEJFQVJrqpHNiqB0MXYO8u7f7c72Yqa4swAAABIAAAABMEUCIQDXsYgHgRM2e9Z5l1MEwKKVC9TzIBRcKBZjN1gd5XmYYwIgYPlAhB7Yc91BJC91Kihob7jlVLO1BDYyzAA3A8OHfkoAAABrCEVYQ0hCVUxMWS72jBjwWiLFiQJj3qXZUt0UDSoAAAASAAAAATBEAiB3HjerqH01699AC21ZbF9vaDCePf44pCvx9LLEkkhauQIgKGoZfIapPDL1w4W/eXz4O+94YrB/GmAH1NdJpeQgLtQAAABsCUVYQ0hIRURHRfjMZ+ME+OGjUe2DtNu+a0B21RN2AAAAEgAAAAEwRAIgQpahhO/EoiPNgfBq+vkowZuXHK4IdK4uL78lkI6DLiQCIEkzff/GufA4Ftte6OulJ6wHoNyYaTfcWgD07LiV3bg0AAAAZwNFWEOeTBQ7/jX4VWJLP4RGWrdAGhehIAAAABIAAAABMEUCIQCW5SsIeJNG1T5c5omhyIzn8c0YEVY8q8FbTxn+WrWDmQIge1ALxmvdbV0P9Jz68gQlMCSBCYRG4k4hhVHO3mmKu9AAAABnA1hFRO5XOpRbAbeIuSh84GKgz8Fb6f2GAAAAEgAAAAEwRQIhAPkgnENc4Fgp0nzdkSXu5q0nLM3JYZazhVlo8A34Lx3sAiAEudUYF/ztOJcOXpdSwZ/r/n17ocLx8yzAUJJeI9tQkwAAAGcDRVhDAMSzmFAGRetdoAoaN5qIsRaDugEAAAASAAAAATBFAiEAqVo1e+rcgITZienR+a41NYPXMX720+XtRtybxrCHLuUCIEiq8s7cbVerLSJWjenpQ1yhlx1x0ayUHz3CtRUksmn3AAAAZgNFWE2Dhp3na5rYEl4iuFf1GfABWIwPYgAAAAgAAAABMEQCIC6EPK04agu+/mrzPG8FRjCKt7mJh9YIaR+pi4gHALDRAiAKZW5xft631I0W8X9Hfj2PN2l72n2oXc2Ack+JH3UVgwAAAGcERVhNUsmOBjnG0uwDemFTQcNpZmsRDoDlAAAACAAAAAEwRAIgSjXsWIIX6JMh879jrdaXLEYbl5K2Vl2C4lCg/16X8TsCIDbMfMaITf9UKwlQafbK+/MWOhDmViifxZTxMzem+0x8AAAAZgNFWFlcdDo16QP2xYRRTsYXrO4GEc9E8wAAABIAAAABMEQCIHdo+BIdTCSLYMMcAQmaFT9WebfmjbcULB9yw2jCSzTeAiB4TbzFleD9nbPGosyJ3Hnbl6BG2JH0pw2gHqmVvHErYwAAAGgERVhSTuRpxEc6+CIXswzxexC822yMeW51AAAAAAAAAAEwRQIhAP2s1AW1wOlUkl0LJY4/FGSbtmHKzQ+GffX6Bu0awrKLAiA92K20XubZSfMKmKQNPf0mATF1uBaqCqC9CwX8Ei/59wAAAGYDRVpUXmAWrn18SdNH3Pg0hgufPuKCgSsAAAAIAAAAATBEAiBTd68opcnvIxzbEK6GmRRwk+7sXU1FUUF/WyaPARLH0AIgRq/VTG7+1mgAofRKsmh4GZyVy3OhafPrTPzkiSX9mzQAAABmAkZUeKc7bLxdGDzlbnhvbpBcrexjVHsAAAASAAAAATBFAiEAx1jdtj2M2SPiwfBEx+QlOgUH3JSVIF2AJqI9LXB2rpUCIBe+P2I1HbRpmnzlxUhc67XncdGyYZhLK6Bmu6mXLGPdAAAAaARGQUNFHMqg8qchDXbh/ex0DV8yPi4bFnIAAAASAAAAATBFAiEAu8byAXuRuzYDqSCxjyKXS4+sUYCNo6mJvU5PNf9MQ74CICQ+A6zI2QDwJdM/oAQU5qcCOmyV2QL8Pk/IjPpOtrq6AAAAZgNGTlTcWGTt4ovUQFqgTZPgWgUxeX2dWQAAAAYAAAABMEQCIDshuKWi06JlGWWiiyrx5XduFjLJpKXdwPU1kfMAcjKXAiAnVLrSeokGsCdqsSR1m66qgLifcjl1eVkdfGlRS/bWsQAAAGYDRlNX//////Favzl9p28dzBoWBPRRJtsAAAASAAAAATBEAiBTjTJ2A+Cl5aH4CLLAlsyfiBQgqsTZERD+33G2iMprUQIgPBnjInHhxeu+ONKHs4HGpfDgbA8Ym96RRarOY7Y8/TwAAABmA0ZBTRkOVpvgcfQMcE4Vgl8oVIHLdLbMAAAADAAAAAEwRAIgFbGDWjwvff0++jE6LBx4FZJdJrGcfUWmB06jkCEYq+oCIHutzVGxIGhbPv1PSjUJPi7gaJuJ+chyZZMINoArDuasAAAAZwNGQU6QFi9BiGwJRtCZmXNvHBXIoQWkIQAAABIAAAABMEUCIQCnpocYqmWhE5GDs7+x5eIinnwveZrc5l8qUaE6nQCPhQIgIDDnuUJNjvzwh9v7QsH+Sd+wtZbzD1NOaSrlmyzzuRkAAABmA1hGUxavW/tK5+R1ua3Dv1yy8ealDXlAAAAACAAAAAEwRAIgGjkiG7XqZ48diwjlZo5Nm0yZNveRF+7L2QWHH846vyICIHt9TtjSvV3GfcyuYODoOV/dzHSIhKl7s1e8eYyCDO/7AAAAaQZGYW50b21OFTYf1rS7YJ+mPIGivhnYc3F4cAAAABIAAAABMEQCIFdPU254b0APC23OTDmFiVM4kEq/NvveUXVg0nl8K/H1AiAo5OVICsVuqOTHLQ6ltzR8cGeHp27QkU2+3xSrMYxpHAAAAGgERkFOWH3LOyNWyCLTV31NBg0NXXjIYEiMAAAAEgAAAAEwRQIhAIyd5dPhUn9qUZkVMaEDRV6raEWqX6gAn3xGkQS0jJKZAiAw5QSQ6WLLXF97/T26Nt6Aw31K8kvh5SpPBlFpiYnKVgAAAGcDRkFSfPbcdpSCq+4v91eV0ADzgagGLewAAAASAAAAATBFAiEAoIe/O0SadVGKw6vqIoHMWS+OlJtofgAPpxBG8KacbvECIAPDu7EWjFe+Xz7EXhYHLObKDrWgkNpcRq9WQRY2Y54oAAAAZwNGUkQKvvt2Ecs6Aeo/rYXzPDyTT44s9AAAABIAAAABMEUCIQCZfuB6R2/2IwQTt9eMYFXZaw0s/rWq8c0jLADy5exUuAIgccI0IshvaWX//yXwGNl5pKdFyfYWbqNwLvHBFDsII1AAAABoBGZEQUnoXIWB5g180yu/2GMD0qT6apUdrAAAABIAAAABMEUCIQDPkX2i3ZblHFA+xHeQ6+FGu6Ru3XgkzEHigSkzXQvtfAIgbd5tTM+sFGcCu180UrrAMboewVA9afvYRwriDE6UnpwAAABqB2ZyZW5CVEP74SLQujx14ffIC9J2E8nzW4H+7AAAAAgAAAABMEQCIG8VWiUL+EiD3aVVzMucuS66+BD3i7c1vvFfJSoxQjhQAiAcLbE4JXjeIC/sopW8hs1r+1C/UtxoJjcvwzfEc9nMGAAAAGgERkFSTaAkbJAyvDpgCCBBWuYAxjiGGaFNAAAAEgAAAAEwRQIhAMb0K24dVNz4fHJmEZj4tSNJIoEs6Hb5IH0hRveoFyv1AiAeNuTYc6gVGH4u9F7VttdOvBYPOl64f937VEVasgZElwAAAGkFZlVTREPD9/+11YabOt6USNCU2BsFIegybwAAAAYAAAABMEUCIQCBjEoU47Y4DW0Rv6BXOsgUba21jGWO+6nHxWbvpV7djwIgCMPP9/nC4KW6SjJDTHi9t0pvVIVzLwIHqhHi4/wLut8AAABpBWZVU0RUx+4hQGu1gedB+7iyHyExiEM9ny8AAAAGAAAAATBFAiEAqW/Jj1c2D49XpEXHL5ZqsJUyg8ri1VIhchF89NGa6T8CIEO17ybCMxdJ8pWAb1J8H91Wjy9qyRb0nJGti53m/c8cAAAAaQVmV0JUQ8B+uRlhZi0nXi0oW9whiFpNsTawAAAACAAAAAEwRQIhALU98eJ3XLbIsypwBDjIT81T46S53JLVRMjiiN1ttIeEAiBPZ29L2eDL7mKg6Ql/Eya1wFnr2Ydyo6uvSJHSetoPpwAAAGgFZldFVEiOKYc0aBrb/EHuXRf/iw1tgD5wmAAAABIAAAABMEQCIFuAHYQwNBasKl9l+prLxDGE6s9cQPY58g30zvvSWeIeAiAgSKia6T2ENIvDM4OPAwT60wDSBjFfFW9WVT4squC7iwAAAGcDRlRUKuwYxVAPITWc4b6l3Bd3NE30wNwAAAASAAAAATBFAiEApHbGhw2HxAMfYvw8ZIrQvBHDdvFOXrZT6r+fVskKbQYCIAjaKkqKrpJCp6QyTh0ny3MLGyMR6YrFU3AFrCMaJzbDAAAAZgNGRUc4mZkhaGCrjgF1OHoMkOXFJSLJRQAAAAkAAAABMEQCIDejg/Nts9e0EfvsAz2FWba2SGlcqVGJiZsYMqgqAJ1iAiBUv4J66FrTwSxwMi0WjkmG0gluSw2UeNnUi59PlZRevgAAAGcERkVNSbJui5ts9T5Jmr2yyD4VM3voWp5aAAAAEgAAAAEwRAIgIQRYSE9sUWMyXYPlexgiVrTEf4U30i22gOw0GF2ECD0CICenm0fW46Hp0cYE18mlVE/X9omDJBflmlxN7sZx5pukAAAAZwNGUk3lyu9K+HgOWd+SVHCwUPsjxDymjAAAAAYAAAABMEUCIQCZytT8D0lanh0BgS/FeQeu8ZJpEYKNOaYv1aiD9EdCAAIgVLmAyFpmhveH7tBaqd/UushI6kIRHtmkdzPwEQAn6MoAAABmA0ZFVK6kamA2invQYO7H34y6Q7fvQa2FAAAAEgAAAAEwRAIgUR3ZhtiDEcysa28Yjss6HQYVXmlpaJ4X2ovoh5LKHRcCIHq5v9giCd3tZX3M7u6gQ/+4aOW4ICtapsVgZHxkvkk2AAAAZwNGRVQdKHzCXa18yvdqJrxmDF98jioFvQAAABIAAAABMEUCIQCAlcdzTk65wFW0aPuUQ2AXPGJyWMuuiYiX5wmmsxRIjwIgbt/3+f22P8NsjFrdb6A/jx941g4XSbIfh81fh8SujK4AAABmA0ZJSN/D6FfIzOp2V+DtmKuS4Ejjje4PAAAAEgAAAAEwRAIgdz+uGVBmlgaCBSHoj3mxCnj+7W5fe7dm4dKXLjN+mOUCIGbI39VYl35Fj0MTw8yCyxihru83j9u3pY+WWP1zYFBQAAAAZwNGSURS+zbIOtM8GCSRL8gQccpe64qzkAAAABIAAAABMEUCIQC+ESnPsoJ+sp/WNRG9Yf/d9nwDfcEnF+hBN/NIQMiLYAIgF4layhQwC2/aeKEfpVThX0hvoRiEoiEOFHTGzrI6y4QAAABoBEZMTUMEzHg7RQuNEfPH0A3QP99/tR/p8gAAABIAAAABMEUCIQDs+/Ts31hScoMY4kY65LpNatClAji1Te61FTiVqpXSKQIgLZXDu6yRP888ZlWxkmO0Cu8r+AYvn5vLVteYcGLrmb8AAABoBEZVQ0tlvkTHR5iPv2BiB2mMlE30RC7+GQAAAAQAAAABMEUCIQDPcWRZG/w0TdebZGmV7dQlMXafQ8LfaJ0R3fnmlIVSGQIgMhoK8dd+oV8YQgLK1y1q/XSj2xxF6L8x2aACBHO4TsMAAABmA0ZWVEUICmUx1nHd/yDbQvk3kqSJaF4yAAAAEgAAAAEwRAIgMs3U3+ZtDFKuMOQK3i1xKZcce4uJ87rZAYJGDlUx+V0CIEViOA8tdjg1sbQNU2oZWkMFbE3HN5KnAbr6Q7QCMIEuAAAAZgNGR1DZqM/iHCMtSFBly2KpaGZ5nUZF9wAAABIAAAABMEQCIFguhlZzGnleJx0CKh6Oo671CJnvCx72p5ROAH5joSBrAiBMOyv2cKMctw+VxXgClWKad3IkhWWjDQmLAU6iUkC9+AAAAGYDRk5Y75zXiCwGdoZpG2/0nmULQ6+7zGsAAAASAAAAATBEAiBIEcG2J68QM0HfiQx4Uy6SgQI5ybgG3RLzcCV2uDtKoAIgUe5E8CfJga/p6+dsx82EXbz4OHIzHQqitkCH78I2gY0AAABnBEZOVEK9S2ChOLP841hOoB9QwJCMGPlnegAAAAgAAAABMEQCIBga3rZ4Y3QAH3nxn59HsvGxlOw2iplOo7sUROK4MSg/AiAeDkOhAmSI5u6ATZ4UKVzoW7Fa04k80HvYNzlPxwDULgAAAGcDRlRY1VnyApb/SJXaObW9mt1UtEJZamEAAAASAAAAATBFAiEA6+/dYuIOrYRtuijZXqJut7AovxqpUOF7VYC+XPMh6R4CIGymee2QMR+TuT9XIuSr60tnNS0awPymZI1st7JgYVD0AAAAaARGTE9UBJOZprBI1Slx99EiriGhUyciKF8AAAASAAAAATBFAiEAzcfy+vsaMr4vOI4ac/rMj7iHG8tm6eOLoK7cRNJN5dwCIH4Mlc/eRyXUzyCzusGtasVCIfJ37U6akz8ZYx+iNO8+AAAAZwMxU1SvMNKn6Q19w2HIxFhem7fS9vFbxwAAABIAAAABMEUCIQDYDzqLT7U5500ohb/sW4IKepjYUiijB90cdkRZAwsf+wIgPG4BNxICK4dyECcCqoXTdHBuiZW4z1KJ2+Q7TtdhjUAAAABmA0ZSVkjfTgKW+QjOqwQopRgtGbMfwDfWAAAACAAAAAEwRAIgV3itrHur39/s7SbQuoVEqvhMKUGvwsRoFmQA1HKU6L4CICLWSeBPWbmSRrdw6O6N28ksxa/0kBkrXr2WQARSdeDNAAAAZwNGWFmgJOgFfuxHSpsjVoM3B90FeeJu8wAAABIAAAABMEUCIQClv8CRFPs8pEe9mB92syoMUIt9sLkd02yx6eckX781oAIgPCmHLSI8KGKfbIFTPd0T/rPUFyhGKbDUcpa+8y8tkFYAAABmA0ZMUprvvgs8O6nqsmLLmFboFXq3ZI4JAAAAEgAAAAEwRAIgcNdxCNs12Gdp4izlzZFNhcurWp9dSCwtOkDpMfjvG0ECIAieIyGJgGXoOLRnYpGjxi36h8cZefO6/VO37SM34l+LAAAAaQVGTEVUQXeI11nyH1NTMFGprmV/oFoeBo/GAAAAEgAAAAEwRQIhAL/Jv6y0RNyoEnUSyB0krmntWuFhlq5bXXiVEJaqnNZtAiAmsviCGxduiA8DgSvb+wNHBDMmKqdcYqesjrKjZ3YjdgAAAGcDRlhDSlfmh7kSZDWpsZ5KgCET4mat694AAAASAAAAATBFAiEA7YpEDuSQVDDdaCLHeqK95NuYefNCalUjApQtN7GpLlECIHNJ0Gi4Wc1TiVLMuVMfZqXLycslxBtD3fQzh5UYS/x0AAAAZwNGTFA6G9oorbWwqBKnzxChlQySD3m80wAAABIAAAABMEUCIQCVAJ9VJPssPnBeBecUOVl1sfWfl1cqjUlNo5q4GeQ88QIgGFpyT/qVfINIOGog3QltC72NT9zifeyQ3GbdaILv87QAAABoBUZMSVhY8EqKxVP87bW6maZHmRVYJsE2sL4AAAASAAAAATBEAiBnw9UpkL+Qj0yYev4J1Gm+AAHvNWTf+cRGZc1r/EMrPwIgA6fojiunzW1NuRguyg+xbOXG6xr4JhUqe2O5PxhYfOUAAABnBEZMVVqVS13gmlXll1WsvaKeHrdKRdMBdQAAABIAAAABMEQCIFGwwVC9EbM7NxOdGPWLS70V2KjDnk238/TzIbw9cMqRAiAIMOSd67NvQ0IucS3VqBRqnm7T0abotfyAKppOQGKEXwAAAGYDRkZDToTp5fsKlyYoz0VoxAMWfvHUBDEAAAASAAAAATBEAiAHEOrPpTA27OaRRtiauovzyaxMCY0dE9BYN0ROqAGrNwIgVOeNftfbSSlNLo4J+DuF+WzcS/ZLggGNEj6KjhNQ/zoAAABoBEpBTU1WaHzymsl1HOKk52RoC2rX5miULgAAAAQAAAABMEUCIQCQcB1nmUbXwrC2i465+VUd1pInavfg0nCwIxdlFp0YzwIgIwIKUv8XVGprE+NdFV1y8vgj6ey1yYdt363ZP89pTHMAAABmA0ZZUI8JIfMFVWJBQ9Qns0CxFWkUiCwQAAAAEgAAAAEwRAIgbDgzKOSe3goUuJoMfORhJbYcktvIYwsjnmnAFv94VVsCIHl+FRPw3Z0eNHuMPz5R1Kxb9Ta74/VDQcg870i1FJeIAAAAZgNGTkJHso82W/TLONtLY1aGS957xLNRKQAAABIAAAABMEQCIECWiovEsPlN9jXNMPWo+01Bd64MW2CXCtE/EIJ0WvqEAiA/lREIQCSsNRRcW2S6YmtQOjNVjmJtqVtJEfwTAqwsnQAAAGkFRk5LT1MHB2gfNE3rJBhAN/wCKIVvITewLgAAABIAAAABMEUCIQCnHqxOk4uPji8apB0iRL8EpwvVFjRoLtOQQanCYOzbdgIgKkHhIaXR7Qmf/2Y2sMniVh0+gmQEQmT3zH6BFYMmUJcAAABnBEZPQU1JRvzqfGkmBuiQgALlWlgq9ErBIQAAABIAAAABMEQCIH/BoNC1jBkGUZh23Y6RYYG4jeWQBg2x+wKbphRW5JBuAiB5Gbyq/n92lwi0UvRnfUOFaJjOaLTgetKt4e2z+QNO/AAAAGcDRk9MqFgPM2NoTXYFW9xmYMrv6HCXROEAAAASAAAAATBFAiEA4v0I+uOb3UJ5LT+/Ifwe/L6yTP4JTrJcWLW4rsImsawCIBbX01ZPe8jB6GcWAo+AOChBgGGpvw54STsaUYHr0II9AAAAZwRGT09EKgk7zwyY73RLtvaddPL4VgUyQpAAAAAIAAAAATBEAiBUHUjQhOiB9eFMqrGrrxmPd6QhCpc+Er9Bslq0+G7mRwIgd6HuOYNFJkc7YqU5YpWOFmkk27kFUPN8p5OEwlgQxSIAAABqBkZPUkNFUsH7bAFfxTWr0zHTAp3namLkEvsjAAAABAAAAAEwRQIhALXGTFod5cVBV2DTZKYBS5t3bLUiz8orVFDpQ9ShOaPgAiBMgPkYIvwJlPxySiItZPErKg0fSXoSAlMmCOiepg9cNAAAAGYDRlJYNqc1V/W95Rlew57KgtKLijbSEUEAAAASAAAAATBEAiBrTEIZpGOgEhzN01/yv1+2pZr9+Lb1fhNif8/47veAWwIgJTKxxn7xWFOwJYJTJPQE7a7UGnjVvbUdk/yDvAvRUtwAAABnA0ZNRrTQ/fyEl675fTwokq5oLuBgZKK8AAAAEgAAAAEwRQIhAO1G74W258xT11DIenYaFnoVEarmR9ApQmUMuA3FNF3kAiBnLEM4E2W+tFVPHWwEESPbYNR/Vl1j1Y1OGaE5tM1aBwAAAGgERk9UQUJwuyOPbdixw8oB+WymWyZHwG08AAAAEgAAAAEwRQIhALqnEUTNuYa6KmBfIVa13xNEMvvsLqqVDRbarqq6kXHmAiAd/N29mQogUYHUO5u+DCVZ1Js1B8gnqTiTSnoqjJLm9AAAAGYDRlROVjJdGA7Dh4qQKK/HsO3O50hsyd8AAAASAAAAATBEAiBRZMHbC6UBVVvPAbgsY19X5dUDiI5o4rEwjS6p7GCNlQIgPXDXvSdUJcJ1P/exk2cdi9AjQmeUR78YaefiDYi+g54AAABnBEZPWFT76HjO0IEyvYOWmIZxtFB5PES8EgAAABIAAAABMEQCIECFxOk6FW0kvRqPTL5wpZ+NQop2fN52ilrvfO3bxdpQAiBO1AqWDG1chA6PVxEy2rvPisfBDcJdYJrRlIg+yZvckgAAAGcDRkNM9NhhV17MlJNCCj9aFPhbE/C1DrMAAAASAAAAATBFAiEAwIqbgEv1iNCrPcLakjNl8kKhsCvkGYBxV75IA/o5zSoCIAX/0I+QmlVABuoSrGOQLPVcf+VEnNVB30XpJYKqC6dbAAAAZwRGUkFYhT2VWs74ItsFjrhQWRHtd/F1uZ4AAAASAAAAATBEAiAJNs4ZwKMes4v/C4b/4kc9QiPQs3HhZqA1rczWPsVXaQIgEkGC7EZFB3WKIAbg1ThwTXEi6nP/YffvS2M+EtzhqycAAABnA0ZYUzQytqYNI8oN/Kd2G3q1ZFnZyWTQAAAAEgAAAAEwRQIhAO4H8t6yBOFq9UlhRQdbQmJVYJcyQuW63sLbXW3OmGF8AiAezwyb4ILxIOYjpJGUbIwhfAi9TCpRycx/vFO8ghN1OQAAAGgERlJFRS8UHONmokYvAs6j0Sz5Pk3KSeT9AAAAEgAAAAEwRQIhAIxvFG153xJEs4Ck4luhLQqOJrWS0tLq2y16/ZoS4QitAiBwRXhsCsIyhyfKZogSQ2HUh/MqYBU+ObTk9K199bhwRQAAAGYDRldU8VGYDnp4FIFwnoGVdEvyOZ+zy6QAAAASAAAAATBEAiBM5SBLjuOx5+JLCyvT3H5JHxIK9qExRoE7I/QH3mwGUQIgLfgI48GHFp+2GSl0ee4wyMO/JIJ9GBQJzNoG+idIQqwAAABpBkZSRUNOWNi44eyonaAU5n/bwgFOqo4XEHm/AAAAEgAAAAEwRAIgNIluk2Qdo4EP4T4qXrzLGt8Xk/v1XqwfQ/FpN/6w6HkCIHXXy26biIomZ5PMVuh2/NRDrWDVOOmUDjxJgiqIPbi3AAAAaARGUkVDF+Z9HLTjSbnKS8PhfH3yo5enu2QAAAASAAAAATBFAiEA2zSdM98m7QAA21aKGNSZEtHUBHCqg/Z0rYk3/WjsRKMCIGy/Uz4We0JuENALxcMGVXDO9nti9E28Zi/zA+pPIZZGAAAAZwNGV0J9keY3WJ7Du1TYITqektxujRLakQAAAAQAAAABMEUCIQC1tSpnP1AVFOWCw0p2ZVap8S47FiF/KRiBS8+8fD67xgIgEhPVBUBsqvrG+DAHxMMHsqqvkfoH6ippfVDQnfd2bAoAAABmA0ZXQjW9AfydbV2Byp4FXbiNxJqixpmoAAAAEgAAAAEwRAIgOqV2kCVssCkZ2Xw/AnIWipImKMDjJ0NEig7p1Ti3aKYCIGk5wktac+VKAyuWSDk+TGEEDe0MsuBXY6ZwebdmHdbAAAAAZgNGRFojNSA26RGiLPxpK14uGWaSZYre2QAAABIAAAABMEQCIDjzIbYrZUxCuUBws0Z/Ynlx7bgM1EInzEPqrrQeL1gYAiAe7KmRXlzpmgHCyUFhssEYDQIKDemOnpmQcIqI9wZKqwAAAGcERlJOVKOuIjBOS+wFMn54EnaLESU7WnyFAAAAEgAAAAEwRAIgVTGvei85HqwQOTlCW5wfelQlT9fuyOXm1N/08dv5LMkCIDL1zPsWNdyINgDuXaGNUSNIZ7EjDajGKO5FdbDOINa1AAAAaAVGUk9OVPjDUnzAQ0CyCMhU6YUkDAL3t3k/AAAAEgAAAAEwRAIgCDGQ3EU7yPYzSBgpK5wXaaGaR3CNO84lr96jFIOeqjcCIHz9uraVUTCnxmF6Wniu/6PIqG0RiuybAE+wwsMIAr9SAAAAagZGemNvaW7lruFjUTEZ9PdQN2xxh2a0D6N6XwAAABIAAAABMEUCIQD3JEt2ZsYGRxylfWO4Rzn5QUeV2xkZUg0jWFYfzZsuFAIgCVj5GPDtpSmIbzIz8nsNzQi0TydJ6Tp1FoR6IQYxWfQAAABnA0ZUQ+b3Tc+g4giDAI2MFrbZoykYnQwwAAAAAgAAAAEwRQIhAODQQoJPfJBcISyqMz3716r/+GbS/KtBWaemTbkp78kyAiB29/I5FEDCJqyCeNJ/yIS+ZMw5a0Ch1tsSchvs7H3w7gAAAGYDRlRJlD7YUtrbXDk47Nxog3GN+BQt5MgAAAASAAAAATBEAiAeL9kGDZzFdkFlBgtpuJ2MkD/l6kUpqKvxb1mkny1cNwIgDqrcYdWca/gAStG0xG8M9DXgPNVeSSRuuxJUFLYkWPcAAABmA0ZUVFDRyXcZAkdgduz8iyqDrWuTVaTJAAAAEgAAAAEwRAIgNXVLA4oFkPYoN1EK71Y8HQOP4eIDmTpduAj32lWxLroCIBPFQD47YgCCH8bTiLH+ObArjx2tw6OJyJGnbIFvwmLDAAAAZgNGSU4d17KHi21Wce1gLmCBiw2aDNHN9wAAABIAAAABMEQCIA0Noj3n2IvvaNfVyHrrbeMgYncFIoRnV/gw45SWbaQQAiAd7e04jsJq7Z0fLgLSN7wzL5soVVjrBDLAXfhUVbLdzgAAAGYDTlRPipntihsgSQPuRucz8sEob20gsXcAAAASAAAAATBEAiBiRz0s4frg5CD7BaRzORO05i5jq4OCeP+u9SRvMAIwQwIgX4SIuJmJwS8BVAkB6xVwRYc6+cFINxPpuXQT9lTWytkAAABoBGlEQUlJPFfEdjkyMVoygmnhra0JZTuQgQAAABIAAAABMEUCIQDclDbiHHB0PrFIAarOvvQJ4ycIKApKX8fuyZuQiG7YrgIgVsx1W6t3nCn18ThdpL6yhNe08UZYrZSztUtyXhyW6IsAAABlAkZYjBXvW0shlR1Q5T5Pvagpj/rSUFcAAAASAAAAATBEAiApQgxkgKD7HyO3EpcrB+cSlz4zFx8ZStAEAHiRWd6nbgIgeq2q3ww+nOtYYPlWFYgeu+EMgI1N5XS2YBy/SV84DQ0AAABnA0ZZToj8+8IsbT26olr0eMV4l4M5ved6AAAAEgAAAAEwRQIhAIjDqq6OQZLdACQEvwvdSew86uYxG36wuXdFuXS8l0+pAiAkHLIRuqm5Lon98cUBTuCKR3ayqjdGAHSbhitM37D/FQAAAGcERlVOREI9gyG+Pdfr/1tsfaLvZhS4VHrPAAAAAAAAAAEwRAIgTYikAQcP+c+wuSj4fxsK2mSrdMBTY77lilTpaOvGuJ8CICBq/4dfIAWyHo/txSw0WGxc8JCb0EKvEGFm8XY5GUniAAAAZgNGTkRN9HtJabKRHJZlBuNZLEE4lJOVOwAAABIAAAABMEQCICznuY2x10jFV90Rp3u10HrRGED0iuw6lWepp7Bp7oYXAiAmqABPjWWo23YIp7zuK94SvutNU1d046LL7Tw6OCHPgwAAAGYDRlVOQZ0Ni92a9eYGriIy7Sha/xkOcRsAAAAIAAAAATBEAiBfDjp8s3uM7A4NHwpgzb4vi7auBovINlde6UT2ptiSkgIgZ4JCe1I/jKVIjKUbVRb+j9ouL3KKOGpiAdQOM4hxcJwAAABpBUNPTUJP/////yuo9m1OUYEcUZCZIXaTAngAAAASAAAAATBFAiEAi07UDxjkJnh6bUDPW81dzlOFYjFwvQaHtd6U53QLTWcCICou6KsaxRJeB4vhXhFZDzvsej5uObot12InG3I0EongAAAAaARGVVNFlwubssBET16B6dDvuEyMzc3K+E0AAAASAAAAATBFAiEA8ZVFz6Htsz2j20T06Bh4xPqsH19rjula6+qHnGgwSXQCIEq6vWQJt6Tv5Sv1owVsitW4LmOmacfZ8HkHLMAxiwZpAAAAZgNGU07QNSoBnpq511d3b1Mjd6rr02/VQQAAABIAAAABMEQCIC+ymUjhRNPAj3EiOcTbEDIDgBwCwSuASaZDc2tIx24yAiBVIHObNySiL6vDQRA0RkRLGFsCds5Lfq1b+BzbKzWsrwAAAGcDRlRSICPc98Q4yMjAsPKNuuFVILTz7iAAAAASAAAAATBFAiEAypFSDa3v1X3ZqZs6kYCqzo7Xnd6xv1pdJcT0xyIXTO8CIFTg0iA/uVDLw6thpc4+TslEMwf+YbE+hxmtrrgIK8MGAAAAaARGVFhUQYdcIzKwh3zfqmmbZBQCt9RkLDIAAAAIAAAAATBFAiEAmctgSTjx5Htxhvoi8RVlYuVItLmcdqlWv7wQtTL/g9cCIAWS1MAd/GYQSoPjeAVzeSvy2HlfdxNxJ3Wq8RsZoVckAAAAZgNGWFQYKaoEXiHg1ZWAAkqVHbSAluAXggAAABIAAAABMEQCIAEKpHUFyEQ7DkurfPTdLAR43F15kG3m4ckV0NPlWF2LAiA8f1tMwfA2HXIeThe9kP6R9vpWa75SKHAt+wgRmk13bgAAAGcDRllaa/8v4klgHtDbOodCSi6SMRi7AxIAAAASAAAAATBFAiEAtCO62Bye9/ArgEe+E/UOFbkjw6ZeuVF9m+MW6kO9gzsCIG4lQO/hdBemvwyRjbBsIGgKUWPS21c55kmwOCcWOUK4AAAAZwRHQUxBFdTASPg71+N9SepMg6ByZ+xCA9oAAAAIAAAAATBEAiB5lPK1xjV5ZbI71mfPb1K8wD/bKjQTmY1KdQNnLhgSMwIgP+LRwIMtTSr8+7bAFSz/MwnxMoV+U6m0IH/hhyyQrIIAAABmA0dBTfZ0UdyEIfDgr+tS+qgQEDTtCB7ZAAAACAAAAAEwRAIgJbNahsAK043GrNZG7064GptqCL5OvT6qsj4/RWfqE08CIBt1ZZ51ejm75vhI/uhEcFmv3X0EPYfKB+TDG6obXbyXAAAAaARHQU1FY/iKIpilxK7jwhaqbZJrGEpLJDcAAAASAAAAATBFAiEApL49QTFtk7Va6XRN7U5/olr87rNi/vfLNEYY4x5YK5QCIDNxFldbSNk5dTPkmEEF4sIKA5+AqwZFydfIlTuuZXSMAAAAZgNHT0LkAAE9+GJJg4tyDqtaf4Fq2CQzwAAAAAQAAAABMEQCIEtQXwv6LK/1Tzq48mvfMQuiiM3vnkV/WcMaIFpk8MlrAiAe2V0cGKlmB8mVepDfvIAw55g+iJtJp2WU7cVwJsno8gAAAGcDR1hDlT4ilFtBZzC60FAJrwW0IOWY5BIAAAASAAAAATBFAiEAtj/WJNRhVWmfylhpWMQqKfyFnX52Ds24af14kB4x5ewCIAW0u1QScKOQ5q4cj8GNnaQowVcva/pMiQO8whPKPcr8AAAAZgNHSFhyjzD6LxAHQseUnRlhgE+o4LE4fQAAABIAAAABMEQCIEEQxWfFROwVCMoWIgboAKO7K0W0Rk5HtbOeA4poHCVRAiA/EsXLk8jRY8tICVjbokt7cDz+MAs/MxkL3TfK1p2zswAAAGgER0FOQcDqYwb2Ng/n3Ktl0Wvxo6+Sx5qiAAAAEgAAAAEwRQIhALrbf3QtKkKscmm5QwFIcTSzEOwcYtXnbBmFG3LsCUs1AiBGaFHioF9tpYmsucbpHHtfwjfRH2PSczuFElb6XY7Z+QAAAGgER0FTR8WEZ7hVQB7z/4/akhbyNuKfDWJ3AAAAEgAAAAEwRQIhAKX6s06RUpqCJFs6zJoi+qPV/FWcpRnwN7F7FOUNZRFoAiA2gH9m+YyV7yYnmqp5ie822sigF2jImzRGum2R8nnhZgAAAGgER1NUMgAAAAAAs/h5yzD+JDtN/uQ4aRwEAAAAAgAAAAEwRQIhAKFt9ysPAIqlRFeuWFw0thK04kYqQRY41R1oq6YJ0/QqAiAggm8Lksp3kKLWQ/4B7w0jprCKzuJC8gooI8+H0yGf9AAAAGcERk9SS1uxYy+gAj4ap2oa6StGNcjbpJ+iAAAAEgAAAAEwRAIgR6dnZEOz40t8dcSfWikXK6SgNiypZhZsyyfIaxD//UICIBeeTn/Ox5uSrd0MKHaCOu5rMrfIkcaqDZifzGbbzq7MAAAAZwNHQVRocXT4xJzrdynZJcOpYVB+pKx7KAAAABIAAAABMEUCIQDyQa8KhYgVjesJzcyfAH4u2MHJj3DYxFODttoSFEc7owIgNRalmBg73OPRmh8QUdKpKeeJT7T9FJow9AYreIyvi1AAAABmA0dUSMN3HUfiq1pRnikX5h4jB40MBe1/AAAAEgAAAAEwRAIgC9W1Q4L7TKenlpZdt8Qj3i7YG1vIkvO+LhrC88TxLpMCIFI+lWr4ca2VUXO/grGdH4hqZTpJtp3gzVTJDT+fZjaaAAAAaQVHQVZFTHCIdvSG5EjuieszK/vI5ZNVMFi5AAAAEgAAAAEwRQIhAPYqW9xq9t+Fb/aEU6A7xtzv8XfFP9dBrx5MsLF1TuIpAiBInvCyYrOgwTC7twpo75ugGsQVPJQnZqLm2drp4j1/GQAAAGcDR1pFSsAPKH82pqrWVSgf4cpnmMnLcnsAAAASAAAAATBFAiEA9MW8VJP3LDjq7FUFKJaXTgC7dO5CYb8ZcqHY2U5gq60CIANm3f8EUAF4kinvjKN5aSpLZFNfV6/kLynOFCytfUm2AAAAZgNHWkWMZemSKX1fCSp1be8k9HgaKAGY/wAAABIAAAABMEQCIBH90xlLIcxwAPKLskdYmjhsnvPJ7PqxhHIRtw1YEi8OAiBirwNwUVH8zk1rdJ2fsgYdfwJiHIMLzZQb0xCh3UFdVwAAAGYDR0JUdYX4Na4tUici0mhDI6C6g0AfMvUAAAASAAAAATBEAiBoocnW8IhvfkyM+kt0ho5IcZXY9jHl0WyahMMFHUbAQQIgYFb9buI8FTda0xZ+CGe5l5mbuHvFHP5CTSosq/49OAEAAABoBUdDQVNIxT9sKsNdMMxH3fPDIIdLId+jh5EAAAAEAAAAATBEAiAuuPkcAgIwNA1xYm3DpfldrNICJeC3dH8EudjsKqz4hgIgFJOixP4E+hI6/W8mVqjrAJtzemgv9Lvh4spscOQ1BkcAAABnA0dFRU9PDbTekDuI8rGihHlx4jHVT4/TAAAACAAAAAEwRQIhAOP7qySbSxibNtP1Gt9w5beA7LPaelk2lIs99M3eXt0MAiBScuHE1RsaAx+WoH1xE4J9xqO9q1hyBztq/L2i0Ni0vQAAAGgER0VFUWufAx1xjd7Q1oHCDLdU+Xs7uBt4AAAAEgAAAAEwRQIhAL8VQd3TtSRd6THzWsmLtab23ooIBmZoAS7IiKhw+KneAiB1vkL8FaGmK2KyJJWXrWL4GvahILtC4ea+Jb4JOHpeZQAAAGgER0VMRCQIO7MAcmQ8O7kLRLcoWGCnVeaHAAAAEgAAAAEwRQIhANwbT3cL/K//KW3Zc9DTn6P1F2Ijwq6n4Az9xas5jqqAAiAP/ytKANfZnbG8O1VZpCw2GrF6PCfjQ4UsEJJ4erx0qQAAAGgER1VTRAVv1Anh16EkvXAXRZ3+ovOHttXNAAAAAgAAAAEwRQIhAKXZ5wzL+Co6hyCXf5lThBBU54mx2PTwqy8YPgy6xF8IAiARaOHL/kHCRz3ufat6ks9OJLi0/Ar7qKZSuNp8avN73AAAAGcDR01DaP7AvMYXJ93sXOziaDAno4NJJxAAAAASAAAAATBFAiEA9lgGV+OiW3Qw4V+R2PWN9sD4fzJOZ0HglN4d5PXouxgCIAl4WIihLxpA8hSu6s0au+0YSTL7Bz/dTefyP9146UBgAAAAZgNHRU3Hu6W3ZVge+yzdJnnbW+qe55sgHwAAABIAAAABMEQCIAiE1f2suqWjY48Gc/uLoO2XsfOpOmbFZqA/43VZFL8jAiA/rDYnZ8grFw8qyZ3VAPM48H0R/Gd2IpdOMxyTDWFARQAAAGYDR05YbsiiTKvcM5oGoXL4Ij6lVwVa2qUAAAAJAAAAATBEAiA7hOjdC+NpB8ZbT4HbUmwVXa9pD+U2arxnYzyzRc9UIgIgfA0KH97Xa3fX2zF8jKcNXc6hIzqZKNXT5nmXnp8ZcxMAAABnBEdFTkVt1OSq0ppA7dakCbnBYlGGyYVbTQAAAAgAAAABMEQCIAzYzVubIxp1t/1P4JozTA/Z6jFTLaWKZq457wo8i1G+AiAsp/FRtc71EwRK11xRbVFA9qDndmBnbqask+SMjW/3bAAAAGcDR1ZUEDw6IJ2lnT58SokwfmZSHggc/fAAAAASAAAAATBFAiEA5BvKOC14eXnVTR34nbSlcQCpR/pz5VnxWme19t7R2LgCIADRiaXy5kNUGz33Riu6I2d/Kn1XIOBe2xZz03RbeRUnAAAAZwRHWFZDIvCvjXiFG3LueZ4F9Up3ABWGsYoAAAAKAAAAATBEAiAD7MxH0vRbYias0KDujaVFxL42QnsiZVNgAuq9yygvCwIgCnpQ/d8kIOKHfhdLBUv8yAkdMFQ7xWgy9+OgcfbRh54AAABnA0dFVIqFQoill2A2pyWHkWTKPpHTDGobAAAAEgAAAAEwRQIhAMyUve8dntafpVOpt+f37b6dx6H95Sz4UqIry60Y56OnAiAVE7k5aheiKL39vGikc+dsGXORCO+P9wQuDPUjF3Ml4wAAAGgER1lTUr6pjAXuri87yMNWXbdVHrc4yMyrAAAAEgAAAAEwRQIhAKuXwEstiwVCC13GQ/LjrCfjXdjgEYresOo+TI8rOy0QAiB7hNnB6t9nYwxwK46B7YgE6wofGiA/P/ZyNDuwp8H5eQAAAGYDR0dDf5acTTiMoK45pP3bGm+Jh4yi+/gAAAASAAAAATBEAiADxrAeugG342Xzl1x3dHnkRYwcgibP/sERln1y0A62GAIgRwBwi5+t+KwGuXduvetqArmJDeCoNJ5OpO4odt0Dnw4AAABmA0dJRvzYYphWKLJUBh96kYA1uANA0EXTAAAAEgAAAAEwRAIgVWDYALJKBV0CkHZYZwNLR4d+KQB8fnwWkhu2vWQgkC8CIC9EE2m7DK5MGrI1wwDClRAyWkRj0wleHfHwoVdKFUAbAAAAZwNHVE/Fu65QeBvhZpMGueAB7/V6KVewnQAAAAUAAAABMEUCIQDNjCmaFyz7O8n2f6gQtIVI8TV6hWh3CBGPpNmrd0xfJAIgI59FOdU5WZ5LoXB2+Vp7QoMJbgam/rcXFgovX4pAGOgAAABnA0daQp2ui39tN+qOXTLGw+hWptih07NjAAAAEgAAAAEwRQIhAI0xFAhWtLONOnGXkGClnbRvnSWL0DZU1dR6+jyrsiWIAiBOqZJ8rIup7zI4wUkoJD8S40LCNzbZL7TWabAV66pZGgAAAGYDR0lNrk9W8HLDTApls64+TbeX2DFDnZMAAAAIAAAAATBEAiAYPKi0o2mSzHg8e9O7H17O/2VkhHBUnd5rzdMd5wzvqAIgT9mZVSpUiV6qZJMdTojt69+RspDWZliJRzCtDdkx87gAAABnA0dNUpuNXzQC90x6YdnwnDLTyge0XBRmAAAAEgAAAAEwRQIhAKeQQNO8fIbuFzg7mveeIOyTsSiXe+D86CZR9JO95NRQAiBOKInfI7oUIiTrr1RBSGTCB9IdZFrZh9iA5o4/zgfmNwAAAGcDR1pS5jjcObatvuhSa1wiOAtLRdr0bY4AAAAGAAAAATBFAiEA0mE+smCTljQ0RiWtbV20Pw9p0qaUutSpcycNFFnwsPUCIFzGiPWMl6TTPzig2BTm4X6gvh/DID18J/LiHys32L1uAAAAZwNHTEFx0B241qL76n+NQ0WZwjeYDCNOTAAAAAgAAAABMEUCIQC6CAA88IbCsvNe7o7FF6km7QSbWdHgj6M2zPMJ/HxhggIgBAGtDfK/iefEmGVujzP8OIwTlfHNVFGlbTblEUsPw8cAAABnA0dDVaTsg8iQeIjQBqN96/dV7jl2bziuAAAAEgAAAAEwRQIhALmAmVfu+PD7l/TL2YNIc8sxWTD+htia4bFI3f9uaZsTAiBT08L6FgEwllU3mGGwBiY5WUHUIsHM7sYzQi5Mwr8r9gAAAGcDR1JUYg+imTBGpT3x82X6P9yebHdjr5YAAAAIAAAAATBFAiEAl5tnVCCzkNROOlKLv+s7LjkwnNN6PjodCUxuIKJc/H4CIDlH4pc8R+tEBrqegDgoSFe6fx7JXRBnv1IhlUgmtxaoAAAAZwNHU0Mii6UUMJ/98DqBogWm0EDkKdboDAAAABIAAAABMEUCIQDtD4MaRZTpiUUbN6PsFPWDRX9WyGJz7GtEU0lYcMTNEwIgLlznJdAaykyYRAB5bXjBXs44uClAiJ1zsVR+SBTvpC8AAABpBUdVU0RUMkKuvNz43kkQBLHJjmWV6YJ/bBcAAAASAAAAATBFAiEA6mwO0UfFFGh0QLxKsgxErV6etYTEgTPrMPVx5VPJG90CICZICWVl1PB0nUOvae93IiuWDuWmG0cATuHWUFjYrvXZAAAAZgNHQ1DbD2kwb/j5SfJY6D9rh+5dBS0LIwAAABIAAAABMEQCIB5dzBkc/Of1wCLNdgA5SDG70ST1y5zq40CSrJ7WP0/KAiBeC33S/wperYBxC+YY8Tdeiyvg4uiOhul11VKjfV6y3AAAAGcDR0JYEvzWRj5ml0z3u8JP/E1A1r5FgoMAAAAIAAAAATBFAiEAnbqLY1t9WOYglxT5OzwB0lrR9sDYAFnEXLGHQ9SBGMQCIBUPIGIau+p1GM5MchVJGHu9eQ5vcDQ90O2GHbEu4aDKAAAAZgNHTVSzvUnij4+DK40eJGEGmR5UbDI1AgAAABIAAAABMEQCIE5WsyoW6yNqYfN7OlkzNzkC+JEd8E3j1qUT8knw+wkSAiAp0MCd7jn1ziK8THh8ak7agpK/Obq28l1XqAmu0PVuDwAAAGYDR05PaBDndogMApM9R9sbn8BZCOU4a5YAAAASAAAAATBEAiB8A3eQTb8B4kC+wSkZoDLgugAR9wGv5wXxsIBCyJXRjAIgct+iUcIRPzm4hPPpJU4YItqK3hXMZpEce+/6jSYYefcAAABnA0dOWSR1UfLrM2LiIsdC6ceIuJV9m8h+AAAAEgAAAAEwRQIhAJbqSvyclIOjesZgaKxLIH7A2jNQpOK+bxJGEpz72nXhAiB1pPG7vfHR+PPIi3IxpsEyQxJpZ0WNphBWE16IxvroowAAAGsIR05ZZXJjMjCx+HGulGLxssaCboingn52+GdR1AAAABIAAAABMEQCIQD1MboYOt4BacTWi05QCtMwxnCmXqwPpy4QnHd69UojKwIfe0+egnRGTBJrtlaMfcqaA2uw9fwh+CF7Th8w9IFKGAAAAGcER09DT+Wp99c4qDnpPmEbm/oZJRVCxyQnAAAAEgAAAAEwRAIgf83BkBxIlKxZSXMYhTyVn+lizLoaEWU3cFYOJ4WhaykCIBLJv7dmfuyL94fNkAG9FZp/ujvVT0c8SkahGVkb8E5VAAAAZgNYR0f2tqoO8PXtwsHF2SVHf5fq9mMD5wAAAAgAAAABMEQCIAdovHY+YVAXD+kwSbONaiVj0z2dsVxZ1c7poINMBwhWAiAq8ARmjozwpmJUtiU7Ik1807vJ1mkoUlMMjCuOgql5LgAAAGYDQVVTFx+c/BNvKyqqFI/Ma2YKICm6sEgAAAAEAAAAATBEAiAfG3KzXKwPgsiG0aM/aVNiPKfidq9oPsoVW9S3ZACddgIgQVqpQvQWDyj8IjranscyAAtkRab6L0LGWKyfwlkI0FAAAABoBFhBVXRJIqAVxEB/h0MrF5uyCeElQy5KKgAAAAYAAAABMEUCIQCpWw/BXPEpXP7oloZb8wJImNsXcN9AK7JFmcZQ4kwv6wIgPKr+SWZefkCNxRKs+RJJHR7h87GGeM9SsX3aJYYWf1EAAABoBE1OVFCDzunghqd+SS7gu5PCsEN61v3szAAAABIAAAABMEUCIQDGDo8Uh6tbsCPVJvcEG+nc1yYL6zowp5ALsk2/p9S9BgIgM23nRjwJEYkO+YowwhnNQUIoLt2YeUs/lUIFKmVrLkYAAABoBUdPTERY6rQxk88GIwc8qJ25txJ5Y1b6dBQAAAASAAAAATBEAiBD+tL9Atep1wciIHBdRISJB0SSNsmDgShRV4PQKNECswIgaw20wIC4bRPWHoYYvfknAci1PFUwCeaHGLy1TdiAARAAAABmA0dOVKdEdkQxGalC3kmFkP4fJFTX1KwNAAAAEgAAAAEwRAIgQUYHRHdFQBBzkybzYKa1pgDHK1lD0+tA8SoXcHg9pIACID1DJ2Skos2aGL7SXwoiHz9liz9Ggz+mA+7tA96GEdKSAAAAZwNHTE192cXLoF4VHIlf3hzzVcmh1dpkKQAAABIAAAABMEUCIQCcl3nE73Fuz0J7GeVXRy32L7DkgYLsF2CJVDp+Mv8E6QIgSJSrniotsyFxUlmnEqvIOLZEK2/VSMshRaiyifKdze8AAABnA0dPTdMUGs0/XcUyB3OW/zmEtnA1I09BAAAAAAAAAAEwRQIhAONp92HLihBFe+jPnvxUlZMKowllCDAfvHgOKL6UhMMwAiAZVYDXmeDUF9QEompb9sdlp9Dyt+oulWZWIfTEtIbr9QAAAGcDR09UQjtfYrMo0NbUSHD07uMWvvoLLfUAAAASAAAAATBFAiEA4l2J8v+5LC94xXSoW4AJuaQT3GEOK3zadXc2TDo9MEcCIElM6ejKTLVXNi68L0tRnottQpItl1UM2yKaHyYhu0KQAAAAZgNHT1RhP6Km5tqnDGWQYOhroUQ9JnnJ1wAAABIAAAABMEQCIBYF2kUqhBpjU00HGI8I9QwUGty1gByLT9E5PPEFLLbxAiAvDCnfvYaWwq71u9tzu/gRPgDw/yeM7yBe2J7cxxHG/AAAAGYDR1VNT1+o8tEuXreA9ggt1lbFZcSODyQAAAASAAAAATBEAiAeNRfBPd2N6B6RyoYwS4TyWSFLmdulmuyLR32vKTrs6QIgDfphCr/gwr8JOnOYS3+NMhZSJR/nrIuEqRf7YqNltH0AAABoBEdEQU9RXX6ddeK3bbYPigUc2JDrojKGvAAAABIAAAABMEUCIQCxOof/Ta1e6NEFZgvuxdjP2MYhzxY3kHJH9xeVXjSDjwIgVTjKEaeOosGfdf8yuyWj+2AG4f0qUt1mKkwPxZwFB14AAABnA0dCVMvUkYI0ZCHTtBCwSusXiTRtps5DAAAAEgAAAAEwRQIhAPNym42wkbbE+udU0Zgo6Nz0axVfuYMYiVuxqbsps5w/AiAMKe8wtv77YLGDyhuaHz/gQR4dler5tf0lACaKJAygowAAAGcDR1JUyUTpDGSywHZiopK+YkS98FzaRKcAAAASAAAAATBFAiEAmpod7SZmopYGYoUsKJ6DOp8T1nftstWQCJ/hEbsIWMYCIGzgpQRu1xURy+wooZYKS2dJ3XZyWh98XUDla/tcAGfXAAAAZwRHUk1EtEQgjLBRbBUBePz5pSYEvAShrOoAAAASAAAAATBEAiBEg94d1lCFgKlXvK2P35PHhhr4QFW3fwmGwprJO5L0VQIgOhBHHJ9lzrq3J9IYcCJsSE/7aPSQelEWjS4B2cvpkGsAAABoBEdSSUQSsZ0+LMwU2gT64z5jZSzkabPy/QAAAAwAAAABMEUCIQCMyFgUWb7H6bJRn7IV5I/vgpcNbLQhM9d4gU1qj77nAAIgU/+vfm9oj5MgPFrBWzPT5uwOMtUC4sx5pYR3nEeeKOcAAABoBEdSSUdhisuWActUJE9XgPCVNtsH0ses9AAAAAIAAAABMEUCIQCK44jPHSxcXpMMpG62zKxYaGBiPZl+OojnzU1J1mdo3gIgXtVCRdW2utlyB3IlvBkEwW2DLFVpghrOoZ9oKVIAesAAAABoBEdST0/BcZW95J1wzvz4qfLuF1n/wnvwsQAAABIAAAABMEUCIQCjjzr1E3IJIPbDtpojiIUEuH3rjKryzXC0xB+QSOzEwAIgKsd5PEww9cPBameCrfIEb1vqksrk9DiijAYv81OKucAAAABnBEdST1cKmpzmANCL+bdvSfpOezimfr6x5gAAAAgAAAABMEQCIBSoabBcR3ALLdAAs2jlnFeeJApaAswfAMJd6hPOZh5EAiBIvvXwyly8Bw1qWL/9Rj21wP8cQ+87HsxkonQCa07i5wAAAGYDR1NF5TBEH09zvbbcL6WvfD/F/VUeyDgAAAAEAAAAATBEAiAcVd7qEXBQAct2iCRTlnc/RtrKA7/WRATItE7HAg/cogIgacii9pv1fhJ0q58n4NkYprfeTM3pFEdn0XWMS6+nOKUAAABmA0dUQ7cINdeCLruUJrVlQ+ORhGwQe9MsAAAAEgAAAAEwRAIgOSL/thvygH5z/WaA6M4HVQfT9DWUmoiCta6F5bxhtIECIAiWR2pLaRZrqb2daZoEnLEzzWZBabVmBTcoH0/4f3dEAAAAaARHVEtUAlq62eUYUW/ar73NuXAbN/t+8PoAAAAAAAAAATBFAiEApA5TI2Vb1KApGk0pFL4+2Y1KByOwYwNZhO48GqCT1OQCIEgxgxfN0U51Yi+xjRDQQcSFyM2qThDUXe43RwHYU7NdAAAAaAVHVUVTU73Pv1xNkavAvJcJxyhtAAY8Dm8iAAAAAgAAAAEwRAIgfpHgL6ABAjzFVuNMn8AktTWEkS4/aNTX9uHIu1B4BX4CIA4P8CDbcG1pw8evXRl1Z0RtlcnxX2AWuW4L5CiLntyLAAAAZwRHVUxEmEc0Xei2FMlWFGu+pUkzbZyNJrYAAAAIAAAAATBEAiAUztoFBWqRSSvV8orcupLDt6xXIptDmkzv5f45QHW3qAIgSdfgl/mEMl9+Jqz4qBBVal8wXwykRVvSNkTXyQDjU8kAAABpBkdVTlRIWTaEtYHbH5S3Ie4AImJDKf6xarZTAAAAEgAAAAEwRAIgDtXZmWJuipaNT4q0I7pDv7jECvk9hkp43VLrVCTlw5ECIB6Hn7foZ/KqgtZNySTicce9xFOTELcAuUqo12BsKCRnAAAAZwNHVVD3sJgpj3xp/BRhC/cdXgLGB5KJTAAAAAMAAAABMEUCIQCaLbhCNECQfpOAxcUbmMSSqoIPj3tGCFHI1Va5pdGqOAIgPbasL/8Spl23KXga701yzqCgzZseUgaiqjnXGev6rMkAAABnA0dYQ1jKMGXA8kx8lq7o1gVrW13s+cL4AAAACgAAAAEwRQIhAOgQmcZixjHEbHuM2BRL4JYthr3Za934FpKNpT7r44cRAiAd0lfFQkXsATF//WZGP7tKQWJQ0wU7XIkBjnHgjcFQdQAAAGcDSEtOnmsrEVQvK8UvMCkHes436P2DjX8AAAAIAAAAATBFAiEAr9NKfP+z+xqJV065N/zn+yb6uFsV9VLZe9qsyLyKnbsCIHYO0zFLKQdM6QBKRq27rI/cvA4cMTGkL9KXPpNvdlb7AAAAaAVIQUtLQQ4p5au7X9iOKLLTVXdOc71H3jvNAAAAEgAAAAEwRAIgIJeNE7IUQ/je6SaGmDUISRgWKFhEHu5+iZ+Sz6u6WyUCIHKTrA0DRh7C6XxuqrnzOOf3ZkbRRIkIH/8KQ0IfGcoOAAAAaAVIQVBQWVpWfijb+iu9PvE8CgG+EUdFNJZXAAAAAgAAAAEwRAIgGxLE3VaYby/TPAg34/Mn/Gi4htSnUdUFpCj7iQevdhACIFAYwf5jnHgIaD2kqKqXKYtVqu2b/95D/XypMIF1ceVSAAAAaAVGSVJTVJkDpM1YnajkNPJk3q/EBoNkGFeOAAAABAAAAAEwRAIgeL7pQmIz8cTfGWNfU05Lcy8xfMrwASemnbN7YfexbR8CIEiPyBEVEZqXk/RSlvMkhiGdNCwm2Z3hZDURu6TcKPBYAAAAZwRHQVJEXGQDHGIGGGXl/Q9T082u+A9y6Z0AAAASAAAAATBEAiAmf2ixvhZ5N8kHfS4HiHCi67vFlQD4DzMpBf6B6FiGpgIgMALYczKOhZ7UMtAdZA4/y7MXUsmXFq9R6yaEsag4eTsAAABmA0hBVJAC1EhbdZTj6FDwogZxOzBRE/aeAAAADAAAAAEwRAIgaBP6CJetVa7QwKXH2KL+9aaCtXQOFW+vY/vj8CnWQXoCIHSLiw63z2WBCzOEQlSVqLnCngKyQY1Ioa6tn5taNLSTAAAAaQVTT0xWRURskDPnUW2CDMmizi0Lcyi1eUBvAAAACAAAAAEwRQIhAOGSZdM2P+112kiGe7csqQF7YCjeO+16J0nzsDKJufwYAiB60iZVIx3s2BDZuGcQh/31Iof+fEFA2tZI/HnHzmjegwAAAGcDSFROS0sdOJ1PTggrMPdcYxnAzlrL1hkAAAASAAAAATBFAiEA8l+KcK22pYpEMTErnNtVD6yCishMPjRLprYy2RpC5uwCIBR6DS0SSNFyXDQzr3UDSlIofMkgb3Dd0sdD5FE0zjlAAAAAZgJIQuJJL40qJhjYcJypmx2NdXE72ECJAAAAEgAAAAEwRQIhAK0VoJaboldWTimCIFG1ONXZr8UTgdl/lpodPH5bG+AzAiBk7JRciAkty+/qYisD/eJ2Rd8JBiMgJb4d64ASidPJTwAAAGkFSEVER0Ufo7yGC/gj15LwT2YvOqOlAKaIFAAAABIAAAABMEUCIQCs2kaY5mm7ZkZHS/RvsgENZzPM68BPWp9zVAF7ZR2FgQIgduF5EqccZgltbLDA/Vq2aOvitR7QnFQl/zVTJIi4/1YAAABnA0hER//oGWvCWeje3FRNk1eGqkcJ7D5kAAAAEgAAAAEwRQIhAOTTtt4W0WXUO2K3G4vS7wLs03a5H7aBve5QMgjhYPSRAiABEJn66CEZBd+eEKl8KsVY4EKLjhIBVzVy5icQ9mDNHAAAAG0JSEVER0VTSElUHZzSGA/U6XcfyihoEDTQI5CxTkwAAAASAAAAATBFAiEAh7jdSk5+uifm8EVO6LWWxqe8Ucj3oyNo7YmTTiv2mlsCIHNDKYeHItj5Fo6MY3m2gx9Ef5arsAxvoIJ9D1BpTtQXAAAAZwRIR0VUeWi8agMBfqLeUJqqgW8WPbDzUUgAAAAGAAAAATBEAiAVWDSRLNyNhLrgsrqXc1ixWued7BVH3zx6YNyQxTNmvgIgHcweL0dmjPQWqmpkEltRpOdYzRC1vwInuoX8F/s2IxEAAABnBEhFREfxKQRz4hCyEIqFI3+817brQsxlTwAAABIAAAABMEQCIERq9qwLZJ83fuM9/X2cf/IHiAMFP7sY3cot/TBeyj/2AiAPmvFNVUYSt6/3JOkCAK0kymTueOTCbCCd5isQ5rRI6gAAAGYDSGRwhFQ/ho7BsfrFENSdE8Bp9kzS1fkAAAASAAAAATBEAiBSbRZ4lktY+aX4qM5Ie2wmHvCxZBx17hAyuNSkANYGkwIgbKXsMSZsRlxfwnGk+owGN7uPf2HtexQlI9p0ZLUNwYwAAABnA0hkcOn/B4Ccz/BdrnSZDiWDHQvFy+V1AAAAEgAAAAEwRQIhALzSqiWRdUh2ySQYQAD/akTCYodU0ewHl+8F3aWA1WqXAiBrgA3e1X5+B6sfdtGSImyxY8TIp3a1b9srrc6dgfgliQAAAGgFSEVHSUNYS8E8fUEcAMAaYugBlHLeaHaEMAAAABIAAAABMEQCICaN9SEiqP010KnJe2aKq+dFAIgHqYQ5zbtDKSxcsmGhAiAyBpAhEQhe2NkV8Pu7plsxbVzLCvgnwaJbVNTP8i6/KgAAAGYDSEJa404ZROd285uSUnkKBSfr2mR65mgAAAASAAAAATBEAiBynZA5DzqX6tPuz6rY3FfjCz6Eu3UffiNinv7AAOJRWgIgZbxAw3n9ie1Qd7h2f9TuN9Lbh2Z+ESANmXer2IHdhe8AAABnA0hMWGbrZderjpVnug+m43wwWVbFNBV0AAAABQAAAAEwRQIhAIwOFF3NIgfxpCrxMDqMOMqxivMnL3yA9Beadl3x2rnyAiBAOGcZJUbCQpxJr54/8Yy/n/q3/4vTL6X7jTz0ZNI8EwAAAGYDSE5UCKuumvZxOsFB2F4Latglu4XzkiAAAAASAAAAATBEAiAWcBVptSEJuNqg1p7PnrpS0l/W3L6WefiMFC72c8CxAwIgQaOgKk6lCAfS6F8mZs/qcw6qngltk+ju3QK0a2AvPsEAAABmA0hFTRl0eBagMP7NozlMYGLN9rm02w4LAAAACAAAAAEwRAIgKqs/AdjaPEw8Xaif0AT/v52clwJKhkGTigWfnOt1cXoCIBtuHA1nq7pyqr2YYsuQ3fqVg5B+l1GCOFoOqmHJiQrBAAAAZgNIRVru+fM5UUKYxqhX78/Bp2KvhEON7gAAABIAAAABMEQCIEWRkpmZ1nl0lSFjiLCzMlaF/RAWgjjioR8OacoWtlxNAiAUZXQ3UyNYIKZV/Gxp50mHsglqoPbNtJC/QiVbpkoR9wAAAGcEUExBWeR3KS8bMmhoeik3YRaw7Sepx2FwAAAAEgAAAAEwRAIgB9mqgNJw29ZkR/fppllUyEazTId/kOrHksRFtEIRQGECIAMt2zahXQ5MAGBhBYuhKkeNQRUtKtRUyf4j73JGAjjQAAAAZwNIRVJJHJoj24ViPu1FWo791qupuRHF3wAAABIAAAABMEUCIQCNYhRV0WShqwsu8WwFP1OJZplH7nb5EWiTl7EcyVGq5QIgDDAppadXCiX7zWpoKv6aGZmZk2Tvp2WX5fVYg6Gn3OYAAABmA0hFWCtZHpmv6fMuqmIU97dil2jEDus5AAAACAAAAAEwRAIgHJe5h8cjBBIjhICgmLNKDkhXmX1g7eZJN7okn5E+xmMCIGqNpeYyEyyfl8B8Gkg8OnxUm1HuBa0pR0GbosEp6MwQAAAAZgNIRVnpyefh2r6oMMlYw51rJZZKb1IUOgAAABIAAAABMEQCIEKNkSaXjYEk42anYXm5N6HK69NUYsKN/4/vWUa0DcVzAiAFIBcQ26GcTfPqvPlEzZllgXektwiz6xDaZCUMBSF1cgAAAGYDSEdUuiGEUgocxJphWcV+YeGETghWFbYAAAAIAAAAATBEAiAih1hyfTwIWU8siXDaU58lfpzaThyjl1RcJZ7mwNMeogIgT1M9C+ysvKtdgzeKTIL1vjH8VTVZK/IXT7iI/4fMuDQAAABoBEhJQlSbsdsURbgyE6VtkNMxiUs/JiGOTgAAABIAAAABMEUCIQDLP5+nlIpvTYD4i3V/QuSXoL1GJEq81OAjO1+7laUseQIgJjPWbzaIC9YWMmHqdnY9AEZm+XNP6EI6afCR+xx9MnkAAABnA0hLWYislNXRdRMDR/yV4QnXesCdv1q3AAAAEgAAAAEwRQIhAM7PqxusLdzISnommAP0z9Ya7cWPwtH6t0PzTRJJZWPsAiArLbuBP12Yyj/BWwRgO+60zI7PF1ANqdXADL7mIKXsOQAAAGYCSFYUGrsD8AHe3tmgIj1P8m2SkRe3LgAAABIAAAABMEUCIQDlahIfJGp3g8frZSwMCJCK3aAAJGxl7uImpRA00q2WLAIgIItOXgYEY0dbZPNGgRvyYCN+gbJHP34C3zPmCYopb4wAAABnBEhJTlRs4h5fU4PJVpHSQ4eahqYCXghwwAAAABIAAAABMEQCICQ4MkmxEC3GkLsMp+Y1vU8KQmaAk60qbUy9E+GDQLEqAiBGhd6HywrdWyDqEn0ERcPwxICOIRNbxCoeBtxG1Rj7WAAAAGcDSFZOwOuFKF2DIXzXyJFwK8vA/EAeLZ0AAAAIAAAAATBFAiEAjAOu2D2hqzZS8x5tSbP2FyRCJeZCNzKkzBuNkpnVBl8CIDZOrbBiivxiukf2SSSCECj/jCJJm8OjpeQIUNbKO3wgAAAAZwNIS0cU83tXQkLTZlWNth8zNSiaUDXFBgAAAAMAAAABMEUCIQCr0P7elVDGOF9uOyiNRUGlsHigTXqWzqeAWH8VEpAEqQIgZbpa5bcKpvtqn0LG+NfVXSgB1+fQZFNv2cQOBJ/XXmIAAABmA0hNUcvMDwNu1HiPY/wP7jKHPWp0h7kIAAAACAAAAAEwRAIgW52c+QaE/IJ1UhAERGtgvG1U14VjKVSInmb8X9t88/YCIGkzM2JM+8TPAQ/CXche3He8+9tRwaDdGd2PsBE1IcgNAAAAZgNITUOqC7EM7B+jcus6vBfJM/xrqGPdngAAABIAAAABMEQCIGCJA3AYnkJVX0n+x24N3HVpb14Oztf1iWWfN6esXDhLAiBlqvqenzTIzaksULjzouolWvcUn0jAIv85sirz8JW4LwAAAGgESE9ETLRde8TOvKuYrQm6vfjIGLIpK2csAAAAEgAAAAEwRQIhAK06LzN6iHxMmfhku9G4snTlPV4Psyqxsjnyqd8zvjvYAiBXOEm8b4r8+5FrGMjiEBJjyRC74t3bilq8nZHGSBpPOgAAAGcESFRSRd6meEWlHiRGHV/tgITmm0Jq89XbAAAAEgAAAAEwRAIgKpMwf/nT9T7d5cjuFmdgBoneyn8KhtwB6/1fXCeAjSICIGLnM2WAShOEe67hjJDO0pxSF4nE3RxBNl66RdTUWJIiAAAAaARIT0dF+tReRwg+RgcwKqQ8ZfsxBvHNdgcAAAAJAAAAATBFAiEAjY46Egu7eCABv0kav07dW72C6bWaX0YTd05iz5R36SgCIHW4Hho0pZUoUAztJ35Tlnf5lEk+EgQpGAOKcM5ctsJJAAAAZwNIREyVxL6FNNacJIwGI8TJp6KgAcFzNwAAABIAAAABMEUCIQDvax8/dV8Mw0f0AloiIbxsY84iw8ZSAswBXX2teMDNKwIgZROy6CXlJ0SswdYrs/GsdjUl+ib3tHQAjExkcFpSBW4AAABnA0hPVGxu5eMdgo3iQSgrlgbI6Y6khSbiAAAAEgAAAAEwRQIhAP3pGwPX7/Jb4CYXIDiZkV7k7q4FCUg+qCaqC4FFL4KCAiAlNkjAp5r8Pf+frwz4WD/uddSMApSBMgEBchYkt/3BpwAAAGcESE5TVJyf471gsiqXNZCLlYkBHnjyAlwRAAAAEgAAAAEwRAIgX3vt8o4aStRkMh/bwH+ljQGEHZSs4TQzoT26p77Cmw8CIHEAPZCyi6//ozzTx/bKod2bnUCtNtl65BXkLFDVWrNhAAAAZwNITlKE9j9I/RREYdQpWZqDzsll5HALmwAAAAgAAAABMEUCIQDvPC8DAf0fiEoL0UsmnPBKQh7XLTyeaij3XdkTeDgPZQIgc1iN/9u2Dnbz9sGnCsPjolK2bWZ34fNhRO+wUywn50cAAABnBEhPUFL1WB3+/Y+w5K7FJr5lnPqx+MeB2gAAABIAAAABMEQCIDVG8Vtjxi3CDZ9pl6Nl6myXFHj7bnc8p9JO0mfn/jNEAiAUtFNmIuAJ+YranwOOxj2tTGmkeM9/m7szIKgLcZ2RdwAAAGgFSE9SU0VbB1FxOyUn1/ACwMTio34SGWEKawAAABIAAAABMEQCIBO5tZ1I9OM+PB3SPZkbla1hYKX5coJzUjxb1pOSpKmaAiAZBUybSC02FtFwWaUiYnsn+N7HVSJs/jdK9nlUxQHxeQAAAGYDSFBCOMamgwTN77m+xIu/qrpcW0eBi7IAAAASAAAAATBEAiBQDdz/PrQ7BwfryMoCSkvu2BRy2OYjFZgu7kTyanpS5AIgP/APnwE/h5zxeTioxtC+Y5XUVi+MqhOsDDiyCi9caKMAAABnA0hTVFVMILfEhr7uQ5J3tFQKQ0Vm3EwCAAAAEgAAAAEwRQIhAK6xKtI8mfplMJZRA/foH5KAGDQHt4KAiSQy74bwZQXvAiAq/oJ2GsHvoKYqyd3aFs1dyKfX9rQgfew3GtnlfBmaPQAAAGoGSFRCRUFShut5FJW+d323YxQqLFR9ERJVT7gAAAASAAAAATBFAiEA1fnB/z/uaS2d67BGhcClUiaGg8Voaap5aJKagVLk2PsCIE82sYtpZlbiVXMzxDw0P9wZczE92FTRJxQ9KZJ/DP57AAAAagZIVEJVTEwNXiaB0qrckffaQUZ0AYCiGQ8MeQAAABIAAAABMEUCIQDrCCZotR5CGFzXchJBe3xk++AIHDWCi9cKnMs23hDv4wIgF/khIIzFW/jxdtAz9MeFAge7tbzIpQSp2NMHZWoEL2YAAABrB0hUSEVER0UwCBhv5uO8ptE2IQWkjsYYZyzlswAAABIAAAABMEUCIQC6Pt+lrMNbVo2eQYcvSmsb0Xo04Ai34c+Ec/omOs6wWgIgOFR3Q64qBB0slLL57kn/IfOyRDCr9Dodza1qZfCLjmYAAABnA0hCVN1saLsyRi4BcFARpOKtGmB0DyF/AAAADwAAAAEwRQIhAILwMf9zhKUjBNrjTm2FHF9PFwBZfIU6V0FXfrZmYUo4AiBcZOt2Da6d8F9z0GGYqYmj4QiAI1olwX0U1TSgTXz11QAAAGYDSFVF3P4YvEb1oM0NOvDCFV0ry1reL8UAAAAEAAAAATBEAiAAgNx4YKaGbuhniNwo0sUqUVei20rM2ESY1ubp/fTzYwIget5yK8ZbLC2AuN8GDYeW1u8XaNif1nu8UP0U4Zasq9AAAABnBEhCVEMDFutxSFsKsUEDMHv2WgIQQsbTgAAAABIAAAABMEQCIEMcVpHJeRfMfdjKMIuEMCyqlOsa6KeKjqOpzrM7Ph9AAiBajQXDeMr2t0tY6nlrvasJFbeWTR6iSyRGfdKBY2L/VwAAAGUCSFRvJZY33NdMdneB43vGEzzWpoqhYQAAABIAAAABMEQCIGUNlWkjCut8LCkDhw9X4rMYOYgbZotLwfJO/+KzD0F9AiAYIvwGV7EqkuMpb2adJqkVgZ4XRYx9GmjmvbOy8wUhQgAAAGYDSFVSzbfs/TQD7vOILGW3Ye+bUFSJCkcAAAASAAAAATBEAiBj1POWUyMNOtkcWVUpj2njegZW0AWQLHH3qej441ZNjAIgAO1M++UW3568GHrOyKWP/O2LBxEpWU8f45EydjrLNWUAAABnBEhVU0TfV0wkVF5f/suaZZwiklPUER2H4QAAAAgAAAABMEQCID51+m/wI2Y2J9UP6zxX34wACwcc6LI6/akHglS0StkVAiAnheJL9LOoGvhoCGSzX60pAWRj79qUGw6EBl/FJNVxKwAAAGgFRU5UUlBbx+Xwq4suENLQo/IXOfzmJFmu8wAAABIAAAABMEQCIDEUnkWG0NTpGfKQrTcb1ravQkxMOPXU8E+l16Q1lg01AiAwwYDCrAd/ZiFypKK7mhY8z48UoHf5RMkiDtreA6J+RAAAAGgESFhST0vXBVauP4puxsQICgwyeyQyVDjzAAAAEgAAAAEwRQIhAIe9MNV+doDKkc58mh/eGszInwGpYS1K4ePRhfrNYs3gAiBNzLweyfV/q8HF3T3PLj9OD0acnETufuUQBXx9DZpYcQAAAGkFSFlEUk/rvfMCyUDGv9ScaxZfRX/bMkZJvAAAABIAAAABMEUCIQCz1VEco4JD2NxBNRQwutvURyIPwaCkBTwRBOXKQG2KpwIgKnqj/TWBGyn73krgGJNUAPmf7IFDjvVKJ5jAeTCo8jMAAABnA0hPVJr4OWh/bJRUKsXs4uMX2q41VJOhAAAAEgAAAAEwRQIhAKxd+7Ixk3ZpGYk+m7bdU/Q9wPKsq/h0Hlp0MXiJ/h9vAiApmMK9SvDzZ3T1gWC3BM7/gnTijrepWW8VtXrFvTemtwAAAGcDSFlO6ZqJSmnXwuPJLmG2TFBaalfSvAcAAAASAAAAATBFAiEAva+PQIFalYZKJDWLEFp6JzfPgVFFwd9Svk3u0TKs/2YCIFsIug6PdDLUauE0CnLqmfJODdSaJYT+gsUKOSR83IwjAAAAZgNJSFTtqLAW76ixFhIIzwQc2Gly7uDzHgAAABIAAAABMEQCIB+Hs2JGInYtv4QzvAixfD/D8DFIXwxn2ok+vIQC10rUAiAx39nUGyJ8IsfR/yOo5QSW2CSMALroFq+k8WCWSrhWAgAAAGYDSUNFWoSWm7Zj+2T20BXc+fYirtx5Z1AAAAASAAAAATBEAiBnqCtb/tAFjEfqG8yuSIUx/bfUurAxjFiy/Nf+/DItqgIgZ5zkLNMDZAnHz6BeWUyUI/vcDHJAtC8ciKOybWXz0P4AAABrCFJPQ0syUEFZDj3jsOPWF/2NHYCIY5uod/6010IAAAASAAAAATBEAiBVXO+KJyxG+O7GmRuKuABmgUEaCnCqWISaw/ZuN8L7MQIgWyKE1R8OK6BRhD21hZKYWwQaYD5X9730Tdppxn8kbp8AAABpBVJPQ0sywWtUL/SQ4B/MDcWKYOHv3D41fKYAAAAAAAAAATBFAiEAvQq/VGzd4S5As3XGBWKQM5u2Dxyh1oxsazmPJaNaCksCIDsKFslrXLZzOg+CxprJBwl4cceXaMSLoLkouefS1Yx8AAAAZwNJQ0Q8INZ7axrgmF+ROrtzl7q8L7saHwAAABIAAAABMEUCIQCqx7UBBGM9Cw6NMPjdoQ++v0Hg82nx8L6op41iorFwcQIgImvb9q8iPKNn/Rn9oi0Hkz4BDssUg3tDMYbj+WL0A4UAAABmA0lDToiGZspp4PF43tbXW1cmzumah9aYAAAAEgAAAAEwRAIgEJyne9BmcfwW0EEG9olGn9UfBCqtRZbh8tgkT6VDe6MCIBFIAho0EFgFjQSrU0EiAU2rD78MH3Tm5HlsjjJQIyaXAAAAZgNJQ0+jPnKb9P3rhotTTh8gUjRj2cRr7gAAAAoAAAABMEQCIBQtZtuz+Axikn4gP0JOtHOT6Uz0gBJwtrgfENcJ4a7JAiAF0dLtAISbbnSooETHSps1hayWXPTmOQy5meXyudmpUAAAAGYDSUNYtaXyJpQ1LBWwAyOEStVFq7KxECgAAAASAAAAATBEAiAXMXVvceBRJC+Dtgj0WPrNtfKJAk9vawSFxwcgsXCCFwIgYO1KWbe6Sd9mWH5KqLZCCBd2nvzqBG6m/ea+tRscTLIAAABmA0JMWOWnwSly87v+cO0pUhyJSbivaglwAAAAEgAAAAEwRAIgEpYMOSyuB3NTOFodjAgRYUA0kznTLrmOLY+j0ihngMICIAnaaCowCkiKtuxXqcLzhilEJR2s5hBVGdvTqsu0btMQAAAAZwRJQ09TAUtQRmWQNA1BMHzFTc7pkMjViqgAAAAGAAAAATBEAiBMe/MuS9WZ7ogeboEIwk95sKUT9wDXVdDZaKXt/f3ZIAIgY+0mhi5uB0aGEQx2ffo6V0lR30WNVh/fS7bU0VMKhFEAAABnBElERUGBTK/UeC0ucoFw/aaCV5g/AzIcWAAAAAAAAAABMEQCIESww3iglwjCc2AT9/dGfnkHOsEE16dUt5ExHuGPl2gDAiBZz746rsyMcyUxRoAZ3kgtuhykqA3hxUVsS1DKwFDc+QAAAGgESURFQV06T2ISRJgJLOZl+GXgs4/29fvqAAAAEgAAAAEwRQIhAOjspR3f6HCJFgmCaSu5pCwyWVFypSi9zgPKhq+wmSQfAiBLve6hVIAHIEGe+9yDFq7ad7kUMzQBpon0iyEy5MMWQgAAAGcESURYTcwT/GJ+/9bjXS0nBuo8TXOWxhDqAAAACAAAAAEwRAIgFULAgfjJt+W0CS0udU6KfiYeePAt1oOSbQr0drKmkiACIBzoswOWYY0s3RGmhR8JElaoA2X5uqac6tYasUKKlcOwAAAAaARJREVYtwUmghPVk7j9iNP97/k6/1y9z64AAAASAAAAATBFAiEA4xlSfCnJxDE2EMw5AbWL7u3FrhcMEKSMjosbKKxQMzICIH6XWWiy5SOE/562Et2kmQegs3Ff5N477ZQntQxF8AtJAAAAZgRJRExFh1dzeEr4E16g70O1o3Sq0QXF054AAAASAAAAATBDAiBAU1IcHdJIaYqlmlSI+UqcF5hv8w/Sespiee1AODx+cQIfLAUM4Ps118zH/ZxOTtWxnDCA4nuQrTpQjwD0PnaYDAAAAGsHSURMRURBSRDsDUl4JONCvLDtzgCVkUKqp2bdAAAAEgAAAAEwRQIhAJ1Fud/O6t3L3lKwxxIon1yGAqZb+wkODHxmDjuhPeu4AiBGa2dsbyjsfCnm005pUlCK9T2YOj786Sb6vhTjD4yiTgAAAGwISURMRVVTREPrZqzD0BEFawDqUh+CA1gMLl05kQAAABIAAAABMEUCIQDGJLwH1qSDoqrBCamd9spwuzS6cYfVGViywmiLyXSKeAIgeU5oddzLXUNhPbfO1aYD3MkbRz6gZw5BaDZxezsxBFAAAABoBGlET0x1kaMJ32i/Q7pC3RGwNEIgomACCgAAAAgAAAABMEUCIQCL64aOhwYju8BKAvpGTXTj2TKEwreeqBTMSZ1zVlgHRwIgdZKLVK3RjuKwq9ulWaHaFOk9JGuI8iduJPTaZNBSjF8AAABnBGlFVEiFmpwLRMtwZtlWqViwuC5UyeRLSwAAAAgAAAABMEQCIBKh6IQKpqznRQmWOMCPlS/Gfy+xxP9VhqgAph8xSIBTAiB+xIBUdQyWe1/VT91CnLb+xzfldPwPVlKqxgCzlArFUQAAAGcDUkxDYH9MW7ZyIw6GcghVMvfpAVRKc3UAAAAJAAAAATBFAiEA7k1zTayDRPKvmFn2y80+G7nGVkfnL3inrXvVLE64qD4CIGM4r/8TSX6mWwX6vNUaeR+YElwZnkVHQOyyqGDXvVw0AAAAZQJJR4qI8E4MkFBU0vM7Jrs6RtcJGgOaAAAAEgAAAAEwRAIgXv1drJKI8+Gwj5mWZhMeNcbhfi3wQ2SS5y3tXMpWrz8CIEiCxUNZV3GgNoVjHhYehF2w0gk2UdirWQmkGCCYlhGPAAAAZgNJSUMWZi9z3z555UxsWTi0MT+SxSTBIAAAABIAAAABMEQCIDMYmRum+lcRY/HVTln478PfSilkhToWE9iEIBZEGEDDAiB0wbWmNB1ckkxuiXTlIi85gqAhPfYATjyNGDpOwgRhsgAAAGYDSUtCiK6WhF4VdVjvWen/kOdm4i5IA5AAAAAAAAAAATBEAiBPUjLaYX8u5qCtfAEiTYlBajY6tfD7fo42Nrn7KRNp2QIgYodpeGjs2kmgo0GqwikASJZsaMm+6imMjDiax4z73XIAAABmA0lNVCLl9i0PoZl0dJ+qGU49PvbYnAjXAAAAAAAAAAEwRAIgDk/DVOq9QaxlkmgK5+0xC0QhZUHF8BWsIyyqD7a3GS4CIF3BdlGQZeAKB2duwwSI6c1h8JDabP/4tPVMlP6glReiAAAAZwNJTUPjgxxamCsnmhmEVtV3z7kEJMtjQAAAAAYAAAABMEUCIQDl5fY297HyVXBUcXv6dxYQYA1Go6A+fu5d1YrNuDYUZwIgRCG+pI+StyW5uDfkXSGvwlBLGdjrnTJKvyNpHU4vWQYAAABqB0lNU01BUlS/4DcHrbdbR4rdmgGXgFeAP0gORAAAAAgAAAABMEQCIE1zOxd9rkmrewDrHxOfPF8LeXWeIq0xx+VbsYUOCnsIAiBpto7IBcPe2KevnuEHjHh9Dr5pYeqr35r6PqaW67aNWwAAAGgFSW5CaXScEtmxIjEwtkEVTY09s1+R2ByN/QAAABIAAAABMEQCIF76HnkrQGZJlgh5hepo6hv15v9OmeCxe6JKgdkW9rUWAiA9X1hFtbf68QQZY84T6eP63PSeQDYTxjs56riIyIB1JQAAAGYDSURIUTbJioCBHD9GvdqLXEVVz9n4EvAAAAAGAAAAATBEAiAa//q8ZBC5vXESLI2aNp7/q4w/vOmtw4ydeAfxvF76zgIgW6HC7Z1bS9exvbtK2e+eswDskf4bcXbIajzB+cUGoKsAAABpBUlOREVYCVSQbaC/MtVHniX0YFbSLwhGTKsAAAASAAAAATBFAiEAkZ64FN0XWkYjfiv6VP3XVdxXnwsCYYzZgEynGimQ6+8CIEWY+u0Nif6M7CkvKkemMDwJi4CODF981pigs0d/9VgEAAAAZwNORFiGdysUCbYcY56qyboKz7tuI45fgwAAABIAAAABMEUCIQDKkOb9ma8FWzL/Z+1QBPHWAYVlN1+GBuXUjCcEuOQcuAIgJKoUcQe6JzepgJ/F9kBuEOMm1s/+j+B8PI7wKnLrmxQAAABnA0lORPjjhu2oV0hPWhLktdqpmE4G5zcFAAAAEgAAAAEwRQIhAIo6gFhi/6QyQjPvr93REdaFqCiuvBUI6IrixrupUvlVAiB3HVJdmWysELLK3llVLz/0b6lcqb5tXgCHY4TuoxwIFwAAAGgESU5GSRWXUTI6ngQV3T1tQqEhL+n0oISMAAAAEgAAAAEwRQIhAM4X0a0C6w0NOiQjIZtZMXnAJRIgVv1WP3A1VTYOQl2nAiAgVxeXJ0sEmrV71wx6uZ4G8JK8iW282FrlZ71CLDFi0gAAAGgESU5GVIPWDnrtWcaCn7JRIpBhpV81QyxNAAAABgAAAAEwRQIhAPhWKBqGXOPKuXv7XBLpVRalOf81jJG2Bvbq6tP6yVJ0AiA1TmMRdyrfIYShgIJ57aIXVDXf/k5y+sM55pJxt7S49gAAAGYDSU5K4os7MrbDRaNP9kZ0YGEk3VrOyjAAAAASAAAAATBEAiAqbylvifieTGMCtLyLIXpBnyjNF2oomNP+O7Vic5xYbgIgRNqvbq9s41OguaNPJ2jC0JcotKABsNiGpbWa3sO+BPcAAABmA1hOS7yGcn53DeaLEGDJH2u2lFxz4QOIAAAAEgAAAAEwRAIgKQv+nEmAld2W5Xx7hy5Crw9Thueft1OwwZ7nUtBBM9sCIFcOPXuobV+X/Zs4x+72OGgiHr6Yi4uz31bPiJhN21QPAAAAZwNJTEv3hGgsglJuJF9Ql1GQ7w//Tk/AdwAAAAgAAAABMEUCIQDQa7fLoyvCWmWZcHk+/fNWrv2mC+Rarymt8/ZwkXat7wIgLC0gaEUfPA2kU+2wVwZSahXrbcw0vqDW/FtbFIXAqscAAABmA0lOWAGNfReTUPG7mFPQSYKCDjfM4TqSAAAACAAAAAEwRAIgZMKcBRC67BYpZ30Y99lH1X+n4CNhASK1LTg/Cx5OWAgCIHJgdWrAyARVUXgpQWGBkWA+W03joN/UhIaT0zRrNoAwAAAAZgNESVTxSSIAGi+4VBpDOQVDeulUQZwkOQAAAAgAAAABMEQCIAv1DrtScUkvj4XN/hvqRm0bCSR7qtlbK+Gki66hOwYMAiBye2T+cpjIuoPqOuaGKLmM9F0wNnH9vqX76DicYFVfwgAAAGYDSU5TWy5KcA37xWAGHpV+3sj27ut0oyAAAAAKAAAAATBEAiBGrdxnKq/9LKYSVd/Jr+W7kCMTWcQMdbcnyB7dKTMPVgIgR+MkAkL1UQTs/8tByiwoJ06omYxGHhcba765U5SaB8AAAABnA0lOQheqGKS2SlWr7X+lQ/K6TpHy3OSCAAAAEgAAAAEwRQIhAL0grTqXJw9ntp4+xgCq8HHZ87ryRTU+t5ORLXZMJ2KqAiB16qmp26cLGIZhY6Nn8HFOwqLB3kdfd0epo4SjswVzqgAAAGoGSU5TVEFSxy/o491b7w+fMfJZOZ8wEnLvKi0AAAASAAAAATBFAiEA14176WLmTJglhw4iwH72pq/VBX9svFD4W2hohCBaKxsCIDZfQ5+mk2WjlYxZFofXbd8YVyvO/eGvx96NK1D+ibx+AAAAZwNJUExkzfgZ0+dayOwhezSW184We+QugAAAABIAAAABMEUCIQC/59sXWVzlcUDV8H3ZZZaVsgGO9tnc3JNZQIfXL21HKAIgfV/b9p0yXOQPr+XqUcMDg9bwz5KVQ9KGw1DGa1kgFGgAAABnA0lTUtSik66LueC+EumesZ1II56Mg6E2AAAAEgAAAAEwRQIhALz90wGx8c8Bqdw6GNi8vaiyuv4X/cZ5YojfYr7TKMwyAiAO7+YVuIevdsqG3MWWear+sT6GlHgzG7zznTkXWbotogAAAGgESU5STUjlQTtzrdJDTkdQTioi0UlA2/54AAAAAwAAAAEwRQIhALNiJo4+Ol2jfknllGTGZ3NzBPz2m/JVWonXrEwJgABtAiBAfK9Xthm9NN4zwZxeGlS0LgxIBWgvz3cqs4cPCzBqzQAAAGgFaWJFVEhntmyZ0+s3+naqPtH/M+jjnwucegAAABIAAAABMEQCIB5UTvCHd/h3BWYo2AmCEhJUf2dtFwgX4wzyFBnPdln0AiBiYR9KueT0YyH157Eiz3MhT5C/0ctC5BFgjIDRyZydSAAAAGcDSU5UC3ZUT2xBOlVfMJv3YmDR4CN3wCoAAAAGAAAAATBFAiEA8RfyJMyGvJVVtxXg62qvqx7fv+WeYB+f2cxDaRlAfYwCICXg6/bQzflqeAdPeMLWBNWXiWo78pUFYcTAa0ASmuCiAAAAZwRJTlhUqABsTKVvJNaDZyfRBjSTINt/74IAAAAIAAAAATBEAiBmOylOmU4johhVLP0u2RsBl2ypXnTmoXdvubp/cJRgFAIgHCzg8uwsAMkN6EulTmhElaZdkzFibO5CSuUmQETa/XYAAABnA0lOVuzoNhfbIIrSVa1PRdr4HiUTdTW7AAAACAAAAAEwRQIhAOqGvNZHK1CbrEn7qM+poUH9CgebP6ONOO140xQHtDLfAiBxlqjvvufrQ/o8SVIY9vUWnPHQYnhPCzYVAQO6JJMkswAAAGcDWElWRPJiYiJIAn+OKo+xCQxM+FByOSwAAAASAAAAATBFAiEAyzdVUi8ds0+bJXXPyLfPDI8ZCs/YXa/p4wEIRjkB+ekCIHX/oKrkNnlpHvnKcwbhYslPKrUDMe2L6wkM8nB/GTZxAAAAZwNJTlZB1deUMakTxK59aaZo7N/l/537aAAAABIAAAABMEUCIQDwg1z8iEXybZy+7Ei1WObTFFtXVmyFmruMCT1ynGDNBwIgWqIUxrogbbChCQG9lTkzrdMh+RKU59+rPqZkPbTzk78AAABnA0lGVHZUkVobgtbS0K/DfFKvVW6omDx+AAAAEgAAAAEwRQIhALVgTNdcLAc5Tz7b0GMx9iJ1gSZL7dqZGtEtTCL1T26wAiAPiiN8gqIJDol1RIhrPRSe0SAXmtpNNwQGpTfhAhwq8gAAAGcDSUdQjfG+D99xYab/VsgYnX4QNYcnqWwAAAASAAAAATBFAiEA1LY8cO06Ukf1fi3nCa8EjxKEH1c97gU4vlpSAw1D8LMCIAag8qthN5yUr72Yh/lxugaUnrBz/wXkRKWXq+39POy5AAAAZgNJSEavElD6aNfezTT9dd6HQrwDspvVjgAAABIAAAABMEQCIAjU7/s9TeLVHJh+9+qhuSjRDI3OlcICXXUlBOtA7MGMAiBRXS2xABUPTUslfe8dKJOJ3qWQTeoyBKPsASosjei39wAAAGkFSU5WT1hEhVYdt2YU/3J/jgo+qVaQuLFgIgAAABIAAAABMEUCIQD38FtGD6qnBxT1AfuHP12uGOc44oSPiWTcXMb4jFa+HwIgQd/5mFc9Fsx5nPdOYdhISiLNcbOjdazpyQbKcCmDsqsAAABnA0lOWLvH96aq2sEDdpxmy8aatyD3+erjAAAAEgAAAAEwRQIhAKl6ZvjDp5i1aIKp44N3hTK9ktt69g07rabAjltUPbKYAiBkg6mGSxs1xVvHXg8MSbUBdKdSiyoE9txjZiKIa4UD8AAAAGYDTklBWcJLSQNnbLuzqPEHfvACnmQZzvIAAAASAAAAATBEAiBwAFJYQALv9YoJfIsTYacpuGJeSY4WT4AL7g7i9pZWDAIgTr8uHv18OM9CJ1jqWkVKv4VxhqmhbZCZsaem3S14zb8AAABnBElPU1T6GoVs+jQJz6FF+k4g6ycN8+shqwAAABIAAAABMEQCIFol+zNWpAw9CTp62TNqV4pYclOmcRQXkoWh8rYNqoPEAiAand7Ho6XW0iNY/ecRzF6XA7ic8yaAzZgX/A9X5tRBjAAAAGYDSW9Uw0sh9vjlHMllwjk7PM+juCvrJAMAAAAGAAAAATBEAiAOJ/lfxmWk6gH1zc8l16zTKAfv8HCS+rgtXS2nUbfDQwIgAwOJ6AnHrhkIL4L5p+kyu9xLwCEU15AnQ9XX+XtYhVwAAABmA0lUQ15rbZq62Qk/3IYeoWAOuhs1XNlAAAAAEgAAAAEwRAIgabvqNfygpXH2w5nzCdigQ8k+JPsmW56E1uf6BJsLYmYCIHo0qq2fLKzxA/ODWE5iMZYwBiGNgC8ATKyXUvdP2OvKAAAAaARJT1RYb7PgohdAfv/3ygYtRsJuXWChTWkAAAASAAAAATBFAiEAvOYWXsZawN5si1/c3u+4jYrxosZ52DrcEzh+r8D1fVUCIHDKMnhQmF6gsRI2bET42wZL4O2Wd8NuMDtyogTcVsx+AAAAaARERUFMyGo6yaSZeSZjHmWOYyNeyLUmyX8AAAASAAAAATBFAiEAoE32Q8/IPGwIWY/rWwr7v52oFlDDcTptipj3ONypOgYCIBs9Rp+9PpNlJZifmIHVmVkDPjt6CeIQH3GFxNlsqZSNAAAAaARJUFNYAB8KpdoVWF5bIwXbqyusQl6nEAcAAAASAAAAATBFAiEA+pBMoSL64Lb9vJCxy30pFAKjeN/kGfEKroa9rumCV+ICIAazpbZ2obR2ZVaZt6DvQOmuqXKp9w/zNI9J8yg6KEy1AAAAZgNJUVFoqdkv4ZOZ/uvtapoJgKfqdjgHTAAAABIAAAABMEQCIH6glsc3ZuC0XFbg90LdaP9Jt1sSr+vYqZ2KLB3qalT5AiBEOX0lgvMK1kGwfSY7xFD2Ml7fmMx/ypM5aZW+skzfLAAAAGkFSVNUMzQM9xOxHJuYbsQNZb1Pf71Q9v8tZAAAABIAAAABMEUCIQC2KS6IohDQOhYJqD0Zi58mUZW1HOm3TMrV7GN6wWtN4AIgG9hzlTHRA2z/59oF2pbszOXcLfauXBlNmBgxIcaAIlQAAABmA0lUVArvBtzMxTHlgfBEAFnm/8wgYDnuAAAACAAAAAEwRAIgQ3N/JP5TcB2nOqliVMp/AS0r9yUvzlk7xfF5U3NsGZQCIFTdD4cnAvo5RdRAzljj714Wwg0DaR5k63ORYem+bDPgAAAAZwNJTkck3f9ti4pC2DWvO0QN6R8zhlVKpAAAABIAAAABMEUCIQD+kXL29i5uK+lw70et+3omQ2gkxc40o3avhPVB8/ftTwIgNQROKJKGI68F5IAXyvnQCQOuaI6kl0AqAijL/cr6PXYAAABnA0lWWaTqaHoqfynPLcZrOcaORBHA0AxJAAAAEgAAAAEwRQIhAOjmr0W1+cn+17RVIBeEAQWgs8CMULg5F2g0vjsVq6OWAiAA5W64/wWLUTe/eEJbQH8VPgooLKPtnNvBAJ7n+mEgEQAAAGcDSVhU/KR5YtRa39/Rqy2XIxXbTOfM8JQAAAAIAAAAATBFAiEA8qvwyPq3TtBD7v+5qAdzFP5d0GJcRxyIRhN7CW4S/RgCIAHKLvl+HD20/bEz4onBx16XcuY+5sJP0ejBY2vWMIYEAAAAZwNKOFQNJi5dxKBqDxyQznnHpgwJ38iE5AAAAAgAAAABMEUCIQD6TcbQzSs5wykPjU/yLMevW0vQmKbqkzOPSKng8hp/MwIgRKPxJnncYu9QSShUQa6IdaLg0CIRB6HH9lnBhu741OYAAABmA0pSVIqcZ/7mQVed66BJKMS8RfZuJjQ6AAAAEgAAAAEwRAIgENncgiOwNELuzB93e6zqEoDQxVk0a+pj7jeXJFYPoZQCIBW//Q+e9XPjvHmdMeo8Ldpex2U5Vqrx5FXP1ncDXNJmAAAAZgNKQliITjkCxNXPqG3krOepaqkevCXA/wAAABIAAAABMEQCID/mSZXCUGu1Db9yj1wpPWvIXo2GD2pmPhxqzVnzbLeYAiAOYdnRWRpCSTnVA0i2qkinwTLqCob706r2dRIPhJbNvgAAAGYCSkPi2C3H2g5viC6WhGRR9Pq8yPkFKAAAABIAAAABMEUCIQCRH4EGdLxCSOHHnzG85PW7XThPtu//VUMKmvHC70obGAIgCtdqxSq7Obun/70YTvIYkdPN/GB2hktYe9zxuGiya20AAABmA0pFVIcnwRLHEsSgM3Gsh6dN1qsQSvdoAAAAEgAAAAEwRAIgLAhtIHQQaE607i/ONqR0Cu4rAHaB5MqAvqgc4RAGQuQCICMywyT/qIdChV6AAWoTpPIUgzxGbRrJDjBsme6qXjajAAAAbAhKZXRDb2luc3c0UDNe1Ow9tFr3TzTyyFNIZF05AAAAEgAAAAEwRQIhANJ7w7KSnKX0Oc1WGRlDfw7G1L9XCRS+FXkXKRy0qmujAiAsuI44bfVt7C4lDWRGMizZ+KSWWfm2mQFn6/WBlpGqmAAAAGcEU1RBSx+KYmiD13JNvVnvUcvUvxzyAW0TAAAAEgAAAAEwRAIgUeRB7wGdzV01QqtA3wbJIBmxH3CCIa8jH77SjPUJICoCIBwjI69ZZJlUTZm8FBvcAJxxygy9dGC88H6U233ENHdPAAAAZgNKTkIh1aFOYl12fOa3oWdJHC0Y4Hhf2gAAABIAAAABMEQCIDA8pX/LFy9cltTilQNot4PcnzkxqgHAq1OLC7fyqagIAiARuQZaI9lBesKvjmYOxVNVEOM14ti7hVCrC0YWBPQqCgAAAGcDSk5Upf0aeRxN/KrMlj1Pc8auWCQUnqcAAAASAAAAATBFAiEA2GXHrs0JxSTcDIQu3BYOrWa1R1hr9pQxTvEXMMTba9QCIBWJscGLYucmv4LiG83euc7hjWYH9XjBvecOem/43EyRAAAAZwNKT0LfvJBQ9bAd9TUS3MObTysrus1RegAAAAgAAAABMEUCIQC78gmdSE/pUlVRwsiBsIT2VphByMeGrE8SEqfPYXdzpQIgSzVhClFi8ttEJL0W7Wc4BamNallJMbk3PutyejwyntEAAABnBEpPT04XSJft085BQISgCdItsxx7eCZADQAAAAQAAAABMEQCIEOTPbm09i+AV9tVzWUfts3ji4ozGihjKIF8GukC8f5IAiBRxStZAnCzWblHuBMEgxtHJzNhBstQ9iIUecm0LQXhlAAAAGYDSk9Z3eEqEqb2cVbg2mcr4Fw3ThsKPlcAAAAGAAAAATBEAiA6Zl30jQ0hCtzF2MVURowtA/9pAiSXDi5PG59+pnwFOAIgBSO5YrTnY8Lh1w0zNiWbWF51Q/bVBcQMJOkU/UVLzowAAABqBkpVTElFTuZxDgzaF489kh9FaQJwew1MSjMrAAAABAAAAAEwRQIhAPUinK4QLioigTQMCJmJgImI5+3V+SfnWFoWuhED5w9eAiB1dzdEmZRnPbkBy0a117SXy2GsK+hDbyJUqbrlwRLjjAAAAGcDSk9U20VcccG8LeToDKRRGEBB7zIFQAEAAAASAAAAATBFAiEA7AnW5GfzfNcelvbn1knL04M/iswIh3MwQVF5uGalUkoCIEfU3hllYRZZBP+gXXhyF0HIe5DAxd+P2JBRrRLGsdPSAAAAZwNLMjG52Zwz6i2G7F7GuKTdgW67pkQErwAAABIAAAABMEUCIQDJhkxKq9Gh4Z1qSh1edTErla+vL2yg1Q29JAnH61DsIgIgbGsCeAmnWtpmU8fTuUCyxZlvEcIb0cwmJvB3SrOgB1MAAABnA0taTpVB/YubX6lzgXg3g86/L1+nk8JiAAAACAAAAAEwRQIhAJcDUUda9nPK3GJNL+qWMyUC+yUg5hvBfjBMK64uhSaFAiBgi6hGIyBfNiytmEM994tIvvj89yuNEaKvLB/b+3TgRgAAAGcDS0FN+Nn9SdBRmnuT886AwsBw8SlOrSYAAAASAAAAATBFAiEA8UWk0BHohhDFcIoDyrqa11rW9RtwlRmAX/AKJVf+xE4CIBWHGf3+YIJBuGdP0taBeZXN/5DGEMnYd/N1GXteZb1FAAAAZwNLQU4UEENLA0b1vmeND7VU5cerYg+PSgAAABIAAAABMEUCIQDZJz+tklK1pnmb2JESocdGn0jqeo5pJ37dG7nWYzCy4QIgaqYzKgGGkW6NFb4iGVQJBKEWfMDbrhZBG12yZ3O2C6kAAABnBEtOREOOVhCrXjnSaCgWdkDqKYI/4d1YQwAAAAgAAAABMEQCIHlEyM0EnNrBMGUDRnnn+MXScgrjH1y2OJ1nr0wfsZBiAiAPznTVedj7x8jjhfUe2OMjFe8eqlS6S1rnCeYrIwaLAgAAAGcDS0JD81hmhBB84IWcRKorLg+4zYcxoVoAAAAHAAAAATBFAiEA+bccJmSHbqXkT6JMJ0ztCFBLPlbtPiSefWyYjspwexgCIFGjJJJ4VcFBpKahBFTcnt55aRjjmKI9oxS1jZVR9s1MAAAAZwNLQUnZ7D/x+L5Fm7k2m0556evPcUHAkwAAABIAAAABMEUCIQDFH68leNjM/u8vhh60Rm84K7uUzECwENPkokFIaaVM3QIgGt+7T9OSpS3Q2ow0kLtY21EqYZ8oMJSuGOxt6ICMP8QAAABmA0tBSb1kZ6MYmVkEdM4ehPcFlMU9Yo5GAAAAEgAAAAEwRAIgM1aIAidOU1EltKyvC91FDVEuFoab58MheoZmhYI1V1QCIFII4zjBBI8enlLicvf326/NRkJacAV3ILig76tO+drvAAAAaQVLQVJNQd/mkfN7YmSpD/UH6zWcRdVQN5UcAAAABAAAAAEwRQIhAKY2OvnnE2ejPbJXwZuZv9dWkFnT2V7lDdyWFa11i5joAiAo6v5lNoiubqHfp9HKKPXwtlTKMJr05hZVMauG8/wHTQAAAGYDS1ROSR4Tb/f/A+arCX5Uc0aXu1gC/BwAAAASAAAAATBEAiB+/2r3l9hkQdT6//XlK01ONW7MP/KMtt7Qz8q/sDqVQwIgaHBtuat8gtbtZRb/Vqo+5wmbr9ZLEty9cPx+NjjoR0oAAABnBEtQM1Ic61y1fE1OKyQzZBuV3TMKMxhaRAAAABIAAAABMEQCIHxpp6qj+Hg547mPQ6SHN3+56b8psJWuzVWRi1XwcgL1AiBDgywJuo+PCP2wwYHFh9HMsqb9sDBP1af2qMKkG5x8HwAAAGgES0VFUIXu4wxSsLN5sEb7D4X089wwCa/sAAAAEgAAAAEwRQIhAMLQzds9scM8+huzNflZdsv5NOJVQL4pUXEr0weQKOnQAiAsbRTkpuBM8YBTYgyHLzsi/wx8ixpu+ICmDCtU5+kAHAAAAGoGS0VSTUFOeEGypI0fbnis7DWf7W2HTrig9jwAAAAEAAAAATBFAiEAptLOTMQ1E8cdVEMPffbQnBL0SfkDJOLLG7flU2kbj+sCIFXwlDn7jyOZkEUw8eZKKQBynd61SvGmyESLxAMtHXAKAAAAZwRLSUNLJ2leCRSa3HOKl46aZ4+Z5MOenrkAAAAIAAAAATBEAiAAsGv1Y/VdoGsUK2gW6CRJKkhiZz8phCqotG8jp9y+VwIgSTCUZOcSP3nfW86tBmorCvkpll09ncaDoyTtoy+XCwcAAABnBEtJQ0vBLRxz7n3DYVuk435Kv9vd+jiQfgAAAAgAAAABMEQCIGhPsXOVaQUfOJkrWu4IdLNgu5BINW+Dacq9P5UeB+woAiABJgMQ2L/i9EFHjT7/0mCeJ+XQRsenBp2No0+RZaIWxAAAAGYDS0lOgY/GwuxZhrxuLL8Ak52QVWqxLOUAAAASAAAAATBEAiBpynS4rD1MvIk3ovh5lq016ARMJo9BFca0/FWCodXBNQIgMpWfOrEJkUzjuFiqxKzZSxuQrEJ6CSLq8LxKk5/0WBQAAABoBEtJTkRGGFGd5MME80RP+n+BLd3ClxzGiAAAAAgAAAABMEUCIQDHRpz/QcFatr+fJpg0sCJTQ/gIAoCt0m7Y9ZiIOrvTBwIgU8PNR1Xf0JZHVZYu8YBFQT4xZXkikskuuMEl3luxC8YAAABnA0tFWBaYCztKP52J4zMRtaqPgDA+XKT4AAAABgAAAAEwRQIhAM0E7674W4gudYW9hKm134WLUrTqcdrm8o+J/evLnxTZAiAtzCitnJ5OPD7jo/4nwQF8LUwyx9oh7YOI3lv+2X5sRgAAAGkFS0lTSFWitMCvGcwWps+szoHxkrAk1iWBfQAAAAkAAAABMEUCIQCPxiMn3D8kPCNoBkytpAptr3OtJWrTWP/vNwoQPgeZTwIgfL1PF/MET7xw2sjfmzEb4S8f6bI4SbxcDsQ8NJslKZ4AAABnBEtHTER23vIRKypWaHgvZ1RkC5gmg+rLywAAABIAAAABMEQCICbVHC3tKPILyo/UrWLbgaQRczxLwtcwxjamGDXWip4/AiBxptzvrEJfyJJqerN2Sa7ur53GD5lWJXJvVAzr0dHuYwAAAGUCS0MNbdn2jSTsHV/iF08+yNq1K1K69QAAABIAAAABMEQCID6W0d+TtoZHKHLPY34MGU29NgwP3K9F+bR4/Eduo2HPAiAmnBVQ1sAZaJ+6km69sotSZt5V6DZbbfwkSO2DbbVsBwAAAGYDRktYFkhNc6wI0jVfRm1EjSt50gOfbrsAAAASAAAAATBEAiBv4QlfB5tNIH7r7a+59p56WFuqX5jrML2eT9+kqNa7uQIgRLA0E3f/pUsH4+VXcFZtFwP9dlKyrZ7+FLvM0GZN0koAAABnA0ZLWACehkkjtJJjx/ENGbf4q3qaWq0zAAAAEgAAAAEwRQIhAKhKTeBdk0UxLSRI8Icvs7ljUzZJ5IzfNmZx8IR5ftBNAiB/NqVvBQR2XbOB4CPwNBVBV/TUYCgSqW35gbruDhjB1AAAAGgES09OT4UKq2nw4Bcamknbi+PnE1HIJH30AAAAEgAAAAEwRQIhAJy6Lh3ksyiKZ8CVu/RSXZ+issUM+3hehS65KvzIq8yrAiBMU7zzOpS2Bq4A3RjMaMteYI/Vq4XCaIb9BwZkCYHlzwAAAGYDS05U/1wl0vQLR8Sjf5id6TPiZWLvCsAAAAAQAAAAATBEAiAoovl2TJAz74Psq12YaBIymrrFGL8n9fSZ302fcX3RWgIgbWsl3A3xz888vBBjP+FnrD3oBJW4r7DxLaKUqYkkfXUAAABoBUtNVEJBK91sm/G/OWo3UBquU3UbmUa1A9oAAAASAAAAATBEAiAS4ZHG8HSxyAzMJokDml82reBVs64jgbNUGmDwdtP+9AIgBqOtSJ6VPExxT3fYIjorUqS+LQ9KBr07PbFLiZh3XYkAAABnA0tSUyKaVptnPZCM7okgZYrnvK1o59AdAAAAEgAAAAEwRQIhANJdC+i99fYz3YO7a+VQFDlDDa+G6DW7wGsYbMgxZT09AiAmXMM6aqm8nzMxO8zE/x1UNmg336ZsosPMdQMK1+9b+gAAAGYDS1BStcM/llyImdJVw0zdKj76iry7PeoAAAASAAAAATBEAiAoY1ww7ts06lc+1+TFABHtT00qIZKS7zN1Hp50fGBYZQIgNXvVdjZuxeP3d//FWj66auueKiLO1Q1gG2/Go7mDDiAAAABoBEtSRViViPwkqXlvvYcJUaLNVMbx8ksufAAAAAgAAAABMEUCIQDKhBnGr9EQ35Ql8SDo5JuFUcVS54kZ+y/vPR2fsJYWbAIgHH4tgwZwmxzDOEIjlU+ZIG07aTNNKP21nITqn9eS9tMAAABmA0tSTEZOvnfCk+RztIz+lt3PiPz3v9rAAAAAEgAAAAEwRAIgMW0YDkqYdMR9F3jbkcAxvXNQ67kNUUQKKdObaazz+C8CIGsEWrEu44bJq+BP/4LNHaQ/hpNyyzXnjLnd8rQ5HXlOAAAAZgNLQ1MDm1ZJpZln4+k210cfnDcAEA7hqwAAAAYAAAABMEQCIB0ahhlp5QnMWqqr4o0w7Vc4rNnSRyc33h2bqjkg5FV7AiAF3O+hbP1nvUBslHDDFNuf4TZ+2PFmVIIBNFzWgbLZ8AAAAGcDS0NT80lg2dYL4YzB1a/BpvASpyOiiBEAAAAGAAAAATBFAiEAipsWIuZD7Apa3qJ1fO3blKkcKNcRJU6uHwOK/QzirzQCIEqiYOcLMiJDHdMXSUEQERNMyJesElVwpnu91cvuKjXnAAAAZgNLVUXfEzj7r+evF4kVFie4hngbpVbvmgAAABIAAAABMEQCIH0o5OAZ3/dVWDVSNX1CW8dh/JnDgGJ/2pIiV20V/TnOAiAhnj54d75xma97hbXL4B19pvLfnvILsVBmsAOFnfuH8AAAAGYDS1VW9w0WAQLPeiLB5DLWkoqdYl25EXAAAAASAAAAATBEAiBSKSEcl5LypJtNU1RyaL8igigrlF9yflBj2t0wyLavYAIgQFfdHXWuoTpFJZxyq3nth8qdDbTPhxQWG7FvHBiWpWsAAABnA0tHVPzhDL9RcdwSwhW7zKXddcuupyUGAAAAAAAAAAEwRQIhAOLkAQKRo/bZDsq80HdtnHAVfi8iKgji7ot+RG1ewrdaAiBZPtp5H5bBc5fvYB5UD6phkpxbwXZ2TIyr0cpaCB5ZwAAAAGYDS05D3vpOinvLo0X2h6LxRW9e3ZzpcgIAAAASAAAAATBEAiBU9BaajEqzwwbu1KiNwBGCBh1DhtsX/vwqncp69hoFkAIgdxndMJWa2DAHwdMs1CuYlQ29hn9M/js48I/E0pDchPgAAABmA0tOQ92XTVwuKSjepfcbmCW4tkZoa9IAAAAAEgAAAAEwRAIgGdwtnL/xv+Vsmn4VYy7RLS+ySbB3FwJTDzNV/7iRnyICICrXA6lw4MjvHqsFYDboXSusFNqPSQ4ns9+JuMQoidlZAAAAZgNLWUxnttR5x7tBLFTgPcqOG8Z0DOa5nAAAABIAAAABMEQCIGpc5OIzwh38XB5wtD304hfxnaYSui59m0VYbfRa1ZZ+AiBDm9UChbisjyzxkUU2hrrnW0y4tV998eQb1f/T+q5qLAAAAGcETEFCU4sOQvNmulAteHuxNEeK366WbIeYAAAAEgAAAAEwRAIgCkVN8BK9FKh1xoos0s4ZhWk8tMPZE+BefKS1I0fP+6sCIBZFiQ0QihG2eKnnMa67hr+EhHKRdGXLPjWD4bCfDv14AAAAaARMQURaEofAUJ35pHXvF4RxqyEyud/TErMAAAAEAAAAATBFAiEAjmbJU1NzfAx4k5Rb0yCuK/atPtBmKKQBaAimhUO43uECIHiGiRTzdGezQ0qCp/k0WXlhqvMO3PcPw7oTVxdDitmmAAAAaARMQUxB/RB7Rzq5Do+9iYchRKPcksQPqMkAAAASAAAAATBFAiEA7cRruuyxM6j4oFQ3Le7UN7LJW8lvUVfANOzr1QK+kf4CIGuYNcL+tnawzsvdyxeXyaPcyIY3qTTrbbcvFz4xQlLgAAAAZwNUQVXCei8F+ld6g7oP20w4RDwHGDVlAQAAABIAAAABMEUCIQDGLfXmKsKpCuBq8lG/jHhzi9MzX0SuBqeYsy05FF+OGgIgIO3MexDCXALfbO60jCLnhQ0WIizos2Supkbk1e4/GK4AAABnA0xOQ2PmNDMKIBUNu2GxVki8c4VdbM8HAAAAEgAAAAEwRQIhAMKIEK/Lcwo6TjE7+I2qxZ2W4Ri5DTGPMUCFfsYl1EpBAiBjer/rXllATTExzpQbTIVNgpti2Q3zK2yRPPhZ2JlUygAAAGcETEFUWC+F5QKpiK929+5tg7fbjWwKgjv5AAAACAAAAAEwRAIgGRO+mbH5GkHid6ao5GJI4UsmHY7R8X12o3582mO3ps8CIB3LNgEh5wTPDPRxTCCVAEwanVwT/X2Sp2oN/jV+DAjkAAAAZQJMQeUDZfXWecuYod1i1vbljlkyG83fAAAAEgAAAAEwRAIgMBJoql9WwpXjC/7sadP9LkJ4l58lB/RRKj7J+NmjsT8CICyaLZ7wIGq9F9F0fchu4oJhMXhc86n4KVb3JugtRSftAAAAZgNMVFijk0c9ZNL58Ca2C233hZpolxXQkgAAAAgAAAABMEQCIHuE6G0tdEixrDaeO96gZfetc2wiF1U3Iwa6n1ajQUd5AiBAfYTKFjNeyNQoGdCfGW+BMsffOKuagD/Ho7796Jp2AwAAAGcDTENYA3pUqrBiYoybuuH9sVg8GVWF/kEAAAASAAAAATBFAiEA/gSvmVv5KDzT5U6mdjI9Lige88cf6DQhYHOUS7xm/QkCIEMHj3FqPtP/O52CYXhXiwpSAWIuNyqNftIJ8Bv6lOJTAAAAZgNMRENRAnkcoC/DWVOYQAv+DjPXtsgiZwAAABIAAAABMEQCIBTnuXhcbNvw9Uoot3mRKkg8Az6kbOBR/F1U1PcHUaHNAiBZ7C2vZ60cSySGk3gJMGcFCRlKfij44OIjDG5PAW804QAAAGgETEVEVVsmxdB3Llu6yLMYKumhP5uy0DdlAAAACAAAAAEwRQIhAMwr0Ss7lZmpDbsFhnFPaYfFrnXytFnFvmns8rty1HauAiAuY16a8R9wXGStbirXRhcvZwZd5Q5U1A0f2Qno6qYfygAAAGcDTEdEWQYbbya7SpzlgooZ01z9WkuA8FYAAAAIAAAAATBFAiEAhZKxg0fbsMPFRzvNaTb9mZx4Q0v4dKtO+EGKW846ewwCIBWhlQHXs2G2nVa6qT1Xb2r3/b+0cn3sFhw4I2jYd0ykAAAAaARMRU1PYMJEB9AXgsIXXTL+fIkh7XMjcdEAAAASAAAAATBFAiEAtPxAZJHTK8+VBfnT5c/Y7UhU9Hu5sK+6VTdmXdDFyP8CIGBuURfjj78J58JkaJyjnWj0V3UA9hAHWcVHwKgGAK8RAAAAZwNMQ1QFxwZdZECWpOTD/iSvhuNt4CEHSwAAABIAAAABMEUCIQDwzX570oGLCd0zlhSVjGMS4VaM9izgp5xR2EWXDu3lAgIgDodAuUbacesSI4+i5BVkTzXXAvbcIypucEeW/uh8B5IAAABmA0xORAlHsObYITeIBclZgpE4XOfHkaayAAAAEgAAAAEwRAIgCeXeQcGMtAZ1TH8eIyFzc5Xll3BkRM7d0nUBNCQ49r0CIDavXggto7VVf90MBi+aoYTeHEFkR51ZKDg5/w+k5Ze6AAAAZwNMRU8q9dKtdnQRkdFd/nv2rJLUvZEsowAAABIAAAABMEUCIQDQZcpbEAOm7vtquD2agyiZIPu3M2v5g5HKZ34BD48X3AIgLooOtrCqHB6c6ccZx95rbxwoecp57wV4TQwlJI13dnoAAABqB0xFT0JFQVI8lV41ttof9iPTjXUMhbOu2JoQwQAAABIAAAABMEQCIEEo96Uz/mnT06/Ow8cTU77VKxNhzrYSiKUwXvDd1pzfAiAHh1f8dD7byvPCwLKPk2LOKse5pUtWdVKyyeQcOmCtiQAAAGsHTEVPQlVMTMJoUwfvK4hC+/Pe9DJAjEa9BCD9AAAAEgAAAAEwRQIhANnrVJ9Pe3k373TY5We4bHaDJn0ueNH07z3ipt0e1VYCAiBS6e8/1Y5RVkrWUyIF0s+cZroEssPpNdRwogQLui8OgwAAAGcDTEVP+XtdZdprBGi5DVMd2uKmmEPmeX0AAAASAAAAATBFAiEAwAzDVxEvlxsYhaaDvs0/PpZR0IEEGytbMrN7/0pqNgMCIDmIrkyqjFMQdrJ7DHSKY0wt/TiKkyqtXgnntRQd2tIMAAAAawhMRU9IRURHRdg8XDV5aWKCct74fc21tmNS39eUAAAAEgAAAAEwRAIgAi2aK3C3aAxt+PkgMYghIbFWhRIzIoX2S2UoYVmLTykCID2DReBlLKTmn24pSWLaWs44kDFDaq5vGpiQNQkwZaMfAAAAZgNMRVYPTKkmYO+tl6mnDLD+lpx1VDl3LAAAAAkAAAABMEQCIBHtJ8vEUDb+o1YRf5aIFOfR6QaZzaE5/vwo4ODUevkxAiBLMK9dJOan+V1t+8+GJqCNc63YW37HqvFKoDbd2TfU+QAAAGUCTDK7/zTkflWe9oAGemscmAY57rZNJAAAABIAAAABMEQCIGjzMuAMZAV6BYHCa9jHyQY6Mems7v3Gqjl/bZLs7AUmAiA7oS7IjafjrAVCRiaUpKaWy6l1TPr7exd78cMV3uJc6QAAAGUCTEfFIPOsMDoQfY9LCLMmtupmpPlhzQAAABIAAAABMEQCIGXoRi3ADI3pQ+9TPQYQd2iGqTO5CsRqpyvcI8rrjDg7AiB/Et8vs3q56K1ObzCToOLIGmNssXm3TXAguna499zNvgAAAGgETEdDWa5pf5lPxevAAPjiLr/+4EYS+YoNAAAAEgAAAAEwRQIhAOsRQ+N6IzctBhKpGnz0rbqrQ3Cj1RmP38dAlKo1BDw7AiAdMhiph0daSzsvTDdNx8tm0RzL4YmWOa+Dv0WM5iiHBgAAAGcDTEdPEjqxld04sbQFENRnpqNZsgGvBW8AAAAIAAAAATBFAiEAk358jU9bJsMyQxIMHLaET1WfYooSgvvL8nHOP9H5hpcCIGqQRhrlUATZFGEjvug93p0nkyL7tkSCHL05Mf1bshu4AAAAZwNMR08KUMk8di/dblbYYhXCSqrUOrYpqgAAAAgAAAABMEUCIQDI1wBD6s3LRVuPVWWyhCAP0jDAfM1Lzz8ZTJZvszqSkAIgYsevX6YSqC/yt63GHeCTbNHRcjiK4GS0sT0eZMi3Xb4AAABpBUxJQkVS5t+/H6ypUDa4524fsokz0CW3bMAAAAASAAAAATBFAiEAvBoQ4SqLX6C61GcpfQ3/22lmedHKznd4+RCoiMnLr2ACICQJIVGdLb86DVR1Zq/O5QxdEsrHyl5vOKbz7Dt8d3FNAAAAZwNMQkH+XxQb+U/oS8KN7Qq5ZsFrF0kGVwAAABIAAAABMEUCIQDftjv/cDEkNIEdKr6g3ZCi0RIiPt4JfGWqkJLUIT5VrQIgGfsK0pIRtmEGPyHjanLjQ6fheHlD3XSv9lXKViiT5nQAAABnA0xET1qY/L6lFs8GhXIVd5/YEso77xsyAAAAEgAAAAEwRQIhAJDcUISSgim27fKygaCb2fmKRgG42lAms53e8gJVIZEdAiBWINIbF4ec8M3pCqUJ39cRyMZCx7UhCMKbitr9V4+7OQAAAGgETElFTqs34TWLY5/Yd/AVAnu2LT3ap1V+AAAACAAAAAEwRQIhANyNCIi+YDkmJBlFKyHQ92UUTXDie71M5V3NseCHWOoaAiB3rVABG8NphcXgiKI7WSz/W7iWFrECXs6XaMBaZ/b9xAAAAGcDTElG65lRAhaYtC5DmfnLtiZ6o1+C1Z0AAAASAAAAATBFAiEA11tQ/REnJlEj55wmkE+xT1aCNfUuOEV5u3S3zMwaKJYCIEqXK9j1sYHZqZk1f0tZmPR8pabkzS5QpNK6sl6Iaeh6AAAAaARMSUZF/xjbxIe0wuMiLRFZUrq/2oulL18AAAASAAAAATBFAiEAs9B8abHxmPmVHjp+XSY0Bx21mOSASocnvHAQtog8j7YCIHuqk99FW/6peIrPwVQvCzNfnCFKeU3OS13mhlloDp5/AAAAZwNMRlLHmM0cSdsOKXMS5MaCdSZozh2yrQAAAAUAAAABMEUCIQDVJsvFgbObMdRzHe4oL4yQuni9tmY55t/AnZhwXnahKAIgY2vUg+J4i2DlF9Bhx9A/H97D+10XUHtYoMazoA0LBYkAAABoBExJS0UC9h/SZtpuixAtQSH1znuZJkDPmAAAABIAAAABMEUCIQCzdnVWn/gNQxVdmqiS7BX9jCA7kzU1vPLOwlcXKr+m7QIgHdwv046i3vO4o0EdfgFDo0Jmfv/g1T4rNJ2hakYjH3sAAABnBExJTkHAXRREKlEN5NPXGj0xZYWqDOMrUAAAABIAAAABMEQCIAPfADJ9itppasO/1Eby48mrlEQGLHySE0wnW9M67BMjAiAUOAWEEw3mq1VaR1zgChP9aIXv2PmWmTSkThFfl9JqlQAAAGgETElOQT6bwhybGJwJ3z7xuCR5hljVARk3AAAAEgAAAAEwRQIhALltlypcNWOLz8lKQJOeqEyYWMCBOn011jm+CAUeRktyAiBu6HGoM7kDwET281BInsasVd/arbukoAcbcfY+WaEo9wAAAGcETElOS1FJEHca+cplavhA3/g+gmTs+YbKAAAAEgAAAAEwRAIgZRve2IO4sYWiYIRQIGrsefmohFQGc19Xsqd8VZ/bUZICICFi03LiCcBLA3QzZ7OQRii9j2SxgPE8+x598WAGBt1yAAAAaARMSU5L4ubUvghsaTi1OyIUSFXu9nQoFjkAAAASAAAAATBFAiEA0zkT1A39MD2eo5q0LmiKBuN/NxPCRWvLXd2EUs5PkhYCIBVP6ukADcY1R0nIDykPCk+/BNhkNcb3MYAFLHSJP2dJAAAAbAhMSU5LQkVBUqIJujTAGicTpEU6ZWYwzJ3oo2K8AAAAEgAAAAEwRQIhAL0rR6IYsr1GbyOPh8PYSMzWh4f4I1xC9LE5pTTzsQzkAiB0UESF526TYPBr9z1NfneOP83u+JutNLJFYbo91l+M7wAAAGsITElOS0JVTEyDrYfJiKwMYnfAxiNMyBCLILtdmwAAABIAAAABMEQCIC4RjHB3J7GLp54p/Rj5lseZhcoKn6Quxdo+l0Kv+ik3AiBK4YDF+MEuQQ8aRFoa0UIkwZWxPoxN1hF8htOdeBUULgAAAGcDTE5Da+tBj8bhlYIErIut3PEJuOlpSWYAAAASAAAAATBFAiEAzKlJdr3eeoZNj7FlKa3vdNuqwtkEWE81OS1Ulu4WpOkCIHb941zfqnJzWfZpGjfF73stE4aWj/lNs9S0Z7toDAmRAAAAZwNMS1lJvS2nWx968eTf1rESX+zeWdvsWAAAABIAAAABMEUCIQDpl4zvoXI6gcMicDlgXdu3cEvhEU6EgadVCUPyLi+UHQIgAsjlBWzJ+Jez6rJH8LFFhQV5yX3MXcBpPYNS1JJYjIYAAABqB0xJTktVU0QOLsVPwLUJ9EVjG/S5GrgWgjDHUgAAABIAAAABMEQCIG9SpaMApaMyya6L+kBQSk076Thaav0WODhFQi/voHgGAiALFbSeIF4sbAykgzadRPl2h8Fbx6+nKlZLLJHoBJJR+gAAAGYDTFFE0p8LWz9QsH/pqVEffYb09LrD+MQAAAASAAAAATBEAiBmxLg3ZnnFaWfwANhzcU44Zila0+PU9A5T/XHyRAtvowIgW3EnlZmiksDJWz32hEkP/r9sya/7mQ2vNrEuDvxpu/IAAABmA0xDVEo3qR7sTJf5CQzmbSHTs6rfGuWtAAAAEgAAAAEwRAIgKt1HzQ6B/CI61Lam6ORwWX66JAzUHG0b251HlDjzWX4CIAaq4dXiQh9a+PhzJTenMEQNgkR0UbSiH8eX8RV+cIVIAAAAZgNMSVS1lJCrCaD1JsxzBYIqxl8qsS+XIwAAABIAAAABMEQCIGqAvMARjd7PFLeiYDEtWdgdG+NwINdwKjfcHWqaGfdMAiBIcvzm8VhuzW6N5CVhkpCOp3+J3XODUIt5aZWGimSVeAAAAGcDTElUdj+mgG4az2gTDS0PDfdUyTzFRrIAAAASAAAAATBFAiEAvtA58G5HPfFOTYCEyNUWs+BOHEkJh8Ijz+2AeytqQX0CIDNynY/bquMoPcBT6ruKGEZXyJPrYpKYYxPrKydY2lAiAAAAaARMSVZFJKd8HxfFRxBeFIE+UXvgawBAqnYAAAASAAAAATBFAiEAsTnPii9KbP/fwQfyXjOxYL3UeK4nnN7kLoGgWsaIw9oCIB+asyMGnKVu1WZr9P0ZHMQHwAd1R5N5W43YcbxXIRirAAAAZgNMUFRYtqijMCNp2uw4MzRnJATuczqyOQAAABIAAAABMEQCIE5PzDaANcxzp95tXLjetiBKAFZx2xcWhGZ2eWy5sGiwAiBpxU8L4q0YAuO9rxTzmTQahdX+XBe5v6IwWn3WITUn8gAAAGcDTE1MJbYyX1uxweA8+8PlP0cOHxygIuMAAAASAAAAATBFAiEAol7vooFTJNejC4gJzef3z2XTtRaelW3Xyhw6ZraML4YCICx+pJoM2BJUbQsZ2jyL62IRV2hG8LDAa3Pzj98GC8qAAAAAZgNMQ1OqGZYba4WNnxihFfJaodmKvB/bqAAAABIAAAABMEQCIGrTr5JTcafNhuy1nEko2N8uYBH3YXbUNGub5XDepyaYAiARHO0GWRGRaQAbbxM0/D+hhkMR0dnHtZWms93ZBsVRKwAAAGgETE9DSZwj1nrqe5XYCULjg2vN9+cIp0fCAAAAEgAAAAEwRQIhANLWnMTU6SsNhKlTRk1gF6Jb1cmfWViGXxnOBbMWk8pMAiAVtSdJ3wakE13r4WAjs+gTCEO4FZfr1WqAaeD4okzHagAAAGYDTE9DXjNGREAQE1MiJopGMNLtX40JRGwAAAASAAAAATBEAiAeivgpD70MygET4cs2GSfsWQo14Z7CgdgQhSrdoqEP5wIgeHEOByjj+9gZUGRpWuAsOQdriwyjwWd44jehPUOPnVAAAABoBUxPQ1VTxkUA3XsPF5SAfmeAL4q79fj/sFQAAAASAAAAATBEAiAsjYdzQgdjfe3Y066xVUOyKVb6eUU7yK1+n/rW9Zbq3gIgM5rpDZmxEOFsBBcyQqZDu1aLYaQ2rPelu0LEmVNAuB4AAABmA0xHUi64bo/FIOD2u12a8I+ST+cFWKuJAAAACAAAAAEwRAIgF8q5xdJv4QQ27++uGDjSvKWw5ZRSSKtPFtF1ZYHJ+P4CIGlzFkQYcy+N4kyod5RgpqNU6IQh5dqkb3xgjh2tS8lvAAAAZgNMT04AAAAAAAlUE6/CldGe3rGte3HJUgAAABIAAAABMEQCIAVFrIzTb/+oLUUF74XdmFf3hahkb84/wgRrSF1ZjS0DAiBW6Z3euKAlx+tu81wlnvJt8s5rqLRsge+L2+LlXxi7MwAAAGYDTERYnvoOI4fky6Aqbk5llLj03SCaC5MAAAAAAAAAATBEAiADjbxXHyUQnZqMh7zXnPIe/MBkzSXFoeaZnH1E+88+vQIgW8Z+oQg3papscfw6gVcJzYOZc/ufwDMrwkeUDwjKnwMAAABnBExPT0slPH3QdPS6yzBTh/kiIlpPc3wIvQAAABIAAAABMEQCIHjqGeViSIqTboAbOeLEOxCbX3UfT4fFEJHvXU5/CUkYAiBezvYLR1AoZg58eMlaLfDoNLzJvIVA1tmSQT+vk0I0xgAAAGYDTE9LIa4juIKjQKIighYghryY0+K3MBgAAAASAAAAATBEAiBRzLgCK6fJg4CyiKss0VpmIKTbLLzx/X4evAGSs5lfiAIgar5a6EztEM2U+3C8dF83Ggo/fw0HlhYiEBdVpczr3AIAAABoBExPT02k6MPsRWEH6mfTB1v54986dYI9sAAAABIAAAABMEUCIQCyYQ8OZFzDIYxM5pmyf99bwfL5RJnzoabWrgQCeDo5mQIgC0jMrzdJ43pMla/Hp3oe6BM1BPNoZlKgzR5vRVZkJKwAAABnBExPT01CR290QpIQfjRRn5w1eScHTqP3XQAAABIAAAABMEQCIFx2PSdLDXfgXywCDOymd6UCpknuq/2DmVY1UZbN5cn3AiA4VZJYRK2di1MJBIUZTQyH1TiwydcyI3etmhsHcsgQwQAAAGcDTFJD72jnxpT0DIICgh7fUl3jeCRYY58AAAASAAAAATBFAiEA8zhdzIB5nFrJKp9VjvVvgHM9ryrAVNVWK+kYQmX20yQCIBbvV0k0aVVFeYh0uZbl3RRzcmYqqZQrgFd5CtcQ6ESzAAAAZwNMUkO7u8pqkBySbyQLierLZB2K7Hrq/QAAABIAAAABMEUCIQCjoWBt3jC5GkVfKjdwUsjBKkLooVbPKO4jP/Xx2NcKNwIgAPVXezcSfF0BjE6QHr55eWQ0u0UUmEiHpwXydF3+JmkAAABrB0xUQ0JFQVK0IuYF+9dluA0sS12BlsL5QURDiwAAABIAAAABMEUCIQD1CskEqdlEoZimdACjyItRSUtB8pAWdleuL93c8KL7EQIgdcDhJaAcQ+cRO1zt6Pv682CYCKOEfJ06bVNYGJ/5N8YAAABrB0xUQ0JVTEzbYTVOnPIheil3DpgRgys2Co2q0wAAABIAAAABMEUCIQCx/u6NFJ+mK4knHPCNIv4hiVV46RTebmiUghwzXFZczAIgVauJFzkcF6a8dbrYeD7ohyX7yZaJzAJWNmFuXUUt9s4AAABrCExUQ0hFREdF0MZNbA6apT//2LgDE+A197gwg/MAAAASAAAAATBEAiAYrbuY+vXvsLPssg6bi78B3ibDoPKoAoYlqcobUQHxugIgGJ5vn4i2s+y3svjcWUS7prpmfWMTD2cKSaytXzvD/ncAAABnA0xUTz22umq2+V7+0abnlMrUkvqqvylNAAAACAAAAAEwRQIhAJybyAyLlLJRu8e4i/7Jjfvy/9OgJdee97japRbSbi4rAiAgmVZxkhRPcqEv6Vq0OfRExKHzM76SmohteTnhXG3XeQAAAGgETFVDS/sS48ypg7n1nZCRL9F/jXRaiylTAAAAAAAAAAEwRQIhALd4/tjq5Sbo2HGB29pmB/Vb+VrmOjlmTDksiBl0eBDIAiAXLmG7w21p8VLz5fHz3JAAup4q3Wsy9s+NuPPb9YUZKQAAAGYDTFVDXb4pb5eyPEpqphg9c+V00CulxxkAAAASAAAAATBEAiA9r6qcdbMYQ0oIThYVHWNgdh8+GntYY3WAxU/SHA2WAQIgXca28y4C8cUNXjsnB7W+2NQ380EpgoMeb++VLzdoR0cAAABoBExZWGWouRloAljTaRFJEFEcyHWVrsC+bQAAABIAAAABMEUCIQDqeJNSn8Ck2CnhVMdwVru4uzQl6F3pRKepAtnI7DeKOQIgG4qqJc9hr3+qmXgJQ3318IBplhglED8MBgZ74266CDQAAABnA0xVTaibWTSGNEf25PxTsxWpPoc72mmjAAAAEgAAAAEwRQIhAMk/obY3A5c0dNT1uQIkL+I2TiafXKRkoi7qmutvkPkvAiAbtN0H6FUajnqer7S2SSrpMbpq1/O2KoyV39EE68nRbAAAAGcDTFVO+gWnP/54748ac5Rz5GLFS65lZ9kAAAASAAAAATBFAiEApgdzNnlECeXHr7Xh1FViR3KVENY0lObzuVYXc4+Q5IQCIA02Rwn7Mp4z8iuyVttR7jc9AOMoCJ9bDp4XNfxpvgdLAAAAZwNMTVlm/ZenjYhU/sRFzRyAoHiWsLSFHwAAABIAAAABMEUCIQD6Ww5UVT2kI+YYpjdd6haRgNN/taj3BJ54ZrwqWvIrowIgbwqq450s/527yGBDYw6siX3MXBpjR2J9RInTHP/m1t4AAABoBExCWEP/5RCpJDSg3zRsXnKjSUsEPPJJ6wAAABIAAAABMEUCIQCVH6GNNmXG7TwtJaeQE2uSo82qa1ouxC/dkW6LpaXaaAIgXzBc1CxKvSUbFkxcD7iSQrzuOipzZ9NIB2V9+A7/a38AAABmA0xZTVetZ6z5vwFeSCD71m6hohvtiFLsAAAAEgAAAAEwRAIgVqUVB14VMXywKjXEfIIN96tytEy6WXUfKkrsd31gFPwCIHDbLu138EckQRFqgx9YP1UAAIFnaSAVb8EyU35OU0WFAAAAZwNMWU3GkPfH/P+mqCt5+rdQjEZv79/IxQAAABIAAAABMEUCIQCxc2qxHNmc0uYMXHU5+eBt6fktgHYro4WVm+YGA8M11AIgBuzAW6nZ9/ZjpI5fKscYG8ooET0/bSb4Y/j13ujGRzMAAABoBU0tRVRIP0tyZmjaRvXg51ql1His7J84IQ8AAAASAAAAATBEAiAusQx4bHqcTl4/Fre5VHcU1d1JjUvvEq6vat9O8NyBGwIgA/hUa/2dq7oUnuxOqUWndGdgxPxx5sxgawrWoxHd530AAABnA01BQ0wzRRBfzGzcKduRBY/6rjPMpbzbAAAAEgAAAAEwRQIhAOq3wKzmAclKMhobQNm03VRwwWyKoYkn8t1Q1tWl3halAiALfu0y5MPiv72AljfvewuVfaVI4kcEXWhjgjE/a5SInwAAAGcETUFDSLEZzpTQmMGP44CQTCTjWL2IfwC+AAAAEgAAAAEwRAIgYOCjNA5rnlR67kj9jbOJZFGp3cl2kEUfXRbLx7t6LDICIBtbuWJm0XyhL9b5UwGNL+//Kb85sYOUa04guatOkqKEAAAAZgNNWENco4G7+1jwCS3xSb09JDsIuag4bgAAABIAAAABMEQCIFXKfWLxyQ3/h7WNdqXKrMV2jr6Xiq+K/Sagwy9GOSzUAiBRGZfXGaXgnSW+ng70Tk4kPGzvd0yBgBpGYQSymz4IzgAAAGcDTUFEWwmgNxwdpEqOJNNr9d6xFBqE2HUAAAASAAAAATBFAiEA9TEcYc84PhqheDML4ODr3wHAlRLSEANAta+wLGi61cUCIHMqABidVG0HWUtatxCTvwsRNYRuiYtocrUE6e5kU/mTAAAAZgNNTkOfDxvghZGrfZkPr5ELOO1dYOTVvwAAABIAAAABMEQCIBs7JrUuPYEDRnTd12A0NgCBsn2fNDtbgEltBrVaV5Z3AiACaSlLZueVWaymF6GVMYNf11Q9bcDfYYOSw+rmAwPHLAAAAGYDTUZU3yxyOBmK2LOJZmV08ti8QRpLdCgAAAASAAAAATBEAiA+ZHp3dO30c+GY+XEAPZ79i3gps0kxmY1cWWIRBpONbwIgKAeqMCPu4S+5sglasJg6cRbGFwcT1Ohncvzk9TZYrP8AAABoBE1GVFUF1BLOGPJAQLs/pFzyxp5QZYbY6AAAABIAAAABMEUCIQC66YFAAfcIzlt1G//GEFbu3Qd7Tjr4t8xSpjrt5qwObgIgFl6WzTq8eLNW5bUhRxMdQePffXy+jXtmMbykh3AwJOIAAABmA01JVOI80WB2H2P8Ohz3iqA0ts35fT4MAAAAEgAAAAEwRAIgafx8IAGTvvGaIQB6JvotUZX1EGzN4YMqYeIbWp+VHBgCIAOKND5HKqCz4/fn4FaED8TmC38mlhO7hzueaKwpu+NcAAAAZgNNS1Kfj3KqkwTItZPVVfEu9licw6V5ogAAABIAAAABMEQCIAvKRnFWA1U0pPqK6v/5Z7OEX8PMEfbupEbSgxA9jSP2AiBusuapDdZ7C8RahmDvUBxWCVLGccMvc5SsI6dBkaxPMQAAAGoHT0xEX01LUsZuqAJxe/uYM0ACZN0Swrzqo0ptAAAAEgAAAAEwRAIgMWTwjTSOuquTSUNjIwIjPtTZ5Cp7pV68G8qsQkGe31MCIBDiEH+PC88NCa09orjlgqD0KPnzxF+39Vn9Uf7moLG1AAAAZwNNQU7iW87F04Ac46eUB5v5St8bjM2ALQAAABIAAAABMEUCIQC0mY4kU428g/uR7AIbKURA28tsCQNHT8wMEjOBHfBDgAIgfuDzAcF+GqzJ+wQyuilZGAChuCVyzlq8Wqy6yf+8HKoAAABnA01EWJR66wIwQ5H4++WyXX2Y1km1exeIAAAAEgAAAAEwRQIhAOGZ/wz0iS0kMOqHRpKXqgTXVW0A01qNQ9Gd+j7LbNM8AiAec4wGaCjRNOg4I7fsxOxgnZ0Z0a6YG/qTyEah6aJhOwAAAGYCT001k9ElpPeEmhsFnmT0UXqG3WDJXQAAABIAAAABMEUCIQDI+R003j0uVXVf9wVqqkPmVGL9267HwX+/eC67B3A0QwIgAxebWI1doiHQZOSb4gbE4cY31dfFL5u58QAJiZjQXWIAAABoBE1BUkFWkKims6K7OUtwn7Z4phv8Np8sTgAAAAAAAAABMEUCIQDt16Yaid3tUHKXe6ftYd2/08R9fEXp9LlPQNA2FYFzcwIgSQDNMH9mcwjcyDsC4AC+VclDGg3tJWGzSfTd5vhP0R8AAABnA01STIISWv4BgZ3/FTXQ1idtVwRSkbbAAAAAEgAAAAEwRQIhAKhea+yr/0eMQnEKOe++sS/diyQ+YFIV1v3FqA77JuSJAiB8ccbNscjbHKMgV4A4QPWUeWqrtpsuSdclM1SFxzXMaQAAAGcDTVJL9FO1udTgtcYv+yVrsjeMwryOiokAAAAIAAAAATBFAiEAzfhUm8meKyVaEdbarizQoSAOeA3tDPx6CgkFqKFwz34CIAcj1MNGFyrHHAhQp0fm5yMrCXmK0XSrV3BCK3byNw4fAAAAZwRNVE9O46h6k0PSYvXxEoAFiugHtFqjRmkAAAASAAAAATBEAiAnpliMw7MGu7L+bBz0B11cIN21v9rkq5FyZShShQo8EQIgWfiMwb5U+nh9LYpmY8sAum5zwggdKdX7bzy7BrRMXb4AAABoBFBPTkRXuUYAiRO4Lk34X1Acuu2RDljSbAAAABIAAAABMEUCIQCBcyKzAVpoT1LiEFdT+NtyJwmMxZf06/xEoJAkCpMSggIgMCirYVMFTlV69X/ZWZaM8f2RuK1CwouDwCBNo2+yTdAAAABmA01SU5r1ogqsjYMjC6aFQrop0TLVDL4IAAAAEgAAAAEwRAIgIODFREGySukp8UiLfWPsZlMh0wwMZpKaykMCvC5YnHoCIBZNA3oJVzBw1XygnHK7ibmhKYLhoNBr0CCXDis2eT5xAAAAaARNQVJU/cwHq2BmDeUzta0m4UV7VlqdWb0AAAASAAAAATBFAiEAhnvm83ue7l3qSPGQQ/Da00EN9JhTOxDqlLXNvfYQbWcCIDnhM3wt3dVGQrO9yQPRjYR84NjSrm2T+Lq1hh7Pz9TbAAAAZgNNVkyoSequmU+4avpzOC6b2IwraxjccQAAABIAAAABMEQCIHCTkEzGce333jP4u+UG2yldCo7C68L2d26eCqT9YlOPAiAsMn2yQCfa+pDHk0mefJF6VtZ71alf5FrHFFzbFwZdAQAAAGgETVVTRKUjg7ZluR3OQt1LbR4Ps30+/+SJAAAAEgAAAAEwRQIhAMOiK3csXQKUEVKm66/iEalH7TLbqQbyL6MwTIB1QP7qAiAryVV3qpfR5o6K4D5EoGZL5peA+zuAOvhFvbUkpDomuwAAAGgFTUFUSUN9Gvp7cY+4k9swo6vAz8YIqs/rsAAAABIAAAABMEQCIADY+ntuQJoNxVcjupdReefRGB0fx4/Mvs5OWiZIFDZqAiA5J9hKcQyIktAvc4atIBR8dfukvdSGsCVuzQBXcKfKWwAAAG0JTUFUSUNCRUFSvok7TCFNv/wX7x4zj723Bh/wkjcAAAASAAAAATBFAiEAguHbNZv7tkKKs15Jq0MejzZ529YcLFNu+hfUARuZx9MCICTGFtPNwRXjpsTKxbRKIUP1cr5wnB1XI8tCeh9xBr5qAAAAbQlNQVRJQ0JVTEx+A1IbnaiRyj95qHKOLq6ySIbF+QAAABIAAAABMEUCIQCh3411smwHNiyrbNP84uXrdEyN9Xoy/pSUovPjy6DZDAIgIHrwm5LDEkkUblP6Y/AYGrpd8aJ3tgzlrlRxYx+4/mcAAABnA01BQ8Pi3gtmHPWPZr3o6JaQU5ne1Yr1AAAAAAAAAAEwRQIhAKoZCeir5rXPIT8xbcj+4XskCCqT/fjGu5K2kVcHtgo7AiBnOWQcHfd0PbxK4fr7aXEZ/wMKtW+sLXlRRpxQcU7hMAAAAGkGTUJDQVNI77s/EFj9jgydcgT1MuF9dXKv/D4AAAASAAAAATBEAiAyNAUnlVHyegqkNviF4TDT2E4jceCg82xZFYSRpfkB9gIgZbJkxHFPR9qwtPHTkFbqTHjRZ+nGNk3s2IaIwHNvLz0AAABoBE1DQVCT5oIQfR6d77C17nAccXB6Sy5GvAAAAAgAAAABMEUCIQD7WZpYv5GukDzrgrq3qhGafjMFOW/IMlN+vIkgkdZI7QIgbtWzPbqUZSXA2ZNOH0MjECWxbRNH6Cr1xpsIuvhdjMQAAABmA01DQk41LPFk5krcutMYw6HiIunrpM5CAAAAEgAAAAEwRAIgHiW8ohB0o8Adug3FiKREk73Vb7+7VgEiKeQa5sL6M0ICICQb4uW2/Q1fQOOlJRPVDJCfOwgmuWH4kaHLPBfgfdkYAAAAZwNNREFR21rTXGcahyB9iPwR1ZOsDIQVvQAAABIAAAABMEUCIQD4dkAIKVQe6rMOZSsgvSQGzx8I43S5QxIHDs7vCMS9ygIgSvxLS4xTAJ3VqocJkhdkibaxJ10oIJn/Mtyq6ceq8Y4AAABoBU1EOTk5QtJd+6WGjDXnITTviG4ISEwxPUgAAAASAAAAATBEAiAa6GNkYtNb+YXWntY4+tX3UoxBtM8hIKU/0wZFt2hKHgIgcHGO2iEWdXLzn8igwMKh/GH4xJgqJqnBioJEG5MU+hIAAABoBU1EQ1RSvikH36zAEhu6B3C8bUIj+efXDmEAAAASAAAAATBEAiAl6A8+tpNNbGWCaSJxEqv9C3nmmcXKTQyACVy+PCWYdAIgEnFk4k9xIN5D61xVkDPVfEmt+r4WMI2irO77XJH5+N8AAABnA01EVIFOCQixKpn+z1vBAbtdC4tc330mAAAAEgAAAAEwRQIhAKb4lLG2qC7fpJnGqdW/YOBQMW/OIihI+xDwMqDjvikTAiAfEQ/XEq8TW9vSNbZJeVrYACkfr1GQ3k0/6ETZ9ozccQAAAGcDTU5UqYd7HgXQNYmRMdvR5AOCUWbQn5IAAAASAAAAATBFAiEAgxTSETYnwDxK8FKzsbXpzHQ9xUON7T84t1xgNicL6mYCIBpIDcgSH2T8C6dTqbBA/KHy0/sBLnzNPjVqc8umiRDxAAAAZgNNVEOQXjN8bIZFJj01ISBao3v00DTnRQAAABIAAAABMEQCIDD3lHQID1KxOOlk01qY+RI0LEhny18sewTzjXUFOr2lAiAdnlQn94wHL2/I+8E4y12uy+bsr1v5TP193/eT/58rYAAAAGYDTURTZhhgCMEFBif5edRk6rsliGBWPb4AAAASAAAAATBEAiARAH5mejvgJZJ8sSvDpB8qN1HNW3d9gLrvNv6Wu5nU9QIgRbMNdP+iq1QSLxHYx5lK+va7gplTFfUJMWGrQDwu3RQAAABmA1RFTOwyqXJcWYVdhBun2NnJnIT/dUaIAAAAEgAAAAEwRAIgEpyd0uoDp/UxlA5R+SDfw5AIjZhfN6bnh6U5hU3h470CID855XKIpuKLhJNr1f6GmXs7l4DJFiyuGzXWg7MJHwUpAAAAZgNNVE5B2+zBzcVRfG929qboNq2+4nVN4wAAABIAAAABMEQCIGxlj2fxZFsP9saVayxJtZFKFydpcX/mZQVG5Hjy83TOAiA9j5G7YCl55d+9xBMtyTrqdGnvITSScOE/DNaj4NZ6CgAAAGcETUVEWP0egFCPJD5kziNOqIpf0oJ8cdS3AAAACAAAAAEwRAIgdxwYynbSlZPiirjKJGFBGf/k78gSnIdBXrxjy4FlTScCIHc20eMvWCViaMqYo8Rbl5YND+0hTKv9LWUIWO0syA+fAAAAZwNNTE7sZwBcTkmOx/VeCSvR01y8R8kYkgAAABIAAAABMEUCIQCIKMt1M3fISdVtM0uLBIAR8Y9GDZzTfKVvVOze/XYDMgIgUT0d6BBP2AXA2R0EDDQ+2aSIhvHOqV7w4qN3j25rTa4AAABmA01MTr6571FKN5uZfgeY/cyQHuR0ttmhAAAAEgAAAAEwRAIgG4eM2xakBq102gEXx4HgMdF+TJeChd3IRGW7lqZJuxYCIEvi97DKtIMj96VEQpSYr3ekFEFVQBlHgbp7lKoTfUaCAAAAZwNNQk5O7qe0i5w6yPcKnJMqix6KXLYkxwAAABIAAAABMEUCIQCqDDAM1qDnMB4YjSYRCL5Xj0913Ppado1XKj2f26ErKAIgHoG75ks2kg3LsGiURSfUxzCiB6PH+4qw5KZWzeNKTykAAABoBE1FTUXVUl05eJjlUCB16l6DDYkU9vCv/gAAAAgAAAABMEUCIQDq+sh9OAa60oyuRKaDiGSUs0P49/oycokTVK/LK4/h+AIgIR5SN22aMisQJlVBW1o5WILLOCU9D4Kn9Q6MIFS+TW0AAABmA09ORU2AdQmuziTA+loQK2o7BZ7G4UOSAAAAEgAAAAEwRAIgaI6Qc1RsACeu/0kROlZmffXjwClmUWLaF6dYfoB23E0CIBcj2T5ayH8Whcai1jK2voUpdlXqft1zJzllI8a7U1MfAAAAZgNNVE/mazqjYLt4RowAvr4WNjAmnbMyTwAAABIAAAABMEQCIACvPjkhDd6CZqM0cKlaub8jZgYh5mKXp1sXO4w9uFZUAiBEPkiBKLqEtxUCHysrUa+jgwiVJROBqnqutNQOxfsbawAAAGcDTVZQQyosVN4t3pQaNtLrjEJO1mb3Su8AAAASAAAAATBFAiEAjfmXjreohC6mgC/qTT6gQpmQHgtXnKBpFPYIqxUlRgoCICydgBaUrFsHoH+f4QTyNezH1k+oZ+Nu9/cKhtzT+xGUAAAAZwNNVlCKd+QJNrvCfoDpo/UmNoyWeGnIbQAAABIAAAABMEUCIQCu3FO70PkScWg0BxYipuvzQWy4ih8+ZQcWJ2nrbil4EwIgdt7w14H4tIuhdMZ69BA+k8Wo2o+D6ji1svSZo59PmOEAAABnBE1FU0dCAWfYfTXDokmzLvYiWHL72auF0gAAABIAAAABMEQCIF1FBkpfYa+oXQRjmHVf0Xb5qM6utXlTv9FMsWX1nfdOAiBezqITm4k4NGprLFYL5+7CwADayeUBIYgztMKJeopttQAAAGcETUVTSAHyrPKRSGAzHByxqazs2nR14Gr4AAAAEgAAAAEwRAIgHKUTRrZeng2V46ZjNpYm0bWMODyjsCDZ2HdAJjxEr7MCIBvzHkv0wuM6ym9V05SCZ/twd1nHJP0TfumNJblao7AOAAAAZgNNVEGjvtThx10A+m9OXmki23Jhtems0gAAABIAAAABMEQCIHDN/useRphVgv5c3bnOMgfDCake19+gusWGN9Sv54M0AiA71uXKtvA9IA+z/Wp2PCtNpthV61QNInoleCD37A0yOgAAAGcDTVRM9DMIk2aJnYOp8mp3PVnsfs8wNV4AAAAIAAAAATBFAiEAgyjdWdvTJvgRQwDWZ4lODY9+LwK9cTcsUkHzOcbkgNECIEYouBcPhQuZ4zGyl1TdXVouMmrbEuY3vkF93+qUkWlNAAAAZwRNRVRN/vOIS2A8M++O1BgzRuCToXPJTaYAAAASAAAAATBEAiAccg2LBkUZ9C5Uq9XE6Un20ta8xt1bUgcq37lJkgznfQIgIsHzE+VmJeq5yKg66aTvZmGPlPzEyb4hX8MeKwpMR9wAAABnBE5PSUEi48OjvaOciXpIJXvIIudGbxcXKQAAABIAAAABMEQCIHjWh9ektzE9GOWOzgWjjZZaXUeFrHoP6S1/h3iiakNnAiBM4HehuA0fBFSSvGc8hEKbf87HghiXzDrBccXgih2SRAAAAGYDTVZJcuNk8qvceIt+kYvCOLIfEJzWNNcAAAASAAAAATBEAiB/PtBa/V5lz8YhTuA87rykwe8BzcgGVmkDveWfrVqmWgIgfl6Hh3HcrlYMtg3xSIl4aSH9KrEkf4whUZf9+rhJRtUAAABoBFVTRE3XYK3fsk2cAf5L/qdHXF42NmhAWAAAAAIAAAABMEUCIQCmf4r3YFCrDFrlFpY12Ld5L1qiqDTNoAohAuksDxR6gQIgFzWTx/5Z4j2ZRW5sLpoZip3ECkx/zOSgxKfCgutKifgAAABnBE1USESEukrs/eOdaWhqhBurQ0wy0XmhaQAAABIAAAABMEQCIBPoOBh6m+USIn4W5PkwGtXBgqUjtZL3nhrFRNMdcOsQAiA26s1fy8FHSnQEUprH8AVdgbDq1ZEQgVKvNJXFWNozggAAAGcDTUVUo9WMTlb+3K46fEOnJa7ppx8Ozk4AAAASAAAAATBFAiEAmriIiWbGW8CAMGHTBZ1RWVcbGMxC9QznRqbqlNg6938CIDg8nzj6BvY7X4SXjbhWx8h+FllDdv2TprmLQRRd21VNAAAAZwRNVExYLh4VxE/+Tfagy3NxzQDVAo5XHRQAAAASAAAAATBEAiB15M4Y1A7lNpb4t4bkD1ukXXLOYAtx2nZqyH9kJJxZxgIgNjHDbb2IAq9IWVaDhsxpyHfijodhmiPjBPIIMDQt+vIAAABmA01HT0A5UESsPAxXBRkG2pOLVL1lV/ISAAAACAAAAAEwRAIgCKhvQo0uL6ApIeIl5PYxnEO0bKmeaDWESrgWRHs0gIQCIB3UHMQJ56xFn+zftwKi8XswtxxLVYT34enu/nwMdqShAAAAZgNNSUM2izpYtfSTkuXJ5MmYywu5ZnUuUQAAABIAAAABMEQCIHw1Fm9Xww0/8bx5XMyGR0EzZzyRDD8LPaVi4TR+p6wcAiAuQoHHkM1qtgO+rJ2OX01VjMc/H0vb46tIU8lmFOEMWQAAAGgETUlMQ9cXt1QEAi+xyFgq3xxmuaVTgRdUAAAAEgAAAAEwRQIhAM7Z5h4Qi8DdouRGrD4y7izQVSA0/6NBZR6FZKPBX485AiAQxBKjh0Ytm/yfkURIgF0afjjldygGG+vG+h+hQD98uwAAAGcDTUFTI8zEM2XZ3TiC6riPQ9UVII+DJDAAAAASAAAAATBFAiEAwpsXeeoi5zGqbTOJp2fKdEx+MZaXdX3VCvkDs+Y1v5UCIDVQtrceDQCPhgDe+ky0mYCWhCB7hVsG/kWWLkogeLF5AAAAagdNSURCRUFSyCq7UkJXyO5HkL/e+0UrLWo5XiEAAAASAAAAATBEAiAD3RxMw5J+ymcd4JGC2lgcRx+pMC6ZFLvEASs7W/0XPAIgUCfN/VqqkFwApA10pyl2RqchReOJnca3HUGYpfE2DGgAAABqB01JREJVTExZ22C9QbvIykwe/ubqKpfq4eMM9QAAABIAAAABMEQCIDE4Ovn5kgvCqXx5pUHrVHm1NlcWXBhZ+J8LovMOvHFBAiAbKc008+MD2oSsWCIyvUgYV9D8e88bEhfwUMeAhSGfygAAAGwITUlESEVER0W+0E1bo1H7KpNHC+4Eursy1/aBfAAAABIAAAABMEUCIQCh21B60whnKIoreyBhmFSeEV9yD9pziAA8LWAKDYyTbQIgD5zOILKvovL9VIszf34bjA+tl5aRmmUZBfBigdfndx0AAABnA01LVHk5iCtU/PC8rmtT3sOa1ugGF2RCAAAACAAAAAEwRQIhAPWUX8zhbMRoog0fUUznXNajpGw3FnMIU2DO9ANbHy7pAiAnS1GSDH/Ap679pQAYOORdvstf0d3cRHCmgOKc2pc7LgAAAGgETUlNT5C4Mfo76/WOl0ShTWOOJbTuBvm8AAAAEgAAAAEwRQIhAMOTrn8GY+h/jgP/fFDzCH3sTJCV6CmcZdkBglQ2k/NvAiA8dV+jbdSZHD5rywAZYqNPv5T+7RMyX3q7hMsgvosFtwAAAGcDTUlDOhI3040PuUUT+F1hZ5ytfzhQckIAAAASAAAAATBFAiEAixNIrrapEtrwvxhQ+B5SHf3k3YZTTQjYoOBWdbP6JRUCIEBQ7V5l8UckQs4Ls6LKMj8FGgCEEleB/t5Z9p1GxGFSAAAAaQVNSU5EU7JmMcbdoGrYm5PHFADSVpLeicBoAAAAEgAAAAEwRQIhANZTAl1cgWAv+2BKov+iaa/FYRJrJqDN6nT/PzYYJ+RRAiBUDmGnkG8xpj6RPn4J6c1U+jv531EJOFo7CR6V+wPbQAAAAGYDT1JFNaxIi3c9rFBu6FeJXuncNLJQ8xMAAAASAAAAATBEAiBckK5L5SACbj5AKWQ7fGTv8VaR7FDaoIOg37b6ccfQQAIgY/U59ns5ijEKLubV6iUWZO6QxlfuTQ2jXgcdxkmwvSYAAABnA01JU0tNLomWWPtZsdUYto/oNrEA7olYAAAAEgAAAAEwRQIhAP0QM+UMqjpG3T/tJYYd1h0QSpgnfhGVTvqdU6MWANR2AiAwrZxGyGZ/zEalzLTdmlGyHXRlczIpsdiOcf1uC2bcCwAAAGcETU9SRVASYigbK6BD4vvxSQSYBonN2wx4AAAAAgAAAAEwRAIgP9YcWBzInp8tLIPGSK9tPXAGF9Yg7BonZhr8crclyogCIBZe1bLtxncz+PHeHfSEkR0L3nkkEOEQJyrBncOSP53ZAAAAaARNSVRIOJO5QizV1wqB7e/+PVocapeDELsAAAASAAAAATBFAiEAsgDY+xe2lrtNL4cDb9maznDjEi2dYtF6QIjUhNThU68CIGkkG96K2n3TK/uOKVT4G7JRH+NE4HmOSEVD5iwUKhzfAAAAZwNNVFJ/xAgBEWV2DuMb4r8g2vRQNWaSrwAAAAgAAAABMEUCIQCZYCr1cfDPYGRfANP/rVZF7Fyh1vJppeA6qWP+oihOAwIgF4tpAL+hYE/LrIaZVAfSg5ZflBrGS2pZLVaI6W60OPYAAABmA1hJTql0xwnPtFZmhlU6IHkGhaR6zqozAAAAEgAAAAEwRAIgTB2rkntq4ZZAJPO43DGwLav3FlZ1svHqbHUSo9Pnt0sCIAIhLt8co+XrJBqVhuGlyBF7fTwu8OdZGwl9r4TPgZxDAAAAZgJNTaKDqnz7sn7wz7yyST3Z9DMOD9MEAAAAEgAAAAEwRQIhAMMMuFe2r8XIN3hJoaVyve345ZKuEQEoINbiy1eqFI3PAiAjsoR1NxbFzvocVPwmztBDPkRejPmMtkzTI07t/6vjXwAAAGYDTU5FGpWycbBTXRX6SZMtq6MbphK1KUYAAAAIAAAAATBEAiAofBnAW34xAAYumHHXJ0pQ9MF3qbxLYqZcAltSsV3ntwIgDnfOT1FgmiFCtWsPDEdyL3hdsJgheNC/MSmejIW/4eQAAABnBE1ORlTbfrPt6XNmWxu58wFoYeMlUGLk7QAAAAQAAAABMEQCIBx9IWfMuvcp0cKMmQh9hMWJ2kz2spQrTqu/FhvqV0JCAiBh7F5ACy2ex7e0do7W9txYW7inGCxTIoO9GvWQomMAYwAAAGYDTU9ElXwwqwQm4Mk82CQeLGA5LQjGrI4AAAAAAAAAATBEAiABQs3SV99aUPxDZaWqbaIMmm09EyxjpZsGtl56xYH/iwIgfLujet5w/HZGW5NyQi9zDKng0qNa2gn3YUW/XZVUuVYAAABnBE1FU1RbjUP/3kopgrmlOHzfIdVOrWSsjQAAABIAAAABMEQCIGdP9RpZ77mUyw21lG92fh7uP+lPNDZSILMsUS9eQM4hAiA5tydUaMjyymnQNWqJ+qblZNn62wrQN+GLayHtddoEugAAAGgETU9OQSdfWtA74PoiG0xmSbiu4JpC2UEqAAAAEgAAAAEwRQIhAOJsf48M2IwIQrjY70fHHQq2bO42jRHczuyed8yfognEAiB1g6SRoZ7ibOVCXhz2rdOBepgaY7l7/7x+y0B9FyZ8egAAAGYDTVRIr03OFtood/jJ4AVEyTtirEBjHxYAAAAFAAAAATBEAiAvzrfnQaD1CIN9y9v2rEVz77Gv4a0g+fFIrd+a3xjAsgIgEkwF8kCQFr6AbM9X+eUoqF2mRTQmtvgOm10m0moXFp4AAABnA01SUCHw8P0xQe6eEbPX8ToQKM1RX0WcAAAAEgAAAAEwRQIhAPuayJLZzXw7I0fpn851qZJidGBHiHbFl98IsIxsSd1CAiAoCWhwNkpGdHrbV0UcoVfdFa5uW1rJqr4hVqHJPG3qbgAAAGcDSU1UExGeNOFACXpQewelVkveG8N12eYAAAASAAAAATBFAiEAlj5BX+o/aL9vNPzGmgvBN0ZOX4bup5PeCMgGZLfzs6QCIBbJG3+bJdsxK8SX01cckNFmJ47lO3xkMjzhl2eBRJmIAAAAaARNT1JL9VK2VgIsIYwm2tQ62IiB/AQRb3YAAAAEAAAAATBFAiEAkdfrOZhZ8RJIyDiABv0Vje7dVfRfYlF1Pa06jTkzF3kCICVHViQWokofxTgp3j4DHzUEyBPsNv/98rc0lM9tGnS4AAAAZgNNUEhjacPa38AAVKQrqLLAnEgTHdSqOAAAABIAAAABMEQCIC5KftnO/3im4OBLMEdgIOqfoTAsTmAL3qVEqUa95j/yAiB5WeIYwLtjSOzx9+pH0KYwQDDKqv0ngkw0Wx529m/sFAAAAGcETVJQSHsMBgQ0aEaZZ9uiLRrzPXfUQFbIAAAABAAAAAEwRAIgC65gOmfObocPFt8IclHDCRV/oD4Q8mESxSGDywoCAxACIDZ8T5mPb5j8QMi4Oaj1ey7hQRB0DXi6VxOaC3HHZsiEAAAAaARNSVR4SlJ9j8E8UgOrJLoJRPTLFGWNHbYAAAASAAAAATBFAiEAmjUeNVpPrFZHPWseni1sK4jdi8M/FhTcWVIbhw+5+BICIGaJd5sMVTDu8T3iJ+LgpYRdiMrmHbY1xOx6eeTNrWAFAAAAZwNNT0OGXsWLBr9jBbiGeTqiCi2jHQNOaAAAABIAAAABMEUCIQDA6qNMh3yXwGavW1HJVFsAsRzUOL/WQjNlJ2Wa+dnyhAIgFN2BwxFnmGUBoI6mBJ3lFFoA6jDihF7FdFq1XCaSe2YAAABmA01PVCY8YYSA2+NcMA2NXs2hm7uYasrtAAAAEgAAAAEwRAIgWACLdMWNbEyWtysSYQlABSZQsyQAdMmbqd764+kMXk4CID7AhYvFPvDGv5hwfO7W1VjFWZuC2a+ut23Loy5gjqJZAAAAZgNNU1Boqj8jLam9wjQ0ZVRXlO8+6lIJvQAAABIAAAABMEQCICtoIRHGPqFsk4vhDWjTmOImlweS20ylRtV8w/mL7QheAiATNL6D0iX5lFl6I3T6Uc4JmN+mR+3OKVInYFPIgVAS7gAAAGYDTUJMuHnaiyTJuGhd6FJs9JLpVPFl10sAAAASAAAAATBEAiBYXmhuJ2mVOmjaPDhFfiVXcGEo5rBXmbUiIvZpM/lVswIgewfb/2RmErunt9DNI4zqTUn9XAei6PGuUc9+gQjq6nAAAABoBE1PWk9EvyKUn5zIS2G5MoqdiF0bXIBrQQAAAAIAAAABMEUCIQCzBYrpjKbVexhfOIboE3fT8u75Tr0zT/yAXltgiTVgfAIgHA5AVpcJVuKFkspp7hOpoLDShUseLZhm0KGZ9QirC9YAAABoBE1QQVk4EKTd9B5Yb6DboUY6eVG3SM7PygAAABIAAAABMEUCIQD4q5ec4/n/uN9bj7KzZobz0aat0Ad4tuuqRT1mbRpPmQIgL+t3zCwq4uULtAJgAhcFpUXInEOwno5vJD578armzdUAAABmA01SVqts+HpQ8X1/Xh/q+Btv6f++jr+EAAAAEgAAAAEwRAIgfAWqPvrq7vgquv81ZZvGSXbwee1CHcWluwUxAaXhtoMCIHNBfYIPxOwGvWofZjH4ZyFKHwdMvl+YRO2VRdYkk11rAAAAaARtVVNE4vKlwoeZM0WoQNs7CEX7xw9ZNaUAAAASAAAAATBFAiEA1NPAWXIHYMhe5bLbWiKyNIRGGgOvdN/did1aLH3XXOkCIE6Q7lgv74+o5/0rjvTUJiiamk3ENq0Bb6k84cXSxx14AAAAZwNNVEPf3A2C2W+P1Aygz7SiiJVb7OwgiAAAABIAAAABMEUCIQCHy4+nA7Ck65VDho5ftx4xQhGIdHLseST+KjnZhVsUlQIgF58U3VBfHmRuNyMJgtv3M/NYrXV3tXTHgxVoq3Tg0XQAAABmA01QU5bGRdPTcG95PvUsGbus5EGQDtR9AAAAAAAAAAEwRAIgSF20oerdy9Dh4gMp9ht0LnlpF/Uc1nW7xMFfSTBHmkUCID6b3MY/s5a6kzLx5NwR3maIvk1ZDeyEcY1ZUPxE5Sy+AAAAaARNVFJjHkn/d8NVo+ONZlHOhASvDkjFOV8AAAASAAAAATBFAiEA9QTM9v4TnGSWUbkkS5mLIf9+/xN9k0eDRVbdLsMN/QsCIGeO3C0T9YyRYzCFboR0bEyHaFievfPht80Aj9e5gfvCAAAAZgNNVFgK9E4nhGNyGN0dMqMi1E5gOo8MagAAABIAAAABMEQCIHNvL/BjJuU7F0BWj14VBzfBGZItncjPW1JiJDsqfCheAiAFt/JY/jKi21EAfaYVqUho4FpHhLwkp1DoqNCePvj1BwAAAGYDTVRWYibgC8rGiw/lVYO5Ch1yfBT6t38AAAASAAAAATBEAiB20HHspi8TnC8UquDUNwd/4GeZSYlex1eKxSvMu+VwwAIgJw+TvQPIwrThRt3fUvh7gDXvHv1IvS0xGpHglsMdcRUAAABmA01UVoqmiKt4nRhI0THGXZjOqoh12X7xAAAAEgAAAAEwRAIgfaQ7+Hg7TMoSUJYRLG7Fng+ySk3C/dlgVrZtvfKpz+oCIG/z8BHtCVyfSIaEQmVbA1pk21tCCKdGKgScpdHlCjbnAAAAaARNVVNFtspzmbT5ylb8J8v/RPTS5O7x/IEAAAASAAAAATBFAiEAhsKAGBGP/FrKNFhpEgnQUqDT/oZvAu/A75fs8Z7vFvsCIAMbY4CE55EaDH7A5okVBemiLU1XNxPlgBAqHqgYOtsrAAAAZgNNQ0kTiodSCT9Pmnmq7fSNS5JI+rk8nAAAABIAAAABMEQCICjez4zZQl5dxA1+V+VEEgpcwg6j+tbjI4IqEj2q3dtdAiAeeLJ+i57jaR99nQzQVHhcBDavmy1Yv/K4kk72Chd2ogAAAGcETVVTVJx47kZtbLV6TQH9iH0rXfstRiiPAAAAEgAAAAEwRAIgW8aR9UAgLHuWFIQNh2qIoY+T32ulW6FfiURI7FhRjeECIHCCujNLStX+8/Uc6bUb0cTU6bfMZdv4LwlC8DT+wkfPAAAAaARNVVRFpJ10mSca5xzYq5rFFeZpTHVdQAwAAAASAAAAATBFAiEAy+m79sHnyDmrJGY+dlO0ZW954BYLmtuJtBpcizBIgsMCIEteBSc8EMFF7eFZ0RGadDEXpK3Dwx/cM2ANLDxcwJbfAAAAaARNVVhFUVZp0wj4h/2DpHHHdk9dCEiG000AAAASAAAAATBFAiEA0rAL0UqSXQa4n9G4R/2uPjPENxQb3rMqg51Phk6ncaMCIB2mtbCnTBr80kRu8nSN47XE5ugbNLsBTUIHW3bJcgRPAAAAZQJNWBHu8EyITiTZt7R2DnR20G3feX82AAAAEgAAAAEwRAIgVlA/zNcwPXxSRgqxrKAZlCNIRuTfaZP1STXnGK3ZZNUCIH9tEsH78E4t2MPpasaHqnCe1nATJqiFeefps85PsPo1AAAAZwNNSVStjdTHJd4dMbno+NFGCJ6dxoggkwAAAAYAAAABMEUCIQDWaTlVaiIwu7eFBfa7DNWqHm4JSUDHfe3ffjgGw8ZpzgIgDHK+s8TKtZg8g/vst4PwD4Y0+cp1+qx4Q6NfyVKr7ysAAABnA01ZRPfpg3gWCQEjB/JRT2PVJtg9JPRmAAAAEAAAAAEwRQIhANWkqbRiFsTCAgKIQXY9nzthJxn5UA7hFT8BLOPckMCdAiBTcdKMwSadOrdD7ayKIXJwE1B7+4Q/jp01LaVCgxpuAwAAAGgETVlTVEz4nKBq2Ze8cy3Idu0qfyap5/NhAAAAEgAAAAEwRQIhAPfjd/z2VbyrNE16u8DKp1papQvEyjabfVky7N6wvw7rAiBP8YdPgX0+2Adv+zjHPDqGpB8lv/bcuwqtzILlrscEawAAAGgETVlTVKZFJkxWA+lsOwsHjNq2hzN5SwpxAAAACAAAAAEwRQIhAIx5wKQxv2+ig0x3ge7liPtYDhi+v3/b8HsEk93pq4IoAiAu5moJdssCAL+sVIUprsX+MiFOWoJ7wo55hVMwVMeb1AAAAGgEV0lTSBsiwyzZNsuXwoxWkKBpWoKr9ojmAAAAEgAAAAEwRQIhAKuGNHUUbrc7Inh5jASKnTqf/IbK47SSoXL90BLhBgXqAiBPgyVm6D1HQoHYs3xeQN8gHK7T1bwBrR8FpEsaaJRi5QAAAGcDTkdDct1La9hSo6oXK+TWxabb7FiM8TEAAAASAAAAATBFAiEAq+u6uLpEuaxoqFmfRZ1Lw7rlLoezbvy+EIodcfDK8RECIDuKWaBt7lL8RbI7FHmPRbyVaGkd95JEwy9eAGCJFs7zAAAAaAROQUtB3ygvFw88MqycSfP1vh1o5a5ut0IAAAAIAAAAATBFAiEAvuWLonmY+76Dx5J8/QHoDUasb2QzndpaDYEnzk2yC9ECIAiI8eoY4+fSqg8hFe7DFjZJWYmttjX7jdxSEUE9s9YcAAAAZgNOQU0FmEAGcHWF9mRl6KZQU0H0a2T6egAAABIAAAABMEQCIF2Co5zNk+RaAvH29gEiHTiSLUw9AJemEaR2Hpkc57TwAiAC21FW3Xm5Qx0J0RB29EUn2fafQiLZrwuNQ5qrIFdOggAAAGYDTkNUipxN/oudiWKzHk4W+DIcRNSOJG4AAAASAAAAATBEAiA4DV/3HEXgr4RqS+ceqEj6DGYcufBGMAw6F1vi1ub/ggIgO2+A8UsqFh19RexrbT7/kr4qZV7KFbSDDbsECGc8n5oAAABnA05BQ42A3op4GYOWMp36dprVTSS/kOeqAAAAEgAAAAEwRQIhAPmj7qGX1aZkUtcfiDn+VJkN7v2BIm5DvcWkpH5IbwlTAiAuywuHtgbYK4Z5y1dJZS00GxjKADf096ElXnqyJch9JAAAAGcETkFOSv/gLuTGnt8bNA/K1k+9azenueJlAAAACAAAAAEwRAIgLEVmsgNEcQGg/EIWOvqUeV0GfROTsX0zBaoaWkN6KA4CIDG/rwG8J26Uomt+No2Sj95XgSpqyXW0csPp4hl0fyjHAAAAZwNOUFgoteEszlHxVZSwuR1bWtqnD2hKAgAAAAIAAAABMEUCIQDfrO4XWNQpPAjrRBu7mo/NhH/tCjIPbaoS/i+MlS6HuQIgIgC0wEu7msjSrZZFj8VK2M2hYksUoN0KXrzIzQGnJ6cAAABoBE5BVklYgEc2XfW6WJ+SNgSqwj1nNVXGIwAAABIAAAABMEUCIQDEjVXL6qPYuHDMcMgNdL5SgmE8WL6rbu3lmq7vl/IZVAIgChds4ck0a94/lniwq9kkmWvVGkqfMjlIiitPoKSaaEYAAABoBE5DRFTgyLKY20z/4F0b6guxukFFIrM8GwAAABIAAAABMEUCIQDAu5UYAX9jX/DYoKUytTbIL6ugdgCQG/1UTaNKsBwfQgIgSXkfDjM+QiWMrnPBr5tSthR1MwtqMl3LWXYsk59nBaoAAABnA05EWBlm1xilZVZujiAnkmWNe1/07ORpAAAAEgAAAAEwRQIhALAawK03r4Vo/YSw2Ojz1HK0pe1dYzlUJ4ZSgqoOMdPRAiBNXBWiezJ5uzFiDQn1qe4GFDiz7+AZ3X5ov/48ohQ1FgAAAGcDTkFTXWXZcYle3EOPRlwX22mSaYpSMY0AAAASAAAAATBFAiEA8G6jbC4eB+r4ZIPm5K3P8MtPwgN2NzdehuneRCtS0agCIC93AcJAFY98pH3h4AdVNlbbdzYr9p+A3ae60LDEmnPXAAAAaAROQkFJF/ivtj383MkOvm6E8GDMMGqYJX0AAAASAAAAATBFAiEA5Kp3aQfMhMCfACrBhyXCoKbB1605IepSHB3j6CZIaaQCIA0/fZsiskH7dpcnF8nwWVT86HDoqSC1UnuHTW/CFF4LAAAAZgNOQ1SeRqOPXaq+hoPhB5OwZ0nu99cz0QAAABIAAAABMEQCIHE4bng2XTsV7nA7xmCXTdb2gIMTBmo9d79xE8uGNz0fAiAJUcek4OYTs6ZYH3tF99ZRH67i1/ZVRrszojFs6vtRjAAAAGcDTkNDk0Szg7HVm1zjRosjTatDxxkLpzUAAAASAAAAATBFAiEAqrykl3iUnRt1KjwwGqodZwBGbmOkfXCNr2TOQSpJnL8CIGBc+MmSoZSCHK91doNiX8e5cc7XXGl8dR+jSCFQBOkLAAAAaARORUVP2ERiNvqVubX5/Q+OffGpRII8aD0AAAASAAAAATBFAiEAyoDVsNlxPyy8t0rBDrn4LM+WSy/OrxoAxXBOm6GT4QoCIBf641d1deXNNArh+rldctrgDcC/YntOVZINLaJny4ANAAAAZwNFR0dlzNcsCBPObycDWTtjMgKg88pqDAAAABIAAAABMEUCIQD0xaPMKop4WZ7nn/sw12ZQyjIBEq1Xospz5CxMD4y9PAIgEQWRVlA10Mxbf1JuZwvfDoDH5PeUY0jlEukJ1MlgePYAAABnA05US11NV80G+n/pnib9xIG0aPd/BQc8AAAAEgAAAAEwRQIhANIeme8GcLy10d9lANgr5x32bRorU5XZlvLsHSnsiOPUAiBWVDSTuR+YlBFyeeEfnedo+g14drij2eczZ0k4QqiUogAAAGgETlRXSyIzeZ7iaD113++svNKibHjTS0cNAAAAEgAAAAEwRQIhAMd34dhStaEevcSXXA6V6Qfv3KqNpcrSt/g2oqjbWfiUAiAaoFs7inN+NH2NevTd+ZK8PfuJby25bCJVINpHTY9XAgAAAGYDTkVVqCPmciAGr+mekcMP9SlQUv5rjjIAAAASAAAAATBEAiBCSC4g4rXVNA9uakeOiFHqWZyg6BI4Uh8ff7RoPFjfAwIgYBzsMjuWFrBVTbyWo47f+voS4rPjNHCu83+/KmULe7YAAABmA05DQ11I8pO67SR6LQGJBYujeqI4vUclAAAAEgAAAAEwRAIgem4Nwggmgki6eo1K0Zq/T4MrITIdqqnNXLMNB5sGGzYCIA9vS51OQ0DgYmbE/r4oiQpY7s9EnKjtHfYZC7uNLlIIAAAAZwNOVEtpvqtANDglPxO26S25H3+4SSWCYwAAABIAAAABMEUCIQDOJ6MZc9dMLqx8gnqfrg6hiXvLaFnilVX71rmjwgex7QIgc/qtm/WFSOX7lUwTSpaGa1hQdUxlfWqGAXwWU2sRjh0AAABnBFVTRE5nTGrZL9CA5ABLIxK0X3lqGS0noAAAABIAAAABMEQCIEYyZE4mnj6EfeiiDxL8svH32c7e1GRVpcTrFRk6uWvBAiBavkdhcmPWtpMgvK+FLyNqswYUSXN9eh7YeicLZ7eIwwAAAGcDTkRDpU3cezzOf8ix4/oCVtDbgNLBCXAAAAASAAAAATBFAiEAp+5SlxrbKEJPeBZjvEm9lIH6qXjtU6nI1bpYqADwLZoCIDbDrrwFsEqbzzHTx21skWxOD4FhsSD6cXasHnFZTuKBAAAAZwRORVdCgUlksbzq8k4mKW0DHq3xNKLKQQUAAAAAAAAAATBEAiBLlkGoh/LIVhSbZ/Fg3N4DlIpx6YIW2e5CcbHQg2QQegIgKqYWIhO51nmRbT/BtjUPpvIAgfefI+0Wi5D1/MsG8G4AAABmA054Q0XkLWWdn5RmzV32IlBgMxRam4m8AAAAAwAAAAEwRAIgWlShVW8Z2GMVrDumnJoygV19o65MX9fyd4OMb4BSBesCIG9qMjPPoz3HvTMK5yvhTH4SLdzfAx7DerpnXob6gbu6AAAAZwRORVhPtiEy41psE+4e4PhNxdQLrY2BUgYAAAASAAAAATBEAiB0kG0jHBzp2JL9sbV5X544on110gVCGz1c6AOnogiE1AIgBDaWP1ebkUMa7Vc56mJmUN7kBU7eJ5gPdM9LYqWt0H0AAABnA05HTe0NV0epqwOnX7/sMijNVYSCRbddAAAABgAAAAEwRQIhAPtdIR83OkztxUroQwr7BphkaJv3MxWNpyGBnG9eAqNHAiB+Lu7WSAFalEanEhUuDF2Nt03Kg0EVSBKiJ8jjPrHPiwAAAGYDTlhN18Sc7n6RiMymrY/yZMHaLmnUzzsAAAASAAAAATBEAiAWde3FsC8OdpDCagqDSl71UjhEIP9Sl5ZPcTifOuzTAgIgOaQJW8Xzqisshuf3749zX7GC8R3JnQ+fnhb3rQhJHHYAAABoBU5FWFhPJ4qDtkw+PhE5+OilLZY2DKPGmj0AAAASAAAAATBEAiBvX2cVw8Lc5iQkszoZ9DJzDrqbqYMR+etl1O0gggj+XQIgLlnV0Cv3DAglC6PtZenpFYE27dluwjxwNmFj3PVz4yIAAABnBE5GVFBou4Gz9n96q1/ROQ7LC44agG8kZQAAABIAAAABMEQCIArBC0UCft9CJfBnZsVb8oslx6bPLQLifNm9aSzyEQ8bAiBzg1aYl7+cW5GQj7AtXLC5GwgyivgS1OMgoQSzTpHG3AAAAGYDTkZUy40SYPnJKjpUXUCUZigP/devcEIAAAASAAAAATBEAiBtV1taqQCfBZU1483jbaLQ7Yv0lu8jh6kvHJO2RhkEPgIgdFMnx9/xmHQYb6KHmxs0UbpF88xoYAIOOYXiNWCB9tMAAABoBE5GVFiH1z6RbXBXlFybzYzdlOQqb0f3dgAAABIAAAABMEUCIQDZvmUt4Gde/BF524W4mt/IlCC0XDi3P8zirc+IuzuyxQIgXwoiGq1iUqXhxRXCGIp7TtXL6rpXQ96IEZ7mD7f7uaUAAABnBE5JQVj3GYJ2LRQfhnnrlE+uyM7EFfteIwAAABIAAAABMEQCIBaDn7OtkcZRRxYOrwyauy6mpgP5nqwxNX/+hwR9L93HAiACvw5M7K8TXrbMw03qX4yqCTSyNqgR3U5qmtZt8O33MQAAAGcDTkVUz7mGN7yuQ8EzI+qhcxztK3FpYv0AAAASAAAAATBFAiEAjG9Mha8qhlh049EYrbnyi650o/vs3F9txtRU9/q7NcECIHxBVVCVmfFU3x/lWtZz4Orqmvbch2PPaVItXUMQODEhAAAAaQVOSU1GQeJlF6mWcplFPT8bSKoAXmEn5nIQAAAAEgAAAAEwRQIhAI8deQr6I7ljrrkRQ8pGLIEJryeqZ3GdwfAnn0qknAOgAiAfUyPm5QgPDVIjhWQXqKJ/uDigiGpK580LST+tY8rYVwAAAGYDTkJDnxlWF/qPutlUDF0ROpmgoBcqrtwAAAASAAAAATBEAiByAAE0MVBWEuIV5M3+8y34VbpwvDrcrAUTohRJhFzV2AIgTS+5GMtO+k6rlZNH+5gdrBaL267wUObi8DDNzoRfV8cAAABnA05LTlzwRxa6IBJ/HiKXrdz0tQNQAMnrAAAAEgAAAAEwRQIhAL2vwGIO19gUuxaHS3HWCFPv3W8Cq35rwnCdww5l80S9AiBesEULNRI2W47GHiBe5Pv+hhLmJNskL/d8Koct9lScJwAAAGcDTk1SF3bh8m+YsaXfnNNHlTom3Ty0ZnEAAAASAAAAATBFAiEAwYqAfXz/ON4H/gRKyhM+67RvC5fVvsqK7SWpQjDqS3ICIH5WoYNNUNRUir60nKj3H7/GAdzMBxUleo8GLd9zio/YAAAAZwROT0JT9PrqRVV1NU0mmbwgmwplypn2mYIAAAASAAAAATBEAiBddErYODtewV2VPlE7bJKWz0Dj5ZEJH08bxBsfc5UDwQIge/SVlwqR+dsITW36bYs8vi0xQSbNKvnQyO+sRXJVm+sAAABoBE5PQUhYpIhBgtnoNVl/QF5fJYKQ5GrnwgAAABIAAAABMEUCIQC7lBPoEYeP7kHMyEx7+89Z3etynBxfRYRzRi5TIZETWQIgV3n7Voz5+g6/qZQtTqiuq5ZOJqNORMjbUOGDYt662yoAAABnBE5PSUGoyM+xQaO7Wf6h4uprebXsvNe2ygAAABIAAAABMEQCIDUslLX9DonLpr0bCO7DAldVuGPeQdNlxZ4pLrebmOfpAiAhtlmdYQJcZqdT7n+3sVojSLKx7GJgBW8YTKNc8BRKzwAAAGgETk9JQfyFgVTAssSjMjBG+1BYEfEQ69pXAAAAEgAAAAEwRQIhAIGDduI1ool6M653y5W5whrRgr+ALLHnhoXJmSYv3TT9AiASsrJWn01o7c3xfZtIXyybfl7kFE/lQSr97KhUomu0FwAAAGcETkxZQc7kAZ/UHs3Iuunv3SBRD0tvqmGXAAAAEgAAAAEwRAIgM0W0XCYQ4YriPanTMa/+5hPGbRqCK2+tWLvljlCk6g4CICU2eLNg/5VGuLeBZOFaj6UC3yiejWmwKnn7sZbsYdhrAAAAZwROT1JEbpcw7P++1D/YdqJkyYLiVO8FoN4AAAASAAAAATBEAiBJkRR7xSeqB5sGXpB6D6df/LzJR222g4BnSuAU7EIMCQIgSacGxDkOUIk+4qSc5BLMPSBWHTgngTJidD4iG3w4IRoAAABnA05PWOxG+CB9dmASRUxAjeIQvLwiQ+ccAAAAEgAAAAEwRQIhAM5Jb/6iszoYbzxRpJrsshuPbtBydRLjOVCbrD4CCXeeAiBKGLq50Rfbs8FznqtRDjPIz8QlA4lVkwtxmuBKWKbEsgAAAGgETlBFUkzms2K8d6JJZt2pB4+c74GzuIanAAAAEgAAAAEwRQIhAOq9vNhzbH7QknoncvlvkYV1IHaCXtm2I1xNT6JtZhCbAiBYv93S3P0ThFcU1cX6/mPYDyQhMtcTvB62l2S9yZewjgAAAGgFTnN1cmUglFyh31bSN/1AA21H6GbH3M0hFAAAABIAAAABMEQCIA49ING27R48Um4NTX1AZuLu1suxFLIKrOJbVFyyQ6LlAiAxNl3I+xBG42nNwTRjks8d5/8fPPQfMgowNTmuWzNuUwAAAGkFbkNhc2iAmCbM6raMOHcmr5YnE7ZMtcs8ygAAABIAAAABMEUCIQDhsAeG1fb2Hg77lOJZflQIq0F+CehXVhwCXw6BsvYr7wIgBP2kT5LdvXPiZuqrC5OkpJzOzjCJ/MhbQwUrA8VUfSAAAABlAk5VT+gyE9VjCDMOwwKovWQfHQETpMwAAAASAAAAATBEAiBdCXOBX7Kbd0K+Bb+rIYYuiz1DG8p1aEM09bAdWl+exgIgfVsw35DHrfE4vXBmeHiJwcg0PargnPC4IuS6SqRxwAsAAABmA05VRyRe9H1NBQXs86xGP02B9Brejx/RAAAAEgAAAAEwRAIgMkBdhaCUs6JqTVnfpcXmsJBZP92q9Rephvzm4KisbOECICSVnND8y1l9Rwglg/sivD/+rTtjLgFKVX/VbrlQqi9QAAAAZwROVUxTuRMY81vbJi6UI7x8fCo6k92TySwAAAASAAAAATBEAiAIFpE/TJ7klal8/jqOsbOyL2dOkE2R2GP9KqmhSZTa2gIgKfCw9PrTqKTEn1z/AWjejP8AiCwhnUPZYZ4ly66dZNoAAABmA05YWHYn3kuTJjpqdXC42vpkuugS5cOUAAAACAAAAAEwRAIgdS9km7EPhyCZJ6Tk4abI46j0+uBlC1gokRylt2r0bEkCIFOFDItILh0kaFJKIE+Ouk5Hy0Nn+ZLwUSPWHNWl7qYQAAAAZwNOWFhcYYPRCgDNdHptu19litUUOD6UGQAAAAgAAAABMEUCIQCmFoRsevy8y1EuQeJ86FOfbGExUwt7f3ZNoAqxfXZNDgIgFfFdSkZ4Jz15q1BVT2+Y8VCoXhSkeLDenKHKK0Asa70AAABmBE5ZQU7JznCjgZENCpCzDUCMycdwXuiC3gAAABIAAAABMEMCIGK4GfvBPCgARjK2iezPQ7T3DBO0H5ZKDDXUHIdwWrolAh8pRQrirHjdNzoK8zwbltkEqLjkroumYa0Oc9SbtIR7AAAAZgNPMk/tAKLLoGZxSZnscDNQ4KW2t6tmywAAABIAAAABMEQCIHyxguEebNximNLPTbu1/8Xa+r6ypFT+rgdrif8dDlAsAiAJ0hezQVuv3EGXqNj3TdWtPd7CVB0Cf3pPVMItO3c42gAAAGYDT0FLXoiLg7cofu1Pt9p7fQoNTHNdlLMAAAASAAAAATBEAiB2eYIJejNnwiDdsCZ6ljpFhGnQOaaCMmAjJyj/M7aIWQIgdRYgERa5nL0b0ZRaiohvHAONXIwsR4KgEp9HalKCXYsAAABnBFJPU0WI6ovG4aIrggH0S+CgaxhM4V+nLQAAABIAAAABMEQCIFRICGyvYeGcxBX8KjADn46LgqzpK0+uV9tO2LwsAQp1AiAQ3ghb5kNg8qj3OEpM0U+/UuwNnWtCsx9H0K1Tcv+BlQAAAGYDT0FYcBwkS5iKUTyUWXPe+gXekzsj/h0AAAASAAAAATBEAiBNYs0J/95Tv7GO4RterZE5v3DRXx0WAK1yKPs/H/AAWgIgebul2fpdTK093UIpK1m67ZuTsiMnB+8ebawCn7xcE7AAAABpBU9DRUFOln2kBIzQerN4VcCQqvNm5M4bn0gAAAASAAAAATBFAiEAqG3msPfF6JgU106V8KzbQCfSL7q611KCwyA20kwHw6wCIBqSCrlD8FGQy6zWvAvN9qHvekhZezaaLjOjVUpOn9rHAAAAaQVPQ0VBTnr+u7Rv20ftF7Iu0HXN4kR2lPueAAAAEgAAAAEwRQIhAOA0fv2vnYnL+JiKoj1//pxzsTjqB3JeDezTSQRNBeAXAiBL8UEr6Ctel7LGVY5gvPn0EScWMny6CYLlYP4hW1S31gAAAGkFT0NFQU6YXdPULeHiVtCeHBDxErzLgBWtQQAAABIAAAABMEUCIQCtisL7bWLoGWpQwIBLWCubutijvwaEJcpcOGnSYN0dHAIgOO3AxDvnsLmScAvEi8Rt9isKv7FTTUsJ3AcnpI9DR8MAAABnA09DTkCSZ45OeCMPRqFTTA+8j6OXgIkrAAAAEgAAAAEwRQIhAONHfU0Utg1M3nLXLhUzGo3b9RVNGogWN8qqFdQZ0/4bAiBSNvLJf7Y2Rb0+i3e+Azajy3JYFYLNfiLGtbSvFLo3MAAAAGcET0NUT3JArJHwEjO6r4sGQkjoD+qlkSujAAAAEgAAAAEwRAIgaFJB1efYfcS+vujQc+4tGMzHu0hEgIv/lJedXR4K5PsCIClTB511bSK5QML7T7FLdlc6QIerxVkcCg4JJCDN8TsBAAAAZwNPREW/UvKrOeJuCVHSoCtJt3AqvjBAagAAABIAAAABMEUCIQD99qaanQvaTqfKxZl+iWAHHB+0qemz0eS3musux784cAIgdCR+U2ngDfnPItgMuS+kqD0mJKwYu6CzacOM9eDUfjoAAABmA1hGVKvlgOfuFY2kZLUe4ag6wCiWIua+AAAAEgAAAAEwRAIgfV4FHshZ5KqhogfA0tLMhi+3ycKH1HGNu3DcR2oaJHUCIAwpEU1tvtWwlUf/KunWS3qDSIvrreR7rRM2ncdil28KAAAAaARPSE5Jb1OalFalvLYzShpBIHw3iPWCUgcAAAASAAAAATBFAiEAqDyuuYX1dGZNa2oewMKdnPnEFqaMzhP03q6yrwCv1McCIDIuUWPfuwYg2Z5xBupgA5gA4a/tRhY6077mjYZtbbLxAAAAZwNPS0J1Ix9YtDJAyXGN1YtJZ8URQ0KobAAAABIAAAABMEUCIQD+f+AewWNMejDdViaR9nTX0hggwrjl5IF8FwHpZI1KJwIgHcKyTij1hAelqi7+J7TfkiVRz0asQyL0nJUKdcpq+aEAAABrB09LQkJFQVIFPluny5Zp3ML+stDh09SgrWquOQAAABIAAAABMEUCIQDBO4v9SVc7kU+567j1ZWByTld26Aqc8pt9kxWM+IBg8wIgdCl3KkDXPS9/vQl7BSZlzb/5f1tisyHyX9JOiJiabqsAAABqB09LQkJVTEyK94VofujXURSwKJl8nKNrXMZ7xAAAABIAAAABMEQCIAqMa2Sm/C9HVEWMnLgQ60amtQE3EqsEDlpJ9BFjp7AfAiA0SsVzJD6H9HJ+XO2Orq77OfjJZTeKyQHd+bSbrBY2hgAAAGsIT0tCSEVER0WIm8YulLtpAtAiu4Kzj3/NY33yjAAAABIAAAABMEQCIDGDxQNqqg2sPVh9+f6VF5pYoasTWUqdAasaagOELzWpAiA8xa0D4aCLG6FSYip0zSEch06CYHQ2uyLDu+85AJOeOAAAAGcDT0xFnZIjQ23dRm/CR+nbvSAgfmQP71gAAAASAAAAATBFAiEA7cIOSI3iATeVZNMeg/pNEIzTlnjIVjm7OdIw52EfZGUCIFOJb5874S/Yom+fIae6t2qXabqMB0nl9J2CoA3OCkmGAAAAZgJPTSuuzfQ3NPIv1cFS2wjjwnIz8MfSAAAAEgAAAAEwRQIhANEzC6cTg3bQ0tRE2znmPx3rfXwRCRw5RJNYCzUMt92AAiBSiRmGq5pMqkEAxVzTIgsbXGs8y/AoxRlEUzMZfAh+TgAAAGYDT01H0mEUzW7iiazPgjUMjYSH/tuKDAcAAAASAAAAATBEAiB/IplDoFEEJbXcq1z/4PYEadPQXFVXobvpwKB9S3BOZgIgEc0Qk2PIde3L2116Wzq1zjcm2aPMCBaPaStIYsi09PcAAABmA09NWLXbxtPPOAB53zsnE1Zktrz0XRhpAAAACAAAAAEwRAIga7dO/IbMMJUmRqds/mIlS+h+lAwgnzJ8wo87gLoQdWoCIDQQKHdJe80r83E4kx2d8LBk4fkLUX+D8ZsYvjVVXZ1OAAAAZwRFQ09NFx11DULWYbYsJ3prSGrbgjSMPsoAAAASAAAAATBEAiBWzanPprP/lDDJY++Ce8X4bliwnuTuV+KSKGfajhu+swIgCWz2IBsdVLZzsCHeeGT1A78xUj/YX5l6o7Kf5asWZY8AAABnA09OTGhjvg58986GCldHYOkCDVGai9xHAAAAEgAAAAEwRQIhAJ3bgmMa2SftQm3Pi81P/uq+8IzvKV2maSWmG1O2PsKUAiBgW6MB2NBSN6EhA18Ue0jvH67PPnMty7Euw1lYYVsn9AAAAGcET05FS7I75zVzvH4D225d/GJAU2hxbSioAAAAEgAAAAEwRAIgYQ9jjBawGUgmZazDzcF2rGGdE4YS5nsaFvRaG4d8hK8CIBDAD+0kiSBwgDd2RNQKUWDm2DOhZnQZcPtKQmCNc6OPAAAAZwNPTFRkpgST2IhyjPQmFuA0oN/q44788AAAABIAAAABMEUCIQDx3TBGjdvBWPQO9q5IihIPwpejQeuErx2dVmgRRaOfIAIgb2XSNpKDSosKjN4XLjn8XZgu17aVyumWt794HpZ1EEkAAABmA1JOVP9gP0OUajoo315qcxclVdjIsCOGAAAAEgAAAAEwRAIgWgtMzlpFgTRJOpoCmVJLhTbf6I7DL8E0Su/Ir8A0oJICIBbQdbe6ksTi5GoYWFRbrJA+MJX0u0tjqVOMrAGF5rPjAAAAZgNvbkfTQdFoDu7jJVuMTHW8zn61fxRNrgAAABIAAAABMEQCIBO6Q5MJH3ssb1G8FxIrJZAL+do9/St9xx16812fj2RuAiAF4TwjXZ0FvwpOez4j8Zl9Xa275CJlfOT3PhHbIkxHbgAAAGgET05PVLMcIZlZ4G+a++s2s4ikutE+gCclAAAAEgAAAAEwRQIhAIvZpeyk3GDX6uXgcPGhaaGNLXp/WrbK7FgyaN4c9B/6AiARjNMVkL2irT9+2Gr/fMHSIDNVd+SaLTcdPMYtdQiMnQAAAGYDT05Y4K0YBv0+ft9v9S/bgiQy6EdBEDMAAAASAAAAATBEAiATSyB0jQg/6NY5GwE8qqlQhEI1ZYAKp4kk4ffhUETsEQIgP7lUguScUE68MR4hwOztcu4eX2kUPbAZ2pIBOgCP66cAAABnBE9QQ1TbBeoId6JiKIOUG5OfC7EdGsfEAAAAABIAAAABMEQCIBZnWJKxdxn1oweG3cBomwXJ6f2btAOWxwlAgFSGRbWxAiA2CBj/XN5sNoBglE/Y+iXSUgVKwPLcFMdBWX9cE2bhbwAAAGYDT1BRd1mdLG2xcCJCQ+JV5maSgPEfFHMAAAASAAAAATBEAiAzL3Js20IHHZmdMjJ0NAjpv9MsUWshoFmJp2YU7Ri1lQIgSP8XVci0k1EiOgcvKILe2f2DwyDBVnMk3UShqEVS7H4AAABoBE9QRU5pxLskDPBdUe6raYW6s1Un0EqMZAAAAAgAAAABMEUCIQD+ycDwfXLGwQzr0VPu97uNuDVgQLZWDKh5794dBZX42gIgCMbg/bCqxFWAo8JIw4kj85caa71gg1uY+3N9Ge3vrYMAAABpBU9QRU5DnYaxslVOxBDsz/vxEaaZSRARE0AAAAAIAAAAATBFAiEA0SSetsImt8EmLvaNFmBJhbFjd1mJY1jqSivjO8oJ288CIEtaJTcIoOmBLAXnESgrfShrAjS1xau0mw7sScNBuFiYAAAAZQJQVE/lhRya8H355a2CF6+uHqcnN+vaAAAAEgAAAAEwRAIgC1unDdaU0+zMEk0RbJGGrZTto01Wy34KE5yVgtn3uLcCIEUbDzRsN/22v06HB0JeQnFSeZnzUA1vWHnoUtsk05bjAAAAZgNPVE6IHvSCEZgtAeLLcJLJFeZHzUDYXAAAABIAAAABMEQCIC64xCqAbsdiwMv1de6Apc0k6IcTXyltfZvoevb7b+oXAiBTogdtt5sHqYA2VjVYqWqsVk9kQJdBTQk9O8W6nGSAnwAAAGgFT1BJVU2IiIiIiInADGdokCnXhWqsEGXsEQAAABIAAAABMEQCIGgWhSGjcUVa5z8wnGTbnet7BG+NUkJiXU+CPVtX/eC1AiA0Yo3SDV80OVuU4w/cO7N5J8FqNO6hrFYkLQay5C7sSQAAAGcEUk9PTa1PhqJbvCD/t1Hy+sMSoLTY+IxkAAAAEgAAAAEwRAIgQTxXgkhmXU/BtsHPSGL1RRwEs3N0wP1iKsBG2q7ZqHMCIHATtG9obHj7y0TUN7AatuBnIsnbmQyfNrLjNVHyu2CPAAAAaARPUFRJgykEhjl4uUgCEjEG5utJG98N+SgAAAASAAAAATBFAiEAnkffDqtp8MB+Cc2oiblOaRgyYN/4zGV4RBq+XPZH8WwCICNLumhCa3qN9uhWlNdQ5ktU+1S2lzN6Dh8hoFobsBjnAAAAZwNPUFRDVfwWD3Qyj5s4PfLsWJuz39groAAAABIAAAABMEUCIQCdxgy2y+2CxYY4vyHFXgkV0kq8ID9dh5OzBNTmtLyswQIgJ4Fmm7YbcihPOwvHuGiF4tL04qUWo7ESnKSbhW41kDEAAABoBW9jRGFpmMw71q8YgPz9oXrEd7L2EpgOXjMAAAAIAAAAATBEAiB8efR4sTp5bohvvsh8BPKe5myDdGXC5TnSYZ/7LUcv+wIgeFWNw/7bjrk/BBb2m7gyZBSxBrQ3Z34c8LNPgHn7iw4AAABqBm9jVVNEQ47Z+GI2P/39OgdUbmGCFLbVnwPUAAAACAAAAAEwRQIhAKBH4TX6rBqEZDwcYQtGyK9xR5kV9ht68pUvDZOgjxvEAiBdip6OOS1RucNAp9S1EDk332BIa1DFjeDZjyfWxpMdOQAAAGgEb0NSVkuoxs4OhVwFHmXfw3iDNg7698grAAAADwAAAAEwRQIhAO9WsqUlvac74Zrii29KVDIOV7qvuSy5cTUGZfoQ34t+AiAw6UyTtcHdweRwLx7HGtSpev6+oVKo7NWEtqojxGnfQgAAAGgET1JBSUwRJJgU8RuTRoCBec8G5xrDKMG1AAAAEgAAAAEwRQIhAM6lCIb1ainFlLpwQvMGz70P+rL6a9pUeAqYl9M5Ax7sAiBAlTjXv9HPlJGFaY9CNb0nBfRkxfPeUsirIhLGRThpSgAAAGgET1JCU/9WzGsebe00eqC3Z2yFqws9CLD6AAAAEgAAAAEwRQIhAL1aG6gj4HrMKQaQ8UUOLrCp6247Zfm7KRSDISOzZg/xAiB4xpajwjqy+IKkGBmASV19jxtkVQ4MtTf6WhFBuFbM1gAAAGcET1JDQW9Z4EYa5eJ5nx+zhH8FpjsW0Nv4AAAAEgAAAAEwRAIgQ+fzBp7y0mPkGV85ajAq3JCrQuntFTeedf3KNBXgn9gCIHxGDb7q1ZWh8GL4Y9JDfrWn27CUChBV9x3Xuy8zAp4XAAAAZgNPWFRFdfQTCOwUg/PTmaqaKCbXTaE96wAAABIAAAABMEQCIA674r3YQxcZeKHGP08u2FnQNMizYuSf4odQn+U+g4OVAiBSJUkYGqypjG6AJcsORs2hExOJUL3TlSaMl04MUCPa8gAAAGcET1JUUG7hDExWYWYTXI3ldM5j9YOvxtKyAAAAEgAAAAEwRAIgdr7FAYBsDeAHgKBbC7YAzcCrkCvvgw9tciD0s3s49fUCIDfGRD5l2s7nDHc8DUJTRsPcrI+dOMksBF4L0anU/I1YAAAAZwNPUknS+o+S6nKrs129beylcXPSLbK6SQAAABIAAAABMEUCIQD10fFMXlo0BaedR2RtCKYMDAu3YAZgnwejhn3LeMtbjgIgewst24roAKzqleGgOAuxOtPooEkejR4VuUdPQwFa/CwAAABnBE9VU0Qqjh5nbsI42KmSMHtJW0Wz/qpehgAAABIAAAABMEQCICelO2fJDUi73MtK5KVIDS/9OU+eSmjGE/BHbqJWeqbfAiBc5lj/97m/cXqcfumdHwYuJfoSlTfP2U4IKpYVCIdaiAAAAGYDT0NDAjX+Yk4ESgXu16Q+FuMIO8ikKHoAAAASAAAAATBEAiAEPx/qUcyo2c2PJnsPpInFQuxMw+Xv5IiQq9H13RlqsgIgWn+orumTfTKTRCu9rcC6q7/kW9PTKML03tx1lLHohfEAAABnA09SU+uaSxhYFsNU25LbCcw7UL5guQG2AAAAEgAAAAEwRQIhAIWKDit9NmYzprccraDxlg9ze9U7ok+DkYfW0dg5SGM2AiBfW6Fx5y5bEw1O/8vf1FLdUsgMAgnxUKa1RoU9qvFvOAAAAGYDT0dOggfB/8W2gE9gJDIszzTynDVBriYAAAASAAAAATBEAiB7Ez56/d46VFWpSS7/xVFBieI+6izbzo5yBid16/zKmAIgFPnIRLQTYzEBEgnc/jf/9iSSNj+IPf7V757r4yU9zy0AAABnA09STgJY9HR4bd/Terzm32u7HdXfxENKAAAACAAAAAEwRQIhAONGHQRu2Th/+X4TdZRUW0teOyoEcGdiX82SybjwInlhAiBzCx0YCg291L0Su8UNz4X9W7zMhs4PAHQ43SI7vLXLdQAAAGYDT01D1r2XomIyugIXL/hrBV1de+eJM1sAAAASAAAAATBEAiB0u0FhvLUkfXK3eLb8sVgrK13e9XZlqPIf0hEeHeywLAIgNv4T/vE8MzBSHYtiQxlnEFRFzk5xIqiIaVL6LzKoUSQAAABoBE9STUVRblQ2uv3BEINlTee7m5U4LQjV3gAAAAgAAAABMEUCIQCF9uXrAbKlXnzxkDMp7D674akPxQ2YU5x5nfXli0S72QIgFmDCBa2QmOVuxll4s2U5UR1eaKIPHkR678XS2wi3trIAAABnBE9STUXJbfkhAJt5Df/KQSN1JR7RordcYAAAAAgAAAABMEQCIAdlKiAECMCs9fUg1iOnQiqfugvO/OZNt5gLAKvFUQRLAiBuBV+9HGAPeFBnlpDePB7ud8BaI86JF5RMXLwLLZU/7gAAAGgFT1NJTkE5rSLJFvQq9fZzcdby+w2rQjIaiQAAAAQAAAABMEQCIFpRCIwWheSHBOXnPSyEm8uQ3OOpg/xoIqRCsUd/S+gvAiB4WQkgX1+BelUrAfQqp2p9WutJE4CMDF/elT1xSQFY2wAAAGYDT1dOFwsnXO0In/+uv+kn9EWjUO2RYNwAAAAIAAAAATBEAiARQd8y/rR5dhsaTwSmXnMcDEs5S20G+p15GK24Z4QcogIgPQ+WoS9gxefJ5vUJ0YMqwjheJ4WwkOKhBBWpgTBjFl8AAABlAk94ZaFQFJZPIQL/WGR+FqFqa54UvPYAAAADAAAAATBEAiAd6nRskf/5GUPmVatrxNLliM90D7ABex/zK0hzAp/asQIgSJyf/RPBb6SbhqsOCXNu4RvhF34fmHka6e3iEwAJgbgAAABmA09YWYabH1c4CuUB04exkmLv08DrdQGwAAAAEgAAAAEwRAIgBl7/Ybla+DO/U5EfBRWQnxOAq+9fQJOlkWXc34pBYDsCIFApedJdAg9JFEKeFCliqnvash+E3d9coZK65OqwnBSPAAAAZgNQUkwYRLIVkyYmaLckjQ9XoiDKq6RquQAAABIAAAABMEQCICRQvuVlO1KTLcxmGOMy1mN86G814rYe54rWwedii77PAiBkLUC7oBDwuTN4RRKEZq4f0yvHDMH5zPktu74F+QQ66QAAAGcDU0hMhUIyW3LG2fwK0sqWWnhDVBOpFaAAAAASAAAAATBFAiEA4RW9yU0wNs41Mq5fidiEkNWuFt0mlw721KL6lfN5KMMCIFA7XVl9BCU1tB05LEhmIr46/A4Z/pXtVqyHPWEf/IxIAAAAZwRQQUlEFhTxj8lPR5Z6P75f/NRtTn2j14cAAAASAAAAATBEAiAhjG5Mdxn5AfsjNHiT11yfMbudWOYgtQsEDhYU4yDBrgIgW6A8aWoa2ye6UKpwE9WpL8+//ANrBuLiAHnL7LqM+lcAAABnBFBBSUSMhof8llWT37LwtOrv1V6djfNI3wAAABIAAAABMEQCIEBsGP6Jq7OF31APwr/1sYz98cEVvv/c8TK263jVUDSYAiAsZ5kNTsbsJsjW9RDpzGpNNzR1oE1YLYAqBGNy3Xjo1QAAAGcEUEFNUPD6xxBKrFROSnzhpVrfK1olxlvRAAAAEgAAAAEwRAIgW6zYGrs0rOGm96XITn2sF9rMgQurZfOPdRPMKQC7rAgCIGT6iWz1mPyvUyrLLcnzPkgAzJCRWlLYHW2+Avvm9PD/AAAAaARYUEFUux+k/es0WXM79n68b4kwA/qXaoIAAAASAAAAATBFAiEAmx0R8JnD2mQMeunMuYNvVpJS5iGvz8EpCTw3kaKtQbUCIG5oyQp9ZnRyt950VssW3FuSvLHGkS6Qd/AlW7/DvIUsAAAAZwNYUE47nglNVhA2EfCs79q0MYI0e6YN9AAAABIAAAABMEUCIQDlILNlrlRgUyVmt+/ZMjP8GJgR9608ShKAEawXislikQIgdcit38sULxxB905wtkvhxncjzESE4WUL09dMgOoblMEAAABmA1BBTtVtrHOk1nZkZLOOxtketFznRXxEAAAAEgAAAAEwRAIgS4CE6uI/xgAI6aVxuO04iykp/EdliwV5i03uV5l4nEYCIC5Gfi9I+K2Gp+lxfE9aYj1Cg5NcqjLiYgJGO+iyHqUoAAAAZwNQQVIb7vMZRvu7QLh3py5K4EqNGlzuBgAAABIAAAABMEUCIQD/94LR4ufRdv333rY2xqNmNF6wIqr8et6tKoitnP1w/gIgGShO7pRUsDi6W/yXC9OTcSejIQ+N8py8QSVrpwmGD+AAAABqBlBBUkVUT+pfiOVNmCy7DEQc3k55vDBeW0O8AAAAEgAAAAEwRQIhAKszweoUyGbxtWDHwSSdFNSbWr4aaqGo4+yQ94dPfE/mAiADG7/R+D6KigY+3dd1qIAozl7FcD/l3BxZ5r3i7LB7ZAAAAGYDUFRDKo6Y4lbzIlm15ctV3WPI6JGVBmYAAAASAAAAATBEAiBEWziBXIJEQvSNvcSFhONMnrpCvOmnYy6DbXKa9NsKpQIgS7Ni4PvaoG/RuvrUOVW3Ki4qlzlIQToai/sq2rXjKvEAAABnBFBSU0Ogzg14Ohi/L+9gZuVVfp+AyYq8GAAAABIAAAABMEQCIAfaVgMR2I4+KjS4h6fcjfe9+ilnMV0b7UPIPsRefU3FAiALmzUTYtD3Zayo+pc8vAJWDIZfScfJXA8UnvGY609VJgAAAGYDUFJRNivIR6OpY3069mJO7IU2GKQ+19IAAAASAAAAATBEAiA7TMRNele4aXsdu2u4ny+9f9teY26dOmXh2XDgl5wM+wIgHsvGT4UlLWfQOAAX5ftXv7DmXtr4wIkLXe1OkuEYWLMAAABnBFBBU1PuRFjgUrUzsaq9STtfjE2F17Jj3AAAAAYAAAABMEQCIBRzHG2GHBcRQeE6D59jnbW/8/2t40zHcyaJZAgGX1pgAiALB09oMpuK3HlsDd8yqwGrQfT+69TCsEf1rEwPjSbCtAAAAGgEUEFTU3d2HmPAWu5mSP2uqpuUJINRr5vNAAAAEgAAAAEwRQIhANaUqu+dbTtaVJ/1aCJK62k+sC7LqX46q0XDiwWUj8JIAiBznNoQeQ/Jh5a1E1BVFJwsKSEa7AyZ4v7jznfhjS5PcAAAAGoHUEFURU5UU2lEBFleMHWpQjl/Rmqs1GL/GnvQAAAAEgAAAAEwRAIgQQLZ7gZ8TkJN8OXhrzeGFJrHiihnmww1cUgh21ETWFgCIB93rVA7WBY1NAQfWqOBAQvaTJELd3KjlVZp9cR4C0UQAAAAZwRQQVRI+BPzkCu8AKbc43hjTTt52E+YA9cAAAASAAAAATBEAiBAQizegVvDQLmNjYbYHfCOctyW6m2KMy9AikdUzU7o+gIgDcHdHotHjXGjEmq16xES/Jy3gAuThQLneljl72oYr6gAAABnBFBBVFKfumhNd9LWoUCMJLYKH1U05x9bdQAAABIAAAABMEQCIBTIbFAAcecjjx4drHzAIzuF+Qg2NLIZ1Ul9Bw/9JbsZAiBuEJAFiGaYJI244ClHRcmZEO3X98oZ/OGeWDZNpUUEFwAAAGcDUEFU87PK0JS4k5L85fr9QLwDuA8rxiQAAAASAAAAATBFAiEArTvZ8R6/SOJdQjrrfNjDukY7fOEZyf+VYqE+gc+2y5kCIGE70gJyyE1wyaAJf0NdK4I3WAJSNYPzPawUHCmWRK+lAAAAZwRQQVVMjbbaISCzRvqn8gaEHy+wBbvg39gAAAAEAAAAATBEAiBAZmrnxNjBxAKAAYY7RddpUsVlkyVkOTV4x7vad3q15wIgbYoHowl7nS4xKQk7a6qYJv0sWLq8cg6HaxwMjby9cwUAAABrCFBBWEdCRUFSPEpG8MB1p/GRp0WbtR6x+BrDb4oAAAASAAAAATBEAiB/t7WDCgJwFfjHoqitwYHexlEGnMaejAT+b9jVayn+GwIgIcHI5sE6ZuSwJKpGpBy6mnXeHefHbE1cTl7tYSKbCpAAAABrCFBBWEdCVUxMgfCe1LmLHI6ZsfqDi3KsuEKv6UwAAAASAAAAATBEAiAjgvpj68Wm5492D+7V9OajC9ToWKsiq9ULROaGrMnjUwIgZftSFnV9jh7Q8aOsSx7JuLe2Q7li6yMcLqFMUogX3MwAAABnBFBBWEdFgEiA3iKRPa/gn0mAhI7ObsuveAAAABIAAAABMEQCIADw5XZ1tjZzhPyC6M0jB7NF2DHTHXlZ/ZuDddXOM/1mAiB8GnmehtTfMDeEqILuryMf0KigoATqKzxJNIpbB/18wAAAAGcDUEFYjocNZ/Zg2V1b5TA4DQ7AvTiCieEAAAASAAAAATBFAiEAl9GZ/1/PiUvEMMepZGqtD4EOVOFuPQAxL/aFPXH+m4YCICf2qRYYnKCa8OLKp60ovbbHVKoEXw1DJlX0TEDwUvp8AAAAZgNQRlIvoyo5/Bw5ngzHspNYaPUWXefOlwAAAAgAAAABMEQCIEa6w57dDJ4gyb+H5gOwPOSSHz/PfeuPeBj+ZXiRUBh7AiBFh3ISGSIzQc2mfY1aoXM+8j1kM75NfjSBk0HybZCeXAAAAGcDUEZSY1Pq340dRCEAIzK7kHQiKxTVSIEAAAAIAAAAATBFAiEAu3mR+a75pY3NqtrGM5MBAvvonI7PiUqMXq1P0WLgu3QCIGwc/6YKVsJPzAehwwXiMH50nTT1TbylPb8ZYw8+Dv/mAAAAZwRQTU5UgbTQhkXaETdKA3SasXCDbk5Tl2cAAAAJAAAAATBEAiBDjoEyNdKIbIo6wfOqr/QQ+m3e8BfmnoLGmqC+NAzchwIgFiKxckrRZoTICkxdcRXbyQgTpLFVd52SC5iseHCGDy8AAABmA1BQUMQiCazMFAKcEBL7VoDZX71gNuKgAAAAEgAAAAEwRAIgBQUpx43gXT7VY4gn01RMl4zmI72LzQX6PYx3S2+Wa5oCIAXJzOkqH+JFm7sMU1LadGiXik91BNHzU+d2r9mQu2OWAAAAZgNQSVQP8WEHHmJ6Dm3hOBBcc5cPhsp5IgAAABIAAAABMEQCIBNKptgh1JQj1wlhlSfmFK53EEgJHv3Gs3Gg/w5YfIP8AiAuJY/wJj+t7p2YZLb0sUj+4lpHGQxeyI0Cb49NtEvYCAAAAGcDUEJMVWSN4Zg2M4VJEwsa9Yfxa+pG9msAAAASAAAAATBFAiEAm5QvfDmNLgMfiNBd41jjjGtVXfvu+7h9aoJq27EP78ACID5D5V37S1pTKb6fCqgm7t4r5X2P66wOfa0uQa597OMZAAAAZwNQQUm5uwirfp+goTVr1KOewMomfgOwswAAABIAAAABMEUCIQCiF7hlkO4ntp/LxItBBSSj1N0+GiPpatrPdzMEyPfDmgIgfyUyLLO9zNpdXtWIN2of+basX8h32ib9438X6V40LL0AAABmA1BDTDYYUW9FzTyRP4H5mHr0EHeTK8QNAAAACAAAAAEwRAIgG0vxaXJUp9s0E1Vw6rEeSsb/pUAffY21fupH/Iic/H0CIHR43t/Zt6B8m4vWjMCaMJEHOBwHPYjokmkMFngCvoqZAAAAaQZQQ0xPTERTFIu0VRcH7fUaHo16k2mNGJMSJQAAAAgAAAABMEQCIBKC9uXoYsLtmQQoqmf9DAjWaZu2dzUKqK52iH27+8v9AiBPDhM36KVPJSdo9kNkygdMKJu7cf5o++vfpuzNNkCEDAAAAGkFUERBVEENsDts3gstQnxkoE/q/YJZODaPHwAAABIAAAABMEUCIQCyUAfMSXcLzWJ0LlsyJhsdiz8EtRpwjOd6ZW8M0+TxQgIgXBVhBxlFjzE+vdTcy5jBPVnYtWKl1kNNseEndv+rC0sAAABnA1BDTA8C4ndF47bp4TENGUaeK117XsmaAAAACAAAAAEwRQIhANLXSRUkL4/5vaZ+6DQyZJwPx8BrBB5IxCy7ySYoPF6TAiBFMXGNHbCgCz+s4wUjFFjEVRU8P7HWTjvlE9+CLigizAAAAGcDUEVHiuVqaFCny+rDw6sssxHnYgFn6sgAAAASAAAAATBFAiEAg63GhueQMOWfDCWpxB/uziDuX3h5b2RaLNnq3Eto/XACIA2mc2IXJPV5ZvAVClymZYUZa9AnMUCAbP8Ufv7oZ3QMAAAAZgNQRVC7DvnmF/rd9UuNFuKQRvcrTT7HfwAAABIAAAABMEQCIDqisiPob4DO2aTki4O81h93HMG6DBrw3WqQQA+8tyL9AiBHrKgRCVSRSO+xbsCdRdoaaXhgJ7xnC1H45AaOZ2nqpAAAAGgEUEVSTOyoIYWtzkfznGhDUrBDnwMPhgMYAAAAEgAAAAEwRQIhAJMtpIKoOvhBN7IqjPbTL1sAfweT7oelXPZDYrp6QInSAiBYXs/uZ0thOVJYVqmCe0Lp3ieggbqX3EyDVfHZ5E5iZAAAAGgEUEVSULw5ZomJPQZfQbwsbsvuXgCFIzRHAAAAEgAAAAEwRQIhAM23GPxC7SkJkoYkrPP1VWlQLf8myrTfIKgEVfVQLE+5AiB8Dgq4of/xwmkOMkBXQF99ayT+RmcTLsQ73Awo8fDxHQAAAGcDUFJTFjczvMKNvya0Goz6g+NptbOvdBsAAAASAAAAATBFAiEA98Vob2HExd0hdgDIA3E11jYOVTszfp5GgW2SwuCcXGECIFk/Gr7hyB3dxq3i0NNozYxg8i+KQhbzTQmGkMlpAdGAAAAAaARQTUdUr/zdllMbzWb67ZX8YeRD0I957+8AAAAFAAAAATBFAiEAm29x7dn2cxX9nWVUJ+byokNMA0HD0BaHiICsATTkpPcCICrJq+OOeIYtewNWFFq9OqG7gn/1K1EqAjbllGXfym/xAAAAaARQRVRD0dO2YtkfqqSl2AnYBPpwVQsrPpwAAAASAAAAATBFAiEA1MaYqBeMIXAZ2i47Tx6lSVTS2nmqBXo2xxYhtn53nXoCIHeEiQ6abz0q4Vbz1LXRbIG3hs4E0U+ZNN0bk0a/huGTAAAAZwNQRVRYhJaewEgFVuEdEZmAE2pMF+3e0QAAABIAAAABMEUCIQD3tYdwMUV0xGbcUyaBMNraYFJI5f/ahCWTriKswpfipQIgaDKPwmavR3M/T99IjspBPX3K8XkLKOrvRzhWFYMC368AAABpBVBFVFJP7Bj4mLQHaj4Y8QidMzdsw4C95h0AAAASAAAAATBFAiEA8jq7skAB16zMhgN2P3clI7Q3+Mt9B4WY7QZPD7dCohQCIH5xaSM6yzeNCfpLJjLWJJy1l+BOgESv/MOP5k2VihnTAAAAaARQRVhUVcKgwXHZIIQ1YFlN49buzAnvwJgAAAAEAAAAATBFAiEA0CvY0lp7jgaNN6F001Vg8iP6mTNu00bGh8uV7a6aPEECICn1ai881YwcV+Mq+izZNWNJRU1Fbi1YpFp+RW7xMwO5AAAAZwNQSEFsW6kWQvECgrV22RkirmRIydUvTgAAABIAAAABMEUCIQC3lFS2Q76dqKM+1/SVtUQs1uMcDpoDH3pHrOQkN72dwwIgRiGxyq8Ktr3917XWEM39bYSr5ytu3rftFtci5FldYpQAAABnA1BISRPC+rY1TTeQ2Ozk8PGjKAtKJa2WAAAAEgAAAAEwRQIhAJCp9+mltq9rn9ZLGbCU48ONACmskmCpPV96Ia6M8ZnpAiAMnItQEbuV9YYil2al/93gnyfaoXWiGdU7zEv6HxhrigAAAGgEUEhOWDii/cEfUm3dWmB8HyUcBl9A+/L3AAAAEgAAAAEwRQIhAKo2mtPbqzstBH9583wnu5F9ZKFevVfInxmw67Gb2SbnAiBwBeCckWJ0aYzWJZNIgKF4Knu6nKQJTp9nTW+6P9i7NQAAAGgEUElDQR7OFzna4IJTrlgsQEURs3NVtCyEAAAABAAAAAEwRQIhALB6zPdAWVMxyJshgQ4bhXRmlC2wVt02RJZ8l8q36YSCAiBDM6/nft4dU9NX7KYNUTscJ0PUYUVUzcATPgxGctNb+QAAAGkGUElDS0xFQpiBZyua5CuOug4mzZxzcRuJHKUAAAASAAAAATBEAiBim6C8w3fhzmdGoCmjR6/gLRJlBfeyMX/bcK0mSU5j8QIgHx5dvkBsZvpJJIWfQgV/MHSEz9DZUMZRtu8BMUJa+LAAAABmA0JDUOT3Jq3I6JxqYBfwHq2neGXbItoUAAAAEgAAAAEwRAIgXgdFh+hGJBXTQn4HG4IgioYCVvCpbrAXeT188FuO8AICIEXpU3kWHMoqfIcE0a4epLMdRAVEwGsmn62VpbORMGyMAAAAaAVCVEMrKwMnESQj86aO/fH89AL2xcuffDP9AAAAEgAAAAEwRAIge1cUGvNBXRenrrXAdEUNUGyWn7rWq9p/ELfUEBD24k8CIGJfPuqdftlpwK0IMXpZsOVSoRVAEnrwChsI/bjankQ1AAAAaQZERUZJKyuNHONh62jp4FVzRDxAfUo77SOwMwAAABIAAAABMEQCIG31mo0rvTQFvKB2p69Q1DA+aIamlBmop626lOfnZ//JAiA7RuCamVgH9zIo2S0N021v/aES7KbVvhwwJb68TWuW8gAAAGkGREVGSStMePIlhpwI1HjDTl9kXQeofT/o63gAAAASAAAAATBEAiA4dvdjXMjuwc53k4IvdXRgli/DUm53PA+lXYFQvjJcyQIgXI1hHA5thvrzfBuHDwgXqdzgfQd51W0MScUGIcshGbUAAABpBkRFRkkrU61qYmritD3LGzlDDOSW0voDZbqcAAAAEgAAAAEwRAIgWCkQ2b99umMmlOAaDPKDMsrzEmWtGnHlwI2wiawLuvkCIGS2HgJAZ3l65tLDiwEIdxZDBnKH9te8xO/+bUdOc4TaAAAAaQVET1VHSK0yqOYiB0EYKUDFq/YQvemec3stAAAAEgAAAAEwRQIhANZAGLmWpBwPFJMOuWkjDECUlyMoWMfROXzfX5c8DEJyAiByYXn0rqy6UuuJMem5bkx27iZfaSXAoOBa966XDOnCFgAAAGkFVVNEKyuaSL0OwEDqTx0xR8AlzUB2oucePgAAABIAAAABMEUCIQCszmusYxOmCjChrZLmpRP8xP6f2IKQ07wUqmL5k0pBZwIgFfiGm5EIxpD+hsousiE1lXBtuDohVyKGMbr63cOcQF8AAABnA1BMUuOBhQTBsyvxVXsWwjiy4B/TFJwXAAAAEgAAAAEwRQIhAOueeIAEFJC56ptCxz7Fof6nDB167TIPZ8hdbL8bdeAiAiAztCCmo0mECUBpx7B/kACp5vak32See22PdSkc7HEB3QAAAGYDUE5Lk+0/viEgfsLo8tPD3m4FjLc7wE0AAAASAAAAATBEAiA0Kld2bLR21ZUj2JeLxlDPlotApc2vSavhmVSP87LragIgDZu2msnMnI/+ToExoYzlND8Um1nKckWKZ399BQA4XGMAAABoBFBJUEzmRQnwvwfOLSmn7xmoqbwGVHfBtAAAAAgAAAABMEUCIQDXkGgnEJtgoVEXkdSLJ/HBYljLkh40a4WY28r4JnEQXwIgFK+GarXmnJe3aUAZx6YnUqumGQ3LgHYisjLVTh0BaA4AAABmA1BDSPysenUV6anXYZ+neh+nOBEfZnJ+AAAAEgAAAAEwRAIgBuPBsCh5SQf+L1n1JyLsXvb5jqqYmx1yqJF/XK1qlVECICq4uqPEgPh7GBzqQ1q+b6WZwHt62R+BRp6nJ81jhDCWAAAAZgNQSViO/9SU62mMw5mvYjH8zTngj9ILFQAAAAAAAAABMEQCIHn4Mj88f6Ro+aeKbaQjGAH5yutmUk3aqxr5G0xHH+ABAiATCxDnXXjqvHMYg8T9kMWNA7PQkpn2gyUOkTyhfBIqwQAAAGkFUElYRUwekGcX3i5KRgDxO2kJc2sDRr3ePgAAAAQAAAABMEUCIQCiVXg2GbNhcznap9tNGj8gcIJswSSHInAUAICV0LstSgIgUcXJcgJCoumS2UhIYyVKJIKJKWTXikunRKoGqdoeIGIAAABoBVBJWElFkxgQVGBibn+lgwj6S85A5GFvNWUAAAASAAAAATBEAiBo1pNCFGdBimZCGl7JRjgS9ngFu1hdUZSz5UuwA2/6xwIgVlptCTi0wponKJtezWP3zdkkT+8lEu7amynSXEAyJkYAAABnA1BLRwLy1KBObgGs6IvSzWModVQ7LvV3AAAAEgAAAAEwRQIhAOkzPRSYayFsCdynkZlMIJ3h2FAJrJRLPATLq8c+W3pRAiADQHjWgCGB5EPOJNVBgk5U+s3JNYeCtfc/UFHVm15WFAAAAGYDUExBX1sXZVPlEXGCbRpi5UC8MEIsdxcAAAASAAAAATBEAiBENMn3XoNeOvLvPTzWngTCK14Rgd9bMBktkNyd3NvIoQIgBSblpeAsDG+IqWLnweF/jtyazabGT1A5dH5sQ6QAUm0AAABoBFBQQVkFTWS3PT2KIa89dk79dryqd087sgAAABIAAAABMEUCIQD6G6A8faEz2cOEOG3I0zHyt5Bf3fPSVMH6Pn9yYEP8fAIgDfzJ1fN+CHL6o9noVba2nXDPomlzrv3wSGdTbGlA540AAABqBlBMQVNNQVlBaiViina0cw7FFIYRTDLgtYKhAAAABgAAAAEwRQIhAIQsfCsltui9XV1xsctT84yrbeGcxzme9REolayRzkG6AiByuPu3SstI24nmznD2k5t77KIJYvRdK5cw9s57/qVUbAAAAGYDUExBOk9AYxpPkGwrrTU+0G3npdP8tDAAAAASAAAAATBEAiBng714YHkJ2UJJUD8Kw6p3V2R4zEXGECrzdmHlvQVxtwIgJquXq+GsMg3oAiY3FNrfxZlmkw+PpeE0COsDR0WRPYYAAABmA1BYR0fme6ZrBplQDxilP5Tiuds9R0N+AAAAEgAAAAEwRAIgXCiUwUw5FVbPn9s6zC2AvLzryCd6RfATzoV6PhdsdX4CIHhgDrJX1hvLgkQu8+OGXP4+5EmGb6yEQEUns+TupEevAAAAZgNQS1QmBPpAa+lX5UK+uJ5nVPzeaBXoPwAAABIAAAABMEQCIDCgk9AmIOqd9j5fIF516xNtD6bqA3fqwOOXYhxPad2tAiAZdnbSp76EoMmEqmUwtXqExE2cQ/j1y4hAlj7vaHvSCwAAAGcDUExH2zoHQlEi8snKqXqPcxj8yDGOTZQAAAASAAAAATBFAiEA0+veE200Ys/UWCc5jdx7+mYCjwIUhM0oybwKwYRwBw4CICJw0MWB2Q8qaQjud7Aa3vUSK4u1Qe7zz3iJQSnmWYDhAAAAZgNQTFXYkSwQaB2LIf03QiRPRGWNuhImTgAAABIAAAABMEQCIHcLH1UCuUcMrhPopmBkdw0PuMoQup9hPeyWLW4MpTZxAiATFQklh5GW/t6bIL7cFGQ3TPp2BzQojO0DKoIr1ny2wwAAAGcDUExUn7/tZYkZqJa13HsARWziLXgPm2UAAAASAAAAATBFAiEA79oqwQkynOwja+iSDcZDw8UQsKw0T2vwlKGK2ANDAhkCIDc4dyQ1ryPxxvRl/rw1gtgmiH4FbDFzuJi0WPrPC4IuAAAAZgNQTlSJqzIVbkb0bQKt4/7L5fxCQ7mq7QAAABIAAAABMEQCIDBN7kqiyPZGeRSvQXd1K/CZzXfjK+FaNzXCbHHH4H/LAiAqCmUrCADuBRNo5Sfqjg1EHJtkrFmcWt6aaLqw5YPtnQAAAGcDUE9FDgmJsfm4o4mDwrqAUyacpi7JsZUAAAAIAAAAATBFAiEA1wONTHcKMC0LoAZkwXNF/AZflyyOAE+/Q3/va7YEFZECID1OX0PMRKCLK5wUnXKJbsXj7ugPQL+KzkeSUT/mn8hpAAAAaQVQT0EyMGdYt9RBqXObmFUrNzcD2NPRT55iAAAAEgAAAAEwRQIhAPmilx27QYwNJCi6Tjh+F3Wzp0oFCMTvExm0Y8X+viy/AiAINIL2W1V1hZVZLPrMq35exzr0uyDXc8cmmBZQPuMzsgAAAGcDQ0hQ89t1YOggg0ZYtZDJYjTDM809Xl4AAAASAAAAATBFAiEAzzPU9S0lPNRHD61L8WWQRJ+ne1TWKjyyZPV5QYYq9JMCIHTWCRk/qBpVVv67bIOtOTLkxVZfwt1o+KRBmS2NGgHcAAAAZgNQQUz+2uVkJmj4Y2oRmH/zhr/SFflC7gAAABIAAAABMEQCIGNDAbfyxqcFp5zSdjvJQFU8QO5okOTrYHWZ2O1zo3l4AiAvtmDcU0qFq630AZ5k8iL3LXgk8AT9vONh10oE/gtI9gAAAGYDQ1ZSPAO07JR3gJBy/5zJKSybJdSo5sYAAAASAAAAATBEAiBdcDIgGLPXefxaTpUjt87Q6D4CXOYf0R+CeT4tcdiwMQIgCT1ovyRgrocQVAyWmUq52lG2KocPQDfga3gL3h2xAxUAAABnBFBPTEvUeBYclSNX8F8CkrVgEs2EV/HPvwAAABIAAAABMEQCIC+/HDgcF1vR4SAOdw8CJhPXfSellvYmKbaHEHMR36RwAiBY16T2JmhHIMN0u63rUvzF2ijAn43/4wLIaDnAizUr8wAAAGgEUE1PTheWrgsPpIYkhRBqDem2VO/jAdCyAAAAEgAAAAEwRQIhAPUJvvCCcsBk3b+T9jds3tEm2H2n645rY2UQLnjoGRPjAiBt0Cudndpvdv2vrQdoIMd42XNID8IN0Zz88YZ283+7nwAAAGgEUE9MU4Pm8eQc3SjqzrIMtkkVUEn6w9WqAAAAEgAAAAEwRQIhALqAZ8w/UwrxyorIBPgi2X7zglBp5Wv45HCU0AxCdRgZAiAoGE2lQClxJmCQZIEOD3tL9eDb1a3qQc/XgJqXzHVPPwAAAGYCQUlRIeNI6Jfa7x7vI5WaspDlVXzydAAAABIAAAABMEUCIQCu4aou+CacSy6tajhjQI9j1l7f8ljyEW9L/fPZDVNccQIgQfey8p1bTFsKTEVAHqr9gIKQ7VKWLAuv4bCVHUUtA0wAAABnBFBMQlQK/6Buf75byadkyXmqZuglamMfAgAAAAYAAAABMEQCICuz9qBf+9imQ6XoNbDM4s9BKOM2HMc0MCiesnF1sz9+AiApBYL5qD5rDSAVD7G880ZajRj2Na5tNaofZ36Gvmp5xAAAAGcDUEdU6sy24PJNZs9KpsvaM5cbkjHTMqEAAAASAAAAATBFAiEAuA9rLs18JLwjKJ4eXxBI6YXVTny0Uf7S19ZPnSR1SiYCIBaOJdjOfnheFjaFY6EkVpcYI/PepoYymG/09PD1h/lzAAAAZwRQT0xZmZLsPPalWwCXjN3ysnvGiC2I0ewAAAASAAAAATBEAiAncXEYQRDNrRJ9kCrCglBD2/4TDOYbn4ErinA283qfoAIgXVrzfBXnB9rEfxRYJFnrP07crtoCYeRR4v9MHfLLYCAAAABnBFBPT0wM7BqRVP+ALnk0/JFu18pQveaETgAAABIAAAABMEQCID77lBeOXn4BTE9m0kLVXJ2+OJaaRfIgA9VVsv0TOWI9AiA3fT4vFlUSx9Pb4CBS6ERI5zFQkWaKyr1GLxg0m+6xAgAAAGYDUE9QXYWLzVPghZIGIFSSFKiyfOLwRnAAAAASAAAAATBEAiBZDiIH50tqfznWdXSojHc2fyJUmCmxYsmv4Gbp1oH42wIgF8AtqJTBd6W5piHWfIIqqE5+XZSmTJPHa6lT4Djqx28AAABmA1BDSOP0tKXZHly5Q1uUfwkKMZc3A2MSAAAAEgAAAAEwRAIgLqrC2yct5fo4F2Ejn8+vl0B9vwb84DQ8wCncm5hgSIACIA5ew9Yh0UaIkJHmRaXzBB5U6IXD3KKPEwU4QLDuCv9sAAAAZgNQUFTU+hRg9Te7kIXSLHvMtd1FDvKOOgAAAAgAAAABMEQCICQjhZCdhtfHcYbyrtZ1MhgY5Qp/5QAAJbIX83LpZe3NAiAIhxUOnHsBErB1uLY2bHLoAzxRyGlk2pFXf3xCbuaFxQAAAGcDUFhUwUgw5TqjROjBRgOpEimguSWwsmIAAAAIAAAAATBFAiEArx4wMo33sgQNRjV+lExTd4QqwMA305x2dDXT2mJWKboCIDBnRLM7CFc64RMPOKkt8dQs5aoOux9kVWNKNvxzXkBiAAAAZQJQVGZJeig+CgB7o5dOg3eExq4yNEfeAAAAEgAAAAEwRAIgGEGw0tP4l8997ttPZ+p3fruy+aemUIK9JEEIEXPHMs4CIGipBRFoaTAfkrI+rSQgDE2IZC6kj+GGp1Bridd2eiIhAAAAaARQVFdPVRLh1qe+QktDIxJrT56G0CP5V2QAAAASAAAAATBFAiEA+syytQSEbdy6BZVYhCF1C8G2q4TGCrPpz5+db/8R5QUCIB9XNvxN5O25fUNCG7Xt5ptwUctcg3q3yTF6YPnjxhwtAAAAZwNQT1PuYJ/ikhKMrQO3htu5vCY0zNvn/AAAABIAAAABMEUCIQCPosQygH7BSDBHY71D4itrYYhmKlOoXimMAvmdzp9iOgIgHf8pZ/UkIQKm4AVI5J5YGJfqOgNJ1O/TN3UUoEIHqkMAAABoBFBPSU5D9qG+mS3uQIchdISQdysVFDzgpwAAAAAAAAABMEUCIQDginkRcBr3qYFMeMFOFJaXEU9mn1W+mxdKRzvk4+mvDwIgT6yIMMxSVpE/ltPDc2yBtyA0jjoJB4mVpo1m1otZfMcAAABnA1BVQ+9rTOjJvIN0T7zeJlezLsGHkEWKAAAAAAAAAAEwRQIhAJ5xaMcUjjBo6SicTlPrThSOTP2ounWp9gsWOW0TP+dWAiAGk+Vm9v2/Y5ahhRHN9pgN1C9lCNem0Wz4QyClUBFLygAAAGgEUElQVCZgesWZJmsh0Tx6z3lCx3Aai2mcAAAAEgAAAAEwRQIhANMnsX27kwt0cxRqrAgm+RsD4SsmjMVDo+k+4XjH4l5BAiB0eEL1nHGj0vrLJ2rcaW6EGAPsbVo+/TIYxPWm57qCPgAAAGgEUE9XUllYMvj8a/WchcUn/sN0Cht6NhJpAAAABgAAAAEwRQIhAOkMDMkJ5UdJzqnFPfPAajWOlE+y+ZU/VWrfAwiveRbCAiB28QdBN4nmfk9In81tlX0yWLZyZ5fAOcdXHlo7cMbcXwAAAGoGUFJFTUlBY5nIQt0r494wv5m8fRu/b6NlDnAAAAASAAAAATBFAiEAnuSVU8Gy42jBRfFLlMREkK64wPh3jq0CmU5piLoaLBACIEUfcdU97MEUuNscI1nIXgnd51j0GZY1nk1ROVLFpQZTAAAAZwNQUkXsIT+D3vtYOvOgALHAraZgsZAqDwAAABIAAAABMEUCIQCRRnMExcJ0+FTsw3+6kQPRd9bnyFJ2OM4rxOeYell4JQIgTmpm/+VaMR966M2bjf1bMw4hdvST0ODkph6VF8oX/3cAAABnA1BSRYij5PNdZKrUGm1AMKya/kNWy4T6AAAAEgAAAAEwRQIhANY1KqVY//Are3UIK9F0q4mBGVuYAeOluSSP3bNCXYXvAiAQGHqwaqgB988yodBVO+ZtgryTQP+Ocd5BKW1MqQ8nGgAAAGcDUFJHdyjf71q9RoZp63+bSKf3ClAe0p0AAAAGAAAAATBFAiEAtkY10D6LH10d+ge667tpr56Ef+SuFQzvphaloXnq0ZECIFpCH2DTy+UbbFQBJ5vceWg3dUL7UG+ukaxntUO4r6bKAAAAZwNQQlT0wHsYZbwyajwBM5SSynU4/QOMwAAAAAQAAAABMEUCIQCB4NNu3BL9pp29N5h78jkB/Vc9mvz+XLxz2wPV8NufHwIgZbwTuN3IzX7z5oAte68wQpIv8bRlwCpmWCkgAwALcNYAAABnA1BTVF1KvHe4QFrRd9isZoLVhOy/1GzsAAAAEgAAAAEwRQIhALMe+oPenAIAidh1DnpskJgEr/sqY/VIVf3GEO3U7VNWAiAl6+L3/3ISV+6SdSXNERxcRTreZuYEzUFmCywHy5tkQAAAAGcEUFJJWDrfxJmfd9BMg0G6xfOnb1jf9bN6AAAACAAAAAEwRAIgcxc41IXl0T/FvfYhWXYNuVLqV+bJW8VTtN6FiDeif9oCIBRbeZDU3s6/w9T0T1BVrXpuosYP5z3x+z9JxbYrPum8AAAAZgNQUk+QQf5bP96g9eSv3BfnUYBzjYd6AQAAABIAAAABMEQCIHhOEQHVos8QbbOw8YZ0WdkRta0eobPjj+yCQywHk/jSAiBPy9BoUMyi4T7yDHPyvTq6L5jZtB5APFY8lD+brdOfOwAAAGcEUFJPTqMUng+gBhqQB/rzBwdM3NKQ8OL9AAAACAAAAAEwRAIgeRxbKf7DehtpPNLcfktow4kSmRCEEPlqE4P5kuay020CIEWaV9qoKoCfRVAsj7jvbPMfD4U1aOfixCBeBUFVVN53AAAAaAVQUk9QU2/lbAvN1HE1kBn8vEiGPWw+nU9BAAAAEgAAAAEwRAIgT2JpP9te5JUcN606qrVwBgACeYwbL7wtAXsPtVN6WHsCIAekgihSFBpTbbcIs6ie0EIEs6e6gNaaXtrz/6a633K4AAAAZwNQUk8ia7WZoSyCZHbjp3FFRpfqUuniIAAAAAgAAAABMEUCIQCA9jdrWfE0Iy1sy7YplOTPCVL/lqBNZAuEJX7DxgZVDAIgWTpSr2YG358KRaLO8CmfNcRbjMH36AUAJoMzaiAIN7kAAABnA1BUVEaJpOFp6znMkHjAlA4h/xqoo5ucAAAAEgAAAAEwRQIhAPVenPTe1ne0OuzDUurZA0G4vhGVnaPbkmDuo23c3PqUAiAG4I3jUcEcTPzi+HG19/wdt5nm8vbhL3QzN6XpA2FTYAAAAGYDWFBS1++wDRLCwTEx/TGTNv35UlJdoq8AAAAEAAAAATBEAiBvUHgyZ+3wJyOM2iqsilbYBJY3rLTi5sWEn0XXJfapAAIgMfpTOhJ3jsfZykdHPoTPVyBrRDLZBlQKrTnacpzKNs4AAABnA1hFU6AXrF+sWUH5UBCxJXC4Esl0RpwsAAAAEgAAAAEwRQIhAMbbHGc4zzqrka+4B3BYar7U+gOax4/9VY2AkmTsFBjAAiA2/S8I1ZW8e6Wbgc35zZ4DWqaNXI49qkZGmWKZRCzEyQAAAGgEUFJTUAwE1PMx2o33X54uJx4/PxSUxmw2AAAACQAAAAEwRQIhAJ+NRUOecfDrwxKwV2glc8eJnOHdDVBoZpU/cefg37Y1AiBToSHERZCACk7StyJL0vTe9/jvrCgtS5manSftfZEtvQAAAGgEcEJUQ1Iooi5yzMUtQV7P0Zn5nQZl53M7AAAAEgAAAAEwRQIhAMbv1gpoFNFl9gLK5ODJuUBoj34jJAyZgkXbl6+6kTXZAiBo1rM07G7FaO44gulc1PCi8sJwgXigq1aaiEnBFFgRhgAAAGgEcExUQ1l59Q8dTAj5pThjwvOaewSSw40PAAAAEgAAAAEwRQIhAKwbCl2VZXoqjAv/e0xzp6LZScuQbPZoLXQMGCBdNVpyAiBLaLm70/onNlQe20xb9YX6OGpiNfdkRzR+ns8rtMIbUwAAAGcEUFRPTklGWDxbhuAczTDHGgVhfQbj5zBgAAAAEgAAAAEwRAIgBIA36LJ2ppiGNytfYL3m7tTq88BfZMHjyfS2lbRIvy4CIESIQd0sDMOuB4FdFo6+Hi/cWuWCxNR7DTshVegsKZhIAAAAZwRQVE9ZiuS/LDOo5mfeNLVJOLDM0D64zAYAAAAIAAAAATBEAiBJ+HNhNIEcFBoclvug8cs/s66BtRveVeNpTu/ywdHHewIgGoUimBllFP5ufgMTqv2hmtMw1sDkNtBCCbCbXy0tN6QAAABmA1BNQYRsZs9xxD+AQDtR/jkGs1mdYzNvAAAAEgAAAAEwRAIgfSgwXb1kNWTCrrj6ATq7SrTt/QIfRedvmIK2u/Z/LXwCIHA5Mm8IgtQ7/Fnar0GmTccokSewGx2Gf4et67A780uiAAAAaQZQVU5ESVgP0QuYmYgqby/LXDceF+cP3uAMOAAAABIAAAABMEQCIDAkWMe/t1Ab2pvf9lIBozHs/IYzX0MpZqhrStvypxDaAiAhzK/xWg1ydPB/6fI6wEfxNDY/bZOFinrcldD7SNmIJAAAAGgETlBYU6Fcfr4fB8r2v/CX2KWJ+4rEmuWzAAAAEgAAAAEwRQIhANgkdipTYmq5QSSggLb0uZkjDhKwSVsEif1/+dhnH1ocAiB3M3XA2KV80iSI2OJAbmYOKbBCGb6ZHDi6V/dVDV3l3gAAAGcEUFJQU+QMN02IBbHdWM3O/5mKL2kgy1L9AAAAEgAAAAEwRAIgP86aL+Vh54NXdmMrtQZtyySKBlsYHXfhu+wF+LOHdJ0CIErKF5D+qqoa6skI0Ak6kunv7MCHs7M0hOrXdbziRGSiAAAAaAVQWUdPWruY/B/RCA0ri9rXXFHTC1DG9ZtiAAAABAAAAAEwRAIgQZx9OzPqmvpQIrn4C76iCNG4w38ucBZj/YPlkXWfk6kCIFLGfa2RcZIVtbULqKAHgZGfRkwG7dJMoemGHBr6Ho4OAAAAaAVQWUxPTte308C9pXcj+1Srlf2PnqAzrzfyAAAAEgAAAAEwRAIgF8QBg/tiNhzreNH0eH/lOkgsD0r4JGSkzNHrZoniP7gCIAKS/Ntu+fcGt+AeoxWdudv+eP9BIgV17Lfb3b9u3lm/AAAAaQVQWUxOVHcDw1z/3FzajSeqPfL5umlkVEtuAAAAEgAAAAEwRQIhAKzKNwektgDj6/zG+ZqN43WbiGCilI8/k7FmB8OUa2r0AiAOmIfscpHp6bmbsIVGynwxSyJfKibUYC+9jM4fMZ+FsAAAAGgEUUFSS2MSDM17QVdD6HU6/RZ/WtShcyxDAAAAEgAAAAEwRQIhAIrIVRVv+lKS6jvD5u7Q79kr1bkO2YxmQgREIy/P6WxjAiBaF2SGRLyYlC/O09YG0PkRgVNSNXZILBb3QRfku9GoHgAAAGgEUUFTSGGOdayQsSxgSbo7J/XV+GUbADf2AAAABgAAAAEwRQIhANqcvRJhk0N9F/WXFe0u5ghkWfXNPo5j9eaN9C+yKCrOAiAiJ+HQ2z5G8NH4slsVP8FrHUESV+pxK1cfq5kSMeXKzQAAAGYDUUFVZxq75c5lJJGYU0LoVCjrGwe8bGQAAAAIAAAAATBEAiB8SAK1WQy/LN54Fo4KrV+8IuWSYm9rR9a8yfGFSoBm+AIgQ87acoJFaDxNneXOPq3q0s7Oxoz4HzDQ5Cfv1mkdkNQAAABmA1FCWji8ic8fY0xxiWYgvNgHryNcvezRAAAAEgAAAAEwRAIgd/+4k7Z91BqLHdCHD2rURDrjZlLbpCzgQOpDJo95UOYCIChccksR/VUUuKfF38wBkzQLKJ4XoPWevWhmfnO8qGrTAAAAaARRQ0FESha69BS45jftEgGfrV3XBXNdsuAAAAACAAAAATBFAiEAnNIUaf5ePrdjsZ3l6SK+vD1Zq5CCVwoJC7Sddpbi8aUCICxa+JhGqbSlDmiBAXyhW4wqPKk4M1cCAvgt5EzaDf9pAAAAZQJRQ+dLNUJf5+M+oZCxSYBbrzETmoKQAAAAEgAAAAEwRAIgIcCQ0R7AXET4w32MVbn2HDTz7EzuKUGPn+33gWX3nVQCIAqLcjn1Rh+HitV6jh21fhcsoO8th9zANPqJtI1a5JVJAAAAZwNRQ0hoe/w+c/avVfDMyoRQEU0QfngaDgAAABIAAAABMEUCIQCchre5BgGfsdnEr0BkT/heDBeOyUvrupFWz++uXwRHrwIgFpizsZgShSdibgi/98f9cDA1KiX3jVkeEfdr5ZbQkGgAAABnA1FCWCRnqmtaI1FBb9TD3vhGLYQf7uzsAAAAEgAAAAEwRQIhAMBAnwAYrMBd+Y9c7qaSYCCZwCYcheb2C8YHlS+le89iAiBtljmEGv3gvJPdR3Zbe2HFCkOQ/4OVIuSKeEyip+Q6HgAAAGcDUVJH/6pf/EVdkTH4onE6dB/RlgMwUIsAAAASAAAAATBFAiEAmM9LZVoGwCsSRqO8NXgbSE81n5A2QI1kbhzMjQoFIrgCIEnqzJsxdVhWcbDsoWInWgaPo6Lke9CtUjQODjKVSrhZAAAAZgNRUkxpe+rCiwnhIsQzLRY5heinMSG5fwAAAAgAAAABMEQCIHJbKsFRIsOI+E8lhVbi179EvGh8OKyZrbMeI6l2eUg8AiA4FWsmnhmfGm6DjKxBnkvQKMk2tJqqlJjIzBm0/7iMtQAAAGcEUVRVTZpkLWszaN3GYsokS63zLNpxYAW8AAAAEgAAAAEwRAIgM5AiW0Z4E4FeO2x24eg6Nc75sTIPhwuUuNCKkpxGkkcCIBj9MQUrDpzhyzRizDQlXif0fp0msJCgdWdfxwaNzJtkAAAAaAVlUVVBRMKOkxgUclu+ueZwZ2+rvLaU/n3yAAAAEgAAAAEwRAIgP/jXpWU71KmIDtIrBPACUsr+ECN5Sm9ioznbefgNmqcCIGSHoEeOxnvacU8tm4coQJHbZHNLbTYgED1aKLbHBwc5AAAAaQVRVUFLRTWvmT7z6JwHbkHkY/vUzQDTEFzRAAAAEgAAAAEwRQIhANVd+VAMpinXXTETyAi0KmEn7rlK4ZwZfXzFA36R20ffAiBlAsstu1QYujGfQ3Uv4jZibI7jPgC5ok1iatYjghyK6QAAAGcDUU5USiIOYJayXq24g1jLRAaKMkglRnUAAAASAAAAATBFAiEA/99py1yl8t5YCgeW0EAHuvpNtKCm33PWuh8/2xUD+C4CIBH5SsVJJe6hxrM4YcuFuj4jf3sWi6MqUvUynLxMCutBAAAAZgNRRFTRhHVSEkWhJ6kzpPyvmejEWkFvfgAAAAgAAAABMEQCIHiyd3ACxNxsb3BSKvF3dWM+u0W7lX4Gky1F+4bmOf9oAiAK9uydxXTnCsXeGb4VHEi4echmMGd6S0vKfk/CzOAkJgAAAGcDUVRGD8vDHFA7Sp7ZDof4/0bDGKShQmAAAAAIAAAAATBFAiEAy+6nj53XiioXMOHXvklZvfVey7jsZ/2YjYulxlb1E44CIAXXjuK9+F3RK1q7Hrh5rKHa+7YGqEi7cYAO7aWEWOLoAAAAZwNRU1CZ6k257nes1AsRm9HcTjPhwHC4DQAAABIAAAABMEUCIQCbSfcPauL6DKpWzIcQiydJMRvzS6MxKd+Io8BFwyBpmAIgASuXfn0FLUnehRsLJprS/ckPTQ5zhjyyeYIk6MxChDEAAABmAzNGQUJjovBFYwXX0Q+KRVX4w7WTs7iVAAAABAAAAAEwRAIgK8RcizKqYm/nE28RxpNdzV+0jZN7Xp3Rsib+naIv0hYCIESHL1ncVLCfnYsx+nlTGXdUj/S7q3xjNAdi8vWr0uIKAAAAZwNRS0PqJsSsFtSloQaCC8iu6F/Qt7K2ZAAAABIAAAABMEUCIQDa0wINBEvePc23kqEXQQ3xY1DunHJpG6Lzt5h5r0OcKgIgEkVgc95PHk4vN65t/i7W8aCXFfA8QQYYDfQyw7iL+nUAAABnBFFCSVTLXqPBkNj4LerffOWvhV3b8z45YgAAAAYAAAABMEQCICH5dFQnrpEIrXsG83owNvumf9xWq4MUSHCl37v8O/tFAiAycuya6aETEj450Gxa+ujF/+4DtoNgwQgLQKziZB+fFgAAAGcEUUJJVBYCryx4LMA/kkGZLiQykPzPc7sTAAAAEgAAAAEwRAIgA8P9lokWVGF7SGghGWnQmBrBb8IK6xVb/FYX77Bjs7ECID3Cyur/JQHznuMtTqZCou+HhvAJdumFvThHZzD9rLHSAAAAZwNRQ1j55a97QtMdUWd8dbu9N8GYbsea7gAAAAgAAAABMEUCIQCgh9MnvIHjXmhToxyjPdCwyPdHPvnjMEF15hKd1kEg/QIgZ5ro/ObfBp5iGnGuVy+odEB90KaaItVsp71TEsKexCkAAABmA1FVTiZNwt7c3LuJdWGlfLpQhcpBb7e0AAAAEgAAAAEwRAIgEBBd2TC9UKijE6dMtBFBI7kND9srn0Jd2Z5nGp3KY3kCIA8TEM+vsmGuPIQapaiNzSRHn4H3fWV56e6IDBz6gvQ/AAAAZwNYUUNw2kj0t+g8OG75g9TO9OWMLAnYrAAAAAgAAAABMEUCIQDV9W0PL4Q6RKMAg4fYQ9p/mGz6JLs3sm7JQOLcaEwoJgIgAXnaOuYq4dFyKamSRce0LIrQBBLybvnLcf5r88TbiXMAAABnA1FWVBGD+SpWJNaOhf+5Fw8WvwRDtMJCAAAAEgAAAAEwRQIhAOVecmcqHMzIGt8LohpRwo+BrYNPmgXEU79vEGstX5AIAiAnfeURGifxQkY9iUyq8Cz+lpRAzdcJRxfecy8N1tGC2wAAAGYDUkRSPJynPVMJ04xvLCG3i5rh9LJEEYgAAAAEAAAAATBEAiBKNyYqtja+fraT0H+SqQX3+5lduDxrJAnLvsuwAChdSQIgcLORcvhBz3yZlJkW2w9MxE8z8TtLiMrkReroo42pK+YAAABnA1JBT0XttTWUKoyE2fS1034bJfkepIBMAAAAEgAAAAEwRQIhALAj8izoCj1RBW9YkKl6L68v3iFYEchKWkUzAwxsCrDsAiA3ZyWO85PRGU50vAmZKeDjfBaqvNtmkU41+VvZ2kbWpgAAAGcDUkFJA6tFhjSRCq0g718cjulvHWrFSRkAAAASAAAAATBFAiEAkeI45CPiRcywougQrk6Tp1pGIuzBs8QJYdVoY9oQEVgCIBsQ7tWb01jGUj/8smyXA6QUaLyTZOZHdBlTvzmaTt2nAAAAZwNSRE4lWqbfB1QMtdPSl/DQ1NhMtSvI5gAAABIAAAABMEUCIQCFy3ej75afaim6QmGS89GOtI9RitGcucX6Qhto6soW7AIgc8lyca3rW7aVrZyRKdETgK5JFWDqWRizXoF8Q3UZyp4AAABmA1JMWfH5VQFuy81zIccma8z7lsaOpeSbAAAAEgAAAAEwRAIgf1SVjonhBspEUdyDGkXoeFUzOceWiR2PWa/QTKyKRUcCIHh188PpwiQhlMrNJEtv9H38sGXULlHAzhXDYG9a+ru+AAAAaARSQU1QM9BWiUHAxk/34PtPugsRvTfe7Z8AAAASAAAAATBFAiEArCm2hEHF4Vqn34rcNiJripiNWoIwLsH8rZNGRqwZsQMCIBDLUzDh/8g0pQbOs5Wg1xsR4PEVhimOZMe5QfuKQxnIAAAAZwRSQVJFgbG/1sua1C2zlcKif3PU3PV3fi0AAAAEAAAAATBEAiAZpGacxJaq5OEcYaoO2aZY9jTsdaud5Ghah6M9zn3xVwIgVFf0sYwhbuuWUnfENoRl2jee4nPPcEYvxXGtkk8xMG4AAABoBFJBUkXn3yg3bwxEtYOW/aJTEyMhAh4IzwAAABIAAAABMEUCIQCf9c/GYSrMbDa6hrp/seCddZabvNhYbSOlqYsCqFLtfgIgBP5eLMZHFmaGl00cOnEfOHUHTVm3H6NkU35NgNDLlV4AAABmA1JHVNKR56Ayg2QP3FGxIaxAE4OkbMYjAAAAEgAAAAEwRAIgOQplH8qT6g+6v+pA/0pRZfRbKYrJNAVoG/7L49UzZoECICA+JRPprq0wHGX9u54ZJz+u2Giq4M8V04VPSZR5qnk+AAAAZwRSQVJJ/KWc2BarHq1mU02CvCHnUVzkQc8AAAASAAAAATBEAiAbMt2aEOKck02mUuWlOiiOL+nO2YqOSwTjx8NajvzrFAIgI/A576nC5UQqKtY0IwllZodmo5ITKPt0awiuLBan8FkAAABqBlJhdGluZ+hmOmSpYWn/TZW0KZ566adrkFsxAAAACAAAAAEwRQIhAKdw/2sOHbJt/4elPCn6DGMyGCkySjcluOOK8uTMMVkNAiAV7A5u+tkuwEvOFhP8MkHKLafHTZ90aAgyHTzcfMN6nAAAAGgFUkFaT1JQ3mhWNYzDXzqaV+qqNL1MtwfSzQAAABIAAAABMEQCIBA7sHtq1PeCbG5hqDlCceo62kkzwpRQTsJ9hpBIYOBdAiA4wE+W+WVpb+Y+ngs9vBm5rUDAA9IjxSdsAFD7d9yB0AAAAGcEUkVBTJIU7ALLccugraaJa42iYHNqZ6sQAAAAEgAAAAEwRAIgGURoVAguwCiDoWlqADByGnQpx1IALkN/aFxb9C86xIUCIBAP9lyIyPO625J7RHBP24YA0bpmiJlN7nExAlP627I1AAAAZgNSQ1QT8lzVKyFlDKqCJcmUIzfZFMmwMAAAABIAAAABMEQCIEjF6yQ849xlN0YtIegW7Ml+10AAfc06a02X3hR4iC1DAiBssNACXrVMdH+KByOQyLUNK1/X6FYHgWHRjZKz7KuKOAAAAGYDUkVBdnuikV7DRAFaeTjj7t/sJ4UZXQUAAAASAAAAATBEAiBeq4JBUcyZj6v24mQNP0Y4tg2Nh7NWf3G9GkJdT47tFgIgWOBUDO+Q72U9W+bEBqdRoBpZQNrHHDWF+Kl8uzHF5iwAAABnA1JFVNc5QIfh275Hf+Txzzc7mslFlWX/AAAACAAAAAEwRQIhAOXPLyIbR1jrXzQpgfqs6oi+xB8a3G3LopLFmYMXMjkvAiBZrzRkVAlSSwdO72PMrE9RlCU9DInHQM77Ahywfq9YngAAAGcEUkVCTF9T96gHVhS2mbqtC8LImfS62Pu/AAAAEgAAAAEwRAIgWLDyiI1ivlD+KPW/Rv23OqokiM60KGu3fpg2ZRTaFcMCICFaJnxvXFm1Dr1f/g177Ow8tlT7fEplagmr6SKSGRFNAAAAaARLRVlUzhOrzg21qCJGFu8k05edRm8Zz5AAAAASAAAAATBFAiEA1Edn+QbMU+rqEntEUflDJ1+WjbchAIW1uzollV8wxekCIBu06e/TZIxecEcqnAklA4J5MYPaiZ5031qoZ1ZeI5J5AAAAZwNSRUR2lg3M1aH+eZ98Kb6fGc60YnrrLwAAABIAAAABMEUCIQDxKOUB8dAB+4MQr96YWdK9kq0qFgoQnHcx98KTxFy0lQIgShR4S6WfwXO7uGUVC+9aM2OPPvOzHp9qJFGQPSXu9psAAABnBE1XQVRkJca+kC1pKuLbdSs8Jor62wmdOwAAABIAAAABMEQCIDmNavGkQTVv/tXIT5mSuGVmCdG+5D2K7e/zSNx4cXrmAiBTmylJfX2CRqO1mB1L/jsXkBY6DA32Q0wba/2fqEw6iwAAAGgEUkVEQ7VjMAo7rHn8Cbk7b4TODURloqwnAAAAEgAAAAEwRQIhAPNNXz5UiP4+2u/NopRMF1uG9iaah8lGlDtw+GUM6EStAiASbGoVwE10S4TsUSbFyK+ZgC5LgtP40x1z/1ocsRY/+gAAAGcEUkVFRv4+aiXmsZKkKkTs3c0TeWRxc1rPAAAAEgAAAAEwRAIgWW2a60TQ3m+IijfvLQ9nKXNu96Zid9UwXPP3RbSTNFECIFNP9uPm9RwhVemotc/sx8N5PJPxGFKUYwTkkvS8a9gSAAAAZgNSRlLQkp1BGVTEdDjcHYcd1ggfXF4UnAAAAAQAAAABMEQCIHm7FGThwZf0/exJi2FBuqpDt/QpsQUKtdUc1wJPAZ+eAiAlC5hqPeXR6OSM4QU9gQo0PKwGjLdFMTY6qK/1Xw88QwAAAGcDUkVGiTA1AKer+xeLJ0/YnyRpwmSVHh8AAAAIAAAAATBFAiEAupYDWpEWOTnAXE/IUVkPD0QXXw3hIfUM8G6Vx7aBTmACIEzFkwhvJTg42Wd6mo0+ky2l7e0/f1lnZhXt7fS8gI2kAAAAZwNSTFhKQtLFgPg9zkBKytGNqybbEaF1DgAAABIAAAABMEUCIQDFvvlNBEDjuwGYLg9NosBNIMnDiZtfEYMHM1PI/GIzoQIgdVeFrcOFIOnPw9O1XubJ4br8UJ4IHfd+2G9I5NEFv4IAAABoBFJFTUkTy4WCP3jP848LDpDT6XW4yzqtZAAAABIAAAABMEUCIQCYTB87SsaTFGZxcmUTLaA1+kRC8ZWOd9SKh6GzAmzdQAIgdiPbYJ/vbBY/hCiqPpIuw+m3Z7PR3UKFXzW2cDqVLJoAAABmA1JNQ33E9BKUaXp5A8QCf2rFKMXRTNfrAAAACAAAAAEwRAIgLeCQr7dOxbGavh6CAyolI/8pai3xT1bQe+eBSZQ3xJQCIFzcvp5btJRju0UuYN5xbRDaw9Ev/jpQMCETL+o0GvLvAAAAZwNSRU2DmE1hQpNLtTV5OoKtsKRu8PZrbQAAAAQAAAABMEUCIQDW8PnQ8zleEKdtAMKvzNcfR2VpD73Zkvj4m4KiV4vgIAIgQperg9h0NJ5RrB2mqk1eX3ouVVqvyc395RiVyMky8NoAAABqBnJlbkJUQ+tMJ4Hk66gEzpqYA8Z9CJNDa7J9AAAACAAAAAEwRQIhAI7fTMWlNoPbI3Lu+Vutb2wa0j9A+l9Wz+ztXM/Q/lKHAiB8//wONdGrsdJ3DkB/w1NdpqhWpnMoh3I6FuO4ylEh0QAAAGgEUk5EUm3gN++a0nJetAEYuxcC67J+SuskAAAAEgAAAAEwRQIhAIV0hMCLNPzFDXzst2GmZSrvwVdT+5usRm1d4l2KgHloAiBejjiti4cy2mYVYz/0f/jHCk8C2g3jwXe19tIhjc98JQAAAGgEUk5EUgmWv7XQV/qiN2QOJQa+e0+cRt4LAAAAEgAAAAEwRQIhAJ76J9h0QvPHBuegTpqSIe+wtJpZ7IFbZP+1Ukp67U8ZAiBN8KWYkXMUT89DK9bSVwcl4FO/P4YV1X+d0hwxKNOPDQAAAGoHcmVuRE9HRTgy0vBZ5Vk0IgiB+DG+UB0YBnGnAAAACAAAAAEwRAIgJtFx8xGtuyQ7dyh03IxaUJ02gZC85OUCZke6qTURZPQCIGrsLcySjR8Q0hf+gQ+0jDO3J0oQ86Jz3BFu+0PRGZX6AAAAZgNCUlCyLCeGpUmwCFF7Z2JfUpbo+vlYngAAABIAAAABMEQCIGKa2WKAuAqhQasF8vPE2c2zocnU5/X6rO6TMTSIeZAyAiBnIvq0Caaz0z0XEk0lZuSCB3pk2ozUtN0i2zgQq5CqlwAAAGcDUkVOQI5Bh2zM3A+SIQYA71A3JlYFKjgAAAASAAAAATBFAiEAqRaydL28dANLr3XnhjxnMY1wM2qZ/FonvG2EPmEIHO4CIHS6PyIwFffVnAB3cfx2dK2XQ4/+bOhXVZmetIBbO3vzAAAAaAVSRVB2MiIWV3doRokJiadZuilz5Cff9cm7AAAAEgAAAAEwRAIgR7rBiQiHPheEinO4xrmqvmB2ah9SpX0Wk0iWu3tk1EcCICDD/a34XGhUrTQYYZdrkaASUuxea3p6ctjEXRrySlZKAAAAZwNSRVGPgiGvuzOZjYWEorBXSbpzw3qTigAAABIAAAABMEUCIQDEGPThyScyGMRDNiyXJt1Pg+IgvPfrgxFY8OuGXwHwqwIgbzbi9EnQhok5sKXQS5eFnWAd862aikTF91GXWhS/IcwAAABmA1JTVhlvRydSbqf7HheyBxs9jqo4SGmIAAAAEgAAAAEwRAIgFJwcUVGMCK0lm0RuoeY94/I25uJjqRDDVFGozhUXgmwCIFrnz32jJxfQXswiJYnDMCpmsdwhT/c5x7PMf+NnpR2nAAAAZwNSU1YcWFfhEM2EEQVGYPYLXeamlYz64gAAABIAAAABMEUCIQCwEOUIsW2IMYOi2vOiuCHqzBQPXsbIyObCxBexvPRf5QIgG9kWw/60bkEzTZF/6tcJoay0tOPq28sx9HR69k9ee1kAAABnA1JTUodi2xBrLCoLzLOoDR7UEnNVJhboAAAAEgAAAAEwRQIhAK0jUfC3dS5hii63LXsMU8sJugKqnmgS9Uz5xGE5ata8AiB+HOxmiJiJSGk0uh25Hx7EiPKMlq0c20DyVLT6J3DqOwAAAGYDUkVWLvUu196MXOA6TvDvvpt0UPLX7ckAAAAGAAAAATBEAiBSJN4CPaX9snqNCpa1tbbyXExq0WY7kT50cqoqwrbLkwIgS+uhRFWU6hlWSsK57DgVBfP873a5CK8QOrbIaCeNuYoAAABkAVJI93Xvvk9ezm4N8ve1ky31aCO5kAAAAAAAAAABMEQCIDVTV8nJhG6dF6TaGGjt7f0gh5bDXCZyRRqXTSr2nQS+AiAx2i0SW3vtTMGuAd0y6g8RPJLtFkbiFSxzBREBKYBuGAAAAGYDUlZQF+91qiLdX2wnY7gwSrJPQO5U1IoAAAASAAAAATBEAiBUGOU7gPhTBu+Zknr8qwkO4sEdIv8AzYKB5iwBJS4QpAIgWHQFujGzbW55HCyY5t/EeSLhyr0FD9sSSC7MMQJxJKAAAABnBFJFVlZVe5M6fCxFZythD4lUo96zmlGoygAAABIAAAABMEQCIByrHc/CgIWYiawEQI+ebNGbVnV6XtOLD1rPESXfUhGjAiATHku5OhYg4rbgrEVtWV2ZQBIjJXMXSIGRTCU4ktSaiAAAAGYDUkVY8FqTgqTD8p4nhFAnVCk9iLg1EJwAAAASAAAAATBEAiAhZH28epcVstjt2IPY5LvvnQvRwqG1Pf8efcrt6HQO5QIgNqp10ajYsQhcgY3jHgk/qjosfdTZp1fbExtx8kW9MTIAAABoBFJGT1ih1t9xT5Hev04IAqVC4TBn8xuCYgAAABIAAAABMEUCIQD7CgCnBo8js6AZquy1VuwtyFD9TJSl64d+Kz5jnuhDkAIgEgiZYNogcjGc6yqE44+e2QKEEfmhHM7AzwMcylnQm3cAAABoBFJIT0MWgpa7CeJKiIBcucMzVlNrmA0/xQAAAAgAAAABMEUCIQC2OoSbeTwVa6dEDVE3NbZYLJW9n5Ls8+XMe8MIQsjVfQIgC4ZLwbgE1pjyFdpM89FZKXKX1Z3leinJwqZRWmkRNUYAAABmA1JUTlSykyJgAMy/wE35Au7FZ8tMNakDAAAAEgAAAAEwRAIgDZvQOU8znvALQmBSR0MjV5XPXaBNdBcbAgkufm0gGrYCIB2ER+kNHtw8OlwMMZjFNEgp/5XddrLzEFru/T3aiCuQAAAAaAVSTUVTSI1WgpQc5FaQCxLUesBqiLR8dkzhAAAAEgAAAAEwRAIgdVuhULwYI846vfasgnw5fQmZ3oWrCaqFJ9K0NPBuGgACIAOEhmFuQX/C6l4QMr0blZ/cnRZQ6OezCWgXpifk9L5QAAAAaQVSSU5HWH+Gx4LsgCrEAuA2nS5tUAJW96vFAAAAEgAAAAEwRQIhAPbEj3jXZzd8dgaedEg0xOQnlK/AWzvU7sMOf1y0xhPJAiAWtsiimghkE3P3HhMQopvb1HYAI2Wr7dirSWLa9tZKeQAAAGgFUkZVZWyvn1SXdOztvQlmxS8lCsxUjT825QAAABIAAAABMEQCIDoY/Gp4G9J37fI5tEuiT86oZ5xH7jvwuK6suDXTXKrtAiB5cyGZfyS8Byzohlc34bwUE1azREAXSPFIlNeYa8ImBQAAAGcDUkNO+XC4424j9/w/11LuqG+L6NgzdaYAAAASAAAAATBFAiEA8lzSgd6klulyLfzZNYmZzvgIskNzx8jlWcDKAXvJSp0CIDGlEAznhq9uLZMVzEtAW+CgDrM99BzVYFPaVn5PI2t+AAAAaARSSVBU3QByeLZn9r71L9CkwjYEqh+WA5oAAAAIAAAAATBFAiEAyoN5lYheZHAVhSxTImihZ+23WioNeE7pBVvFWjAglEsCIDFFwqer18WWt1VY3xpdFbqiZu30yPFRRBt9UaN6qeHzAAAAZgNSVlQ9G6m+n2a47hAZEbw20/tWLqwiRAAAABIAAAABMEQCIDFrDL8xUwkXfbdfzQuQJ0RjK0XywN65rGRdbtUFJQE4AiBcNWMiicUrymCQTRb3JbAxaHLLLyIZOKkOFC4O7VhZ4wAAAGYDUkxUzO1bgogIa+jDjiNWfmhMN0C+TUgAAAAKAAAAATBEAiA6ql9AmhPuWJppRmhgQB4c9uZ5sV3O4P8qcMMftxtflQIgD8+9Gc2bSJfO8Iur1nbdlxgndFNngM8lnRz5hO/3ga4AAABoBFJNUEzhfwF0dacJ3ljpdggeuRYIH/TJ1QAAAAkAAAABMEUCIQCcvBObCxVpmWWkct6N0BCpPGgPKaWKibO4eFeW+c/AjAIgUFYMsSyzEsmzYUZrqqERZDDOBunocpQSa1gE29YW6vsAAABoBFJOVEIf5wvnNORz5XIepXyLWwHmyqUmhgAAABIAAAABMEUCIQDJ1G3120rSN/tci2/DQlypSy9vic93AKm8I3l4KhawGwIgac4K5mxhRo0dTxmJnIeHz99egOilpbDpTItLWUIjztkAAABnA1hSVH3pGyBMHHN7zubwAKqmVpz3Bhy3AAAACQAAAAEwRQIhAKkSsfCsxKN7biC+CemznGMWJ1Q030FKnMrJytiIEjz/AiBkYv7DSUFWSNZiw3GTiTZEmSZFcZPFS0vVmpqrY+UJSQAAAGYDUldTCK2D13m98rvhrZzA94qg0kq5eAIAAAASAAAAATBEAiBlPkObJaZQt/go8SjAucxY0XfIX8sQqbSRcNIWCaDaOAIgCJfpobU/QGz7Vl8OnDATiG8eyQqMgAPtCb3p0teq3foAAABmA1JPQxvLxUFm9roUmTSHC2BQYZm2ydttAAAACgAAAAEwRAIgNEitu71ZpK5g7XSGfCnJcuo2L115ApQPQTF1tOyhOFgCICxWjTFhdszJHckv0hEz3uc5uhMC+J/EkNx+DoW81TowAAAAZwNSS1QQaqSSlbUl/PlZqnXsP33L9TUvHAAAABIAAAABMEUCIQDWVMYENVui/J75Cx6Yg7ftSrZ/kCribtRK5C5k5PpeegIgFkJF52yeiqC+Ea9uaQehB+KpWw5LQrqpygMbJuuVBGUAAABoBUJVTk5ZPqULfvan6vfpZuLLcrUZwWVXSXwAAAAJAAAAATBEAiBOmLZERGzZKJcoU4qnSNbSYqcAqzEgoHsE8JS50nPlNgIgOHzWh5CCVXFfrkLVcJk+zIN1b2FeScQgr9YqYFypnKUAAABnA1JQTLTv2FwZmZ2EJRMEvamekLkjAL2TAAAAEgAAAAEwRQIhAJhj8awbD/VWwm+rMGLHuPvBwFEN/sKaysGY4GfD3kDwAiANTxC7UfQri++hBEtdXwiGzEpGQJuAQASg7gEO2NikIgAAAGgEUk9DS6QBBhNMW/TEFBFVTm25m5WhXtnYAAAAEgAAAAEwRQIhAM1f/eXdE49BYsXeK/uBDLb8bg6GwM5/oAwabjJBKhfnAiAka2h1PqoJc+Zq5upUr+uj/E8rWI1xN4wBh/nHjZarzwAAAGcDUk9Lyd5Lfww9mR6WcVjk1L+ktR7AsRQAAAASAAAAATBFAiEAmwWj1SZ2gXFH0xBVa3taExnSbsQmh3vVbc9E2ywB2sACIG4x5SmaDW+jCDe5T56mOIvyrkXFHOC80AO2H6tBzzlIAAAAZwNST02srKW4gFY2YI4UxksL//wt6yxs7AAAABIAAAABMEUCIQDNEwWpSlTLd/4rZag6FEQKNFIuf0g7GHqQtuGi2NxdEwIgfdl9+pICeD7ARz43MX6IsLxl3eFJcr308BT42uqKyaUAAABpBlJPT0JFRaMbF2fgn4Quz9S8Rx/kT4MOOJGqAAAAEgAAAAEwRAIgKIpW9Dn/H8ZAJ5JYMjAVnutLc89kPX7+2+6GAArbX6gCIF+YCW3cUwsNnei7CLoarYQ9uMTxiHIbhBsyG5bIKQ65AAAAaARST09L+lBHyceLiHevl73Lhdt0P9cxPUoAAAASAAAAATBFAiEA/sAec4g5foHQ/TZUatnr6ElggzDWB7Ivg5qYkqc78tICICgqKiqMh9eViAGpIFmjNU1s7PlPWQKgkHhmZ6gd7AeuAAAAaARST09Uy19y03aFw9WtC7X5gkQ7yPzfVw4AAAASAAAAATBFAiEAtUuFTwywlPwlJldCUyKPALLaRPCwAIFsK1ya74WFvfkCIBNq4BkKJk8fD+Hc1IbDKQRBuVPQARapu2SiL9twAZSoAAAAZgNSVEg/2POali79oElWmBwxq4n6tfuLyAAAABIAAAABMEQCIE/EN8yEDLgmFXztfnJ2C9s9I4UtRCNKx2WMC0plBwOtAiAn+CyZ6t5ponC4SuP04PdEyX0pPnDNw5qQQOBKzPDazQAAAGkFUk9VTkRJk8uVx0Q73AYVXF9WiL6dj2mZpQAAABIAAAABMEUCIQDGmBQTGBWDrfal3/k+n1Xq4U5Gs4DqYwCQSYn0NYEr3QIgJ9syUbBSX1q9gnKeuH1tUNBKdHNVPL4hpsUJUceQwJAAAABoBFJZTFTTCi6TR61I6iCO5WOpzf2A6WKnJwAAABIAAAABMEUCIQDP7LXc+t2EDbNaJS+1LB3U5tlyq1mDHg3TJJjiXrzZOwIgIRpqgBZnj6xtqqFYR3yIXWOva4IVIWbgAKUekmOqjl8AAABmA1JCQ6Tu1j24UxHiLfRHP4fM/D2tz6PjAAAAEgAAAAEwRAIgZ5ZL9CXv1hMWdBRY/wpCFmZNUujXNs9PH8SGrO4ZYFgCIHbzxJeoeAwrFv05Y7AWtbyKwdU3KHrJZiSRqPk3tSlvAAAAaARSQkxY/CxNj5UALBTtCnqmUQLKyeWVO14AAAASAAAAATBFAiEAlEFXclylczEbGvaI5haXDo09Xy0P/NbQ+Efan9GBvu4CIFgNdrlNPltBKdvpJvtn+p8p6K6vN94uzUpOGNMRaNNPAAAAZwRSVUZG8njBypaQlf/d3tAgKQz4tcQkrOIAAAASAAAAATBEAiA47fVgK4+LVJjLTIUAm1DvzvB/Ilxe6Qq76H6s9e8BGwIgA3cHPtfBCW3zA96ahoG6DvLV8nTD9u7K1Ic722ywxtUAAABnBFJVTkXe4C2Uvkkp0m9ntkraes8ZFAB/EAAAABIAAAABMEQCIC7lx/b8IpHs0HfQwsp8m55juSMeZXIemqn4bXX/S32bAiBz8a+Vn+Q6Pqo+MXsyehZb6+dD0vmNHlaTx3vifFcGsgAAAGYDUkdTTDg73K5SpuHLgQx2xw1vMaJJ7JsAAAAIAAAAATBEAiACfP8z66NAKfRi3l/I4U18xkvuc15CpfuZkB1DC4iC7QIgPyWdn9i4v4NoE3+0+2EEPpYv4w/U03mQejjukVefvvkAAABpBVMtRVRIPrkdI35JHg3uhYLEAthctED7a1QAAAASAAAAATBFAiEAjnJm1KlC+iQ/hsTyKPZorbYfgoSi+FA65+FwqDWfmWsCIDJKaUqmtaAWoqCtXlKNb4+yAvay8djdusJht/Tk9kQTAAAAZwNTQUOrwSgKAYeiAgzGdUN67UABhfhttgAAABIAAAABMEUCIQD9nuEwmMoCf/uR5RoYzplHDiPr8B88kcHgJlsHtLVZyQIgIiK3t8iyNQdAh7FLv8jCJXUUv8dPOPqBQmsZux586EIAAABoBVNBSVRP+hT6aVhAExSFGhfWxTYMop90tXsAAAASAAAAATBEAiA/0NQ7iZVqVwBNo/XlNF48gPHbEMccERgZitEvO03A5gIgdd4JA+xYp+aL62vwoBU7FRw3BJ6RSbrJAVbDOOfiAYIAAABnBFNBS0UGZ5jZ7wgzzMcZB22rdxmey9F4sAAAABIAAAABMEQCIFf+gDGx4RBTbUguM8bL4rWWA/ObWdK90G+8YjwfOx7GAiBZUSQJanpl2pwnPTrftAJ2ntorSLC6EMALsEVyi11hrAAAAGYDU0tCSvMoxSkhcG3Lc58leGIQSZFpr+YAAAAIAAAAATBEAiB0hUS6hjeqgfP0AS02tb3jQJQ5BitwaOE9TRJMzWEXVgIgXq/+EY+YPWwuZOoUhb/85EB0/168rpgo4YIN+LJKTXkAAABnBFNBTFRBVtM0LVw4WofSZPkGU3M1kgAFgQAAAAgAAAABMEQCIGbt8ZIE2W8TpoUMXktrgh+c8Di2m/1bw8j6chqZELQ+AiAkO6V/UUYErYlZCU6Ds/u1DVtV6jB4Q1xcDCVcI+IoRwAAAGgEU0FORDhFutrejm3/BJggaA0fFL05A6XQAAAAEgAAAAEwRQIhAKud6w/LVQIzoYYcg4BCtGSf5J8bnPBiObRIPzTPYivXAiACFd4DZd0CgZzBZTR1/l90FhpdzIrVwZJCz40oDzMI3gAAAGcDU05E8zOyrOmSrCu9h5i/V7xloGGEr7oAAAAAAAAAATBFAiEAxneru5q7xkxDcN0v+TFmYoMXVG6twaBOH7OWQGB+b1UCIFvKSZuBYOyqVTFSZHWbVZTofwJH2CeXS8mFMV6VQJOUAAAAZgNTQU58WgzpJn7RmyL4yuZT8Zjj6NrwmAAAABIAAAABMEQCICX04BSFkOSjgVx2+wUJuuNG03C9lYdJfedXsxMXYr/AAiBbhubjNRhiiM3uF8KqyXJWmEZFEigShzjqfGGrAYjlUwAAAGYDU1BOIPej3fJE3JKZl1tNocOfjV118FoAAAAGAAAAATBEAiAnZ5solCvqjH6gfOnLYHHN28grPdO+vOkwii+6BelYZQIgbXiVYLP7fVu/tsIysxF3VYtqc3bj+xEikQ6Nd/7Zb2sAAABrB1NBU0hJTUnCjieHBVjPIq3YNUDSEm2i5LRkwgAAABIAAAABMEUCIQCgBfRTnMThedkG7ueAJ/pl88+JGEV339HfUKwXPIy7QwIgSCJ9w7MhIppJYULIibfzzMrss8yo5WtuSBgeoMUoGI4AAABmA1NUTlmTRneekPw/X5l7XqcVNJgg+RVxAAAABAAAAAEwRAIgMvL3ZMME5tgzFTrPXi4K2l107cBR8P9q9tNVojCNTicCIHtmsUbmqGwzcf6wZa5n6gImLoJYJA1bR2R8Fn/FVyuTAAAAZgNTVkS960uDJR+xRmh/oZ0cZg+ZQR7v4wAAABIAAAABMEQCIDYcZOun05wcPcA/7i5Zg7Ija2H5NL/QUgzDr3dk++5sAiBpVB8UX6QArbmxNfrByTId9XK0R0HoWPR9f0wJHU+/0QAAAGoGU0NBTkRJeP4Y5B9DbhmBo6YNFVfIp6k3BGEAAAACAAAAATBFAiEAuTcOpnPX/B4B/+DUi57aS1jDQDvct15rZOrYh+Cvq1ECIFQ6HaXc9CKiSF7RxWX8IrML/ODbJHRAsoO3Flhm8G47AAAAaAVTQ0lGSf3Eo/w23xanjtyvG4N9Osqu2yy0AAAAEgAAAAEwRAIgb1xnM+4bnIyJ66hmS/sa0vChB5ecD7BTTDQqGXlGmFMCIFWZoTQ8YEoAds8V3LgPbTykhMy14prfSdjtu5ABqZcHAAAAaARTQ09UKO1P1t7bImsWuSzmmX98398MUZsAAAAGAAAAATBFAiEAj5V46Sj5G20TEPgIPms+Z9q5CRPOkzoeCHYjQb3eSC4CIBdxEbfh4qtumWuZGHf7yCKAjzwRfY/Vv4GFaWTMDWnJAAAAaAVTQ09UVCf9aG2xDgrgR/6P4d6YMMDg3Dz6AAAABAAAAAEwRAIgaSOSzUyJ5b0KR+LlhIW89hJMbzxguKCsPo86eMNV+lYCIHBvgkQE1Y9VsnXVGpgWn54M6Vd5YfefhZxJX5PIva87AAAAZwRTQ1JMJNzIgefdcwVGg0RS8hhy1ctLUpMAAAASAAAAATBEAiBRefUgjCA5fzWjFQwkXFzPO9+qb/DoeWitLusACANDywIgOgwmcXNUDlOkku3b6BEzmvqPUeh5uKQ7sRHpEapajSMAAABoBFNFRUQwzyA7SO2qQsO0kY6VX+0mzQEqPwAAABIAAAABMEUCIQCHMmAoNOPFwEFhKF8kAWsIkxwJYVxlint9vNxsA+qRjQIgTDfNDRZyZiuYj5H6aJRy1VXjSMD6SRiptnVMKYKBaWAAAABoBVNlZWxlsekyNqtgc/2sWK2lVkiXF31LzEMAAAASAAAAATBEAiA1xRZc1MY47QRYtSaelfWdqFwXEmqd36Vt4rvq0Q7kKAIgaV6UMogSAvH/j/meM3IUx+i8NtmVKxe61ehOwSw730QAAABpBVNlZWxlse7xRwKOn0gNvFzKoyd9QX0bhfAAAAASAAAAATBFAiEAwmaEUIpUk4EqdMOFsDq6N1sZFQ6cba4SJGBIffJmSykCICmrgDZK0qXaExJFxnM0lj6YZCOv4ZuWiKYdGlTwx0rHAAAAZwRTRUVOyj/gTH7hEfC7sCwyjGmSJqz5/TMAAAASAAAAATBEAiAEnnwmeDlZQoWMVcHinsDP0EYYIiPSlZIBDGtY+sJaGwIge3t5engrvHSpgRv8tvsmM926LBKkt0Abownje/eYlEsAAABnBFNFTEZnqxEFjvI9ChkXj2GgUNPDj4GuIQAAABIAAAABMEQCIGPXbDr1ilhRfthJfDbEpdrDuVNvQmfMEgOUF4GZfcukAiAIf0va5ba3k+DF4lsnRpJZFwOgxMHd7kCEAF7CI37bYQAAAGcDU0dUN0J1djJP4fNiXJECZ0dy189xN30AAAASAAAAATBFAiEAjzblAL7mD/FxMWWSFYzcnjuwsBnU6bBMFMgxx6r+cqMCIC/gowto3jHpk/SVCxGgH55ZmNsk63r6+kh+noLVV+nUAAAAZgNLRVlMwZNW8tNzOLmAKqjo/FiwNzKW5wAAABIAAAABMEQCIHcExuwXbmHLTA5HX26a+FWOVtybEz4EHe5X6OBq3YQ6AiA9bSwbtgqEv35uAMemu7jRcry+pGk8NTEMt7jBJXLRIAAAAGcDU0xZeSjIq/H3Tvn5bU0KROO0IJ02B4UAAAASAAAAATBFAiEAnc81+xDDwYhqzQ1nyHDGQOLpGr5OJSjkHSc/6t84vtgCIDHTbqRrp1xzKOynj4jYyhQYLkWqWzvz1m/R11mCAVJPAAAAbAlTZW5TYXRvcklMp0GFUy3BeJUnGU5bnIZt0z9OggAAABIAAAABMEQCIG346t63tFPnaFxp4RqSlkJlY91g26EcVHNI0rrXTkJJAiBgcuO35vBQL0tRbhS1GjGGqwJWdn9HJDQEf/p7FIoSXwAAAGgFU0VOU0VnRfq2gB43bNJPA1crnJsNTt3czwAAAAgAAAABMEQCIEvlBwXZ7JmkKxyjneEyLx0WqdB4pV8BJLRboM8Z1ThLAiB2nwJvG4DByga3GBP1BFq2elviy8438MouFtHoo87kPgAAAGcEU0VUUwTgrwrxt/ACPGsSr1qU31mw6M9ZAAAAEgAAAAEwRAIgUGX/U/0FR20IwTaBpCfzAtn0Xfb+kKw/470e7p/48pkCIH62gTdxkABUu7jQQkQ8rFZC0DI1/LOE/yWZo6QCsXOAAAAAaARTRU5UpE5RNyk+hVsbe8fixvjNeW/8sDcAAAAIAAAAATBFAiEAq7gw5bOp/rj27DAYcfE0CPN459AJqJF30sOX1kaEjhACIEiGFpTVGYdjrMdgMQgPENu3CUUxocA0p2xb88CeRdNnAAAAZwRTRU5DoT8HQ5UbT24+OqA59oLhcnn1K8MAAAASAAAAATBEAiAqo8ERbnyTSFUNfykVfN+gXa/qnmp+HXsNb8VrF7oEGgIgRe1gRdjJLoKnTJAL4CBp8a3OuTWt+r8WG10jrHDx2joAAABmA1VQUMhtBUgJYjQyIQwQevLj9hnc+/ZSAAAAEgAAAAEwRAIgLA1j5sEHtt6gL4xXFlI/Qm1UIeCBFf9O5IJdbLJy5icCIGu4oKz3yDVaXRKzrluyRbWQjhitDIA8zIBKFW0oHchuAAAAaQVTTlRWVHhlr3HPCyiLTn9lT094UetGorf4AAAAEgAAAAEwRQIhALY8ryegiPnT9MZ7Sp/E0FIpMIHtxZJk9aKBi37kwi1uAiBTMV0o61TUtuLmpSEkRaCeuWmJVzCDLLQuK7iS2VGfOwAAAGcDU1JNR2xeJqdb0gKpaD/9NDWcDMFb4P8AAAAGAAAAATBFAiEAwimlBlZhMzt0KkIjhIkKjM+VFY3G5+S/zlhSF+KEV5wCIDuPd8tXafUhZ8dxt5v+Frz1GztT+E1tAW9txkyvtsl2AAAAZwNTRVTgbtp0Nbp0mwRzgM7UkSHd6TM0rgAAAAAAAAABMEUCIQDoe/11zw8/8dksCl1FloqMitb0AXMf+3gQDnASqqgUxwIgKpYmn54TAj7/Vp+Dnh91dWpk5rZrOFzAkqX0xKI33BgAAABoBFNFWFmY9em38OM5VsBEPoG/feuLWx7VRQAAABIAAAABMEUCIQDlSDSnK2vgSew1Qf/q9otbbcFxhAXozvuKXvVJhWzuIQIgYNNKbvfQjIPnpGgOUUxiI0uOJUF/04Jpf9dOELE7Q4sAAABnBFNHRUyhzMFm+vDpmLPjMiWhoDAbHIYRnQAAABIAAAABMEQCIErkQ31xC6YBQZiwrB0IJWRypfOqFp/98Qb3Ov899AIQAiBwA1PqqTR0KtLlnq/JzG6MUlQq4TK4iDAUYLv2PypceQAAAGcDU0dQM8Yjorqv640V36885ECV7+yD1ywAAAASAAAAATBFAiEAkcHsHov74QIV+ygYji7/mARTg62no1hmltDKQufKcXUCIHDRTeJ4GfT/59cI4kmtj18iy9zgQKawF+E8KYUwMSrmAAAAZwRET1dTZhqw7WgABJHZjHlhRrzyjCDXxVkAAAASAAAAATBEAiBbYSXmkl/jorGNJFfeeNLjyXInmYWwyL6Oy/FDtwf3FwIgRyaV6Nxk8SxGIBCk8WWiv8kL6PZiEMs0eUVA0dhOz8AAAABmA0hBS5OnF02v0x0TQAzZ+gH05bW6oA05AAAAEgAAAAEwRAIgW6pc4YgHtEgEy2cPAP7sgJjWx5hMuCf2nnQQQoJbf3oCIFqX87HFqYmEgLVl1DCwx+E9Ros+MhUMsgL1iJpF3Sn3AAAAaAVTSEFSRL69q22gRrxJ/7th+9ezMVfrJw0FAAAAEgAAAAEwRAIgRmQZ/jxV17ci8EdtdCU1+XywDwwtCQAdgP22ILFEluACIG0gudR790BmIlR+BPghlGn5fgA22K2sQ+/hvnQO+uQ9AAAAZQJTU7v/hi2QbjSOmUa/shMuyxV9o9S0AAAAEgAAAAEwRAIgGF4OUznlf4mUqykExmVeCaIhHIPwocimNtBAczsloAUCIDmqA9/T+ft/OSKG5hwtTqIGaJI1hPa5XHOIzMkbzwnLAAAAZwNTSFLZj3WxoyYdq57tSVbJPzN0kCepZAAAAAIAAAABMEUCIQCIFm1T09011UuCTBQ185uDP/61Yeo1R2ufiUASsJth0AIgEBe0+2fYPfTY+TfvSS3IHzg6Bm/SpvGFox5pOxpYsmsAAABmA1NIUu5f4kRAbzXZtN20iKZNUUVmML78AAAAAgAAAAEwRAIgdRGBV3Cr3cpEBWBuplTpP0oXIpJo8vJSgqwU3+ZsnUwCICvjnh2BzQGQab61VEg0EN2VzJVoO6MYgb/k5ebxEWXzAAAAZQFTlrC/k52UYAlcFSUfcf2hHkHcvdsAAAASAAAAATBFAiEA2/jNGGyff7+qRd250dTskhUL1fjhUbmIW6ltnZUCA5sCIASwadYkn+wieuigoxiSUW27Zsj+4SaBBeQkzarTlCCsAAAAZwNTSFDvJGMJk2CghfHxCwdu1y72JUl6BgAAABIAAAABMEUCIQDKBRdgbRssYGA+HthtER3fQc7yMREufbyHDeXsZdYkvwIgJhiHfflPMVf0IHBKFYBMh7xZhoh3E3gtZNT+kdD40NUAAABnBFNISUKVrWGwoVDXkhnc9k4ebMAfC2TEzgAAABIAAAABMEQCIGKHkHbPwB0bh7JjCSAMSxUGpFMTGMK2bPy0y2+Mf5LIAiAkIKSWPucmfnpFQ479YQwPzdFNZV/A8x9jypXydi0EkQAAAGgEU0hJUOJbC7oB3FYwMStqIZJ+V4BhoT9VAAAAEgAAAAEwRQIhAIkUMrmsUJRYU1QPGAPGfWjlQBMBOSaKNBLPSXSgyxoxAiAlMxe8/YDVDd/6LAcduOQkLjfPYT+TrVh6qHNx0yIWCAAAAGcEU0hJVO8umWbrYbtJTlN11d+NZ7fbingNAAAAAAAAAAEwRAIgGTfzzzBqMBrHx58mSRw5Ub9SGwQ/Z6vqXY1pEayRx/8CIAy4ZLIeri8QuMWsjvna2e0PvLQmxWbU/Qo0ocHCf2UvAAAAZgNTUEmbAt05CmA63VwH+f2Rdbfavo1jtwAAABIAAAABMEQCIA/iiVY/5leKqr4wsn7cLBT2kSTCqJe+eapn00kxwOQ5AiBew5Si+lq8mGkbjK/i+xluBbeuwGM3WPl+hqpoLNBY/AAAAGcESEFOREjBsvPvqF+6+yq5Ub9LqGCgjNu3AAAAAAAAAAEwRAIgPBfSMV5Vev09S9mDWPVJcixc21iM76kXeq/MLh/mk3sCIE4F2j2Ji1II8jqX+Ve2anl1cL9F38EG8Zikb7N+X3JEAAAAagZTSFJPT03tBDnqz0xJZa5GE9d6XC7+EOXxgwAAABIAAAABMEUCIQDrNQWaJ5AjnXtEk+N8bKsph/1re0sQoqsfqSORYQYomQIgUTj2dx47Dl+BaXU5A7mQ5A8Pl8aNtvVJBr/UZ4uQV8wAAABnBFNIRlTLo+rn9V0PQjr0PMheZ6sPv4e2HAAAABIAAAABMEQCIFsa/Lo2GUmBZy2fmT/l+1RnD94ZUA29BzewBdc+tXYwAiBe+N+2Fe5LUTmIwnFXnFSCXSwohpZOPlHnDuDv5T4TbwAAAGgEU0lGVIoYfVKF0xa8vJra/Ai1HXCg2OAAAAAAAAAAAAEwRQIhAJfDuNajzH2RjM6kS1oMt2YZqOVYmxKWdQ3CcyM/DKJ6AiATByLaJ6dkC1tAb8FDeptTp5UoutEaaMyC7DHfG+RmHQAAAGcDU0lHaIihbql5LBWk3PL2xiPQVcjt55IAAAASAAAAATBFAiEA3CVznouGy74ho4ztXSVcXLyGTkrzdWBUNrot4dUfzdACIFKPorXCTr2j8a0MA/L1vIg0OwRPhlbS8yhBLOeMAnkBAAAAZwNTR06yE1q5aVp2eN1ZCxqZbLDze8sHGAAAAAkAAAABMEUCIQCwb2358Iy5GHC1/ULqJWPEeS33elpMKBbcTstpcr3QBgIgaiIEx4iBDYwi4OiwvVOMnBFKvPxD0l/vBcEvfRoZtW4AAABoBFNLTzFJlOgYl6kgwP6iNeuM7e7Txv/2lwAAABIAAAABMEUCIQCaFaw7TI4mxkv1pT7AKE6CRcqVM+CG4hhf3tNr3uOGdwIgd169RyxJsXTuKxEdr1/jOkwr2jRccw+nn8nN95887x0AAABoBFNOVFIoWQIe5/LLEBYuZ/M68tInZLMa/wAAAAQAAAABMEUCIQDlxJul30zp3VJG5dh2yn8FIBggyhWeEicFxrfii+wzhQIgUXZs7hbgflcqAw2WVJey89j6DAuvjsI1mdZ2GmkPi3YAAABnA0FHU4Q8mvNPaYYY+QyJjjlnJ4omDI2aAAAABAAAAAEwRQIhAIhKFXvMp3gpXsfL0XYDyJugvN0DXFmsTWYDygpbGGXGAiAfy+UYT5N63buix2LnWLGtclN4arkt1Hsu5sFZquuCcgAAAGYDT1NULE6PLXRhE9BpbOibNfDYv4jgrsoAAAASAAAAATBEAiBf2ODQccDldDwkyW5v1blrDNi00GHDrBLPtgO7Y9++HAIgKLuAo92O5HNA5Y0WR4P/iRYyQSIY1RX7i/KEpNIBEYoAAABmA1NCQey49Yjq9ajOnZZLCs7OXZVOEw4vAAAAEgAAAAEwRAIge+i00JWwH8CLpEzYgppMVAcwB01F6bWwwCEaTvlour0CIGbTiN4X+/dEAe5U+TN8rx0iqmUG99U0evtnNHmBNkpPAAAAZwNTTkfP1q6L8T9C3hSGc1Hq/3qKO5+75wAAAAgAAAABMEUCIQDJuVz+QcG1UjTgigh7ePNaR8DclyuTyUs2ygizRW+WxAIgNMoKuoEPo37adK0/o2z54XtgEkRrhkxPzxgIaA7o9dQAAABoBVNOR0xTrsLofgojUmbZxa3J3rSy4ptU0AkAAAAAAAAAATBEAiAbNpr2yiCSCxFyvZTMvXt+t9LpjqLgWdETyamr5NbPlgIgCMixaPlw9i5XSAGVRo6lur1AbJp470YvQRKIUxDfyN0AAABnA0FHSY6yQxk5NxZmjXaNzsKTVq6c/+KFAAAACAAAAAEwRQIhAKTSxWrmjg0ljPUflffCuC3F1rLOx595N79+f25JL8IPAiB3bOSIbY00y8V9rAA1KVDfdxMBVhHmhyMMSqKco7GejAAAAGYCU0nSOsJxSK9qLzOb2C0OPP84C1CT3gAAABIAAAABMEUCIQDX/ouxG9XgM2lV97PGCMInqDjQwl+cFWHTdhY3K23hQQIgXy04y1aqdoAsQvhRG8CheNG1BO6ED/09BgBcEKxhOYcAAABmA1NSTmjVfJocNfY+LIPujkmmTp1wUo0lAAAAEgAAAAEwRAIgY/AquYswK6sspq9C1EqT/CrJuF1j8HRevqpuCGwKUwwCIHjwll0gPoQAvUoA+0tKvpdKAW2rlPHmyGyTBARaY1dKAAAAaARTSUNUlNNZGPawDWz/6f4Jc8N9AvToVN4AAAASAAAAATBFAiEA2Hy8Vcjf7PsAgLHaPaEuwFSx7TUwCZTzbPRdYZ4XE68CIGwYmpeX4E3qPtgBW8PwhvtLF1AeglanJJiUPmUac5cXAAAAZgNTS0wAyDrsx5DopEU+XdOwtLNoBQGnpwAAABIAAAABMEQCIGWKtfvjQgUFH2gSWXnFJLqSiN5zMj7UOaYTjNWqxnJJAiBJGhNK2OApZJjCBQ9ISMGHN5/pckZscbeqEGwz2vj/egAAAGgEU0tJTivcDUKZYBf84hSyFgelFdpBqeDFAAAABgAAAAEwRQIhAN/nXiaNMDOVZv7wJhSF7ywokWtJXEE/rAmPPiTsDQeFAiAxZYmYEaWnZraWNSTSbqsmMr2ob6HVeY11GHuRSVziFgAAAGYDU0tSTDgvjglhWshuCM5YJmzCJ+fU2RMAAAAGAAAAATBEAiA6QHJP5lSS3E4zV1lqXYnlmVSdFY41inAUFz/unsSd9QIgbHcaUCb7Nlzew0vtB+Ke3nidBAblC4KNbC/8g8J1ZI8AAABnBFNLUlBuNNjYR2TUD217Oc1Wn9AXv1MXfQAAABIAAAABMEQCIAYY38uWbWoneFCUTypI8vHCwIb9M12LYAumGPgFYy2uAiB9/vbEktTOFsfhC0+TcfqE5CQ191fOHjSJ7Jr9/cnIeAAAAGcEU0tSUP3+i3q2zxvR49FFOO9AaGKWxCBSAAAAEgAAAAEwRAIgaF8HfnNz0TBxBbzMWY0a4xnujjTmTy13olN+MrDT6XgCICbRZ32nKyCYrMifoAw9wpr9hMtAdY9SCNnP+1Zf9813AAAAZwRTS1JQMkpI68u0bmGZOTHvnTX2aXzSkBsAAAASAAAAATBEAiBeMzQ7+YHpwqfTsNorzdwDEysR69wuUqnzDCGFwnPG2AIgRmDS5ysH2iz/dk3CzdDF1XQlY6cA8ZLmoBi0psVeESMAAABmA1NLTdmbin+kjiXM6DuBgSIgo+A79k5fAAAAEgAAAAEwRAIgOzwWt0y49oAEb8Ib/mk++qtOLchX8cWQP2lWHjhuEVwCIE5abSV6noyZx54om3VP5GPNQdvGveKraotGmfCwKvteAAAAaQVTS1VMTLzGbtKrSR6a57+DhlQfsXQh+p01AAAABAAAAAEwRQIhAPCuColHwM0mJ8P0nHK6Fv2CwbWVrgSvUcNu7olHNkbhAiADo5yGIip37o2WqDOI2ugssi5ggqKJujgJXDsq4Jcy4QAAAGcEU0tZTXKXhiuWcP8BUZJ5nMhJcmyIvx13AAAAEgAAAAEwRAIgEOAL6HFv3VlV6zxMa6J+cxag2ib0DRo6lJn0OElG1yoCIH8qNUKI+iDNpi6/NEXSu3XBiYLI9KgjW+r2arsHQboiAAAAZgNTTFA3I2zQWzTMedNxWvI4PpbddEPc8QAAAAAAAAABMEQCIH60yOQWQgNNHZ71BGi//hrYWuqG67SQmzFhccVVEJUYAiBxigqQin//G3eiAADHUaZJkYUGqLsNC21a1Z6rxaLUxgAAAGgEU0FUVN9JyfWZoKkEnZfP800MMORomHOJAAAAEgAAAAEwRQIhAPQ2dYYsT/kIyjFnEHB+WfkKGEDAjpFBSbj0wugx8dWpAiBolHKmGUR2o/bCCBr6YLMCpwlna4fYgThmu6qagLmv0wAAAGgFU01BUlRvbetdsMSZSoKDoB1s/usn/Du+nAAAAAAAAAABMEQCIEQYzH+vPAq8/WebgwnbQyFVPwnjIyu0Hpzf4vxJEoHmAiAPWGbmtwT+uMHUnYvHiE/MCFGyCsy7HJPvgGeq465dWQAAAGYDU01ULc+qwRye69jGxCED/p4qatI3rycAAAASAAAAATBEAiAhBckifvKDq0SjAegCTr7hx+n7IGpbXKtlzWF52f/3gAIgTgw9M3k09uk1793zus4EIOM4QYIGZ5Jpzx3wYXBC2eoAAABoBFNrZXkGoBpNV5R53V2ITr9hoxcno9jUQgAAAAgAAAABMEUCIQCzDQBKrwmjWIGnm8xFrCvc9NF2bDsSARrvUBLF6fqObwIgMWegJmmRS/9tRfiCKftxjX4QvxIrT47lio0RZ4WKJ7AAAABmA1NMVHpf8pXcgjnVwjdOTYlCAqrwKcq2AAAAAwAAAAEwRAIgLo48C1JrI+Sha2Fz2r8l9FcWfka4y5qCgZEtrkmZwyICIFJ+v/udvGK2hSkOPivpvo605+EG+NYY2xnCcIsFkchHAAAAZwNTTVRV+TmFQx/JMEB3aHo1oboQPcHggQAAABIAAAABMEUCIQD5tqUTgqCXJzHx7B1PYZ/lVgunc9hZhOYH8UBCWvCFKQIgPI6uXn8OCds8ocZTHgp6zBCp4s6YVhtmZ53KFmkGlHsAAABnBFJMVFm+mbCXCfx1Owm89VepkvZgXVmXsAAAAAgAAAABMEQCICl2Kwut2K/W0f46ztV9CZeQTaLzXHsi0SJZ744+mYh9AiA4R6dk125I7wN+UXJdYMeq95D5xTkcQZt5tcmKuA+tXwAAAGcDU1NQYk1SC6suStg5NfpQP7EwYUN06FAAAAAEAAAAATBFAiEA5qKdJBD5b4BQ7I6bNui8EL21PUTUaL8imdor02BoCj4CICfw78A/GvIMEAviFPwWcpJJ2oYyN9o0H+Wrx+iLvWdvAAAAZgNTTkP0E0FGry1RHdXqjNscSsiMV9YEBAAAABIAAAABMEQCIFoeW9Pddtw3ENqbNOon/RPuaiL341etii6z4INDjkV0AiAestJ0WryeErTsFexXoZxS41CwXshrHdiBh9X/Zw6J0AAAAGgEU05JUET1iK7rjERHFDnRJws2A8ZqkmLxAAAAEgAAAAEwRQIhAKzfVyB2hmYM/8KFzr/TrvIrv/sAAZd7E5xresIrfiaPAiAXw5ausHBgidOu9p3RuV9rCjPrMa+npm8X5rMEuNU/rwAAAGcDU05NmD9tYNt56oyk65loxq/4z6BLPGMAAAASAAAAATBFAiEAo21Bih+DR1DJLuSfIPPH2MIrMwLX0uSVPjILe13/NkUCICCB/9x+tWb6rB0wyh2amyRuCTnuVaOuBEUnJO9R/nIjAAAAaARTTk9WvcW6w52+EyseAw6JiuODABfX2WkAAAASAAAAATBFAiEAlJfhtkA0zWEeOxIaQ4XLsdzRO6SnBVMPHVR1AuTT/sECIGFGczXV04OjrBTv8eaG1zbQsShiVFuBRk0LxHB/PqVwAAAAaARTTkJMGYqHsxFBQ5E9Qin7D21Ly0Sqiv8AAAAIAAAAATBFAiEA/hPBr1D//ehToLCg9O8Xvp2emrEtzVDCNrMNR4R4058CIHtxOJcEQvrI6e85l2y9WbR71yUykg1jL4CQnmpQgcGSAAAAaARTb2Fy1llg+suOSi38ssIhLLLkSgLipX4AAAAGAAAAATBFAiEA8IMS6cXoij0dKYCjtjh4v3NUdt3bnA+ayjQ4GTGEgXMCIGFymMepehoz9Zfp4K+TXnnn3LfJ4Y5yqPjD1MG0ndstAAAAZwNTTVR4643GQQd/BJ+RBlm21YDoDcTSNwAAAAgAAAABMEUCIQCPZkIOY7quEV0P2Vs7KuJvCRMcdaFBcZrUENhnNJ/XfwIgQOFEVVbI3GxD5QadDc43XICBuzsM25+iduCH9iyu9YoAAABmA1NDTNdjF4e03Mh7ElTP0eXOSOloI97oAAAACAAAAAEwRAIgaGjf1TJQcwWIHRieA8g9VdzQ9S8DvoegD4KlQWDfFQYCIE5q/nOvpJ5dJ87jxoBWKjrScoSb6PUADLwqpZJNnPgCAAAAZgNTT0wfVGOLdzcZP/2GwZ7FGQenxBdV2AAAAAYAAAABMEQCIFtSUhsf2or0ORWcb69bptM634FpvPMxUplysEndNaowAiAyHMAILj1wWFtD2BDnEfhsdsnzHkK84+k0ptVbhfPXlgAAAGcEQ1VCRd+AFGioCKMmVtLtLS2AtyoSlzn0AAAACAAAAAEwRAIgIFaZ52zrJxCcP7RpNCNSwJlcx/FMN3z9/q3zqWISdJYCIAZtdxou5n2TSSUxcPeQGyEvt6mN1EEy551ZFmTPcHK3AAAAaAVTT05JURxirKK3YF2zYG6s2nvGehhX3bj/AAAAEgAAAAEwRAIgQhgp0ZW379LpCv/S1xTdaZbE9IKDvRdGvxKpOPm+dRUCIByNs3KEcLUj7eOrWuFBT8uojpbb7METT+kRrNLnosjvAAAAZgNYT1JA/XIldZeqFMcjGnsaqin86Gj2dwAAABIAAAABMEQCIDuDrqW5RDFDulDwrLC9CZlkD3jdK1SUdmEuPvruDGEuAiBkmZRgH0whXqU/YeOlqoKbU4DfysfTwY99WiW9FlLaGQAAAGYDVkFM6I+DE+Yal87Bhx7jf7viqL8+0eQAAAASAAAAATBEAiA/hM+yj5Kdly5s99LbiI13tYMu1BwGiPb+Ird1f+uaXgIgbZl016LI+pMmmTy9kTgm6UlxOTAQBcYAIqqcaKjp6pYAAABmA1NQWAWqqoKa+kB9gzFc3tHUXrFgJZEMAAAAEgAAAAEwRAIgaLKGNpBuKQC226DJOvQcCFk752xni5wlPlIjm4Nj4V4CIEubixbu/eGS9BZsTtPst+wqnr5z9wIy9RWQA62KlF/OAAAAZgNTUEOAaQgKkig0Rgw6CS+ywVECJNwGawAAABIAAAABMEQCIFU6babUscu2xos51GPjjqPhRGsOiKO2tHQbbdRauuqmAiAXLkyFyN7cjIv2ZCiz3l2cVvOf+XI99zlxjAfcCv7gTAAAAGcDU1BDhu2Tm1AOEhwMX0k/OZCE21ltrSAAAAASAAAAATBFAiEAvXAt/CCSHrJuFBQMAC30YFNqj2TqqgHBBB10vjW2zQECIAWCl08eNw8VoqYNTftUnVx7c16q3I642c0td8YXLaPZAAAAaQVTUEFOS0LWYi3s45S1SZn71z0QgSOAb2oYAAAAEgAAAAEwRQIhAL6zsqZVAtFOnCR8As10lNCind7V44naHTV/VZEROVkDAiBPFtHNeVwSET67gAOsWm7haD7R7f5tpNLDFa1HoukGeQAAAGkFU1BBUkNYv331fZ2nETxMy0nYRj1JCMc1ywAAABIAAAABMEUCIQDcMPt6WO74eDq+bhkRz5q3AiXUPs2PlzOQGyFvDw3PsQIgVRsOGNMddYyefq+NIGlA5dFGd/XGIl8BUpE9Rh0dRJYAAABmA1NSSwSIQBw/U1GT+o3wKdn/5hWgbnTmAAAAEgAAAAEwRAIgcS/3wJsF8uzfuO3WeOvWgLcRraQb+Y9w14vooc/VXqACIEu9b0rGW9cQ0kDh5ARXNms8DyPMl4InwNxKDibD7qOHAAAAagZTUEFSVEEkrvO/GkdWFQD5Qw107UCXxH9R8gAAAAQAAAABMEUCIQDT0oAYtsqdMGZ9mDdkXG3fUqHO1hhhMEs0c1Zwjs2FggIgZv+jZYVB3ggzf/tFk0jrDvHO97OzZ7ZCSg9dJv32cBcAAABnBENUS04I/34r48I6s5OLbSdRk9aknM73PgAAABIAAAABMEQCIBW2dUW84Wre6lZ/OH9WHdQX8apMKeWb6nTDpuMflsjpAiBr3BQqY3EnqF0EsPa4agFeVyy2JB45KtdM5ACZFnQz/gAAAGgEU1hEVBKzBvqY9Mu41EV/3/OgoKVvB8zfAAAAEgAAAAEwRQIhAJNtKSH8AL+xkmIrsCVUyZ+U6b3ZVnrGKxYmZ6l2AZBDAiA3WwbZEMuY0zvQI1SGcGQNyU9QCJZkT9JZOutKfDjb+QAAAGgEU1hVVCyCxz1bNKoBWYlGKylIzWFqN2QfAAAAEgAAAAEwRQIhAL48xZ+fOMBzekJROfeHz7xO5v5G8zVoO2M9LTsI2BdfAiB/ClSccl3G01FGTPQM112U2Sokkb20wVxzygUOStp/WwAAAGYDU01TOQE/lhw3jwLCuCpuHTHpgSeG/Z0AAAADAAAAATBEAiBmXbI/IUJtrg3qGhP+OWrVkhiHHwUv/vTAcwIPi6kjmAIgGdHb4NNJxmRKlSpwbK1dure1TCvCAT7s+4eCiQpl09EAAABnBFNQTkTd1GC72feYR+oIaBVj6KlpaGchDAAAABIAAAABMEQCIELeLnD8dnSC2/wRf7VCmnNTcxuTt2B2rVjOXgePhsroAiAsU6TFg8BQftnIhDOqgMhufISDnbiFn9g8MaSwMw/SYAAAAGkFU1BIVFg4M92grraUe5jORU2JNmy6jMVVKAAAABIAAAABMEUCIQCm2kAEuvuT1GHmwt55h5sbG4mrLM8Uc8FpDcx3sVkxvAIgCCi7Yra5hfmSHuCx5a/8ELMAZUiqozqFaQca9LgJh7MAAABoBVNQSUNFH9qylO2lESt9Bm7Y8uTlYtW8xmQAAAASAAAAATBEAiBzUswBjsNS6sx6E9b6QHBPkeKinGnD3wHzi4E0La8pCAIgNFQ9dhxjJZeK0AXAqSvx8g9uBEYQopVXsFrGX/j6KPQAAABmA1NGSbdTQoryboEJfn/Rf0DIiqo+BJAsAAAAEgAAAAEwRAIgVzngx5LFCLIggeR6nn6+aw2LpOF8e0wWEgR870cfsrsCIDvBwMG/cSSzzH9tpDAOLY7LcFNbz9Uvmkli0sIxcExgAAAAaQVTUElDRQMk3RldDNU/nwe+5qSO56ILrXOPAAAACAAAAAEwRQIhAK4uws64l0gVLTCYvPunYnnNAD1EQ5ydrfq95h0HoKhbAiBhC6gaNXpZvb3ONX33A5tKrvUHJTATPRC442OXLkraOwAAAGcDU1BEHeqXmudvJgcYcPgkCI2niXnrkcgAAAASAAAAATBFAiEAt5JqZhjT+21rX3y9JXZtWTdQZ0TPGIZvLYq4s4zMkLcCIBfbsvwBgRjm/xl4qAccSj08xwNksvpjXWlB76jtrcvoAAAAZgNTUEaFCJOJwUvZx3/CuPDD0dwzY78G7wAAABIAAAABMEQCIGhIRc0e/dIJbaGRV9PmDxp4jdXE78kG/WokLoBAcrNoAiBt2KDGwGvAr+7rGMD1VRk5TQCVtfomJX6rJk1xqTH20gAAAGcETlVUU4QpT8lxDhJS1AfT2AqEvDkAG9SoAAAAEgAAAAEwRAIgApmHEiU4P4UML/wwhNPSWplfM7AMs3h5da0hGDmrMjACIERwGzWyDQHFgioy4JeDaunn8lok6ad3b0EDEojMrWAMAAAAZgNTVEIJvKbrqwXuKulFvk7aUTk9lL97mQAAAAQAAAABMEQCIB0a1/nL1KGX1qAsE82Pqd1equH/HakX7584fpAJc5iGAiACl24A6NhET6BaD/E5L9+M1bQ5qm2syG18/2oalW/uvAAAAGcEVVNEU6S9sR3Aor7IjSSjqh5rsXIBES6+AAAABgAAAAEwRAIgY7eGy/cp7iG6cF53RmkKQTMzKvWm9k5tYeCLjy3Zxe4CIEbUY4epwFJX3v6rVgnsuf/HFCGWhg6XPFpeDXOL5KgFAAAAaQVTVEFDUyhnCPBpIlkFGUZzdV8SNZ5q/2/hAAAAEgAAAAEwRQIhAKXMgT6xZencZJ9geJKvCxVw3bBlR2FZmH439rrYEC5CAiAPy8fF9UtE/Yz2hIU0Nc+/IRwxoN/TgmQWMMwu0RdX5QAAAGgFU1RBS0UK4FUJfG0VmHlSHDhPHSEj0fGV5gAAABIAAAABMEQCIBzNbwWM3kYBC3kmowmsQyQfz12DuJP6Oqo0SbR56AzNAiBWyGCtC3lgjf6OG8XKTjAIfMnZ9q+YxTGycSrcEGRWcgAAAGcDU0RUc5aLmlfG5T1BNF/Vem5q4n1s2y8AAAASAAAAATBFAiEAvSkK5DbVwb/wWrdi1IC9bhXFtG9JSCScgLanrBhytSMCIBQykgN51kJuPIyqcMpFth0TBbyXF5CmPNk5scrDgoteAAAAaARQT09Md5t7cTyG4+Z3T1BA2czC1DrTdfgAAAAIAAAAATBFAiEA/Dt0hS2YRVjiaepV93cYDIQoZkZCCyO7d24IYVS7pc4CIEIpfJ9Ejt9Vsj/ZFcAt8e/6Zp9r5WWh1N6cbDMUZYPjAAAAawdzdGtBQVZFTaJ6VFwMW3WKa6EA46BJAB3ocPUAAAASAAAAATBFAiEAwMhLYPNe6E0yJ2KTMV/KGgXvHWk8i4np0HYnOeJdx0ACIGpnsdlRrNaEwXutAvWIzUHhBFzYhxWS/IUalaaZpzOuAAAAaQVzdFhFTQxjyuX8wso93mCjXlA2IiBlHr7IAAAACAAAAAEwRQIhAOxrYdz6F/DXJGLfyj9KD1BIXRUQQT6bPF3YYV9YMOmlAiAzAbFQU784jL8u43Ggc1ElEIDzBeWEovlvQbKhqJfxaQAAAGYDU1RSuuI1gj1yVdnUhjXO1HNSJyRM1YMAAAASAAAAATBEAiBf6QlkBGPJ3QAvExe/gQ5HZ3eDBY7AH/lZQOXcDr2vAgIgZQw5Gx6sLiscMtu4VgsaFKNCML2YGGpWIQkRA+BocnIAAABpBXJFVEgyILyDLKCBuRQz/2wX+FcBtukkhsUAAAASAAAAATBFAiEAs4urU50vIbPUB6f00cNEWvygznl3iHRpevHXtngLbkECIH3gfCBe8vDyvwRPWwWl0ob1dSQ+jnzBvzTwnHuUqYBGAAAAaQVzRVRIMv4uY3ICBW0wAWclR3xdoImrCgQ6AAAAEgAAAAEwRQIhAPO2Gt6X9QFDji3oMiPTSZJVfNNr5JWSo1nLKkcG1KvSAiAwqBkY8ENiMcfAonwKYPc8RiXzkA8c0kJnC9VIqxP55AAAAGgEU1RBUvcKZCvTh/lDgP+5BFHCyB1OuCy8AAAAEgAAAAEwRQIhAPk9v5PS1iKIf2VV1Y/ijsUfJSZV6f+VvVxDMRXk6I6xAiAil6en3+OS9s3r/I4wAcepbAnqzqkoJUba7gagq9ZI9gAAAGgFU1RBUkse3JunKe9vsBfvnGh7GjfUi2oWbAAAABIAAAABMEQCIDFIhu8Sx18UAO2rla+S6xDhPPhp5CtTq4ynS03ZBbKNAiBgLvFiouSCT4vfU6DTGV9BrZBaqtN68IFnFpQB3ftLXgAAAGgEU1RBQ5oAXJqJvXKkvSdyHnoJo8EdKwPEAAAAEgAAAAEwRQIhAP+0cKFgg1nO7DCSOFJgLX2ep5AVbC7G24CmyC9IHYj5AiABrqkOWNc/3aDfPCUCjPJ3j7gm7+qnk/IT9hY1Y8KxEAAAAGcDU1RQ7NVwu/dHYblg+gTMEP4sTob/2jYAAAAIAAAAATBFAiEAhzxL09hIZsz1VY+AhKSKI0t6nstFnodN6U/GfOZGL+cCIEER4dryZD/CUJ2E9jMpI+FHaQIIGtOL+Ayq7UTmpToAAAAAagZTVEFTSUFjdOqRaT8ezLT3cFocutmUwLj4dAAAABIAAAABMEUCIQDfZa/MwhM4Kozgy4kmrpNqnEasQwY4O+HknnsHvDJO0AIgAyGoPbMWV8oNFrtCKyAfgJfaXGkf4m7wIuz7YhdnlrQAAABnBEVVUlPbJfIRqwWxyX1ZVRb0V5RSioB62AAAAAIAAAABMEQCIBtSkvLiyM+HVe7n132QJBq1xu7GpB8UAck4jItscKAwAiBL9g6M3AEF2SRctZOOQEGxu/vxwnwLPEL8b2j9XIygewAAAGYDU1RBp94Icym/zaVjkkf5YUD52r497tEAAAASAAAAATBEAiAvIilY9wMoJfjB1OXVQ5jNbZctjWnVc2d3GVBYoM4iggIgMulHIgqgHUVAXMiAdfdZQlDcU9VqEP3A2rbLe//HQP0AAABnA1NOVHRNcP2+K6TPlRMWJmFKF2PfgFueAAAAEgAAAAEwRQIhAJS8CuTwcFHbMiQVs3vxKNz12xFSeoADkyVB9ncqZ7T6AiB9NYanIrnsMP5YR7jHq0v7d199MgppAI094K8FiAhX4QAAAGYDU0dU0kiw1I5EqvnEmuoDEr5+E6bcFGgAAAABAAAAATBEAiBbArR0WGWkVol8DOgQoTshzo//cv7CuUZK/ygPCRbSdwIgA1996Ft+vAey+oO5kgdS1OzIwo1GnjdIsSN3Xxcy8XkAAABpBXN0RVRIrnq5ZSDeOhjl4RG16qsJUxLX/oQAAAASAAAAATBFAiEAq99gbTyVYX7mWw5SFlrXaPxl+hVamgSVJbzMlx4muN4CIF8iRWQE3elN7jY/lILwQ7Rwdo4SjDiyYu55cM5/6JnfAAAAZgNTVEuuc7ONHJqLJ0En7DAWCkknxNcYJAAAABIAAAABMEQCIGmkzDIVjJaNTGTHNibc3P12uGrO2Tw6RPmtirZrEh4DAiAYERcOFuR8ZmjkPJICefMvB037INKU3fLxiCXrkp9G/AAAAGoGJFNUT1JFLA9B6wegY1usNL19EdDKYFgnlgEAAAAIAAAAATBFAiEA/TsrH0/72QFpDm6E9rdmdsOOqg1ur0MJL0LhEICeMk4CIEhKLIPSf46t8Nbmr4tu1Vd8/SXnBLmc8NW/R4XlT3/KAAAAaQVTVE9SSACcgO/09dj8orlh7mB7ALnGTvnyAAAABAAAAAEwRQIhAKTQXtA2HDlNHjeAxXwiDcToWrqbE2H6fvHJ3doU1S+1AiAH9/qpdP6mxAnLC7uCCPci94axNVlstItyqiwcDnPx8AAAAGYDU1RRXDoihRDSRreKN2XCAiHL8wgrRKQAAAASAAAAATBEAiAYADuY+jyTYJIOG6nN0+LvyxLZ/Rf1Jg3yIiGIohJOGgIgDjOijGn4sDja8bs0HAon0Xi5edUf2PpKZTlXgsVLjJ4AAABoBVNUT1JKtk71HIiJcskIz6z1m0fBr7wKuKwAAAAIAAAAATBEAiAUgAFGfkbV90Er6gKkR+AWCV+bwR1inEhWYaLxx8UJXgIgTVmg5anDIfyFdwxrdn3SKvaRG0zW7Gy9HHrAXBcc1HIAAABpBVNUT1JN0KS4lGy1LwZhJzv7xv0ODHX8ZDMAAAASAAAAATBFAiEAvrUc7WuB3LbyKSM9DNI5dXLWH9RY44WPClU9K6EwQzACIElMjiUroLhEJCuSGsQjt4eKzk3zmBqDCIMWi0VmEBBsAAAAZwRTVE1YvpN1xqQg0u6yWJYu+5VVGltyKAMAAAASAAAAATBEAiB0AWjp3AwzeH224c3RgJIHdxPUDMwo8tLAmW11lHum4AIgbGvKMVZKuhgxZ/GptpZp6Qh+2zXq9zsRkwnmv62trtsAAABmA1NUWABr6kO6o/em92XxTxChobCDNO9FAAAAEgAAAAEwRAIgIrHPRphyNldBw/YVQjb2ObNl9O/Q/HWTr6la6DeOBhYCIHPsCLJDZkxXKsnLHSnp7ldUZvH94cNZspT1+sZMlYmbAAAAZwRTVFBU3n2FFX2XFOrfWVBFzBLKSl8+KtsAAAASAAAAATBEAiA0WK+nmphDE9ZH+fErBMAa2Ap8/69mLx4dgnLt2X7vUgIgHwP2NBQVUexoeusCIUbuPLlLNO64uPlBYbx+wdqN43YAAABnBFNUUkNGSSRzdV6N+WD4A0h39hcy1xjOlgAAAAgAAAABMEQCIHcLfq2x5XKo9S6VuKsNbJEv/v/QHuWQXB961DUaQkSEAiByHuFyRvadErTNMr+oT5DCgKlSYQYFXYM+G1bSAuptZwAAAGcDU1NIbiBQy/s+2KTTm2TMn0fnEaA6WokAAAASAAAAATBFAiEAmaMieUhswqzZjuVM3tHUbdCpRuh1M/ExCf7OVAO64hgCIDFeK6/X2brNTECEnUSbsCjyA1j32gmGDx/5i03SR4bIAAAAZgNTVENimu5V7UlYHDOrJ/lAP3mSoon/1QAAABIAAAABMEQCIH+lrchY+oZcPZsgohcVeg8ObnMSaX3eQc8xDtxG27fMAiBmx4K1qMP4PU1l0Ge7/fuFACMKq009SA02+mHse7xDaQAAAGkGU1RST05HmQ80GUaj/bUHrn5S0XhRuHFoAXwAAAASAAAAATBEAiAbAgZLMfcYrzhrxrsteeIVYX0FY9xWVwHvXaVZ4qxXRwIgS1Cs6Vv/HDZrNKLk3DYblF1Y9el/jO+twtbAgwr3m3QAAABnA1NUQxW1Q+mGuMNAdN/JkBE22TVaU35+AAAAEgAAAAEwRQIhAI+qtvea+w38aw0OZx884AoSjiW/Kq5fSldceOsW0Ci+AiBoEXbZmP0EZUoGDigTL6R1XqHpef9p3rBzv3SZjdTphAAAAGYDU1RVA3GoLkqdCkMS8+4qycaVhRKJE3IAAAASAAAAATBEAiAYzHc5bQooMo2DT0HQ+3oBulSiEwHnfOEnUo9SMM9+GQIgUMkK8Y0hx0Kka8/unRKvYDs1L6R4ju+AHm71ht7xKYsAAABmA1NVQhJIDiTrW+wanUNpyraoDK08Cjd6AAAAAgAAAAEwRAIgGgrxmPINSRXSihfX9rwIcxhLTory7azW5oQjyYj3uvcCIFYAoejmBzjnh/H9bs3JXIhW+23zUJXp70+AwTK+Y8XKAAAAZgNTVUKNdZWfHmHsJXGqcnmCNxAfCE3mOgAAABIAAAABMEQCIDb+WBhyP2v4dZ5qreNtv1ShnbzJo129RwDDwoOJ9/+2AiBXP7I+gVnU1FYuKNYt4qDTyPikrAQeG+2wZvgv8TudPAAAAGcDU1hMIi7+g9jMSOQiQZ1lz4LUEKJ2SZsAAAAEAAAAATBFAiEA1E2pFdGc+gHgJ8lfVXrskXT/disRSnyalbefqGJLrHUCIFnX6bodMuG7DZYCPx5UNBluonVRU5ykveIFSGTDR/tTAAAAZgNTR1LLWgW+8yV2E+mEwX288DmVK22IPwAAAAgAAAABMEQCICPqN3xkz+3nmPj1xxMR6Rt+Ut16co9J6hDnpRnQk25FAiAyEqNE4LPrZvVgMOqytUeIUy4SnkkgJNpq+DS0HYYR4QAAAGgEU1VLVQdj/czxrlQaWWGBXAhyqMW8beTXAAAAEgAAAAEwRQIhANeXNLQuV6K2JjUupR7pCdDy+OW71+iyoB9JxDAeqmaBAiA4zDsfj2PxdO2twd8e1j0LsHrs4Wu5cF1vYztX1K1TrwAAAGcEU1VOQ2sNe4NXu4Ud6fGVMZnDnHvEZ1eWAAAAEgAAAAEwRAIgN4vU6XWSqPi6NufHn4XTXZef+1N6tdCdouTyyJCyfVwCIG6wii+ZFGYH/INAxRdM7nGYnrOS7giI+t0yHq3un+hIAAAAZgNTTVTHYcjcBa5SqKeFZl5SjduwDAmK0QAAABIAAAABMEQCIGHEktZMKmBSyYbq/qQXf6caG4ggIXgygozUe2EpZ5T7AiBnpKZSLgqF1DXf6LmCE49BGtkrNZhzfg83whklQ/5tugAAAGcDU0tFE9t0s89RL2XEuRaDlAtPOVXgUIUAAAAIAAAAATBFAiEAhHWkYgLhiG7s9sFbp4zD07DXDc5zWyHbVA8KqPa8Gh0CIGPSlkeFSRuObooFAiotN4o2sO9x01quoUBlzKNFGHmfAAAAawhTVVBFUkJJRAVj3OYT1VmkeHf/0Vk1SfudNRDWAAAAEgAAAAEwRAIgVzLSCAwVNPsna+34DPo+YYuWWEDcrSxvEEUcBcKT0YQCIFrKjAnlV4u6mC6TQP76QAUtl8USLjYbsnRRC5WfC9RdAAAAaAVTVVBFUuU+xyfb3rni1UVsO+QM/wMatApVAAAAEgAAAAEwRAIgHKSkazdFeltGRXEahZsS+dJJB6QQn91++8Nf6l7Riv8CIEiazFyLDxCfCt3k+hzWjfu4uv+oEH3Fx1wSr/vxGaaaAAAAZwNTVVLhIMHsv9/qfwqPDuMAY0kejCb+3wAAAAgAAAABMEUCIQCknIHbsx+lA/peVAQmxdC8HpAfhVFv+mN7Rd2wXy1o7AIgWC40YiBsmGeSlcENlamzyEW+w+4V7myOvNl+9czUtiAAAABoBVNVU0hJazWVBod43VkuOaEi9PWlzwnJD+IAAAASAAAAATBEAiBNUNBBpN/o9VCaGi1bGVa1+PFE5JJzEcx3iE/wUoPlmQIgIRoOjXX+Ow2IAIM+wd1YG/1bSLwWOmLkxA0BmjkMLwQAAABpBnhTVVNISYeYJJwuYHRG77etSeyJ3Rhl/0JyAAAAEgAAAAEwRAIgWTMnCuZtPBdgaqDLJL+eDwqnhqdyzAC0uyeK1jZ/s5UCIAtC74CVYrkxC5zQEFvCrqbpmEp8V6D8B96ya89TelRjAAAAaAVTdXRlcqos565kBmF14LkEl859nBkMMV20AAAAEgAAAAEwRAIgH04cCaqJ/k3lMd2A8Ie4Ag5Do1TK4qxm2tRaTFiR9DYCIA266FSF21p3oRDcJEj5ioS2JK9qJmL8YaMegm7OsISXAAAAaQVTV0FHR6GaQPvXN1Qx+rATpLCPAIcbmieRAAAABAAAAAEwRQIhAPhlJJZNI4ZQC9bh69wCUqdosuDgGOfcfrZZESeXV9nTAiBa3tc2eRsP+Br2Ym9cotGnT8BrE9f7yqS/kEm/yGCcLQAAAGYDU1dNNQX0lMPw/tC1lOAfpB3TlnZFyjkAAAASAAAAATBEAiBO7iDPCUKjJSxO/abg/7VbB1snqP7r5kk7+wC8yM2K6QIgSESxs8W/Uev4n4kTk6o9WZXL0mXEL6QcSWt9/L7hqWUAAABnA1NXVLnn+FaOCNVln10pxJlxc9hM3yYHAAAAEgAAAAEwRQIhAMuE6rysPjyF6a7HcQ2IfIDmrUt5oeDYPPmHaJTHZhxRAiBzaQ7SXLVPzG2qHVitq8U/1usxw14qHSrLfNqqBIFFawAAAGcDU1dNnohhNBjPA9ylTWos9q2TSnjHoXoAAAASAAAAATBFAiEA2W7UxiQF1zqetIjLA8PPVMfgFvonPU2kKRq+aFrPIowCIACVeQNjLjYnoTv3gWlu1KakAFpHfvYFOaWLiDLpnZ8AAAAAZwRTV1JWuLqg5Ch4kKX3mGOrYrfxdc7L1DMAAAASAAAAATBEAiAwBKKVq8CewDabFLfrX0YUqJ3a6QscSNnWRKQXmD2CxQIgZ7kjsa7c0KHVXXxKYexJrIjuFMC/5BpnVyITHZnksgkAAABoBVNXRlRDC7IX5A+KXLea3wThqrYOWr0N/B4AAAAIAAAAATBEAiBDQ7BzgZO2e+Dun+6MAEWwwKWgKl3F0XM1uiOvIzCm/wIgQxP6O3zk8Np/mo+mnShooyIxvMw9I5WFlLoil5eSF28AAABnA1NYUIzpE305MmrQzWSR+1zAy6DgibapAAAAEgAAAAEwRQIhAIq/MAWoqMY3j8tSB4ai8VEaGeuEs3VDq8fO8vN4pmB7AiAEhXrLBfJ/ECAh28IPCt1oG7jm6Xai0wD3aPJ+1LSRDwAAAGcEU1lMT/KT0jvyzcBUEcoO3dWI6xl36NzUAAAAEgAAAAEwRAIgH+frxZIdjcwbqdRzRde77nHYnU/Nabr+Q4vwl6pxvEcCICsAmxgNGH1yksdIzg+Jsc/XgUh2RuB/2G2lAhFvfeqNAAAAZgNTWU4QsSP93eADJDGZqtA1IgZdwFgnoAAAABIAAAABMEQCIFxAxAUKUX/nMHIVPrge92EptcYt8S66o866alsYX8WFAiBHiR8VEhPEG/2I19rYCKJ0+PLIst91aGFNC/0cefgsbQAAAGYDTUZHZxDGNDKi3gKVT8D4UdsHFGpsAxIAAAASAAAAATBEAiBXB7QKMlZdTqDCfi9aqjtqoUkxzVSAVCd6UYwCTwtVmAIgN2XMO3FQjiPCh6YD9NAUGsrl1wQyi3eSZViZlgwaksoAAABnA1NZThaVk21qlT32mcOMohwhQNSXwIvZAAAAEgAAAAEwRQIhANcww3cz6JeOqmkw3lRy8mAnaqK1NkbmtBkTqP8nBPfAAiBICxInbTjWS31LixFTp9jVg+0bb/v37UMVAXs90Yw9wwAAAGkFaUFBVkUXbGdO5TPGE5sNyLRY1yqT3LPnBQAAABIAAAABMEUCIQChIdxuow/5wHfb9gcCJwsdgfV/SH40n3HY08YdD4OfowIgLClDQ7nMlO6zwaYklFUO8g5Ga5IcVZtYrccpq53NFd8AAABoBWlDT01QY0VyixzOFub4xQmVC1yE//iFMNkAAAASAAAAATBEAiBaBX7Ev71i8e8kl0veTLQp0O83a1wKb/EpoHG2KcXIvAIgYwPaA+zXtSdOhduTV3H8pKHfACgium2CXxkQ1amYOTcAAABoBGlET1RGqXYpycH1jebsGMf1Nufm1qbs3gAAABIAAAABMEUCIQDl4Q8Z0tJ6bXDHwTUEGuA8MABH32uJbsCreJZGwLoJngIgXuiFOwlG9B886VDTwfc2AAgY9/pCzbQTWuUPAP/Vx4YAAABoBGlVTkk2oA/5ByVw70uSkhF4ULj+CNlszgAAABIAAAABMEUCIQClROFZXBa0KfEdswVxE1YJUvrxGGznlH/DkA0w6OWXJwIgL7XFZ/xRioYEsSp0Ub8LO7yGslxtHk2UjwMbDVoxn60AAABoBGlZRklZIkQwHOqVLW2rL9wf5r2eU5FzBgAAABIAAAABMEUCIQCr4QzXzEC/K8LUejD4NSJyA8MBLSQhjBvlcGVI66r5PwIgBlsy2JTXaX4sABAhYvatABDn5Vyq7s9K/gtCXVvum1oAAABpBXNBQVZF0t81XBlHHIvX2KOqJ/9OJqIbQHYAAAASAAAAATBFAiEA1EXPUEtlvr0hLD8CVjQ5UTyTnaGXe9rilAhx1yHJZQkCIC/GfE5zVJ5zV94lmqC6hxjt100MiutYLMQl91GOHimmAAAAaARzQlRD/hi+azvYii0qf5KNACkuepljz8YAAAASAAAAATBFAiEApWTjP2ee8V5DrFDuNIv+VX0GtljtQ3OZ1vCKsqiBIh8CIBi4ZMn2xE5XS2OYdfhPsKKYEQTvghk2Azxrsa1CD5MCAAAAaQVzQ09NUOsClQfT4EPdbIfykXxOgrkCw1YYAAAAEgAAAAEwRQIhAPMFf8CXb/VaBcKwEn7crJOx5nUJslN6B+pj25wUk8PdAiAQq++3sR6Gr3UCoUTEIMy7Z19GEslwSsJUo+sseQGYbQAAAGkFc0RFRknhr+H9dv2I94y/WZ6hhGIxuLo7awAAABIAAAABMEUCIQDI7RQ2WD8QIQibI2hWF94ZDdKdHWWexttoh1SF1+ET/AIgQlb3fkFQ/N4lPQA2ij0rY17msXSTCWY8z+kCaNUZjTAAAABoBHNET1QXFawHQxAr9c1Y77ts8twmhdlntgAAABIAAAABMEUCIQCdebZ6E7YlBdnE+UBVYzCNHZp+oIOrbrhBXpMdB860PQIgJEuJ5oUkC1HYYwrTGd9IL3k48Pk1s1rh64zAgaTw8XEAAABoBHNFVEhedMkDb7hr1+zcsISgZz78MuoxywAAABIAAAABMEUCIQCktBEB9FIy5PHaIJCuzFf7Zv488rTMzTY/xQcqmQV0tQIgb960FimClracXEgaL0+6i3XM7HnGqe6FYFU2VV746AwAAABoBHNFVVLXHs/5NCpc7WIASeYWxQNfHbmGIAAAABIAAAABMEUCIQDfsLHio/8GlG4oC9ckKZSTXa7LHuEBY+4RPv5+1B11tAIgVmgLGI7e4cz2GBAuHN7bhg9sCYbbEASbC4iK9Fvifz4AAABoBXNMSU5Lu8RVy08bnkv8S3OXDTYMjwMu/uYAAAASAAAAATBEAiBk+NhpOduIuC95PKq3KPSi1n+qc8khFHzuyLNp8D9l+QIgEW9T6VrGcq0TrcF8IgiNKKUVaCA+hrpp3JZOjNESSWQAAABoBHNSRU7TFTPo0PPfYgYOlLPxMYE3u241JQAAABIAAAABMEUCIQDRRKAzqkbMW02COgUCalkNcsv8/CQaeMyy39BB/quWHgIgIKOm/6bG5ts9DRRaJOhzS5RJuja5iJvt3CxbKjh3cFgAAABnBHNVTkkwY1KX5FC5MPhpMpfroWDZ5sjrzwAAABIAAAABMEQCIHLm1VpZZHhVFOg1I39vbWq89ag0+KZc4HDIPAWqw7J2AiBpBjXJQn20qbnb7cmywU2m9b4vAfQCrvHY8Q1w+CGADwAAAGgEc1VTRFerHsKNEpcHBS3030GNWKLUbV9RAAAAEgAAAAEwRQIhAKKNt8BIIPWUbbZPa7oarDfDydW0L63q7E4UZ4ATSh5BAiBMMU1TEwlUjUjNkwIrQgIYuPts3GkT7WK4yzgKM6ElcQAAAGgEc1lGSZkgWLfbCPlzTYRIW/vCQ8TuaVSnAAAAEgAAAAEwRQIhAIMgB5RAQmwCdjDrjsJO2c6Em7n0V55ygltyNtU8wADHAiBsp3CLQwXXihiW24nzggIrcgQviNUxvtaeuDhIjycb5AAAAGcDU05YwBGnPuhXb7RvXhxXUco7n+CvKm8AAAASAAAAATBFAiEAvZ5ROaoXS0hUn4jy3nvvpXw8y7ag3cY2DgkCOER2q4ICICI8FoRuDaPwN5GEZtJxQvTl60PEQeoxZ5dDAeSIHDYDAAAAZwRUS0xOBnXaqUclpSiwWjqIY1wD6pZL+n4AAAASAAAAATBEAiArQ14ISp0v9wO5Co7MWcy3TQxx5PXInqee53wL5UzwmgIgH2YZI4ZtpJTucRtfS8eJYj0wVx41tM69XFKCoGidFn8AAABnA1RBTiw2IEoHEqKlDlSmL3xPAYZ+eMtTAAAAEgAAAAEwRQIhALkAoe6+NqPmm+OM3DxlluUN/zxQwH17O+pWN+pItq+sAiB2m8r++rXaO1ShHmrfxQZi9QUnQLhKW+eStGLZ9YI+CwAAAGkFVEFMQU8dTMwx2rbqIPRh0ymgViwcWEElFQAAABIAAAABMEUCIQCd6ikFuTFn/3bO0eHOpcCG6ZmKCuwCK1Wsk2xfqYYe0wIgIY3XhwvPTw/FQoT9akoynPgzJpnftktSt3AxIJf/rMgAAABmA1RDQfoO9eA0yuGudS1ZvbitzeN+16uXAAAAEgAAAAEwRAIgQefC1PiMec2WceC6yXIWVPhvMSVpYYS0CGxmOX/FysICIEa9Kg6zkiT5h5kU0dIVK7oeQJ+0pPls2Qar5GC6AQPWAAAAZgNUQVB/Hy09+plnhnXs4cJD0/e8N0bbXQAAABIAAAABMEQCIDjfk393lAB6aQetravM/7dE0iDAEHYRNKnrjr0Wp54PAiAA/0Bncl66rjtmt0fNJDQHi9PKW1L8OD4B4fYS/4yZSwAAAGYDVEdUrD2lh+rCKcmJbZGavCNcpP1/csEAAAABAAAAATBEAiAYRaRjc+7Hysgg8f/oIqO93QSO7kumy2FALYNnoGmwNQIgJI0iB8dehmt7Gr073TWFoFGSr/mdbz368/je0LHC23oAAABnA1RUVZzaimDdWvoVbJW9l0Qo2RoIEuBUAAAAEgAAAAEwRQIhALR6VS9wm/eTI7xVn9PaJckaRxGQ5dcjLKyxlI3fa8YMAiAdRvUcXn2+EHu+mrI0+7YxtgUetUHv6d+IcwSrxNup1gAAAGcEVEJDMvrM1fyDw+TDwawe810VrfBrzyCcAAAACAAAAAEwRAIgePvlGcu4Vzlzcr3PpafHgRKqR6DlpgglHDLz4MA8CVYCICh3bVmqvSnje6q91coMhHGIFr3R6CFOUm/f/jb7GkyRAAAAZgNUQlSv5gURNBo3SI3iW+81GVJWLjH8wQAAAAgAAAABMEQCIHR/zwiPIi/ehvvwS1mVXL+htbgNp7Ywj9vYTdwpNA+/AiAuqchhW1AuvY0MVh/T8ajiPppYYDCo1mrBc9ynGPdNTAAAAGcEVEJUQ42uut6SLfc1w4yAx+vXCK9QgV+qAAAAEgAAAAEwRAIgetbGp8MPA2mmfyqMNIBBV/OhUzsEx4cneYOQCcJbuusCIDQC0XxXpzdyCs7/t2DzlHNxohcfNO/WAQ4QEg3EsMWWAAAAaQVUQ0FTSHBRYg0RBCxDNQaaqk8QzTtCkMaBAAAACAAAAAEwRQIhAIvXUUjQaHs/sgVSPe99o3gWe+tZdtca5B/iwDqkZMuTAiAd+LJACZS3S/3SzTUPGTPDkw5gwRpqcUWOiTR57UfChgAAAGcEVE9ORSq2u4QIyjGZuPpsktW0VfggrwPEAAAAEgAAAAEwRAIgOR//iPqMNTkf7qW1PiGMcrF6v6ZchMZAUiZi8/MB8aMCIGAcI0QrjtQD8MMCScAtcNuszOkMrtnsq1xlY9x68KT6AAAAZgNURkTl8WbA2IcraHkAYTF7tsygRYLJEgAAABIAAAABMEQCIF8LIT6W9L5UL90pEYDOtJkkAP0MZTD2zboXncmV1gYRAiBaq1Zsdpnjpprx5JTWSB5ruP5p0ImwWE/pXWiNrRPnWgAAAGgEVEVBS33X9W1pfMDytSvVXAV/N48f5qtLAAAAEgAAAAEwRQIhANClPBg3Z4pu749r2hZ/+VuuLFyK4W/8OrKGt43i/MSVAiBvOnlnly9raVy50butNGUbt6z3NuXMepK4H12Jk8vPyAAAAGcEVEVBTRx5qzLGasqh6egZUriqpYG0PlTnAAAABAAAAAEwRAIgBksT4osWMvesXC0vTH6LTZeauCBAmB5KmIovw1VvgqYCICbnQ+wPnvE8qQ1I97dihAB1iLm+XDF9+4u3yS83+VtfAAAAZwNURUxGe8zZ0p8iO86AQ7hOjIsoKCd5DwAAAAIAAAABMEUCIQDr5mZ+4NcG0f3oqB6aDi4uozToy1+/19EzKtdGvPDb1QIgaoCUYjQUB3KDuJSYtGdIjKQG8sGEhsUPCTO/EUAcmpMAAABnA1RFTIXgdjYcyBOpCP9nL5utFUFHRAKyAAAAAgAAAAEwRQIhAN2AkOs39DI4Ery0V0/r7UuSpInP37L1Uic9ko8bpYQmAiBjN8Oxdtl46ykf3JzNUo6QEYLNnbUPy52liMhSv8lUYwAAAGcDVExYs2FlUKvIr3nHpZAt7576O8mpUgAAAAAIAAAAATBFAiEAsPpnTYsZS24pHv3VV1gv+XySjNm+2vy9FXgKa09K4VUCIBzlYq/1w81m/d2CG4Ph/O/8rC0Db5sLFKsmkteU0Y4GAAAAZgNUUkKI31kvjrXXvTi/733rD7wCzzd4oAAAABIAAAABMEQCICRWLm209CyuWHD7vIJCbw6XYavw9SBM9iAt0QdgT4QIAiBWBGybdSFboEG7c8mAMzVkI24eg8l+fW3g6V2WV6SutwAAAGcDVFJCC6Rai11VdZNbgViojGMen5yVouUAAAASAAAAATBFAiEAr6I9S0yUf9h3HQHcXcXFa2bQ4Sw0Un9SQNjNrRQjjOACIGQ8+QnDJ2GfW+QCblQL0jjfoggj/Py4qjdcIZNNCrn6AAAAaAVURU1DTy/CRqpm8NpbsTaPaIVI7Lvpve5dAAAAEgAAAAEwRAIgSSAOhPFdT1vgTTB81XiGGO9awIr8YPZfjzXUBe0BEn0CIDNEyd3U0SZbO67q32UJInVoViL+EXixOnvmHBUz+7+SAAAAZgNUVEGqtgaBeAmEHosRaL6Hee6vZ0TvZAAAABIAAAABMEQCIHysIocT2Pmi7ONtiIamRp6BG7d2aV4zhdY0NouqA6keAiA1VWl+5GUym7A44Yl1awdSsDZAErhloVg2KSSHn0UULgAAAGcEVEVORBRT27iilVGt4R2JglyoEuBTF+rrAAAAEgAAAAEwRAIgfl5wgFGtuTp+l9QEYY38Zi5gc3MHsJ/gw7rNJ0wL0HACIEOJ0wcmyODrEIt4y60/F4SAEETRzDRYSbPv2jwYKqMRAAAAZgNQQVm5cEhijba2YdTCqoM+ldvhqQWygAAAABIAAAABMEQCIGCxx2Rjxc/vKS0PLwf1T4mbxE0IEZU7dvhMqF4OtoPcAiAdyRVIG0cZz4mdqafzqBiJlFT23mF5WDxhUnhx201LawAAAGcEVEVOWFFboKLihq8QEVKE8VHPOYaIppFwAAAAEgAAAAEwRAIgQhYLILFjcuiSojJZkjR3oaEAZM7ymdtStut0kzESg6ECIFqsjc76i8QK+T0rga7uP3iUqeDLDzSrx8XMv83qeQ8aAAAAZwRUQ05YKNf0MtJLpgINHL1PKL7cWoLyQyAAAAASAAAAATBEAiAW65IgLJst7CYcYS5UTsIQNvQbu1fJ18CjliHp7O3K0AIgMzrV7h+F+pbhJj5f5o0wVaj1dg+jJX1J7aQXCuunxa4AAABnA1RSQUTSrGXBORaLAvGyeBtgYSXKOeruAAAAAAAAAAEwRQIhALDXKYgq1yUuHAuKC1810+rbNuOJFeT9NWEfGXXuYo6LAiB9jRTk1BgKLfcaRDP6UY3ceDe/WYJnlO483YdJXPzyVwAAAGcDVFZL0IS4PDBdr9dq4+G04fH+LszLOYgAAAASAAAAATBFAiEA/38Z/nekTzzsV5tpuZi40bKIcf66Gp990f8E2gx+udACIAqoVwOTLz6WQmvoFDq4l7io3wkjH97aZvFZM01NrMf7AAAAZwNUU1drh5mb6HNYBlu95B6KD+C3sc0lFAAAABIAAAABMEUCIQC6uVsFJrylH3CHR+Q9lezC7jSdFkgpyHKX/HjaVPzIuQIgUlEt0RhvJbnXfLl0CMOCiPX9JuESPP2PnuHk7vwqfgIAAABpBVRHQU1F+OBuTkqAKH/cpbAtzOyqnQlUhA8AAAASAAAAATBFAiEA5+u7U2o0wS+B344h2YhlK+LpWIKM7dcBRANrzBs7PS0CICiniDBzw6LdJH9kr9t5f4eNlq0c0Vy4GntWHDcHAS+XAAAAZwRUaGFylsMNVJnvbqlqnCIbwYvDnSnJfycAAAASAAAAATBEAiAmtwGmBkWVMkmw2kGjbUXdKwstxOmlUa0+eL4kq/dCzwIgX4y9NQER6S8Ng2yhs/rEjoseMP2Ji9qYX9LDjguU1SEAAABpBkZBTUlMWYM+TALEe3449bmoCybrB9I9GWH0AAAABAAAAAEwRAIgcJuv5jNTtMsK4ue3U4o23VMFCj0mBbFArrwo4M6wFmsCIFZcpEn65bhj8Cl/w3VXy/2lgRcRDrCs+Y5htWQCFcDHAAAAZwNURlSu9PAuMc2/AH+NmNpK42UYig6ezAAAAAgAAAABMEUCIQCeN4ResGwndtByRY/hwKW7LH4OyvMDPsXhI39WMAkXoQIgfJZpU06TkgM7k/9orN+S4+69qiDYXwrvgeclIunzo74AAABmA0ZPUh/NzliVn1NmIddvW3/7lVuqWmcvAAAAEgAAAAEwRAIgXUCKO0m5AXOgXtbMO+6zoDPqNm2aSvm/neXdEDzgCugCIF5Bk3zWk8/Mch67vN83QjfxEZKHdXrLG3WwRMsSeSW+AAAAZwRUTVRHEAhjmd2MHj3nNnJK9SWHogRMn6IAAAASAAAAATBEAiBRSid6FdDCdLqmxKeF/v9pbmY2pgQ4eCwoSEpEk+xLIAIgUbNe42OQyJu7G4P9XVju63SM9Kvqv6gvqfXx36Eb6a0AAABoBFRSQ05Wb9eZmx/DmIAivThQekjwvPIsdwAAABIAAAABMEUCIQCrNUjh1BwbC9jKkfteQcA3dxjOP7okaV1A6o6cSOyllAIgFTp0n0Vo/Sv3u3idTbnnv/0q7Htne7Ia1gm/iUdH+3EAAABmA1RSQ8s/kCv5diY5G/i6hyZLvD3BNGm+AAAAEgAAAAEwRAIgM0mFYiN5soZ/QL8rj14oPSj/gMl4yYYX2lq5zpTqvlUCIGMz7z0D0+1AkOyFDL4Qy0lxVvrNpthKj3E790v1DhnmAAAAaQVpbUJUQzISsp4zWHoA+xyDNG9dv6aaRYkjAAAACAAAAAEwRQIhAPMh8AA0S7pl4hU52Bk2Na2v79ybdMBfpCiBfg0c006mAiAanyMST3CA6YYFQ/3jGrsHRSssF0phYsJHuOMDK1argAAAAGYDVFRUJJSmjBSEN2/viAtMJNkfBJ0psCoAAAASAAAAATBEAiBWxHYPDZIkA4oqWK/KuVJz5yyHGLspVfkHCj/CUGdW5QIgcfq2oBbnbWkIVBClOaEgiT00irfSlGaYQUm6dkiAgDAAAABnA1RXTi7xq4omGHxYu4qusRsvxtJcXAcWAAAAEgAAAAEwRQIhAMRac57tRvCkLDJruhrWnF0/fgDZSH94uz/+KdnIE6jJAiAI2w/i8LCaC39krKsiEKMAI/vr6rrMAgNAG89uWnNf1AAAAGkFVEhFVEE4g/XhgfzK+EEPph4StZutlj+2RQAAABIAAAABMEUCIQC/oInuf3K7gB6TBVT68KVdOOGMfspyuNj2j9ntpXjRHAIgK4ti5CRrGieIWkrEA8Z6WYzhFO4ZI52AeERjfQR7AJ8AAABnA1RJQ3JDCmEq3AB8UOO2lG27G7D9MQHRAAAACAAAAAEwRQIhAI9luvudET9dRl4hLa48uvmHjJpCduLZScyPH5bX04WvAiANT+gPbdquk62FORmP3e6AAs0Y/Ye7iHJnqGxR13NlzwAAAGcEUlVORTFVuoXV+WstAwpJZq8gYjDkaEnLAAAAEgAAAAEwRAIgKJ5LDlyvOxbPlma9Nlefv8B6KczUVOiTQnTVDeCgSoECIEoOGQYpqg5sKTgPzTZF0yev/leJA6NRBWBNJ5yZMasuAAAAZwNUQ0jUVg8wv4+x8yVG5TYlbjeNe3WZeQAAAAAAAAABMEUCIQCDsyBizOqnYQR+FhGEO01v1OePYBa3sh4g0Ij0tDKRMAIgVkJcR7zqfJJFag4AckG85C1jMj7RVyWTP5aeTdTZViEAAABmA1RDSJlyoPJBlER+c6fots0mpS4C3frVAAAAAAAAAAEwRAIgKZzqRx0bXyXNRGXaTqDPnXbNH5EH8mict4KwkC3ZzKICIBYxmfXME9uEu/EPnM4cXd5btM1wcdvUIJFHNTP+DdFiAAAAZgNUSFIcsyCdRbKmC3+8oczb+H9nQjekqgAAAAQAAAABMEQCIH393bk9JbzK0vLKy9NI/d6UG0DtqUAhiRJdn5UMlUrhAiBjiMEvkvH/5edzm/obsrz4z89v8GkeLU6iElmfvlj7ygAAAGgEVEhSVE8nBT8y7aivhJVkN7wA5f+nADKHAAAAEgAAAAEwRQIhAKNZOXsiKnw8z/igG65X0Va/P71G+/v2KyqRUzTvVWnGAiAEDzZH1/sCIU7Apy46G4OP0U56I1UEOjj8nlkqNO5pugAAAGgEVEhVR/57kVoLqg55+FxVUyZlE/fBwD7QAAAAEgAAAAEwRQIhANdHEJWTlf02HsNUujqy9UALypFPTc+fH9gHL87XJhotAiAHAlFt1tKnUI5WuhtkMOpRTcRvZWFqA2p7tOO9rZZ61wAAAGYDVE5UCPWpI1sIFzt1afg2RdLH+1XozNgAAAAIAAAAATBEAiAWZGP88wO7HNBHFJfCaLh/UYZ8/LKYkdf/QZekeWc5ZgIgZAXgNgblxgChlm66PRHZOoF9GP2qan8s7bpowuxUwLgAAABnA1RJRZmZZ+LsinS3yOnbGeA52SCzHTnQAAAAEgAAAAEwRQIhANTsF7i8C7eg3vtF/u0fUGtzTfiA6igpdqt+mZfcRv8jAiB3nHtJO1s5UL2IDAQyggLopDZMn91/Ed6g0xAndCk2rAAAAGYDVElH7uLQDrfeuN1pJBh/WqNJa30G5ioAAAASAAAAATBEAiAphmdh0SaklXwiL7KxsU8ystJZ1jNByQixQWkSjAKxjwIga37LGK5wwLbSKj6JO+KclkZXrviLC1Lrf8aqn/IaNG8AAABnA1FUUSw8HwUYfbp6Xy3UfcpXKBxNTxg/AAAAEgAAAAEwRQIhAPAXafkn69SMKgPFKF5JHVv8uH6FIAw17p7vveYGC9PXAiAGpUFmEX+4tNqUxsDoFRGY4N5n6UofR8l7cvEB8CvC+wAAAGoGVElLVE9L9O2nfwtFWhLz60T4ZTg183fja3YAAAAAAAAAATBFAiEA3LaUGMPYfPWwNbF1kIDJ3ViqQdwacb+/gweRznVbQPwCIGVapk6/xLSC/dknTPdTR1+9oO9YP8nYYrU4nznZBQ8fAAAAaARUSU5H0bGD9CX35qDIOrHNhM/eLYS6BJ0AAAAEAAAAATBFAiEAjMTonZR6426KJ4AQKcG45gF0twp+9RoYewAEs/SDjiMCIBKOBDv9+3mjCCJB37P26hjsXKglzOxLaJDFIzo0KbZoAAAAZwNUSU+AvFUSVhx/haOpUIx995AbNw+h3wAAABIAAAABMEUCIQDR5dSj+pGkWje4E7VjHeC4gNht8yboYOWhhWg4bQMlbwIgPlDMrmnHXmodnTz5TxL/eIk9HuzFoeG6rvFAKWfD87IAAABnBFRJT3jZR7DOqyqIhYZrmgSgaumd6FKj1AAAABIAAAABMEQCICrQr4Kdox403GtdlE0oGZjVTYfkaWGbO+WLWDCvMgdmAiBzoptXmJhhFwnZOQue918UHCI7SFP/ltHB2DK1HG/s0wAAAGYDVFhMju9aguaqIipg8AmsGMJO4S2/S0EAAAASAAAAATBEAiBR/nmhNDgHinaN2yy5WL2B2vDfQdp3CxGI86r5Q0J3LwIgTuB/875oU0DntUa96QA/POFPhzk0ic5sBDCY/LMHP6gAAABmA1RLUrRaUFRb7qtz848x5Zc3aMQhgF5eAAAAEgAAAAEwRAIgYTIyBsruLLu46JYp3gDP6qYIJjsx81bqVVsnZ+JOiCECIAESc/wwS4mOly0qmrrpPECVZf9DhgySXIhs9muUsNncAAAAZwRUT0tBTKgZ1wbuUVyBsRZRvxqQI0QiPQQAAAASAAAAATBEAiApESP2I5/EC9mOT5MgidMZ63eJDJDbSqIJLi03FU8hTgIgIwAjD+AO2CbbOYsoK1saoanYuw4cqS0/BjYLyTudXccAAABsCVRva2VuMTMzNzWHL+pqSEP6y8286Z47aVlqNoC4AAAABAAAAAEwRAIgWwuIj2Rf/er79SCvRph5FgVbTIOoUfxD3IOKyH0bLPQCIH/8SmJXaD+t/EXMaSzUkO3Qz4uAMHzdXAGPjYcxDs3/AAAAaARUYWFT53dabpvPkE6znaK2jF77T5Ng4IwAAAAGAAAAATBFAiEAje5d42k5gmJG0/a2NVWNVfYgtDIzeEbeavRaBAMCl7cCIFGMXL9RpbLyVJfhjDUkbkLUxM1Ho6XaZTVwY9KZcTWJAAAAZwRDQVJFvxjyRrkwHyMelWGzWjh5dpu0Y3UAAAASAAAAATBEAiAa7lSu3O1eFjpPUeXzcJNnW+lJg6duU9BOxV0Fy491mwIgCcfUiKgSvLgd41wlJmiKRkciJIoOBxU/RD4wBRjLZNUAAABnA1RCWDqSvTlq74KvmOvAqpAw0lojsRxrAAAAEgAAAAEwRQIhAPlti4JcRGRTzLAVmAYk8YxUeEDo4WDoOTvpoJxz7Q2pAiAEp8R+nn9jQZkTPjVky1QwtPwhgN8qVjPlx5ECEOqLfgAAAGYDVEtOqq+R2bkN+ADfT1XCBf1picl35zoAAAAIAAAAATBEAiAPI2chbO6a6m0yq4q5VV6W543ahGNosVpPtbNufXaEjgIgHHDS3iCH5YFVdYIxUCj5EHbzjoexIqshhLQ00+dBykIAAABnA1RDVEgkp7ZOOWawEz9PT/sbnWvrdf/3AAAAEgAAAAEwRQIhAKrqXGpRQLnQB8RLILUYrPAE692rFMlKs9l0ZVWMTSdKAiBUbGuFRX/r+dPwPzYQ3Uqcs/oI3tMdYzpjfPoAX+iGcAAAAGcDVEtYZnECvTQTv+qj3/tI+oKIgZ5ICogAAAAIAAAAATBFAiEAmE63wZwlSO+HKegOYgFe0JBxviLpdoHGSreQI0UaOz4CIAlQnGzfyqqZzRJ3G9YLyFgrlrT+6xTB0eRiHtMV0VI2AAAAZwNURU7dFuwPZuVNRT5nVnE+UzNVmJBA5AAAABIAAAABMEUCIQCcWZmcZ50TYeQp+d003lScOS2mqw4hgYwqpPUEKSvCqAIgNBZh39/0/2gQvYXt+nqURKX2A1AjhvsTpsFy4hl4w0gAAABmA1RLQdrhuvJJlkvEtqyYwxIvDj54X9J5AAAAEgAAAAEwRAIgKmSZOJW5xRq2BenGixCm25G0OcfsYzfa9BrWuOxy0HUCIH5PXjiFlKhQL/LDhS0C6Gg0HooGpaV86sZy0HhidTtCAAAAZgNUT0uaSfAuEoqOmJtEOo+UhDwJGL9F5wAAAAgAAAABMEQCIE91SNlAczwUcjcASp+fJRPfUkSptXi1JVTwgjSZBxzAAiBIn5nl3mqHktCxpHO80m9L8/JHoRN5+E95ypcBTkva8AAAAGwIVE9NT0JFQVKhZTyzeFIknk8Y37xHOlzj+I+mrQAAABIAAAABMEUCIQDyLT6V+qWV4jxIn4E0qyw9Nthy0WLEsyLq9gZq7hSyhgIgC7bLZUZfswte+NchNk+fAaFEWxeRfcFC34dwdTJod1MAAABsCFRPTU9CVUxMo4kgwA0aUwPbU4o+oI2np3nh91EAAAASAAAAATBFAiEAxU6rRiUrb3EIp8CqfNpVRMKz2gUYAHxNNbmA37mU3isCIEvtZ0zwwgL20yw6D8K0P05RlwrEz8Qt2zBmCzrQSCcjAAAAaARUT01PizUwIRiTdVkXI+c4QmL0Vwmjw9wAAAASAAAAATBFAiEAlW2zY0CRCs4Pf4IOCr9qrNWuMVmdW1XGCQMPPSPFpnECIHHlSeM6/mzvCi5KQ72UScqjaRhDQXkv5T4SaTTCeMlPAAAAZwRUT09Sjrll7pzPvOdsCgYmRJLAr+/Cgm0AAAASAAAAATBEAiBe7FXAo4B1NTnxGgKvWN/LesFXHzLb++YuxJdoSC/kmgIgecpNWl6NlXAhc5JakVKvSY6BQ7JWoBntlp7swy9wL1oAAABmA1RPUNzYWRS4rijB5i8cSI4dlo1ar/4rAAAAEgAAAAEwRAIgKQusl3d+JB+fTIPW/rBJkJTJaWWrVYss+sf8vEBia58CIDmK71k0VgPn3SUN+zQQrERJvZ58Tt4EbTIHqZBgPEdlAAAAZwRUSUNPf0sqaQYFp8u2b3qmiF69kGpeLp4AAAAIAAAAATBEAiAYtcZTvbEeEs32IPAhdqmUNIamy4qM3SbcWT+uRub4hQIgbcu62IRGszla63fdmqwQ65FU21evnVgSCVnsw7w15GMAAABoBFRPUk53d3/t3d/8Gf+G22N5ZwE+bGoRbAAAABIAAAABMEUCIQCx5GaGoTSSz2YBufsIZUPIHoM2+V7P5Nvc8fLZ3+iSVwIgesrMCn6vyUL7Iw3Sg9A666jMvUoEmRNxknQ1C6uGwTMAAABpBVRPV0VSHJkiMU7RQVyVuf1FPDgY/UGGfQsAAAASAAAAATBFAiEAg0wA2Dp8KoWu1kfmcyfwalaCnqgheIAyDycyTpPKDfYCIERcOboV529a7i8wlQACt4+IsolZAtKIVd6VXrzoH2hxAAAAZwRUUkFDqnqcqH02lLV1XyE7XQQJS40PCm8AAAASAAAAATBEAiB01urIYPQAGVvk/cTZgQTrATKN4YD/LUQ5YI+FafsE6gIgd7D4ypolV1Th5DqMFnxMR2CzNiH0LZ4YtCILTkUd5jcAAABnBFRSQ1QwzstUYaRJqQCB9aX1XbTgSDl7qwAAAAgAAAABMEQCIGqZYhlU/hHY/JYq4lleNNx0SVwmiiQEynMXjikUWUc8AiB1ZXE6G07NPopEodG+XkG5rz7dQ13Dg0PYigVUF9C+NwAAAGcEVENTVJkQ9K7Up1UKQSCtfajfi1bpEZf6AAAAAAAAAAEwRAIgHMpLongKSbUARuGbIhn3nxF/RqbMwFOs915sesBYRqUCIE9OyFoq5dfSZDClv0dqt3GyJCoonM+4/4A0caArBNt6AAAAaARUUkFLEnWVEtMmMDtF8c7I97b9lvOHd44AAAASAAAAATBFAiEAi0K1r18k1FavHhcTYNem5YZGhDeext58ODtrDTgqRAACIHzS+7sZwaZIfJzfde39AUC/IH6OlV1+nmXiJTZbH7cNAAAAZgNUTlOwKAdDtEv320tr5IKyunt15doJbAAAABIAAAABMEQCIBa6eGuInjs5E34lVELJ9wxBtzx6AZYkQmd4F1nmbwLWAiB9oO+9ni8FCXj4cAeQLf9y1HmAY787B7Udpo6wZP2bIwAAAGYEVFJBVOIlrKKVJLtl/YLHmpYC87T5xv4/AAAABQAAAAEwQwIgAVKufeuFziv1Fwb3eDwJzUkPbQ6yF7qR9KA2h5oCfRYCH39aqX6Mt9XmFsdojxsroeme+krRswcNybGPcjAIOhgAAABmA1RNVDIJ+Yvr8BSbdpzibXH3rqjkNe/qAAAAEgAAAAEwRAIgRgqwFpz9iAetPEP27skpyWYn2ySK9qXRPiNECpLiZiQCIBNQF9z8cNyPuiKYLyp49KwFCP2+0oNtiuN68bOmoXygAAAAZwRUUkRUM/kN7gfG6LloLdIPc+bDWLLtDwMAAAAAAAAAATBEAiAproEVWGT/mu4CQgyX9btFkAdrCsNFgW0WNiQeYEN4+QIga24GlskQw2X44zjyedlkNAVtqSfHVal2EcDMy5ql/McAAABmAzNMVEMCQTaMHSk/2iHbqLt68yAHxZEJAAAACAAAAAEwRAIgUjn3BMciwSkw+sdHQCxXfi6OlARBeJsKFnl74WBaMuwCIG4pzs+E1zmwH0ix8yywF+OPJvVy/fM2EYJyhp8IcRwhAAAAaARUUklYBWNU8/8gdDqkwNo2VgOHHHAAsIEAAAASAAAAATBFAiEAqjMsEEPnGSRkr/xxJnQJud/loAAq6uzfDiFa2TC0Zb0CIFYkc6Oduyp1rfEahKQjDwSRhr/0V6EE0iJhCD11mF/pAAAAaARUUlhDrV/lsLjsj/RWUgSZDkQFstoRfY4AAAAAAAAAATBFAiEAzEhzaV/i/c1D48aQIVm/zDIzUJzGRizJfHGmMi1TjZ8CIBbV4n03sJgZUUQkyCZT38VFjA/ec/P+I6nIpkOeY6aLAAAAZwNUUljyMLeQ4FOQ/IKV9NP2AzLJO+1C4gAAAAYAAAABMEUCIQCwX0byzHy0NQNSbOPiI9PXSqu5//UygHifPq0i+UImoQIgEaA9XjaXUBNYlclUzCxW467yYQCT1JuTwYPMIlzEac8AAABoBFRST1lFdFYukxCpT5ypYr0jFo2KBodbGgAAABIAAAABMEUCIQD8W1b/xE4W13jmWjIPj7xXWD0gockI4iN+nOxiR9fp8gIgKCXPx51xdCs1nf/HIVNjkSQMKc8bzYuInSPEayADNQQAAABoBFRSU1TLlL5vE6EYLkpLYUDLe/ICXSjkGwAAAAYAAAABMEUCIQC5JQM+kNzgno/oBU1nr7JIcvXOuH8CmL08U2rW+NDtxgIgVtuqwZB2YqiICnTkedarLWONzYZ0Gy+wJ7vpJn5dpwYAAABnBFRBVUQAAGEA9wkAEABfG9euYSLDws8AkAAAABIAAAABMEQCIAvqAVv6bM0Efhud7NfWUl1AxwPrLlRCwo3h3Gn+rHkxAiBxIMN6rBvrhuVp5HgLev3n/5mtZnOeJitMVUrdD1DCDQAAAGcEVENBRAAAAQDyor0ABxUAGSDrcNIpcACFAAAAEgAAAAEwRAIgdYLhw4KjM9npnUUBAD9QRohBw3vIGEcELKYtq7gwxXsCIAmH3Z/lEdnZnE0vqqODeBpZQJQhvjXikbgavMrAMn/RAAAAZwNURkyn+XbDYOu+1EZcKFVoTRquUnHvqQAAAAgAAAABMEUCIQCbvzpskUp9xb9YDTJN3dGivw3LdH3uWXOTBPBnlrxxWwIgZu4xQGNtMNDuyLry3fw4+HMl00HDUMsPbP/RczFk6vIAAABoBFRHQlAAAAAARBN4AI6mf0KEpXkyscAApQAAABIAAAABMEUCIQDefPhmBqp4Qr4RrnxkktvhwP6QR5czyZUesQNHJoRp7QIgEBP4RwzQm8uJ+PIkXqUvWGnpLkwQsNcIWm8znpAP5JcAAABnBFRIS0QAAIUmAM6wAeCOALwAi+Yg1gAx8gAAABIAAAABMEQCIACy5enqDkgEAPJnn5rFUxg8n3On82ef0EbiLVPkcgqnAiBuaDUmMOUyElbXyXoVNyADvW7E4M3tHJ63eUd4dZ42zgAAAGcEVFVTRAAAAAAACF1HgLcxGbZErl7NIrN2AAAAEgAAAAEwRAIgeTyr9ahP9OtUjl3FLE/etN3nq6XgV2CPoJ/w7XTrvmwCIGwGhWDeQDJPxZkGngX7W0AL406BJptFnbH3Y52Dlu+vAAAAaARUVVNEjdX7zi9qlWwwIro2Y3WQEd1R5z4AAAASAAAAATBFAiEArEcCV7LdxQCdI7h89uVhlIitRHYDlg4gqfjSwGD3g0ICIFOp0646ar2f8P8Kek9d/Kzgth7ePOPmApviluifrJo4AAAAZgNUREgqHbq+ZcWVsAIudSCMNAFBOdXTVwAAABIAAAABMEQCIFd/evkOFZ/v+8nLCbelgchvT6Y6xZVWa8rV1pOJqxZvAiA2DMu1sdmKpcAxRYfwvUTPboryqPRKTnpLQynCN8NqowAAAGgEU1dBUMxDBKMdCSWLACnqf+Y9Ay9S5E7+AAAAEgAAAAEwRQIhAOgOuPdNmxcpV12kHBMPkEbYdl1ll/1B5Nq25tctsxG/AiB9j6Tg1Fs1WCZ0OP9vF6Xwv4tm2YEv3gBcWIApq4QvCQAAAGcDVFJVTBlZb1qv9Fn6OLD37ZLxGuZUN4QAAAAIAAAAATBFAiEAsTrcYaXAcI8f4aNWR2CmZutfAeC880Pc5gsjkn7RNFACIDNOXQwQyiG61FPtXWK4KkHsf7HmxepPNm64P5fTv2tDAAAAZwNUUlZylV7P925I8sirzOEdVOVzTW82VwAAABIAAAABMEUCIQCNbwYOZiQzVtehequWJMyfNvuyhyl3Ivg2MOumvutbCgIgFoSKrQ9bGkrqgQuajiwqnk56xc460G1M0OPfkEepFWMAAABqB1RSWEJFQVKGgH2luS0x9n4Sh3HKy4XzV5ZG6gAAABIAAAABMEQCIG0P3aNK7a9VNsiyduQY5CNQKlnjS5zte9aM1OGmGAhsAiAq8j0QA9oSRfBy/oyE08JUpEhD0frmIItBS2AGfbg3gAAAAGsHVFJYQlVMTMF153sE8jQVFzNOo+0LGYoBqXODAAAAEgAAAAEwRQIhAJd4BYA6y3kDH7U1KUMuiTA0k/sbFbsXYe8mpuU+qMyNAiBskhlU5lc2fZb4BQPInF7QL3EnHz7y9W+18Fi6HVLjfwAAAGsIVFJYSEVER0XljI3wCIzyeybH1Uapg13qzClJbAAAABIAAAABMEQCIEz7dCeLxVVxrLmz4Xk4U2X+E0lzOUAU7seCqFCdX73TAiA+UM457Cnv7boyp+hUPuwYg18bMjIYgR6xZ5S3IMG9uQAAAGwIVFJZQkJFQVKl3fyouDfM0M+A/mwk4qkBj7UNugAAABIAAAABMEUCIQDXrZ5FgJkiOADfGNgRydIEW/umiFc+zsYcNgt9AMI9IAIgYu1G+dZEvzJG1Y4vKt7CmMeEkRFNYtg0aaRdH5ENpiEAAABsCFRSWUJCVUxMxwOMz2DkjFtxGeVVZqatny1mx8IAAAASAAAAATBFAiEA6W50xkvOF73RGKZNKPx22fh+28SFfwPgWLAGplyeSJkCIFX5fzAE4U/FwXKyXMeZ7f1Nx1/ZZN2xu8Aj9KkgZFfgAAAAZwNUVEOTiUNIUrlLutTIr+1be9vF/wwidQAAABIAAAABMEUCIQDuKOF5RxvoWyd9adufWpXrYRrMByWNvFt1RCNqXo6xowIgWCaJs2msXt7zRLRyyvOVMkK9kpRCNJSCXz1UZ/O4+e8AAABnBFRVREFeMALf9ZHF51u53triaASXQuaxOgAAAAgAAAABMEQCIEvS5XaOy4fe8llYbusGYYPR0CA/PtafgocxwnKJg5cUAiByHOhOXIwBVuhXv5Ox7DBJa/g1ksyVQYLGsjrg4KQ/MwAAAGgEVFVORWtOBoSAb+U5AkabYoYCTbnGJx9TAAAAEgAAAAEwRQIhAKj3UdOb9Gt61JhN7jaYfcn1H/zppi/sG132+9CHxw0uAiAzJdgDy49k+dVsgx8cJITdLVZg/7tp5SMFCIslrtsbBgAAAGcDVFhUokKLbRz/qJdg15eptaJjQs30VF8AAAASAAAAATBFAiEA7ByM5R4CnMkE7Xf3cKWlcX1KP68O2i0PjEnCAsgP6ugCIDV0Dlc5VVyGVp2L/aQyU5V+mRyRmKU74sG1uw+tcgcnAAAAZgNUVFaoOL5uS3YOYGHUcy1rnxG/V4+adgAAABIAAAABMEQCIH2ZnGmKvHAlYA7GzFaVz+o0UZAQl8z9Sf85FHrkyriFAiBDYA5PYPZX7MIw6xV8AalVFOPLSCpEm5u+ml5UJXeUkgAAAGgFVFdOS0z70NHHe1AXlqNdhs+R1l2XeO7mlQAAAAMAAAABMEQCICrL/7yW0RlhEunwF6MgiHTf6lVo7c9TqMZFOY0r4f4+AiBUfFeD5JPhqNMDknrO95bDAceOQg/aFL6BQM5yr9K5QQAAAGcEMktFWeSJcvzYKidEEcAYNOLwMdQ3f6LAAAAAEgAAAAEwRAIgUsHqWBBkQktlOl8sz48kLHvAMb/w+OaA8mGDI/43UFwCIGjHeVfSfMg8t0Z3jYxSp875FT5iiZeBcsO9cHdnR4VeAAAAZgNVVVU1Q2OO1KkAbkhAsQWUQnG86hVgXQAAABIAAAABMEQCIE6MiXAtuMbmtLK7vYR10hfErlbeIXYVTntPtAK2AvOjAiBWm2coHhSthtFrfK6DFUIWW2fRjU5ZtkXrZwQjQXTMLgAAAGgEVUJFWGcEtnPHDem/dMj7pLS9dI8OIZDhAAAAEgAAAAEwRQIhANF203lEfMfMihfuNVhLvpePYBlDSs9uA6kdXxmMWKDEAiAU1XM91RrQgkKJxKJhzPkaJHImmsA/PPW8FQqARHHr+QAAAGYDVUJY9bXvyQZRO0NE66vPR6BJAfmfCfMAAAAAAAAAATBEAiA/1SHLOUXBDf6muqXLMvj591FJynnLi5aNbQH/DbvhAgIgIe4pslDh2LMVZG83UA0R2t3ESNdEMi9uL7TI4Jur8/UAAABoBVVDQVNIkuUqGiNdmhA9lwkBBmzpEKrO/TcAAAAIAAAAATBEAiBgJ+xp0PxDAYkMqEI79ijsXYFrrNpm1mHYLc8ZaW7rwgIgJMejXzs6JmcNX502to8QnHOBBiyVogd7+tlFp0tVVQQAAABmA1VDTqrzcFUYj+7khp3mNGSTfmg9YbKhAAAAEgAAAAEwRAIgcC0CBkn2JYLZgu7TTxESHZgkFhgJR4BzZgz2jPOljcICIHy9S6kvb6sdTNrIfO9zJBWC2TTG/7/tO2zEFJLLp+d6AAAAZgNVQ01yL5ekNSeLc4Oh48R/QXc76/MjLAAAABIAAAABMEQCIArMRhi+DpvQ5aAet+78VUF4aGiG1A8JFMxI2NR+DbF9AiAI3icgjQR2mgRNWkWSDMMmfuEfTgP/mPzQ82KIKQmNmAAAAGgEdURPTxL2SanoIfkLsUMImm5WhGlFiS/7AAAAEgAAAAEwRQIhALzmb7pjlTSMLmtv+V8yuRyU6gj0AL3TJTi1Vzq6/DIbAiAnkGAIvNBXAq5QoeH0KcuSFoJOrcE4xIwWlloHV0sL3wAAAGYDVU9T0TxzQuHvaHxa0hsnwrZddyyrXIwAAAAEAAAAATBEAiAXaReyRabmOmaCmforxsSliKVNtjd9Dydhoq3LmnfMFgIgedn/0Lq4uWJe145lE29zDjIDOPnvYPKOrsTRffqlLk0AAABnA1VNQQT6DSNcSr9Lz0eHr0z0R95XLvgoAAAAEgAAAAEwRQIhAKRKzVT1hRXzmzKefaV/B4j0hPihvOgtnVPvENsJ1hzyAiAm816TJiY+V5EtkFKePoO/KOj/YrlzOTpWvsuWFplG/gAAAGgEVU1LQY5a/Gn2Ino6117TRshyO8Ys6XEjAAAABAAAAAEwRQIhAJLagO8WXLIasPfY2IhM3HzUBEZfTFNbv+yTUKUSmbyoAiBqUopyHmgp24hhEua9B+tubFd4GfTCZWvsWR6vREoCOgAAAGkFZVJTRExSGORyz8/gtkoGTwVbQ7TNye/TpgAAABIAAAABMEUCIQC0t8F5OaZ9l+Z01lQZkFWSuve7EM4Hwl5I/mnXuMheSgIgWpX1NLHc1SWKyr2aZOoR0Ph663/rNQKkxJEz4rLI6mUAAABmA1VCVIQA2UpcsPoNBBo3iOOVKF1hye5eAAAACAAAAAEwRAIgWf9r3jU6nJS5WJnb5qeZpLdgtz2MnYHfmn+2Gm7FE3sCIHh7ENQIXjQkKyybovffvzNA/WuIj3AALDE7Z3XlHOnsAAAAZgNJVUM1jXrLNgrqTUlbh+Ekb7dSt2hDUQAAABIAAAABMEQCIFQJYOuMmPk7DRCmCXOPyX2rL3HnzaEUrPTiU8xGpsHlAiB6o4CoN6ruN/e4dOFVzJJRV26EJ5rRTzvxyhjwYym61AAAAGoHVW5pY29ybokgWjo7Kmnebb9/Ae0TshCLLEPnAAAAAAAAAAEwRAIgCReYJemDTutiy8ynQw2ye9+9R5C8C+kH1jGRsSSSIMcCIERsqxirrI00zl9IAzNWprOP6YEGc/5l+zt63PK/+nU2AAAAZwNVRE/qOYP8bQ+7xB+29gkfaPPgiJTcBgAAABIAAAABMEUCIQCU4PiRKfpX0ggb259ew8I0RThmbSqXpN+o86etV0vM/QIgBtQxvHWnI86kHxbsparWGTCAjnEwgPonnt0uVJjEWvsAAABmA1VLRyRpJ5G8RExc0LgePLyrpLBKzR87AAAAEgAAAAEwRAIgWGziEtcNT56ZDR1WUGQBSZ/BC62CJmZS4rL188CGSjoCIBZldvHXJGXDZcAZRa92drjPXMrTXDvpigD1mPYFAyLeAAAAaQVMQVlFUg/2/8/aksU/YVpKddmC85nJiTZrAAAAEgAAAAEwRQIhAJ4KcUPuOQ+AV45ZtgW4p8vgVxAArXWU+Z1Pv+vqM3xIAiBjrmQ3RH4POMNf9LDQxKh6N40xVQKcBv+n4SxjkoyBTwAAAGYDVUZUAgK+NjuKSCDz9N5/r1Ik/wWUOrEAAAASAAAAATBEAiA0SUyDJ2EUwY6JlskzAqzpiFzATxwgxQ/p6FJ2cX1RsQIgcKJi0HLyMt4rWFP9/O6arA4mKmGDXzw68cMPn0NedbcAAABnA1VNWBC+mo2uRB0nalAnk2w6re0tgrwVAAAAEgAAAAEwRQIhAIl0TqmvZShoiyiraH0kwYwpF9FCQLZeOedagAXNFMIiAiAcd4+snRCSARhAZS2iHUnEBzdxoid+GBwawhw8bLZS5AAAAGcDVU5OIm97hC4PASC34ZTQVDKz/RR3Op0AAAASAAAAATBFAiEAmmzE7WbhMY8UDcukgIng5KVFfWNg2FiuQRo90HzgDmMCIHEyAIqXADWYI90iSLseaFbQVla3fPO7qt9cJ8+GJzgDAAAAZwNVQ0+KPXfp1paLeAVkk20VsJgFgnwh+gAAABIAAAABMEUCIQDoiet8uMRp09FhpH6/5VEqTwQPgleYWd22AhuA5sq/ngIgG9Xw650DhWwR373P5IOykIAuteJPIoRhtve8tgxg9H0AAABsCFVOSVNUQUtFntjnyWBHkPfsWJ+ZuUNh2Kq2Tl4AAAASAAAAATBFAiEAiD1CT/XjYGeUxK0M4DfoO/AZ7oSN9cSx+gK2WjKS940CIGl8rwEG+HtHhVHDZeW9CFKSyXXvdocjKdim/uK5LwrbAAAAZwNVTkkfmECoXVr1vx0XYvklva3cQgH5hAAAABIAAAABMEUCIQCuXUnpknBclLta/H7tPq86PMVkGzEerb5megTVz8xMzQIgdK4ISaTxE2YxIC09mZx0T9drQiEi0U0RSrdBTnKHoEEAAABnA1VUVBb4Er5//wLK9mK4XV1YpdplctTfAAAACAAAAAEwRQIhAKyFPQils+n/U9RgIi53GuM7QJQoZoFgjaRknIjllK6nAiB2T1lYe62ZM/sum6TgLi0pR5H4v3KbzdZOmeNtYrOaIgAAAGkFVFJBREVvh9dW2vBQPQjriZNobH/AHcRPsQAAABIAAAABMEUCIQCILm8AENdK6H0Cbxs4regCqY0EI7+JsR9XMcHIqpL69gIgUZV4Imt3MGj//hXZVaAXIJW9Lfr4wTxtsZ6F0/kEk3kAAABnBFVUTlCeMxljbiEm48C8njE0rsXhUIpGxwAAABIAAAABMEQCICF7Xjj737Ca1hhIf8glHoujyiBtGO50t3Jf+v7GCF8OAiBXkvF4Zl0H/fwMfkIFE0F9NKk/n3pnxuYR8WU5bwdGegAAAGcDVUJJ3RrZohznIsFRqDY3O6vkLIaM6aQAAAASAAAAATBFAiEAktiGQ3xYIVchlNjWtz8scZ2hlJ6Yi451AixmEz56+E4CICsN3WCA860PWYqb/uF/ZJeKzuKDW66PeHjCVQHS7UDxAAAAaQVVUEJUQ8dGGzmABeULzEPI5jY3jGci52wBAAAACAAAAAEwRQIhAISw0O2VBHCY9l0eiSTdHGlP1ktODwPA6prWiXOhZtP+AiBf6afluIrrYjRUu+p3wp9Y8B5vakxuf42e7L3lFETbfwAAAGcFVVBDTzKvlwD8oWJ2zWnE41/uzGbREWgmzAAAABIAAAABMEMCHyXv+HoDqgj6F9ahVaDx3zCF2BLwkUjQsdz+ipXHdLQCIHB3kwsSLMw1zWtLgdJl1+58ftoAZvcbUDRqHNnMrBo8AAAAaAVVUEVVUmwQPYXBUQfc4Z9adfx0YifmEKq9AAAAAgAAAAEwRAIgOpRdH3bKQ4Z3e2/Trlujdg5ZH3d/pj2bLIW6KAs4LC8CIGP83pCVfYHGCeOB4h4H2t4gaPQWSRQRr1qlsZw03nQKAAAAaQVVUFhBVQVX33Z0GSlkdMP1UbsKDtTC3TOAAAAABQAAAAEwRQIhAI2LdRIU+L64705q9zy4uhzB+fR4ykrbe+D9MLPSGZDkAiBlB/uu9/JEjPx0ffXsuyQ7lsS+yNTgDZPAx1u7J5Yf7wAAAGcDVVBUbKiMyNkoj1ytglBTtqGxebBcdvwAAAASAAAAATBFAiEA571P/gkD5hpoZLtOjnQHIG60dQekNdqsd2qtaUwg5pgCIB4sZTKpGhkds5nd98ZUuZrrMFkamodbdS0JZGQt39v+AAAAaAVVUFVTRIY2fA5RdiLazas3ny3jicPJUkNFAAAAAgAAAAEwRAIgKuMbYAGhMFY18gkMvPxdT2gDsgeA/32mcr3+8lqtduYCIG2GzL5ZKTketr0YP5+cAFjQddGNp3zO9do4b3piit1EAAAAZgNVRFSQ3nQmWkFuE5OkUHUhda7Zj+EVFwAAABIAAAABMEQCIC0R5EfDc+9cohCvf9zXd7qIZvSdyTHyKDDOr0YDsNKzAiAe+daDqQEOoXxTjHmh1nBjkSUt404RvO9fmkvc8YtdlgAAAGgFTUFSU0haZmx9kuX6fty2OQ5O/W0M3WnPNwAAABIAAAABMEQCICKaopENecMcxSBmlTxiThepqPoaL35I1cnw++X1nbHWAiBrZfm/4Je6XyEPsw/fpHl9Rz2EJAi1lxTMBG3he8fcEQAAAGcDVVNG4OBcQ8CXsJgttsnWJsTrnpXDuc4AAAASAAAAATBFAiEAmT7vopirca4EKQ3IQvxoE8s93i5yF61WjXHpxMiAi+8CIH+LRYyySIeHsEg8izgsdxjsY15tXgKxrD5JVSbzhcGdAAAAaARVQlhUhWRlOHmhjFYOfA6g4ITFFsYvVlMAAAASAAAAATBFAiEAliQeAnPr3WBObsfMzZMV38uf3+Sjn4tS5ymdnE4V+K0CIHsufC2FY6E1W+hCBGqhOCKSEAw6HEi6EUWEaE4Ad/XrAAAAZgNVRlLqCXorHbAGJ7L6F0YK0mDAFgFpdwAAABIAAAABMEQCICeRMK9zD5dfYfS4P63NkerDVUH5hr6FXP4hAAWDMPXrAiBCdOP4D4hDYOLsLgxphdC45IWXkhMiyugX2+ZIam08EgAAAGYCVVBrpGCrdc0sVjQ7NRf/66YHSGVNJgAAAAgAAAABMEUCIQCYlfVgtQMNK0LuACV2nzj8BseV1cOop2YT2YrRHEgXQwIgGqcDxhVKOycmrXoW+FeVAnduWZa4kopspFeW5JRQqe4AAABmAzFVUAdZclWRClFQnKRpVosEjyWX5yUEAAAAEgAAAAEwRAIgB60LOHu0lnkuCedm6t0g4fH8C/htk/KUzvWGN9utiQcCIHmRfO8Fn3wpGLKyJUeKpDwtv/hS4R5uksSzG4t7l8RwAAAAZgNVUUOIBpJqto61p7kJ3K9v2+XZMnHW4gAAABIAAAABMEQCIGJ1fNFUFIEI8T30k6Fb/cWBn9s495ouwjisWSwn5qE1AiBr3PnGAWslZnmGlF3oDDbGfC677HJDp7Sm2iclvGklugAAAGYDVVFD0B23PgR4Ve+0FOYgIJjEvkzSQjsAAAASAAAAATBEAiBPGp9sJxcDvrSB+4Mulyii3ecs3Jpr67Ym+fWrZivaDwIgZPSlRcXuGPj9VM/xt4jb2fMA0hlLibu8b2Iry2mI1cEAAABnA1VSQpMWhBOfdWwk7Acx6fdP5Q5VSN3vAAAAEgAAAAEwRQIhAICZeZO2hDx1Nm6kiIhmWrvuOFFoxP3Wk3L3VCD5vd19AiA5m/7/KAH5C5yeQvZrhKHTjS2V/vuN1ezPBE48w1UrVAAAAGgEVVJRQRc122q1uqGepV0K3O7XvNwAizE2AAAAEgAAAAEwRQIhAMJEZLPQa0jz4KMaxJJow+5aCXtncrZKaEDs4G+lxo6SAiAL2ccEoixkuz1dfqJYvc/C2lFnd+iMJRPociv14vTSIgAAAGcEVVNEKz7PgHuKEOBT1SczEvI4Tl1Z+BBXAAAAAgAAAAEwRAIgOG3gK0JRADBo1+nD3greYskBiE4vGo3AJ69EhNv2YucCICZX0NimvxaW4tDWJPhbPdGzMll+2QTP4iCZ+i/n8SiNAAAAaARVU0RDoLhpkcYhizbB0Z1KLp6wzjYG60gAAAAGAAAAATBFAiEAsuNYcm5OamdSzzRAF8Dp1FuakEEgdY1F9hsoBPmtUpkCIBUWHvKNjESBvZQywTVi3vnM5oi8/siW7yRMmiE/EGzdAAAAZwRVU0REvb5NnkPo8wWv6UYoArhpHEXK9ZYAAAASAAAAATBEAiBharV4G1uqGMUXfaYj3Yv7/b6z//cmnqDSPJ9iatOBMQIgOkMRCVQL+HiSZ9go0Ksnn8gHB5xgZMwrHujt6dq5wfMAAABnBFVTRFTawX+VjS7lI6IgYgaZRZfBPYMexwAAAAYAAAABMEQCIHjGbM6j5N7bFaJOw8eD17WCzSYNr2L9Nq/pqCEqNErtAiAWC6jBxLaoqmVlvtIGMqCRru63v9rGf8ZYmmAxrL9RHAAAAGcEVVNESxxI+GrlcpH3aGNJ8SYBkQvY1HC7AAAAEgAAAAEwRAIgD5y4v3gj1FWWwtyx5UP0MOxBoIp07HnrGuW3Bm0tdIgCID/1NjWb+fDiuCXqzpKANyiI2+vz7zg6bWqjX1bxJuZ5AAAAZwRVU0RQFFZog0VSe+Hzfp5ifaCDfW8IySUAAAASAAAAATBEAiADYKoxUNnolc1+luYyHtlI1MyTuU2m8DY07ALrOG2NFQIgUDXqPjiqC8n2hEIvIo9FsSVpDxPE8nPCcUMeCIgS2bIAAABrCFVTRFRCRUFSDNbIFh8WOEhaGi9b8aASfkWRPC8AAAASAAAAATBEAiAzeovd7Wq6tJPbgDCetxX/rY2feLBwDi2n7/9fjKCHPAIgVZ4Gg8oLefKuFWFWPbQdzwzoEJYBMZmjRRTaMmqK3zkAAABrCFVTRFRCVUxMjM4ZlDoB54t8J3eU+wgYFvYVG6sAAAASAAAAATBEAiAa9UEfu2YATguHMIhie7ajuzqiR/ZQqBgFaP4STKh5KwIgNwalTnCO7cgQa4CeGenBvMxSbJ+2BKAadX5TKMQmpNkAAABtCVVTRFRIRURHRfO41LJgejkRTay5ArrNTd3nGCVgAAAAEgAAAAEwRQIhAIEUpnk0dM5BAEbdEqvhUHkZsbhaW3CdF3+L7YpacEd+AiA5W39c9xJjmw7FlY7K+lMurMPUvdWkhncg+w7w8I66IgAAAGcDVVAyT1SoP1kpokU8LhjiWyFfb48oKPkAAAASAAAAATBFAiEA6iEftZccO95mGcOiyYSiQ1uE9TFx1CH4+JOi1m9VVLYCIDseFA2wweY+gjyo6da0iH9Ct2LKuYjcyjpT/S+ZpqIXAAAAZwNVU0dAADaaz6Jcj+XRf+MxLjDDMr72MwAAAAkAAAABMEUCIQD+GDQkOAif4yuI3rfVH1khXyxG4y66meldmORkFnX3BwIgXmnrGv/vW/7RmTTMSSJLMQtctXpYtxzcgEXnGosVguAAAABmA1VUS3CnKDPWv39QjIIkzlnqHvPQ6jo4AAAAEgAAAAEwRAIgVKM3hyA4vtG2YvTZiMmmktbtoxY4A4oUesmGUyNr4awCIGIFNdL19I94OyB7Lhb6q0QBgJ8/TmujAnY9OHP1PK0+AAAAZgNVVEvcmsPCDR7QtUDfmx/twQA53xP5nAAAABIAAAABMEQCIEm2CSgvbeTU9dTXEV8qGS1ELAJgPjuUfSKp/rf3g+z3AiBuIuqvW+DGlhyU6IcsPVk7/06IcmFZywsRsMxWMSuKswAAAGkFVVVOSU/LfSwxuH4OiNUUjIi9et/flsPd+QAAAAgAAAABMEUCIQDGm03Jo5HpDuYOV7X4pMGG4Y+nz+pL3S4kgudQ7S4qmAIgX+5fHFexXgWWA1Xz6jN/MAcdtxavq2jDVBs5paKDexIAAABoBFZJRFREX1EpnvMwfb11A23YllZfW0v3pQAAABIAAAABMEUCIQDsiFre5q1zPe7UYU0bPYgpCh3LtS1lk2Zg+4uBe3OrfQIgX8WPJIKFrHEPOdTlUDaS1eFPRwo38tOr4fabgeL2jPYAAABmA1ZBSZ+AHB8CrwPMJAVG2t745WzUbqLpAAAAEgAAAAEwRAIgVb5+VRR8XW89c86mtF6UwtCXgFV0y+BE2xym+89NWBgCIGH/q3f48t7TTMCMTfwTotrAPPfd0ID9OAcKHXI72f7zAAAAZgNWTESSKsRzo8wkH9OgBJ7RRTZFLVjXPAAAABIAAAABMEQCIC3oiAH8FXFOJmQ7fiaLDPyVW8Jj5fOvzOnSaNY20jMCAiAAgijZB/YKs3wF92VJqyV0sMxXxVgTp50rLerpiPZAYQAAAGgFVkFMT1Ipfk5eWa1ysbCi/URpKedhF74OCgAAABIAAAABMEQCIExA4L1PDZsGWQ1eGZCJ3MSGDV/JRuJzm8c5Kx3zGKGcAiACp7T7xIpRDkcKyc7MSnu7HnAQlL424DVD2lqI7Zwq5QAAAGkFVkFMVUVJ6DMzfs56/jdeRPTj6EgQKSGOXAAAABIAAAABMEUCIQC1uYCCpEbQVj9HGOa6UVcZaMB8pJ4jNSMDnhu5xqgGDAIgQktah1diHHyZGP4PimJKaSWQwMJ4Jp/o47aVilPgT7cAAABoBHZEQUnKDDSj81UguUkMHVizWhmrZAFNgAAAABIAAAABMEUCIQCZzsu3TNh2rpXA2f16WS+IQ2wej199sQ/uS8TTFzcxTAIgbizqfNo3q3okLw3OtboAyBLWCySGkLLD1q4HEfJAxA0AAABmA1ZTTFxUPnrgoRBPeEBsNA6cZP2fzlFwAAAAEgAAAAEwRAIgFNi7osaTfQ88/PFBthsKHwGlJWNJEpyCFyP25f4+BMwCIAdXUXN0m45Pmei2cQoe/VEF+3AM2FlDHeP47gC5LnSWAAAAZgNWRU7YUJQu+IEfKoZmkqYjARveUqRiwQAAABIAAAABMEQCIEyHACJsiW4RqINBJg9FWULIIm9bz6ctH+5dxppa/uk4AiBsQ3ybAM0BW9Xg5yWXtcPwLPaCuk/mvajWfDwK24MuygAAAG0JeXZlQ1JWREFPxb3fmEMwg4A3WmEcGLUPuTQfUCoAAAASAAAAATBFAiEAk9dZ9CsFaQbGchzSEkdBeDe/pwyLFGfYzkTzXdhNbGoCIG7q9/8zZhyzC98MO5WExcwuRky5I24izF/KAM6sxw+ZAAAAZgNWWFZ9KaZFBGKRcqQp5kGD1mc7nay/zgAAABIAAAABMEQCIGlYHVXlq33v1QIcv4EobKa3ctJGB3H7Ezp3dtOsAo2HAiB1sIZCtL0eRp9J4Epyxu6k/MUAeG8Mfdl4t3Pgh4vQdgAAAGgFVkVHQU763hege6O0gKoXFMNySlLUxX1BDgAAAAgAAAABMEQCIH3R938yUB8227Dto6mnoDp67grif/8R2g731c2WEEZCAiBm4HimaiDbuHE0V+OPeSrwpJt8QsqMIjRHhdKMEiBSAAAAAGgFVkVOVVPr7U/5/jRBPbj8gpRVa70VKKTaygAAAAMAAAABMEQCIBrugIPI/vvmBhcra0eMlLZzp6MZJ2udTAlfi24i0WOJAiBncPfTFoG1gvHiiXKgFeU2B6kLOcy5VSN1rv8tyex/EgAAAGcDVlJB9BGQPLxwp00ikApd5mot2mZQclUAAAASAAAAATBFAiEAqSYq+QfgDLZcK+uwvn9TYblNAp1iI6zPqAKPKfQwSIMCIHdEhVvzhBAwCUhSqXRG+jK4JkzaGK1CeiYv/BFJNR6BAAAAZwNWUk8QvFGMMvuuXjjstQphIWBXG9geRAAAAAgAAAABMEUCIQDvNd57FqW+CjhiHsZ4Fs7Kw6ik3mz/uMAOFUf9ygyspwIgatXWNIHxRMXnK/gJCiamliVBjn5L/zgHRWw59P0vd8wAAABnA1ZER1fHXszIVXE20yYZoZH7zciFYNcRAAAAAAAAAAEwRQIhAOBRL8WUCelrf8xqr2G6j34zaFxUg0pDe5wz9IMI5vakAiAGBIDwQ56urTOFINu1JEYpX/UomWpNWP+8siXqrSjOMAAAAGcDVlNGujp511jxnv5Ygkc4h1S45Nbt2oEAAAASAAAAATBFAiEA51sqznizAvZs+s+yeoyOKrefSvrxzueOluSNSqm+A94CIFdebe4tctCnIl7N0SFQrnVP6ixbbJcnbe7XzWcj/OpMAAAAZwRWRVJJjzRwpziMBe5OevPQHYxyKw/1I3QAAAASAAAAATBEAiBwVgAdDn60VcU6IMdBiLvku+kKRK9m/R05xPYUFd/o7wIgWmTwIuXY6oew/OxyouCj4tDTqbZdKjgibp+A+6px9lgAAABmA1ZSU5Lnja4TFQZ6iBnv1tykMt6dzeLpAAAABgAAAAEwRAIgEQ5rrEJyydbBIlWZBgGQDM3y6ZHsdJVlNMCjS7sKPxgCIGt/7Yugh436bSAKU+QFaeB6sBIeOLhTfkIIz9ItBYYxAAAAZwNWUlPtuvPFEAMC3N2lMmkyLzcwsfBBbQAAAAUAAAABMEUCIQCYwVeFzNYNnq8dEdNPJpWJPxS3PqU1ynjnKZPh7cDtSwIgUPLAqTXdyQjUgmDcepGLSrPPkHAxIWH954Y5uCDzchoAAABoBVZFUlNJG4edOBLyreEhQmRlW0c5EODK8eYAAAASAAAAATBEAiA65FFyW+AHtLpQbnHaHxlz2k+DZ1exEiM5N9+T/TjvVwIgAiy+7fI4KuhGT1C4yAtC9+HRSG0Xy1JZDsci7iy8oqQAAABnA1ZTUBtAGD77Tddm8Rvaenw62JgumYQhAAAAEgAAAAEwRQIhAI428rfcLWk/CfKMyUNdlZEMKEGIFDqk4dMrACFHuv4BAiAehN7j/Q75tn5XWLXLyTtVTXcWc0y/aazekgDYYI7jjwAAAGcDVkVTA0Uuaf/NnEXKNP9Nm6IgnTio1WoAAAASAAAAATBFAiEA3YIiSg3oH4UW9XOntVJRCfPyldWYgTs5am3AsKkX8jcCIFzuRcV0dXeBNkmFH+plPyn2mkKjhdPEdPZnPqorlRqjAAAAZwR2RVRIEDzBfCsVhuXNm60whpC80LvlTV4AAAASAAAAATBEAiBqFLGX/2tl1f1qrwDZNmPI8VanRq584eZ7Fz9R9/wzQAIgIC0yMEX+IYIiKui+Oy6bLU+NLntbuDAHwdXFlv3NNb0AAABnA1ZaVJcgtGenEDgqIyoy9UC9ztfWYqELAAAAEgAAAAEwRQIhAOU8faqfNbQgoo3aumFnqkf9IKo1RQaxB6DWZqWb8jOOAiA2P03NGhgpaSs92vnL74lb5Ol6qdWoNnIBDP6RlbftLAAAAGYCVkmLbDt8AdnbQ5P5qnNHUPNt8VQ+mgAAABIAAAABMEUCIQDYNLFgPrt8KzZ2WzhX8zAnQB+pBL8J9JJf8not1kllzgIgIAom37z5SqgcOCkwk+aYGJJg9JKhXlrpzwqrc3e3TK0AAABlAlZJ0yHKfNeiM0g7jNWhGonpM35w34QAAAASAAAAATBEAiBbpOFTE4MyAj17lR8GteiDyR5+AZ/ySnUuy6zrvDBVGgIgCFvqwOvB8MEVDyi6qsPiNQf7OYp/NIVq7WvI9UnEsqkAAABnA1ZJQiyXSy0LoXFuZEwfxZmCqJ3dL/ckAAAAEgAAAAEwRQIhAIKzCTHCx3BMTrrUR6XbFEnWayuG745i3l7pGWs9AhXDAiAoKHkSHCCh+xyqTgkMGf9wnIwKtpquSxKs9eWN/s7EWAAAAGcEVklCRej/XJx13rNGrKxJPEY8iVC+A9+6AAAAEgAAAAEwRAIgLt28qFMCAGqkwblp89B3KhF09p/x0CZkE4mpK3qFCnUCIE2WbbzYqyb6BHGPZFtOmMBxB9TQ3YX543fh7K4oZyoYAAAAaQVWSUJFWIgkSPg9kLK/R3ry6nkyf96hM12TAAAAEgAAAAEwRQIhAIQRl2jukxswYVe8WQbkWGlTnR3jDpa/En4jIk6zcpuaAiBhbtSrSaqDvy6QBWL63lhVXs9kPugqsN9ggXLM88rckwAAAGcDVklUI7dbx6ryji1mKMP0JLOIL48HKjwAAAASAAAAATBFAiEAyK7q5QHOdqwwfV+EYwE7L64s3iiiXBmoA9c2mu2seRQCIGWn8saRYtsZb9RiCdaYdXFFfVflrbLzecuDBW751HUYAAAAZwNWSUQS19RaS5aTsxLt43UHSki5ufK27AAAAAUAAAABMEUCIQD4AWoyffNumI6sm7MaCTETJKY6wVDnSM4ybZLJURNi8wIgVbjYXQ48y/CQ8mOqZvfYHoqcVBbuPHA7DAQqyCkDn/UAAABmA1ZJRCyQI7vFcv+NwSKMeFiigARuqMnlAAAAEgAAAAEwRAIgL0MDvsoC1Z1i38H/m3fOrFu7iSUx2xGynzBVSwe6NFUCICHZC14sNMEbT0M1XJbRhEPyvQjGGHeAOoAk6jNP+y48AAAAaARWSURU/vQYVZRFcFDMnCOYDTAZCP4Fe7EAAAASAAAAATBFAiEAugkd2LX5R4Wmgg2O6kVeiJi+LM3cCP/KhbKqrLr2oQgCIFKhGv5j0WlA+L1z3oCAu40yWRu1WayqWUz+TT40NXl5AAAAaQVWSURZQT09Nbub7COwbKAP5HK1DnpMaSwwAAAAEgAAAAEwRQIhAL0ZcN2LZ/SBuHiLIDohlW6aP5+v5n1+kSrBpKBAltOlAiA4r7CumIe7SsjzuWcq60HnwIxNtFKxRHSdslcoZvI6pgAAAGcEVklEWcd7Iw8xtRfx7zYuWcFzwr5lQLXoAAAAEgAAAAEwRAIgPMLbOl/neVLfuBtH7WO28OQZ9mRHidgc+XsS2f90ZPYCIHawplVTsHdcIZ4wRkBkfeYnt1XiIaKb5S4ixm/fo28GAAAAZwRWSUVX8D+NZbr6WYYRw0lRJAk8Vuj2OPAAAAASAAAAATBEAiBOQ1aHWTBNW7aLwfNaupeTQBNCUd5QGdk6warcqLJ+5AIgNgnFYXeNwoXk4WC67+bci9w3H8C1XCU0nWm/NqEHkfEAAABpBVZJS0tZ0pRr54bzXDzEAsKbMjZHq9p5kHEAAAAIAAAAATBFAiEApljCusZEaHQD2LzLgt+29pJtokOOIyx1lnWaSBJtDmcCIDO2b2pFV9TY4hMmjYO/84hQ01//ZXnYclFQMiBv7SrwAAAAZgNWSU7z4BT+gSZ4cGJBMu86ZGuOg4U6lgAAABIAAAABMEQCIDzIXKS2RwJWbg4kB1+EoAaZq580eO+Hrku2qUM2Ya+MAiB2byBpvsAYooVy8p2mRMyoTx/2quOlLo045J7nDurb7QAAAGYDVlhUi6AJytSTx2RuMdaUKKuaVPR7N3kAAAASAAAAATBEAiAI5ptl08WF84xK50UELIqxag5/guvfPhZeRMR2Yvxd2wIgEvvOel5xcGWc36HdbqLurQPo3+aG9a41WHTw3eDMv+0AAABqBlZJU0lPTvQG96kEZ5Mme8J2kId4spVjMjmWAAAAEgAAAAEwRQIhAM3D4qkso02It3D1/arHKBGCByr51PzxNPtjvmhbHxtxAiBzsV4Vp/o33fV3pRVFYvXzNzb9bFnpszBAyEuadUFE6AAAAGgEVklTUvk4Qk9yEPMd8q7jARKRtlj4cukeAAAAEgAAAAEwRQIhAL/IeTrt5zvXk3EB09dajiatigOKBvTSSdMDMqTV6b2bAiAvtrmOt+bPjDPbzBygi99OoHZG3hJym4cOPV8PbsoRSQAAAGgEVklURRt5Pkkjd1jb2LdSr8nrSzKdXaAWAAAAEgAAAAEwRQIhALKxetIKuax9Rc45O+gLusISfhFp/VtmecCUTKFC9MqIAiB7e9DOwHj9mm3Fwrw2fQ91wvyMpvqSY4k66WJFXEoleQAAAGYDVklVUZR1sxZT5G0gzQn5/c87Er2stPUAAAASAAAAATBEAiBFiM724bmvI/ToaKgHrvspQsA+UcQmcVsQTQ956nVW6gIgMKNzKcBdJ7Cck6b3A5Fa6kf406QevWW3Y+6w1Nz0AgIAAABoBXZMSU5LCifpEK7pdNBQAOBeq4pLjr2T1AwAAAASAAAAATBEAiBGLcXNEgVegrCW1sZHXCKrXE5qRt4+/1bTR5XaobJ4ngIgODjrsRqeSxVOzhVrROylS9ts0Bx/LcXEn7jOO87e4ygAAABoBVZPSVNFg+6gDYOPkt7E0UdWl7n001N7VuMAAAAIAAAAATBEAiBVQ2Ki5v2hv3BZ+RXqKNSNzJULkuzN6GX0Yaishb9X6gIgKz2v5fkjDMTsrxRr1Q1s596hJhoF6TNSfNag47P2ukYAAABnBEFDREP8ROxRyA41qHvCFAKZsWNuyD37BAAAABIAAAABMEQCIHjdMS8F+ZGdsS29ax5cubFmT73mS9y/skq1NnvEJudwAiAilNIS0uaB2HIwlz+/EGJ/o50+olWkg3rnnu0EJw0CAwAAAGcDVk9Dw7yetx917EOaa2yOi3Rvz1ti9wMAAAASAAAAATBFAiEAt4Cds7lyxnMtR+8/ZbmPPWe1lmzMS4Gl9ZRSiRNVUT4CIDS/yC2nkLmzOx3+krj+7ckdBjsjYBbIa0WBNKcR61wvAAAAZwNWUkX3IrAZEPk7hO2pyhKLnwWCGkHq4QAAABIAAAABMEUCIQC6ZAQkZi4f8/ukQPPCfAcFnEdYza9t7qg/9864jTYotwIgDfa9EiHAsX/6eJNIicbQic5X9+mAJQcCvJ7uN+7zUWcAAABpBXZVU0RDDEkGbAgI7oxnNVO3y9mbzJq/ET0AAAASAAAAATBFAiEA4rayjaUXuXvegOqQG4gvHSVGO9WsXgGjf+Czv+JszjgCIHDD6Zhiy0xQI95Pp1p4QXXsAZCkKQpkWERuTQQCvuLHAAAAaAR2VlNQukz+V0GzV/o3G1BuXbB3Sr/s+PwAAAASAAAAATBFAiEAw+N+859I8RDHAtwBpi2823e7v9LmuxWHdS2CqImCVL4CIAn9sv0/dhfBRGjOhn6kz1S/FXVN7mquCsRTbnm9YIavAAAAaQV2V0JUQ0suduu8nykj2D9fveaV2HM9saF7AAAAEgAAAAEwRQIhANWHLudPvTqAwhZjTzTE4AN5AwKs95+Ni/+cYQ7zTbAiAiA3Qeafp1vx0qkisN/8rB/DNKxovaiSkPRS5jsP3f3BrAAAAGUCVli/OLoqkLgl+6AvYEWaCX+yAhNGhwAAABIAAAABMEQCICsLsiPt1nlyrhETllSmLGXlkvbnISQBgHQNnTaF0T9VAiBNKlekw66qYpFvjAGCtOSiGzXLHbZAHJ4IMEAqbb8I4wAAAGcEV2FCaShr2hQTot+Bcx1JMM4vhio1pgn+AAAAEgAAAAEwRAIgZf9++09/+Qn1mTGwhStfxtwv7u2LW+NpFrss6kWQJmgCIGOMDcJeJ22lCbV0niV2IyKMOYBWVBoNWa06ddjQNAjgAAAAZgNXQUJLu8V68nATjvL/LFDb+taE6eDmBAAAABIAAAABMEQCIHAYGrC2SAkO+sry5WG9rXbseOp283WZ7kuGfGRWq7ovAiBWz423yqSVMe+lqauLlK/28adsyQPUonO6THsRPpns0QAAAGYDV0FLn2UT7SsN6JIY6X20pRFboEvkSfEAAAASAAAAATBEAiBiE6C9s/X8zneAEZXwHfGeH3L3mxynIBfy2hJf3ej5OAIgKcl4JaSqcWikZpA5JkdeKBR9gAGFMET/gOVweIUPEmwAAABmA1dUQ7fLHJbbayKw09lTbgEI0GK9SI90AAAAEgAAAAEwRAIgUPCznp/sd1EM9pKqfvVEdRtVhV1otlsLJQrmbmTUEfQCIFEAJiod0e+wsUEZwwpoInuWBWVlJenqM3uC+JKD7XEjAAAAaAVXQVZFUxz0WS6//XMMfcksG9/9/Due/PKaAAAAEgAAAAEwRAIgAOScnoCThnTNJaNGBFMr1YjcoAELrww55U5URITqZNYCIH/vK5Lklc1O6gn+fS705LxEI/xmM0Gik6culCXUGx5OAAAAZgNXQVg5uyWfZuHFnVq++IN1l5tNINmAIgAAAAgAAAABMEQCIE6xudydBHAeNCKL50atc/LqTtnrn+9Chxl7iG5yO7klAiAFUyLnMFFCkDFs9Ez10biJruBnqQLNo2swcojIqjewMwAAAGcDV0lOiZM4uE0lrFBaMyrc50AtaX2UdJQAAAAIAAAAATBFAiEAnF322Gm4l1c6z2TagrAtvyTFFi9rxJ517PWZ4JMCUUQCIESXah29eEtEyjFqxgYTwKbhAMV8uN3v0R4Kj+PrbVTaAAAAZgNXRUKED+dav63A8tVAN4KVcbJ4LpGc5AAAABIAAAABMEQCIHNIxCwMm3idfNxBfwQJuf4CyfzdCpbM3hoqLjoNp8IcAiANfEFMikZEaOsHLTFL2G5R9j5XPjh091ZIqqiiO+GG8gAAAGcDV0JBdJUbZ33jLVlu6FGiMzNpJuaizQkAAAAHAAAAATBFAiEAynlges3MlNJeJTDkYe6on84DtBQnwPuu0xTBjgIh0RMCIEtKq1f/paOSoHdUlf6v+T1xixzYel2Aa+MenkXY9H/yAAAAZwNXTUFoXtOQsWrJ35q5cHKUpCoQfPtirwAAABIAAAABMEUCIQDO+QBnhXvvzZxVWBGH0wTOY7WqWLxC6z2xzohIQzCYeAIge0ZluRxhiwohHGWvW9bG6LXBbqcd58vSmGdvexF57x4AAABnA1dNS7++UzLxctd4EbxsJyhE8+VKeyO7AAAAEgAAAAEwRQIhANrpI+1lK0xUcqghcCKg3XU4MeQTK3VZ5U0MTtOdsqigAiAZ3pxepeHUqzwforSXIhBEoF1XKxbB/mW7uds8kx0DrgAAAGcDV0NUagqX5H0VqtHRMqGseaSA4/IHkGMAAAASAAAAATBFAiEAxOAFJGAdrmTFztVi3EUxgvbOpXnXJE5hEOAkxM+GcLMCIEYhiOKSC/uW+54ErZnoVJTUDaTwQHMzm30XpVel8xZJAAAAZgNXUFJM9Ig4fwNf8Iw3FRVWLLpxL5AV1AAAABIAAAABMEQCIDqzL5qZIgcvuxk4EwdCirDXogsb8rleKEkzUwZmBmXcAiAzkbZBSnr+JcoseEw83THwSyNQi/X9OmO0cl8j4dh7OAAAAGgEV0VUSMAqqjmyI/6NCg5cTyfq2Qg8dWzCAAAAEgAAAAEwRQIhALR+6FUcFaLPaBxkllHph9flJ8SB0nw42h+XGoJCeSvTAiBpw/aIrFSToj2rV5jjybB0hHZQaeHUvhQyGq5NksuMvgAAAGcDV0dNIZgD0X8wZ+tT1SG6iUjSc09AL30AAAAEAAAAATBFAiEA6Zth0iUIP8MdNU6n6AzZD/WBHlh2ElYGE9VHjUy77TsCIAUVHauJJNOb2sB0weSWL9spRhZ8mmo1UHqmTnWiVShrAAAAaQVXSEFMRZNVNyOW4/ba8TNZt7YHozdMxjjgAAAABAAAAAEwRQIhAJ5IlVu8nlM+3RRmwD36IkE5DLmRPseFtTixWDemm6jEAiBNixe0PTH68XzTdy0t69VslTAdmnyoDdjwL4u+oHi4ZgAAAGgEV0hFTvT+lWA4gdDgeVT9dgXg6akW5CxEAAAAEgAAAAEwRQIhANBiLoP7xF8XxOG/lXdw8KFzuSn28nu51WUh0KY8ocTwAiBaDBmqMQbanGoS4CklnmPT0mjW4A9KXqSb8PCISq76cgAAAGgFV0hJVEVfDmKLaTAY9jnRDkpPWb1NiytrRAAAABIAAAABMEQCIG0ID9qfl8fv0agUx0CiMbYBjSkcYQgqGVn9GZEnJIb5AiAwJ3oOzBRmNi3FTIsBoVRa8bqzXKfZ23DqrGUSxsod1QAAAGcDV0hP6TPAzZeEQU1fJ4wRSQT1qEs5aRkAAAASAAAAATBFAiEA5gORvL34hZTjEEjhsmJZyHrwvxW5/rRx94ZG7QIEecYCIF9teKGTdqtPM/RRwMC9x3tFIvnkJ1ZK+sj/SXF8F6+ZAAAAZwNXaUNeSr5kGWUMqDnOW7fbQiuIGmBkuwAAABIAAAABMEUCIQDi7TaFdQrBoLfdmM74ZC8js4ObtlYETITd8saXJKwjngIgEmgN2NPC94TT45sW9lt/KvhtAa05LzZibSIl2c6RlLEAAABnA1dJQj8X3UdvrwpIVVcvC27VEV2buiKtAAAACQAAAAEwRQIhAMMfDywYbjwoafjfsEIu9FqA/9vlgBEXYqaxCUVqE5YdAiB991QN3RUhxuqTQuFgNngc0QvmkmtVQdP0CPX7tsUtxAAAAGYDV0JYu5fjgfHR6U/6KlhE9odeYUaYEAkAAAASAAAAATBEAiAq7skP473wg+6A0aKFKS9HUsiB7t/clGyOw0m8B0BXYwIgL09/25eEymnRlJ89KTQw67Mr4wxG4wNKt+TaBisQEmYAAABmA1dJQ2LNB9QU7FC2jH7KqGOiPTRPLQYvAAAAAAAAAAEwRAIgOSSZ6Pf9XAarW1WCT4HgSSgh7YR0CmOAP7FT3eidneoCIEZwHbEiCSY6l1J19hRQ3kLiYn9NmZph8IXdys7Y12N6AAAAaARXSUxE08AHcrJNmXqBIknKY3qSHoE1dwEAAAASAAAAATBFAiEAqdPDRjTfwh+0671n3GeNeWx+3H5Jlm8d0RBa0i+nMqICIDmf9BBN+tBOEy5X8npRnyBObAgz6PAKnVDYm+YhMltfAAAAZwRXRE5UGDQzy7X0tSr/FQn3hkyi925NhTUAAAASAAAAATBEAiBRSqionN40NL8hfg84M97j8FUySetI5+iRijNRghTFDAIgfVvbksCY/bL/AdHmtzvTTChemhyShiLihwIeT0I4oMQAAABpBVdJTkdTZnCIshLOPQahtVOnIh4f0ZAA2a8AAAASAAAAATBFAiEA0D0DuN22m9HPm15acNivNIZIbC406l2pLsAseS7cqvICIH/O8tkhbnWm0oTjjURv0GAUHtJ7Ga8arFcKLdC8O7lDAAAAZgNXWFSgISBpbHuP4WwJx0nkWYgZsrDpFQAAABIAAAABMEQCIE40lJqHxgNU+K8KJnnrsfF71SKCqHaMSsJXjDkVdg3OAiAkjDOb6gh7RGRWIrcgpplrjPA0rIf4pMLSeQSdyN5WeAAAAGcEV0lTRWag9nZHnO4dc3Pz3C4pUneL/1vWAAAAEgAAAAEwRAIgUT+QqQg414bN6IGJujiEhS6awWvOuc/wlliP+3AvayUCIARX/wqOzmfdct/wTIT5zFM2qR0Mi1sFWfOvQ7OqQP+8AAAAZwRXT0xLcoeB51c13Ali3zpR1+9H55inEH4AAAASAAAAATBEAiAsMs1xZvLi7eNP6paSmGHgpvEPICDWevdY8q8uPEbgUAIgH2K28mDF06/8wOANEnPM14Dx27yNMtYgXKe3lx44GYYAAABnBFdPTEv2tVrLvEn0UkqkjRkoGpp3xU3hDwAAABIAAAABMEQCICaRi89drQYW38BT0tf4uXr+oMH/7VLnCj3Kr5pbjH69AiAFj4HJTn3oKIGA9BuTzv6Jlu2Qq1Vq+lIXn7MP8dgAfgAAAGYDV09NvTVqOb/yytqOkkhTLdh5FHIhz3YAAAASAAAAATBEAiBN3dWLX6RuTj89UxZSpgO10FxBIWIa7kowOFYIAzAPgQIgQ5rkzdeHat2k2gWsMj6ew3ZsLsjZhuERfO4TKk+63zgAAABnA1dPTamCsuGekLLZ95SOnBtl0RnxzojWAAAAEgAAAAEwRQIhAMS+s2ZzJr4oT+8ZgedG+Nu2OE4Jkw10wWb/f6hwtxf9AiBdDSOPNmpgg34OBsHKKCGI9Zg5z78qK9+hoA4VcyL+FgAAAGcDV05L1zpmuPsmvosKzXxSvTJQVKx9RosAAAASAAAAATBFAiEA22LV19KYSXPEbUJNe1XFldf7+o3XcHQb8TDs1ICzqUYCIEgN3/zr5pKyWinW5hkZCt1Pf4nFrB2QiOaqbAiK68e1AAAAaAVXb29ua1o4brD8v+4/DXWeJjBTwJFi/xAtAAAAEgAAAAEwRAIgXrs0Azg+2R/qsc86v4vKoeeN/CGMRx1jJMtcyQ9ka4QCIFbDl9OR8ak+RkIjN9BZb3PXZlUmVWyUjod6VzlxqTg0AAAAZwNXT09GkZN6dQiGD4dsnAoqYX59npRdSwAAABIAAAABMEUCIQCPmvmHOtUlTum/hEbCd1CFlpeFmrlKnGMU8b8fpU4DQAIgSbGR4Pgbm2TG6FNfUsZAUR07Vmd2yIvyAy0tRszGHBYAAABnBFdBVFSCmkyhMDOD8Qgrax+5NxFuSztWBQAAABIAAAABMEQCIEPe86CsVJg1uk682+B/poyX75wq/EViViYxZ/kawdKWAiBNWl7CVtXZrO5B8qG1bYi6uoqLBMmIFo2+pnlaeKfrugAAAGYDV1JLcejXT/HJI+Np0OcN+wmGZinE3TUAAAASAAAAATBEAiAb9xnrrMFvEW4cOn8WLDxDwpiIMYHOp/vkAkTUFotncwIgWl365m5vFedaRizgYwbimrOPJ0PBXbqmfGHTt2tPqyoAAABmA1dSQ3KtrbRHeE3Xqx9HJGd1D8SF5MstAAAABgAAAAEwRAIgIHrT8wa27ZH6eottSKhG/9N4qqQA7i2nuEIg+D4B08MCIF8N1FEuhyGujbohvUQrhIcWRAi8nDv1QzonfE2ad3LuAAAAaAV3REdMRBIxUUAgdvyBm3VkUQmJ5HXJzZPKAAAACAAAAAEwRAIgTKh2fROR0x0UF1OTxEEHXvb63diAWMDcUoOcCBuHOvwCIB6LBm3/Y1tLo+YKlIieqW1OSfAqyuqP4lg/n/4aUZ8HAAAAaARXQlRDImD6xeVUKnc6pE+8/t98GTvCxZkAAAAIAAAAATBFAiEA1zOz0bxJoFaY4U2IaYNM8ZEb74nNmOqNOPfDcrgaAHsCIG+0Pe3cdQi1Z/Mwuiku2hKZQQk1Q0y5eV/sJuoVYN0sAAAAZwRXSUxDyYqRDt5S59UwhSWEXxnhdHDbzPcAAAAIAAAAATBEAiBVpIyJfGjrB4vw/o4xCxYL/RqDsv1QMpegBezNYBKxVAIgV1bsNPpIbm6v/siwv6AW+bQrbZtR5tkJWhbhEomLmBQAAABpBndMT1RUTzdgXu81T6jRzKe5I9p+RRJpx0+8AAAAEgAAAAEwRAIgIGylrWowlvhAP5RA3TUmODHiAbfEE8pRlb9MQuRD1iACIHDHiN5hp+Mc9m1f98ykH8EF+/3KXVrExkwXNKQzCG4vAAAAZwRMVU5B0od3AmdebOuXW0od/5+3uvTJHqkAAAASAAAAATBEAiA+ySrdPErKSRYJ1S2nQQqmzgZ5y3yxp6mMGhnPJSZQQQIgUsCvhcqy/ccHlA2OOnxvJINYmtvall1wDXWT36nYfdcAAABnA01JUgmj7K+oFyaPd74SgxdrlGxP8uYIAAAAEgAAAAEwRQIhAMeXOVFqjHZuO4JaP2Fg5NULAN22C12d017at91fBuTYAiBl9rvu+yxZyVMb7hDqyjqtEJJoHiep4jgvQI6TFl7lNQAAAGcEd05YTQ1DjztRdb68JivyN1PB5T0DQyveAAAAEgAAAAEwRAIgezayaIAHdnkFDv+b6gPgmhvJwxQBbsjFKvL2HNiyQoICIDseR6tMthIueiJM6kgGBSMdGlyru6cqSYqNdEcjrgxYAAAAZwNVU1SkfIvzf5Kr7UoSa9qAent0mGYazQAAABIAAAABMEUCIQCJ0zNLEHQMWNZqYyWcYrjJRYKTybgSj0kEYP7iDvMJbQIgSQC1zXnngZyiLBbxhuyg35v5CAUs0+Cjo+L4y+Cl9n8AAABnA1dUVIQRnLM+j1kNdcLW6k5rB0GnSU7aAAAAAAAAAAEwRQIhAPRNubhSxzDkpKuWblKeJTph8oEPI2yDuTLk+Tz/y5M9AiAvgtzcL/9Dlu80L787A/xZGWxrKCSEQZ5WzC6Bq+9vcQAAAGcDV1lT2JUP3qoQMEt6f9A6L8Zrw588cRoAAAASAAAAATBFAiEAnqbmCWLsDieGgCKC6s4IYHl0cITPrpSihBQGnQA1S9gCIGJ2706MlBLztoQgGlMoNWhkWqnDZhaVuJQ3BKw2e16kAAAAZwNXWVYFYBfFWueuMtEq73xnnfg6hcp1/wAAABIAAAABMEUCIQCf9h7+76/iBTH7D7+cFK27Y3OZ6C9jlb23LHwyvDXn3QIgMqJae2BzjcEw00z3veZbHHwJ0EmAiUeyr9to4R1qi80AAABnA1g4WJEN/BjW6j1qcSSm+LVFjygQYPpMAAAAEgAAAAEwRQIhAJkEfIN0M+PR1db3zzdoo2Ls4eM3hg9QHp/yRMFYgpusAiByBwusmpMUegt6PxBhHeNujSYY+zvRl1iDYt5YFCuUjAAAAGgEWEFVUk34EvYGTe8eXgKfHKhYd3zJjS2BAAAACAAAAAEwRQIhANVB7hkAc5mzT7Q+SKpPVOdDwzrtBUe3JqyN+Rj4r03GAiAt+3Z0etZkhUgo2msKaSxa5Rnc7dHYiYg+MbOLbZvmxAAAAGcEeEJUQ+y/VmlEJQ3eiDIlgQJOYRQZcV96AAAACQAAAAEwRAIgEKBZ3EoPxZlDaCY/MX+0TMNR9STuRac+ilBRKEUqfrkCIEIcQxU9LGBcy6BIEOAEnd85+95yNJWJkkYZQmC/7849AAAAZwRYTEFCjE5/gU1A+JKfkRLF0JAW+SPTRHIAAAASAAAAATBEAiAKAdl7WiPc0ayC7xOYUuNdYbzaZP4ruWvdVmux6sZmcQIgaevldZPkF7zJBhz5yiyWNcGXKiTQ98dckCX2QFgHHO4AAABmA1hDVNK7Fs84yghsq1Eo1cJd6Ud+vVlrAAAAEgAAAAEwRAIgdeTVyVtSyQd/4XZi+ytXFAIUEbcSBS2afGV6+YIO7OYCIBV2bD6jeZT6uxIQNkmbM+SvFvAChW/Yr9kyqR7UM/VMAAAAaARYRU5E5M/p6qjNsJQqgLe8aP2KsPbUSQMAAAASAAAAATBFAiEA0U0ywkqsuN/acveuH3MB3O2Lpx/p4Z76KbwPJQOi4PMCIClfr2rwn+llkz8Ly2NNVFIvmIPSZAWQnWzbhYZPILJdAAAAZwNYTk6rlekVwSP97VvftjJeNe9VFfHqaQAAABIAAAABMEUCIQDAFHNG4Je0DWu9eIFQ+yDxoxA6enq+v2N4RrQRP9jr2gIgZ5x5q2+rsfUQyg7pHnymAUDkZmMgf16mxCs1r+zPf3MAAABmA1hTVFvJAcvr77A6VtReV+TzVtxNswq1AAAAEgAAAAEwRAIgR5ciJ4sT+teoChXJaQzAEamBnoLZE+JzTrrxpH1LVpsCIFoG7MzassTSvqZMgtf4ncw5+knAkTzQ7+eCpzhMEs2cAAAAZgNYR01TPvCYSy+qInrMYgxnzOEqo5zYzQAAAAgAAAABMEQCICkSMtAIIm6OeNmxybUaJHHP29XCaTQ6u+a5TTAHLnxXAiAbwN/Z2jEkT0uDSDAoO2bDDJiYXh1Zyx+FekjUpGT+KQAAAGYDWEdUMPSj4Kt6dnM9i2C4ndk8PQtMni8AAAASAAAAATBEAiAmBiq/Bd/fZZaotdxQS26IM3gCViwX0fzF4cEWB46AEgIgZMHpUag3o5GjoHljfdjbtv5LGZNHs6vW1n391SRULRsAAABnBHhIRFhvy2QISZp8DyQuMtd+tR/6HdKKfgAAAAwAAAABMEQCIF8bncaFt5dMZZu6xOk4EJaGxzEBER/BlLM0lspUuhDuAiBYIY6Nb0KdTW8HeZEAoP/oQhaeXeE9sLkM9bYO7b2/gQAAAGYDWElEsRDsex3Lj6uN7b8o9TvGPqW+3YQAAAAIAAAAATBEAiAWA55jr8PwHl5kP/56mZLRrpUfVYML4sJ5buB0YH95wQIgbGIMReBIXYENOVztTIL9px+RZwK06t9WgI8GfaHNCygAAABoBFhEQ0VBqxtvy7L6nc7YGsvewT6mMV8r8gAAABIAAAABMEUCIQCi5Ow2qZHGBzobMv/P+B2gc5nv19aeH270KK8ewldC+wIgKKLIZDps2TKFXtOsTNz4cdWqDMckla+5FgOXn8XqzxEAAABmA1hJTw9/lhZIrm20PHVmOsflQU63m1cEAAAAEgAAAAEwRAIgUv5HZr2S5JtF5MRhzJNDEzLtM3LynQ9OyaTFNMx/2xACIDQ2cfovSAM3+09izN+WVjcXo3tTR+sWKyFIa7TZVxu1AAAAZgNYTVgPjEW4lnhKHkCFJrkwBRnvhmAgnAAAAAgAAAABMEQCIBEy0alqObOHujx0HnbgxPKMrAcNmof5+2p1uYnBdkaYAiBBwRDQGFlVKIOAhth/P4KrCxWVIRsnN0KoxoVcz4VQDQAAAGcEWE1DVEREn6TWB/gH0e1Kaa2UKXFyg5HIAAAAEgAAAAEwRAIgL1abogm3F9sEd7c9/SRyXmU5ehCTDZ2elTafm44fEd0CIDi56Ieh7b65KyI68t09ZQJT/794gco3cXh6EKOobBlJAAAAaARYTU9OOq2j4hOr+FKWBpJNjRxVy9xwv3QAAAASAAAAATBFAiEAredTW1A2Fs1WqzpT7uVFuxXAcn7JtEfEZ54HgywXOb0CIDmFNTDfiUiGf21ur5JO9gQu5eMZ+D9RuJjPflQd7FOmAAAAZQNYTlRXLm8xgFa6DF1HpCJlMROEPSUGkQAAAAAAAAABMEMCIDKS0IXlMWWRd2IXpQEiGzoa6OBVj75QfDjEy8SbwRDBAh87zg9VVtfwIDpUTQph/5n42BUcTs+/oZPBdQ4xdsw/AAAAZgNYT1YVPtnMG3kpedK94Lv0XMKn5Dal+QAAABIAAAABMEQCIDkn/51R0rr6YqMQ0wci1EQyR0lUL+nI6AOq7zah/7sTAiAcK5vX43JGYB0SkImyRYNoB7a6cSqyNrCUAA6oQs1QnQAAAGcDWFBBkFKK6zorc2t4D9G2xHi7fh1kMXAAAAASAAAAATBFAiEAnYeAeqOO0CL6e2GyUIzorVOC+9+CG5Za0BEZwRBQDn8CIHGNpmS0pNTl4FA9O0TcTYsOv86tKe98W0HQjlAeGT/UAAAAZwNYUkyyR1S+eSgVU9wa3BYN31zZt0NhpAAAAAkAAAABMEUCIQC0ftH1bsrGb8f046pHdFDWgztlTSWkhEzH+lSj0/joQgIgL2dUjgBH2GOCnA5XgZ0InNuBwY9yiBCgsyFb458kDpsAAABqB1hSUEJFQVKU/Fk0z1lw6USmfegG7rWktJPG5gAAABIAAAABMEQCICVehDbauZM/czDr29VVPDFCqoSVM2Pn7NP/eNMLZAevAiAyTPTRZBzS0F14kbJ9I/B8MA0mxMsMQWwhgEzi7/BKUAAAAGoHWFJQQlVMTCfBuk+FuNwcFQFXgWYjps6At/GHAAAAEgAAAAEwRAIgXoMiuZn1MtvDGyIACZlWXXC3VI7uNJfmjoVbZ4QSxfMCID+tWtrt5zOwYvA4IHUvKSBLjKmflcizQVRFOOoebX2wAAAAbAhYUlBIRURHRVW1TY+xZA0TIdUWRZDnsCC6Q97yAAAAEgAAAAEwRQIhAPWY+r5GGN0HlHsZhWc4ExIrC235vDUYc+DkAskdUXEJAiBQgyfrnYF3IhyinSd2qXtJAdR0ptwEoD0MnOLev+9PtQAAAGcDWFNDD1E/+0km/4LX9goFBpBHrKKVxBMAAAASAAAAATBFAiEA1jUdYfU75KhMaptQIoIEW9Bh6hrlJ8Rcg31mzhOa/wgCIAGSGlPED8dbuX/4JceKKJffv8YyVV1bibvHo1SSFDvlAAAAaARYU0dEcOjec85TjaK+7TXRQYf2lZqOypYAAAAGAAAAATBFAiEA6Gz/ZzRx2+TI+dxQdPQCHp1EfZuPTvEJPRGwNY29nssCIFdM3YMMJopSWAijcek5F8ZBOPw8T/91PR8TGmqG8fcCAAAAZgNYVFgYIhJv7ttMfWHuzb42gv5h6ROD1gAAABIAAAABMEQCIDT//DYiMYYOr0EWISYd/5JnwClYbQX8Gi8Hlp0Yo87mAiA1vzL5WM37qhFGBcjTa2GxFtASPPHjIhiodGh92V6K7wAAAGYDWFRLfz7c3RgNvkgZvZj+6JKbXO2zresAAAASAAAAATBEAiA9e4fltSmW628n2HCBKuI9Q3j/Ds0ktsCBUHj0FKyKLgIgPfJ9Iebf8f0b17GQ9dHkxDH6LE8AaUJFj23kTW+VurcAAABrB1hUWkJFQVK8QdBSh0mN7FgSlWDea9G41OOsHQAAABIAAAABMEUCIQCgbb3syCOLIBz6F2derZVyIK63iUvCkFIHMZCzzjlYuQIgA4Ycm6tsijwXTQ+xB1IZ1jW7Pvbx95dLXwDzwhJdDHEAAABqB1hUWkJVTEyK8XpjlsjzFfa228aqaGyF+bPlVAAAABIAAAABMEQCIAaLEklJfhC0VLAY2TAUaiBa+XKoWauR14cwJIA6OIhuAiBJFSkx0Y8hJuycQ3IKKZVmQ6F0mrxLX1OZle3jM4dGWwAAAGYDWFlPVSlvafQOptIOR4UzwVprCLZU51gAAAASAAAAATBEAiAUXVr3+2JgkLCZhl9fwRFwzKUVEDR826FEAHVe0E/r5wIgHDYe4PvoZ740+PKZGNChYlKLz7ZYPkQDN/nFBheJeNgAAABmA1lBTQ4imOOzOQ47lFpUVvv1nsw/VdoWAAAAEgAAAAEwRAIgSVb3vWqU2anAdPkaXKVLKg6VFAndu54rPhgBPtOQosYCIERenHgEjKwQreay2HUCn2iZvOi7yCMx6sEvniM7wRozAAAAaAVZQU12MquoysaGa4OuTuyX3QftJUKC9q2KAAAAGAAAAAEwRAIgeTZE6hWTXiC69cbFPEJJGeD5iHERONNdan4ZmDnMp7ACIHMpN8WIozZS/WLOGsYjrUiHRvbi7G1ka1rkzTBKmykdAAAAZgNZTk4bx8HeCsbvT97DXAUwMNkM9Ux+mgAAABIAAAABMEQCICteXk9c4KOYHSDPEmMIlvUnqL6NRTCbKZM9bDeDFBM+AiA1inkR5VZqfKCUGjspBu9f+Sur7+gJrAvZDmKdLY+cXgAAAGYDWUZJC8UpwAxkAa720iC+jG6hZn9q2T4AAAASAAAAATBEAiA1n+EQ/tsk6wbLupUBdp3PTgQsR14tXZ5esU/obB+tUgIgKNAqf4YfHx4c8OPGphv5P6vtn2P4ErC65LBSlU+bGaIAAABpBWN5REFJjllUcO10m4XG92ad6D6uMEwuxo8AAAAIAAAAATBFAiEApeAI6Ui4neOrDnE823PSnWDLJLFm9gxz0txEoAqhTigCIEAfsMRIQ5/OgILBPJCysfNRBMq4UW8rOwTk4FUBBhCqAAAAZwR5REFJrNQ+Yn5kNV8YYc7G06ZoizGm+VIAAAASAAAAATBEAiAedOgB91Tl1hsWhvARRRE3AyrPvBNV/2ypqocXDnKXbAIgIMuuJZY+9gzXhKcUhhXIyP2n2S7W9DCQDb5C4GeFItoAAABnBFlFVEm0vr009tqv2Aj3PeDRAjWpL7tsPQAAABIAAAABMEQCIDx7/eFqv6UMWlYHDMLD1Eyl5es2LL9R3i5NLGHQrZTOAiAkK8MjBQv2sWNBslKLa+QyRZfVYM1qJfzGYtQifGJz+wAAAGkGY3lVU0RUSHWfIg7Zg9tR+nqMDSqrjzzkFmoAAAAIAAAAATBEAiBDav/KhuIbsmt1wDhzeLGdO43a8k56q/FL5d+EtzewIAIgYcO4wDTKLP9RsTxhiaWV/Gakb8yHCOgtnCYaGNSs2Q0AAABqBmN5VVNEQ3brL+KLNrPul/OtrgxpYG7tsqN8AAAACAAAAAEwRQIhAMA1V220w9QzCkb4jb3qNRxUd4v1lfRhf4Oub9Yg+MTKAiAJXjbiXHzdKiCBhrV9aN9L6IyEHf2Tm8+QHV1vAcW86AAAAGcDWUVFkiEF+tgVP1Frz7gp9W3Al6Dh1wUAAAASAAAAATBFAiEAkIxzoUobSAv6Wd1HqgdkIo0oTDQfb1hlwQ/U75baEcMCIAOYlWbXYKva42TfM1aRQ3bS7r37GvlV+J42kyENpPtIAAAAZwRZRUxERoqzsfY6HBSzYbw2fDzJIndYjaEAAAASAAAAATBEAiBlV7dyMuRCbBTdnt7s6tCbqYbw71ipmP5XRm3Kv0AE4gIgN8VllNInizMpp0Sp09zc2BPTql5sWTd2wnA5GEXe1tgAAABqBllmLURBSfTNPT/ajX/WxaUAID44ZApwv5V3AAAAEgAAAAEwRQIhAMJiK0TuN0CJLdegBF6qHx8SHr3Dswy4i8ljqbl8pbVaAiAx3VehZ0aDQ+I4Gika6y+EzA5zilK055O3kP5lRQw+/gAAAGcEWUZJMwmEO5E3/Fk1t/ODIVL5B0210tHuAAAAEgAAAAEwRAIgbtRsJoZKjzDMlKENf4CUHkXUR/bKcz1teHSZR67GeF8CICzzc7eheQbeCPgBXrkDieZ/6ygHD0RK3crnYFQuBn/oAAAAaARZRklJodDiFaI9cDCEL8Z85YKmr6PMq4MAAAASAAAAATBFAiEAmGZibgmVm+x7hz4QUTInEvuWi7nhbajmh3LeJvYgGOoCIEBLF4297KwkDAxFlUjfZtkLzEIXlBmfe+oWQ06k/WMhAAAAaQVZZmlsZM7COH4E+YFb8SZw2/bPA7uibfJfAAAAEgAAAAEwRQIhALuMZE4rrlXHjb57Tz6QzU3O0bG7xSz9JaQ0rnPBj0NuAiAMxOxeJlC7lifFUwH5V9hCAWeppP/9BgwI/yJMVZ7LWwAAAGYDWUZMKMt+hB7peUeoawb6QJDIRR9kwL4AAAASAAAAATBEAiAwPNaW4oFbNl/3ptybW8RiM7GbMUhkUd+kW28cct63/QIgODthCiCPmKaRUtD1X3MqCxF/ermSe2yDR6S+8EbLKVwAAABoBVlGUFJPD9xTEzM1M8wMAMInkr/3OD0wVfIAAAASAAAAATBEAiAvN0BsEoAuMi0V0F3ju1N9uxsMP9GE3hpEWQQVpdXijwIgOHWPwptRIQn6hVfgc2cJb7mB8/5t1DF8loJbfGlQkz4AAABnA1lGVkXyS67vJou21jruUSkBXWlwK836AAAAEgAAAAEwRQIhAIezHLBAq0rgSp0o7DO4fkNN9DYtQ/cFdzy8bMqYz0c2AiAskJzKgqDNZgcIEB3iL9Kv7JATso7jwD8zeGgsr+PwLgAAAGgEWUVFRMonlvn2HceyOKqwQ5ceScYWTfN1AAAAEgAAAAEwRQIhAMigEGhh/IVMQ1DshsPkTZOi4Nah0TCj/UmnueRYOk7jAiBHn1PCUPj3qMNjybfMQvlPGSZ50pNILnatZXJOlceBegAAAGcDWUxE+UtcVlHIiNkoQ5q2UUuTlE7ub0gAAAASAAAAATBFAiEAjxzSivkJrAPJV0LPFZX1Ju+mwjMtSGQGsvK1AcHgTsICID6fxxzKWHv6ggi0e/hfpX7CzIxdZGoHpZXGJjK0rMYvAAAAZwNZTER/kn+YQXcyPErEnmsdOY5AzRp49gAAAAIAAAABMEUCIQC74oZrBiBGwvrgl7b0PEE1YOfjC4IBf6F5CTa7Aob/vAIgWBBwSBUQyMjEDFh/LFL43w4Ga/1Cy2OePoO1z2zilSEAAABnBFNBRkUaphwZbnaAX8vjlOoA5P/O0k/EaQAAABIAAAABMEQCICwnFZcoy4P34Z2E/ugMRhMiJTpwnRqv+POi88oNynsBAiATUSxVMu3pzugWm+Hd4e3x5lBt2qCcOxrq9Vi7h+FE+wAAAGgEWU9VQz03FBPdVInzoEwHwMLONpwgmGzrAAAACgAAAAEwRQIhANBZVMEPv1iSDbISMu3n6/VMgAP1jRj0wVxrfz0BDzBiAiBTw/OzQNMGx3rNHp00mOK7qkcKBZa+YpT/gbTIL+lt0wAAAGgFWU9ZT1fL6uxplDGFf9tNN63bvcIOEy1JAwAAABIAAAABMEQCIFHli8aVeW35q14yl8MnlZGwnWesvH5HF5O3VTnTSX/hAiAHYIph5VyEBrJJF6n/7Ldquw7hvYxmOxliNC0hkXVcrgAAAGYDWUNDN+EWAYT33SnwC3jAUL8TIkeAsLAAAAAIAAAAATBEAiAF/TAM+VgUs8Qy78AAXS3dLZ/4h0ZpN7TL5kNj2qKoYgIgVekQthAJAoc3H4dWl/LkpUozObHwREJipbTsoZMW9RoAAABnBFlVTUklhZdD7QhhZlYRuB5HaC6Im0gxOwAAAAQAAAABMEQCIF0/a5Re3tkf+2uxmuufBe6f23Q62QGEoWTGVrvB9U3ZAiBd46bQwomgRUWTmQyJOR+NDhk6bkWebVbtz7Ar9j8P3AAAAGcDWVVQ2aEs3gOoboAElkaYWN6FgdOlNT0AAAASAAAAATBFAiEAlvcGYVP2EygSge7A0YDDyAypPf/20YzM66SEVi276jgCIE+l1JoPjDTKfSddh8BFQ+8S9vrMkpHC8UM0Fk//8NDIAAAAaQVZVVBJRQ8zuyCigqdknHs6/2RPCEqTSOkzAAAAEgAAAAEwRQIhAP4Xl+szdz7ioT/Jn+hF5Wwkfn0G6i7ub90UmBzj0Eh/AiAbXrsJ2SkDeYph7D1PbnVRMSZxwQhG+G59EVr1NpsZYQAAAGcDWkFQZ4Gg+Ex+noRty4Sppb1JMzBnsQQAAAASAAAAATBFAiEA9/PWvuQC5KRKGhtS/1CCmZu1x0y4PuXm9XQHaqTdBQICIHHE5VlDAN9m0X1dhEr/Veu4P7RRSax4umGp4ZVGKsjYAAAAZQJaQr0HkzMun7hEpSogWiM+8npbNLknAAAAEgAAAAEwRAIgDhpVTO2ahYmI6geIEC4luLqC+UAu+M6KBh62rqk/eAACIDSOTR3JegnObaTF/r0P7kKoN6pu2o6BGXv5goUguVwRAAAAZwNaQ08gCOMFe9c04QrRPJ6uRf8TKrwXIgAAAAgAAAABMEUCIQDmp6s0ELYH4dNHmQMa9u1TqOLvkXA2VkgQlG4zxpeDMwIgVbomgngmnPme/0FgQ+PEyUzDsWTBiKnqT4z6dBW8iBUAAABnBFpERVhRUJVuCCx0jKg3pd+gp8EMpGl/nAAAABIAAAABMEQCIFOhbIKMS67UTqWOr2KIb7KyNqDVEnbT9enVFmVdiimGAiBH7wcV6DR5QF5VmtFDrgSEF3QMn03yoOnr5npIt9faEQAAAGYDWkNYxSwyYzHpzkHwRITTteVkgVgCiAQAAAASAAAAATBEAiBeSeAO90lCwK/uPK5ttmdPr9BaWVKaMYz2Stqwreg3wQIgCvXhRV1iOEKZSAm6s9CUR+1h7MEgZnvtty1tMXi5NzEAAABnBFpFT07luCbKLKAvCcFyXpvZjZqIdMMFMgAAABIAAAABMEQCIEK14+kwXn2bk1sT/2fCBBrZAVAcPbDLo52DPplkGRm9AiAbROTGIQJl/sVl+U95/kS3whDtNlvOeAOqba+1MEPskgAAAGgEWkVST/CTkBGpu5XDt5Hwy1Rjd+0mk6V0AAAAEgAAAAEwRQIhANGuQ/IoWh5IEiDq+AI/2EUcfHm38OQqkTnLfCZTSN3uAiBKbYVt7DfKz0ylOMFp+ufGEHJEn4r056I89YZlk3sGtgAAAGcDWkFJnRIzzEZ5XpQCn9qBqq3BRV1RDxUAAAASAAAAATBFAiEA65WYr2ut4Gvxd88iu27NTt/uwWSBCWmRDQp/ibqXkyQCIAPVy+NunzZh9wA3ziq+4lp+50FAXQzzK+4suNcAOe0rAAAAZwNaU1TjhrE57TcVyksY/VJnG9zqHN/ksQAAAAgAAAABMEUCIQCUlH8kz0JXiUDPH4afZbtOs4hub4PlRBOkdXCGmVAqbQIgLDcxvsHJurjVGjhz7C+Zre4+xjIPc6/jA1Bm3IADAfMAAABoBFpFVVPn5CebgNMZ7eKImFUTWiICG68JBwAAABIAAAABMEUCIQC/CvRHfKQr/ZVw5FxqOtucCBTV0vr0MfZKDDxLqKSJgwIgXriYekjskzXz95xPmjotxBps6FnmfL4S6A7oHBHcRI0AAABmA1pTQ3pB4FF6XspP28f766TUxHuf9txjAAAAEgAAAAEwRAIgITSU6OXj+q0IRYBJeP0AmzB1M6DakC650yVnSs7OlmQCICvZBFMn3oth0fZMCRaaSY4pKPhHEh+sXPw0alv596xYAAAAZgNaTEH9iXHV6OF0DOLQqECV/KTecp0MFgAAABIAAAABMEQCIDHWqa9hMuaKqINVTwQ1nPebMCrcpP4Q5wkz3OAPT6iMAiBZocjP5OOrn0g3671u0ZpBpg2FzVlKfZa1XWBspW0W+wAAAGcDWklMBfSkLiUfLVK47RXp/tqs/O8frScAAAAMAAAAATBFAiEAldmJSyiUY/nPy6w35FM4a/gyVkIiarVO+zYJ5gY6ArMCIHG+XMpjPLS+3uMbxwEqwQzdWYcSw2qwFaoSbCpeQFskAAAAaARaSU5DSqxGHIar+nHp0A2aLN6NdOThruoAAAASAAAAATBFAiEApdS5XEcA92mTzR3HwZXzv7u2TRUuntZ39LBvIGxeYosCIH3Uob6Wl3pgbQjt8W7g6aylkqIvIf4/0PESbve5y/ZxAAAAaARaSVBDjvm4mNtWPTxhdcLN385QJ8NjgPwAAAASAAAAATBFAiEAk5WOWYqn6Upl9ugQM9qJj1QbEZgLjeUq5It+d2Yah4ECIDGv3Kf3azi3fX6+TgLhm5WNsMZzn86a/Id+G2pmJmasAAAAZgNaSVCp0pJ9OgQwngCLavbi4oKuKVLn/QAAABIAAAABMEQCIFrjRUcJuQIHVFaoXl4H45H+xpAQR0dP59rE0cgeJD2LAiBG8XPhpPlZF5rul8kHGvwWjez1ABvs+YEgXt9p7083iQAAAGcEWklQVO3XyU/XtJcbkW0VBnvEVLnhutmAAAAAEgAAAAEwRAIgNOuACl6K9AErak4ESKFwufb/bHAs4/Eu4Kjp/I1k/XUCIFaie3Rflcx4LCtrOcei3nJjG1MhRKsXrOI7mg/WpRmcAAAAZwNaSVjzwJLKjNbT1MoATcHQ8f6MyrU1mQAAABIAAAABMEUCIQDaPa18TNzuG3er6ueYZ7+fqsgB61AujGp9mY7lf2GrGgIgdaenVAVDmm66j8iD3nVMDT0D9FkBfcsxboSJm4sHbcYAAABmA1pLU+SBWuU7Ek5yY/CNzbu3V9Qe1ljGAAAAEgAAAAEwRAIgERKrM8sn7DlVtSHTF0oHUyxLFl67KHbZIqyGVXPNDCsCIATpK+sqMOhQAM6r9I2cPFI/VtYoLEL3obWvSXlXD2pSAAAAZwR6TE9UqOetd8YO5vMLrFTi58Bhe9e1oD4AAAASAAAAATBEAiBlsRteXxbEhB+CkUkFGgpxJRzxvOcwCaD7xBQXnfX/CQIgDEM4IwvG5/Wcmt54spl7GxeFIDw4YPqhNf0jLWwtKAoAAABmA1pNTlVP/Hf0JRqfs8DjWQpqIF+NTgZ9AAAAEgAAAAEwRAIgBNoDZmnRsaMLwvFISOqVX6YtWCsFD24Fu8oTigpi4mECIEaEHYdrcAuBOSulIKxtwtDlQ8gOmKcvyKOVdoouFTAUAAAAZwNaT01COC8558nxrdX6XwxuJKpi9QvjswAAABIAAAABMEUCIQDtxpvGOA5UNQaqOyBU8xNdO7mDM5mfKzw4OOd6p6QLgwIgbQCzUaGwhxw35sUBS4QTaZ37JDEdLcrLmVvQJeDgS/kAAABoBFpPUkHY4/s7COupgvJ1SYjXDVftwAVa5gAAAAkAAAABMEUCIQDmCJzCkn1x1ZoeH+S/OBDhxe8jUd5RzG8iT3OmGVkXWgIgOZAid3Nsg4zQEi9DFmK1Z2tumgnVD+Inz9S2IoSWH9cAAABmA1pQUrW49WFv5C1c7KPofz/dvdj0ltdgAAAAEgAAAAEwRAIgfTRx5+c6ESCaYbWHmpYlefaEw1bAGcapajyNu3ZC1FkCIHzVtJQueGZaYm1edXu1kKDwRkZ7Y4jGzQkMI1j3TQBBAAAAZwNaVFjo+fqXfqWFWR2fOUaBMYwWVSV3+wAAABIAAAABMEUCIQDEYO+C//tbzGktUtKQbZhIkBJq56P9LUEtkULUo5scJwIgJ2EGdNd865iwKc1M6i0oRPf6QvxpAfqz6T1ptX3X0IQAAABnA1pZTuZe58A7uzyVDP1IlcJJia+iM+8BAAAAEgAAAAEwRQIhALSjOlVZss9XUqte1JvUoFkMUuiBnYD0kkM1L9S0D25uAiAaTn4g9alAR97HoCg8UprvIu6GWCZ+ELhe3+7oWDVBGQAAAGcEWllSTx9r2HZvioqlj3RByN03Ca+jpWICAAAACAAAAAEwRAIgduHaGZuOgThp9FeoHEK36fPAiXgj2Wp8DSioyS83fRoCIEYWh3BtKiYC2vnCcUVIxTQCrplWFLVIcQK/xRAFLwnxAAAAZwNaWlrHXxWtpYEhnJVIXFeOEk3zmF5M4AAAABIAAAABMEUCIQCfdKG1A3cObSViQYqH9WO2Hdo8VndkOgEViRhPtIrkyQIgH8PR4ivh7hoz3/qtNZ4BzsDs1uP6EMV9IupiMaxLNPQAAABpBVdSSEwxGXleGw+BxDfsP853/Xq0OSBgaXEAAAASAAAAAzBFAiEAzIgjkW7IAHFwAZQCS7c2dNRj5AW4e6ghUKtAtthQo3ECIEVkuSGJBrgnHoQ1F/LBHCm/eXrf7tD0sGp/AUp7OhEDAAAAagcqUExBU01BldcyHtzlGUGbodvGCom6+/VerA0AAAAGAAAAAzBEAiA3ld3Z/rqN3+9QaixOCWlnGXk1J3nvYW4Yrhnku3sP4wIgbdEFJSXUbJlpUVxEDwFnX5kcK1ZE/oTRXap9HDZ2b3cAAABnBENPTVD3bUpEHkuoapI84yuJr/idvMqgdQAAABIAAAADMEQCIANSoa31pA7MHyeyMmLe/lYVoRHEHQaqJx6dFnk5Wz30AiAFfIV/KYP/QMVw2S9qac4tc4mSpjPZlQZK6/jS/afkVQAAAGgEY0RBSbxolmfBP7KgTwknJ1N2DjipW5mMAAAACAAAAAMwRQIhAIUB+OClhSllkfukuoYSlArSzUXbCLrW5lZ4PWdj5jX0AiBJl014M7L1Ml2FR+mkwjiN19io34/a3ruzgYOhZghFagAAAGcEQ0VUSIWenYpO2t/ttaL/MRJDr4D4WpG4AAAACAAAAAMwRAIgDTTLxNTqNk74Eq6WRak6y2zw5A7AE3ME6vnUSHeTOLYCIAHNY2NxmQc7gLGuM7rlNv67YF+SPfOPYGWfcLyWB99xAAAAZwRjU0FJesZeD226DsuIRfF9B78HdoQmkPgAAAAIAAAAAzBEAiAFNr46Yq6BO58uFrLQ9CUppySZBO5nOqDHN+y2DSR1/gIgGFr2wfJifhWquCFobdb/l6FYJKwZDOYhb1CKzjNMO9UAAABoBUNVU0RDKXPmmyBWO8xm3GO94VMHLDPvN/4AAAAIAAAAAzBEAiBdpjcd15auuNw32vLkbZ9AYOAvzaQyKdCzi4CT3BRknQIgWHuxEALby3Wmk2NPlqixe673pTqjHIjbmxjQXVwKetIAAABpBUNVU0RU9pWM8xJ+YtPrJsefT0XT87LM3tQAAAAIAAAAAzBFAiEAm8X4PNO+d+Ym9slEqzjfiW3LbJuA+fdTiJAVCD+pQ7kCIC6tG80luSMV4d+EvZWMJ/D5fWKleAGgpwxwWsOT8A+QAAAAZgNTQUlj96svJDIq4urWuXHLmnGhzC7uAwAAABIAAAADMEQCIB8Xsjea9mO9O4o3FntJU9nfezHWLkSXTzrNj5k6AGRFAiBP4f4026DnfwHL50TbIqdSfgB4Bj294dwknmscr2kGdwAAAGcDREFJMfQoQcLbUXNCW1IjgJzzo4/t42AAAAASAAAAAzBFAiEAoNtVOXPJ/h0kOpcxZkiIwkk1QDX8fYQfzF73x041drcCIBhaL1N86OkXDYRUtBwHNe4e/FEO7C+ZtazvXEiZZfvvAAAAawdHSUdDT0lOxrBYHzwVtWBArEUTkxE41qzVl14AAAALAAAAAzBFAiEA+08TB8nff1MkOkV8nm8yAn+Wqcpkk1JJEdMVrv6T+WECIDWUHOUyKjWeZucdj0SstarLJAg7bUThB+1XL64EUwqaAAAAagdIQVNLRUxMY2UrndOVZTMrIruBUQTIIQk0rkUAAAALAAAAAzBEAiB/WdHKR25wJEDUeO4AuccmYyf6F/VvPwYR00xuMIOVmwIgKBpcWmciBpiP5weN4zIxqG1fFImReVHTYlAd0w2y6ysAAABpBUpVTk9UvYEqrnc1tue8w++N+zywRXz8KtcAAAAEAAAAAzBFAiEA9NCjUppjjPdwMDIZjFJS9GKgqVJpU2AKJLo+MjMayLwCIEbRMR2nS3HtaSjmL/srde5eryM8ykFb0eenhf6MtyveAAAAaARDQkRDGkGBGPexkEyoYUTC3xSEDOgjv7AAAAACAAAAAzBFAiEAuQhZT2wAE1FjfCjwT8nrSMyLNUVDjcRdKZltbhSEUv4CIHDFul2/iVHliR6nY8lz9/ZNyi5HlqeoFaXNpdGKlenFAAAAZwRDQkRD3qdzm9khpWK5TN5q85t1LDH4NIgAAAACAAAAAzBEAiBe29gnfxFhqVY4EQoD9xT93i486IB+8z2Ty95SWHEdIAIgORR1fhQay/bT+Re+CYoMSZaLbRK/HOeZZEbxW2MGcw0AAABoBE1FUjHF4FykzdWYVEKTXtuPkC+bmD+ROAAAABIAAAADMEUCIQDld9cpNUG6P6yWt6bca/ELTPrLHtWctrh7eMhRVoX2lQIgFgYAlRDZRkyKX2rv2CIItpTixR+JrcdZ+Di0dhfgGZkAAABnBE1FUjKiRJnHmm/7RFOHn7hRf41Mf3mMFQAAABIAAAADMEQCIALam8ROZ8Qrqd9Z7fAP09+41yjNAR08O6WoGvtCyxs1AiBHsWrTWDz7YpYOU1x8MTPQIOgSrU0dXluSg1kGediKhAAAAGYDTkdMFTKBG6bFCFaSgP/zkxxp+TD5CBAAAAASAAAAAzBEAiAXePwnn1PkiIGOc7KVIGB4MhuWOkjANxFzcLZ14SaoWwIgLFE7zJ/5QnUVWri3fHVeQvJfkKMiZkfNBQ/ofxtKpokAAABoBFRLMTngM6+MnTI1jioCnJppaO7UyQ/VYQAAAAAAAAADMEUCIQDq/+Qzv9BCehnro7oGMGWWZOQJfd5sIDuZOR6eeQH7VAIgSDtdFh5KvCQL2HCU7coyvgXlSK90CFKlPaoemJnN8doAAABoBFRLMjBUuvfOLpaLkC2BJyuNlOH2EtQDBwAAAAIAAAADMEUCIQDE70MbkfuT7Q33Z5HeUtw1KgsvfYoDSjFTrtw9y/hJWAIgfPXnkgc0gaC+BQqKzbNDEkotxqAu5KuOOQH3zf5p+FoAAABpBVRPS08xeSFYrIZkH1YOpIIek8ios72iVN8AAAABAAAAAzBFAiEAnqyLNbs6qyusDmlNDGh36VYLfQHhv+SJtsksdXkTf3wCIFsw8ZdGPNIPvsl5r2UsYogex1evMw47whqo0lWCzsOFAAAAaAVUT0tPMtPKVprkD/XuHR53z4ixzgqn86RlAAAAAgAAAAMwRAIgfnbJhoLbLXljHjoRJtgzZjhCRkE/oZEaf2qiNV6Jw/UCIFIhvOSVRKZ2Gz13bLCVlNx8hdPy7R4Pv1srj8K2Slf3AAAAaARUSzI0D3vA62zt+Hs1ek244rqNVXoP1rIAAAAAAAAAAzBFAiEAiup23i+cpg6VdQbbFjk1HU3Eng11b9kO4dgYk8OiDrUCIDRpOPGEG/eCZP/OKaUw82ELSJjFS9dJKYCROav4XFClAAAAZwRUSzI1+z3XQs6fMLpWQjc03nM4GdACYVkAAAABAAAAAzBEAiBNagbwO2DDWKZQG4aNywuhD0DfG6cOqgq8cOAtgU9asgIgI/swXnno5ay6jepIBoLI0zWfK/uS/ZSz1OaUxZSMpfIAAABoBFVTRFQRChP8Pv5qJFtQEC0tebPnYSWugwAAAAYAAAADMEUCIQD2PbV83WUzw9nUxvBfCL5V8GoWeBbddwjYnQkW2SyC7wIgFtVLsrPRjRmY2/BHas5SDsYo8+lNemg4mUj8KcWQGr4AAABnBFVTREMHhlxuh7n3AlU3fgJKzmYwweqjfwAAAAYAAAADMEQCIEDX5YSvxzZWUT1llql8lWbG0spy/eGJDjic6ete3IjUAiBllFDB6/dH7NVzls2aw3yMR4SYzfW/Y70Yca01A1C3yw==";

/***/ })

}]);
//# sourceMappingURL=ledgerhq-hw-app-eth.js.map
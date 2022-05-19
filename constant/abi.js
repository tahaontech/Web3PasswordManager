module.exports = {
    abi: [
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_title",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_data",
                    "type": "string"
                }
            ],
            "name": "addPass",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getDatas",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "string",
                            "name": "title",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "data",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct passwordsManager.Pass[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_addr",
                    "type": "address"
                }
            ],
            "name": "restoreData",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "string",
                            "name": "title",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "data",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct passwordsManager.Pass[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "tables",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "title",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "data",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ],
  };
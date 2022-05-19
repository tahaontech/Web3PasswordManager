import Web3Modal from "web3modal";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { abi } from "../constant/abi";
import Login from "../Components/Login";
import Main from "../Components/Main";
import LandingLayout from "../Components/layouts/LandingLayout";

let web3Modal;

// we dont set wallet connect for testnet :)
const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      rpc: { 137: 'https://rpc-mainnet.maticvigil.com' }, // required
    },
  }
};

if (typeof window !== "undefined") {
  web3Modal = new Web3Modal({
    network: "rinkeby",
    cacheProvider: false,
    providerOptions, // required
  });
}

export default function Home() {
  const [isConnected, setIsConnected] = useState(false);
  const [hasMetamask, setHasMetamask] = useState(false);
  const [signer, setSigner] = useState(undefined);
  const [globalPass, setGlobalPass] = useState('');

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      setHasMetamask(true);
    }
  });



  async function connect() {
    if (typeof window.ethereum !== "undefined") {
      try {
        if (globalPass !== '') {
          const web3ModalProvider = await web3Modal.connect();
          setIsConnected(true);
          const provider = new ethers.providers.Web3Provider(web3ModalProvider);
          if ((await provider.getNetwork()).name !== "rinkeby") { // or matic
            alert("please change your network to rinkeby") // or Polygon Mainnet(matic)
          }
          setSigner(provider.getSigner());
        } else {
          alert("please first fill password field.");
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      setIsConnected(false);
    }
  }

  async function execute_get() {
    if (typeof window.ethereum !== "undefined") {
      const contractAddress = "0xAba60A3048b342C01C50B8F185944704f98a7c24"; //rinkeby contract address
      const contract = new ethers.Contract(contractAddress, abi, signer);
      try {
        const Newdata = await contract.getDatas();
        return Newdata;
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Please install MetaMask");
    }
  }

  async function execute_add(_title, _data) {
    if (typeof window.ethereum !== "undefined") {
      const contractAddress = "0xAba60A3048b342C01C50B8F185944704f98a7c24";
      const contract = new ethers.Contract(contractAddress, abi, signer);
      try {
        await contract.addPass(_title, _data);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Please install MetaMask");
    }
  }

  return (
    <LandingLayout>
      <div>
        {hasMetamask ? (
          isConnected ? (
            <Main addFunc={execute_add} getFunc={execute_get} setGlobalPass={setGlobalPass} globalPass={globalPass} />
          ) : (
            <Login setGlobalPass={setGlobalPass} connect={connect} />
          )
        ) : (
          "Please install metamask"
        )}

      </div>
    </LandingLayout>
  );
}
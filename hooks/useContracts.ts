import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useWeb3 } from "./useWeb3";

import type { NFTCollectionFactory } from "../typechain";

import factoryDeployment from "../deployments/testnet/NFTCollectionFactory.json";
import factoryABI from "../artifacts/contracts/NFTCollectionFactory.sol/NFTCollectionFactory.json";

export const useContracts = () => {
  const { provider, connectWallet, address } = useWeb3();

  //@ts-ignore
  const [factory, setFactory] = useState<NFTCollectionFactory>(null);

  useEffect(() => {
    if (!!provider) {
      const logic = async () => {
        const signer = await provider.getSigner();

        const fct = new ethers.Contract(
          factoryDeployment.address,
          factoryABI.abi,
          signer
        );
        const factorySigned = (await fct.connect(signer)) as NFTCollectionFactory;
        setFactory(factorySigned);
      };

      logic();
    }
  }, [provider]);

  return { factory };
};

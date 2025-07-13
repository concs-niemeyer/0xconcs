import { useEffect, useState } from "react";
import { useAccount, useReadContract } from "wagmi";
import { erc721Abi } from "viem";

// Endereço do Contrato CRYPTORASTAS 
const CONTRACT_ADDRESS = "0x07cD221B2fE54094277A2F4E1c1BC6DF14E63678";

export function useHasNFT() {
  const { address, isConnected } = useAccount();
  const [hasNFT, setHasNFT] = useState(false);

  const { data, status } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: erc721Abi,
    functionName: "balanceOf",
    args: [address!],
  });

  useEffect(() => {
    if (!isConnected){
      setHasNFT(false)
    }
    if (status === "success" && data) {
      const balance = BigInt(data.toString()); // ou Number(data) se preferir
      setHasNFT(balance > 0n);
    }
  }, [data, status]);

  return hasNFT;
}

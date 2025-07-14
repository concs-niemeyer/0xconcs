import { useEffect, useState } from "react";
import axios from "axios";

const ETHERSCAN_API_KEY = import.meta.env.VITE_ETHERSCAN_API_KEY || ""; // use process.env se for Next.js
const BALANCE_API = "https://api.etherscan.io/api";

export default function useHasEth(address: string | undefined): boolean | null {
  const [hasEth, setHasEth] = useState<boolean | null>(null);

  useEffect(() => {
    if (!address) {
      setHasEth(null);
      return;
    }

    const fetchBalance = async () => {
      try {
        const response = await axios.get(BALANCE_API, {
          params: {
            module: "account",
            action: "balance",
            address,
            tag: "latest",
            apikey: ETHERSCAN_API_KEY,
          },
        });

        if (response.data.status === "1") {
          const balanceInWei = BigInt(response.data.result);
          const thresholdInWei = BigInt(1e15); // 0.001 ETH em wei (1 ETH = 1e18 wei)
          setHasEth(balanceInWei >= thresholdInWei);
        } else {
          console.warn("Error in Etherscan API response:", response.data.message);
          setHasEth(false);
        }
      } catch (err) {
        console.error("Error checking balance on Etherscan:", err);
        setHasEth(false);
      }
    };

    fetchBalance();
  }, [address]);

  return hasEth;
}

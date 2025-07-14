import { useAccount } from "wagmi";
import BitcoinPrice from "./BtcPrice";
import useHasEth from "../hooks/useHasEth";
import NeonLine from "./NeonLine";
import EthExclusiveContent from "./EthExclusiveContent";

export default function StandardMain() {
  const { address } = useAccount();
  const hasEth = useHasEth(address);

  return (
    <div className="text-center justify-center items-center">
      <BitcoinPrice />
      <NeonLine/>
      <div className="mt-12 p-4 rounded-xl shadow-lg bg-gray-800 border border-gray-600">
        {hasEth === null ? (
          <p>Checking balance...</p>
        ) : hasEth === false ? (
          <p className="text-red-400 font-semibold text-lg">
            You should have at least 0.001 ETH in your wallet to view this
            content.
          </p>
        ) : (
          <div className="text-green-400 font-semibold text-lg">
            <EthExclusiveContent/>
          </div>
        )}
      </div>
    </div>
  );
}

import { useAccount } from "wagmi";
import { useHasNFT } from "../hooks/useHasNFT";
import StandardMain from "./StandardMain";

export default function MainContent() {
  const { isConnected } = useAccount();
  const hasNFT = useHasNFT();

  return (
    <section className="bg-gray-900 relative min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full text-center space-y-6">
        {isConnected ? (
          <>
            <StandardMain />
            <div className="mt-12 p-4 rounded-xl shadow-lg bg-gray-800 border border-gray-600">
              {hasNFT ? (
                <div>
                  <p className="text-green-400 font-semibold text-lg">
                  🎉 You are part of the communitye <span className="text-yellow-400">CryptoRastas</span>!
                </p>
                
                  </div>
              ) : (
                <p className="text-red-400 font-semibold text-lg">
                  🚫 You need a CryptoRasta NFT to access this exclusive content.
                </p>
              )}
            </div>
          </>
        ) : (
          <p className="text-white text-lg">🔐 Connect your wallet to access exclusive content.</p>
        )}
      </div>
    </section>
  );
}

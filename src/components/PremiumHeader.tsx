import { Crown, Sparkles, Cannabis, User, LogOut, Wallet } from "lucide-react";
import { useAccount, useConnect, useDisconnect } from "wagmi";

// Header Premium (com NFT)
export default function PremiumHeader() {
  const account = useAccount();
  const { connectors, connect } = useConnect();
  const { disconnect } = useDisconnect();

  // Função para truncar endereço
  const truncateAddress = (address: string | any[] | undefined) => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };
  return (
    <header className="bg-gradient-to-r relative z-20 from-green-700 via-yellow-500 to-red-500 p-4 shadow-xl relative overflow-hidden">
      {/* Efeito de brilho de fundo */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-transparent to-yellow-400/20 animate-pulse"></div>

      <div className="container mx-auto flex justify-between items-center ">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Crown className="w-10 h-10 text-yellow-300 animate-pulse drop-shadow-lg" />
            <Sparkles className="w-4 h-4 text-yellow-200 absolute -top-1 -right-1 animate-ping" />
          </div>
          <h1 className="lg:text-4xl font-bold text-white drop-shadow-lg tracking-wide">
            ❤️💛💚
          </h1>
          <Cannabis className="w-7 h-7 text-white animate-bounce drop-shadow-lg" />
        </div>

        <div className="flex flex-col items-center space-x-4">
          {account.isConnected ? (
            <div className="sm:flex items-center space-x-3">
              <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <User className="w-4 h-4 text-white" />
                <span className="text-white font-medium text-sm">
                  {truncateAddress(account.address)}
                </span>
              </div>
              <button
                onClick={() => disconnect()}
                className="bg-red-500/90 hover:bg-red-600 text-white px-4 py-2 rounded-full transition-all duration-300 flex items-center space-x-2 backdrop-blur-sm border border-red-400/30 hover:scale-105"
              >
                <LogOut className="w-4 h-4" />
                <span>Disconnect</span>
              </button>
            </div>
          ) : (
            <div className="flex space-x-2">
              {connectors.map((connector) => (
                <button
                  key={connector.uid}
                  onClick={() => connect({ connector })}
                  className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 hover:scale-105 flex items-center space-x-2"
                >
                  <Wallet className="w-4 h-4" />
                  <span>{connector.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

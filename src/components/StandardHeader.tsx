import { User, LogOut, Menu, X, Wallet, Bitcoin, Radiation } from "lucide-react";
import { useState } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";

export default function StandardHeader() {
  const [isWalletMenuOpen, setIsWalletMenuOpen] = useState(false);
  const account = useAccount();
  const { connectors, connect, status, error } = useConnect();
  const { disconnect } = useDisconnect();

  const truncateAddress = (address: string | any[] | undefined) => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <header className="relative z-50 bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg border-b border-gray-700">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 py-8 flex items-center justify-between">
        {/* Logo ou ícone */}
        <div className="flex items-center space-x-3">
            {account.isConnected ? (
                <Bitcoin className="w-8 h-8 text-white" />
            ):(
                <Radiation className="w-8 h-8 text-white"/>
            )}
          <span className="text-white font-bold text-2xl tracking-tight">Concs</span>
        </div>

        {/* Navegação */}
        <nav className="hidden md:flex space-x-10">
          <a href="#home" className="text-white hover:text-blue-400 transition">Home</a>
          <a href="#background" className="text-white hover:text-blue-400 transition">Background</a>
          <a href="#projects" className="text-white hover:text-blue-400 transition">Projects</a>
          <a href="#contact" className="text-white hover:text-blue-400 transition">Contact</a>
        </nav>

        {/* Wallet / Conta */}
        <div className="relative">
          {account.isConnected ? (
            <div className="sm:flex items-center space-x-4 space-y-2">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
                <User className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-medium">
                  {truncateAddress(account.address)}
                </span>
              </div>
              <button
                onClick={() => disconnect()}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full transition flex items-center space-x-2"
              >
                <LogOut className="w-4 h-4" />
                <span>Disconnect</span>
              </button>
            </div>
          ) : (
            <div>
              <button
                onClick={() => setIsWalletMenuOpen(!isWalletMenuOpen)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
              >
                {isWalletMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                <span>Conectar Carteira</span>
              </button>

              {/* Dropdown Wallet Connect */}
              {isWalletMenuOpen && (
                <>
                  <div className="absolute right-0 mt-3 w-64 bg-white border border-gray-200 rounded-lg shadow-xl z-50">
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">
                        Escolha sua carteira
                      </h3>
                      <div className="space-y-2">
                        {connectors.map((connector) => (
                          <button
                            key={connector.uid}
                            onClick={() => {
                              connect({ connector });
                              setIsWalletMenuOpen(false);
                            }}
                            className="w-full bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg flex items-center space-x-3 text-left"
                          >
                            <Wallet className="w-4 h-4 text-blue-600" />
                            <span>{connector.name}</span>
                          </button>
                        ))}
                      </div>
                      {status !== "idle" && (
                        <div className="mt-2 text-sm text-gray-500">Status: {status}</div>
                      )}
                      {error && (
                        <div className="mt-2 text-sm text-red-500">{error.message}</div>
                      )}
                    </div>
                  </div>

                  {/* Overlay */}
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsWalletMenuOpen(false)}
                  />
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

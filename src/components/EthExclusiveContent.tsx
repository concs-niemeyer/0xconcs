import {
  Activity,
  DollarSign,
  Globe,
  Network,
  TrendingUp,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { formatEther } from "viem";

export default function EthExclusiveContent() {
  const [ethData, setEthData] = useState({
    supply: null as any,
    price: null as any,
    nodeCount: null as any,
    loading: true,
    error: null as string | null,
  });

  const API_KEY = import.meta.env.VITE_ETHERSCAN_API_KEY;

  useEffect(() => {
    const fetchEthData = async () => {
      try {
        const [supplyRes, priceRes, nodeCountRes] = await Promise.all([
          fetch(
            `https://api.etherscan.io/v2/api?chainid=1&module=stats&action=ethsupply2&apikey=${API_KEY}`
          ),
          fetch(
            `https://api.etherscan.io/v2/api?chainid=1&module=stats&action=ethprice&apikey=${API_KEY}`
          ),
          fetch(
            `https://api.etherscan.io/v2/api?chainid=1&module=stats&action=nodecount&apikey=${API_KEY}`
          ),
        ]);

        const [supplyData, priceData, nodeCountData] = await Promise.all([
          supplyRes.json(),
          priceRes.json(),
          nodeCountRes.json(),
        ]);

        if (!supplyData.result || !priceData.result || !nodeCountData.result) {
          throw new Error("Failed to fetch data");
        }

        setEthData({
          supply: supplyData.result,
          price: priceData.result,
          nodeCount: nodeCountData.result,
          loading: false,
          error: null,
        });
      } catch (error) {
        setEthData({
          supply: null,
          price: null,
          nodeCount: null,
          loading: false,
          error: "Failed to fetch data from Etherscan API. Please try again later.",
        });
      }
    };

    fetchEthData();
  }, []);

  const formatNumber = (num: string | number | undefined) => {
    if (!num) return "-";
    return parseFloat(num.toString()).toLocaleString("en-US", {
      maximumFractionDigits: 2,
    });
  };

  type StatCardProps = {
    title: string;
    value: string | number;
    subtitle?: string;
    icon: React.ElementType;
    color: string;
  };

  const StatCard = ({
    title,
    value,
    subtitle,
    icon: Icon,
    color,
  }: StatCardProps) => (
    <div className="bg-gray-900 rounded-lg shadow-2xl p-6 border border-cyan-500 hover:border-pink-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-cyan-400/50 relative overflow-hidden backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-pink-900/20 opacity-30"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-lg ${color} shadow-lg`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>
        <h3 className="text-cyan-300 text-sm font-medium mb-2 uppercase tracking-wider">{title}</h3>
        <p className="text-2xl font-bold text-white mb-1 font-mono">{value}</p>
        {subtitle && <p className="text-gray-400 text-sm">{subtitle}</p>}
      </div>
    </div>
  );

  const LoadingCard = () => (
    <div className="bg-gray-900 rounded-lg shadow-2xl p-6 border border-cyan-500 animate-pulse relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-pink-900/20 opacity-30"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-gray-700 rounded-lg"></div>
          <div className="w-16 h-4 bg-gray-700 rounded"></div>
        </div>
        <div className="w-24 h-4 bg-gray-700 rounded mb-2"></div>
        <div className="w-32 h-8 bg-gray-700 rounded mb-1"></div>
        <div className="w-28 h-4 bg-gray-700 rounded"></div>
      </div>
    </div>
  );

  if (ethData.loading) {
    return (
      <div className="min-h-screen bg-black bg-gradient-to-br from-gray-900 via-black to-gray-900 p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 to-pink-900/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2 font-mono tracking-wider">
              ETHEREUM PAINEL
            </h1>
            <p className="text-cyan-300 font-mono">Loading network statistics...</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
          </div>
        </div>
      </div>
    );
  }

  if (ethData.error) {
    return (
      <div className="min-h-screen bg-black bg-gradient-to-br from-gray-900 via-black to-gray-900 p-6 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-pink-900/10"></div>
        <div className="bg-gray-900 rounded-lg shadow-2xl p-8 text-center border border-red-500 relative z-10">
          <div className="text-red-400 mb-4">
            <Activity className="w-12 h-12 mx-auto" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2 font-mono">ERROR</h2>
          <p className="text-gray-400 mb-4 font-mono">{ethData.error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-mono uppercase tracking-wider border border-red-400/50"
          >
            RETRY
          </button>
        </div>
      </div>
    );
  }

  const { supply, price, nodeCount } = ethData;

  return (
    <div className="min-h-screen bg-black bg-gradient-to-br z-0 from-gray-900 via-black to-gray-900 p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 to-pink-900/10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse"></div>
      </div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 flex items-center justify-center font-mono tracking-wider">
            <Zap className="w-8 h-8 mr-3 text-cyan-400" />
            ETHEREUM PAINEL
          </h1>
          <p className="text-cyan-300 font-mono">
            Real-time Ethereum network statistics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <StatCard
            title="ETH Total Supply"
            value={
              ethData.supply?.EthSupply
                ? formatEther(ethData.supply.EthSupply)
                : "--"
            }
            subtitle="ETH in circulation"
            icon={DollarSign}
            color="bg-gradient-to-r from-cyan-500 to-teal-600"
          />

          <StatCard
            title="ETH Staked"
            value={formatEther(supply?.Eth2Staking)}
            subtitle="Ethereum locked in staking"
            icon={Activity}
            color="bg-gradient-to-r from-purple-500 to-pink-600"
          />
          <StatCard
            title="Staking Rate"
            value={
              ethData.supply?.Eth2Staking && ethData.supply?.EthSupply
                ? `${(
                    (parseFloat(formatEther(ethData.supply.Eth2Staking)) /
                      parseFloat(formatEther(ethData.supply.EthSupply))) *
                    100
                  ).toFixed(1)}%`
                : "--"
            }
            subtitle="% of supply staked"
            icon={Globe}
            color="bg-gradient-to-r from-pink-500 to-red-600"
          />

          <StatCard
            title="ETH Price (USD)"
            value={`$${formatNumber(price?.ethusd)}`}
            subtitle="Current price in dollars"
            icon={TrendingUp}
            color="bg-gradient-to-r from-green-500 to-emerald-600"
          />

          <StatCard
            title="ETH Price (BTC)"
            value={`₿ ${price?.ethbtc}`}
            subtitle="Price in Bitcoin"
            icon={DollarSign}
            color="bg-gradient-to-r from-orange-500 to-yellow-600"
          />

          <StatCard
            title="Total Nodes Count"
            value={formatNumber(nodeCount?.TotalNodeCount)}
            subtitle="Active nodes"
            icon={Network}
            color="bg-gradient-to-r from-indigo-500 to-violet-600"
          />

        </div>

        <div className="bg-gray-900 rounded-lg shadow-2xl p-6 border border-cyan-500 relative overflow-hidden backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-pink-900/20 opacity-30"></div>
          <div className="relative z-10">
            <h2 className="text-xl font-bold text-white mb-4 font-mono uppercase tracking-wider">
              Additional Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-cyan-300 mb-2 font-mono uppercase tracking-wider">
                  About Network Data
                </h3>
                <p className="text-gray-400 text-sm font-mono">
                  Data is retrieved from the Etherscan API.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-cyan-300 mb-2 font-mono uppercase tracking-wider">
                  Last Updated
                </h3>
                <p className="text-gray-400 text-sm font-mono">
                  {new Date().toLocaleString("pt-BR")}
                </p>
              </div>
              </div>
              <button
                onClick={() => window.location.reload()}
                className="mt-4 bg-cyan-600 text-white px-6 py-2 rounded-lg hover:bg-cyan-700 transition-colors font-mono uppercase tracking-wider border border-cyan-400/50"
              >
                Refresh Data
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}
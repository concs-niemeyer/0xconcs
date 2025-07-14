import { TerminalSquare, BrainCircuit } from "lucide-react";

const premiumProjects = [
    {
      name: "Token Gated Content",
      description:
        "Application with authentication via Web3 wallet where the user has exclusive content based on the wallet's NFTs.",
      techs: ["Wagmi", "Viem", "React", "Tailwind"],
    },
    {
        name: "Mecha War",
    description: "Mecha battle game in smart contract format.",
    techs: ["Solidity", "React", "IPFS", "Ethers.js"],
  },
  {
    name: "Wallet Stellar",
    description:
      "Crypto wallet with an intuitive interface for transacting on the Stellar blockchain.",
    techs: [ "Next.js", "Stellar", "SDK"],
  },
  {
    name: "StaterApp",
    description:
      "Application for optimizing crypto asset portfolios using CoinGecko API data and machine learning algorithms.",
    techs: ["Python", "CoinGecko API", "SQLite"],
  },
];

export default function PremiumProjects() {
  return (
    <section id="projects" className="bg-gray-700 py-16 px-6 sm:px-12 text-green-400 font-mono">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 tracking-wide">
          <BrainCircuit className="inline-block mr-2" size={36} />
          PROJECTS
        </h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {premiumProjects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-green-900/30 to-black border border-green-700 rounded-xl p-6 shadow-md hover:shadow-green-500/30 transition duration-300 backdrop-blur"
            >
              <h3 className="text-2xl mb-2 flex items-center">
                <TerminalSquare className="mr-2" size={20} />
                {project.name}
              </h3>
              <p className="text-sm text-green-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techs.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-green-800/30 border border-green-600 text-green-300 px-2 py-1 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

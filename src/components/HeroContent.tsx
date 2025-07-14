import { useAccount } from "wagmi";
import MatrixRain from "./MatrixRain";
import NeonLine from "./NeonLine";

export default function HeroContent() {
  const account = useAccount();

  const features = [
    {
      title: "Blockchain & Web3",
      icon: "🔐",
      description:
        "Deployment of smart contracts using Solidity, wallet integration, and token-based authentication (ERC20 & NFTs).",
    },
    {
      title: "Machine Learning",
      icon: "🧠",
      description:
        "Development of models for medical image segmentation. Practical applications in healthcare and risk prediction.",
    },
    {
      title: "Computational Physics",
      icon: "🧮",
      description:
        "Simulations, numerical methods, and implementation of principles such as Lagrange’s principle of least action in code.",
    },
    {
      title: "Portfolio Optimization",
      icon: "📈",
      description:
        "Back-testing with CoinGecko data, risk/return analysis, correlation matrix, and Python-based modeling.",
    },
  ];
 
  return (
    <>
      {account.isConnected ? (
        <section id="home">
          <div className="relative isolate overflow-hidden bg-gray-800 py-24 sm:py-32">
          <div className="fixed top-0 left-0 w-full h-full opacity-20 pointer-events-none">
            <MatrixRain />
          </div>
            <div className="mx-auto max-w-7xl py-20 px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                  Welcome,
                </h2>
                <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
                  I'm{" "}
                  <strong className="text-green-400">
                    <a href="https://www.linkedin.com/in/conrado-niemeyer/">
                      Conrado Niemeyer
                    </a>
                  </strong>{" "}
                  - Physicist and Full Stack Developer.
                  <br></br>
                  <br></br>I create applications that cross boundaries between
                  science, data and decentralized technology.
                </p>
              </div>
              <NeonLine />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
                {features.map(({ title, icon, description }) => (
                  <article
                    key={title}
                    className="bg-gray-900/60 border border-cyan-400/20 rounded-xl p-6 backdrop-blur-sm shadow-lg hover:scale-[1.02] transition-transform"
                  >
                    <h3 className="text-base text-green-400 font-semibold mb-2 flex items-center gap-2">
                      <span>{icon}</span> {title}
                    </h3>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      {description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section id="home">
          <div className="relative isolate px-6 pt-8 lg:px-8">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            ></div>
            <div className="mx-auto max-w-2xl py-36">
              <div className="flex justify-center">
                <div className="relative text-center rounded-full px-4 py-2 text-sm/6 text-gray-600 ring-2 ring-purple-500/60 hover:ring-purple-900/30">
                  Acesse a versão para web3
                </div>
              </div>
              <div className="mt-14 text-center">
                <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
                  Físico & Desenvolvedor Full Stack
                </h1>
                <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                  Pesquisador, programador e criador.<br></br>Acredito em
                  software como ferramenta para transformar ciência em soluções
                  acessíveis e seguras.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="#projects"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Ver Projetos
                  </a>
                  <a
                    href="#contact"
                    className="text-sm/6 font-semibold text-gray-900"
                  >
                    Contato <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

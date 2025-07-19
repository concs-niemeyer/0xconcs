export default function StandardProjects() {
  const projectsWeb = [
    {
      name: "StaterApp",
      description:
        "Aplicação para otimização de portfólios de criptoativos usando dados da CoinGecko API e algoritmos de machine learning.",
      badges: ["Python", "ML", "CoinGecko API"],
      url: "https://staterapp.onrender.com/",
    },
    {
      name: "Stellar Wallet",
      description:
        "Carteira de criptoativos com interface intuitiva para realizar transações na blockchain Stellar, construída com Next.js e XDR SDKs.",
      badges: ["Next.js", "Stellar", "SDK"],
      url: "https://github.com/concs-niemeyer/wallet-stellar"
    },
    {
      name: "Rota Verde 365",
      description:
        "Aplicativo que permite ao usuário registrar e descrever locais da natureza visitados, utilizando a API REST Nominatim para geolocalização via CEP.",
      badges: ["Node", "React", "PostgreSQL"],
      url: "https://github.com/concs-niemeyer/rota-verde365"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 section-fade">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Projetos Recentes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções inovadoras que combinam tecnologia e propósito
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsWeb.map(({ name, description, badges, url }) => (
            <div
              key={name}
              className="bg-white rounded-lg shadow-lg overflow-hidden card-hover section-fade"
            >
              <div className="h-52 bg-gradient-to-br from-gray-100 to-teal-600 flex flex-col items-center justify-center">
                <h3 className="mt-4 text-xl font-bold mb-3 text-gray-800">{name}</h3>
                <p className="text-gray-800 px-4 mb-4 text-sm">{description}</p>

                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-orange-700 hover:underline break-words mb-4 block"
                >
                  {url}
                </a>

                <div className="flex flex-wrap gap-2 mb-4">
                  {badges.map((badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-indigo-700/10 ring-inset"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

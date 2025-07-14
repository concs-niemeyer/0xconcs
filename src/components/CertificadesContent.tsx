
const certificates = [
  {
    title: "EVM Bootcamp Q1 2025",
    issuer: "Encode Club",
    image: "https://dbl-discord.usercontent.prism.gg/icons/705799923014041651/a_1dfa1d54439cb26c1086bf3eb4f9c2dc.png?size=256", // your logo here
  },
  {
    title: "Encode X Solana Rust Bootcamp Q4 2024",
    issuer: "Enconde Club",
    image: "https://dbl-discord.usercontent.prism.gg/icons/705799923014041651/a_1dfa1d54439cb26c1086bf3eb4f9c2dc.png?size=256", // your logo here
  },
  {
    title: "Full Stack Developer 2024",
    issuer: "SENAI/SC",
    image: "https://nac.cni.com.br/blog/wp-content/uploads/2025/02/senai-768x432.jpeg",
  },
  {
    title: "Binance - Blockchain Developer 2024",
    issuer: "DIO",
    image: "https://hermes.dio.me/courses/badge/565f4603-4969-4cde-bc01-e9683d2350e8.png"
  },
];

export default function CertificatesSection() {
  return (
    <section id="background" className="bg-gray-300 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-lg font-semibold leading-8 text-indigo-600">Certificates</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Latest achievements
          </p>
        </div>

        <div className="relative z-20 mt-20 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img
                className="h-24 w-24 rounded-full object-cover border-4 border-indigo-500"
                src={cert.image}
                alt={cert.title}
              />
              <div className="mt-6">
                <h3 className="text-lg font-semibold leading-6 text-gray-900">{cert.title}</h3>
                <p className="text-sm text-indigo-600">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import CountdownToEvent from "./CountDownToEvent";

export default function CryptoRastaContent() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-10 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-lg border border-gray-700">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-green-400 mb-4">
        🎉 Welcome to the <span className="text-yellow-400">CryptoRastas</span> Community!
      </h2>
      <p className="text-center text-gray-300 text-base md:text-lg mb-8">
        Get ready for the upcoming event. Stay tuned and spread the vibes! 🌿
      </p>

      <div className="flex justify-center">
        <div className="bg-gray-800 px-6 py-4 rounded-xl shadow-inner border border-gray-700">
          <CountdownToEvent />
        </div>
      </div>
    </section>
  );
}

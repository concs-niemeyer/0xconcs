import { useEffect } from "react";

export default function CryptoRastaContent() {
  useEffect(() => {
    // Carrega o script de embed do X (antigo Twitter)
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // remove ao desmontar
    };
  }, []);

  return (
    <>
      <p className="text-green-400 font-semibold text-lg">
        🎉 You are part of the community{" "}
        <span className="text-yellow-400">CryptoRastas</span>!
      </p>

      {/* Embed do post do X */}
      <blockquote className="twitter-tweet">
        <a href="https://x.com/cryptorastas/status/1943735891165344161"></a>
      </blockquote>

      <p className="text-white mt-4">
        Check out our latest updates and community activities on our social media.
      </p>
    </>
  );
}

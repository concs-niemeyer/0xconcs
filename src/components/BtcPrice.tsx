import { useEffect, useState } from "react";

export default function BitcoinPrice() {
  const [price, setPrice] = useState<number | null>(null);

  useEffect(() => {
    const fetchBTCPrice = async () => {
      try {
        const res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd");
        const data = await res.json();
        setPrice(data.bitcoin.usd);
      } catch (error) {
        console.error("Error fetching Bitcoin price:", error);
      }
    };

    fetchBTCPrice();
    const interval = setInterval(fetchBTCPrice, 60000); // atualiza a cada 60 segundos

    return () => clearInterval(interval); // limpa o intervalo ao desmontar
  }, []);

  return (
    <div className="text-lg font-mono text-emerald-400">
      {price ? `₿ 1 BTC = U$ ${price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}` : "Loading price..."}
      <br></br><small>last minute</small>
    </div>
  );
}

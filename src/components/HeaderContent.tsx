import PremiumHeader from "./PremiumHeader";
import { useHasNFT } from "../hooks/useHasNFT";
import StandardHeader from "./StandardHeader";

export default function HeaderContent() {

  const hasNFT = useHasNFT()

  return <div className="w-full fixed z-30">{hasNFT ? <PremiumHeader /> : <StandardHeader />}</div>;
}

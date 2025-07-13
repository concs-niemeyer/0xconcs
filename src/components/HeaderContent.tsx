import PremiumHeader from "./PremiumHeader";
import { useHasNFT } from "../hooks/useHasNFT";
import StandardHeader from "./StandardHeader";

export default function HeaderContent() {

  const hasNFT = useHasNFT()

  return <div>{hasNFT ? <PremiumHeader /> : <StandardHeader />}</div>;
}

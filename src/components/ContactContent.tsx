// Seção com os Cards dos projetos realizados.
import { useAccount } from "wagmi";
import StandardContacts from "./StandardContacts";
import PremiumContacts from "./PremiumContacts";

export default function ContactContent() {
  const { isConnected } = useAccount();

  return <>{isConnected ? <PremiumContacts /> : <StandardContacts />}</>;
}

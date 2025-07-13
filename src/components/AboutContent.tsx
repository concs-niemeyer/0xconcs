import { useAccount } from "wagmi";
import StandardAbout from "./StandardAbout";
import CertificatesSection from "./CertificadesContent";

export default function AboutContent() {
  const account = useAccount();
  return (
    <div>
      {account.isConnected ? (
        <div>
          <div className="text-center">
            <CertificatesSection/>
          </div>
        </div>
      ) : (
        <StandardAbout />
      )}
    </div>
  );
}

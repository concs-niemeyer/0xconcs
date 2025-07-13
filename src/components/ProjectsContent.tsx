// Seção com os Cards dos projetos realizados.
import { useAccount } from "wagmi";
import StandardProjects from "./StandardProjects";
import PremiumProjects from "./PremiumProjects";

export default function ProjectsContent() {
  const { isConnected } = useAccount();

  return (
    <>
      {isConnected ? (
        <div>
          <PremiumProjects/>
        </div>
      ) : (
        <StandardProjects />
      )}
    </>
  );
}

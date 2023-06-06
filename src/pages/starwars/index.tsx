import useStarWars from "@/components/data/hooks/useStarWars";
import Background from "@/components/starwars/Background";
import Personagens from "@/components/starwars/Personagens";

export default function PaginaStarWars() {
  const { processando, personagens, selecionarPersonagem } = useStarWars();

  return (
    <div
      className={`
      flex fle-col gap-5 justify-center items-center h-screen
    `}
    >
      <Background />
      {processando ? (
        <div>Processando...</div>
      ) : personagens.length > 0 ? (
        <Personagens
          personagens={personagens}
          selecionar={selecionarPersonagem}
        />
      ) : (
        <div>Nenhum personagem encontrado</div>
      )}
    </div>
  );
}
 
import useStarWars from "@/components/data/hooks/useStarWars";
import Personagens from "@/components/starwars/Personagens";

export default function PaginaStarWars() {
  const { processando, personagens, obterPersonagens } = useStarWars();

  return (
    <div
      className={`
      flex justify-center items-center h-screen
    `}
    >
      {processando ? (
        <div>Processando...</div>
      ) : personagens.length > 0 ? (
        <Personagens personagens={personagens} />
      ) : (
        <div>Nenhum personagem encontrado</div>
      )}
      <button onClick={obterPersonagens} className="bg-blue-500 p-2">
        Obter
      </button>
    </div>
  );
}

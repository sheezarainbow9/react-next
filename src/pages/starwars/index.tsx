import useStarWars from "@/components/data/hooks/useStarWars";
import Background from "@/components/starwars/Background";
import Filmes from "@/components/starwars/Filmes";
import Personagens from "@/components/starwars/Personagens";

export default function PaginaStarWars() {
  const { processando, personagens, filmes, voltar, selecionarPersonagem } =
    useStarWars();

  return (
    <div
      className={`
      flex fle-col gap-5 justify-center items-center h-screen
    `}
    >
      <Background />
      {processando ? (
        <div>Processando...</div>
      ) : filmes.length > 0 ? (
        <Filmes filmes={filmes} voltar={voltar} />
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

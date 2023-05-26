import useStarWars from "../data/hooks/useStarWars";

export default function Personagens() {
  const { processando, personagens, obterPersonagens } = useStarWars();

  return (
    <div>
      {processando ? (
        <div>Processando...</div>
      ) : personagens.length > 0 ? (
        <ul>
          {personagens.map((p: any) => (
            <li key={p.name}>{p.name}</li>
          ))}
        </ul>
      ) : (
        <h1>Nenhum personagem encontrado</h1>
      )}

      <button onClick={obterPersonagens} className="bg-blue-500 p-2">
        Obter
      </button>
    </div>
  );
}

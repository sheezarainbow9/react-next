import { useState } from "react";
import useProcessando from "../data/hooks/useProcessando";

export default function Personagens() {
  const { processando, iniciarProcessamento, finalizarProcessamento } = useProcessando();
  const [personagens, setPersonagens] = useState<any>([])

  async function obterPersonagens() {
    try {
      iniciarProcessamento();
      const resp = await fetch('http://swapi.dev/api/people/')
      const dados = await resp.json()
      setPersonagens(dados.results)
    } finally {
      finalizarProcessamento();
    }
  }

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

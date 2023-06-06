import { useCallback, useEffect, useState } from "react";
import useProcessando from "./useProcessando";

export default function useStarWars() {
  const [personagens, setPersonagens] = useState<any[]>([]);
  const { processando, iniciarProcessamento, finalizarProcessamento } =
    useProcessando();
  const [personagem, setPersonagem] = useState<any>([]);

  const obterFilmes = useCallback(async function (personagem: any) {
    if (personagem?.films) return;
    console.log(personagem.films);
  }, []);

  // Assim, vai ser chamado uma única vez.
  const obterPersonagens = useCallback(
    async function () {
      try {
        iniciarProcessamento();
        const resp = await fetch("http://swapi.dev/api/people/");
        const dados = await resp.json();
        setPersonagens(dados.results);
      } finally {
        finalizarProcessamento();
      }
    },
    [iniciarProcessamento, finalizarProcessamento]
  );

  function selecionarPersonagem(personagem: any) {
    setPersonagem(personagem);
  }

  useEffect(() => {
    obterPersonagens();
  }, [obterPersonagens]);

  useEffect(() => {
    obterFilmes(personagem);
  }, [personagem]);

  return {
    personagens,
    processando,
    selecionarPersonagem,
  };
}

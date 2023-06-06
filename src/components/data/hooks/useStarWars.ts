import { useCallback, useEffect, useState } from "react";
import useProcessando from "./useProcessando";

export default function useStarWars() {
  const [personagens, setPersonagens] = useState<any[]>([]);
  const { processando, iniciarProcessamento, finalizarProcessamento } =
    useProcessando();
  const [personagem, setPersonagem] = useState<any>([]);
  const [filmes, setFilmes] = useState<any>([]);

  const obterFilmes = useCallback(async function (personagem: any) {
    if (personagem?.films?.length) return;
    try {
      const requests = personagem.films.map(async (film: string) => {
      const resposta = await fetch(film);
      return resposta.json();
    });
    const filmes = await Promise.all(requests);
    setFilmes(filmes);
    } finally {
      finalizarProcessamento()
    }
  }, [iniciarProcessamento, finalizarProcessamento]);

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

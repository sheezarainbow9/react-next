import { useState } from "react";
import useProcessando from "./useProcessando";

export default function useStarWars() {
  const [personagens, setPersonagens] = useState<any>([])
  const { processando, iniciarProcessamento, finalizarProcessamento } = useProcessando();

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
  
  
  return {
    personagens,
    obterPersonagens,
    processando
  }
}
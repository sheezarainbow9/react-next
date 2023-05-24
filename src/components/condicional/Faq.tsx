import { useState } from "react";
import Pergunta from "./Pergunta";

export default function Faq() {
  const [ativo, setAtivo] = useState<number>(0);

  // Se clicar no seguinte, fechará o primeiro:
  function alternarVisibilidade(indice: number) {
    if (indice === ativo) {
      setAtivo(-1);
    } else {
      setAtivo(indice);
    }
  }

  return (
    <div className="flex flex-col gap-2 w-[90%] md:w=3/4">
      <Pergunta
        indice={0}
        aberta={ativo === 0}
        texto="Quem descobriu o Brasil?"
        resposta="Pinzón"
        alternarVisibilidade={alternarVisibilidade}
      />
      <Pergunta
        indice={1}
        aberta={ativo === 1}
        texto="Qual a capital do Brasil?"
        resposta="Brasília"
        alternarVisibilidade={alternarVisibilidade}
      />
      <Pergunta
        indice={2}
        aberta={ativo === 2}
        texto="React é um framework?"
        resposta="Sim"
        alternarVisibilidade={alternarVisibilidade}
      />
      <Pergunta
        indice={3}
        aberta={ativo === 3}
        texto="Quem inventou o avião?"
        resposta="Santos Dumont"
        alternarVisibilidade={alternarVisibilidade}
      />
    </div>
  );
}

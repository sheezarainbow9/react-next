import useProcessando from "../data/hooks/useProcessando";

export default function Personagens() {
  const { processando, iniciarProcessamento, finalizarProcessamento } = useProcessando();

  async function simularChamadaAPI() {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve(1);
      }, 6000)
    );
  }

  async function obterPersonagens() {
    try {
      iniciarProcessamento();
      await simularChamadaAPI();
    } finally {
      finalizarProcessamento();
    }
  }

  return (
    <div>
      {processando ? (
        <div>Processando...</div>
      ) : (
        <h1>Conteúdo com as Personagens</h1>
      )}

      <button onClick={obterPersonagens} className="bg-blue-500 p-2">
        Obter
      </button>
    </div>
  );
}

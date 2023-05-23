import Image from "next/image";

export default function ImagemAleatoria() {
  let pesquisa: string = "";
  const url = "https://source.unsplash.com/featured/300x300?";

  function urlImagem() {
    return `${url}${pesquisa}`;
  }

  function renderizarBotao(valor: string) {
    return (
      <button
        className={`
      bg-blue-500 px-4 py-2 rounded-md
    `}
        onClick={() => {
          pesquisa = valor;
          console.log(urlImagem());
        }}
      >
        {valor}
      </button>
    );
  }

  return (
    <div className="flex flex-col gap-3 border border-zinc-500 p-7 rounded-md">
      <Image src={urlImagem()} height={300} width={300} alt="Imagem" />
      <div className="flex gap-5">
        {renderizarBotao("abstract")}
        {renderizarBotao("city")}
        {renderizarBotao("person")}
      </div>
    </div>
  );
}

interface TabelaSerieAProps {
  times: string[];
}

export default function TabelaSerieA(props: TabelaSerieAProps) {
  const itens: any[] = [];

  // Aqui está transformando string em li:
  for (let i = 0; i < props.times.length; i++) {
    console.log(props.times[i]);
    itens.push(
      <li key={props.times[i]} className="text-xl list-decimal">
        {props.times[i]}
      </li>
    );
  }

  // Outra forma, pegando o map para retornar uma li:
  // const itens2 = props.times.map((time, i) => {
  //   return (
  //     <li key={time} className={`
  //     text-xl list-decimal ${i % 2 === 0 ? 'text-blue-500' : 'text-yellow-500'}
  //     `}>{time}</li>
  //   )
  // })

  // Ou diretamente, sem usar os itens 1 e 2:
  return <ol>{props.times.map((time, i) => {
    return (
      <li key={time} className={`
      text-2xl list-decimal ${i % 2 === 0 ? 'text-blue-500' : 'text-yellow-500'}
      `}>{time}</li>
    )
  })}</ol>;
}

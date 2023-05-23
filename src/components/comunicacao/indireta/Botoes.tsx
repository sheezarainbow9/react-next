interface BotoesProps {
  inc: (valor: number) => void;
  dec: (valor: number) => void;
}

export default function Display(props: BotoesProps) {
  return (
    <div className="flex justify-between pt-2 gap-2">
      <button className="botao flex-1" onClick={() => props.dec(10)}>
        Dec
      </button>
      <button className="botao flex-1" onClick={() => props.inc(7)}>
        Inc
      </button>
    </div>
  );
}

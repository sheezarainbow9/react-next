import Filho from "./Filho";

export default function Pai() {
  return (
    <div
      className={`
      flex gap-5 bg-blue-500 text-white border border-white roundes-md p-5
    `}
    >
      <Filho />
      <Filho />
    </div>
  );
}

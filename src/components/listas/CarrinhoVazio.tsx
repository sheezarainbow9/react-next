import { IconCircleX } from "@tabler/icons-react";

export default function CarrinhoVazio() {
  return (
  <div className="flex gap-3 justify-center text-zinc-50-">
  <IconCircleX />
  <span>Nenhum item no carrinho</span>
</div>)
}
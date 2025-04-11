import BarraSuperior from "./widgets/BarraSuperior";
import MenuNavegacao from "./widgets/MenuNavegacao";
import GaleriasProdutos from "./widgets/GaleriaProdutos";

export default function Home() {
  return (
    <div>
      <header className="bg-amber-300">
        <BarraSuperior />
        <MenuNavegacao />
      </header>

      <main>
        <GaleriasProdutos />
      </main>
    </div>
  );
}

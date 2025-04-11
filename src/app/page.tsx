import Image from "next/image";
import BarraSuperior from "./widgets/BarraSuperiror";
import MenuNavegacao from "./widgets/MenuNavegacao";

export default function Home() {
  return (
    <div>
      <header className="bg-amber-300">
        <BarraSuperior/>
        <MenuNavegacao/>

      </header>
    </div>
  );
}
 
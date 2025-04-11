import Link from "next/link";
import { Search } from "lucide-react";

export default function BarraSuperior() {
  return (
    <header className="container mx-auto w-full px-4 py-2 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-yellow-500">
        <img
          src="https://upload.wikimedia.org/wikipedia/pt/0/04/Logotipo_MercadoLivre.png"
          alt="Logo Mercado Livre"
          className="h-10"
        />
      </Link>

      {/* Barra de pesquisa */}
      <div className="border border-gray-200 bg-white flex items-center w-full max-w-xl mx-4">
        <input
          type="text"
          placeholder="Buscar produtos, marcas e muito mais..."
          className="w-full px-4 py-2  border-gray-300"
        />
        <button className="text-gray-200 p-2 rounded-r-full">
          <Search className="h-5 w-5 text-gray-200" />
        </button>
      </div>

      {/* Botão Assine Meli+ */}
      <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition">
        Assine Meli+
      </button>
    </header>
  );
}

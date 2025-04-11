// src/components/NavBar.tsx
import Link from "next/link";

export default function MenuNavegacao() {
    return (
        <nav className="w-full py-2">
          <ul className="flex justify-center space-x-6">
            <li>
              <Link
                href="#"
                className="text-sm font-medium text-gray-700 hover:text-yellow-500 transition"
              >
                Categorias
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-sm font-medium text-gray-700 hover:text-yellow-500 transition"
              >
                Ofertas
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-sm font-medium text-gray-700 hover:text-yellow-500 transition"
              >
                Cupons
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-sm font-medium text-gray-700 hover:text-yellow-500 transition"
              >
                Supermercado
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-sm font-medium text-gray-700 hover:text-yellow-500 transition"
              >
                Moda
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-sm font-medium text-gray-700 hover:text-yellow-500 transition"
              >
                Mercado Play
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-sm font-medium text-gray-700 hover:text-yellow-500 transition"
              >
                Vender
              </Link>
            </li>
          </ul>
        </nav>
      );
}

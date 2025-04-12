"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function GaleriasProdutos() {
  const [dadosResposta, setDadosResposta] = useState();

  const getProdutos = async () => {
    const requisicao = await fetch("http://localhost:3050/");
    const dadosResposta = await requisicao.json();    
    setDadosResposta(dadosResposta);
  };
  useEffect(() => {
    getProdutos();
  }, []);

  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {dadosResposta &&
            dadosResposta.map((produto) => (
              <Link
                href={`/produto/${produto.id}`}
                key={produto.id}
                className="border rounded-2xl p-4 shadow-sm hover:shadow-md transition block"
              >
                <img
                  src={produto.fotos[0].url}
                  alt={produto.fotos[0].descricao}
                  className="w-full h-40 object-cover rounded-xl mb-3"
                />
                <h2 className="text-lg font-semibold text-gray-800 mb-1">
                  {produto.titulo}
                  <p className="text-sm text-gray-600 mb-2">
                    {produto.descricao}
                  </p>
                </h2>
                <p className="text-2xl font-bold text-green-600 mb-2">
                  R$ {produto.preco}
                </p>
                <p className="text-sm text-gray-500">{produto.local}</p>
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}

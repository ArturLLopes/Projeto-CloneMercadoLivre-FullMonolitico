import { Injectable } from '@nestjs/common';

interface Foto {
  id: string;
  descricao: string;
  url: string;
}

interface Produto {
  id: string;
  titulo: string;
  descricao: string;
  preco: number;
  local: string;
  url: string;
  fotos: Foto[];
}

@Injectable()
export class AppService {
  getProdutos(): Produto[] {
    const dados: Produto[] = [
      {
        id: '1',
        titulo: 'Smartphone XYZ',
        descricao: 'Celular com 128GB, tela AMOLED e câmera tripla.',
        preco: 1299.0,
        local: 'São Paulo, SP',
        url: 'smartphone-XYZ',
        fotos: [
          {
            id: '1',
            descricao: 'Frente do Galaxy A54',
            url: 'https://images.kabum.com.br/produtos/fotos/sync_mirakl/649731/xlarge/Smartphone-Samsung-Galaxy-A06-128GB-Azul-Escuro-4g-Ram-4gb-C-mera-50mp-Selfie-8mp-Tela-6-7-_1742413229.jpg',
          },
          {
            id: '2',
            descricao: 'Traseira do Galaxy A54',
            url: 'https://http2.mlstatic.com/D_NQ_NP_2X_700208-MLU73017033086_112023-F.webp',
          },
        ],
      },
      {
        id: '2',
        titulo: 'Notebook Gamer ABC',
        descricao: 'Notebook com RTX 3060, 16GB RAM, SSD 1TB.',
        preco: 4599.0,
        local: 'Belo Horizonte, MG',
        url: 'produto/notebook-gamer-abc',
        fotos: [
          {
            id: '1',
            descricao: 'Notebook fechado',
            url: 'https://http2.mlstatic.com/D_NQ_NP_2X_890994-MLU72711200967_112023-F.webp',
          },
          {
            id: '2',
            descricao: 'Notebook aberto',
            url: 'https://http2.mlstatic.com/D_NQ_NP_2X_764570-MLU72711200965_112023-F.webp',
          },
        ],
      },
      {
        id: '3',
        titulo: 'Tênis Esportivo',
        descricao: 'Tênis confortável para corridas e caminhadas.',
        preco: 199.99,
        local: 'Curitiba, PR',
        url: 'produto/tenis-esportivo',
        fotos: [
          {
            id: '1',
            descricao: 'Tênis lateral',
            url: 'https://http2.mlstatic.com/D_NQ_NP_2X_898393-MLU73730891311_122023-F.webp',
          },
          {
            id: '2',
            descricao: 'Tênis vista superior',
            url: 'https://http2.mlstatic.com/D_NQ_NP_2X_948845-MLU73730891308_122023-F.webp',
          },
        ],
      },
      {
        id: '4',
        titulo: 'Cadeira Gamer',
        descricao: 'Cadeira ergonômica com ajuste de altura e inclinação.',
        preco: 899.0,
        local: 'Fortaleza, CE',
        url: 'produto/cadeira-gamer',
        fotos: [
          {
            id: '1',
            descricao: 'Cadeira gamer frontal',
            url: 'https://http2.mlstatic.com/D_NQ_NP_2X_820803-MLU72787541465_112023-F.webp',
          },
          {
            id: '2',
            descricao: 'Cadeira gamer lateral',
            url: 'https://http2.mlstatic.com/D_NQ_NP_2X_780374-MLU72787541463_112023-F.webp',
          },
        ],
      },
    ];
    return dados;
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

export interface Foto {
  id: string;
  descricao: string;
  url: string;
}

export interface Produto {
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
  constructor(private readonly prisma: PrismaService) {}

  async getProdutos() {
    const produtosDB = await this.prisma.produto.findMany({
      include: { fotos: true },
    });
    

    return produtosDB;
  }
}

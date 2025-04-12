# 🚀 Projeto Clone do Mercado Livre - Full Stack Moderno

Bem-vindo ao **Clone do Mercado Livre**! 🛒✨ Este projeto é uma réplica funcional do famoso e-commerce, desenvolvido com tecnologias modernas e escaláveis.

## 📚 Sobre o Projeto

Este projeto foi desenvolvido como parte do **curso gratuito** de Full Stack ministrado pelos renomados professores **Jamilton Damasceno** e **Jorge Sant'Ana**, que compartilharam seus conhecimentos e melhores práticas para a construção de aplicações web modernas. Agradecemos aos professores por disponibilizarem esse conteúdo de qualidade de forma acessível a todos!

O curso abordou desde conceitos fundamentais até técnicas avançadas de desenvolvimento, permitindo a criação deste clone funcional do Mercado Livre com arquitetura moderna.

## 🔧 Tecnologias Utilizadas

### Front-end
- **Next.js** (React) - Framework para construção de interfaces rápidas e SSR
- **TypeScript** - Tipagem estática para maior segurança no código
- **Tailwind CSS** - Estilização utilitária e responsiva

### Back-end
- **NestJS** - Framework modular e escalável para APIs
- **TypeORM** - ORM para integração com banco de dados
- **PostgreSQL** - Banco de dados relacional robusto


### Infraestrutura & DevOps
- **Docker** - Containerização para ambiente consistente
- **Docker Compose** - Orquestração de containers
- **Git & GitHub** - Versionamento e CI/CD

## 🛠️ Como Executar o Projeto

### Pré-requisitos
- Docker e Docker Compose
- Node.js (v18+)
- DBeaver (opcional)

### Passo a Passo

1. Clone o repositório:
```bash
git clone https://github.com/ArturLLopes/Projeto-CloneMercadoLivre-FullMonolitico.git
cd Projeto-CloneMercadoLivre-FullMonolitico
```

2. Suba os containers:
```bash
docker-compose up --build
```
4. Acesse as aplicações:
```bash

Front-end: http://localhost:3040

Back-end: http://localhost:3050

```

## 📂 Estrutura do ProjetoProjeto-CloneMercadoLivre-FullMonolitico/<br>
├── frontend/       # Aplicação Next.js<br>
├── backend/        # API NestJS<br>
├── docker/         # Configurações de containers<br>
└── docker-compose.yml<br>

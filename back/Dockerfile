# Usa a imagem oficial do Node.js
FROM node:22-alpine

# Cria o diretório da aplicação
WORKDIR /app

# Copia os arquivos para o container
COPY . .

# Instala as dependências
RUN npm install

# Comando para rodar a aplicação
CMD ["npm", "run", "start:dev"]

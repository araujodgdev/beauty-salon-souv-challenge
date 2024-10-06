# Beaty Salon (Souv tech challenge)

## Descrição

Este projeto é um desafio técnico proposto pela Souv. O desafio consiste em criar o front-end de um sistema de agendamento de horários para um salão de beleza, e um back-end para gerenciar os horários disponíveis.

## Tecnologias

#### Front-end
- React
- Typescript
- Axios
- TailwindCSS
- ReactQuery
- React Hook Form
- Zod
- NextJS

#### Back-end
- NodeJS
- Fastify
- Typescript
- DrizzleORM
- PostgreSQL
- Docker

## Como rodar o projeto

É necessário ter o NodeJS e o NPM instalados na máquina.

### Clonando o repositório

Clone o repositório e entre na pasta do projeto:

```bash
git clone
cd souv-tech-challenge
```

### Banco de dados

Para rodar o projeto, é necessário ter o Docker instalado na máquina. Com o Docker instalado, basta rodar o comando abaixo para subir o banco de dados PostgreSQL:

```bash
docker-compose up -d
```

### Back-end

Entre na pasta `backend` e instale as dependências:

```bash
cd backend
npm install
```

Gere as migrations:

```bash
npm run generate
```

Rode as migrations para criar as tabelas no banco de dados:

```bash
npm run migrate
```

Inicie o servidor:

```bash
npm run dev
```
O servidor estará rodando em `http://localhost:8080`.

### Front-end

Entre na pasta `frontend` e instale as dependências:

```bash
cd frontend
npm install
```

Inicie a aplicação:

```bash
npm run dev
```

A aplicação estará rodando em `http://localhost:3000`.

## Funcionalidades

- [x] Agendar um novo horário


## Autor

- [Douglas Araújo](https://www.linkedin.com/in/douglascparaujo/)


## Recomendações adicionais

Você pode criar um arquivo `.env` na raiz do projeto para configurar as variáveis de ambiente. Abaixo está um exemplo de como configurar as variáveis de ambiente:

```bash
# backend/.env
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/beauty_salon
PORT=8080
```

```bash
# frontend/.env
BACKEND_PUBLIC_API_URL=http://localhost:8080
```

## Extras

- [Explicação do Backend](https://youtu.be/MMaEIfA5rkY)
- [Demonstração do Backend](https://youtu.be/jpwTscD0tbU)
# 🧠 Task Manager API

API REST construída com Node.js e Express com objetivo de evoluir para um sistema real multiusuário de gerenciamento de tarefas.

---

### 🎯 Objetivo do Projeto

Simular a construção de um backend real, aplicando boas práticas de organização e arquitetura desde o início.

Projeto em evolução contínua para se tornar um sistema mais robusto com usuários, autenticação e persistência de dados.

---

### 🚀 Estrutura Atual

- server.js → Inicialização do servidor  
- src/app.js → Configuração da aplicação  
- src/routes → Definição das rotas  
- src/controllers → Controle das requisições  
- src/services → Regras de negócio da aplicação  
- src/repositories → Persistência e manipulação de dados  
- src/middlewares → Middleware de autenticação JWT  

Arquitetura baseada em separação de responsabilidades:
Server → App → Routes → Controllers → Services → Repositories

---

### 📦 Funcionalidades Implementadas

### ✔ GET /tasks
Lista todas as tarefas cadastradas.

### ✔ GET /tasks/:id
Busca tarefa específica por ID.

- 200 → Sucesso
- 404 → Tarefa não encontrada

### ✔ POST /tasks
Cria nova tarefa.

- Validação de título obrigatório
- 201 → Criado com sucesso
- 400 → Dados inválidos

### ✏ PUT /tasks/:id
Atualiza o título de uma tarefa existente.

- 200 → Atualização realizada com sucesso
- 400 → Dados inválidos
- 404 → Tarefa não encontrada

### 🗑 DELETE /tasks/:id
Remove uma tarefa pelo ID.

- 200 → Tarefa removida com sucesso
- 404 → Tarefa não encontrada

### Sistema de Usuários

- POST /auth/register  
- Cadastro de usuários.

- POST /auth/login  
- Autenticação de usuários com JWT.

- Senhas criptografadas com bcryptjs

- Middleware de autenticação

- Rotas protegidas utilizando Bearer Token

---

### 💾 Persistência de Dados

O projeto utiliza `fs.promises` para:

- Ler tarefas do arquivo `tasks.json`
- Ler usuários do arquivo `users.json`
- Atualizar o arquivo após cada modificação
- Manter os dados salvos mesmo após reiniciar o servidor

---

### 🛠 Tecnologias Utilizadas

- Node.js
- Express
- JavaScript
- JWT (jsonwebtoken)
- bcryptjs
- fs.promises
- Async/Await
- Gits

---

### ▶ Como Executar o Projeto

1. Instale as dependências:

```bash
npm install
```

2. Inicie o Servidor:

- node server.js

### Rotas de Autenticação

POST /auth/register

{
  "email": "user@email.com",
  "password": "123456"
}

POST /auth/login

{
  "email": "user@email.com",
  "password": "123456"
}

## 🔒 Rotas /tasks protegidas com JWT Bearer Token.

## Próximas Evoluções


- [x] Implementar DELETE /tasks/:id
- [x] Implementar PUT /tasks/:id
- [x] Persistência de dados
- [x] Sistema de usuários
- [x] Autenticação
- [ ] Relacionar tarefas aos usuários
- [ ] Integração com banco de dados
- [ ] Integração com banco de dados
- [ ] Deploy da API
- [ ] Documentação com Swagger

## 📌 Status

- Projeto em evolução contínua
- Backend estruturado com persistência local
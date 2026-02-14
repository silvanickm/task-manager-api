# 🧠 Task Manager API

API REST construída com Node.js e Express com objetivo de evoluir para um sistema real multiusuário de gerenciamento de tarefas.

---

## 🎯 Objetivo do Projeto

Simular a construção de um backend real, aplicando boas práticas de organização e arquitetura desde o início.

Projeto em evolução contínua para se tornar um sistema mais robusto com usuários, autenticação e persistência de dados.

---

## 🚀 Estrutura Atual

- server.js → Inicialização do servidor  
- src/app.js → Configuração da aplicação  
- src/routes → Definição das rotas  
- src/controllers → Regras de negócio separadas  

Arquitetura baseada em separação de responsabilidades (Server → App → Routes → Controllers).

---

## 📦 Funcionalidades Implementadas

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

---

## 🛠 Tecnologias Utilizadas

- Node.js
- Express
- JavaScript
- Arquitetura modular

---

## ▶ Como Executar o Projeto

1. Instale as dependências:

```bash
npm install
```

## Próximas Evoluções

- Implementar DELETE /tasks/:id
- Implementar PUT /tasks/:id
- Persistência de dados
- Sistema de usuários
- Autenticação
- Integração com banco de dados

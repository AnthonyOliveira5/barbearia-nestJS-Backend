
# Barbearia

Este é um projeto de barbearia desenvolvido em NestJS, onde clientes podem criar contas, acessar o sistema e agendar horários com barbeiros. O sistema diferencia clientes e administradores (usuários) através de autenticação e permissões.

## Funcionalidades

- **Clientes**:
  - Cadastro e login.
  - Visualização e criação de agendamentos.
  - Atualização de perfil.
  
- **Usuários/Admins**:
  - Gerenciamento de clientes, serviços e agendamentos.
  - Acesso completo a todas as rotas.

## Tecnologias Utilizadas

- **Node.js**
- **NestJS**
- **TypeORM**
- **SQLite** (banco de dados)

## Requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

## Configuração do Banco de Dados

O projeto utiliza SQLite como banco de dados padrão. O arquivo do banco será gerado automaticamente na raiz do projeto ao iniciar a aplicação.

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/AnthonyOliveira5/barbearia-nestJS-Backend.git
   cd barbearia-nestJS-Backend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute as migrações do banco de dados:
   ```bash
   npm run typeorm migration:run
   ```

4. Inicie o servidor:
   ```bash
   npm run start
   ```

O servidor estará rodando em `http://localhost:3001`.

## Endpoints

### Clientes
- **POST** `/clientes` - Cadastro de clientes.
- **GET** `/clientes/email/:email` - Busca cliente por email.
- **PATCH** `/clientes/:id/senha` - Atualização de senha com chave segura.

### Agendamentos
- **POST** `/agendamento` - Criação de um agendamento.
- **GET** `/agendamento` - Lista todos os agendamentos.
- **PATCH** `/agendamento/:id` - Atualização de um agendamento.
- **DELETE** `/agendamento/:id` - Exclusão de um agendamento.

### Serviços
- **POST** `/servicos` - Criação de serviços (apenas admins).
- **GET** `/servicos` - Lista de serviços.
- **PUT** `/servicos/:id` - Atualização de serviços (apenas admins).

### Usuários/Admins
- **POST** `/usuario` - Criação de usuários/admins.
- **GET** `/usuario` - Lista de usuários (apenas admins).

## Autenticação e Permissões

- Clientes têm acesso limitado às rotas relacionadas ao seu perfil e agendamentos.
- Usuários/Admins podem acessar todas as rotas do sistema.
- Guardas de autenticação e roles (`AuthGuard` e `RolesGuard`) protegem as rotas sensíveis.


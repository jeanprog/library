#  CRUD de Livros e Autores

Este projeto é uma aplicação web que permite aos usuários gerenciar livros e autores, incluindo adicionar, atualizar e excluir registros. O sistema é desenvolvido utilizando **Angular** no front-end e **NestJS** no back-end. A aplicação segue os princípios de **Design Orientado a Domínio (DDD)** e **princípios SOLID** para garantir um código escalável, sustentável e limpo.

## Índice

- [Funcionalidades](#funcionalidades)
- [Arquitetura](#arquitetura)
- [Tecnologias](#tecnologias)
- [Configuração](#configuração)
- [Uso](#uso)
- [Principais Conceitos](#principais-conceitos)
  - [Componentes no Angular](#componentes-no-angular)
  - [Event Binding e Compartilhamento de Dados](#event-binding-e-compartilhamento-de-dados)
  - [Formulários Reativos](#formulários-reativos)
  - [DTOs no NestJS](#dtos-no-nestjs)
  - [Manipulação de Datas](#manipulação-de-datas)
- [Controle de Versão e Branches](#controle-de-versão-e-branches)
- [Autor](#autor)

## Funcionalidades

- Adicionar, atualizar e excluir autores
- Adicionar, atualizar e excluir livros
- Obter livros de um autor específico
- Atualizações em tempo real nos formulários usando Formulários Reativos no Angular
- Arquitetura limpa utilizando Design Orientado a Domínio

## Arquitetura

O projeto é separado em:

- **Front-end (Angular)** para a interface com o usuário, formulários e comunicação com o back-end via HTTP.
- **Back-end (NestJS)** para lógica de negócios, validação de dados e persistência via APIs REST.

Os principais padrões arquiteturais incluem:

- **Princípios SOLID** para um código bem estruturado e sustentável.
- **Design Orientado a Domínio (DDD)** para organizar a lógica de negócios e desacoplar dependências.
- **Arquitetura Limpa** para separar as responsabilidades e manter o modelo de domínio independente dos frameworks.

## Tecnologias

### Front-end:
- **Angular** 16
- **Tailwind CSS** para design responsivo
- **Formulários Reativos** para controle dinâmico de formulários e validação
- **HTTPClient** para interação com o back-end
- **Componentes Standalone** para um design modular

### Back-end:
- **NestJS** com **TypeScript**
- **Prisma** para ORM e gerenciamento do banco de dados
- **PostgreSQL** como banco de dados
- **DTOs (Data Transfer Objects)** para validação de dados

## Configuração

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-repositorio.git](https://github.com/jeanprog/library.git)

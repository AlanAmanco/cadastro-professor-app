# Documentação da Aplicação Angular

Este repositório contém uma aplicação frontend construída com Angular 17 e Bootstrap. Siga os passos abaixo para configurar e executar a aplicação.

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado em sua máquina:

- Node.js e npm: Ambiente de execução JavaScript.
- Angular CLI: Ferramenta de linha de comando para criar e gerenciar projetos Angular.
- Editor de código: Recomenda-se o Visual Studio Code ou qualquer editor de sua preferência.

## Passos para Executar a Aplicação

1. Clone o Repositório:

   git clone https://github.com/seu-usuario/nome-do-repositorio.git

2. Navegue até o Diretório da Aplicação:

   cd nome-do-repositorio

3. Instale as Dependências do Projeto:

   npm install

4. Inicie o Servidor de Desenvolvimento:

   ng serve

5. Acesse a Aplicação:

   Abra um navegador da web e navegue até http://localhost:4200/. Você verá a aplicação em execução.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

- home: Contém os componentes e recursos relacionados à página inicial da aplicação.
- layout: Contém componentes e recursos compartilhados entre várias partes da aplicação, como cabeçalhos, rodapés, barras laterais, etc.
- login: Contém os componentes e recursos relacionados à funcionalidade de login da aplicação.
- professor: Contém os componentes e recursos relacionados à entidade "professor" da aplicação.
- template: Contém modelos ou esqueletos de código para serem usados em toda a aplicação.

## Arquivos na Raiz

- app.component: O componente principal da aplicação Angular.
- app.routes: O arquivo de configuração das rotas da aplicação Angular, que define as rotas e seus respectivos componentes.
- auth.guard: Um serviço de guarda de rotas para controlar o acesso às rotas da aplicação com base na autenticação do usuário.
- auth.service: Um serviço responsável pela autenticação de usuários na aplicação.
- professor.service: Um serviço responsável por fornecer funcionalidades relacionadas à entidade "professor", como recuperar, criar, atualizar e excluir professores.

## Personalização

Você pode personalizar a aplicação conforme necessário, modificando os arquivos na pasta /src. Além disso, você pode adicionar novos componentes, serviços e outros artefatos Angular conforme a lógica do seu projeto.

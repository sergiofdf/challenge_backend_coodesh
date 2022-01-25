# Back-end Challenge 🏅 2021 - Space Flight News

O objetivo do desafio é construir uma API Restful com as melhores práticas de desenvolvimento, baseada na API Space Flight News.
>https://api.spaceflightnewsapi.net/v3/documentation


Conceitos abordados:
- Utilizado MongoDB para registro dos artigos baixados/sincronizados com a API API Space Flight News;
- Criação de rotas (CRUD) para buscar, criar, atualizar e deletar artigos;
- Desenvolvido script para armazenar artigos da API no banco de dados;
- Criada função CRON para rodar o script de sincronização do banco de dados diariamente às 9h;
- Configurado ambiente Docker para execução do projeto;
- Criado sistema de simulação de alerta via email em caso de falha na execução do script de sincronização dos artigos;

Em andamento:
[ ] Elaborar documentação da API utilizando o conceito de Open API 3.0;
[ ] Escrever Unit Tests para os endpoints da API.

---

Como executar o projeto:
1. Faça um clone do repositório:

`git clone https://github.com/sergiofdf/challenge_backend_coodesh.git`

2. Abra a pasta do projeto

`cd pasta-projeto`

3. Execute o comando para criação do container e execução do código (necessário ter o Docker e Docker Compose instalado no PC):

`docker-compose up`

---

Ferramentas/frameworks utilizados no desenvolvimento:


 ![](https://img.shields.io/badge/Typescript-4.5.5-blue)

 ![](https://img.shields.io/badge/Node-14.17.2-green)

 ![](https://img.shields.io/badge/Express-4.17.2-yellow)

 ![](https://img.shields.io/badge/MongoDB-4.4.11-green)

 ![](https://img.shields.io/badge/Jest-27.4.7-blue)

 ![](https://img.shields.io/badge/Mongoose-6.1.7-red)

 ![](https://img.shields.io/badge/NodeSchedule-2.1.0-orange)

 ![](https://img.shields.io/badge/NodeMailer-6.7.2-purple)

 ![](https://img.shields.io/badge/Swagger-6.7.2-green)

 ![](https://img.shields.io/badge/Eslint-8.7.0-yellow)


 ---

## Rotas criadas

- [GET]/:  Retorna um Status: 200 e uma Mensagem "Back-end Challenge 2021 🏅 - Space Flight News"

- [GET]/articles/:   Lista todos os artigos da base de dados, utilizar o sistema de paginação para não sobrecarregar a REQUEST

- [GET]/articles/{id}: Obter a informação somente de um artigo

- [POST]/articles/: Adicionar um novo artigo

- [PUT]/articles/{id}: Atualizar um artigo baseado no id


- [DELETE]/articles/{id}: Remover um artigo baseado no id


---

> This is a challenge by Coodesh
> https://lab.coodesh.com/public-challenges/back-end-challenge-2021

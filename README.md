<p align="center">
  <img src="https://raw.githubusercontent.com/dearrudam/maratona-fullcycle-2.0-Desafio3/master/maratona-fullcycle-2.0-logo.png"/>
</p>

# Minha solução para o Desafio 3

Minha solução foi desenvolvida utilizando o framework [Nestjs](https://github.com/nestjs/nest).

## Descrição do Desafio 3

## Envio de mensagens usando WebRTC com Peer.js

* Crie duas rotas no Nest.js. "/sender" e "/receiver".
* Utilizando o Peer.js, replique o exemplo disponibilizado no repositório: [https://github.com/jmcker/Peer-to-Peer-Cue-System](https://github.com/jmcker/Peer-to-Peer-Cue-System)
* Nesse exemplo há um arquivo send.html e receive.html. O conteúdo do send.html terá de ser disponibilizado na rota "/sender" e o do receive.html na rota "/receiver".
* Acesse o /receiver e copie o ID gerado pelo exemplo
* Acesse o /sender e cole o ID gerado no receiver no campo ID e clique em connect.
* A conexão entre os pontos tem que ser estabelecida
* Realize o build da aplicação, gere uma imagem docker e faça o upload para o DockerHub
* Quando executarmos: "docker run -p 3000:3000 seu-login-docker/nome-da-sua-imagem" deveremos ter acesso a aplicação na porta 3000.

## Construir o projeto

```bash
$ npm install
```

## Executando o projeto

```bash
# development mode
$ npm run start

# watch mode (util para desenvolvimento (hot-reload))
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Executar os testes 

```bash
# unit tests (testes unitários)
$ npm run test

# e2e tests (testes de integração)
$ npm run test:e2e

# test coverage (cobertura de testes)
$ npm run test:cov
```


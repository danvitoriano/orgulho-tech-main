# Orgulho Tech Site

Site da comunidade Orgulho Tech, construído com Deco, Fresh e Deno.

## Requisitos

- Deno

## Desenvolvimento local

```sh
deno task dev
```

Abra `http://localhost:8000`.

## Comandos úteis

```sh
deno task preview
deno task build
deno task export:vercel
```

## Testes

Testes rápidos de estrutura:

```sh
deno task test:meetup
deno task test:newsletter
```

Testes de integração (upstream do Google Script):

```sh
deno task test:meetup:integration
deno task test:newsletter:integration
```

Pipeline de pré deploy:

```sh
deno task test:predeploy
```

## Deploy (Vercel)

O build da Vercel executa:

1. `deno task test:predeploy`
2. `deno task export:vercel`

Saída estática em `dist/`.


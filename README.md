![Logo Ecoleta][logo_url]

Projeto desenvolvido durante a Next Level Week #01  

----
  
![Image][capa_url]

## Objetivo

Criar uma aplicação que possibilita pessoas cadastrarem pontos de coleta de resíduos em uma cidade.

## Como funciona

* As pessoas poderam cadastrar pontos de coleta de resíduos pela __web__.

* Enquanto pelo __smartphone__ a pessoa poderia buscar pontos de coleta pertos dela, podendo até definir os resíduos que queira descartar.

## Tecnologias

As tecnologias usadas no projeto foram: 

- NodeJS 
- TypeScript
- React
- ReactNative
- Expo

## Estrutura do projeto

### Geral

```text
Ecoleta
| - mobile
| - server
| - web
| - .gitignore
```

### Específico

#### API

```text
Ecoleta
|  - server
|   | - src
|   |   | - config
|   |   |   | - multer.ts
|   |   | - controllers
|   |   |   | - ItemsController.ts
|   |   |   | - PointsController.ts
|   |   | - database
|   |   |   | - migrations
|   |   |   |   | - 00_create_points.ts
|   |   |   |   | - 01_create_items.ts
|   |   |   |   | - 02_create_points_items.ts
|   |   |   | - seeds
|   |   |   |   | - create_items.ts
|   |   |   | - connection.ts
|   |   |   | - database.sqlite
|   |   | - routes.ts
|   |   | - server.ts
|   | - uploads
|   |   | - "Diretório para armazenar as imagens utilizadas"
```

#### WEB

```text
Ecoleta
| - web
|   | - public
|   |   | - index.html
|   | - src
|   |   | - assets
|   |   |   | - home-background.svg
|   |   |   | - logo.svg
|   |   | - components
|   |   |   | - Dropzone
|   |   |   |   | - index.tsx
|   |   |   |   | - styles.css
|   |   | - pages
|   |   |   | - CreatePoint
|   |   |   |   | - index.tsx
|   |   |   |   | - styles.css
|   |   |   | - Home
|   |   |   |   | - index.tsx
|   |   |   |   | - styles.css
|   |   | - services
|   |   |   | - api.ts
|   |   | - App.css
|   |   | - App.tsx
|   |   | - index.tsx
|   |   | - react-app-env.d.ts
|   |   | - routes.tsx
|   | - .gitignore
|   | - package-lock.json
|   | - package.json
|   | - tsconfig.json
```

#### MOBILE

```text
Ecoleta
| - mobile
|   | - .expo-shared
|   |   | - assets.json
|   | - assets
|   |   | - icon.png
|   |   | - splash.png
|   |   | - icon.png
|   | - src
|   |   | - assets
|   |   |   |   "Diretório para armazenar as imagens utilizadas"
|   |   | - pages
|   |   |   | - Detail
|   |   |   |   | - index.tsx
|   |   |   | - Home
|   |   |   |   | - index.tsx
|   |   |   | - Points
|   |   |   |   | - index.tsx
|   |   | - services
|   |   |   | - api.ts
|   |   | - routes,tsx
|   | - .gitignore
|   | - App.tsx
|   | - app.json
|   | - bable.config.js
|   | - package-lock.json
|   | - package.json
|   | - tscondig.json
```

## Como executar o projeto

### Pré-requisitos para executar

Para a execução deve-se ter essas ferramentas instaladas na sua máquina:

* [NodeJS][node_url]
* [Expo CLI][expo_url]

### Executar a API

Primeiramente entre no diretório da `API`:

```bash
$ cd server/
```

E a seguir execute:

```bash
$ npm run dev
```

### Executar o Front-end

Primeiramente entre no diretório do `front-end`:

```bash
$ cd web/
```

E a seguir execute:

```bash
$ npm start
```

### Executar o Mobile

Primeiramente entre no diretório do `mobile`:

```bash
$ cd mobile/
```

E a seguir execute:

```bash
$ expo start
```

## Fotos do Projeto

Segue o link para o arquivo compactado (`.zip`) com as fotos do projeto:

* [Fotos da aplicação Ecoleta][fotos_url]

---

### Sobre o autor

* [Vinicius de Oliveira Jimenez][linkedin_url]

[capa_url]: assets/Ecoleta.png "Capa NLW"
[logo_url]: assets/logo.svg "Logo Ecoleta"

[node_url]: https://nodejs.org/en/download/ "Instalar Node"
[expo_url]: https://docs.expo.io/workflow/expo-cli/ "Instalar Expo CLI"
[linkedin_url]: https://www.linkedin.com/in/vinicius-jimenez-91a0951a6 "LinkedIn"
[fotos_url]: https://drive.google.com/file/d/1fmQqpimjTRXhpAsQ9H4Rg7zyEJKiV__-/view "Clique aqui para baixar"

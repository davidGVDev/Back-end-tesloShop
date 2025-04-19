# Teslo Shop API

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>

## Descripción

Teslo Shop es una API RESTful desarrollada con NestJS para gestionar productos de una tienda en línea. Esta aplicación utiliza TypeORM para la gestión de la base de datos y sigue las mejores prácticas de desarrollo con TypeScript.

## Características

- 🚀 Desarrollado con NestJS
- 📦 Base de datos PostgreSQL con TypeORM
- 🔒 Configuración de variables de entorno
- 📝 Documentación de API
- 🧪 Testing con Jest
- 🛠️ Docker support

## Requisitos Previos

- Node.js (v16 o superior)
- PostgreSQL
- Docker (opcional)

## Instalación

```bash
# Clonar el repositorio
$ git clone [url-del-repositorio]

# Instalar dependencias
$ npm install

# Configurar variables de entorno
$ cp .env.template .env

# Iniciar la aplicación
$ npm run start:dev
```

## Endpoints

### Productos

- `POST /products` - Crear un nuevo producto
- `GET /products` - Obtener todos los productos
- `GET /products/:id` - Obtener un producto por ID
- `PATCH /products/:id` - Actualizar un producto
- `DELETE /products/:id` - Eliminar un producto

## Scripts Disponibles

- `npm run start` - Iniciar la aplicación
- `npm run start:dev` - Iniciar en modo desarrollo
- `npm run start:prod` - Iniciar en modo producción
- `npm run test` - Ejecutar tests
- `npm run test:e2e` - Ejecutar tests end-to-end
- `npm run lint` - Lint del código
- `npm run format` - Formatear código

## Licencia

Este proyecto está bajo la Licencia [UNLICENSED](LICENSE).
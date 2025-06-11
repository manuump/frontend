# 🌇 OcioJaen - Plataforma de Ocio y Turismo en Jaén

Bienvenido al **frontend** del proyecto **OcioJaen**, una plataforma web moderna y accesible que tiene como propósito **visibilizar las actividades culturales, de ocio y turismo** en la provincia de Jaén. Este proyecto busca facilitar el acceso a la oferta cultural tanto para **habitantes locales** como para **turistas**, además de servir como herramienta de promoción para **empresas y comercios locales**.

---

## 📌 Índice

- [🌇 OcioJaen - Plataforma de Ocio y Turismo en Jaén](#-ociojaen---plataforma-de-ocio-y-turismo-en-jaén)
  - [📌 Índice](#-índice)
  - [🎯 Descripción del Proyecto](#-descripción-del-proyecto)
  - [🧑‍🤝‍🧑 Roles y Funcionalidades](#-roles-y-funcionalidades)
    - [👤 Usuario Registrado (USUARIO)](#-usuario-registrado-usuario)
    - [🏢 Empresa / Organizador (EMPRESA)](#-empresa--organizador-empresa)
    - [👮 Administrador (ADMIN)](#-administrador-admin)
  - [🧠 Tecnologías Utilizadas](#-tecnologías-utilizadas)
  - [🚀 Instalación y Puesta en Marcha](#-instalación-y-puesta-en-marcha)
    - [🔧 Requisitos Previos](#-requisitos-previos)
    - [▶️ Pasos para iniciar el proyecto](#️-pasos-para-iniciar-el-proyecto)
  - [🔐 Sistema de Autenticación](#-sistema-de-autenticación)
  - [🌐 Comunicación con Backend](#-comunicación-con-backend)
  - [📂 Endpoints Consumidos](#-endpoints-consumidos)
  - [🧪 Estado del Proyecto](#-estado-del-proyecto)
  - [🤝 Agradecimientos](#-agradecimientos)
---

## 🎯 Descripción del Proyecto

**OcioJaen** nace con la misión de dar visibilidad a todas las actividades de ocio, eventos culturales, conciertos, rutas turísticas, talleres, y otros eventos que tienen lugar en la provincia de Jaén. La aplicación permite a los usuarios:

- Consultar los eventos disponibles.
- Apuntarse a los eventos que les interesen.
- Visualizar sus participaciones.
- A las empresas, crear, gestionar y visualizar los eventos que organizan.
- Y a los administradores, gestionar el contenido y los usuarios de la plataforma.

> 🎯 **Objetivo principal:** Unificar en una sola plataforma toda la oferta cultural de Jaén y fomentar su promoción tanto a nivel local como turístico.

---

## 🧑‍🤝‍🧑 Roles y Funcionalidades

### 👤 Usuario Registrado (USUARIO)
- ✅ Puede ver todos los eventos publicados.
- ✅ Puede buscar eventos por nombre o fecha.
- ✅ Puede inscribirse en eventos con un solo click.
- ✅ Puede ver la lista de eventos en los que participa.

### 🏢 Empresa / Organizador (EMPRESA)
- ✅ Puede crear nuevos eventos desde su panel personal.
- ✅ Puede eliminar eventos creados por ella.
- ✅ Puede ver el listado de participantes por evento.
- ✅ Puede descargar la lista de participantes en formato **PDF**.

### 👮 Administrador (ADMIN)
- ✅ Puede gestionar (listar, filtrar y eliminar) usuarios y empresas.
- ✅ Puede eliminar y editar acceso a todos los usuarios.
- ✅ Tiene acceso completo a la plataforma.

---

## 🧠 Tecnologías Utilizadas

| Tecnología            | Descripción                                        |
|------------------------|----------------------------------------------------|
| ⚛️ React + Vite         | Framework de frontend ligero y moderno             |
| 🔗 React Router DOM     | Navegación y control de rutas                      |
| 🌐 Axios                | Cliente HTTP para peticiones al backend REST       |
| 📄 jsPDF                | Generación de PDFs para reportes de eventos        |
| 🧠 Context API / Hooks  | Manejo del estado global y autenticación           |

---

## 🚀 Instalación y Puesta en Marcha

### 🔧 Requisitos Previos

- Tener instalado [Node.js](https://nodejs.org/)
- Tener instalado npm o yarn
- Tener corriendo el backend de OcioJaen (ver instrucciones en su repositorio correspondiente)

### ▶️ Pasos para iniciar el proyecto

```bash
#- Clona el repositorio
git clone https://github.com/tu-usuario/ociojaen-frontend.git

#- Accede al directorio del proyecto
cd ociojaen-frontend

#- Instala las dependencias
npm install

#- Inicia el servidor de desarrollo
npm run dev

```

#El proyecto se ejecutará en http://localhost:5173

## 🔐 Sistema de Autenticación

La aplicación utiliza autenticación basada en **JWT (JSON Web Tokens)**, proporcionada por el backend:

- 🔒 Los tokens se guardan en `localStorage` para persistencia entre sesiones.
- 🧑‍⚖️ Los roles (`ADMIN`, `EMPRESA`, `USUARIO`) están codificados en el token y se interpretan en el frontend.
- 🛡️ Las rutas están protegidas por roles mediante el router.

---

## 🌐 Comunicación con Backend

El frontend se comunica con el backend desarrollado en **Spring Boot** a través de **Axios**, configurado en el archivo:

## 📂 Endpoints Consumidos

| Recurso            | Endpoint                               | Método | Descripción                            |
|--------------------|----------------------------------------|--------|----------------------------------------|
| 🔐 Auth            | `/auth/login`                          | POST   | Inicia sesión                          |
|                    | `/auth/register`                       | POST   | Registro de nuevo usuario              |
| 👥 Usuarios        | `/usuarios`                            | GET    | Lista de usuarios (solo admin)         |
|                    | `/usuarios/{id}`                       | DELETE | Eliminar usuario                       |
| 📅 Eventos         | `/eventos`                             | GET    | Obtener eventos públicos               |
|                    | `/eventos`                             | POST   | Crear evento (solo empresa)            |
|                    | `/eventos/{id}`                        | DELETE | Eliminar evento                        |
| 🧾 Participaciones | `/eventos/{id}/participaciones`        | GET    | Ver participantes del evento           |
|                    | `/participaciones`                     | POST   | Participar en un evento                |

---

## 🧪 Estado del Proyecto

- ✅ Estructura modular del frontend con React + Vite
- ✅ Roles con control de acceso y redirecciones por permisos
- ✅ Sistema de login, registro y token JWT funcional
- ✅ Visualización de eventos públicos
- ✅ Participación en eventos
- ✅ Panel privado para empresas
- ✅ Descarga de participantes en PDF
- ✅ Gestión de usuarios para administradores

## 🤝 Agradecimientos

Gracias por apoyar el desarrollo cultural, turístico y local de la provincia de Jaén.
Este proyecto ha sido creado con el corazón para poner en valor todo lo que nuestra tierra tiene que ofrecer.
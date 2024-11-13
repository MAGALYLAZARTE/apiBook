# API de Libros con Asignación de Roles

Este es un proyecto de API RESTful para gestionar libros y usuarios, donde los usuarios pueden tener roles como `admin` o `user`. Los administradores pueden realizar operaciones como crear, actualizar y eliminar libros, mientras que los usuarios pueden consultar los libros.

## Funcionalidades

- **Registro de usuario**: Permite registrar nuevos usuarios con roles `admin` o `user`.
- **Login de usuario**: Autenticación de usuarios usando email y contraseña.
- **Gestión de libros**: CRUD (Crear, Leer, Actualizar, Eliminar) de libros.
  - `GET /books`: Obtiene todos los libros.
  - `POST /books`: Crea un nuevo libro.
  - `PUT /books/:id`: Actualiza un libro existente.
  - `DELETE /books/:id`: Elimina un libro por ID.

## Tecnologías utilizadas

- **Node.js**: Entorno de ejecución JavaScript.
- **Express**: Framework web para Node.js.
- **Sequelize**: ORM para manejar la base de datos MySQL.
- **MySQL**: Base de datos relacional.
- **JWT (JSON Web Token)**: Autenticación basada en tokens.
- **Bcrypt**: Encriptación de contraseñas.
- **Postman**: Herramienta para probar las APIs.

### Requisitos

1. Node.js (versión recomendada: 16.x o superior).
2. MySQL o MariaDB.

### Pasos para la instalación

1. **Clonar el repositorio:**

   ```bash
   git clone <url-del-repositorio>


# WeeHeat ☀️🗺️💦
Proyecto final del Bootcamp realizado con las diferentes verticales de la escuela: Data, Cloud, Ciberseguridad, UX/UI, Marketing y finalmente nosotros, Full-Stack (Fernando Mariño y Rebeca Arrogante). En este proyecto hemos trabajado en plasmar el trabajo de todos nuestros compañeros y hacerlo realidad, una aplicación web que ayude al turista a llevar a cabo un turismo menos caluroso y más divertido. La sinergia creada entre todos ha hecho posible crear un proyecto tan completo, así nace __WeeHeat__.
## Links
Aquí puedes ver la app desplegada
# Desarrollo 👨‍💻👩‍💻 
## Objetivo
Desarrollar una aplicación web completa, tanto la parte de cliente, como la parte de servidor. Atendiendo los requerimientos de nuestros compañeros para crear una aplicación segura, escalable y con muy buena experiencia de usuario.
## Aplicación
Weeheat se centra en facilitar al usuario espacios donde poder informarse, refrescarse y refugiarse del calor y también por supuesto, divertirse. El registro del usuario es necesario para poder acceder a la app, a partir de ahí, el usuario interactua con un mapa para poder buscar fuentes, zonas verdes, museos, centros de salud, consultar la temperatura y eventos por geolocalización o buscador, con la opción de poder guardar en favoritos la información o el lugar que te gusta o faciliatarte una ruta para llegar a un punto en concreto.
## Implementación
Para la parte de cliente hemos utilizado *__Javascript__* y *__React__* junto con el prepocesador de CSS *__Sass__*, la parte de servidor ha sido desarrollada con *__NodeJS__* y *__ExpressJS__* como entorno de trabajo. Por la naturaleza de la aplicación necesitamos 2 tipos de base de datos, una relacional para la cual hemos utilizado *__ElphantSQL__* y otra no relacional donde hemos utilizado *__MongoAtlas__*. A todo esto se le sumarian diferentes dependencias que hemos ido instalando a medida que el proyecto avanzaba
### Dependencias del cliente 
```
"dependencies": {
    "@react-google-maps/api": "^2.19.2",
    "axios": "^1.4.0",
    "countries-list": "^2.6.1",
    "date-fns": "^2.30.0",
    "js-cookie": "^3.0.5",
    "jwt-decode": "^3.1.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-hook-form": "^7.45.2",
    "react-icons": "^4.10.1",
    "react-router-dom": "^6.14.2",
    "sass": "^1.64.1",
    "use-places-autocomplete": "^4.0.0",
    "uuidv4": "^6.2.13",
    "vite-plugin-svgr": "^3.2.0"
  }
```
### Dependencias del servidor
```
"dependencies": {
    "bcrypt": "^5.1.0",
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "express-session": "^1.17.3",
    "helmet": "^7.0.0",
    "jsonwebtoken": "^9.0.1",
    "mongodb": "^5.7.0",
    "mongoose": "^7.4.1",
    "morgan": "^1.10.0",
    "passport": "^0.6.0",
    "passport-google-oauth20": "^2.0.0",
    "pg": "^8.11.1",
    "sequelize": "^6.32.1",
    "swagger-jsdoc": "^6.2.8",
    "swagger-ui-express": "^5.0.0"
  }
```
# Starter Pack 🏃
## Run Scripts
``` npm run dev ```
## .env example (Server)
```
MG_PASSWORD=
JWT_SECRET=
DB_HOST=
DB_DATABASE= 
DB_USER=
DB_PASSWORD=
CLIENT_ID= 
CLIENT_SECRET=
```
## .env example (Client)
```
VITE_GOOGLE_API=
```
## Capturas de Pantalla 👀




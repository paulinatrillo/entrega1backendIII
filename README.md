# Proyecto Ecommerce - Backend III

Este proyecto implementa un backend para un ecommerce con rutas de usuarios, mascotas y adopciones. Está dockerizado y listo para ser testeado.

# Documentación con Swagger

La documentación de los endpoints de Users está disponible en:

http://localhost:8080/api/docs

# Docker

Este proyecto está dockerizado y se puede ejecutar de la siguiente manera:

- Construir la imagen
docker build -t paulinatrillo/backend-ecommerce:1.0 .


- La imagen del backend está disponible en Docker Hub:
paulinatrillo/backend-ecommerce:1.0

# Ejecutar los contenedores

docker network create ecommerce-net
docker run -d --name mongodb --network ecommerce-net -p 27017:27017 mongo:6
docker run -d --name backend-ecommerce --network ecommerce-net -p 8080:8080 paulinatrillo/backend-ecommerce:1.0

# Tests Funcionales

Se incluyen tests funcionales para todos los endpoints del router adoption.router.js:

npm test

Cubre casos de éxito y de error.

Utiliza jest y supertest.

# Instrucciones de Uso

Asegurarse de tener Docker instalado y corriendo.

Construir la imagen del backend y ejecutar los contenedores como se indica arriba.

Acceder a http://localhost:8080/api/docs para ver la documentación de Users.

Ejecutar los tests con npm test.
# Proyecto Ecommerce - Backend III

Este proyecto implementa un backend para un ecommerce con rutas de usuarios, mascotas y adopciones. Está dockerizado y listo para ser desplegado.

## Docker

Este proyecto está dockerizado y se puede ejecutar con Docker de la siguiente manera:

```bash
# Construir la imagen
docker build -t paulinatrillo/backend-ecommerce:1.0 .

# Ejecutar los contenedores
docker network create ecommerce-net
docker run -d --name mongodb --network ecommerce-net -p 27017:27017 mongo:6
docker run -d --name backend-ecommerce --network ecommerce-net -p 8080:8080 paulinatrillo/backend-ecommerce:1.0

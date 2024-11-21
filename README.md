# backEnd ShopJPA

Este proyecto backEnd implementa una API REST para una tienda online utilizando Spring Boot, Spring Data JPA y H2 como base de datos embebida.

### ¿Cómo interactúan los archivos?

Frontend:
El usuario interactúa con el HTML (index.html).
script.js gestiona las interacciones y actualiza el DOM.
api.services.js envía solicitudes al backend.

Backend:
El controlador (ProductController) recibe las solicitudes.
El servicio (ProductService) maneja la lógica de negocio.
El repositorio (ProductRepository) interactúa con la base de datos.


### Archivos

BACKEND:

Product.java
Este archivo define nuestro modelo principal
Usa JPA para mapear la clase a una tabla en la base de datos.

ProductRepository.java
Extiende JpaRepository y proporciona métodos para interactuar con la base de datos 
findAll(): Recupera todos los productos.
save(product): Guarda o actualiza un producto.
findById(id): Busca un producto por su ID.
deleteById(id): Elimina un producto por su ID.


ProductService.java
Actúa como la capa intermedia entre el controlador (ProductController) y el repositorio (ProductRepository)
findAll(): Llama a productRepository.findAll() para obtener todos los productos.
findById(id): Busca un producto por su ID.
save(product): Guarda o actualiza un producto.
delete(id): Elimina un producto por su ID.


ProductController.java
Es el puente entre el frontend y el backend. Aqui se encuentran los endpoints HTTP para realizar operaciones CRUD.
GET /api/products: Obtiene todos los productos.
POST /api/products: Crea un nuevo producto.
PUT /api/products/{id}: Actualiza un producto existente.
DELETE /api/products/{id}: Elimina un producto por su ID.


FRONTEND:

script.js
Contiene la lógica para interactuar con el backend y manipular el DOM.

printList(): Obtiene productos del backend y los muestra en el HTML.
addItemToList(): Envía un producto nuevo al backend usando un POST.
deleteItemFromList(id): Elimina un producto usando un DELETE.
checkedItem(id, index): Marca un producto como comprado/no comprado usando un PUT.


api.services.js
Contiene las funciones para interactuar con el backend.Centraliza las operaciones de red (HTTP) para interactuar con el backend.

getAllItemsFromAPI(): Realiza un GET para obtener todos los productos.
postItemToAPI(item): Realiza un POST para añadir un producto.
deleteItemFromAPI(id): Realiza un DELETE para eliminar un producto.
putItemToAPI(id, item): Realiza un PUT para actualizar un producto.


## Tecnologías utilizadas

* Java 21
* Spring Boot 3.1.4
* Spring Data JPA
* H2 Database
* Maven

## Cómo ejecutar el proyecto

1. Clona el repositorio.
2. Navega al directorio raíz del proyecto.
3. Ejecuta el comando `mvn spring-boot:run`.

## API REST

La API REST expone endpoints para gestionar productos, categorías, etc.  (Describe aquí los endpoints que has implementado).

## Contribuciones

Se agradecen las contribuciones. Por favor, crea un fork del proyecto y abre un pull request con tus cambios.


<img width="981" alt="miGramolaSreenShot" src="https://github.com/user-attachments/assets/21ff32be-cd77-4a3a-a780-95c430e94fda">

# Mi Gramola API

Este proyecto implementa una API REST para gestionar discos musicales, desarrollada con Spring Boot y consumida por un frontend en JavaScript.

---

## **¿Cómo interactúan los archivos?**

### **Frontend**
- **index.html**: Proporciona la interfaz de usuario para interactuar con la API.
- **script.js**: Gestiona las interacciones del usuario y manipula el DOM.
- **api.services.js**: Envía solicitudes HTTP al backend para realizar operaciones CRUD.

### **Backend**
- **ListaDiscosApi.java**: Punto de entrada del proyecto Spring Boot.
- **Disco.java**: Define el modelo principal de disco.
- **DiscoRepositorio.java**: Interactúa con la base de datos para realizar operaciones CRUD.
- **DiscoControlador.java**: Exposición de los endpoints de la API REST.

---

## **Archivos del Backend**

### **Disco.java**
- Define el modelo de datos para un disco.
- Usa JPA para mapear la clase a una tabla en la base de datos.
- Atributos:
  - `id` (Integer): Identificador único del disco.
  - `nombreDisco` (String): Título del disco.
  - `artista` (String): Nombre del artista.

### **DiscoRepositorio.java**
- Extiende `JpaRepository` para interactuar con la base de datos.
- Métodos principales:
  - `findAll()`: Recupera todos los discos.
  - `save(disco)`: Guarda o actualiza un disco.
  - `findById(id)`: Busca un disco por su ID.
  - `deleteById(id)`: Elimina un disco por su ID.

### **DiscoControlador.java**
- Define los endpoints de la API REST:
  - **GET `/api/discos`**: Obtiene todos los discos.
  - **GET `/api/discos/{id}`**: Obtiene un disco por su ID.
  - **POST `/api/discos`**: Crea un nuevo disco.
  - **PUT `/api/discos/{id}`**: Actualiza un disco existente.
  - **DELETE `/api/discos/{id}`**: Elimina un disco por su ID.
- Manejo de errores:
  - Responde con `404 Not Found` si no se encuentra el disco.

---

## **Archivos del Frontend**

### **script.js**
- Contiene la lógica para interactuar con el backend y actualizar la interfaz del usuario.
- Funciones principales:
  - **`printList()`**: Obtiene discos del backend y los muestra en el DOM.
  - **`addItemToList()`**: Envía un nuevo disco al backend mediante un POST.
  - **`deleteItemFromList(id)`**: Elimina un disco mediante un DELETE.
  - **`searchById(id)`**: Busca un disco específico mediante un GET.
  - **`viewAllDiscosAlert()`**: Muestra todos los discos en un `alert`.

### **api.services.js**
- Centraliza las operaciones HTTP para interactuar con el backend.
- Funciones principales:
  - **`getAllItemsFromAPI()`**: Realiza un GET para obtener todos los discos.
  - **`postItemToAPI(item)`**: Realiza un POST para añadir un nuevo disco.
  - **`deleteItemFromAPI(id)`**: Realiza un DELETE para eliminar un disco.
  - **`getItemByIdFromAPI(id)`**: Realiza un GET para buscar un disco por su ID.

---

## **Tecnologías utilizadas**

- **Backend**:
  - Java 21
  - Spring Boot 3.1.4
  - Spring Data JPA
  - H2 Database
  - Maven

- **Frontend**:
  - HTML5
  - JavaScript (ES6+)
  - CSS3

---

## **Cómo ejecutar el proyecto**

1. **Clonar el repositorio**:Ejecutar el backend:
```bash
   git clone https://github.com/tu-repositorio/mi-gramola-api.git
   cd mi-gramola-api
```

2. Usa Maven para compilar y ejecutar:
```bash
   mvn spring-boot:run
```

3. Abrir el frontend:
Abre el archivo index.html en un navegador.
Interactúa con la API para gestionar discos.

## API REST Endpoints

<img width="597" alt="Captura de pantalla 2024-11-22 a las 3 31 03" src="https://github.com/user-attachments/assets/74f9d414-dc00-4543-9461-376e944acec3">


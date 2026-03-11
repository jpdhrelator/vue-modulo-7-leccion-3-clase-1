# 🪄 Misión: La Lista de Estudiantes de Hogwarts (Nivel Inicial)

¡Felicidades, joven mago/a! Has sido seleccionado para crear un registro mágico de los habitantes de Hogwarts usando **Vuex**. Tu objetivo es traer la lista de personajes desde la API y permitir que el usuario elija a sus compañeros favoritos.

---

## 🏰 Requisitos del Hechizo (Store de Vuex)

Configura tu Store (`store/index.js`) con estos elementos básicos:

### 1. El Estado (State)
Define solo dos variables:
*   `personajes`: Una lista vacía para guardar a todos los magos.
*   `favoritos`: Una lista para guardar los nombres de tus personajes preferidos.

### 2. Las Mutaciones (Mutations)
Crea estas dos funciones para cambiar los datos:
*   Una para guardar la lista completa de personajes que recibas de la API.
*   Una para agregar un nombre nuevo a la lista de `favoritos`.

### 3. Las Acciones (Actions)
*   **"Cargar Magos":** Debe usar `axios.get` para traer los datos de la API: `https://hp-api.onrender.com/api/characters`. Al terminar, debe llamar a la mutación para guardar los resultados.

### 4. Los Getters (Getters)
*   Un getter sencillo que devuelva el **total** de personajes cargados (para que sepamos cuántos magos hay en total en el registro).

---

## 🎨 La Interfaz Mágica (Componente)

Crea un componente sencillo (puedes llamarlo `ListaHogwarts.vue`) que cumpla lo siguiente:

### 1. Invocación
*   Un botón que diga **"Llamar Estudiantes"**. Al presionarlo, debe ejecutar la *Acción* para traer los datos de la API.

### 2. El Gran Comedor (Visualización)
*   Muestra a todos los personajes cargados.
*   Cada uno debe mostrar su **Nombre** y su **Imagen**.
*   Añade un botón de **"⭐ Favorito"** al lado de cada nombre. Al pulsarlo, debe guardar ese nombre en la lista de favoritos del Store (usando un `commit`).

### 3. Sala Común (Favoritos)
*   En la parte inferior o un lateral, muestra el **Total de Personajes** (usando el *Getter*).
*   Muestra la lista de los nombres que has marcado como favoritos. Si no hay ninguno, pon: *"Aún no tienes amigos favoritos"*.

---

### 📚 Documentación para Aprendices
*   **API URL:** `https://hp-api.onrender.com/api/characters`
*   **Herramientas:** Usa `axios` para las peticiones, `useStore` de Vuex y `computed` de Vue para mantener la magia reactiva.


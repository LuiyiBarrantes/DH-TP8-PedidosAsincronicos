# DH-TP8-PedidosAsincronicos
## Instalar dependencias en carpeta backend y correr el proyecto para consumir los endpoints ejecutando en la terminal los siguentes comandos:
```
  >npm i

  >nodemon
```
## Correr en VScode la vista home.html usando alguna extension como LiveServer.


#### Micro desafío - Paso 1:
1. En home.html: listar todas las películas que nos trae el endpoint de listado de
películas: router.get('/', moviesAPIController.list);
2. En formulario.html: cargar los datos de una película en particular, para luego
poder modificarla y/o eliminarla utilizando los endpoints:
    - Detalle de una película: router.get('/:id', moviesAPIController.detail);
    - Modificar una película: router.put('/update/:id', moviesAPIController.update);
3. Utilizar el mismo formulario anterior para poder crear una película por medio del
endpoint: router.post('/create', moviesAPIController.create);
#### Micro desafío - Paso 2:
1. Tendremos que capturar el ​evento click sobre ​cada ​estrellita (ojo que puede haber
muchas estrellitas).
2. Al hacer clic en la estrellita debe almacenar en el ​storage el id de la película
seleccionada.
3. Nótese que puede haber muchas películas favoritas. Dado esto, ¿qué tipo de dato
debemos almacenar en storage? Luego tendremos una página llamada
favoritos.html, donde debemos​:
    - Listar las películas que han sido marcadas como favoritas por el usuario.
    - Si aún no tuviese ninguna película, esta página debe indicar que aún no tiene
    nada.
    - Agregar en el encabezado de home.html un botón a “Mis películas favoritas”,
    Este botón solo debe aparecer si el usuario ya tiene películas favoritas.

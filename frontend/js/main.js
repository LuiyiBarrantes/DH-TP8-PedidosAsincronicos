const $ = (id) => document.getElementById(id);
const qs = (id) => document.querySelector(id);
window.onload = async () => {
  const app = document.getElementById("root");
  //traigo los favoritos del localstorage o del array
  const favorites = localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem("favorites")) : [];
  const container1 = document.querySelector('.container')
  //si favoritos tiene longitud mayor a cero creo el boton que me redirige a los favoritos
  if (favorites.length > 0) {
    const favoritesButton = document.createElement('a')
    favoritesButton.setAttribute('class', 'botonAgregar')
    favoritesButton.setAttribute('href', 'favoritas.html')
    favoritesButton.setAttribute('id', 'favoritesButton')
    favoritesButton.innerText = 'Ver favoritos'
    container1.appendChild(favoritesButton)
  }
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  app.appendChild(container);
  console.log(favorites);
  //localStorage.clear()
  // Aqui debemos agregar nuestro fetch
  try {
    let response = await fetch('http://localhost:3031/api/movies')
    let peliculas = await response.json()
    //console.log(peliculas);
    /** Codigo que debemos usar para mostrar los datos en el frontend*/
    let data = peliculas.data;

    data.forEach((movie) => {
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const h1 = document.createElement("h1");
      h1.textContent = movie.title;

      const p = document.createElement("p");
      p.textContent = `Rating: ${movie.rating}`;

      //creo el boton para ir a la vista formulario para modificar o eliminar una pelicula
      const editButton = document.createElement("a")
      editButton.textContent = 'Modificar'
      editButton.setAttribute('href', `formulario.html?id=${movie.id}`)
      editButton.setAttribute('class', 'botonModificar')

      //creo la estrellita para los favoritos
      const star = document.createElement('i')
      if (!favorites.includes(movie.id)) {
        star.setAttribute('class', "far fa-star favStar")
      } else {
        star.setAttribute('class', "fas fa-star favStar favStarFlip")
      }
      star.setAttribute('id', `${movie.id}`)

      //le doy funcionalidad a la estrellita
      star.addEventListener("click", () => {

        //si el boton para ver los favoritos no existe lo creo al hacer click
        if (!$('favoritesButton')) {

          const favoritesButton = document.createElement('a')
          favoritesButton.setAttribute('class', 'botonAgregar')
          favoritesButton.setAttribute('id', 'favoritesButton')
          favoritesButton.setAttribute('href', 'favoritas.html')
          favoritesButton.innerText = 'Ver favoritos'
          container1.appendChild(favoritesButton)
        }

        console.log(`hice click en la estrella ${movie.id}`);

        //cambio las clases al hacer click, para identificar si estan o no en favoritos
        star.classList.toggle("far");
        star.classList.toggle("favStarFlip");
        star.classList.toggle("fas");

        //si el id de la pelicula no esta en favoritos al hacer click, lo agrego con push
        if (!favorites.includes(movie.id)) {
          favorites.push(movie.id);
          localStorage.setItem("favorites", JSON.stringify(favorites));
          console.log(localStorage.favorites);
        } //caso contrario lo corto del array con splice
        else {
          const index = favorites.indexOf(movie.id)
          favorites.splice(index, 1)
          localStorage.setItem("favorites", JSON.stringify(favorites));
          console.log(localStorage.favorites);
          //si no tengo mas peliculas en favoritos y el boton de favoritos existe lo quito con remove
          if (favorites.length === 0 && favoritesButton) {
            favoritesButton.remove();
          }
        }
      })

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
      if (movie.genre !== null) {
        const genero = document.createElement("p");
        genero.textContent = `Genero: ${movie.genre.name}`;
        card.appendChild(genero);
      }
      if (movie.length !== null) {
        const duracion = document.createElement("p");
        duracion.textContent = `Duración: ${movie.length}`;
        card.appendChild(duracion);
      }
      card.appendChild(editButton)
      card.appendChild(star)
    });
  } catch (error) {
    console.log(error);
  }


};

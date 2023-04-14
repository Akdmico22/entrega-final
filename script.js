const navToggle = document.querySelector(".btn-menu")
const navMenu = document.querySelector("nav")

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
});

const origenSelect = document.getElementById("selectProvincias");

function Provincias() {
  fetch("https://apis.datos.gob.ar/georef/api/provincias")
    .then((response) => response.json())
    .then((json) => {
      const provincias = json.provincias.map(provincia=>provincia.nombre);
      provincias.sort();
      provincias.forEach(nombre => {
        const option = document.createElement("option");
        option.value = nombre;
        option.text = nombre;
        origenSelect.add(option);
      });
    });
}

Provincias();


const origen = document.getElementById("selectProvincias");

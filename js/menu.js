function cargarContenido(pagina) {
    fetch(pagina)
        .then(response => response.text())
        .then(data => {
            const contenedor = document.getElementById("contenedor");
            contenedor.innerHTML = data;

            // Verifica qué archivo cargaste y agrega su script correspondiente
            if (pagina === "calculadora.html") {
                cargarScript("js/calculadora.js");
            } else if (pagina === "cuadrado.html") {
                cargarScript("js/cuadrado.js");
            } else if (pagina === "empleados.html") {
                cargarScript("js/empleados.js");
            }
        })
        .catch(error => {
            document.getElementById("contenedor").innerHTML =
                "<p style='color:red;'>Error al cargar el contenido.</p>";
            console.error(error);
        });
}

function cargarScript(src) {
    const script = document.createElement("script");
    script.src = src;
    document.body.appendChild(script);
}

// Función para mostrar la bienvenida
function mostrarBienvenida() {
    const contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = "<h2>Bienvenido al portal de programas</h2><p>Selecciona una opción del menú para continuar.</p>";
}

// Agregar evento al botón de inicio
document.getElementById("btnInicio").addEventListener("click", mostrarBienvenida);

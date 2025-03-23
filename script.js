function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

let isLoading = false;

function mostrarImagen() {
    
    if (!isLoading) {
isLoading = true;
       
        const seleccion = document.getElementById('posicion').value;
        let opciones = [];

        if (seleccion === "1") {
            opciones = [1, 1, 1, 2, 2, 2, 3, 5, 6]; // Más probabilidad para la imagen 1
        } else if (seleccion === "2") {
            opciones = [3, 3, 4, 4, 5, 6, 6, 7, 8];
        }
        else if (seleccion === "3") {
            opciones = [4, 4, 6, 6, 7, 8, 9, 10, 10, 12];
        }
        else if (seleccion === "4") {
            opciones = [7, 8, 9, 10, 10, 11, 12, 13, 14];
        }

        const imagenSeleccionada = opciones[Math.floor(Math.random() * opciones.length)];
        const imagen = document.getElementById('imagen');
        imagen.src = `images/${imagenSeleccionada}.png`;
        document.getElementById('imagen-container').style.display = 'block';

        imagen.classList.remove('tambaleando'); // Quita la clase para reiniciar animación
        setTimeout(() => {
            imagen.classList.add('tambaleando'); // Vuelve a agregar la clase tras un pequeño delay
        }, 10);

        mostrarImagenYContar();

        isLoading = false;

    }


}

let contador = 1;

function mostrarImagenYContar() {

    // Incrementar el contador
    contador++;
    document.getElementById("contador").innerText = contador;
}

console.log("Estoy cerca de las vias");

//para los mensajes desplegables

//ventana
document.getElementById("click-img1").onclick = function () {
    const textElement = document.getElementById("display-text1");
    textElement.style.display = "block"; // Muestra la ventana en bloque
};

//para que se oculte la ventana

document.addEventListener("click", function (event) {
    const textElement = document.getElementById("display-text1");
    const imgElement = document.getElementById("click-img1");

    // Si el clic no es en la ventana ni en la imagen, oculta la ventana
    if (!textElement.contains(event.target) && event.target !== imgElement) {
        textElement.style.display = "none";
    }
});

document.getElementById("click-img2").onclick = function () {
    const videoContainer = document.getElementById("video-container1");
    videoContainer.style.display = "block"; // muestra el video
};

document.addEventListener("click", function (event) {
    const videoContainer = document.getElementById("video-container1"); // ahora sí está correcto
    const imgElement = document.getElementById("click-img2");

    if (!videoContainer.contains(event.target) && event.target !== imgElement) {
        videoContainer.style.display = "none";
    }
});

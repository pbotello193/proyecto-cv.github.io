//Modo nocturno

const btnSwitch = document.querySelector("#switch");

btnSwitch.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    btnSwitch.classList.toggle("active");

    // Guardamos el modo en local storage.
    if(document.body.classList.contains("dark")){
        localStorage.setItem("dark-mode", "true");
    } else {
        localStorage.setItem("dark-mode", "false")
    }
});

//Obtenemos el modo actual.
if (localStorage.getItem("dark-mode") === "true"){
    document.body.classList.add("dark");
    btnSwitch.classList.add("active");
} else {
    document.body.classList.remove("dark");
    btnSwitch.classList.remove("active");
}

//Mostrar los enlaces de la web

function mostrarEnlaces() {
    document.getElementById("enlaces0").style.display = "inline";
    document.getElementById("enlaces1").style.display = "inline";
    document.getElementById("enlaces2").style.display = "inline";
}
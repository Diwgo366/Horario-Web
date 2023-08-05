// Boton para aparecer el formulario de Modificar horario
let Modificar_horario = document.getElementById("boton_modificar_horario");
Modificar_horario.addEventListener("click", function() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("Formulario_modificar_horario").style.display = "block";
});

// Boton para aparecer el formulario de Agregar cursos
let Agregar_cursos = document.getElementById("boton_agregar_cursos");
Agregar_cursos.addEventListener("click", function() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("Formulario_agregar_cursos").style.display = "block";
});

// Boton para aparecer el formulario de Agregar cursos
let Editar_cursos = document.getElementById("boton_editar_cursos");
Editar_cursos.addEventListener("click", function() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("Formulario_editar_cursos").style.display = "block";
});
// Boton para aparecer el formulario de Exportar Horarios
let Importar_horario = document.getElementById("boton_importar_horario");
Importar_horario.addEventListener("click", function() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("Formulario_importar_horario").style.display = "block";
});

// Boton para desaparecer todo al hacer click al overlay
let Overlay = document.getElementById("overlay");
Overlay.addEventListener("click", function() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("Formulario_modificar_horario").style.display = "none";
    document.getElementById("Formulario_importar_horario").style.display = "none";
    document.getElementById("Formulario_agregar_cursos").style.display = "none";
    document.getElementById("Formulario_editar_cursos").style.display = "none";
    document.getElementById("Formulario_importar_horario").style.display = "none";
});

let Modo = document.querySelector("#switch");

Modo.addEventListener("click", () =>{
    // Recuperar el valor actual de la variable del almacenamiento local
    let DarkMode = localStorage.getItem("DarkMode");
    localStorage.setItem("DarkMode", DarkMode === "true" ? false : true);
    document.body.classList.toggle("light");
})
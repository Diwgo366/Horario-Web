
// Boton para aparecer el formulario de Modificar dias
let Modificar_dias = document.getElementById("boton_modificar_dias");
Modificar_dias.addEventListener("click", function() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("Formulario_modificar_dias").style.display = "block";
});

// Boton para aparecer el formulario de Modificar horas
let Modificar_horas = document.getElementById("boton_modificar_horas");
Modificar_horas.addEventListener("click", function() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("Formulario_modificar_horas").style.display = "block";
});

// Boton para aparecer el formulario de Agregar cursos
let Agregar_cursos = document.getElementById("boton_agregar_cursos");
Agregar_cursos.addEventListener("click", function() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("Formulario_agregar_cursos").style.display = "block";
});

// Boton para aparecer el formulario de Agregar cursos
let Eliminar_cursos = document.getElementById("boton_eliminar_cursos");
Eliminar_cursos.addEventListener("click", function() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("Formulario_eliminar_cursos").style.display = "block";
});
// Boton para aparecer el formulario de Exportar Horarios
let Importar_horario = document.getElementById("boton_importar_horario");
Importar_horario.addEventListener("click", function() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("Formulario_importar_horario").style.display = "block";
});
//Elementos generales
let tabla = document.getElementById("Tabla_horario");
let primera_fila = tabla.rows[0];
//Definicion de los parametros de la tabla principal
let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
let numero_columnas = localStorage.getItem('numero_columnas') !== null ? Number(localStorage.getItem('numero_columnas')) : 5;
let hora_inicio_tabla = localStorage.getItem('hora_inicio_tabla') !== null ? Number(localStorage.getItem('hora_inicio_tabla')) : 6;
let hora_fin_tabla = localStorage.getItem('hora_fin_tabla') !== null ? Number(localStorage.getItem('hora_fin_tabla')) : 20;
var variable = JSON.parse(localStorage.getItem("Cursos")) || [];
// Asigancion de valores preestablecidos de los formularios
document.getElementById("numero_dias").value = numero_columnas;
document.getElementById("hora_inicio_tabla").value = hora_inicio_tabla;
document.getElementById("hora_fin_tabla").value = hora_fin_tabla;

// Se asigna las variables para los mensajes de advertencia
let Contenedor = document.querySelector("#Formulario_modificar_horario");
let Elemento = Contenedor.querySelector(".Advertencia");
let Advertencia1 = Elemento.querySelector("p b");

//Se verifica si se cuenta con el valor de DarkMode
let ValidacionDark = localStorage.getItem("DarkMode");
if (ValidacionDark === null){
    localStorage.setItem("DarkMode", true);
}

//Se imprime la pagina dependiendo del valor de DarlMode
let Dark2 = localStorage.getItem("DarkMode");
if (Dark2 === "false") {
    document.body.classList.add("light");
} else {
    document.body.classList.remove("light");
}

ImprimirTabla(numero_columnas,hora_inicio_tabla,hora_fin_tabla,variable);

//Se definen los botones
let CambiarHorario = document.querySelector("#boton_enviar_1");
let Cancelar = document.querySelector("#boton_cancelar_1");

//Boton Submit
CambiarHorario.addEventListener("click",function(){
    //Extrae las variables
    numero_columnas = parseInt(document.getElementById("numero_dias").value);
    hora_inicio_tabla = parseInt(document.getElementById("hora_inicio_tabla").value);
    hora_fin_tabla = parseInt(document.getElementById("hora_fin_tabla").value);
    Elemento.style.display = "none";

    if (hora_inicio_tabla != null && hora_fin_tabla != null){
        if (hora_inicio_tabla >= 0 && hora_inicio_tabla <= 24 && hora_fin_tabla >= 0 && hora_fin_tabla <= 24 && hora_fin_tabla >= hora_inicio_tabla) {
            //Se guardan las variables si son validas-
            localStorage.setItem('numero_columnas', numero_columnas);
            localStorage.setItem('hora_inicio_tabla', hora_inicio_tabla);
            localStorage.setItem('hora_fin_tabla', hora_fin_tabla);

            //Se actualiza la tabla principal
            cursos_variable = JSON.parse(localStorage.getItem("Cursos")) || [];
            BorrarTabla();
            ImprimirTabla(numero_columnas,hora_inicio_tabla,hora_fin_tabla,cursos_variable);
            //Se actualiza la tabla de modificar
            BorrarTablaCursos()
            CrearTablaCursos(cursos_variable)
            //Se oculta el formulario

            document.getElementById("Formulario_modificar_horario").style.display = "none";
            document.getElementById("overlay").style.display = "none";

        } else if (hora_inicio_tabla < 0 || hora_inicio_tabla > 24 || hora_fin_tabla < 0 || hora_fin_tabla > 24) {
            Elemento.style.display = "flex";
            Advertencia1.textContent = "Fuera de rango";

        } else if (hora_inicio_tabla > hora_fin_tabla) {
            Elemento.style.display = "flex";
            Advertencia1.innerHTML = "La hora de inicio debe ser <br> menor que la hora final";
        }

    } else {
        Elemento.style.display = "flex";
        Advertencia1.textContent = "Ingrese todos los datos";
    }
});

// Boton Cancelar
Cancelar.addEventListener("click", function() {
    document.getElementById("Formulario_modificar_horario").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    Elemento.style.display = "none";
});
let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
let numero_columnas = Number(localStorage.getItem('numero_columnas')) || 5;
let tabla = document.getElementById("Tabla_horario");
let primera_fila = tabla.rows[0];
let hora_inicio_tabla = Number(localStorage.getItem('hora_inicio_tabla')) || 6;
let hora_fin_tabla = Number(localStorage.getItem('hora_fin_tabla'))  || 20;
document.getElementById("hora_inicio_tabla").value = hora_inicio_tabla;
document.getElementById("hora_fin_tabla").value = hora_fin_tabla;
let Contenedor = document.querySelector("#Formulario_modificar_horario");
let Elemento = Contenedor.querySelector(".Advertencia");
let Advertencia1 = Elemento.querySelector("p b");
var variable = JSON.parse(localStorage.getItem("Cursos")) || [];

//Se imprime la tabla por defecto
for (let i = 0; i < numero_columnas; i++) {
    let celdas = primera_fila.insertCell(i + 1);
    let span = document.createElement("span");
    celdas.appendChild(span);
    span.innerHTML = dias[i];
}

for (let i = hora_inicio_tabla; i <= hora_fin_tabla-1; i++) {
    let filas = tabla.insertRow(-1);
    let celdas = filas.insertCell(-1);
    let span = document.createElement("span");
    celdas.appendChild(span);
    span.innerHTML = i + ":00 - " + (i + 1) + ":00";
    for (let j = 0; j < numero_columnas; j++) {
        filas.insertCell(-1);
    }
}

for (let i = 0; i < variable.length; i++) {
    let curso = variable[i];
    if (curso.ocultar === false) {
        for (let j = 0; j < curso.horario.length; j++) {
            let horario = curso.horario[j];
            let diaIndex = dias.indexOf(horario.dia);
            let filaInicio = horario.inicio - hora_inicio_tabla + 1;
            let filaFin = horario.final - hora_inicio_tabla;
            for (let k = filaInicio; k <= filaFin; k++) {
                if (k >= 1 && k < tabla.rows.length && diaIndex >= 0 && diaIndex < numero_columnas) {
                    let celda = tabla.rows[k].cells[diaIndex + 1];
                    let span = document.createElement("span");
                    span.innerHTML = curso.nombre;
                    span.style.backgroundColor = curso.color;
                    span.style.color = "#25262B";
                    celda.appendChild(span);
                }
            }
        }
    }
}




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

    if ((hora_fin_tabla && hora_inicio_tabla) || (hora_fin_tabla === 0 && hora_inicio_tabla) || (hora_fin_tabla  && hora_inicio_tabla === 0) || (hora_fin_tabla === 0  && hora_inicio_tabla === 0) ) {
        if (hora_inicio_tabla >= 0 && hora_inicio_tabla <= 24 && hora_fin_tabla >= 0 && hora_fin_tabla <= 24 && hora_fin_tabla >= hora_inicio_tabla) {
            //Se guardan las variables si son validas-
            localStorage.setItem('numero_columnas', numero_columnas);
            localStorage.setItem('hora_inicio_tabla', hora_inicio_tabla);
            localStorage.setItem('hora_fin_tabla', hora_fin_tabla);
            
            //Se recarga la pagina
            location.reload();
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
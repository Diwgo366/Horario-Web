
//Funcion para crear la tabla donde modificar los cursos
function CrearTablaCursos(cursos_modificados_variable){
    // Creación del formulario para editar los cursos
    if (cursos_modificados_variable.length === 0) {
        let fila = Tabla_cursos.insertRow();
        for (let i = 1;i < 5; i++){
            let celda1 = fila.insertCell();
            let span = document.createElement("span");
            celda1.appendChild(span);
            span.innerHTML = "Sin datos";
        }
    } else {
        for (let i = 0; i < cursos_modificados_variable.length; i++) {
            let curso = cursos_modificados_variable[i];
            let fila = Tabla_cursos.insertRow();
            let celda1 = fila.insertCell();
            let celda2 = fila.insertCell();
            let celda3 = fila.insertCell();
            let celda4 = fila.insertCell();

            celda1.innerHTML = `<span><input type="text" value="${curso.nombre}"></span>`;
            celda2.innerHTML = `<span><input type="color" value="${curso.color}"></span>`;
            celda3.innerHTML = `<span><input type="checkbox" id="btn-switch${(i+1)}" ${curso.ocultar ? "checked" : ""}><label class="lbl-switch" for="btn-switch${(i+1)}" ></label></span>`;
            celda4.innerHTML = `<span><button class='boton'>Eliminar</button></span>`;
            // Crear un elemento de entrada oculto para almacenar el estado de eliminación
            let oculto = document.createElement("input");
            oculto.type = "hidden";
            oculto.className = "input-oculto";
            oculto.value = "false";
            fila.appendChild(oculto);
        };
        // Agregar evento de clic al botón "Eliminar" en cada fila
        let eliminarBotones = document.querySelectorAll("#Tabla_cursos .boton");
        eliminarBotones.forEach(function(boton) {
            boton.addEventListener("click", function() {
                let fila = this.parentElement.parentElement.parentElement;
                let inputOculto = fila.querySelector(".input-oculto");
                // Obtener el elemento de entrada oculto y alternar su valor
                if (inputOculto.value === "true") {
                    inputOculto.value = "false";
                    fila.style.backgroundColor = "";
                } else {
                    inputOculto.value = "true";
                    fila.style.backgroundColor = "#8B0000";
                }
            });
        });
    }
}

//funcion para borrar la tabla donde modificar los cursos
function BorrarTablaCursos() {
    let TablaBorrar = document.getElementById("Tabla_cursos");
    while (TablaBorrar.rows.length > 1) {
        TablaBorrar.deleteRow(1);
    }
}

//Funcion para crear la tabla principal
function ImprimirTabla(columnas,inicio,fin,cursos){
    let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    //Se imprime la tabla por defecto
    for (let i = 0; i < columnas; i++) {
        let celdas = primera_fila.insertCell(i + 1);
        let span = document.createElement("span");
        celdas.appendChild(span);
        span.innerHTML = dias[i];
    }

    for (let i = inicio; i <= fin-1; i++) {
        let filas = tabla.insertRow(-1);
        let celdas = filas.insertCell(-1);
        let span = document.createElement("span");
        celdas.appendChild(span);
        span.innerHTML = Number(i) + ":00 - " + (Number(i) + 1) + ":00";
        for (let j = 0; j < columnas; j++) {
            filas.insertCell(-1);
        }
    }

    for (let i = 0; i < cursos.length; i++) {
        let curso = cursos[i];
        if (curso.ocultar === false) {
            for (let j = 0; j < curso.horario.length; j++) {
                let horario = curso.horario[j];
                let diaIndex = dias.indexOf(horario.dia);
                let filaInicio = horario.inicio - inicio + 1;
                let filaFin = horario.final - inicio;
                for (let k = filaInicio; k <= filaFin; k++) {
                    if (k >= 1 && k < tabla.rows.length && diaIndex >= 0 && diaIndex < columnas) {
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

};

//funcion para borrar la tabla principal
function BorrarTabla() {
    let TablaBorrar = document.getElementById("Tabla_horario");
    while (TablaBorrar.rows.length > 1) {
        TablaBorrar.deleteRow(1);
    }
    while (TablaBorrar.rows[0].cells.length > 1) {
        TablaBorrar.rows[0].deleteCell(1);
    }
}

//Funcion agregar cursos
function Agregar_Curso(Cursos, nombre, color, horario) {
    var Curso = {
        nombre: nombre,
        color: color,
        ocultar: false,
        horario: horario,
    };
    Cursos.push(Curso);
}

//Funcion agregar horarios
function Agregar_horario(dia, HoraInicio, HoraFinal) {
    return {
        dia: dia,
        inicio: HoraInicio,
        final: HoraFinal,
    };
}

//Funcion escoger color aleatorio
function color_aleatorio() {
    const colores = ["#FFA07A", "#20B2AA", "#87CEFA", "#778899", "#FFB6C1", "#FFA500", "#6A5ACD", "#00FF7F", "#FFD700", "#BA55D3",
    "#FF6347", "#3CB371", "#1E90FF", "#696969", "#FF69B4", "#FF8C00", "#483D8B", "#00FA9A", "#DAA520", "#9370DB",
    "#DC143C", "#2E8B57", "#4169E1", "#808080", "#FF1493", "#FF4500", "#000080", "#008000", "#B8860B", "#8A2BE2"];

    const indiceAleatorio = Math.floor(Math.random() * colores.length);
    return colores[indiceAleatorio];
}
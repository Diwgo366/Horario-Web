let Tabla_cursos = document.getElementById("Tabla_cursos");
var cursos_modificar = JSON.parse(localStorage.getItem("Cursos")) || [];
let Contenedor4 = document.querySelector("#Formulario_editar_cursos");
let Elemento4 = Contenedor4.querySelector(".Advertencia");
let Advertencia4 = Elemento4.querySelector("p b");

// Creación del formulario para editar los cursos
if (cursos_modificar.length === 0) {
    let fila = Tabla_cursos.insertRow();
    for (let i = 1;i < 5; i++){
        let celda1 = fila.insertCell();
        let span = document.createElement("span");
        celda1.appendChild(span);
        span.innerHTML = "Sin datos";
    }
} else {
    for (let i = 0; i < cursos_modificar.length; i++) {
        let curso = cursos_modificar[i];
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

let Cancelar3 = document.getElementById("boton_cancelar_3");
Cancelar3.addEventListener("click", function() {
    // Se oculta el mensaje de advertencia
    Elemento4.style.display = "none";
    // Eliminar todas las filas de la tabla
    let filas = document.querySelectorAll("#Tabla_cursos tr");
    for (let i = filas.length - 1; i > 0; i--) {
        filas[i].remove();
    }

    cursos_modificar = JSON.parse(localStorage.getItem("Cursos")) || [];
    
    if (cursos_modificar.length === 0) {
        let fila = Tabla_cursos.insertRow();
        for (let i = 1;i < 5; i++){
            let celda1 = fila.insertCell();
            let span = document.createElement("span");
            celda1.appendChild(span);
            span.innerHTML = "Sin datos";
        }
    } else {
        for (let i = 0; i < cursos_modificar.length; i++) {
            let curso = cursos_modificar[i];
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
    document.getElementById("Formulario_editar_cursos").style.display = "none";
    document.getElementById("overlay").style.display = "none";
});

let Actualizar_Cursos = document.getElementById("boton_enviar_3");
Actualizar_Cursos.addEventListener("click", function() {
    // Se oculta el mensaje de advertencia
    Elemento4.style.display = "none";
    // Obtener todas las filas de la tabla
    let filas = document.querySelectorAll("#Tabla_cursos tr");
    // Crear una nueva matriz para almacenar los cursos actualizados
    let cursos_actualizados = [];
    // Recorrer todas las filas de la tabla
    for (let i = 1; i < filas.length; i++) {
        let fila = filas[i];
        // Obtener el valor del elemento de entrada oculto
        let inputOculto = fila.querySelector(".input-oculto");
        let eliminado = inputOculto ? inputOculto.value === "true" : false;
        if (!eliminado) {
            // Si el curso no está marcado como eliminado, actualizar sus valores y agregarlo a la matriz de cursos actualizados
            let curso = cursos_modificar[i - 1];
            curso.nombre = fila.cells[0].querySelector("input").value;
            curso.color = fila.cells[1].querySelector("input").value;
            curso.ocultar = fila.cells[2].querySelector("input").checked;
            cursos_actualizados.push(curso);
        }
    }
    // Validar que ningún campo de texto esté vacío
    let inputsVacios = cursos_actualizados.filter(curso => curso.nombre.trim() === "");
    if (inputsVacios.length > 0) {
        Elemento4.style.display = "flex";
        Advertencia4.innerHTML = "Complete todos los campos antes de enviar.";
    } else {
        // Actualizar la variable cursos_modificar con los cursos actualizados
        cursos_modificar = cursos_actualizados;
        // Actualizar el almacenamiento local
        localStorage.setItem("Cursos", JSON.stringify(cursos_modificar));
        document.getElementById("Formulario_editar_cursos").style.display = "none";
        document.getElementById("overlay").style.display = "none";
        location.reload();
    }
});
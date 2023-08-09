var cursos_modificar = JSON.parse(localStorage.getItem("Cursos")) || [];
let Tabla_cursos = document.getElementById("Tabla_cursos");
let Contenedor4 = document.querySelector("#Formulario_editar_cursos");
let Elemento4 = Contenedor4.querySelector(".Advertencia");
let Advertencia4 = Elemento4.querySelector("p b");

CrearTablaCursos(cursos_modificar)

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
    BorrarTablaCursos()
    CrearTablaCursos(cursos_modificar)
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
        
        //Se actualiza la tabla principal
        numero_columnas = localStorage.getItem("numero_columnas") || 5;
        hora_inicio_tabla = localStorage.getItem("hora_inicio_tabla")  || 6;
        hora_fin_tabla = localStorage.getItem("hora_fin_tabla") || 20;
        cursos_variable = JSON.parse(localStorage.getItem("Cursos")) || [];
        BorrarTabla();
        ImprimirTabla(numero_columnas,hora_inicio_tabla,hora_fin_tabla,cursos_variable);
        //Se actualiza la tabla de modificar
        BorrarTablaCursos()
        CrearTablaCursos(cursos_variable)
        //Se oculta el formulario
        document.getElementById("Formulario_editar_cursos").style.display = "none";
        document.getElementById("overlay").style.display = "none";
    }
});
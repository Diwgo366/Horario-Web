function loadHTML(file, element, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        document.getElementById(element).innerHTML = this.responseText;
        if (callback) callback();
    }
    };
    xhr.open("GET", file, true);
    xhr.send();
}

loadHTML("../html/cabecera.html", "Cabecera", function() {
    // Funcionalidad para aparecer el formulario de Modificar dias
    let Modificar_dias = document.getElementById("boton_modificar_dias");
    Modificar_dias.addEventListener("click", function() {
        document.getElementById("overlay").style.display = "block";
        document.getElementById("Formulario_modificar_dias_contenido").style.display = "block";
    });

    // Funcionalidad para aparecer el formulario de Modificar horas
    let Modificar_horas = document.getElementById("boton_modificar_horas");
    Modificar_horas.addEventListener("click", function() {
        document.getElementById("overlay").style.display = "block";
        document.getElementById("Formulario_modificar_horas_contenido").style.display = "block";
    });

    // Funcionalidad para aparecer el formulario de Agregar cursos
    let Agregar_cursos = document.getElementById("boton_agregar_cursos");
    Agregar_cursos.addEventListener("click", function() {
        document.getElementById("overlay").style.display = "block";
        document.getElementById("Formulario_agregar_cursos_contenido").style.display = "block";
    });

    // Funcionalidad para aparecer el formulario de Agregar cursos
    let Eliminar_cursos = document.getElementById("boton_eliminar_cursos");
    Eliminar_cursos.addEventListener("click", function() {
        document.getElementById("overlay").style.display = "block";
        document.getElementById("Formulario_eliminar_cursos_contenido").style.display = "block";
    });
    // Funcionalidad para aparecer el formulario de Exportar Horarios
    let Importar_horario = document.getElementById("boton_importar_horario");
    Importar_horario.addEventListener("click", function() {
        document.getElementById("overlay").style.display = "block";
        document.getElementById("Formulario_importar_horario_contenido").style.display = "block";
    });
    
    loadHTML("../html/tabla.html", "Tabla", function() {
        let CambiarHorario = document.querySelector("#boton_enviar_2");
        let Cancelar = document.querySelector("#boton_cancelar_2");
        let HoraInicioTabla = 6;
        let HoraFinTabla = 20;
        let Tabla = document.getElementById("Tabla_horario");

        for (let i = HoraInicioTabla; i <= HoraFinTabla; i++) {
            let row = Tabla.insertRow(-1);
            let cell = row.insertCell(-1);
            cell.innerHTML = i + ":00 - " + i + ":59";
            for (let j = 0; j < 6; j++) {
                row.insertCell(-1);
            }
        }
        //Boton Submit
        CambiarHorario.addEventListener("click", function() {
            HoraInicioTabla = parseInt(document.getElementById("hora_inicio_tabla").value);
            HoraFinTabla = parseInt(document.getElementById("hora_fin_tabla").value);
            let Tabla = document.getElementById("Tabla_horario");
            while (Tabla.rows.length > 1) {
                Tabla.deleteRow(1);
            }
            for (let i = HoraInicioTabla; i <= HoraFinTabla; i++) {
                let row = Tabla.insertRow(-1);
                let cell = row.insertCell(-1);
                cell.innerHTML = i + ":00 - " + i + ":59";
                for (let j = 0; j < 6; j++) {
                    row.insertCell(-1);
                }
            }
            document.getElementById("Formulario_modificar_horas_contenido").style.display = "none";
            document.getElementById("overlay").style.display = "none";
        });
        // Boton Cancelar
        Cancelar.addEventListener("click", function() {
            document.getElementById("Formulario_modificar_horas_contenido").style.display = "none";
            document.getElementById("overlay").style.display = "none";
        });
    });
});

// Importacion de los formularios
loadHTML("../html/formularios/formulario_modificar_dias.html", "Formulario_modificar_dias");  
loadHTML("../html/formularios/formulario_modificar_horas.html", "Formulario_modificar_horas");
loadHTML("../html/formularios/formulario_agregar_cursos.html", "Formulario_agregar_cursos");
loadHTML("../html/formularios/formulario_eliminar_cursos.html", "Formulario_eliminar_cursos");
loadHTML("../html/formularios/formulario_importar_horario.html", "Formulario_importar_horario");
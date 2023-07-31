let CambiarHorario2 = document.querySelector("#boton_enviar_2");
let Cancelar2 = document.querySelector("#boton_cancelar_2");
let HoraInicioTabla = 6;
let HoraFinTabla = 20;
let Tabla2 = document.getElementById("Tabla_horario");

for (let i = HoraInicioTabla; i <= HoraFinTabla; i++) {
    let filas2 = Tabla2.insertRow(-1);
    let celdas2 = filas2.insertCell(-1);
    celdas2.innerHTML = i + ":00 - " + i + ":59";
    for (let j = 0; j < numero_columnas; j++) {
        filas2.insertCell(-1);
    }
}
//Boton Submit
CambiarHorario2.addEventListener("click", function() {
    HoraInicioTabla = parseInt(document.getElementById("hora_inicio_tabla").value);
    HoraFinTabla = parseInt(document.getElementById("hora_fin_tabla").value);
    let Tabla2 = document.getElementById("Tabla_horario");

    if (HoraFinTabla >= HoraInicioTabla) {
        while (Tabla2.rows.length > 1) {
            Tabla2.deleteRow(1);
        }
        for (let i = HoraInicioTabla; i <= HoraFinTabla; i++) {
            let filas2 = Tabla2.insertRow(-1);
            let celdas2 = filas2.insertCell(-1);
            celdas2.innerHTML = i + ":00 - " + i + ":59";
            for (let j = 0; j < numero_columnas; j++) {
                filas2.insertCell(-1);
            }
        }
        document.getElementById("Formulario_modificar_horas").style.display = "none";
        document.getElementById("overlay").style.display = "none";
        let Contenedor2 = document.querySelector("#Formulario_modificar_horas");
        let Elemento2 = Contenedor2.querySelector(".Advertencia");
        Elemento2.style.display = "none";

    } else {
        let Contenedor2 = document.querySelector("#Formulario_modificar_horas");
        let Elemento2 = Contenedor2.querySelector(".Advertencia");
        Elemento2.style.display = "block";
    }
    
});

// Boton Cancelar
Cancelar2.addEventListener("click", function() {
    document.getElementById("Formulario_modificar_horas").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    let Contenedor2 = document.querySelector("#Formulario_modificar_horas");
    let Elemento2 = Contenedor2.querySelector(".Advertencia");
    Elemento2.style.display = "none";
});
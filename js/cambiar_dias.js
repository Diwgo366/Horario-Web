//Imprimir primera fila
let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
let numero_columnas = 5; // Predeterminado de columnas
let Tabla1 = document.getElementById("Tabla_horario");
let Filas1 = Tabla1.rows[0];

for (let i = 0; i < numero_columnas; i++) {
    let Celdas1 = Filas1.insertCell(i + 1);
    Celdas1.innerHTML = dias[i];
}

let CambiarHorario1 = document.querySelector("#boton_enviar_1");
let Cancelar1 = document.querySelector("#boton_cancelar_1");

//Boton Submit
CambiarHorario1.addEventListener("click", function() {
    numero_columnas = parseInt(document.getElementById("numero_dias").value);
    let Tabla1 = document.getElementById("Tabla_horario");
    let Filas1 = Tabla1.rows[0];
    while (Filas1.cells.length > 1) {
        Filas1.deleteCell(1);
    }
    for (let i = 0; i < numero_columnas; i++) {
        let Celdas1 = Filas1.insertCell(i + 1);
        Celdas1.innerHTML = dias[i];
    }
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
    document.getElementById("Formulario_modificar_dias").style.display = "none";
    document.getElementById("overlay").style.display = "none";
});

// Boton Cancelar
Cancelar1.addEventListener("click", function() {
    document.getElementById("Formulario_modificar_dias").style.display = "none";
    document.getElementById("overlay").style.display = "none";
});
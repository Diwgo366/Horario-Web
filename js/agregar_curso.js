//Botones de interaccion
let AgregarCurso = document.querySelector("#boton_enviar_2");
let Cancelar2 = document.querySelector("#boton_cancelar_2");
let AgregarHorario = document.querySelector("#boton_agregar_horario");

//Elementos de advertencia
let Contenedor2 = document.querySelector("#Formulario_agregar_cursos");
//Del nombre del curso
let Elemento_nombre = Contenedor2.querySelector("#Error_nombre");
let Advertencia_nombre = Elemento_nombre.querySelector("p b");
//De las horas del curso
let Elemento_horas = Contenedor2.querySelector("#Error_horas");
let Advertencia_horas = Elemento_horas.querySelector("p b");
//Del formulario en general
let Elemento_formulario = Contenedor2.querySelector("#Error_formulario_cursos");
let Advertencia_formulario = Elemento_formulario.querySelector("p b");

let turnos = 1;

AgregarHorario.addEventListener("click", function() {
    let Contenedor3 = document.getElementById("Formulario_agregar_cursos")
    let inputs = Contenedor3.querySelectorAll("input[type='number']");
    let vacio = true;

    // Se verifica si una casilla esta vacia
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "") {
            vacio = false;
            break;
        }
    }

    if (vacio) {
        // Se verifica si se esta fuera de rango
        let fueraDeRango = false;
        // Se verifica que la hora de inicio sea menor que la hora final
        let error = false;

        for (let i = 1; i <= turnos; i++) {
            let hora_inicio = Number(document.querySelector("#hora_inicio_"+i).value);
            let hora_fin = Number(document.querySelector("#hora_fin_"+i).value);
            if (hora_inicio < 0 || hora_inicio > 24 || hora_fin < 0 || hora_fin > 24) {
                fueraDeRango = true;
                break;
            }
            if (hora_inicio > hora_fin) {
                error = true;
                break;
            }
        }
        if (fueraDeRango) {
            // Se muestra el mensaje
            Elemento_horas.style.display = "flex";
            Advertencia_horas.textContent = "Hora fuera de rango";
        } else {
            if (error) {
                // Display error message
                Elemento_horas.style.display = "flex";
                Advertencia_horas.innerHTML = "La hora de inicio debe ser <br> menor que la hora final";
            } else {
                turnos++;
                var Nuevo_div = document.createElement("div");
                Nuevo_div.className = "Pregunta4";
                Nuevo_div.innerHTML = '<p><select id="dia_' + turnos + '"><option value="Lunes">Lunes</option><option value="Martes">Martes</option><option value="Miércoles">Miércoles</option><option value="Jueves">Jueves</option><option value="Viernes">Viernes</option><option value="Sábado">Sábado</option></select> de: <input type="number" id="hora_inicio_' + turnos + '" min="0" max="24"> a: <input type="number" id="hora_fin_' + turnos + '" min="0" max="24"></p>';
                document.querySelector("#Error_horas").insertAdjacentElement("beforebegin", Nuevo_div);
                Elemento_horas.style.display = "none";
            }
        }
    } else {
        Elemento_horas.style.display = "flex";
        Advertencia_horas.textContent = "Complete las horas";
    }
});

AgregarCurso.addEventListener("click", function() {
    let Contenedor3 = document.getElementById("Formulario_agregar_cursos")
    let inputs = Contenedor3.querySelectorAll("input[type='number']");
    Elemento_nombre.style.display = "none";
    Elemento_horas.style.display = "none";
    let vacio = true;
    let error = false;
    let fueraDeRango = false;
    // Se itera para revisar si alguna casilla esta vacia
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "") {
            vacio = false;
            break;
        }
    }

    //Se revisa si la hora de inicio es menor que la hora final y si no esta fuera de rango
    for (let i = 1; i <= turnos; i++) {
        let hora_inicio = Number(document.querySelector("#hora_inicio_"+i).value);
        let hora_fin = Number(document.querySelector("#hora_fin_"+i).value);
        if (hora_inicio < 0 || hora_inicio > 24 || hora_fin < 0 || hora_fin > 24) {
            fueraDeRango = true;
            break;
        }
        if (hora_inicio > hora_fin) {
            error = true;
            break;
        }
    }

    let nombre = document.querySelector('#nombre').value;

    if (nombre != "" && vacio && error === false && fueraDeRango === false ){
        //Variable de cursos
        let Cursos = JSON.parse(localStorage.getItem("Cursos")) || [];
        // Se agrega el curso a los cursos del horario
        let Curso_Horario = [];
        console.log(Curso_Horario);
        // Se establece los horarios del curso
        for (let i = 1; i <= turnos; i++) {
            let hora_inicio = Number(document.querySelector("#hora_inicio_"+i).value);
            let hora_fin = Number(document.querySelector("#hora_fin_"+i).value);
            let dia = document.querySelector("#dia_"+i).value;
            Curso_Horario.push(Agregar_horario(dia, hora_inicio, hora_fin));
        };
        // Se guarda en cursos el curso con su respectivo horario
        Agregar_Curso(Cursos, nombre, color_aleatorio(), Curso_Horario)
        // Se almacena en local los cursos
        let Cursos_String = JSON.stringify(Cursos);
        localStorage.setItem("Cursos", Cursos_String);
        //Borrar todos los elementos de la clase Pregunta4
        var Elementos_Borrar = document.querySelectorAll(".Pregunta4");
        for (let i = 0; i < Elementos_Borrar.length; i++) {
            Elementos_Borrar[i].parentNode.removeChild(Elementos_Borrar[i]);
        }

        //Se actualiza la tabla principal
        cursos_variable = JSON.parse(localStorage.getItem("Cursos")) || [];
        BorrarTabla();
        ImprimirTabla(numero_columnas,hora_inicio_tabla,hora_fin_tabla,cursos_variable);
        //Se actualiza la tabla de modificar
        BorrarTablaCursos()
        CrearTablaCursos(cursos_variable)
        turnos = 1;
        document.getElementById("Formulario_agregar_cursos").style.display = "none";
        document.getElementById("overlay").style.display = "none";
    } else {
        if (vacio === false){
            Elemento_horas.style.display = "flex";
            Advertencia_horas.textContent = "Complete las horas";
        }

        if (nombre === ""){
            Elemento_nombre.style.display = "flex";
            Advertencia_nombre.textContent = "Ingrese el nombre";
        }

        if (fueraDeRango) {
            // Se muestra el mensaje pa fuera de rango
            Elemento_horas.style.display = "flex";
            Advertencia_horas.textContent = "Hora fuera de rango";
        } else {
            if (error) {
                // Display error message
                Elemento_horas.style.display = "flex";
                Advertencia_horas.innerHTML = "La hora de inicio debe ser <br> menor que la hora final";
            }
        }
    }
});

Cancelar2.addEventListener("click", function() {
    turnos = 1
    document.getElementById("Formulario_agregar_cursos").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    Elemento_nombre.style.display = "none";
    Elemento_horas.style.display = "none";
    Elemento_formulario.style.display = "none";
    //Borrar todos los elementos de la clase Pregunta4
    var Elementos_Borrar = document.querySelectorAll(".Pregunta4");
    for (let i = 0; i < Elementos_Borrar.length; i++) {
        Elementos_Borrar[i].parentNode.removeChild(Elementos_Borrar[i]);
    }
});
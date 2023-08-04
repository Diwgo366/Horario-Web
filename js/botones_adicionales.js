//Boton Eliminar horario para borrar los valores de las variables
let Nuevo_horario = document.getElementById("boton_nuevo_horario");
Nuevo_horario.addEventListener("click", function() {
    localStorage.removeItem('numero_columnas');
    localStorage.removeItem('hora_inicio_tabla');
    localStorage.removeItem('hora_fin_tabla');
    localStorage.removeItem('Cursos');
    location.reload();
});

//Boton Guardar horario, para descargar un archivo con los cursos 
let Guardar_horario = document.getElementById("boton_guardar_horario");
Guardar_horario.addEventListener("click", function() {
    const contenido = localStorage.getItem("Cursos");
    // Crear un elemento <a> y configurarlo para descargar el archivo
    const enlace = document.createElement("a");
    enlace.href = `data:text/plain;charset=utf-8,${encodeURIComponent(contenido)}`;
    enlace.download = "horario.txt";

    // Simular un clic en el enlace para descargar el archivo
    enlace.style.display = "none";
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
});

//Seccion para el boton de Importar horario
//Funcion para leer archivos
function LeerArchivo() {
    const ArchivoSubido = document.getElementById('ArchivoSubido');
    const Archivo = ArchivoSubido.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        const text = e.target.result;
        localStorage.setItem('Cursos', text);
    };
    reader.readAsText(Archivo);
}
//Asignacion de los botones internos
//Boton Enviar
let Importar_Horario = document.getElementById("boton_enviar_4");
Importar_Horario.addEventListener("click", function() {
    document.getElementById("Formulario_importar_horario").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    location.reload();
});

//Boton Cancelar
let Cancelar4 = document.getElementById("boton_cancelar_4");
Cancelar4.addEventListener("click", function() {
    document.getElementById("Formulario_importar_horario").style.display = "none";
    document.getElementById("overlay").style.display = "none";
});
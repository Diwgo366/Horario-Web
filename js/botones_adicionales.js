let Nuevo_horario = document.getElementById("boton_nuevo_horario");
Nuevo_horario.addEventListener("click", function() {
    localStorage.removeItem('numero_columnas');
    localStorage.removeItem('hora_inicio_tabla');
    localStorage.removeItem('hora_fin_tabla');
    localStorage.removeItem('Cursos');
    location.reload();
});

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
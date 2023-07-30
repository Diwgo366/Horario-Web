let addCourseButton = document.getElementById("boton_agregar");
let courseForm = document.getElementById("formulario");
let overlay = document.getElementById("overlay");
let colors =  ["#7CFC00", "#FF7F50", "#FF4000", "#DDA0DD", "#1630BE", "#40E0D0"]; 
let nextColorIndex = 0;

addCourseButton.addEventListener("click", function() {
    courseForm.style.display = "block";
    overlay.style.display = "block";
});

let submitCourseButton = document.getElementById("boton_enviar");
submitCourseButton.addEventListener("click", function() {
    let courseName = document.getElementById("nombre").value;
    let courseDay = document.getElementById("dia").value;
    let courseStart = parseInt(document.getElementById("hora_inicio").value);
    let courseEnd = parseInt(document.getElementById("hora_fin").value);

    let days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    let dayIndex = days.indexOf(courseDay);

    let color = colors[nextColorIndex];
    nextColorIndex = (nextColorIndex + 1) % colors.length;

    if (dayIndex !== -1 && courseStart >= 6 && courseEnd <= 20 && courseStart <= courseEnd) {
        for (let i = courseStart; i <= courseEnd; i++) {
            let row = table.rows[i - 5];
            let cell = row.cells[dayIndex + 1];
            cell.style.backgroundColor = color;
            if (cell.innerHTML !== "") {
                cell.innerHTML += "<br>" + courseName;
            } else {
                cell.innerHTML = courseName;
            }
        }
        // Hide form and overlay after adding the course
        courseForm.style.display = "none";
        overlay.style.display = "none";
    } else {
        alert("Datos inválidos. Por favor, inténtalo de nuevo.");
    }
});

let cancelCourseButton = document.getElementById("boton_cancelar");
cancelCourseButton.addEventListener("click", function() {
    // Hide form and overlay when cancel button is clicked
    courseForm.style.display = "none";
    overlay.style.display = "none";
});

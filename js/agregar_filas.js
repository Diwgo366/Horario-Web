let table = document.getElementById("horario");
for (let i = 6; i <= 20; i++) {
    let row = table.insertRow(-1);
    let cell = row.insertCell(-1);
    cell.innerHTML = i + ":00 - " + i + ":59";
    for (let j = 0; j < 6; j++) {
        row.insertCell(-1);
    }
    }

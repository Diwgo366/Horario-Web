function loadHTML(file, element) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(element).innerHTML = this.responseText;
        }
    };
    xhr.open("GET", file, true);
    xhr.send();
}

loadHTML("../html/cabecera.html", "Cabecera");

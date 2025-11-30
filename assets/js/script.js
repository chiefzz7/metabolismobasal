function processarDados() {
    if(event) event.preventDefault();

    let idade;
    let peso;
    let altura;
    let sexo;
    let tbm;

    idade = Number(document.getElementById("idade").value);
    peso = Number(document.getElementById("peso").value);
    altura = Number(document.getElementById("altura").value);
    sexo = document.getElementById("sexo").value;

    if (sexo === "masc") {
        tbm = (10 * peso) + (6.25 * altura) - (5 * idade) + 5;
    } else if (sexo === "fem") {
        tbm = (10 * peso) + (6.25 * altura) - (5 * idade) - 161;
    }

    document.getElementById("res").innerText = "Sua Taxa Metabólica Basal é de: " + tbm + "Kcal";
}
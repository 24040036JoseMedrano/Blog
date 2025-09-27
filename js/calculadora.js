function Suma() {
    var n1 = parseFloat(document.form1.num1.value);
    var n2 = parseFloat(document.form1.num2.value);
    document.form2.resultado.value = n1 + n2;
}

function Resta() {
    var n1 = parseFloat(document.form1.num1.value);
    var n2 = parseFloat(document.form1.num2.value);
    document.form2.resultado.value = n1 - n2;
}

function Multiplicacion() {
    var n1 = parseFloat(document.form1.num1.value);
    var n2 = parseFloat(document.form1.num2.value);
    document.form2.resultado.value = n1 * n2;
}

function Division() {
    var n1 = parseFloat(document.form1.num1.value);
    var n2 = parseFloat(document.form1.num2.value);

    if (n2 === 0) {
        alert("No se puede dividir entre cero");
        document.form2.resultado.value = "";
        return;
    }
    document.form2.resultado.value = n1 / n2;
}

function Borrar() {
    document.form1.num1.value = "";
    document.form1.num2.value = "";
    document.form2.resultado.value = "";
}

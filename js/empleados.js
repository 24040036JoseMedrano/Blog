function Calcular() {
    var horas = document.form3.horas.value;
    var costo = document.form4.costo.value;

    horas = parseFloat(horas);
    costo = parseFloat(costo);

    if (isNaN(horas) || isNaN(costo)) {
        alert("Por favor, ingresa horas y costo por hora.");
        return;
    }

    // Calcular horas normales y extras
    var horasNormales = horas > 40 ? 40 : horas;
    var horasExtras = horas > 40 ? horas - 40 : 0;

    // Calcular subtotal y deducciones
    var subtotal = (horasNormales * costo) + (horasExtras * costo * 2);
    var ispt = subtotal * 0.10;
    var monto = subtotal - ispt;

    // Mostrar resultados en form5
    document.form5.elements[0].value = horasNormales;
    document.form5.elements[1].value = horasExtras;
    document.form5.elements[2].value = subtotal.toFixed(2);
    document.form5.elements[3].value = ispt.toFixed(2);
    document.form5.elements[4].value = monto.toFixed(2);
}

function Borrar() {
    document.form1.id.value = "";
    document.form2.nombre.value = "";
    document.form3.horas.value = "";
    document.form4.costo.value = "";

    for (var i = 0; i < document.form5.elements.length; i++) {
        document.form5.elements[i].value = "";
    }
}

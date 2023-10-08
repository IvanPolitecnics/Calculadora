document.addEventListener("DOMContentLoaded", function () {
    const propinaForm = document.getElementById("propinaForm");
    const calcularBtn = document.getElementById("calcular");
    const resultadoDiv = document.getElementById("resultado");
    const propinaPersonaP = document.getElementById("propinaPersona");

    function calcula() {
        const comensales = parseInt(propinaForm.comensales.value);
        const totalCuenta = parseFloat(propinaForm.totalCuenta.value);
        const servicio = propinaForm.servicio.value;

        if (isNaN(comensales) || isNaN(totalCuenta)) {
            alert("Por favor, ingresa números válidos.");
            return;
        }

        let porcentajePropina = 0;
        switch (servicio) {
            case "genial":
                porcentajePropina = 10;
                break;
            case "aceptable":
                porcentajePropina = 5;
                break;
            case "horrible":
                porcentajePropina = 0;
                break;
            default:
                alert("Selecciona una calificación de servicio válida.");
                return;
        }

        let propinaTotal = (totalCuenta * porcentajePropina) / 100;
        let propinaPorPersona = propinaTotal / comensales;

        if (propinaPorPersona < 0.5) {
            alert("La propina por persona no puede ser inferior a 0.50 €.");
            return;
        }

        resultadoDiv.style.display = "block";
        propinaPersonaP.textContent = propinaPorPersona.toFixed(2) + " €";
        propinaForm.reset();
    }

    calcularBtn.addEventListener("click", calcula);
});


/*

+++CON 0.5€ DE PROPINA SOLO POR ATENDER+++

document.addEventListener("DOMContentLoaded", function () {
    // Obtener referencias a elementos HTML
    const propinaForm = document.getElementById("propinaForm");
    const calcularBtn = document.getElementById("calcular");
    const resultadoDiv = document.getElementById("resultado");
    const propinaPersonaP = document.getElementById("propinaPersona");

    // Función para realizar el cálculo de la propina
    function calcula() {
        // Obtener valores ingresados por el usuario desde el formulario
        const comensales = parseInt(propinaForm.comensales.value);
        const totalCuenta = parseFloat(propinaForm.totalCuenta.value);
        const servicio = propinaForm.servicio.value;

        // Validar que los valores ingresados sean números válidos
        if (isNaN(comensales) || isNaN(totalCuenta)) {
            alert("Por favor, ingresa números válidos.");
            return;
        }

        // Determinar el porcentaje de propina basado en la calificación del servicio
        let porcentajePropina = 0;
        switch (servicio) {
            case "genial":
                porcentajePropina = 10;
                break;
            case "aceptable":
                porcentajePropina = 5;
                break;
            case "horrible":
                porcentajePropina = 0;
                break;
            default:
                alert("Selecciona una calificación de servicio válida.");
                return;
        }
        
        // Calcular la cantidad total de propina
        let propinaTotal = (totalCuenta * porcentajePropina) / 100;
        let propinaPorPersona = propinaTotal / comensales;

        // Verificar que la cantidad de propina por persona no sea menor a 0.50 €
        if (propinaPorPersona < 0.5) {
            alert("La propina por persona no puede ser inferior a 0.50 €.");
            return;
        }

        // Mostrar el resultado en la página
        resultadoDiv.style.display = "block";
        propinaPersonaP.textContent = propinaPorPersona.toFixed(2) + " €";

        // Limpiar el formulario
        propinaForm.reset();
    }

    // Asociar la función calcula() al botón "Calcular"
    calcularBtn.addEventListener("click", calcula);
});
*/



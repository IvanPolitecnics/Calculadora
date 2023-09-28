document.addEventListener("DOMContentLoaded", function () {
    const propinaForm = document.getElementById("propinaForm");
    const calcularBtn = document.getElementById("calcular");
    const resultadoDiv = document.getElementById("resultado");
    const propinaPersonaP = document.getElementById("propinaPersona");

    calcularBtn.addEventListener("click", function () {
        // Obtener valores del formulario
        const comensales = parseInt(propinaForm.comensales.value);
        const totalCuenta = parseFloat(propinaForm.totalCuenta.value);
        const servicio = propinaForm.servicio.value;

        // Validar que se proporcionen todos los datos
        if (isNaN(comensales) || isNaN(totalCuenta)) {
            alert("Por favor, ingresa números válidos.");
            return;
        }

        // Calcular la propina segun la calificacion del servicio
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

        // Calcular la propina total
        let propinaTotal = (totalCuenta * porcentajePropina) / 100;

        // Calcular la propina por persona
        let propinaPorPersona = propinaTotal / comensales;

        // Verificar el minimo de propina por persona
        if (propinaPorPersona < 0.5) {
            alert("La propina por persona no puede ser inferior a 0.50 €.");
            return;
        }

        // Mostrar el resultado
        resultadoDiv.style.display = "block";
        propinaPersonaP.textContent = propinaPorPersona.toFixed(2) + " €";

        // Limpiar el formulario
        propinaForm.reset();
    });
});
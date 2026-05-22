//  Función flecha utilizado
const calcularNivel = (anios) => {
    if (anios < 2) {
        return "Nivel principiante";
    } else if (anios >= 2 && anios <= 4) {
        return "Nivel intermedio";
    } else if (anios > 4 && anios <= 7) {
        return "Nivel avanzado";
    } else if (anios > 7 && anios <= 10) {
        return "Nivel experto";
    } else {
        return "Nivel Gurú";
    }
};

//  Función flecha para procesar los datos y mostrar el resultado
const procesarFormulario = (evento) => {
    evento.preventDefault();

    // Capturar elementos de html
    const nombreInput = document.getElementById("nombre");
    const aniosInput = document.getElementById("anios");
    const resultadoDiv = document.getElementById("resultado");

    // Obtener los valores introducidos
    const nombre = nombreInput.value.trim();
    const anios = parseInt(aniosInput.value, 10);

    // Calcular el nivel invocando a la primera función
    const nivel = calcularNivel(anios);

    // Mostrar el cuadro de resultado
    resultadoDiv.innerText = `Hola ${nombre}, tu rango es: ${nivel}`;
    resultadoDiv.className = "mt-6 p-4 rounded-lg text-center font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200 block";
};

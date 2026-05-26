function actualizarTextoBoton() {
    const selectOperacion = document.getElementById("operacion").value;
    const btnAccion = document.getElementById("btnAccion");

    if (selectOperacion === "factorial" || selectOperacion === "suma_pares" || selectOperacion === "suma_impares") {
        btnAccion.innerText = "Calcular";
    } else {
        btnAccion.innerText = "Verificar";
    }
}

function realizarCalculo() {
    const numeroInput = document.getElementById("numero").value;
    const operacion = document.getElementById("operacion").value;
    const resultadoSpan = document.getElementById("resultadoTxt");

    if (numeroInput === "") {
        resultadoSpan.innerText = "Por favor, ingrese un número.";
        return;
    }

    const numero = parseInt(numeroInput);
    let resultado = "";

    switch (operacion) {
        case "primo":
            resultado = esPrimo(numero) ? "Es primo" : "No es primo";
            break;
        case "par":
            resultado = (numero % 2 === 0) ? "Es par" : "No es par";
            break;
        case "factorial":
            resultado = calcularFactorial(numero).toString();
            break;
        case "suma_pares":
            resultado = sumarPares(numero).toString();
            break;
        case "suma_impares":
            resultado = sumarImpares(numero).toString();
            break;
        default:
            resultado = "Operación no válida.";
    }

    resultadoSpan.innerText = resultado;
}

function esPrimo(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function calcularFactorial(n) {
    if (n < 0) return 0;
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

function sumarPares(n) {
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) suma += i;
    }
    return suma;
}

function sumarImpares(n) {
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) suma += i;
    }
    return suma;
}
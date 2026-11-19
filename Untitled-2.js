
/* =====================================
   EXERCICI 3.1 - PARELL O IMPARELL
===================================== */

function parellOImparell(numero) {
    if (numero % 2 === 0) {
        return "El numero es parell";
    } else {
        return "El numero es imparell";
    }
}

console.log("Exercici 3.1:");
console.log(parellOImparell(7));


/* =====================================
   EXERCICI 3.2 - ANY DE TRASPAS
===================================== */

function anyTraspas(any) {
    if (any % 400 === 0 || (any % 4 === 0 && any % 100 !== 0)) {
        return "L'any " + any + " es de traspas";
    } else {
        return "L'any " + any + " no es de traspas";
    }
}

console.log("Exercici 3.2:");
console.log(anyTraspas(2000));
console.log(anyTraspas(1900));
console.log(anyTraspas(2100));


/* =====================================
   EXERCICI 3.3 - SUMATORI
===================================== */

function sumatori(N) {
    let suma = 0;

    for (let n = 1; n <= N; n++) {
        suma = suma + 1 / (n * n);
    }

    return suma;
}

console.log("Exercici 3.3:");
console.log(sumatori(5));


/* =====================================
   EXERCICI 3.4 - NOTA FINAL
===================================== */

function calcularNota(notaAC, notaPract, notaExamen) {
    let notaFinal;
    let lletra;

    if (notaAC >= 5) {
        notaFinal = 0.2 * notaAC + 0.4 * notaPract + 0.4 * notaExamen;
    } else {
        notaFinal = 0.4 * notaPract + 0.6 * notaExamen;
    }

    if (notaFinal < 5) {
        lletra = "D";
    } else if (notaFinal < 6.5) {
        lletra = "C";
    } else if (notaFinal < 8) {
        lletra = "B";
    } else if (notaFinal < 10) {
        lletra = "A";
    } else {
        lletra = "H";
    }

    return "Nota final: " + notaFinal.toFixed(2) + " - " + lletra;
}

console.log("Exercici 3.4:");

let notaAC = Number(prompt("Introdueix la nota d'avaluacio continuada:"));
let notaPract = Number(prompt("Introdueix la nota de practiques:"));
let notaExamen = Number(prompt("Introdueix la nota de l'examen:"));

console.log(calcularNota(notaAC, notaPract, notaExamen));


/* =====================================
   EXERCICI 3.5 - PARAULES DE 5 LLETRES
===================================== */

function comptarParaules5(frase) {
    let comptador = 0;
    let lletres = 0;

    for (let i = 0; i < frase.length; i++) {
        if (frase[i] !== " " && frase[i] !== "," && frase[i] !== ".") {
            lletres++;
        } else {
            if (lletres === 5) {
                comptador++;
            }
            lletres = 0;
        }
    }

    return comptador;
}

console.log("Exercici 3.5:");
console.log(comptarParaules5("Hola, tenim moltes coses bones."));


/* =====================================
   EXERCICI 3.6 - PARAULES DE N LLETRES
===================================== */

function comptarParaules(frase, numeroLletres) {
    let comptador = 0;
    let lletres = 0;

    for (let i = 0; i < frase.length; i++) {
        if (frase[i] !== " " && frase[i] !== "," && frase[i] !== ".") {
            lletres++;
        } else {
            if (lletres === numeroLletres) {
                comptador++;
            }
            lletres = 0;
        }
    }

    return comptador;
}

console.log("Exercici 3.6:");
console.log(comptarParaules("Hola, tenim moltes coses bones.", 5));
console.log(comptarParaules("Hola, tenim moltes coses bones.", 4));
console.log(comptarParaules("Hola, tenim moltes coses bones.", 7));


/* =====================================
   EXERCICI 3.7 - TAULA DE PARAULES
===================================== */

function taulaParaules(frase) {
    let taula = [0, 0, 0, 0, 0, 0, 0];
    let lletres = 0;

    for (let i = 0; i < frase.length; i++) {
        if (frase[i] !== " " && frase[i] !== "," && frase[i] !== ".") {
            lletres++;
        } else {
            if (lletres >= 1 && lletres <= 7) {
                taula[lletres - 1]++;
            }
            lletres = 0;
        }
    }

    return taula;
}

console.log("Exercici 3.7:");

let frase = "Hola, tenim moltes coses bones.";
let resultat = taulaParaules(frase);

for (let i = 0; i < resultat.length; i++) {
    console.log("Paraules de " + (i + 1) + " lletres: " + resultat[i]);
}

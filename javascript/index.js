
let opc = undefined

console.log("CALCULADORA DE AREAS")

do {
    let menu = `
    -------------------------------
    Eliga una opcion:

    Para calcular area rectangulo digite 1
    para calcular area circulo digite 2
    para calcular area triangulo digite 3
    para calcular area rombo digite 4
    para salir digite 0
    --------------------------------
    `

    opc = Number(prompt(menu))

    if (opc === 1) {
        console.log("------Rectangulo-------")
        let base = parseFloat(prompt("Cual es la base del rectangulo en metros: "))
        let altura = parseFloat(prompt("Cual es la altura del rectangulo en metros: "))
        console.log(`El area del rectangulo es: ${base*altura} m²`);
    } else if (opc === 2) {
        console.log("------Circulo-------")
        let radio = parseFloat(prompt("Cual es el radio del circulo en metros: "))
        console.log(`El area del circulo es: ${3.141592*radio**2} m²`);
    } else if (opc === 3) {
        console.log("------Triangulo-------")
        let base = parseFloat(prompt("Cual es la base del Triangulo en metros: "))
        let altura = parseFloat(prompt("Cual es la altura del Triangulo en metros: "))
        console.log(`El area del triangulo es: ${base*altura/2} m²`);
    } else if (opc === 4) {
        console.log("------Rombo-------")
        let diagonal1 = parseFloat(prompt("Cual es el largo de la diagonal 1 del Rombo en metros: "))
        let diagonal2 = parseFloat(prompt("Cual es el largo de la diagonal 2 del Rombo en metros: "))
        console.log(`El area del rombo es: ${diagonal1*diagonal2/2} m²`);
    } else if (opc === 0) {
        console.log("------Good Bye-------")
    } else {
        window.alert("El valor ingresado no es una opcion valida!!!")
    }

} while (opc !=0);


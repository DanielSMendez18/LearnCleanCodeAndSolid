// // Código con nombres poco descriptivos:
// class P {
//     t(n: number): number {
//         return n * n;
//     }
// }

// const p = new P();
// console.log(p.t(5)); // ¿Qué significa 't' aquí?

//TODO: Mejorar lo anterior

// Código con nombres descriptivos:
class Calculator {
    calculateSquare(n: number): number {
        return n * n;
    }
}

const calculator = new Calculator();
console.log(calculator.calculateSquare(5)); // Ahora queda claro que estamos calculando el cuadrado

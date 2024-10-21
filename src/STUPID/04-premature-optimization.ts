// Código optimizado prematuramente:
class FibonacciCalculator {
    private cache: { [key: number]: number } = {};

    // Optimización usando memoización incluso si no es necesario.
    getFibonacci(n: number): number {
        if (this.cache[n]) {
            return this.cache[n];
        }

        if (n <= 1) {
            return n;
        }

        const result = this.getFibonacci(n - 1) + this.getFibonacci(n - 2);
        this.cache[n] = result;
        return result;
    }
}

// Ejemplo de uso:
const calculator = new FibonacciCalculator();
console.log(calculator.getFibonacci(5)); // Calcula Fibonacci con optimización prematura

/**
 * Problema:
En este caso, estamos utilizando una optimización (memoización) antes de saber si realmente es necesaria. 
Esto puede estar bien si trabajamos con valores grandes, pero si solo calculamos valores pequeños de Fibonacci, 
esta optimización es innecesaria y complica el código.
 */
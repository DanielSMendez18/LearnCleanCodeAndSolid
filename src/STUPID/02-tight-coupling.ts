// TODO: Ejemplo 1

// class Engine {
//     start() {
//         console.log('El motor está encendido.');
//     }
// }

// class Car {
//     private engine: Engine;

//     constructor() {
//         this.engine = new Engine(); // Car está creando la instancia de Engine
//     }

//     start() {
//         this.engine.start();
//     }
// }

// // Ejemplo de uso:
// const car = new Car();
// car.start(); // El motor está encendido.


class Engine {
    start() {
        console.log('El motor está encendido.');
    }
}

class CombustionEngine extends Engine {
    start() {
        console.log('El motor de combustión está encendido.');
    }
}

class ElectricEngine extends Engine {
    start() {
        console.log('El motor eléctrico está encendido.');
    }
}

// Desacoplamos Car de Engine pasando la dependencia por el constructor
class Car {
    private engine: Engine;

    constructor(engine: Engine) {
        this.engine = engine;
    }

    start() {
        this.engine.start();
    }
}

// Ejemplo de uso:
const gasEngine = new CombustionEngine();
const electricEngine = new ElectricEngine();

// Car ahora no depende de un tipo específico de motor
const car1 = new Car(gasEngine);
car1.start(); // El motor de combustión está encendido.

const car2 = new Car(electricEngine);
car2.start(); // El motor eléctrico está encendido.

// TODO: Ejemplo 2

// class UserRepository {
//     getUsers() {
//         // Simula la obtención de usuarios desde una base de datos
//         return ['Juan', 'Pedro', 'Ana'];
//     }
// }

// class UserService {
//     private userRepository: UserRepository;

//     constructor() {
//         this.userRepository = new UserRepository(); // Se crea directamente dentro de UserService
//     }

//     getAllUsers() {
//         return this.userRepository.getUsers();
//     }
// }

// Ejemplo de uso:
// const userService = new UserService();
// console.log(userService.getAllUsers()); // ['Juan', 'Pedro', 'Ana']

class UserRepository {
    getUsers() { }
}

class UserDataBaseRepository extends UserRepository {
    getUsers() {
        // Simula la obtención de usuarios desde una base de datos
        return ['Juan', 'Pedro', 'Ana'];
    }
}

class UserAPIRepository extends UserRepository {
    getUsers() {
        // Simula la obtención de usuarios desde una API externa
        return ['Carlos', 'Alberto', 'José'];
    }
}

class UserService {

    constructor(private userRepository: UserRepository) {
    }

    getAllUsers() {
        return this.userRepository.getUsers();
    }
}

// Ejemplo de uso:
const dataBaseRepository = new UserDataBaseRepository();
const apiRepository = new UserAPIRepository();

const userService1 = new UserService(dataBaseRepository);
console.log(userService1.getAllUsers()); // ['Juan', 'Pedro', 'Ana']

const userService2 = new UserService(apiRepository);
console.log(userService2.getAllUsers()); // ['Carlos', 'Alberto', 'José']
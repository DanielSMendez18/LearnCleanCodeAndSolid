/** 
 * TODO: Ejercicio práctico para aplicar DRY
    Tienes este código en TypeScript, donde se repiten bloques de código para calcular el precio con descuento:
 */

//* Esta es una IIFE: Expresión de función ejecutada inmediatamente
(function () {
    //TODO: Refactorizar
    // function calculateDiscountForElectronics(price: number, discount: number): number {
    //     let discountedPrice = price - (price * discount / 100);
    //     return discountedPrice;
    // }

    // function calculateDiscountForClothes(price: number, discount: number): number {
    //     let discountedPrice = price - (price * discount / 100);
    //     return discountedPrice;
    // }

    // function calculateDiscountForFurniture(price: number, discount: number): number {
    //     let discountedPrice = price - (price * discount / 100);
    //     return discountedPrice;
    // }

    function calculatePriceWithDiscount(price: number, discount: number): number {
        let finalPrice = price - (price * discount / 100);
        return finalPrice;
    }

    let priceProduct: number = 6500;
    let discountProducto: number = 18;
    console.log("Precio: " + priceProduct + " con descuento del: " + discountProducto + "%; equivale a un precio final de: " + calculatePriceWithDiscount(priceProduct, discountProducto));


    // TODO Ejercicio 1: Validación de datos repetida
    // En este código, la validación de longitud de una cadena se repite varias veces. Refactoriza el código para eliminar la duplicación.

    // function validateUsername(username: string): boolean {
    //     if (username.length < 5 || username.length > 15) {
    //         return false;
    //     }
    //     return true;
    // }

    // function validatePassword(password: string): boolean {
    //     if (password.length < 8 || password.length > 20) {
    //         return false;
    //     }
    //     return true;
    // }

    // function validateEmail(email: string): boolean {
    //     if (email.length < 10 || email.length > 30) {
    //         return false;
    //     }
    //     return true;
    // }

    type TypeFile = 'userName' | 'password' | 'email';

    const validationByTypeFile = {
        userName: [5, 15],
        password: [8, 20],
        email: [10, 30]
    }

    function validateField(value: string, minLength: number, maxLength: number): boolean {
        if (value.length < minLength || value.length > maxLength) return false;

        return true;
    }

    function validateFieldByType(value: string, type: TypeFile): boolean {

        const validations = validationByTypeFile[type];

        if (value.length < validations[0] || value.length > validations[1]) return false;

        return true;
    }

    const valueInput = "danielsmendez@gmail.com";
    const typeValue: TypeFile = 'email';
    const minLength = 5;
    const maxLength = 15;

    console.log("El valor: " + valueInput + " es valido?: " + validateField(valueInput, minLength, maxLength));
    console.log("El valor: " + valueInput + " es valido para el tipo " + typeValue + " ?: " + validateFieldByType(valueInput, typeValue));

    //TODO: Ejercicio 2: Cálculo de impuestos duplicado
    // El siguiente código repite el cálculo de impuestos en varias funciones. Refactoriza el código para seguir el principio DRY.
    // function calculateTaxForElectronics(price: number): number {
    //     let tax = price * 0.18;
    //     return price + tax;
    // }

    // function calculateTaxForClothes(price: number): number {
    //     let tax = price * 0.12;
    //     return price + tax;
    // }

    // function calculateTaxForFurniture(price: number): number {
    //     let tax = price * 0.15;
    //     return price + tax;
    // }

    type CategoryProduct = 'electronics' | 'clothes' | 'furniture';

    const taxCategory = {
        electronics: 0.18,
        clothes: 0.12,
        furniture: 0.15
    }

    function calculateTaxByCategory(price: number, category: CategoryProduct): number {
        let tax = price * taxCategory[category];
        return price + tax;
    }

    const price = 15;
    const category: CategoryProduct = 'electronics';


    console.log("El precio incial es " + price + "; ahora incluido TAX para el tipo de producto " + category + " es:" + calculateTaxByCategory(price, category));


    //TODO: Ejercicio 3: Repetición en mensajes de error
    // En este código, la construcción de mensajes de error se repite. Refactoriza para eliminar la duplicación.

    // function handleErrorForUser(errorCode: number): string {
    //     if (errorCode === 404) {
    //         return "User not found";
    //     } else if (errorCode === 500) {
    //         return "Server error";
    //     } else {
    //         return "Unknown error";
    //     }
    // }

    // function handleErrorForAdmin(errorCode: number): string {
    //     if (errorCode === 404) {
    //         return "Admin not found";
    //     } else if (errorCode === 500) {
    //         return "Server error";
    //     } else {
    //         return "Unknown error";
    //     }
    // }

    // function handleErrorForGuest(errorCode: number): string {
    //     if (errorCode === 404) {
    //         return "Guest not found";
    //     } else if (errorCode === 500) {
    //         return "Server error";
    //     } else {
    //         return "Unknown error";
    //     }
    // }

    function handleError(errorCode: number): string {
        if (errorCode === 404) return "Guest not found";

        if (errorCode === 500) return "Server error";

        return "Unknown error";
    }

    console.log("Procesando ... " + handleError(404))

    // TODO: Ejercicio 4: Cálculo de área repetido
    //En este código, el cálculo del área de diferentes formas tiene duplicación. Refactoriza el código para aplicar el principio DRY.
    // function calculateRectangleArea(width: number, height: number): number {
    //     return width * height;
    // }

    // function calculateSquareArea(side: number): number {
    //     return side * side;
    // }

    // function calculateTriangleArea(base: number, height: number): number {
    //     return 0.5 * base * height;
    // }

    type Shape = 'rectangle' | 'square' | 'triangle';

    function calculateArea(shape: Shape, side1: number, side2?: number): number {
        switch (shape) {
            case 'rectangle':
                return side1 * (side2 || 0)

            case 'square':
                return side1 * side1

            case 'triangle':
                return side1 * (side2 || 0) * 0.5

            default:
                throw new Error('Shape not defined')
        }
    }

    const shapeInput: Shape = 'triangle'
    const side1 = 3
    const side2 = 5

    console.log("El área del " + shapeInput + " es: " + calculateArea(shapeInput, side1, side2));

    //TODO: Ejercicio 5: Repetición en actualización de estados
    // En este código, la lógica de actualización de estado se repite para diferentes propiedades. Refactoriza el código para aplicar el principio DRY.
    // class User {
    //     username: string;
    //     email: string;
    //     password: string;

    //     constructor(username: string, email: string, password: string) {
    //         this.username = username;
    //         this.email = email;
    //         this.password = password;
    //     }

    //     updateUsername(newUsername: string): void {
    //         this.username = newUsername;
    //     }

    //     updateEmail(newEmail: string): void {
    //         this.email = newEmail;
    //     }

    //     updatePassword(newPassword: string): void {
    //         this.password = newPassword;
    //     }
    // }

    //type Field = 'userName' | 'email' | 'password'

    class User {
        userName: string;
        email: string;
        password: string;

        constructor(userName: string, email: string, password: string) {
            this.userName = userName;
            this.email = email;
            this.password = password
        }

        updateValueByFiel(field: keyof User, newValue: any) {
            if (Object.keys(User).includes(field)) throw new Error('File not defined')

            this[field] = newValue
        }

    }

    const user1 = new User('Daniel', 'de.mendez@globant.com', 'qwerty');
    console.log("el usuario inicial es: ");
    console.log(user1);

    user1.updateValueByFiel('email', 'danielsmendez@gmail.com');
    user1.updateValueByFiel('userName', 'Daniel Méndez');
    console.log("el usuario actualizó sus datos: ");
    console.log(user1);

    //TODO: Ejercicio 6: Duplicación en lógica condicional
    // Este código tiene duplicación de lógica condicional en varias funciones. Refactoriza para aplicar DRY.
    // function getDiscountForStudent(price: number): number {
    //     if (price > 100) {
    //         return price * 0.9;
    //     }
    //     return price * 0.95;
    // }

    // function getDiscountForTeacher(price: number): number {
    //     if (price > 100) {
    //         return price * 0.85;
    //     }
    //     return price * 0.90;
    // }

    // function getDiscountForSeniorCitizen(price: number): number {
    //     if (price > 100) {
    //         return price * 0.80;
    //     }
    //     return price * 0.85;
    // }

    //type CategoryUser = 'student' | 'teacher' | 'senior';
    const TaxByCategoryUser = {
        student: [0.90, 0.95],
        teacher: [0.85, 0.90],
        senior: [0.80, 0.85],
    }
    // function getDiscountByCategory(categoryUser: CategoryUser, price: number): number {
    //     let tax = TaxByCategoryUser[categoryUser];

    //     return (price > 100) ? price * tax[0] : price * tax[1]
    // }

    //* Se mejoró la función usando "generic type constraint de TypeScript"
    function getDiscountByCategory<T extends keyof typeof TaxByCategoryUser>(categoryUser: T, price: number): number {
        let tax = TaxByCategoryUser[categoryUser];

        if (tax === undefined) {
            throw new Error(`Invalid category: ${categoryUser}`);
        }

        return (price > 100) ? price * tax[0] : price * tax[1]
    }

    const categoryUserInput: keyof typeof TaxByCategoryUser = 'senior';
    const priceProductApple = 3500;
    console.log("El usuario del tipo: " + categoryUserInput + " tendrá por su producto Apple con el descuento especial el precio final de: " + getDiscountByCategory(categoryUserInput, priceProductApple));

    //TODO: Ejercicio 7: Lógica de bucles repetida

    // function printNames(users: string[]): void {
    //     for (let i = 0; i < users.length; i++) {
    //         console.log(users[i]);
    //     }
    // }

    // function printEmails(emails: string[]): void {
    //     for (let i = 0; i < emails.length; i++) {
    //         console.log(emails[i]);
    //     }
    // }

    // function printPhones(phones: string[]): void {
    //     for (let i = 0; i < phones.length; i++) {
    //         console.log(phones[i]);
    //     }
    // }

    function printListByLabel(items: string[], label: string): void {
        for (let item of items) {
            console.log(`${label}: ${item}`);
        }
    }

    // Ejemplo de uso:
    const users = ["John", "Jane", "Joe"];
    const emails = ["john@example.com", "jane@example.com", "joe@example.com"];
    const phones = ["123-456", "789-012", "345-678"];

    printListByLabel(users, "User");
    printListByLabel(emails, "Email");
    printListByLabel(phones, "Phone");



    //TODO: DATO PLUS sobre typeof, keyof, keyof typeof, Object.keys

    // typeof
    // El operador typeof en TypeScript (y JavaScript) se utiliza para determinar el tipo de una variable
    const book = {
        name: 'The martian',
        autor: 'Andy Weir',
        year: 2012,
        isPublished: true,
        category: ['drama', 'science fiction']
    }

    //* Ahora si queremos saber el tipo de dato que representa la variable book
    console.log("BOOK tiene es del tipo:");
    console.log(typeof book);

    //* Ahora si quiero crear un nuevo comic que tenga el mismo tipo de book
    // Lo que me obliga a tener que crear comic con las mismas propiedades que necesita book
    const comic: typeof book = {
        name: 'Iron man',
        autor: 'Stan lee',
        year: 2000,
        isPublished: true,
        category: ['heroic', 'science fiction']
    }

    // keyof
    // El operador keyof toma un tipo de objeto y devuelve una unión de tipos de cadena o número que representan las claves de ese objeto. 
    // Es una herramienta muy útil para iterar sobre las propiedades de un objeto de forma segura.
    interface Student {
        name: string;
        age: number;
        isNew: boolean;
    };

    type StudentKeys = keyof Student // 'name' | 'age' | 'isNew'

    //* Ahora si deseo una constante que solo sea del TIPO de las keys de la interface Student
    const propertyStudent: StudentKeys = 'age';


    //* Ahora si deseo que una clase tenga una función la cual acepte un argumento que sea del tipo de nombres de sus propiedades
    class TechnologicalProduct {
        name: string;
        price: string;
        isEnable: boolean;

        constructor(nameProduct: string, priceProduct: string, isEnableProduct: boolean) {
            this.name = nameProduct;
            this.price = priceProduct;
            this.isEnable = isEnableProduct;
        }

        updateField<K extends keyof TechnologicalProduct>(field: K, newValue: any) {
            if (Object.keys(TechnologicalProduct).includes(field)) throw new Error('File not defined')

            this[field] = newValue;
        }

        onDestroy() {
            //! Asi controlas que el primer parametro sea de acuerdo a las propiedades de esta clase
            //this.updateField('name2', 'Daniel ...'); //Argument of type '"name2"' is not assignable to parameter of type 'keyof
            this.updateField('name', '...');
        }
    }

    //* Ahora keyof con objetos anidados 
    // En este ejemplo, keyof PersonaConDireccion["direccion"] te permite obtener las claves dentro de la propiedad direccion.
    type Direction = {
        calle: string;
        ciudad: string;
    };

    type PersonWithDirection = {
        nombre: string;
        direccion: Direction;
    };

    type KeysDirection = keyof PersonWithDirection["direccion"];  // 'calle' | 'ciudad'      


    // keyof typeof
    /**
     * ¿Qué es keyof typeof?
        typeof se usa para obtener el tipo de una variable u objeto en tiempo de ejecución.
        keyof se usa para obtener un tipo que representa las claves (propiedades) de un objeto.
        Cuando combinamos keyof con typeof, obtenemos un tipo que representa las claves de una variable u objeto definido en tiempo de ejecución.
     */

    function obtenerPropiedad(objeto: any, clave: keyof typeof objeto) {
        return objeto[clave];
    }

    const person = {
        nombre: "Juan",
        edad: 30,
        profesion: "Ingeniero"
    };

    type KeysPerson = keyof typeof person;  // 'nombre' | 'edad' | 'profesion'

    const namePerson = obtenerPropiedad(person, "nombre");  // válido, retorna "Juan"
    // const altura = obtenerPropiedad(persona, "altura");  // Error, 'altura' no es una clave en 'persona'

    //* Ahora deseo obtener el color de apartir de pasar un parametro con el valor de unos de los keys del objeto colores
    const colores = {
        rojo: "#FF0000",
        verde: "#00FF00",
        azul: "#0000FF"
    };

    type ClavesColores = keyof typeof colores;  // 'rojo' | 'verde' | 'azul'

    function obtenerColor(clave: ClavesColores) {
        return colores[clave];
    }

    console.log(obtenerColor("rojo"));  // válido, retorna "#FF0000"
    // console.log(obtenerColor("amarillo"));  // Error, 'amarillo' no es una clave válida


    // Object.keys
    // La función Object.keys devuelve un arreglo de cadenas que representan las claves enumerables de un objeto.
    const fruit = {
        name: 'manzana',
        price: 2.5,
        color: 'red',
        isImported: true
    }
    //* Ahora si deseo el arreglo con la representación de los keys del objeto fruit
    console.log("keys de fruit: " + Object.keys(fruit));





})();
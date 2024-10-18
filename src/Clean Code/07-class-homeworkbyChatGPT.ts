(() => {
    //TODO: Ejercicio 1: Refactorizar una clase que viola SRP
    //Tienes una clase que maneja tanto la lógica de un carrito de compras como el envío de correos electrónicos para notificar 
    //al usuario cuando su pedido ha sido confirmado. Refactoriza la clase para que cumpla con el principio de responsabilidad única.

    // class ShoppingCart {
    //     private items: string[] = [];

    //     addItem(item: string): void {
    //         this.items.push(item);
    //     }

    //     getTotalItems(): number {
    //         return this.items.length;
    //     }

    //     checkout(): void {
    //         // Lógica para procesar el pago
    //         console.log('Procesando el pago...');
    //         // Enviar un correo electrónico al usuario
    //         this.sendEmail();
    //     }

    //     private sendEmail(): void {
    //         console.log('Enviando email de confirmación...');
    //     }
    // }    
    class ShoppingCart {
        private items: string[] = [];
        //public notify: Notify;

        constructor() {
        }

        addItem(item: string): void {
            this.items.push(item);
        }

        getTotalItems(): number {
            return this.items.length;
        }

        // Con Inyección de dependencias
        checkout(notify: Notify): void {
            // Lógica para procesar el pago
            console.log('Procesando el pago...');
            // Enviar un correo electrónico al usuario
            notify.sendEmail();
        }

    }

    class Notify {
        public sendEmail(): void {
            console.log('Enviando email de confirmación...');
        }
    }

    // Ejemplo de uso:
    const cart = new ShoppingCart();
    const notify = new Notify(); //Inyección de dependencias
    cart.addItem('Laptop');
    cart.checkout(notify); //Inyección de dependencias

    //TODO: Ejercicio 2: Clase que maneja demasiadas responsabilidades
    // La siguiente clase UserAccount maneja tanto la autenticación como la validación de contraseñas. Refactorízala para cumplir con el SRP.

    // class UserAccount {
    //     username: string;
    //     password: string;

    //     constructor(username: string, password: string) {
    //         this.username = username;
    //         this.password = password;
    //     }

    //     login(): boolean {
    //         // Lógica para autenticar al usuario
    //         return this.username === 'admin' && this.password === 'admin';
    //     }

    //     validatePassword(): boolean {
    //         // Validación de que la contraseña es suficientemente segura
    //         return this.password.length > 8;
    //     }
    // }
    class UserAccount {
        username: string;
        password: string;
        public validator: Validator;

        constructor(username: string, password: string) {
            this.username = username;
            this.password = password;
            this.validator = new Validator(password);
        }

        login(): boolean {
            // Lógica para autenticar al usuario
            return this.username === 'admin' && this.password === 'admin';
        }
    }

    class Validator {
        constructor(
            public password: string
        ) { }

        validatePassword(): boolean {
            // Validación de que la contraseña es suficientemente segura
            return this.password.length > 8;
        }
    }

    // Ejemplo de uso:
    const user = new UserAccount('admin', 'admin1234');
    console.log('Usuario logeado: ' + user.login());
    console.log("Contraseña valida: " + user.validator.validatePassword());

    //TODO: Ejercicio 3: Separar responsabilidades de cálculo e impresión
    // La clase Invoice a continuación tiene dos responsabilidades: calcular el total de la factura y mostrar los detalles. Refactoriza esta clase para cumplir con el SRP.

    // class Invoice {
    //     items: { description: string, price: number }[];

    //     constructor(items: { description: string, price: number }[]) {
    //         this.items = items;
    //     }

    //     calculateTotal(): number {
    //         return this.items.reduce((total, item) => total + item.price, 0);
    //     }

    //     printInvoice(): void {
    //         console.log('Factura:');
    //         this.items.forEach(item => console.log(`${item.description}: $${item.price}`));
    //         console.log(`Total: $${this.calculateTotal()}`);
    //     }
    // }

    interface item {
        description: string, price: number
    }
    class Invoice {
        items: item[];

        constructor(items: item[]) {
            this.items = items;
        }

        calculateTotal(): number {
            return this.items.reduce((total, item) => total + item.price, 0);
        }
    }

    class PrintService {
        //constructor(public invoince: Invoice) { }
        printInvoice(invoince: Invoice): void {
            console.log('Factura:');
            invoince.items.forEach(item => console.log(`${item.description}: $${item.price}`));
            console.log(`Total: $${invoice.calculateTotal()}`);
        }
    }

    // Ejemplo de uso:
    const items = [
        { description: 'Laptop', price: 1000 },
        { description: 'Mouse', price: 50 }
    ];
    const invoice = new Invoice(items);
    const print = new PrintService();
    print.printInvoice(invoice);

    //TODO: Ejercicio 4: Clase Order con múltiples responsabilidades
    // En el siguiente código, la clase Order se encarga tanto de gestionar los detalles del pedido 
    // como de guardar el pedido en la base de datos. Refactoriza la clase para seguir el principio de responsabilidad única.

    // class Order {
    //     items: string[];
    //     total: number;

    //     constructor(items: string[], total: number) {
    //         this.items = items;
    //         this.total = total;
    //     }

    //     saveToDatabase(): void {
    //         console.log('Guardando pedido en la base de datos...');
    //         // Lógica para guardar en la base de datos
    //     }

    //     getOrderSummary(): string {
    //         return `Pedido: ${this.items.join(', ')} - Total: $${this.total}`;
    //     }
    // }

    class Order {
        items: string[];
        total: number;

        constructor(items: string[], total: number) {
            this.items = items;
            this.total = total;
        }

        getOrderSummary(): string {
            return `Pedido: ${this.items.join(', ')} - Total: $${this.total}`;
        }
    }

    class DataBaseService {
        constructor() { }

        saveToDatabase(order: Order): void {
            console.log('Guardando pedido en la base de datos...');
            console.log(order);
            console.log("Guardado en Base de datos.")
            // Lógica para guardar en la base de datos
        }
    }

    // Ejemplo de uso:
    const order = new Order(['Laptop', 'Mouse'], 1050);
    const dataBaseService = new DataBaseService();
    console.log(order.getOrderSummary());
    dataBaseService.saveToDatabase(order);

    //TODO: Ejercicio 5: Separar responsabilidades de notificación y lógica de pedidos
    // En la clase OrderManager, además de gestionar pedidos, también se encarga de notificar al cliente. Refactoriza esta clase para seguir el principio SRP.

    // class OrderManager {
    //     private orders: { id: number, items: string[], total: number }[] = [];

    //     createOrder(order: { id: number, items: string[], total: number }): void {
    //         this.orders.push(order);
    //         console.log('Orden creada:', order);
    //         this.notifyCustomer(order.id);
    //     }

    //     private notifyCustomer(orderId: number): void {
    //         console.log(`Enviando notificación por la orden #${orderId}`);
    //     }
    // }

    interface OrderStore { id: number, items: string[], total: number };

    class OrderManager {
        private orders: OrderStore[] = [];

        createOrder(order: OrderStore, notifyService: NotifyService): void {
            this.orders.push(order);
            console.log('Orden creada:', order);
            // this.notifyCustomer(order.id);
            notifyService.notifyCustomer(order.id);
        }
    }

    class NotifyService {
        public notifyCustomer(orderId: number): void {
            console.log(`Enviando notificación por la orden #${orderId}`);
        }
    }

    // Ejemplo de uso:
    const orderNew: OrderStore = { id: 1, items: ['Laptop', 'Mouse'], total: 1050 };
    const orderManager = new OrderManager();
    const notifyService = new NotifyService();
    orderManager.createOrder(orderNew, notifyService);


})()
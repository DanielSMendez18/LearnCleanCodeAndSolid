(() => {
    //TODO: Ejercicio 1: Refactorizar una clase que viola SRP
    //Tienes una clase que maneja tanto la lógica de un carrito de compras como el envío de correos electrónicos para notificar 
    //al usuario cuando su pedido ha sido confirmado. Refactoriza la clase para que cumpla con el principio de responsabilidad única.

    class ShoppingCart {
        private items: string[] = [];

        addItem(item: string): void {
            this.items.push(item);
        }

        getTotalItems(): number {
            return this.items.length;
        }

        checkout(): void {
            // Lógica para procesar el pago
            console.log('Procesando el pago...');
            // Enviar un correo electrónico al usuario
            this.sendEmail();
        }

        private sendEmail(): void {
            console.log('Enviando email de confirmación...');
        }
    }

    // Ejemplo de uso:
    const cart = new ShoppingCart();
    cart.addItem('Laptop');
    cart.checkout();

    //TODO: Ejercicio 2: Clase que maneja demasiadas responsabilidades
    // La siguiente clase UserAccount maneja tanto la autenticación como la validación de contraseñas. Refactorízala para cumplir con el SRP.

    class UserAccount {
        username: string;
        password: string;

        constructor(username: string, password: string) {
            this.username = username;
            this.password = password;
        }

        login(): boolean {
            // Lógica para autenticar al usuario
            return this.username === 'admin' && this.password === 'admin';
        }

        validatePassword(): boolean {
            // Validación de que la contraseña es suficientemente segura
            return this.password.length > 8;
        }
    }

    // Ejemplo de uso:
    const user = new UserAccount('admin', 'admin1234');
    console.log(user.login());
    console.log(user.validatePassword());

    //TODO: Ejercicio 3: Separar responsabilidades de cálculo e impresión
    // La clase Invoice a continuación tiene dos responsabilidades: calcular el total de la factura y mostrar los detalles. Refactoriza esta clase para cumplir con el SRP.

    class Invoice {
        items: { description: string, price: number }[];

        constructor(items: { description: string, price: number }[]) {
            this.items = items;
        }

        calculateTotal(): number {
            return this.items.reduce((total, item) => total + item.price, 0);
        }

        printInvoice(): void {
            console.log('Factura:');
            this.items.forEach(item => console.log(`${item.description}: $${item.price}`));
            console.log(`Total: $${this.calculateTotal()}`);
        }
    }

    // Ejemplo de uso:
    const items = [
        { description: 'Laptop', price: 1000 },
        { description: 'Mouse', price: 50 }
    ];
    const invoice = new Invoice(items);
    invoice.printInvoice();

    //TODO: Ejercicio 4: Clase Order con múltiples responsabilidades
    // En el siguiente código, la clase Order se encarga tanto de gestionar los detalles del pedido 
    // como de guardar el pedido en la base de datos. Refactoriza la clase para seguir el principio de responsabilidad única.

    class Order {
        items: string[];
        total: number;

        constructor(items: string[], total: number) {
            this.items = items;
            this.total = total;
        }

        saveToDatabase(): void {
            console.log('Guardando pedido en la base de datos...');
            // Lógica para guardar en la base de datos
        }

        getOrderSummary(): string {
            return `Pedido: ${this.items.join(', ')} - Total: $${this.total}`;
        }
    }

    // Ejemplo de uso:
    const order = new Order(['Laptop', 'Mouse'], 1050);
    console.log(order.getOrderSummary());
    order.saveToDatabase();

    //TODO: Ejercicio 5: Separar responsabilidades de notificación y lógica de pedidos
    // En la clase OrderManager, además de gestionar pedidos, también se encarga de notificar al cliente. Refactoriza esta clase para seguir el principio SRP.

    class OrderManager {
        private orders: { id: number, items: string[], total: number }[] = [];

        createOrder(order: { id: number, items: string[], total: number }): void {
            this.orders.push(order);
            console.log('Orden creada:', order);
            this.notifyCustomer(order.id);
        }

        private notifyCustomer(orderId: number): void {
            console.log(`Enviando notificación por la orden #${orderId}`);
        }
    }

    // Ejemplo de uso:
    const orderManager = new OrderManager();
    orderManager.createOrder({ id: 1, items: ['Laptop', 'Mouse'], total: 1050 });



})()
(() => {

    const temperaturesCelsius = [33.6, 12.34];

    const ipServer = '123.123.123.123';

    const users = [{ id: 1, email: 'fernando@google.com' }, { id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

    const emailsUsers = users.map(user => user.email);

    const canJump = false;
    const canRun = true;
    const hasItems = true;
    const isLoading = false;


    const startTime = new Date().getTime();
    const endTime = new Date().getTime() - startTime;



    function getBooks() {
        throw new Error('Function not implemented.');
    }

    function getBooksByUrl(url: string) {
        throw new Error('Function not implemented.');
    }

    function getSquareArea(side: number) {
        throw new Error('Function not implemented.');
    }

    function printJob() {
        throw new Error('Function not implemented.');
    }

    // TODO Excersises

    // TODO
    // function calc(a: number, b: number): number {
    //     let x = a * 2;
    //     let y = b * 3;
    //     let z = x + y;
    //     return z;
    // }

    function calculateTotalPrice(productPrice: number, taxProduct: number): number {
        let totalProductPrice = productPrice * 2;
        let totalTax = taxProduct * 3;
        let total = totalProductPrice + totalTax;
        return total;
    }

    // TODO
    // function f1(p: number, q: number): number {
    //     return p + q;
    // }

    function addition(firstNumber: number, secondNumber: number): number {
        return firstNumber + secondNumber;
    }

    // TODO
    // class Thing {
    //     a: string;
    //     b: number;

    //     constructor(a: string, b: number) {
    //         this.a = a;
    //         this.b = b;
    //     }

    //     doSomething(): void {
    //         console.log(this.a + " did something with " + this.b);
    //     }
    // }

    class Product {
        productName: string;
        productPrice: number;

        constructor(productName: string, productPrice: number) {
            this.productName = productName;
            this.productPrice = productPrice;
        }

        doSomething(): void {
            console.log(this.productName + " has a price " + this.productPrice);
        }
    }

    // TODO
    // class Manager {
    //     n: string;
    //     v: number;

    //     constructor(n: string, v: number) {
    //         this.n = n;
    //         this.v = v;
    //     }

    //     m1(): void {
    //         console.log(`${this.n} is managing with value ${this.v}`);
    //     }

    //     m2(p: string): void {
    //         console.log(`${this.n} is working on ${p}`);
    //     }
    // }

    class ProjectManager {
        managerName: string;
        projectBudget: number;

        constructor(managerName: string, projectBudget: number) {
            this.managerName = managerName;
            this.projectBudget = projectBudget;
        }

        manageProject(): void {
            console.log(`${this.managerName} is managing a project with a budget of ${this.projectBudget}`);
        }

        workOnTask(taskName: string): void {
            console.log(`${this.managerName} is working on task: ${taskName}`);
        }
    }


})();





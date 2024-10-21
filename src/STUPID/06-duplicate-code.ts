// class UserManager {
//     createAdminUser() {
//         const user = {
//             name: 'Admin',
//             role: 'admin',
//             privileges: ['create', 'edit', 'delete']
//         };
//         console.log('Admin user created:', user);
//     }

//     createNormalUser() {
//         const user = {
//             name: 'User',
//             role: 'user',
//             privileges: ['read']
//         };
//         console.log('Normal user created:', user);
//     }
// }

// // Ejemplo de uso:
// const manager = new UserManager();
// manager.createAdminUser();
// manager.createNormalUser();


// TODO: Mejorar lo anteriore

class User {
    constructor(
        public name: string,
        public role: string,
        public privileges: string[]
    ) { }
}

class UserManager {
    createUser(name: string, role: string, privileges: string[]) {
        const user = new User(name, role, privileges);
        console.log(`${role} user created:`, user);
    }

    createAdminUser() {
        this.createUser('Admin', 'admin', ['create', 'edit', 'delete']);
    }

    createNormalUser() {
        this.createUser('User', 'user', ['read']);
    }
}

// Ejemplo de uso:
const manager = new UserManager();
manager.createAdminUser();
manager.createNormalUser();

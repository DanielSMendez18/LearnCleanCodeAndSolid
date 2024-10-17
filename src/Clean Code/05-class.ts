(() => {
    //No aplicamos el principio de responsabilidad única a la clase

    type Gender = 'M' | 'F'

    class Person {
        constructor(
            public name: string,
            public gender: Gender,
            public birthday: Date
        ) { }
    }

    class User extends Person {
        public lastAccess: Date;

        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthday: Date
        ) {
            super(name, gender, birthday);
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFile: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthday: Date
        ) {
            super(email, role, name, gender, birthday);
        }
    }

    const userSettings = new UserSettings(
        '/usr/home',
        '/home',
        'daniel@google.com',
        'Admin',
        'Daniel',
        'M',
        new Date('1996-08-18')
    );

    console.log({ userSettings });
})();
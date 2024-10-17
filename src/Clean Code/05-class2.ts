(() => {
    //Ahora creamos objetos como propiedades para pasarlo en cada clase

    type Gender = 'M' | 'F'

    //TODO: Person class
    interface PersonProps {
        name: string,
        gender: Gender,
        birthday: Date
    }

    class Person {
        public name: string;
        public gender: Gender;
        public birthday: Date;

        constructor({ name, gender, birthday }: PersonProps) {
            this.name = name;
            this.gender = gender;
            this.birthday = birthday;
        }
    }

    //TODO: User class
    interface UserProps {
        email: string,
        role: string,
        name: string,
        gender: Gender,
        birthday: Date
    }

    class User extends Person {
        public lastAccess: Date;
        public email: string;
        public role: string;

        constructor(
            { email, role, name, gender, birthday }: UserProps
        ) {
            super({ name, gender, birthday });
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }

    //TODO: UserSettings class
    interface UserSettingsProps {
        workingDirectory: string,
        lastOpenFile: string,
        email: string,
        role: string,
        name: string,
        gender: Gender,
        birthday: Date
    }

    class UserSettings extends User {
        public workingDirectory: string;
        public lastOpenFile: string;

        constructor({ workingDirectory, lastOpenFile, email, role, name, gender, birthday }: UserSettingsProps) {
            super({ email, role, name, gender, birthday });
            this.workingDirectory = workingDirectory;
            this.lastOpenFile = lastOpenFile
        }
    }

    const userSettings = new UserSettings({
        workingDirectory: '/usr/home',
        lastOpenFile: '/home',
        email: 'daniel@google.com',
        role: 'Admin',
        name: 'Daniel',
        gender: 'M',
        birthday: new Date('1996-08-18')
    }
    );

    console.log({ userSettings });
})();
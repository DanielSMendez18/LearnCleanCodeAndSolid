class Singleton {
    private static instance: Singleton;

    // El constructor es privado para evitar la creación de instancias directamente
    private constructor() {
        console.log('Instancia Singleton creada');
    }

    // Método para obtener la instancia única
    public static getInstance(idObject: number): Singleton {
        console.log(`el objeto es: ${idObject}`)
        if (!Singleton.instance) {
            console.log("No esta creada una instancia de la clase Singleton, se creará una")
            Singleton.instance = new Singleton();
        }
        console.log("Ya esta creada una instancia de la clase Singleton")
        return Singleton.instance;
    }

    public someBusinessLogic(): void {
        console.log('Lógica de negocio del Singleton');
    }
}

// Ejemplo de uso:
const instance1 = Singleton.getInstance(1);
const instance2 = Singleton.getInstance(2);
const instance3 = Singleton.getInstance(3);

console.log(instance1 === instance2); // true (ambas variables apuntan a la misma instancia)
instance1.someBusinessLogic();
instance2.someBusinessLogic();

/**
 * Explicación
 * Privacidad del constructor: El constructor es privado para evitar que se puedan crear nuevas instancias de Singleton directamente.
 * Comparación de instancias: Como instance1 e instance2 se obtienen a través de getInstance(), ambas referencias apuntan a la misma instancia de Singleton.
 */

/**
 * Cuándo usar el patrón Singleton:
Cuando necesitas asegurarte de que solo haya una única instancia de una clase en toda la aplicación.
Casos comunes incluyen: acceso global a una configuración, registros de auditoría, gestores de conexiones a bases de datos, etc.
Cuándo evitar el patrón Singleton:
Cuando el uso de una única instancia global puede dificultar las pruebas, ya que se genera una dependencia global.
En aplicaciones altamente concurrentes o multihilo, donde los Singletons mal gestionados pueden generar condiciones de carrera o problemas de consistencia de datos.
 */
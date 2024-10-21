# Welcome Learn Clean Code and SOLID principle

Hola! Este es un repositorio para estudiar y tener casos prácticos sobre los siguientes conceptos y principios.

# Clean Code

Es una filosofía de desarrollo que busca escribir código que sea fácil de leer, entender y mantener. Fue popularizada por el libro _**Clean Code: A Handbook of Agile Software Craftsmanship**_ de Robert C. Martin (conocido como Uncle Bob).

**Principios clave:**

- **Nombres significativos**: Usa nombres claros y descriptivos para variables, funciones y clases.
- **Funciones pequeñas**: Las funciones deben ser breves y realizar solo una tarea.
- **Evitar comentarios innecesarios**: El código debe ser lo suficientemente claro para no necesitar comentarios explicativos.
- **No repetir código (DRY - Don’t Repeat Yourself)**: Evita duplicación de lógica; extrae el código repetido en funciones reutilizables.
- **Manejo adecuado de errores**: Escribe manejo de excepciones claro y específico.
- **Principio de responsabilidad única (SRP)**: Cada función, clase o módulo debe tener una única responsabilidad.
- **Formato consistente**: Mantén un estilo de código uniforme y legible.
- **Minimizar dependencias externas**: Reduce la cantidad de dependencias innecesarias.
- **Escribir pruebas**: Escribe pruebas unitarias y de integración para asegurar la calidad y funcionamiento del código.
- **Código expresivo**: El código debe ser fácil de leer y entender por otros desarrolladores, como si fuera un libro.

## DRY

El principio **DRY** (Don’t Repeat Yourself) es uno de los principios fundamentales de desarrollo de software. Significa **evitar la duplicación de código** o lógica en un programa. La idea es que cada parte de conocimiento, lógica o funcionalidad debe tener una única representación en el código.

### ¿Por qué es importante el principio DRY?

Duplicar código lleva a varios problemas:

- **Mantenimiento difícil**: Si el mismo código está repetido en varios lugares, hacer un cambio en un sitio implica hacer el mismo cambio en cada duplicado. Esto aumenta la posibilidad de errores si algún lugar es olvidado.
- **Inconsistencia**: Si los duplicados no se actualizan correctamente o de la misma manera, pueden generarse inconsistencias en el comportamiento del sistema.
- **Código desordenado y difícil de leer**: La duplicación innecesaria aumenta el tamaño del código y lo hace más difícil de entender.

### ¿Cómo aplicar DRY?

1.  **Usar funciones o métodos**: Si tienes un fragmento de código que se repite en varios lugares, conviértelo en una función o método que puedas reutilizar.
2.  **Abstracción adecuada**: Identifica patrones comunes y abstráelos en clases, funciones o módulos reutilizables.
3.  **Evitar copiar y pegar código**: Copiar y pegar código en lugar de reutilizar funciones es una violación directa del principio DRY.
4.  **Uso de constantes**: Si tienes valores repetidos, como cadenas de texto o números mágicos, define constantes o variables para evitar la repetición.

### Beneficios de aplicar DRY:

- **Facilidad de mantenimiento**: Hacer cambios en un solo lugar cuando es necesario.
- **Mejor legibilidad**: Menos código duplicado significa que el código es más limpio y fácil de entender.
- **Consistencia**: Asegura que la misma lógica se aplique uniformemente en todo el código.

El principio DRY no solo aplica a código, sino también a la lógica del negocio, los datos, y el diseño de sistemas en general.

# SOLID Principle

## STUPID

Es un acrónimo que describe una serie de malos principios o antipatrones en el diseño de software. A diferencia de los buenos principios de diseño como **SOLID**, que promueven prácticas saludables y robustas, STUPID resalta prácticas que suelen llevar a código de baja calidad, difícil de mantener y propenso a errores. Cada letra en STUPID se refiere a un antipatrón común en el desarrollo de software.

A continuación te explico cada uno de los elementos de STUPID:

### 1. **S – Singleton**

El patrón **Singleton** en sí no es necesariamente un antipatrón, pero su abuso sí puede serlo. Se refiere a cuando una clase tiene una única instancia a nivel global y se utiliza por todo el sistema. Esto puede generar problemas como:

- **Dificultad para realizar pruebas**: Es difícil realizar pruebas unitarias si dependemos de un singleton, porque no podemos "mockear" su comportamiento fácilmente.
- **Dependencia global**: Al ser global, cualquier parte del código puede depender de él, lo que genera acoplamiento y baja la flexibilidad del sistema.
- **Problemas de concurrencia**: Si no está correctamente implementado, puede ocasionar problemas en aplicaciones multihilo.

### 2. **T – Tight Coupling (Acoplamiento fuerte)**

El **acoplamiento fuerte** ocurre cuando una clase depende fuertemente de otra. Esto significa que cualquier cambio en una clase puede afectar a la otra, haciendo que el código sea difícil de mantener y escalar. Las desventajas incluyen:

- **Dificultad para modificar o extender**: Cambiar una clase puede forzarte a cambiar muchas otras.
- **Baja reutilización de código**: Las clases fuertemente acopladas no se pueden usar fácilmente en otros contextos.

El objetivo es mantener el código con **acoplamiento bajo** (Low Coupling) y **alta cohesión**, siguiendo principios como la inyección de dependencias y el diseño basado en interfaces.

### 3. **U – Untestable Code (Código no testeable)**

Este antipatrón se refiere al diseño de código que es difícil de probar mediante pruebas automatizadas. El código no testeable puede ocurrir por varias razones:

- **Dependencia de singletons o métodos estáticos**: Como vimos, los singletons son difíciles de "mockear".
- **Lógica de negocio embebida en código UI o en el flujo de control**: Hace difícil probar la lógica sin interactuar con interfaces gráficas o bases de datos.
- **Falta de inyección de dependencias**: Si una clase gestiona directamente todas sus dependencias, es difícil reemplazarlas con objetos simulados para pruebas.

### 4. **P – Premature Optimization (Optimización prematura)**

La **optimización prematura** es el acto de intentar optimizar el código demasiado temprano, antes de entender claramente los cuellos de botella reales. Esto es perjudicial por varias razones:

- **Complica el código innecesariamente**: A menudo, se añade complejidad para mejorar el rendimiento en áreas que pueden no necesitarlo.
- **Mala distribución de recursos**: Los desarrolladores gastan tiempo optimizando algo que quizás no tiene un impacto significativo en el rendimiento general.

Lo ideal es seguir la regla de oro: "Optimiza solo cuando sea necesario", después de identificar los cuellos de botella reales a través de pruebas de rendimiento.

### 5. **I – Indescriptive Naming (Nombres poco descriptivos)**

Usar **nombres poco descriptivos** para variables, métodos o clases es uno de los problemas más comunes y perjudiciales en el código. Si el nombre de algo no describe claramente su propósito, el código se vuelve difícil de leer y entender. Ejemplos típicos de nombres malos incluyen:

- Variables como `a`, `tmp`, `data`, que no comunican su propósito.
- Funciones como `doSomething()`, que no explica qué hace realmente.

Nombres claros y descriptivos facilitan la comprensión del código y mejoran la mantenibilidad. Este es un tema clave en **Clean Code**, donde se promueve el uso de nombres que reflejen claramente la intención del código.

### 6. **D – Duplicate Code (Código duplicado)**

El **código duplicado** es uno de los principales enemigos de un buen diseño de software. Ocurre cuando copiamos y pegamos lógica en varias partes del sistema en lugar de reutilizarla. Esto tiene varias desventajas:

- **Difícil mantenimiento**: Si necesitas modificar la lógica, debes hacerlo en todos los lugares donde está duplicada.
- **Propagación de errores**: Si hay un error en el código duplicado, puede replicarse en múltiples lugares, dificultando su corrección.

La solución para evitar esto es aplicar el principio **DRY** (**Don’t Repeat Yourself**), que sugiere evitar la duplicación de código y reutilizar funciones o clases comunes.

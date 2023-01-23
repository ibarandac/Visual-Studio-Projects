## Respuestas al Test de JavaScript

Recuerda que estas respuestas (o al  menos la mayorÃ­a) NO SON ABSOLUTAS. Es completamente vÃ¡lido (en la mayorÃ­a de casos) si tienes otras respuestas. Recuerda que podemos discutirlo en la secciÃ³n de comentarios del curso. :D


## Variables y operaciones

### 1ï¸âƒ£ Responde las siguientes preguntas en la secciÃ³n de comentarios:

- Â¿QuÃ© es una variable y para quÃ© sirve?

Cajtas (espacios en memoria) donde podemos guardar informaciÃ³n (dependiendo de los tipos y estructuras de datos que soporte nuestro lenguaje).

- Â¿CuÃ¡l es la diferencia entre declarar e inicializar una variable?

Declarar es cuando le decimos a JavaScript que vamos a crear una variable con el nombre tal. Mientras que inicializar (o reinicializar) es asignarle un valor a esa variable.

- Â¿CuÃ¡l es la diferencia entre sumar nÃºmeros y concatenar strings?
- Â¿CuÃ¡l operador me permite sumar o concatenar?

EL operador que nos permite sumar o concatenar es +. Este operador nos permite sumar nÃºmeros cuando lo usamos con nÃºmeros. Pero cuando los strings, lo que hace es unir (concatenar, asÃ­ se dice) ambos strings.

### 2ï¸âƒ£ Determina el nombre y tipo de dato para almacenar en variables la siguiente informaciÃ³n:

- Nombre: string
- Apellido: string
- Nombre de usuario en Platzi: strig (@fulanito)
- Edad: number
- Correo electrÃ³nico: string (lala@gmail.com)
- Mayor de edad: boolean
- Dinero ahorrado: number
- Deudas: number

### 3ï¸âƒ£ Traduce a cÃ³digo JavaScript las variables del ejemplo anterior y deja tu cÃ³digo en los comentarios.

```
let nombre = 'Juan David';
let apellido = 'Catro Gallego';
let username = 'juandc';
let edad = 19;
let mail = 'juanito@alcachofa.xyz';
let esMayorDeEdad = true;
let dineroAhorrado = 1000;
let deudas = 100;
```

### 4ï¸âƒ£ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

- Nombre completo (nombre y apellido)
- Dinero real (dinero ahorrado menos deudas)

```
let nombreCompleto = nombre + ' ' + apellido;
let dineroReal = dineroAhorrado - deudas;
```



## Funciones

### 1ï¸âƒ£ Responde las siguientes preguntas en la secciÃ³n de comentarios:

- Â¿QuÃ© es una funciÃ³n?
- Â¿CuÃ¡ndo me sirve usar una funciÃ³n en mi cÃ³digo?
- Â¿CuÃ¡l es la diferencia entre parÃ¡metros y argumentos de una funciÃ³n?

### 2ï¸âƒ£ Convierte el siguiente cÃ³digo en una funciÃ³n, pero, cambiando cuando sea necesario las variables constantes por parÃ¡metros y argumentos en una funciÃ³n:

```
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
```


## Condicionales

### 1ï¸âƒ£ Responde las siguientes preguntas en la secciÃ³n de comentarios:

- Â¿QuÃ© es un condicional?
- Â¿QuÃ© tipos de condicionales existen en JavaScript y cuÃ¡les son sus diferencias?
- Â¿Puedo combinar funciones y condicionales?

### 2ï¸âƒ£ Replica el comportamiento del siguiente cÃ³digo que usa la sentencia switch utilizando if, else y else if:

```
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un aÃ±o");
       break;
   case "ExpertPlus":
       console.log("TÃº y alguien mÃ¡s pueden tomar TODOS los cursos de Platzi durante un aÃ±o");
       break;
}
```

### 3ï¸âƒ£ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

> ðŸ’¡ Bonus: si ya eres una experta o experto en el lenguaje, te desafÃ­o a comentar cÃ³mo replicar este comportamiento con arrays y un solo condicional. ðŸ˜


## Ciclos

### 1ï¸âƒ£ Responde las siguientes preguntas en la secciÃ³n de comentarios:

- Â¿QuÃ© es un ciclo?
- Â¿QuÃ© tipos de ciclos existen en JavaScript?
- Â¿QuÃ© es un ciclo infinito y por quÃ© es un problema?
- Â¿Puedo mezclar ciclos y condicionales?

### 2ï¸âƒ£ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
```

### 3ï¸âƒ£ Escribe un cÃ³digo en JavaScript que le pregunte a los usuarios cuÃ¡nto es `2 + 2`. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

> ðŸ’¡ Pista: puedes usar la funciÃ³n prompt de JavaScript.


## Listas

### 1ï¸âƒ£ Responde las siguientes preguntas en la secciÃ³n de comentarios:

- Â¿QuÃ© es un array?
- Â¿QuÃ© es un objeto?
- Â¿CuÃ¡ndo es mejor usar objetos o arrays?
- Â¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

### 2ï¸âƒ£ Crea una funciÃ³n que pueda recibir cualquier array como parÃ¡metro e imprima su primer elemento.

### 3ï¸âƒ£ Crea una funciÃ³n que pueda recibir cualquier array como parÃ¡metro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

### 4ï¸âƒ£ Crea una funciÃ³n que pueda recibir cualquier objeto como parÃ¡metro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
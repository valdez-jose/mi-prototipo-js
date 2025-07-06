/* ¿Para qué sirve el prototipo?
Te permite agregar métodos o propiedades a una función constructora, y todos los objetos creados con esa función pueden usar esos métodos, sin duplicarlos.*/

// Ejemplo básico:
// Constructor de Persona
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

// Agregar un método al prototipo de Persona
Persona.prototype.saludar = function () {
  console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
};

// Crear objetos usando el constructor
const persona1 = new Persona("Ana", 30);
const persona2 = new Persona("Carlos", 25);

// Usar el método del prototipo
persona1.saludar(); 
persona2.saludar(); 

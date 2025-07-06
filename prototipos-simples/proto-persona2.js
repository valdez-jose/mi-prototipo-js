//Ejercicio 2.

function Persona(nombre, apellido, edad) {
  this.nombre = nombre;
  this.edad = edad;
  this.apellido = apellido;
}
// Agregar un método al prototipo de Persona
Persona.prototype.saludar = function () {
  console.log(`Hola, soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`);
};
const persona1 = new Persona("Ana", "Gonzalez", 28);
const persona2 = new Persona("Pedro", "Delvalle", 32);

// Usar el método del prototipo
persona1.saludar();
persona2.saludar();
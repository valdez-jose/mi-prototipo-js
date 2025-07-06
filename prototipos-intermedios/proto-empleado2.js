//proto-empleado.js (Herencia de prototipo

// Constructor Persona
function Persona(nombre) {
  this.nombre = nombre;
}
Persona.prototype.saludar = function () {
  console.log(`Hola, soy ${this.nombre}`);
};
// Constructor Empleado que hereda de Persona
function Empleado(nombre, puesto) {
  Persona.call(this, nombre); // Heredar propiedades
  this.puesto = puesto;
}
// Heredar el prototipo de Persona
Empleado.prototype = Object.create(Persona.prototype);
Empleado.prototype.constructor = Empleado;
// Método específico de Empleado
Empleado.prototype.trabajar = function () {
  console.log(`${this.nombre} está trabajando como ${this.puesto}`);
};

const emp1 = new Empleado("María", "Diseñadora");
emp1.saludar();  // Heredado
emp1.trabajar(); // Propio
const emp2 = new Empleado("Juan", "Desarrollador");
emp2.saludar();  // Heredado
emp2.trabajar(); // Propio

//Herencia de prototipo
function Empleado(nombre, puesto, salario) { 
 this.nombre = nombre;
  this.puesto = puesto;
  this.salario = salario;
}
// Método para mostrar información del empleado
Empleado.prototype.descripcion = function () {
  console.log(`${this.nombre} trabaja como ${this.puesto} con un salario de $${this.salario}`);
};
// Método para verificar si el empleado es alto
Empleado.prototype.esAltoSalario = function () {
  console.log(this.salario > 50000 ? "Empleado con alto salario" : "Empleado con salario normal");
};
// Crear una instancia de Empleado
const empleado1 = new Empleado("Juan Pérez", "Desarrollador", 60000);
empleado1.descripcion();
empleado1.esAltoSalario();
// Crear otra instancia de Empleado
const empleado2 = new Empleado("Ana Gómez", "Diseñadora", 45000);
empleado2.descripcion();
empleado2.esAltoSalario();

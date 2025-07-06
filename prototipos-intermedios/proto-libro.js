// Constructor Libro: titulo, autor, año

function Libro(titulo, autor, anio) {
  this.titulo = titulo;
  this.autor = autor;
  this.anio = anio;
}
// Método para mostrar información del libro
Libro.prototype.descripcion = function () {
  console.log(`"${this.titulo}" de ${this.autor} (${this.anio})`);
};
Libro.prototype.esViejo = function () {
  console.log(this.anio < 2000 ? "Libro antiguo" : "Libro moderno");
};
const libro1 = new Libro("Cien años de soledad", "García Márquez", 1967);
libro1.descripcion();
libro1.esViejo();


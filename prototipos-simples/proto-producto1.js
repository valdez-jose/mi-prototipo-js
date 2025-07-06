// Crear un constructor Producto con nombre y precio
function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
}

// Método: mostrar info del producto
Producto.prototype.info = function () {
  console.log(`Producto: ${this.nombre} - Precio: $${this.precio}`);
};

const prod1 = new Producto("Zapatilla", 10000);
prod1.info();


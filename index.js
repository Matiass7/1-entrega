class Producto{
    constructor(id, nombre, precio, cantidad){
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
      this.cantidad = cantidad;
    }
  }

  const procesadores = [
    new Producto(1, `AMD Ryzen 5 5600x 4.GHz Turbo AM4`, 57200, 2),
    new Producto(2, `AMD Ryzen 9 5900x 4.8Hz Turbo AM4`, 106510, 1),
    new Producto(3, `Intel core i7-10700`, 62000, 4),
    new Producto(4, `Intel core i7-12700KF`,94000, 2),
  ];
  
let nombre = prompt("Ingrese el nombre del producto");
let producto = procesadores.find(item => item.nombre === nombre);

let mensaje = `El procesador ${nombre} vale ${producto.precio}`;
alert(mensaje);

const carrito = [];
carrito.push("");

console.log(carrito);
    

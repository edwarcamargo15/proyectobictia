const carro = new Carrito();
const carrito = document.getElementById('carrito');
const productos = document.getElementById('lista-productos');
const listaProductos = document.querySelector('#lista-carrito tbody');

cargarEventos();

function cargarEventos(){
    producto.addEventListener('click', (e)=>{carro.comprarProducto(e)});
}
//productos

let productos = [
    {id:1, nombreProducto:"Lampara de calabaza", precio:1600, stock:20, imageUrl:"/assets/lamparaCalabaza2.jpg"},
    {id:2, nombreProducto:"Calavera", precio:3100, stock:20, imageUrl:"/assets/calavera2.jpg"},
    {id:3, nombreProducto:"candelabro", precio:5600, stock:20, imageUrl:"/assets/candelabro2.jpg"},
    {id:4, nombreProducto:"Esqueleto Pirata", precio:11200, stock:20, imageUrl:"/assets/esqueletoPirata2.jpg"},
    {id:5, nombreProducto:"Michi esqueleto", precio:9800, stock:20, imageUrl:"/assets/michiEsqueleto2.jpg"},
    {id:6, nombreProducto:"Plantera spooky", precio:1600, stock:20, imageUrl:"/assets/planterSpooky2.jpg"},
    {id:7, nombreProducto:"Mano", precio:2600, stock:20, imageUrl:"/assets/mano2.jpg"}
]

let contenedorDeProductos = document.getElementById("contenedorProductos")

contenedorDeProductos.innerHTML = ''
for ( const producto of productos ){
    let tarjetaProducto = document.createElement('div')
    tarjetaProducto.className = 'producto'
    tarjetaProducto.innerHTML= `
    <h4>${producto.nombreProducto}</h4>
    <h5>$${producto.precio}</h5>
    <h6>Quedan ${producto.stock} unidades</h6>
    <img src=${producto.imageUrl}>
    <button class="boton" id=${producto.id}> Agregar al carrito</button>
    `
    contenedorDeProductos.append(tarjetaProducto)
} 

//storage
let botones = document.getElementsByClassName('boton')
let carrito = document.getElementById('carrito')

let carritoGuardado = [] 
if(localStorage.getItem('carrito')){
    carritoGuardado = JSON.parse(localStorage.getItem('carrito'))
}
for(const item of carritoGuardado) {
    let productoBuscado = productos.find(producto => producto.id == item.id)
    carrito.innerHTML += `
        <div class="itemCarrito">
        <p>${productoBuscado.nombreProducto}</p>
        <p>${productoBuscado.precio}</p>
        </div>
        `
}

for(const boton of botones){
    boton.onclick = (elemento) => {
        let productoBuscado = productos.find(producto => producto.id == elemento.target.id)
        carrito.innerHTML += `
        <div class="itemCarrito">
        <p>${productoBuscado.nombreProducto}</p>
        <p>${productoBuscado.precio}</p>
        </div>
        `
        carritoGuardado.push({id:productoBuscado.id,nombre:productoBuscado.nombreProducto,precio:productoBuscado.precio})
        localStorage.setItem('carrito',JSON.stringify(carritoGuardado))
    }
}
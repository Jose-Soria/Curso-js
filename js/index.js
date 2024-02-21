//segunda preentrega(reentrega)

//Hola Nico, como estas?, espero que bien. Me encontré superado por el trabajo a entregar, por lo que no puedo cumplir como se debe con esta entrega. Creé un clase constructora para poder hacer los productos que necesito para la tienda, y los puse dentro de un array para que los almacene como una lista. Mil disculpas de nuevo por todo. Voy a seguir tratando, para ver si puedo llegar al trabajo final. Gracias por la ayuda y los consejos.



class Producto{
    constructor(tipo, nombre, precio, cantidadDisponible){
        this.tipo= tipo
        this.nombre= nombre
        this.precio= precio
        this.cantidadDisponible= cantidadDisponible
    }
}

const PRODUCTO1= new Producto("repuesto","baquetas",3000, 20);

const PRODUCTO2= new Producto("repuesto","púa",200, 300);

const PRODUCTO3= new Producto("instrumento","ukelele",35000, 12); 

const PRODUCTO4= new Producto("accesorio","funda guitarra",28000, 35);

const PRODUCTO5= new Producto("instrumento","armónica",12000, 17);

const PRODUCTO6= new Producto("accesorio","linea para microfono",8000, 10);

const PRODUCTO7= new Producto("instrumento","guitarra electroacústica",200000, 24);

const PRODUCTO8= new Producto("repuesto","encordado para guitarra criolla",6000, 150);

let tienda = [PRODUCTO1,PRODUCTO2,PRODUCTO3,PRODUCTO4,PRODUCTO5, PRODUCTO6,PRODUCTO7, PRODUCTO8];

console.log(tienda);
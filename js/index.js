/*  19/03/24

Hola profe, le comento que desde la clase 6 dejé de hacer el curso, y solamente le entregué a mi tutor, algún trabajo imcompleto, para que no quedaran las entregas sin realizar. El curso se me volvió cuesta arriba, me atrasé y no pude seguir el ritmo de las exigencias. Las clases estuvieron todas impecables, simplemente no le dediqué el tiempo suficiente al curso, y no pude acomodarlo con mi trabajo. Desde ya, pido disculpas, porque esto no es lo que se supone que entregue. Muchas gracias por las clases.*/


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



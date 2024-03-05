/* Hola Nico, cómo estás?, espero que muy bien. Te comento que finalmente, decidí dejar de hacer el curso, para volver a empezar desde cero, en mi tiempo y a mi ritmo. Me encontré superado por mi trabajo y el curso. Por lo cual decidí seguir revisando las clases, tomando notas y prácticando para mejorar, pero sin la presión que significan para mi, cumplir con las entregas y desafios en tiempo y forma.
Por eso, voy a continuar entregándote un archivo práticamente vacío, a los fines de cumplir con las entregas, para poder seguir teniendo el acceso a las clases. Desde ya me disculpo con vos, porque se que esto no cumple las expectativas de quien espera corregir un trabajo práctico. Lamento hacerte perder el tiempo. Y como siempre, completamente agradecido, por la comprensión, paciencia y por todos los consejos que me brindaste para encarar los trabajos y mejorar. Sos un gran tutor Nico. Saludos. */


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



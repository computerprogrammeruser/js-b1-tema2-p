//T2: Clases / Classes
//U2: Constructores e instanciación / Constructors i instanciació
/** 
  -- CASTELLANO --
  EJERCICIO 2.2.2 ENUNCIADO:
  Nos piden crear una aplicación que trabaje con triángulos, por lo que, para representar estos objetos de manera más cómoda y estructurada
  se nos pide que definamos la clase que representará estos objetos y que la denominemos "Triangle". Estos objetos, en principio tendrán dos propiedades: 
  "base" (en donde se almacenará el valor de la base del triángulo) y "height" (en donde almacenaremos el valor de la altura del triángulo).
  Define esta clase que implemente un constructor capaz de instanciar objetos de este tipo. 
	
  -- CATALÀ --
  EXERCICI 2.2.2 ENUNCIAT:
  Ens demanen crear una aplicació que treballi amb triangles, per la qual cosa, per representar aquests objectes de manera més còmoda i estructurada
  se'ns demana que definim la classe que representarà aquests objectes i que l'anomenem "Triangle". Aquests objectes, en principi tindran dues propietats:
  "base" (on s'emmagatzemarà el valor de la base del triangle) i "height" (on emmagatzemarem el valor de l'alçada del triangle).
  Defineix aquesta classe que implementi un constructor capaç d'instanciar d'aquest tipus d'objectes.
*/

//Escribe aquí tu solución / escriviu aquí la vostra solució:

class Triangle {
  constructor(base, height) {
    this.base = base;
    this.height = height;
  }
}



/**
 * TEST
 * The purpose of this code is purely for TESTING PURPOSES, 
 * if you run this code outside of this environment, 
 * please comment or remove the following lines
 */
export function tests() {
  return Triangle;
}
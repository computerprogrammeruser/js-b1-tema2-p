//T2: Clases / Classes
//U2: Constructores e instanciación / Constructors i instanciació
/** 
  -- CASTELLANO --
  EJERCICIO 2.2.3 ENUNCIADO:
  Trabajando con la clase que habéis definido en el ejercicio anterior ("Triangle"), se nos pide definir en dos constantes myTriangle1 y myTriangle2 
  dos de estos objetos, con las siguientes propiedades: 
  myTriangle1 será un triángulo de base 10 y de altura 5.
  myTriangle2 será un triángulo de base 15 y de altura 7.
  Se nos pide, una vez definidos estos triángulos, redefinir el valor de la altura de myTriangle1 en la propiedad de la base de myTriangle2 así como
  redefinir el valor de la altura de myTriangle2 en la propiedad de la altura de myTriangle1.
  Una vez realizadas estas operaciones anteriores, nos piden almacenar en las constantes areaMyTriangle1 y areaMyTriangle2 el valor del cálculo del àrea
  de myTriangle1 y myTriangle2 respectivamente (recordad que la fórmula del cálculo del área de un triángulo es (base x altura) / 2. 
	
  -- CATALÀ --
  EXERCICI 2.2.3 ENUNCIAT:
  Treballant amb la classe que heu definit a l'exercici anterior ("Triangle"), se'ns demana definir en dues constants myTriangle1 i myTriangle2
  dos d'aquests objectes, amb les propietats següents:
  myTriangle1 serà un triangle de base 10 i d'alçada 5.
  myTriangle2 serà un triangle de base 15 i d'alçada 7.
  Se'ns demana, un cop definits aquests triangles, redefinir el valor de l'alçada de myTriangle1 a la propietat de la base de myTriangle2 així com
  redefinir el valor de l'alçada de myTriangle2 a la propietat de l'alçada de myTriangle1.
  Un cop realitzades aquestes operacions anteriors, ens demanen emmagatzemar a les constants areaMyTriangle1 i areaMyTriangle2 el valor del càlcul de l'àrea
  de myTriangle1 i myTriangle2 respectivament (recordeu que la fórmula del càlcul de l'àrea d'un triangle és (base x alçada) / 2).
*/

//Escribe aquí tu solución / escriviu aquí la vostra solució:

class Triangle {
  constructor(base, height) {
    this.base = base;
    this.height = height;
  }
}

const myTriangle1 = new Triangle(10, 5);
const myTriangle2 = new Triangle(15, 7);

let cont = myTriangle1.height;
myTriangle1.height = myTriangle2.height;
myTriangle2.base = cont;

const areaMyTriangle1 = myTriangle1.base * myTriangle1.height / 2;
const areaMyTriangle2 = myTriangle2.base * myTriangle2.height / 2;




/**
 * TEST
 * The purpose of this code is purely for TESTING PURPOSES, 
 * if you run this code outside of this environment, 
 * please comment or remove the following lines
 */
export function tests() {
  return [Triangle, myTriangle1, myTriangle2, areaMyTriangle1, areaMyTriangle2];
}

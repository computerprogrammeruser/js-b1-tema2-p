//T2: Clases / Classes
//U5: Métodos de instancia y métodos de clase / Mètodes d'instància i mètodes de classe
/** 
  -- CASTELLANO
  -- EJERCICIO 2.5.3 ENUNCIADO: 
	Se nos pide, basándonos en todo lo definido en el ejercicio 2.3.2, ampliar la definición de la clase "Triangle" que representará los distintos triángulos 
	de un app de geometría , de manera que podamos cubrir las siguientes nuevas funcionalidades:  
	- Sabemos que, dados dos triángulos rectangulos, si los enfrentamos juntándolos por sus ángulos rectos formarán un polígono, de manera que el perímetro 
	exterior de	este nuevo polígono será la suma del perímetro de ambos rectángulos más el valor absoluto de la resta de ambas alturas, con esto necesitamos, 
	dados dos triángulos rectángulos, obtener el perímetro exterior del polígono que conforman definiendo un nuevo método llamado rightTriangleUnion.
	- Tambien es necesario saber, dado un Polígono formado por una serie de triángulos (que nos llegarán en un Array), obtener cuál es el área de ese polígono
	con un nuevo médodo llamado areaPoligon. (Nota: el área de la superficie de un polígono formado por triángulos es la suma de las áreas de estos triángulos).
	- Así mismo, nos piden, con el fin de poder saber si un triángulo es equilátero o no, un método (al que llamaremos isEquilateral) que accediendo a sus propiedades 
	base y height, nos devuelva	si el triángulo es equilátero; NOTA: una propiedad de los triángulos equiláteros es que su altura siempre es igual a la base por la raiz 
	cuadrada de tres dividido entre dos (height = (base*√3) / 2 ). Para comprobarlo, un ejemplo de triángulo equilátero sería uno con una base de 10 y una altura de 10 * √3 / 2.
	como este por ejemplo:
	const myEquilateral = new Triangle(10, 10*Math.sqrt(3)/2, false);
  
	En base a la funcionalidad solicitada deberéis decidir qué métodos definís como Métodos de Instancia y cuáles definís como Métodos de Clase.
	Finalmente, crea al menos 3 objetos de la clase Triangle y haz 3 llamadas a estos nuevos métodos.
      	
  -- CATALÀ
  -- EXERCICI 2.5.3 ENUNCIAT:
	Se'ns demana, basant-nos en tot allò definit a l'exercici 2.3.2, ampliar la definició de la classe "Triangle" que representarà els diferents triangles
	d'una app de geometria , de manera que puguem cobrir les noves funcionalitats següents:
	- Sabem que, donats dos triangles rectangles, si els enfrontem unint-los pels seus angles rectes formaran un polígon, de manera que el perímetre
	exterior d'aquest nou polígon serà la suma del perímetre de tots dos rectangles més el valor absolut de la resta de les seves altures, amb això necessitem,
	donats dos triangles rectangles, obtenir el perímetre exterior del polígon que conformen definint un nou mètode anomenat rightTriangleUnion.
	- També cal saber, donat un Polígon format per una sèrie de triangles (que ens arribaran en un Array), obtenir quina és l'àrea d'aquest polígon
	amb un nou mètode anomenat areaPoligon. (Nota: l'àrea de superfície d'un polígon format per triangles és la suma de les àrees d'aquests triangles).
	- Així mateix, ens demanen, per tal de poder saber si un triangle és equilàter o no, un mètode (al que anomenarem isEquilateral) que accedint a les seves propietats
	base i height, ens torni si el triangle és equilàter; NOTA: una propietat dels triangles equilàters és que la seva alçada sempre és igual a la base per l'arrel
	quadrada de tres dividit entre dos (height = (base*√3) / 2 ). Per comprovar-ho, un exemple de triangle equilàter seria un amb una base de 10 i una alçada de 10*√3/2.
	com aquest per exemple:
	const myEquilateral = new Triangle(10, 10*Math.sqrt(3)/2, false);
	  
	En base a la funcionalitat sol·licitada haureu de decidir quins mètodes definiu com a Mètodes d'Instància i quins definiu com a Mètodes de Classe.
	Finalment, crea almenys 3 objectes de la classe Triangle i fes 3 trucades a aquests nous mètodes.
*/
//Escribe aquí tu solución / escriviu aquí la vostra solució:

class Triangle {
  constructor(base, height, rightTriangle) {
    this.base = base;
    this.height = height;
    this.rightTriangle = rightTriangle;
  }

  get areaTriangle() {
    return this.base * this.height / 2;
  }

  get rightHypotenuse() {
    return this.rightTriangle ? Math.sqrt(Math.pow(this.base, 2) + Math.pow(this.height, 2)) : undefined;
  }

  get rightPerimeter() {
    return this.rightTriangle ? this.base + this.height + this.rightHypotenuse : undefined;
  }

  static rightTriangleUnion(triangle1, triangle2){
	if(!triangle1.rightTriangle || !triangle2.rightTriangle){
		return undefined;
	} else {
		return triangle1.rightPerimeter + triangle2.rightPerimeter + Math.abs(triangle1.height - triangle2.height);
	}
  }

  static areaPoligon(trianglesArray){
	let areaPoligon = 0;
	for (let i = 0; i < trianglesArray.length; i++){
		areaPoligon = areaPoligon + trianglesArray[i].areaTriangle;
	}
	return areaPoligon;
  }

  isEquilateral(){
	let errorMargin = 0.00001;
	let exactValue = this.base * Math.sqrt(3) / 2;
	return Math.abs(this.height - exactValue) < errorMargin;
  }
}

const myTriangle1 = new Triangle(10, 2.15443, false);
const myTriangle2 = new Triangle(10, 5, true);
const myTriangle3 = new Triangle(15, 7, false);

Triangle.rightTriangleUnion(myTriangle1, myTriangle3);

let trianglesArray = [myTriangle1, myTriangle2, myTriangle3];
Triangle.areaPoligon(trianglesArray);

myTriangle1.isEquilateral();






/**
 * TEST
 * The purpose of this code is purely for TESTING PURPOSES, 
 * if you run this code outside of this environment, 
 * please comment or remove the following lines
 */
export function tests() {
    return Triangle;
}
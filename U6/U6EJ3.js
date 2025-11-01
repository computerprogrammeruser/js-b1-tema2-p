//T2: Clases / Classes
//U6: Serialización de objetos con JSON / Serialització d'objectes amb JSON
/** 
  -- CASTELLANO
  -- EJERCICIO 2.6.3 ENUNCIADO: 
	Dado en el valor de la constante denominada myJSON, un texto plano en formato JSON que contiene la descripción de un Array con tres objetos de la clase Triangle,
	vista en el ejercicio 2.5.3. Se nos pide
	- Definir en una constante denominada myTriangles un Array de objetos Triangle a partir de este texto.
	- Obtener un nuevo Array en otra constante (a la que llamaremos equilateralsTriangles) con todos triángulos equiláteros del Array anterior (myTriangles).
	- Pasar este nuevo Array a un texto plano JSON en una nueva constante denominada newTrianglesJSON.
	
  
  -- CATALÀ
  -- EXERCICI 2.6.3 ENUNCIAT:
	Donat  el valor de la constant anomenada myJSON, un text pla en format JSON que conté la descripció d'un Array amb tres objectes de la classe Triangle,
	vista a l'exercici 2.5.3. Se'ns demana
	- Definir en una constant anomenada myTriangles un Array d'objectes Triangle a partir d'aquest text.
	- Obtenir un nou Array en una altra constant (que anomenarem equilateralsTriangles) amb tots triangles equilàters de l'Array anterior (myTriangles).
	- Passar aquest nou Array a un text pla JSON en una nova constant anomenada newTrianglesJSON.
*/

const myJSON = '[{"base":10,"height":5,"rightTriangle":true},{"base":10,"height":8.660254037844386,"rightTriangle":false},{"base":15,"height":7,"rightTriangle":true}]';

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

  static equilateralsArray(array){
	let resultArray = [];
	for(let i = 0; i < array.length; i++){
		if(array[i].isEquilateral()){
			resultArray.push(array[i]);
		}
	}
	return resultArray;
  }
}

const myTriangles = JSON.parse(myJSON).map(triangle => new Triangle(triangle.base, triangle.height, triangle.rightTriangle));

const equilateralsTriangles = Triangle.equilateralsArray(myTriangles);

const newTrianglesJSON = JSON.stringify(equilateralsTriangles);





/**
 * TEST
 * The purpose of this code is purely for TESTING PURPOSES, 
 * if you run this code outside of this environment, 
 * please comment or remove the following lines
 */
export function tests() {
	return [myTriangles, equilateralsTriangles, newTrianglesJSON];
  }
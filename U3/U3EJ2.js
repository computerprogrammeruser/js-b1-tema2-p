//T2: Clases / Classes
//U3: Propiedades / Propietats
/** 
  -- CASTELLANO
  -- EJERCICIO 2.3.2 ENUNCIADO: 
  Se nos pide ampliar la definición de la clase "Triangle" que representará los distintos triángulos de un app de geometría (vista ya en el ejercicio 2.2.2 de 
  este mismo Tema 2), de la siguiente forma:
  -> Por un lado, respecto de sus propiedades, tenemos definidas dos hasta ahora: "base" (en donde se almacena el valor de la base del triángulo) y 
  "height" (en donde almacenamos el valor de la altura del triángulo). Ahora nos piden definir una nuevas propiedad "rightTriangle": en la cual almacenaremos 
  si ése triángulo es un triángulo rectángulo o no mediante un valor booleano.
  -> También nos piden implementar un getter "areaTriangle" que devuelva el valor calculado del àrea del triangulo (recordad que la fórmula del cálculo del área
  de un triángulo es (base x altura) / 2.
  -> Por otro lado, nos piden implementar dos getters específicos para los triángulos que son rectángulos: 
    - El primero se llamará "rightHypotenuse" y nos devolverá, en caso de que el triángulo sea rectángulo (cosa que podremos comprobar con el valor definido en la 
    nueva propiedad "rightTriangle"), el valor calculado de la hipotenusa de nuestro triángulo rectángulo (recordad que la fórmula del cálculo de la hipotenusa de
    un triángulo rectángulo, dadas la base y la altura es c = √(b²+a²), la habéis calculado en el ejercicio 1 de la Unidad 3 del Tema 1), en el caso de que el 
    triángulo no sea rectángulo este getter devolvera "undefined". 
    - El segundo getter lo denominaremos "rightPerimeter" y será para calcular el perímetro de un triángulo rectángulo: es decir, si el triángulo no es rectángulo 
    devolveremos undefined, pero si sí lo es, devolveremos el perímetro del mismo (recuerda que el perímetro de un triángulo rectángulo es la suma de la base
    más la altura más la hipotenusa).  
    	
  -- CATALÀ
 -- EXERCICI 2.3.2 ENUNCIAT:
  Se'ns demana ampliar la definició de la classe "Triangle" que representarà els diferents triangles d'una app de geometria (vista ja a l'exercici 2.2.2 de
  aquest mateix Tema 2), de la manera següent:
  -> D'una banda, respecte de les seves propietats, en tenim definides dues fins ara: "base" (on s'emmagatzema el valor de la base del triangle) i
  "height" (on emmagatzemem el valor de l'alçada del triangle). Ara ens demanen definir una nova propietat, "rightTriangle": on emmagatzemarem si aquest triangle 
  és un triangle rectangle o no mitjançant un valor booleà.
  -> També ens demanen implementar un getter "areaTriangle" que torni el valor calculat de l'àrea del triangle (recordeu que la fórmula del càlcul de l'àrea
  d'un triangle és (base x alçada) / 2.
  -> D'altra banda, ens demanen implementar dos getters específics per als triangles que són rectangles:
    - El primer es dirà "rightHypotenuse" i ens tornarà, en cas que el triangle sigui rectangle (cosa que podrem comprovar amb el valor definit a la
    nova propietat "rightTriangle"), el valor calculat de la hipotenusa del nostre triangle rectangle (recordeu que la fórmula del càlcul de la hipotenusa d'un
    triangle rectangle, donades la base i l'alçada és c = √(b²+a²), l'heu calculada a l'exercici 1 de la Unitat 3 del Tema 1), en el cas que el
    triangle no sigui rectangle aquest getter retornarà "undefined".
    - El segon getter l'anomenarem "rightPerimeter" i serà per calcular el perímetre d'un triangle rectangle: és a dir, si el triangle no és rectangle
    tornarem undefined, però si sí que ho és, tornarem el perímetre del mateix (recorda que el perímetre d'un triangle rectangle és la suma de la base
    més l'alçada més la hipotenusa).
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
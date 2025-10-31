//T2: Clases / Classes
//U2: Constructores e instanciación / Constructors i instanciació
/** 
  -- CASTELLANO
  -- EJERCICIO 2.2.1 ENUNCIADO: 
  Dada la definición de la clase "Car" que representará los coches de un concesionario, y en donde se establecen las propiedades brand (marca), model (modelo),
  displacement (cilindrada en cc), horsePower (potencia en CV), year (año del vehículo). 
  Se nos pide crear tres nuevos objetos de este tipo  que definiremos respectivamente en las constantes (ya dadas) myCar1, myCar2 y myCar3.
  En myCar1 tenemos que almacenar un antiguo coche del año 1969, de la marca Ford, del modelo "Mustang Boss 429", de 7000 cc de cilindrada y con una potencia de 375 CV
  En myCar2 guardaremos un BMW del año 2002, el modelo "520d", de 1980 cc de cilindrada y con una potencia de 136 CV
  Finalmente, en myCar3, almacenaremos un modelo "280 SLC" de la marca Mercedes-Benz del año 1979 con una cilidrada de 2746 cc y 136 CV de potencia  
  
  	
  -- CATALÀ --
  EXERCICI 2.2.1 ENUNCIAT:
  Donada la definició de la classe "Car" que representarà els cotxes d'un concessionari, i on s'estableixen les propietats brand (marca), model (model),
  displacement (cilindrada en cc), horsePower (potència en CV), year (any del vehicle).
  Se'ns demana crear tres nous objectes d'aquest tipus que definirem respectivament a les constants (ja donades) myCar1, myCar2 i myCar3.
  A myCar1 hem d'emmagatzemar un antic cotxe de l'any 1969, de la marca Ford, del model "Mustang Boss 429", de 7000 cc de cilindrada i amb una potència de 375 CV
  A myCar2 desarem un BMW de l'any 2002, el model "520d", de 1980 cc de cilindrada i amb una potència de 136 CV
  Finalment, a myCar3, emmagatzemarem un model "280 SLC" de la marca Mercedes-Benz de l'any 1979 amb una cilidrada de 2746 cc i 136 CV de potència
*/
class Car {
  constructor(brand, model, displacement, horsePower, year) {
    this.brand = brand;
    this.model = model;
    this.displacement = displacement;
    this.horsePower = horsePower;
    this.year = year;
  }
}

//Escribe aquí tu solución / escriviu aquí la vostra solució:

const myCar1 = new Car('Ford', 'Mustang Boss 429', 7000, 375, 1969);
const myCar2 = new Car('BMW', '520d', 1980, 136, 2002);
const myCar3 = new Car('Mercedes-Benz', '280 SLC', 2746, 136, 1979)




/**
 * TEST
 * The purpose of this code is purely for TESTING PURPOSES, 
 * if you run this code outside of this environment, 
 * please comment or remove the following lines
 */
export function tests() {
  return [myCar1, myCar2, myCar3];
}
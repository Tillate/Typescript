// Les Classes
// Les modificateurs public, private, protected et readonly
// Propriétés statiques et notation raccourcie
// Les classes abstraites (classe que l'on ne peut pas instancier)

abstract class Engine {
  constructor(protected type: string) {}

  abstract stopEngine(): number;
}
// const Engine = new Engine();

class Vehicule extends Engine {
  wheel = 4;
  protected brand: string;

  constructor(brand: string) {
    super("V8");
    this.brand = brand;
  }
  stopEngine() {
    console.log("Stop engine");
    return 0;
  }
}

class Voiture extends Vehicule {
  static className = "Vehicule";
  private maxSpeed: number = 100;
  readonly airbag: boolean;
  static startCar() {
    console.log("car can start");
  }

  move(): void {
    console.log("car move");
  }
  stop() {
    console.log("car stop");
  }
  faster(newSpeed: number): void {
    if (newSpeed < this.maxSpeed) {
      this.speed = newSpeed;
    }
  }
  changeBrand(newBrand: string): void {
    this.brand = newBrand;
  }

  constructor(public speed: number) {
    super("Renault");
    this.airbag = true;
  }
}

let car = new Voiture(30);
console.log(car.speed);
console.log(car.wheel);
console.log(car);
console.log(Voiture.className);
console.log(Voiture.startCar());

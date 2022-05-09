// Les Interfaces
// Propriétés optionnelles et en lecture seule : readonly
// Les types indexable [propName: string]: any;

interface User {
  readonly username: string;
  age: number;
  isDrinking?: boolean;
  isHealthy?: boolean;
  isSmoking?: boolean;
  [propName: string]: any;
  [propName: number]: any;
}

const ids: readonly string[] = ["1", "2", "3"];

const user: User = {
  username: "Jean",
  age: 30,
  isHealthy: true,
  isDrinking: false,
  isSmoking: false,
};

const newUser: User = {
  username: "Paul",
  age: 50,
  isOnline: true,
  1: false,
};

function greet(user: { username: string }): void {
  console.log(`Hello ${user.username}`);
}

function death(user: User) {}
function goodShape(user: User) {}

greet(user);

//  Interfaces et fonctions
let func: (param: string) => number;

interface MyFunc {
  (param: string): number;
}

const func2: MyFunc = (x) => {
  return 0;
};

interface Car2 {
  name: string;
  drive: () => void;
}

//Compositions d'interfaces et classes
interface Vehicule2 {
  name: string;
  drive: () => void;
}
interface Engine2 {
  type: string;
}

// interface Car2 extends Vehicule2, Engine2 {
//   wheels: number;
// }

// const newCar: Car2 = {
//   name: "Zoe",
//   type: "Electric",
//   wheels: 4,
//   drive: () => {},
// };

class Car3 implements Vehicule2, Engine2 {
  drive() {}
  constructor(
    public name: string,
    public type: string,
    public wheels: number
  ) {}
}

//Extension d'une classe par une interface
class Player {
  constructor(private isPlaying: boolean) {}
}

interface PlayerBasic extends Player {
  play: () => void;
}

class Mp3Player extends Player implements PlayerBasic {
  play() {}
}

class Game extends Player implements PlayerBasic {
    play() {}

}

// Les Types de base

const book: string = "une string";
const math: number = 20;
const boolean: boolean = 1 === 1; // true // false

// Les types any ou object
const obj: object = new Map(); //[] // { name: 'jean'}
const anything: any = {}; //'123'

// Les types array et tuple
const arr: number[] = [1, 2, 3];
const arr2: Array<number> = [1, 2, 3];
const arr3: Array<string> = ["un", "deux", "trois"];
const arr4: any[] = [1, "deux", 3];
const tuple: [number, number] = [1, 2]; //respecter le nombre d'entrée du tableau en sortie

// Les Types enum
enum XhrReadyState {
  UNSENT, //0
  OPENED, //1
  HEADERS_RECEIVED, //2
  LOADING, //3
  DONE, //4
}
console.log(XhrReadyState.UNSENT);
console.log(XhrReadyState[1]);

// const readyState = 0;
// if(readyState === XhrReadyState.UNSENT) {

// }
// if(readyState === XhrReadyState.OPENED) {

// }
// if(readyState === XhrReadyState.HEADERS_RECEIVED) {

// }
// if(readyState === XhrReadyState.LOADING) {

// }
// if(readyState === XhrReadyState.DONE) {

// }

//Autre exemple
// enum Role {ADMIN, READ_ONLY, READ_WRITE};

// if (user.role === Role.ADMIN) {
//   // …
// }

// Les Types null
const foo2: null = null;
const foo3: undefined = undefined;

// Les Types sur les fonctions (void, never)
function add(nbr1, nbr2): number {
  return 5;
}
function add2(nbr1: number, nbr2: number): number {
  return 5;
}
function add3(nbr1: number, nbr2: number): void {
  //Void indique que la fonction ne doit rien retourner
  console.log(nbr1 + nbr2);
}
function loop(): never {
  //Never indique que la fonction ne doit jamais s'arreter
  while (true) {}
}

// Le type inference et assertion
let myvar: string = "Hello";
myvar = "world";

let username: any;
username = "jean";

const nbr: number = (username as string).length;

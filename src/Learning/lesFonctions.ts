// //Fonction nommé
// function add() {}

// //Fonction anonyme
// const add = () => {};

function add4(nbr1: number, nbr2: number): number {
  return nbr1 + nbr2;
}

function add5(nbr1: number, nbr2: number) {
  return nbr1 + nbr2;
}

let add6: (nbr1: number, nbr2: number) => number;

add6 = (a: number, b: number) => {
  return a + b;
};

// Les parametres optionnels
let add7: (nbr1: number, nbr2: number) => number;

add7 = (a: number, b?: number, c?: number) => {
  if (b) {
    return a + b;
  } else {
    return a;
  }
};

// Paramètre par défaut et rest
let add8: (nbr1: number, nbr2: number) => number;
add8 = (a: number, b = 0) => {
  if (b) {
    return a;
  } else {
    return a + b;
  }
};
add8(1, 2);

let add9 = (...numbers: number[]) => {
  numbers.reduce((acc, i) => {
    acc = +i;
    return acc;
  }, 0);
};
add9(1, 2, 3);
// ou
let add10 = (...numbers: Array<number>) => {
  numbers.reduce((acc, i) => {
    acc = +i;
    return acc;
  }, 0);
};
add10(1, 2, 3);

// La Surcharge de fonction
function add11(a: number, b: number): number;
function add11(a: string, b: string): string;
function add11(a, b): string | number {
  return a + b;
}
const foo = add11(1, 2);
const bar = add11("hello", "world");
bar.split("/");
bar.length;

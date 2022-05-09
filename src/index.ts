// //Fonction nommé
// function add() {}

// //Fonction anonyme
// const add = () => {};

function add(nbr1: number, nbr2: number): number {
  return nbr1 + nbr2;
}

function add2(nbr1: number, nbr2: number) {
  return nbr1 + nbr2;
}

let add3: (nbr1: number, nbr2: number) => number;

add3 = (a: number, b: number) => {
  return a + b;
};

// Les parametres optionnels
let add4: (nbr1: number, nbr2: number) => number;

add4 = (a: number, b?: number, c?: number) => {
  if (b) {
    return a + b;
  } else {
    return a;
  }
};

// Paramètre par défaut et rest

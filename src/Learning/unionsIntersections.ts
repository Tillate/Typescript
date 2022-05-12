// Les unions (OU)
// Les unions discriminantes et gardes

const userStatus: "online" | "offline" | "busy" = "online";

let value: number | string;
value = 1;
value = "hello";
// value = true; // error

interface Car {
  type: "car";
  seat: number;
  drive: () => void;
}

interface Truck {
  type: "truck";
  seat: number;
  load: (amount: number) => void;
  drive: () => void;
}

const myvehicule: Car | Truck = {
  type: "truck",
  seat: 4,
  load: (amount: number) => void {},
  drive: () => {},
};

function vehiculeFactory(type: 1 | 2): Car | Truck {
  if (type === 1) {
    return {
      type: "car",
      seat: 4,
      drive: () => {},
    };
  } else {
    return {
      type: "truck",
      seat: 2,
      load: (amount: number): void => {},
      drive: () => {},
    };
  }
}

const foo4 = vehiculeFactory(2);

if (foo4.type === "truck") {
  foo4.load(123);
}

function startTrip(v: Car | Truck) {
  switch (v.type) {
    case "car": {
      v.drive();
      break;
    }
    case "truck": {
      v.drive();
      v.load(123);
    }
  }
}

// Les gardes
interface Bird {
  fly: () => void;
}

interface Whale {
  swim: () => void;
}

function isBird(x: Whale | Bird): x is Bird {
  return (x as Bird).fly !== undefined;
}

function move(a: Bird | Whale) {
  if (isBird(a)) {
    a.fly();
  } else {
    a.swim();
  }
}
// function move(a: Bird | Whale) {
//   if ('fly'in a) {
//     a.fly();
//   } else {
//     a.swim();
//   }
// }

function foo5(a: string | number) {
  if (typeof a === "number") {
    a.toFixed();
  }
}

class A {
  getA() {}
}
class B {
  getB() {}
}

const a = new A();
const b = new B();

// Fonctionne uniquement sur les classes
function bar2(a: A | B) {
  if (a instanceof A) {
    a.getA();
  } else {
    a.getB();
  }
}

// Les intersections (ET)
interface User2 {
  username: string;
}

interface Moderator {
  deleteMessage: () => void;
  editMessage: () => void;
}

interface AddContent {
  addMessage: () => void;
}

let newUser2: User2 & AddContent = {
  username: "Allan",
  addMessage: () => {},
};

let admin: User2 & AddContent & Moderator = {
  username: "Allan",
  addMessage: () => {},
  deleteMessage: () => {},
  editMessage: () => {},
};

// Nouveaux Opérateurs :
// Operateur de cohalescence des nuls
// Operateur de chainage optionnel
type Animal = {
  animalname: string;
  age: number;
  address?: {
    city: {
      name: string;
    };
  };
};

const myAnimal: Animal = {
  animalname: "toutou",
  age: 6,
};

const city = myAnimal.address?.city;
// remplace
// if (myAnimal && myAnimal.address && myAnimal.address.city) {

// }

if (myAnimal.address?.city?.name) {
  console.log("ok");
} else {
  console.log("ko !");
}
// const animalname = myAnimal.animalname || 'guest';  //  || operateur OU OU
const animalname = myAnimal.animalname ?? "guest"; //  Si Nul ou undefined renvoi guest   Si non nul ou undefined renvoie animalname
console.log(animalname);

// Les alias de type
type UserStatusType = "online" | "offline" | "busy";
let userStatus2: UserStatusType = "online";
type customModulos = 1 | 2 | 3;
type User3 = {
  username: string;
  age: number;
}
const newUser3: User3 = {
  username: 'Allan',
  age: 31
}

function getUserStatus(user): UserStatusType {
  return user.status;
}

// Les Types Génériques
// Les Tableaux
const arr5: Array<string> = ["pomme", "fraise", "tomate"];

const fruit = arr[0];

interface User4 {
  username: string;
}

const promise: Promise<User4> = new Promise((resolve, reject) => {
  resolve({ username: "Allan" });
});

promise.then((res) => {
  res.username;
});

// Fonctions et types génériques (T)
interface Fruit {
  name: string;
  price: number;
}
interface Bike {
  speed: number;
}

const newFruit: Fruit = {
  name: "banane",
  price: 1,
};

const newBike: Bike = {
  speed: 50,
};

function addItemToCollection<T>(item: T, collection: T[]): T[] {
  return [...collection, item];
}
// Ou
// interface AddItemFunction {
//     <T>(item: T, collection: T[]): T[]
// }
// const addItemToCollection: AddItemFunction = <T>(
//     item: T,
//     collection: T[]
// ) : T[] => {
//     return [...collection, item];
// };

const myFruits = addItemToCollection(newFruit, []);
const myBikes = addItemToCollection(newBike, []);

console.log(myFruits[0].price);
console.log(myBikes[0].speed);

// Classes et types génériques
class Stack<T> {
  items: T[] = [];
  push(item: T): void {
    this.items.push(item);
  }
  pop(): T {
    return this.items.pop();
  }
  display(): void {
    console.log(this.items);
  }
}
const newStackNumber = new Stack<number>();
newStackNumber.push(1);
newStackNumber.display();
newStackNumber.push(2);
newStackNumber.display();
const mynumber = newStackNumber.pop();
newStackNumber.display();

const newStackString = new Stack<string>();
newStackString.push("Hello");
newStackString.display();
newStackString.push("World");
newStackString.display();

const mystring = newStackString.pop();
newStackString.display();

// Contraindre les types génériques
interface Name {
  name: string;
}

function displayProp<T, U extends keyof T>(object: T, prop: U) {
  console.log(object[prop]);
}

displayProp({ price: 50 }, "price");

// Collections et types génériques
// Le type Readonly
interface User5 {
  username: string;
}
const newUser5: Readonly<User5> = {
  username: "Allan",
};
// newUser5.username = 'Allan';

// Le type Partial (Definit les propriétés du modèle interface optionnel)
interface User6 {
  username: string;
  age: number;
  address: {
    city: string;
  };
}
const newUser6: User6 = {
  username: "Allan",
  age: 15,
  address: {
    city: "Rennes",
  },
};

function editUser6(user: User6, editedUser: Partial<User>) {
  return { ...user, ...editedUser };
}
editUser6(newUser6, { age: 20 });

// Le type Record
interface Page {
  title: string;
}
// interface Pages {
//     [page: string]: Page
// }
type PageType = "home" | "about" | "contact";

const pages: Record<PageType, Page> = {
  home: {
    title: "homepage",
  },
  about: {
    title: "about",
  },
  contact: {
    title: "contact",
  },
};

// Le type Pick, Omit, Exclude, Extract, NonNullable, Parameters, ConstructorParameters, ReturnType, InstanceType, Required
interface User7 {
  username: string;
  age: number;
  address: {
    city: string;
  };
}

type LightUser = Pick<User7, "username" | "age">;   //Pick: Ne conserve que username et address
type LightUser2 = Omit<User7, "address">;           //Omit: Retire address du model
//Extract<T, U> : Permet de construire un nouveau type en extrayant d'un argument de type T toutes les propriétés qui se trouvent dans U.
// NonNullable<T> Permet de filtrer tous les types null et undefined de l'argument de type T
// Parameters<T> Permet de créer un tuple contenant dans l'ordre chaque type de chaque paramètre d'une fonction.
// ConstructorParameters<T>: Permet d'extraire tous les types des paramètres d'un constructeur.
// ReturnType<T>: Permet de créer un type à partir du type de retour d'une fonction.
// InstanceType<T>: Permet de créer un type à partir du type d'une fonction constructrice.
// Required<T>: Permet de prendre un type en argument et de retourner un nouveau type où toutes les propriétés sont obligatoires.
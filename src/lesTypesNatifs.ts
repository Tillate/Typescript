const h1 = document.querySelector("h1");

const img = document.querySelector("img");

img.addEventListener("click", (ev: MouseEvent) => {
  console.log("MouseEvent");
});

// Les Types mappés
interface Person {
  username: string;
  age: number;
}

interface Car4 {
  wheels: number;
}

interface PartialPerson {
  username?: string;
  age?: number;
}

type MyPartialPerson = { [P in keyof Person]?: Person[P] };
type MyPartial<T> = { [P in keyof T]?: T[P] };

const use: Person = {
  username: "Allan",
  age: 31,
};
const user2: PartialPerson = {
  username: "Laure",
};
const user3: MyPartialPerson = {
  username: "Nelson",
};
const user4: MyPartial<Person> = {
  username: "Allan",
};

// Les types conditionnels
interface Lenghty {
  length: number;
}

function funct<T extends Lenghty>(x: T) {
  return x.length;
}

declare function f<T>(x: T): T extends string ? string : boolean;
f("test");

type MyType = Exclude<"a" | "b", "a">;

type MyExcludeType<T, U> = T extends U ? never : T;

type MyType2 = MyExcludeType<"a" | "b", "a">;

type MyType3 = Extract<"a" | "b", "a">;

type MyExtractType<T, U> = T extends U ? T : never;

type MyType4 = MyExtractType<"a" | "b", "a">;

// L'inférence dans les types conditionnels
interface Func {
  (): string;
}

type MyReturnValueType<T> = T extends (...args: any[]) => infer FunctionReturn
  ? FunctionReturn
  : any;

type FuncReturnType = MyReturnValueType<Func>;

//  ---
type MyFunctionParametersType<T> = T extends (...args: infer Parameters) => any
  ? Parameters
  : void;

type MyParameters = MyFunctionParametersType<Func>;

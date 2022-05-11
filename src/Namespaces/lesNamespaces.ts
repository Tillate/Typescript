// Les Namespaces (optionnel, n'est plus vraiment utilisés)

import { Shape } from "./shape";
import { add } from "../../mylib/add";
import * as $ from "jquery";

console.log(add(1, 2));


const circle = new Shape.Circle();
const square = new Shape.Square();

const myh1 = $("h1");

console.log(myh1);

console.log(circle);
console.log(square);


// Declare
// Le mot clé declare s'utilise sur tout élément pour signifier au compilateur et à VS Code que l'élément sera disponible lors de l'exécution et qu'il ne doit pas s'en préoccuper.
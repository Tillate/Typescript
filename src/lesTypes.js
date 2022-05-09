// Les Types de base
var book = "une string";
var math = 20;
var boolean = 1 === 1; // true // false
// Les types any ou object
var obj = new Map(); //[] // { name: 'jean'}
var anything = {}; //'123'
// Les types array et tuple
var arr = [1, 2, 3];
var arr2 = [1, 2, 3];
var arr3 = ["un", "deux", "trois"];
var arr4 = [1, "deux", 3];
var tuple = [1, 2]; //respecter le nombre d'entrée du tableau en sortie
// Les Types enum
var XhrReadyState;
(function (XhrReadyState) {
    XhrReadyState[XhrReadyState["UNSENT"] = 0] = "UNSENT";
    XhrReadyState[XhrReadyState["OPENED"] = 1] = "OPENED";
    XhrReadyState[XhrReadyState["HEADERS_RECEIVED"] = 2] = "HEADERS_RECEIVED";
    XhrReadyState[XhrReadyState["LOADING"] = 3] = "LOADING";
    XhrReadyState[XhrReadyState["DONE"] = 4] = "DONE";
})(XhrReadyState || (XhrReadyState = {}));
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
var foo2 = null;
var foo3 = undefined;
// Les Types sur les fonctions (void, never)
function add(nbr1, nbr2) {
    return 5;
}
function add2(nbr1, nbr2) {
    return 5;
}
function add3(nbr1, nbr2) {
    //Void indique que la fonction ne doit rien retourner
    console.log(nbr1 + nbr2);
}
function loop() {
    //Never indique que la fonction ne doit jamais s'arreter
    while (true) { }
}
// Le type inference et assertion
var myvar = "Hello";
myvar = "world";
var username;
username = "jean";
var nbr = username.length;

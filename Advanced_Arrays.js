/*******Using let & Const*******/
/*const player = 'bobby';//Vakue does't change even if re-assigned.
let exp = 100;
let wiz = false;

if (exp > 90){
    let wiz = true; //inside the curley bracket, new scope created by let
    console.log('inside', wiz);
}

console.log('outside', wiz);

Answer
inside true
outside false*/

/*******Destructuring*********/

/*const player = {
    player: 'bobby',
    exp:100,
    wiz:false
}

const player = obj.player;
const exp = obj.exp;
let wiz = obj.wiz;

const {player, exp} = obj; //with destructuring, replace 1st 2 lines.
let {wiz} = obj;*/

/***********Object properties***********/

/*const name = 'john'
const obj = {
    [name]: 'hello',
    [1+2]: 'hihi'
}
//Answer
//{3: "hihi", john:"hello"}
const a = "Simon";
const b = true;
const c = {};

const obj = {a,b,c}; //if property is the same as the value.*/

/*********Template strings*********** To revise/

/*const name = "Sally";
const age = 34;
const pet = "horse";

const greet = "hello " + name + " you seem to be goind ";

const greetnew = "Hello + ${name} you seem to be ${age-10}. What a lovely ${pet} you have";*/

/*********Arrow Funstions*********/

function add (a, b){
    return a + b;
}

const add = (a, b) => a + b;











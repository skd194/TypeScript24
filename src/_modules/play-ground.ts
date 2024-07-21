import { Circle, Square } from './shapes';
import Store, { Format } from './store';
// wild card import
import * as Shapes from "./shapes";

//import { Circle as NCircle, Store as NStore } from './index';
// -- for index.ts ->  we do not need to specify the index in the path 
import { Circle as NCircle, Store as NStore } from '.';

let cr = new NCircle(1);
let str = new NStore(Format.Compressed);
console.log(cr, str)

let store = new Store(Format.Compressed);
console.log(store)

let circle = new Circle(10);
let square = new Square(5);

console.log(circle, square);

let circle2 = new Shapes.Circle(10);
console.log(circle2)

// Module formats 
/*
    AMD
    UMD
    CommonJS
    ES2015 / ES6 - starting with this module has been natively supported in Javascript
*/ 
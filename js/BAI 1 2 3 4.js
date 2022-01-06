document.write("1/ Square root of a integer");
let a = prompt("Square root of:");
document.write("Square root of:",a);
let b = Math.sqrt(a);
document.write("Result:", b);
document.write("--------")

document.write("2/ Area of triangle");
let h = prompt("Height of triangle:");
let b2 = prompt("Bottom of triangle:");
document.write("Height:", h, "CM");
document.write("Bottom:", b2, "CM");
let s = (h * b2) / 2;
document.write("Area of triangle:",s,"CM SQUARE");
document.write("--------");

document.write("3/ F temperature to C");
let f = prompt("Temperature in F:");
const i = 32/1.8;
let c = (f / 1.8) - i;
document.write("in F:", f);
document.write("in C:", c);
document.write("--------");

document.write("4/ KILOMET to MET");
let km = prompt("Kilomet:");
const z = 1000;
let mt = km * z;
document.write(km,"Km =",mt,"M");

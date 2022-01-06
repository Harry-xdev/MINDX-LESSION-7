function bai1() {
    let a = prompt("Square root of:");
    let b = Math.sqrt(a);
    alert(`1/ Square root of: ${a} = ${b}`);
}

function bai2() {
    let h = prompt("Height of triangle:");
    let b2 = prompt("Base of triangle:");
    let s = (h * b2) / 2;
    alert(`2/ Area of triangle: ${s} CM SQUARE`);
}

function bai3() {
    let f = prompt("Temperature in F:")
    const i = 32/1.8
    let c = (f / 1.8) - i
    alert(`3/ ${f}\u00B0F = ${c}\u00B0C`)
}

function bai4() {
    let km = prompt("Kilomet:")
    const z = 1000
    let mt = km * z
    alert(`4/ ${km}KM = ${mt}M`)
}
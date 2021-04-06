function add(a, b) {
    return a + b
}

function sub(a, b) {
    return a - b
}

function mul(a, b) {
    return a * b
}

function div(a, b) {
    let division = a / b
    division = division.toFixed(2)
    return division
}

export { add, sub, mul, div }
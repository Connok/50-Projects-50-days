const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumbeer,
    symbol: getRandomSymbol
}


function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97) // Lowercase starts at 97
}
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65) // Uppercase A starts at 65
}
function getRandomNumbeer() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}
function palindrome (str) {
    return str.toLowerCase().replace (/ /g,"") == str.toLowerCase().replace (/ /g,"").split("").reverse().toString().replace(/,/g,"") ? true : false;
}

function wordsCount (str) {
    return str.split(" ").length;
}

function lettersCount (str) {
    return str.replace (/ /g,"").split("").length;
}

function vowelsCount (str) {
    return str.split("").length == 0 ? 0 : ["a", "e", "i", "o", "u"].includes(str.toLowerCase().split("")[0]) ? 1 + vowelsCount (str.substring(1)) : vowelsCount (str.substring(1));
}

function consonantsCount (str) {
    return str.replace(/ /g,"").length - vowelsCount(str);
}

function evaluation (str) {
    console.log("La cadena " + (palindrome(str) ? "si" : "no") + " es un palíndromo");
    console.log("La cadena tiene " + wordsCount(str) + " palabra(s)");
    console.log("La cadena tiene " + lettersCount(str) + " letra(s)");
    console.log("La cadena tiene " + vowelsCount(str) + " vocale(s)");
    console.log("La cadena tiene " + consonantsCount(str) + " consonante(s)");
    return;
}

module.exports.evaluation = evaluation;
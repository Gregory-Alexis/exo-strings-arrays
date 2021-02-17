// Methode 1
let txt = 'JS, ECMAScript, esm6 peuvent être considérés comme des alias de Javascript'

console.log('The word "Javascript" was foud at the index ' + txt.indexOf('Javascript'))



// Methode 2
let word = 'Javascript'

console.log(`The word "${word}" ${txt.includes(word) ? 'is' : 'is not'} in the sentence`);

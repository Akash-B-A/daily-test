
// challenge 1
const numbers = [1, 1, 2, 3, 5];
const newArray = numbers.map(number => number + 5);
console.log(newArray)

// challenge 2
const words = ["planes", "trains", "automobiles"];
const newwords = words.map(words => words.slice(0,-1));
console.log(newwords)


// challenge 3
const words1 = ["planes", "trains", "automobiles"];
const newwords1 = words1.map(words1 => words1[0]);
console.log(newwords1)



// challenge 4
const words2 = ["planes", "trains", "automobiles"];
const newwords2 = words2.map(words2 => words2.toUpperCase(0));
console.log(newwords2)



// challenge 5
const pets = ["goldfish", "dog", "turtle", "tiger"]
const newpet = pets.filter(pets => pets.length <6);
console.log(newpet)



// challenge 6
const pets1 = ["goldfish", "dog", "turtle", "tiger"]
const newpet1 = pets1.filter(pets1 => pets1[0]==="t");
console.log(newpet1)

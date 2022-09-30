/*
Dit stukje heb ik gejat van Winc Academy Leraar Niels.
Een leuk hebbe dingetje die er gaaf en professioneel uitziet.
Dank je wel Niels.
*/
(() => {
    console.clear();
    const currentdate = new Date();
    console.log(
        `>>> \x1b[32m💾 Bepeel Development \x1b[0m <<< ${
            currentdate.getHours() +
            ":" +
            currentdate.getMinutes() +
            ":" +
            currentdate.getSeconds()
        } ${ ">>> \x1b[32m Bepeel Development \x1b[0m <<<"}`
    );
})();//Einde hebbe dingetje van Niels.

console.log('\nOpdracht A.');
const superheroes = [
    {name: "Batman", alter_ego: "Bruce Wayne"},
    {name: "Superman", alter_ego: "Clark Kent"},
    {name: "Spiderman", alter_ego: "Peter Parker"}]

let findSpiderMan = function(findHero){
    // console.log(findHero.find(h  => h.name = 'Spiderman'));
    return findHero.find(h => h.name === 'Spiderman');
};
console.log(findSpiderMan(superheroes))
// Find Spiderman
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

console.log('\nOpdracht B.');

let doubleArrayValues = function(array){
    let element2 = array.map(element => element * 2);
    // console.log(element2);
    return element2;
};

// doubleArrayValues([1, 2, 3])
console.log(doubleArrayValues([1, 2, 3]));
// result should be [2, 4, 6]

console.log('\nOpdracht C.');
let containsNumberBiggerThan10 = function(array){

    console.log(array.some(n => n > 10));
    // return array.some(n => n > 10);
};

containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11])
// result should be true
containsNumberBiggerThan10([1,2,1,2,1,2])
// result should be false

console.log('\nOpdracht D.');
let isItalyInTheGreat7 = function(array){

    console.log(array.some(n => n === 'Italy'));
    // return array.some(n => n > 10);
};

isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States'])
// result should be true

console.log('\nOpdracht E.');
let tenfold = function(array){
    let element2 = array.forEach(n => {
        n * 10;
        console.log(n);
        // return n;
    });
    // console.log(n);
    console.log(element2)
    // return element2;
};

console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))
// result should be [10, 40, 30, 60, 90, 70, 110]
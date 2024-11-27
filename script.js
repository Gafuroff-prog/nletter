let letterSearch = ['non', 'asal', 'banan', 'olma', 'aziza', 'Gul', 'mashina'];

let withN = [];
let withoutN = [];

letterSearch.forEach(word => {
    if(word.includes('n')){
        withN.push(word);
    }
    else{
        withoutN.push(word);
    }
});


console.log('n harfi ishlatilgan sozlar', withN);
console.log('n harfi ishlatilmagan sozlar', withoutN);
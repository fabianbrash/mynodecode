const fruits = [
"Banana",
"Apples",
"Peach"
];

console.log(fruits.map((fruit) => fruit.length));


const names = [
"Alexander",
"Nicole"  

];

const nlength = names.map(function(name) {
  
  return name.length;
});

console.log(nlength);


const pets = [
"dog",
"cat",
"horse"
];


const plength = pets.map(pet => {
  
  return pet.length;
});

console.log(plength);

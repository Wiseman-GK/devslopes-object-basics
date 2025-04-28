/* 
Module Two Exercise: Object Methods
Start with exercise-2.md if you haven't read it! 
*/

//  DO NOT EDIT THE BELOW OBJECT // 

const papaJohns = {
  name: "Papa John's",
  slogan: "Better Ingredients. Better Pizza. Papa John's.",
  cuisines: ["italian", "american", "pizza"],
  pizzaToppings: {
    pepperoni: 2,
    peppers: 0.6,
    extraCheese: 1.5,
    olives: 0.5,
    bacon: 3,
    extraSauce: 1,
  },
  numberOfStars: 3.5,
  favorited: false,
  address: "555 Main Street",
  zipcode: 11234,
  acceptsReservations: false,
};

// DO NOT EDIT THE ABOVE OBJECT // 
function grabCategories(object) {
  return Object.keys(object);
}

console.log(grabCategories(papaJohns));

console.log(grabCategories(papaJohns.pizzaToppings));

function verifyValues(object, numVal) {
  return Object.values(object).length === numVal;
}

console.log(verifyValues(papaJohns, 2));
console.log(verifyValues(papaJohns, 9));

function getToppingsInfo(obj1, key) {
  return Object.entries(obj1[key]);
}
console.log(getToppingsInfo(papaJohns, 'pizzaToppings'));

papaJohns.printAd = function (topping) {
  return `Welcome to ${papaJohns.name}. We are located at ${papaJohns.address}. This week we are having a sale on ${topping} for $${papaJohns.pizzaToppings[topping]}. ${papaJohns.slogan}`;
};
console.log(papaJohns.printAd('bacon'));
// YOUR WORK GOES HERE // 

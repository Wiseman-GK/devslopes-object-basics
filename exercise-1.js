/* 
Module One Exercise: Object Syntax & Notation
Start with exercise-1.md if you haven't read it! 
*/

// YOUR WORK GOES HERE //
const goldenCorral = {
  name: "Golden Corral",
  cuisines: ['Golden Delicious Shrimp', 'Carving Station', 'Carved Bone-in Turkey', 'Signature Sirloin Steak', 'Bourbon Street Chicken', 'Awesome Pot Roast', 'Meatloaf', 'Fried Chicken', 'Fried Fish', 'Baked Fish', 'Managers Choice', 'Featured Pork Entree', 'Pot Pie or Chicken & Noodle Dumplings', 'Pizzas'],
  numberOfStars: 3.9,
  favorited: false
};

goldenCorral.address = '2082 E Florence Blvd, Casa Grande, AZ';
goldenCorral.zipcode = 85122;
goldenCorral.acceptsReservations = true;

goldenCorral.numberOfStars = 4.9;
goldenCorral.favorited = true;
goldenCorral.cuisines.push = 'Roasted Mushrooms';

function retrieveProperty(object, key) {
  if (object[key]) {
    return object[key];
  } else {
    console.log('The information you requested does not exist.');
  }
}
let value1 = retrieveProperty(goldenCorral, 'cuisines');
console.log(value1);
let value2 = retrieveProperty(goldenCorral, 'favorited');
console.log(value2);
let value3 = retrieveProperty(goldenCorral, 'name');
console.log(value3);
let value4 = retrieveProperty(goldenCorral, 'nickName');
console.log(value4);
let value5 =retrieveProperty(goldenCorral, 'state');
console.log(value5);
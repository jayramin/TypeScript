
const enum NinjaActivity {
 Espionage,
 Sabotage,
 Assassination
}
// JavaScript: But nothing is generated
// TypeScript: Except if you use it
let myFavoriteNinjaActivity = NinjaActivity.Espionage;
console.log(myFavoriteNinjaActivity); // 0
// JavaScript: Then only the number of the value is compiled into the code
// var myFavoriteNinjaActivity = 0 /* Espionage */;
// console.log(myFavoritePirateActivity); // 0
// TypeScript: The same for the other constant example
console.log(NinjaActivity["Sabotage"]); // 1 
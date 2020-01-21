// let myFavoritePet: "dog";
// myFavoritePet = "dog";
// // myFavoritePet = "somethingelse";
// console.log(myFavoritePet);
// Any other string will give an error.
// Error: Type '"Test"' is not assignable to type '"dog"'.
// myFavoritePet = "Test";

// Together with Type Aliases and Union Types you get a enum-like behavior.
type Species = "cat" | "dog" | "bird";
// function buyPet(pet: Species, name: string) { 
//     console.log(pet); 
//     console.log(name); 
// }


function buyPet(pet: "bird", name: string): Species{
    // return "called";
    console.log(pet);
    return "cat";
};
buyPet('bird', "Test");
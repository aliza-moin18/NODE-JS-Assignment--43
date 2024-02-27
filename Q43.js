// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magician = ["Teller", "Devant", "Harry Houdini", "Dynamo"];
// Adding "the Great" to each magician's name
function make_great(magicians) {
    return magician.map(function (magician) { return "" + magician + "The Great."; });
}
// Displaying eachmagician's name
function show_magicians(magician) {
    console.log(magician.join("\n"));
}
// Make a copy of the original array
var originalMagician = __spreadArray([], magician, true);
//pass a copyof the array
var GreatMagician = make_great(__spreadArray([], magician, true));
// one array of original names
show_magicians(originalMagician);
console.log("\n");
// one array with the great added to each names
show_magicians(GreatMagician);

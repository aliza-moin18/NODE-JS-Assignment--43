// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

type Magician = string

const magician: string[] = ["Teller", "Devant", "Harry Houdini", "Dynamo"]

// Adding "the Great" to each magician's name
function make_great(magicians : string[]) : string[]{
    return magician.map(magician => "" + magician + "The Great.")
}

// Displaying eachmagician's name
function show_magicians(magician : Magician[]): void{
    console.log(magician.join("\n"))
}

// Make a copy of the original array
const originalMagician : string[] = [...magician];

//pass a copyof the array
const GreatMagician : string[] = make_great ([...magician])

// one array of original names
show_magicians(originalMagician);
console.log("\n");

// one array with the great added to each names
show_magicians(GreatMagician);
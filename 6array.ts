// Defining Array
let ages: number[] = [100, 101];

let names: string[] = ["Joe", "Jill"];
let isStudent: boolean[] = [true, false];
let mixedArray: (string | number)[] = ["Joe", 100, "Jill", 101];
let mixedArray2: Array<string | number> = ["Joe", 100, "Jill", 101];

// Example
// ages.push(true); // Error: Argument of type 'true' is not assignable to parameter of type 'number'.
ages.push(100); // OK

type PersonExample = {
  name: string;
  age: number;
  isStudent: boolean;
};

let personExample1: PersonExample = {
  name: "Joe",
  age: 42,
  isStudent: true,
};

let personExample2: PersonExample = {
  name: "Jill",
  age: 66,
  isStudent: false,
};

/**
 * Challenge: create an array of people objects and
 * manually type it as an array of Person types
 */

let people: PersonExample[] = [personExample1, personExample2];

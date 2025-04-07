// Custom Type
// This file defines a custom type called Food, which is a string.
// Capitalized types are usually used for custom types, while lowercase types are used for primitive types. This is a convention in TypeScript to differentiate between built-in types and user-defined types.
type Food = string;

let favoriteFood: Food = "pizza";

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
};

//Typescript embrace consistency so customtype should be consistent with the rest of the codebase. If you use camelCase for your variables, you should also use camelCase for your custom types. This is a convention in TypeScript to make the code more readable and maintainable.
let person: Person = {
  name: "Joe",
  age: 42,
  isStudent: true,
};

let person2: Person = {
  name: "Jill",
  age: 66,
  isStudent: false,
};

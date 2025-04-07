type User3 = {
  id: number;
  username: string;
  role: "member" | "contributor" | "admin";
};

// Optional properties
// Optional properties are properties that may or may not be present in an object. In TypeScript, you can define optional properties using the question mark (?) syntax. Optional properties are useful when you want to create objects that may have some properties missing or when you want to allow for flexibility in the structure of your objects.
// Utility Type partial Type
// The Partial utility type in TypeScript is a built-in utility type that allows you to create a new type based on an existing type, where all properties of the existing type are optional. This is useful when you want to create a type that represents a subset of the properties of another type, or when you want to allow for partial updates to an object without requiring all properties to be present.
// The Partial utility type is defined as follows:
//  Partial Type Clone of the original type with all properties set to optional
type UpdatedUser = Partial<User3>;

const users3: User3[] = [
  { id: 1, username: "john_doe", role: "member" },
  { id: 2, username: "jane_smith", role: "contributor" },
  { id: 3, username: "alice_jones", role: "admin" },
  { id: 4, username: "charlie_brown", role: "member" },
];

function updateUser2(id: any, updates: UpdatedUser) {
  // Find the user in the array by the id
  // Use Object.assign to update the found user in place.
  // Check MDN if you need help with using Object.assign
  const foundUser = users3.find((user) => user.id === id);
  if (!foundUser) {
    throw new Error(`User with ID ${id} not found`);
  } else {
    Object.assign(foundUser, updates);
  }
}

// Example updates:
updateUser2(1, { username: "new_john_doe" });
updateUser2(4, { role: "contributor" });

console.log(users);

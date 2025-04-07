type User4 = {
  id: number;
  username: string;
  role: "member" | "contributor" | "admin";
};

// Make all properties optional
// The Partial utility type in TypeScript is a built-in utility type that allows you to create a new type based on an existing type, where all properties of the existing type are optional. This is useful when you want to create a type that represents a subset of the properties of another type, or when you want to allow for partial updates to an object without requiring all properties to be present.
type UpdatedUser4 = Partial<User>;

let nextUserId = 1;

const users4: User4[] = [
  { id: nextUserId++, username: "john_doe", role: "member" },
  { id: nextUserId++, username: "jane_smith", role: "contributor" },
];

function updateUser(id: number, updates: UpdatedUser) {
  const foundUser = users4.find((user) => user.id === id);
  if (!foundUser) {
    console.error("User not found!");
    return;
  }
  Object.assign(foundUser, updates);
}

// updateUser(1, { username: "new_john_doe" });
// updateUser(4, { role: "contributor" });

// Omit
// The Omit utility type in TypeScript is a built-in utility type that allows you to create a new type by omitting specific properties from an existing type. This is useful when you want to create a type that is similar to another type but without certain properties, or when you want to create a type that represents a subset of the properties of another type.
//  Omit mean remove the specified properties from the original type
function addNewUser(newUser: Omit<User4, "id">): User4 {
  const user: User4 = {
    id: nextUserId++,
    ...newUser,
  };
  return user;
}

// example usage:
addNewUser({ username: "joe_schmoe", role: "member" });

console.log(users);

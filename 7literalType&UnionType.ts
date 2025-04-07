// Literal Type
// let myName: "Bob" = "bob"; // myName = "Joe"; // Error: Type '"Joe"' is not assignable to type '"Bob"'.
const myName2: "Bob" = "Bob"; // OK

// Union Type
let myName3: "Bob" | "Joe" = "Bob"; // OK
type User = {
  username: string;
  role: "guest" | "member" | "admin";
};

type UserRole = "guest" | "member" | "admin";

let userRole: UserRole = "member";

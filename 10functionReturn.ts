type UserRole2 = "guest" | "member" | "admin";

type User2 = {
  username: string;
  role: UserRole;
};

const users: User2[] = [
  { username: "john_doe", role: "member" },
  { username: "jane_doe", role: "admin" },
  { username: "guest_user", role: "guest" },
];

// Function return explicitly typed
// returning a User2 Object
function fetchUserDetails(username: string): User2 {
  const user = users.find((user) => user.username === username);
  if (!user) {
    throw new Error(`User with username ${username} not found`);
  }
  return user;
}

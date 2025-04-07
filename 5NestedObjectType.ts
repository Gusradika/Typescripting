// Cannot redeclare block-scoped variable 'person1' caused by the same name in the same scope file folder

type Address = {
  street: string;
  city: string;
  country: string;
};
type Person2 = {
  name: string;
  age: number;
  isStudent: boolean;
  address: Address;
};

let person1: Person2 = {
  name: "Joe",
  age: 42,
  isStudent: true,
  address: {
    street: "123 Main",
    city: "Anytown",
    country: "USA",
  },
};

let person4: Person2 = {
  name: "Jill",
  age: 66,
  isStudent: false,
  address: {
    street: "123 Main",
    city: "Anytown",
    country: "USA",
  },
};

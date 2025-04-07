// type Pizza = {
//   id: number;
//   name: string;
//   price: number;
// };

// type Order = {
//   id: number;
//   pizza: Pizza;
//   status: "ordered" | "completed";
// };

// const menu: Pizza[] = [
//   { id: 1, name: "Margherita", price: 8 },
//   { id: 2, name: "Pepperoni", price: 10 },
//   { id: 3, name: "Hawaiian", price: 10 },
//   { id: 4, name: "Veggie", price: 9 },
// ];

// let cashInRegister = 100;
// let nextOrderId = 1;
// const orderQueue: Order[] = [];

// function addNewPizza(pizzaObj: Pizza) {
//   menu.push(pizzaObj);
// }

// function placeOrder(pizzaName: string) {
//   const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
//   if (!selectedPizza) {
//     console.error(`${pizzaName} does not exist in the menu`);
//     return;
//   }
//   cashInRegister += selectedPizza.price;
//   const newOrder: Order = {
//     id: nextOrderId++,
//     pizza: selectedPizza,
//     status: "ordered",
//   };
//   orderQueue.push(newOrder);
//   return newOrder;
// }

// function completeOrder(orderId: number) {
//   const order = orderQueue.find((order) => order.id === orderId);
//   if (!order) {
//     console.error(`${orderId} was not found in the orderQueue`);
//     return;
//   }
//   order.status = "completed";
//   return order;
// }

// // Type Narrowing
// // Type narrowing is a technique in TypeScript that allows you to narrow down the type of a variable based on certain conditions. This is useful when you have a variable that can be of multiple types, and you want to perform different operations based on its actual type.
// export function getPizzaDetail(identifier: string | number) {
//   if (typeof identifier === "string") {
//     return menu.find(
//       (pizza) => pizza.name.toLowerCase() === identifier.toLowerCase()
//     );
//   } else {
//     return menu.find((pizza) => pizza.id === identifier);
//   }
// }

// // Safety Example : Using typeof to check the type of a variable before performing operations on it.
// // Cara 1: Using typeof to check the type of a variable before performing operations on it.
// // export function getPizzaDetail2(identifier: string | number): Pizza {
// //   if (typeof identifier === "string") {
// //     const temp = menu.find(
// //       (pizza) => pizza.name.toLowerCase() === identifier.toLowerCase()
// //     );
// //     if (!temp) {
// //       throw new Error("Pizza not found");
// //     } else {
// //       return temp;
// //     }
// //   } else if (typeof identifier === "number") {
// //     const temp = menu.find((pizza) => pizza.id === identifier);
// //     if (!temp) {
// //       throw new Error("Pizza not found");
// //     } else {
// //       return temp;
// //     }
// //   } else {
// //     throw new TypeError("Parameter `identifier` must be either a string or");
// //   }
// // }

// // Cara 2
// export function getPizzaDetail2(
//   identifier: string | number
// ): Pizza | undefined {
//   if (typeof identifier === "string") {
//     return menu.find(
//       (pizza) => pizza.name.toLowerCase() === identifier.toLowerCase()
//     );
//   } else if (typeof identifier === "number") {
//     return menu.find((pizza) => pizza.id === identifier);
//   } else {
//     throw new TypeError(
//       "Parameter `identifier` must be either a string or a number"
//     );
//   }
// }

// // addNewPizza({ id: 5, name: "Chicken Bacon Ranch", price: 12 });
// // addNewPizza({ id: 6, name: "BBQ Chicken", price: 12 });
// // addNewPizza({ id: 7, name: "Spicy Sausage", price: 11 });

// // placeOrder("Chicken Bacon Ranch");
// // placeOrder("Pepperoni");
// // completeOrder(1);
// // placeOrder("Anchovy");
// // placeOrder("Veggie");
// // completeOrder(2);

// // console.log("Menu:", menu);
// // console.log("Cash in register:", cashInRegister);
// // console.log("Order queue:", orderQueue);

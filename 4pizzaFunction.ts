// /**
//  * Challenge: Fix the TS warnings about orderQueue!
//  */

// type Pizza = {
//   id: number;
//   name: string;
//   price: number;
// };

// type Order = {
//   id: number;
//   pizza: Pizza;
//   status: "ordered" | "completed";
//   // status: string; // This is not a good practice, as it can lead to errors and make the code less readable.
// };

// const menu: Pizza[] = [
//   { id: 1, name: "Margherita", price: 8 },
//   { id: 2, name: "Pepperoni", price: 10 },
//   { id: 3, name: "Hawaiian", price: 10 },
//   { id: 4, name: "Veggie", price: 9 },
// ];

// let cashInRegister = 100;
// let nextOrderId: number = 1;
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
//   // Error
//   // const newOrder = {
//   //   id: nextOrderId++,
//   //   pizza: selectedPizza,
//   //   status: "ordered",
//   // };
//   const newOrder: Order = {
//     id: nextOrderId++,
//     pizza: selectedPizza,
//     status: "ordered",
//   };
//   orderQueue.push(newOrder);
//   return newOrder;
// }

// function completeOrder(orderId: number) {
//   // Automatically refered to Order type because of the orderQueue type
//   const order = orderQueue.find((order) => order.id === orderId);
//   if (!order) {
//     console.error(`Order with ID ${orderId} not found`);
//     throw new Error();
//   }
//   // is Possibly undefined is because it has not been checked if the order is undefined | or not. Error Check
//   order.status = "completed";
//   return order;
// }

// addNewPizza({ id: 5, name: "Chicken Bacon Ranch", price: 12 });
// addNewPizza({ id: 6, name: "BBQ Chicken", price: 12 });
// addNewPizza({ id: 7, name: "Spicy Sausage", price: 11 });

// placeOrder("Chicken Bacon Ranch");
// completeOrder(1);

// console.log("Menu:", menu);
// console.log("Cash in register:", cashInRegister);
// console.log("Order queue:", orderQueue);

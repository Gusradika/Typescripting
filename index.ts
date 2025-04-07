const menu = [
  { name: "Margherita", price: 8 },
  { name: "Normal", price: 7 },
  { name: "Medium", price: 10 },
  { name: "Veggie", price: 9 },
];

let cashInRegister = 100;

let orderQueue = [];
let nextOrderId = 1;

function addNewPizza(pizzaObj) {
  menu.push(pizzaObj);
}

function placeOrder(pizzaName) {
  const pizza = menu.find((pizza) => pizza.name === pizzaName);
  if (pizza) {
    let data = {
      id: nextOrderId++,
      name: pizza.name,
      status: "ordered",
    };
    orderQueue.push(data);
    cashInRegister += pizza.price;
    console.log(`Order placed for ${pizzaName}.`);
  } else {
    console.log(`Sorry, we don't have ${pizzaName} on the menu.`);
  }
}

function completeOrder(id) {
  const order = orderQueue.find((order) => order.id === id);
  if (order) {
    order.status = "completed";
    console.log(`Order ${id} completed.`);
  } else {
    console.log(`Order ${id} not found.`);
  }
}

addNewPizza({ name: "Hawaiian", price: 12 });
addNewPizza({ name: "BBQ Chicken", price: 11 });
addNewPizza({ name: "Pepperoni", price: 10 });

placeOrder("Margherita");
completeOrder(1);

console.log("Current menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);

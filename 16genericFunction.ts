type Pizza = {
  id: number;
  name: string;
  price: number;
};

type Order = {
  id: number;
  pizza: Pizza;
  status: "ordered" | "completed";
};

let cashInRegister = 100;
let nextOrderId = 1;
let nextPizzaId = 1;

const menu: Pizza[] = [
  { id: nextPizzaId++, name: "Margherita", price: 8 },
  { id: nextPizzaId++, name: "Pepperoni", price: 10 },
  { id: nextPizzaId++, name: "Hawaiian", price: 10 },
  { id: nextPizzaId++, name: "Veggie", price: 9 },
];

const orderQueue: Order[] = [];

function addNewPizza(pizzaObj: Pizza): Pizza {
  menu.push(pizzaObj);
  return pizzaObj;
}

function placeOrder(pizza: Pizza): Order | undefined {
  const newOrder: Order = {
    id: nextOrderId++,
    pizza: pizza,
    status: "ordered",
  };
  orderQueue.push(newOrder);
  cashInRegister += pizza.price;
  return newOrder;
}

/**
 * Challenge: add types our generic `addToArray` function. It should work
 * for adding new pizzas to the `menu` and adding new orders to the `orderQueue`
 */

// this function is generic and can be used for any type of array
// and any type of item. The type parameter T represents the type of the items in the array.
// mewakili semua array yang kita gunakan
// and the item that we want to add to the array.
function addToArray<T>(array: T[], item: T): T[] {
  array.push(item);
  return array;
}

// example usage:
addToArray<Pizza>(menu, {
  id: nextPizzaId++,
  name: "Chicken Bacon Ranch",
  price: 12,
});
addToArray<Order>(orderQueue, {
  id: nextOrderId++,
  pizza: menu[2],
  status: "completed",
});

function completeOrder(orderId: number): Order | undefined {
  const order = orderQueue.find((order) => order.id === orderId);
  if (!order) {
    console.error(`${orderId} was not found in the orderQueue`);
    return;
  }
  order.status = "completed";
  return order;
}

export function getPizzaDetail(identifier: string | number): Pizza | undefined {
  if (typeof identifier === "string") {
    return menu.find(
      (pizza) => pizza.name.toLowerCase() === identifier.toLowerCase()
    );
  } else if (typeof identifier === "number") {
    return menu.find((pizza) => pizza.id === identifier);
  } else {
    throw new TypeError(
      "Parameter `identifier` must be either a string or a number"
    );
  }
}

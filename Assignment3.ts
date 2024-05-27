let inventory = [] as { name:string, model:string, cost:number,quantity: number}[]

const product1 = {
    name: "Laptop",
    model: "XPS 13",
    cost: 999.99,
    quantity: 10
  };
  
  const product2 = {
    name: "Smartphone",
    model: "Galaxy S21",
    cost: 799.99,
    quantity: 25
  };
  
  const product3 = {
    name: "Tablet",
    model: "iPad Air",
    cost: 599.99,
    quantity: 15
  };
  inventory.push(product1);
  inventory.push(product2);
  inventory.push(product3);
  
  console.log("\n ******* Here is inventory info ******* \n " , inventory);
  let product4 = { name: "Smartwatch",
  model: "Apple Watch",
  cost: 399.99,
  quantity: 20 };
  inventory.push(product4);
  
  console.log("\n ******* The Updated inventory info ******* \n ", inventory);

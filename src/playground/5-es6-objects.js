const name = "Adam";
const userAge = "25";

// const user = {
//   name: name,
//   age: userAge,
//   location: "Philly",
// };

const user = {
  name, // property Short hand feature
  age: userAge,
  location: "Philly",
};

console.log(user);

// Object Destructuring
const product = {
  label: "Lays",
  price: 10,
  stock: 100,
  salePrice: undefined,
};

console.log(product);

// const label = product.label;
// const price = product.price;

const { label: productLabel, price, salePrice = 15, rating } = product;
console.log(productLabel, price, salePrice, rating);

const transaction = (type, { label, stock = 5 } = {}) =>
  console.log(type, label, stock);

transaction("Order");
transaction("Order", product);

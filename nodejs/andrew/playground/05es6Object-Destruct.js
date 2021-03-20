const name = "andrew";
const userAge = 27;

const user = {
  name,
  age: userAge,
  location: "philadelphia",
};

console.log("user: ", user);

// object desturing
const product = {
  label: "red notebook",
  price: 3,
  stock: 201,
  salePrice: undefined,
};

/* before using desturing
const label = product.label;
const stock = product.stock;
*/

const { stock, label: productLabel } = product;
console.log(productLabel);
console.log(stock);

const transaction = (type, { stock, label }) => {
  console.log("stock: ", stock);
  console.log("label: ", label);
};

transaction("order", product);

const greeter = (name = "bunny", age) => {
  console.log("hello, " + name);
};

greeter("and");
greeter();

const transaction = (type, { stock = 0, label = "truck" } = {}) => {
  console.log("stock: ", stock);
  console.log("label: ", label);
};

transaction("order");

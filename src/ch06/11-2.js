import { readJSON } from "../util/fileController.js";

console.log("argv", process.argv);

class Order {
  product = {};
  constructor(product) {
    this.product = product;
  }
}

const countOrders = (args, filename) => {
  const input = readJSON(filename);
  const orders = input.map((item) => new Order(item));

  if (args.includes("-r")) {
    const readyOrders = orders.filter((o) => o.product.status === "ready");
    return { flag: "ready", length: readyOrders.length };
  } else {
    return { flag: "not ready", length: orders.length };
  }
};

const run = (args) => {
  try {
    if (args.length === 0) throw new Error("파일명을 입력하세요");
    const filename = args[args.length - 1];
    return countOrders(args, filename);
  } catch (err) {
    console.error(err);
  }
};

const main = (args) => {
  try {
    console.log(run(args));
  } catch (err) {
    console.error(err);
  }
};

main(process.argv.slice(2));

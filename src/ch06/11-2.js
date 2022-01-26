import { readJSON } from "../util/fileController.js";

console.log("argv", process.argv);

class Order {
  product = {};
  constructor(product) {
    this.product = product;
  }
}

class CommandLine {
  constructor(args) {
    this.filename = args[args.length - 1];
    this.onlyCountReady = args.includes("-r");
  }
}

const countOrders = (commandLine) => {
  const input = readJSON(commandLine.filename);
  const orders = input.map((item) => new Order(item));

  if (commandLine.onlyCountReady) {
    const readyOrders = orders.filter((o) => o.product.status === "ready");
    return { flag: "ready", length: readyOrders.length };
  } else {
    return { flag: "not ready", length: orders.length };
  }
};

const run = (args) => {
  try {
    if (args.length === 0) throw new Error("파일명을 입력하세요");
    const commandLine = new CommandLine(args);
    return countOrders(commandLine);
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

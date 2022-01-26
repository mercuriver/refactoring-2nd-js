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
    if (args.length === 0) throw new Error("파일명을 입력하세요");

    this.filename = args[args.length - 1];
    this.onlyCountReady = args.includes("-r");
  }
}

const countOrders = (commandLine) => {
  const input = readJSON(commandLine.filename);
  const orders = input.map((item) => new Order(item));

  return commandLine.onlyCountReady
    ? {
        flag: "ready",
        length: orders.filter((o) => o.product.status === "ready").length,
      }
    : { flag: "not ready", length: orders.length };
};

const main = (args) => {
  try {
    console.log(countOrders(new CommandLine(args)));
  } catch (err) {
    console.error(err);
  }
};

main(process.argv.slice(2));

import { readJSON } from "../util/fileController.js";
import statement from "./statement.js";

const invoices = readJSON("src/ch01/invoices.json");
const plays = readJSON("src/ch01/plays.json");

invoices.forEach((invoice) => {
  console.log(statement(invoice, plays));
});

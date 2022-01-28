
class Order {
  constructor(data) {
    this._priority = data.priority;
  }
  get priority() {
    return this._priority;
  }
  set priority(aString) {
    this._priority = aString;
  }
}

const orders = [
  { priority: "high" },
  { priority: "rush" },
  { priority: "low" },
  { priority: "normal" },
].map((o) => new Order(o));

const highPriorityCount = orders.filter(
  (o) => o.priority === "high" || o.priority === "rush"
).length;

console.log(highPriorityCount);

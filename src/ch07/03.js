class Priority {
  constructor(value) {
    this._value = value;
  }
  toString() {
    return this._value;
  }
}

class Order {
  constructor(data) {
    this._priority = new Priority(data.priority);
  }
  get priorityString() {
    return this._priority.toString();
  }
  set priority(aString) {
    this._priority = new Priority(aString);
  }
}

const orders = [
  { priority: "high" },
  { priority: "rush" },
  { priority: "low" },
  { priority: "normal" },
].map((o) => new Order(o));

const highPriorityCount = orders.filter(
  (o) => o.priorityString === "high" || o.priorityString === "rush"
).length;

console.log(highPriorityCount);

class Priority {
  constructor(value) {
    if (value instanceof Priority) return value;
    if (Priority.legalValues().includes(value)) {
      this._value = value;
    } else {
      throw new Error(`${value} is invalid for Priority`);
    }
  }
  toString() {
    return this._value;
  }
  get _index() {
    return Priority.legalValues().findIndex((s) => s === this._value);
  }
  static legalValues() {
    return ["low", "normal", "high", "rush"];
  }
  equals(other) {
    return this._index === other._index;
  }
  higherThen(other) {
    return this._index > other._index;
  }
  lessThen(other) {
    return this._index < other._index;
  }
}

class Order {
  constructor(data) {
    this._priority = new Priority(data.priority);
  }
  get priority() {
    return this._priority;
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

const highPriorityCount = orders.filter((o) =>
  o.priority.higherThen(new Priority("normal"))
).length;

console.log(highPriorityCount);

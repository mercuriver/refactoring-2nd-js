const Resource = (() => {
  let id = 0;
  return class Resource {
    constructor() {
      id += 1;
      this.id = id;
    }
    static create() {
      return new Resource();
    }
  };
})();

class ResourcePool {
  available = [];
  allocated = new Set();
  get() {
    let result;
    try {
      result = this.available.pop();
      if (!result) throw Error("no available resource");
      this.allocated.add(result);
    } catch (e) {
      result = Resource.create();
      this.allocated.add(result);
    }
    return result;
  }
  add() {
    this.available.push(Resource.create());
  }
}

const COURSES = {
  korean: { basic: "korean", advanced: "korean advanced" },
  english: { basic: "english", advanced: "english advanced" },
  mathematics: { basic: "mathematics", advanced: "mathematics advanced" },
};

class Person {
  _name = "";
  _courses = [];
  constructor(name) {
    this._name = name;
  }
  get name() {
    return [...this._name];
  }
  get courses() {
    return [...this._courses];
  }
  addCourse(aCourse) {
    this._courses.push(aCourse);
  }
  removeCourse(
    aCourse,
    fnIfAbsent = () => {
      throw new RangeError();
    }
  ) {
    const index = this._courses.includes(aCourse);
    if (index === -1) fnIfAbsent();
    else this._courses.splice(index, 1);
  }
}

class Course {
  _name = "";
  _isAdvanced = false;
  constructor(name, isAdvanced) {
    this._name = name;
    this._isAdvanced = isAdvanced;
  }
  get name() {
    return this._name;
  }
  get isAdvanced() {
    return this._isAdvanced;
  }
}
const readBasicCourseNames = (filename) =>
  Object.values(filename).map((c) => c.basic);

const aPerson = new Person("파울러");

for (const name of readBasicCourseNames(COURSES)) {
  aPerson.addCourse(new Course(name, false));
}

// const basicCourseNames = readBasicCourseNames(COURSES);
// aPerson.courses = basicCourseNames.map((name) => new Course(name, false));

console.log(aPerson);

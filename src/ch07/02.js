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
    return this._name;
  }
  get courses() {
    return this._courses;
  }
  set courses(aList) {
    this._courses = aList;
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
const numAdvancedCourses = aPerson.courses.filter((c) => c.isAdvanced).length;
const basicCourseNames = readBasicCourseNames(COURSES);

for (const name of readBasicCourseNames(COURSES)) {
  aPerson.courses.push(new Course(name, false));
}

console.log(aPerson);

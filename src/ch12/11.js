import dayjs from "dayjs";

class CatalogItem {
  constructor(id, title, tags) {
    this._id = id;
    this._title = title;
    this._tags = tags;
  }
  get id() {
    return this._id;
  }
  get title() {
    return this._title;
  }
  hasTag(arg) {
    return this._tags.includes(arg);
  }
}

class Scroll {
  constructor(id, title, tags, dataLastCleaned, catalogID, catalog) {
    this._id = id;
    // this._catalogItem = new CatalogItem(id, title, tags);
    console.log(catalog);
    this._catalogItem = catalog.get(catalogID);
    this._lastCleaned = dataLastCleaned;
  }
  needsCleaning(targetDate) {
    const threshold = this.hasTag("revered") ? 700 : 1500;
    return this.daysSinceLastCleaning(targetDate) > threshold;
  }
  daysSinceLastCleaning(targetDate) {
    return targetDate.diff(this._lastCleaned, "d");
  }
  get id() {
    return this._id;
  }
  get title() {
    return this._catalogItem.title;
  }
  hasTag(arg) {
    return this._catalogItem.hasTag(arg);
  }
}

const catalog = new Map([
  [
    "icespear",
    new CatalogItem("icespear", "아이스스피어", ["magic", "revered"]),
  ],
  ["fireball", new CatalogItem("fireball", "파이어볼", ["magic"])],
  ["meteor", new CatalogItem("meteor", "메테오", ["magic", "revered"])],
]);

const data = [
  {
    id: "A001",
    catalogData: catalog.get("icespear"),
    lastCleaned: "2018-11-01",
  },
  {
    id: "B002",
    catalogData: catalog.get("fireball"),
    lastCleaned: "2018-09-01",
  },
  {
    id: "C003",
    catalogData: catalog.get("meteor"),
    lastCleaned: "2020-02-01",
  },
];

const scrolls = data.map(
  (record) =>
    new Scroll(
      record.id,
      record.catalogData.title,
      record.catalogData.tags,
      dayjs(record.lastCleaned),
      record.catalogData.id,
      catalog
    )
);

scrolls.forEach((scroll) => {
  console.log({
    id: scroll.id,
    title: scroll.title,
    needsCleaning: scroll.needsCleaning(dayjs()),
    daysSinceLastCleaning: scroll.daysSinceLastCleaning(dayjs()),
    hasRevered: scroll.hasTag("revered"),
  });
});

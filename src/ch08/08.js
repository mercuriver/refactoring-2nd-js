const csvData = `office, country, telephone
Chicago, USA, +1 312 373 1000
Beijing, China, +86 4008 900 505
Banalore, India, +91 80 4064 9570
Porto Alegre, Brazil, +55 51 3079 3550
Chennai, India, +91 44 660 44766`;

const acquireData = (input) => {
  const lines = input.split("\n");
  const result = [];

  const loopItems = lines
    .slice(1)
    .filter((line) => line.trim() !== "")
    .map((line) => line.split(","));

  for (const record of loopItems) {
    if (record[1].trim() === "India") {
      result.push({ city: record[0].trim(), phone: record[2].trim() });
    }
  }
  return result;
};

console.log(acquireData(csvData));

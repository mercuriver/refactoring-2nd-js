const calculateAscent = () => {
  for (let i = 1; i < points.length; i++) {
    const verticalChange = points[i].elevation - points[i - 1].elevation;
    totalAscent += verticalChange > 0 ? verticalChange : 0;
  }
  return totalAscent;
};
const calculateTime = () => {};
const calculateDistance = () => {};

let points = [{ elevation: 1 }, { elevation: 4 }, { elevation: 9 }];
let totalAscent = 0;
let totalTime = 0;
let totalDistance = 0;

totalAscent = calculateAscent();
calculateTime();
calculateDistance();

const pace = totalTime / 60 / totalDistance;

console.log(totalAscent, pace);

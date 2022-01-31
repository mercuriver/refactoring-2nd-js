const calculateAscent = () => {
  let result = 0;
  for (let i = 1; i < points.length; i++) {
    const verticalChange = points[i].elevation - points[i - 1].elevation;
    result += verticalChange > 0 ? verticalChange : 0;
  }
  return result;
};
const calculateTime = () => 1;
const calculateDistance = () => 1;

const points = [{ elevation: 1 }, { elevation: 4 }, { elevation: 9 }];
const totalAscent = calculateAscent();
const totalTime = calculateTime();
const totalDistance = calculateDistance();

const pace = totalTime / 60 / totalDistance;

console.log(totalAscent, pace);

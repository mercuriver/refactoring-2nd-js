const distance = (p1, p2) => Math.abs(p1 - p2); // 거리 도출 공식, 서적에 명시된 하버사인 공식(haversine formula)과 다름
const totalDistance = (points) => {
  let result = 0;
  for (let i = 1; i < points.length; i++) {
    result += distance(points[i - 1], points[i]);
  }
  return result;
};

const trackSummary = (points) => {
  const calculateTime = () => 10000;

  return {
    time: calculateTime(),
    distance: totalDistance(points),
    pace: calculateTime() / 60 / totalDistance(points),
  };
};

console.log(trackSummary([30, 250, 150, 550, 660]));

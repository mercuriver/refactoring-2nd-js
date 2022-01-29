const distance = (p1, p2) => Math.abs(p1 - p2);

const top_calculateDistance = (points) => {
  let result = 0;
  for (let i = 1; i < points.length; i++) {
    result += distance(points[i - 1], points[i]);
  }
  return result;
};

const trackSummary = (points) => {
  const calculateTime = () => 10000;

  const totalTime = calculateTime();
  const totalDistance = top_calculateDistance(points);
  const pace = totalTime / 60 / totalDistance;

  return {
    time: totalTime,
    distance: totalDistance,
    pace,
  };
};

console.log(trackSummary([30, 250, 150, 550, 660]));

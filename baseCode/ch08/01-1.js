const trackSummary = (points) => {
  const calculateTime = () => 10000;
  const distance = (p1, p2) => Math.abs(p1 - p2); // 거리 도출 공식, 서적에 명시된 하버사인 공식(haversine formula)과 다름

  const calculateDistance = () => {
    let result = 0;
    for (let i = 1; i < points.length; i++) {
      result += distance(points[i - 1], points[i]);
    }
    return result;
  };

  const totalTime = calculateTime();
  const totalDistance = calculateDistance();
  const pace = totalTime / 60 / totalDistance;

  return {
    time: totalTime,
    distance: totalDistance,
    pace,
  };
};

const scenario = {
  primaryForce: 100,
  secondaryForce: 10,
  mass: 10,
  delay: 40,
};

const distance = (acc, time) => 0.5 * acc * time ** 2;
const getAcceleration = (mass) => (force) => force / mass;

const distanceTravelled = (scenario, time) => {
  const { primaryForce, secondaryForce, mass, delay } = scenario;
  const acceleration = getAcceleration(mass);

  const primaryAcceleration = acceleration(primaryForce);
  const primaryResult = distance(primaryAcceleration, Math.min(time, delay));

  const secondaryTime = time - delay;
  if (secondaryTime <= 0) {
    return primaryResult;
  }

  const primaryVelocity = primaryAcceleration * delay;
  const secondaryResult = distance(
    acceleration(primaryForce + secondaryForce),
    secondaryTime
  );
  return primaryResult + secondaryResult + primaryVelocity * secondaryTime;
};

console.log(distanceTravelled(scenario, 100));

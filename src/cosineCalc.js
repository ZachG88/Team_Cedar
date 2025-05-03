const dotProduct = (vecA, vecB) => vecA.reduce((sum, a, i) => sum + a * vecB[i], 0);

const magnitude = (vec) => Math.sqrt(vec.reduce((sum, val) => sum + val * val, 0));

export const cosineCalc = (vecA, vecB) => {
  const magA = magnitude(vecA);
  const magB = magnitude(vecB);
  return magA && magB ? dotProduct(vecA, vecB) / (magA * magB) : 0;
};

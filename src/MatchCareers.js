import careerVectors from "./careerVectors";
import careers from "./CareersEx_2";

const dotProduct = (vecA, vecB) => vecA.reduce((sum, a, i) => sum + a * vecB[i], 0);

const magnitude = (vec) => Math.sqrt(vec.reduce((sum, val) => sum + val * val, 0));

const cosineCalc = (vecA, vecB) => {
  const magA = magnitude(vecA);
  const magB = magnitude(vecB);
  return magA && magB ? dotProduct(vecA, vecB) / (magA * magB) : 0;
};


// export const findBestCareers = (userVector) => {
//   // Compute similarity for all careers
//   const scores = Object.entries(careerVectors).map(([career, vector]) => ({
//     career,
//     score: cosineCalc(userVector, vector),
//   }));

//   // Sort careers by similarity score (descending order)
//   return scores.sort((a, b) => b.score - a.score).slice(0, 3);
// };

export const findBestCareers = (userVector) => {
  // Compute similarity for all careers
  const scores = careers.map((career) => ({
    ...career, // Spread the entire career object
    score: cosineCalc(userVector, career.vector),
  }));

  // Sort careers by similarity score (descending order)
  return scores.sort((a, b) => b.score - a.score).slice(0, 3); // Get the top 3 careers
};

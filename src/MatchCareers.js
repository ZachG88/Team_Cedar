import careerVectors from "./careerVectors";
import { cosineCalc } from "./cosineCalc";

export const findBestCareers = (userVector) => {
  // Compute similarity for all careers
  const scores = Object.entries(careerVectors).map(([career, vector]) => ({
    career,
    score: cosineCalc(userVector, vector),
  }));

  // Sort careers by similarity score (descending order)
  return scores.sort((a, b) => b.score - a.score).slice(0, 3);
};

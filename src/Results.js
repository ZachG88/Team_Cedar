import { useState } from "react";
import { findBestCareers } from "./MatchCareers";

const Results = ({ userVector }) => {
  const [matches, setMatches] = useState([]);

  const handleFindMatches = () => {
    setMatches(findBestCareers(userVector));
  };

  return (
    <div>
      <button onClick={handleFindMatches}>Find My Career Matches</button>
      {matches.length > 0 && (
        <ul>
          {matches.map(({ career, score }) => (
            <li key={career}>{career} (Match: {Math.round(score * 100)}%)</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Results;

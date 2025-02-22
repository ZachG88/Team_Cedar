import { useState } from "react";
import { findBestCareers } from "./MatchCareers";

const Survey = () => {
    const [userVector, setUserVector] = useState([0, 0, 0, 0, 0]); // Initial probability vector
  
    // Function to update user vector based on answer
    const handleAnswer = (adjustments) => {
      setUserVector(prevVector =>
        prevVector.map((val, index) => val + (adjustments[index] || 0))
      );
    };
  
    const [matches, setMatches] = useState([]);
  
    const handleFindMatches = () => {
      setMatches(findBestCareers(userVector));
    };
  
    // Example questions
    return (
      <div>
        <div>
            <h2>Which of these tasks do you like most?</h2>
            <button onClick={() => handleAnswer([0.3, 0, 0, 0, 0])}>Working with water and fish</button>
            <button onClick={() => handleAnswer([0, 0.3, 0, 0, 0])}>Working with animals and nature</button>
            <button onClick={() => handleAnswer([0, 0, 0.3, 0, 0])}>Working with rules and laws</button>
            <button onClick={() => handleAnswer([0, 0, 0, 0.3, 0])}>Protecting cultural traditions</button>
            <button onClick={() => handleAnswer([0, 0, 0, 0, 0.3])}>Using technology to help the environment</button>
        </div>

        <div>
            <h2>Do you like working in the field (outside) or doing research (at a desk)?</h2>
            <button onClick={() => handleAnswer([0.2, 0.2, 0, 0.2, 0])}>I like working outside</button>
            <button onClick={() => handleAnswer([0, 0, 0.3, 0, 0.3])}>I like doing research at a desk</button>
        </div>

        <div>
            <h2>How much do you care about protecting nature and animals?</h2>
            <button onClick={() => handleAnswer([0.4, 0.4, 0, 0, 0])}>A lot</button>
            <button onClick={() => handleAnswer([0.2, 0.2, 0, 0, 0])}>A little</button>
            <button onClick={() => handleAnswer([0, 0, 0, 0, 0])}>Not much</button>
        </div>

        <div>
            <h2>Which of these interests you most?</h2>
            <button onClick={() => handleAnswer([0, 0, 0.4, 0, 0])}>Working with laws and government</button>
            <button onClick={() => handleAnswer([0, 0, 0, 0.3, 0])}>Protecting cultural traditions</button>
            <button onClick={() => handleAnswer([0, 0.3, 0, 0, 0])}>Learning about nature and the environment</button>
            <button onClick={() => handleAnswer([0, 0, 0.3, 0.3, 0])}>Standing up for Indigenous rights</button>
        </div>

        <div>
            <h2>How do you feel about using technology to help protect the environment?</h2>
            <button onClick={() => handleAnswer([0, 0, 0, 0, 0.4])}>I’m very comfortable with technology</button>
            <button onClick={() => handleAnswer([0, 0, 0, 0, 0.2])}>I’m somewhat comfortable with technology</button>
            <button onClick={() => handleAnswer([0, 0, 0, 0, 0])}>I don’t like using technology</button>
        </div>

        <div>
            <h2>What type of work do you prefer?</h2>
            <button onClick={() => handleAnswer([0, 0, 0.3, 0, 0])}>Making laws and policies</button>
            <button onClick={() => handleAnswer([0, 0, 0.3, 0, 0])}>Enforcing rules and laws</button>
            <button onClick={() => handleAnswer([0, 0.2, 0, 0.3, 0])}>Teaching people or helping the community</button>
        </div>

        <div>
            <h2>How interested are you in working on policies, laws, and regulations related to the environment?</h2>
            <button onClick={() => handleAnswer([0, 0, 0.4, 0, 0])}>Very interested in creating policies and laws</button>
            <button onClick={() => handleAnswer([0, 0, 0.2, 0, 0])}>Somewhat interested in helping with policies and laws</button>
            <button onClick={() => handleAnswer([0, 0, 0, 0, 0])}>Not interested in working on policies or laws</button>
        </div>

        <div>
            <h2>How do you feel about working with new technology to solve environmental problems (e.g., analyzing data or developing solutions)?</h2>
            <button onClick={() => handleAnswer([0, 0, 0, 0, 0.4])}>Very excited to use new technology for environmental solutions</button>
            <button onClick={() => handleAnswer([0, 0, 0, 0, 0.2])}>Somewhat interested in using technology for environmental work</button>
            <button onClick={() => handleAnswer([0, 0, 0, 0, 0])}>Not interested in using technology</button>
        </div>

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
  
  export default Survey;
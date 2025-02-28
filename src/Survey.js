//import { useState } from "react";
import { findBestCareers } from "./MatchCareers";

// const Survey = () => {
//     const [userVector, setUserVector] = useState([0, 0, 0, 0, 0]); // Initial probability vector
  
//     // Function to update user vector based on answer
//     const handleAnswer = (adjustments) => {
//       setUserVector(prevVector =>
//         prevVector.map((val, index) => val + (adjustments[index] || 0))
//       );
//     };
  
//     const [matches, setMatches] = useState([]);
  
//     const handleFindMatches = () => {
//       setMatches(findBestCareers(userVector));
//     };
  
//     // Example questions
//     return (
//       <div>
//         <div>
//             <h2>Which of these tasks do you like most?</h2>
//             <button onClick={() => handleAnswer([0.3, 0, 0, 0, 0])}>Working with water and fish</button>
//             <button onClick={() => handleAnswer([0, 0.3, 0, 0, 0])}>Working with animals and nature</button>
//             <button onClick={() => handleAnswer([0, 0, 0.3, 0, 0])}>Working with rules and laws</button>
//             <button onClick={() => handleAnswer([0, 0, 0, 0.3, 0])}>Protecting cultural traditions</button>
//             <button onClick={() => handleAnswer([0, 0, 0, 0, 0.3])}>Using technology to help the environment</button>
//         </div>

//         <div>
//             <h2>Do you like working in the field (outside) or doing research (at a desk)?</h2>
//             <button onClick={() => handleAnswer([0.2, 0.2, 0, 0.2, 0])}>I like working outside</button>
//             <button onClick={() => handleAnswer([0, 0, 0.3, 0, 0.3])}>I like doing research at a desk</button>
//         </div>

//         <div>
//             <h2>How much do you care about protecting nature and animals?</h2>
//             <button onClick={() => handleAnswer([0.4, 0.4, 0, 0, 0])}>A lot</button>
//             <button onClick={() => handleAnswer([0.2, 0.2, 0, 0, 0])}>A little</button>
//             <button onClick={() => handleAnswer([0, 0, 0, 0, 0])}>Not much</button>
//         </div>

//         <div>
//             <h2>Which of these interests you most?</h2>
//             <button onClick={() => handleAnswer([0, 0, 0.4, 0, 0])}>Working with laws and government</button>
//             <button onClick={() => handleAnswer([0, 0, 0, 0.3, 0])}>Protecting cultural traditions</button>
//             <button onClick={() => handleAnswer([0, 0.3, 0, 0, 0])}>Learning about nature and the environment</button>
//             <button onClick={() => handleAnswer([0, 0, 0.3, 0.3, 0])}>Standing up for Indigenous rights</button>
//         </div>

//         <div>
//             <h2>How do you feel about using technology to help protect the environment?</h2>
//             <button onClick={() => handleAnswer([0, 0, 0, 0, 0.4])}>I’m very comfortable with technology</button>
//             <button onClick={() => handleAnswer([0, 0, 0, 0, 0.2])}>I’m somewhat comfortable with technology</button>
//             <button onClick={() => handleAnswer([0, 0, 0, 0, 0])}>I don’t like using technology</button>
//         </div>

//         <div>
//             <h2>What type of work do you prefer?</h2>
//             <button onClick={() => handleAnswer([0, 0, 0.3, 0, 0])}>Making laws and policies</button>
//             <button onClick={() => handleAnswer([0, 0, 0.3, 0, 0])}>Enforcing rules and laws</button>
//             <button onClick={() => handleAnswer([0, 0.2, 0, 0.3, 0])}>Teaching people or helping the community</button>
//         </div>

//         <div>
//             <h2>How interested are you in working on policies, laws, and regulations related to the environment?</h2>
//             <button onClick={() => handleAnswer([0, 0, 0.4, 0, 0])}>Very interested in creating policies and laws</button>
//             <button onClick={() => handleAnswer([0, 0, 0.2, 0, 0])}>Somewhat interested in helping with policies and laws</button>
//             <button onClick={() => handleAnswer([0, 0, 0, 0, 0])}>Not interested in working on policies or laws</button>
//         </div>

//         <div>
//             <h2>How do you feel about working with new technology to solve environmental problems (e.g., analyzing data or developing solutions)?</h2>
//             <button onClick={() => handleAnswer([0, 0, 0, 0, 0.4])}>Very excited to use new technology for environmental solutions</button>
//             <button onClick={() => handleAnswer([0, 0, 0, 0, 0.2])}>Somewhat interested in using technology for environmental work</button>
//             <button onClick={() => handleAnswer([0, 0, 0, 0, 0])}>Not interested in using technology</button>
//         </div>

//         <button onClick={handleFindMatches}>Find My Career Matches</button>
//         {matches.length > 0 && (
//           <ul>
//             {matches.map(({ career, score }) => (
//               <li key={career}>{career} (Match: {Math.round(score * 100)}%)</li>
//             ))}
//           </ul>
//         )}
//       </div>
//     );
//   };

import { useState } from "react";

const Survey = () => {

    const [userVector, setUserVector] = useState([0, 0, 0, 0, 0]); // Initial probability vector
  
    // Function to update user vector based on answer
    const handleAnswer = (adjustments, questionIndex, optionIndex) => {
        setUserVector(prevVector =>
            prevVector.map((val, i) => val + (adjustments[i] || 0))
        );
        setSelectedOptions(prev => ({
            ...prev,
            [questionIndex]: optionIndex, // Track which option was selected
        }));
    };
  
    const [matches, setMatches] = useState([]);
  
    const handleFindMatches = () => {
      setMatches(findBestCareers(userVector));
    };

    const [selectedOptions, setSelectedOptions] = useState({});


    const questions = [
        {
            question: "Which of these tasks do you like most?",
            options: [
                { text: "Working with water and fish", vector: [0.3, 0, 0, 0, 0] },
                { text: "Working with animals and nature", vector: [0, 0.3, 0, 0, 0] },
                { text: "Working with rules and laws", vector: [0, 0, 0.3, 0, 0] },
                { text: "Protecting cultural traditions", vector: [0, 0, 0, 0.3, 0] },
                { text: "Using technology to help the environment", vector: [0, 0, 0, 0, 0.3] }
            ]
        },
        {
            question: "Do you like working in the field (outside) or doing research (at a desk)?",
            options: [
                { text: "I like working outside", vector: [0.2, 0.2, 0, 0.2, 0] },
                { text: "I like doing research at a desk", vector: [0, 0, 0.3, 0, 0.3] }
            ]
        },
        {
            question: "How much do you care about protecting nature and animals?",
            options: [
                { text: "A lot", vector: [0.4, 0.4, 0, 0, 0] },
                { text: "A little", vector: [0.2, 0.2, 0, 0, 0] },
                { text: "Not much", vector: [0, 0, 0, 0, 0] }
            ]
        },
        {
            question: "Which of these interests you most?",
            options: [
                { text: "Working with laws and government", vector: [0, 0, 0.4, 0, 0] },
                { text: "Protecting cultural traditions", vector: [0, 0, 0, 0.3, 0] },
                { text: "Learning about nature and the environment", vector: [0, 0.3, 0, 0, 0] },
                { text: "Standing up for Indigenous rights", vector: [0, 0, 0.3, 0.3, 0] }
            ]
        },
        {
            question: "How do you feel about using technology to help protect the environment?",
            options: [
                { text: "I’m very comfortable with technology", vector: [0, 0, 0, 0, 0.4] },
                { text: "I’m somewhat comfortable with technology", vector: [0, 0, 0, 0, 0.2] },
                { text: "I don’t like using technology", vector: [0, 0, 0, 0, 0] }
            ]
        },
        {
            question: "What type of work do you prefer?",
            options: [
                { text: "Making laws and policies", vector: [0, 0, 0.3, 0, 0] },
                { text: "Enforcing rules and laws", vector: [0, 0, 0.3, 0, 0] },
                { text: "Teaching people or helping the community", vector: [0, 0.2, 0, 0.3, 0] }
            ]
        },
        {
            question: "How interested are you in working on policies, laws, and regulations related to the environment?",
            options: [
                { text: "Very interested in creating policies and laws", vector: [0, 0, 0.4, 0, 0] },
                { text: "Somewhat interested in helping with policies and laws", vector: [0, 0, 0.2, 0, 0] },
                { text: "Not interested in working on policies or laws", vector: [0, 0, 0, 0, 0] }
            ]
        },
        {
            question: "How do you feel about working with new technology to solve environmental problems (e.g., analyzing data or developing solutions)?",
            options: [
                { text: "Very excited to use new technology for environmental solutions", vector: [0, 0, 0, 0, 0.4] },
                { text: "Somewhat interested in using technology for environmental work", vector: [0, 0, 0, 0, 0.2] },
                { text: "Not interested in using technology", vector: [0, 0, 0, 0, 0] }
            ]
        }
    ];
    

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    return (
        <div className="survey-container">
            <h2>{questions[currentQuestion].question}</h2>
            <div className="options-container">
                {questions[currentQuestion].options.map((option, index) => (
                    <button
                    key={index}
                    className={selectedOptions[currentQuestion] === index ? "selected" : ""}
                    onClick={() => handleAnswer(option.vector, currentQuestion, index)}
                >
                    {option.text}
                </button>
                
                ))}
            </div>

            <div className="navigation">
                <button onClick={handlePrevious} disabled={currentQuestion === 0}>
                    Previous
                </button>
                {currentQuestion < questions.length - 1 ? (
                    <button onClick={handleNext}>Next</button>
                ) : (
                    <button onClick={handleFindMatches}>Find My Career Matches</button>
                )}
            </div>

            {matches.length > 0 && (
                <div className="match-cards-container">
                    {matches.slice(0, 3).map(({ career, score }) => (
                        <div key={career} className="match-card">
                            <h3>{career}</h3>
                            <p>Match: {Math.round(score * 100)}%</p>
                        </div>
                    ))}
                </div>
            )}

            
        </div>
    );
};

  
export default Survey;
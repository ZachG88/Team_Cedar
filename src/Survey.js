//import { useState } from "react";
import { findBestCareers } from "./MatchCareers";
import { Link } from "react-router-dom";
import careers from "./CareersEx";


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

    /* Survey linked card functionality */

    // const handleFindMatches = () => {
    //     const bestMatches = findBestCareers(userVector); // [{ career: "Title", score: 0.85 }, ...]

    //     // Match careers by title
    //     const matchedCareers = bestMatches.map(({ career, score }) => {
    //         const careerData = careers.find(c => c.title === career);
    //         return careerData ? { ...careerData, score } : null;
    //     }).filter(Boolean);

    //     setMatches(matchedCareers);
    // };

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


             {/* {matches.length > 0 && (
                <div className="match-cards-container">
                    {matches.map((career) => (
                        <div key={career.id} className="career-card">
                            <img src={career.image} alt={career.title} className="career-image" />
                            <div className="career-info">
                                <h3>{career.title}</h3>
                                <p>{career.description.substring(0, 100)}...</p>
                                <p><strong>Match Score:</strong> {Math.round(career.score * 100)}%</p>
                                <Link to={`/career/${career.id}`} className="learn-more">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )} */}


            
        </div>
    );
};

  
export default Survey;
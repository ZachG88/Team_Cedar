import { findBestCareers } from "./MatchCareers";
import { Link } from "react-router-dom";
import questions from "./Questions";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaArrowLeft, FaArrowRight, FaCheckCircle, FaRedoAlt } from "react-icons/fa";
import styled from "styled-components";
import RadarChart from "./RadarPlot";
import careerImages from "./CareerImages.json";
import SpheresResults from "./spheresResults";
import { Tooltip } from "react-tooltip";


const SurveyContainer = styled.div`
max-width: 40em;
margin: auto;
padding-top: 10%;
padding-left: 20%;
padding-right: 20%;
text-align: center;
`;

const ResultsContainer = styled.div`
max-width: 100vw;
margin: auto;
text-align: center;
margin-bottom: 7em;
background-color: #ffffff;
`;

const OptionButton = styled(motion.button)`
width: 100%;
padding: 10px;
margin: 8px 0;
border: none;
border-radius: 8px;
background: ${({ selected }) => (selected ? "#536639" : "#ddd")};
color: ${({ selected }) => (selected ? "#fff" : "#000")};
font-size: 16px;
cursor: pointer;
transition: background 0.3s ease;
&:hover {
    background: ${({ selected }) => (selected ? "#536639" : "#ccc")};
}
`;

const Navigation = styled.div`
display: flex;
justify-content: space-between;
margin-top: 20px;
`;

const MatchCard = styled(motion.div)`
background: #f4f4f4;
padding: 10px;
margin: 10px 0;
border-radius: 8px;
box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
`;

const ResetButton = styled.button`
  background-color: #536639;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 40px;
  &:hover {
    background-color: #536639;
  }
`;

const Survey = () => {

    const loadSurveyData = () => {
        const savedVector = localStorage.getItem("userVector");
        const savedOptions = localStorage.getItem("selectedOptions");
        const savedMatches = localStorage.getItem("matches");

        return {
            userVector: savedVector ? JSON.parse(savedVector) : [0, 0, 0, 0, 0],
            selectedOptions: savedOptions ? JSON.parse(savedOptions) : {},
            matches: savedMatches ? JSON.parse(savedMatches) : []
        };
    };

    const [userVector, setUserVector] = useState(loadSurveyData().userVector);
    const [selectedOptions, setSelectedOptions] = useState(loadSurveyData().selectedOptions);
    const [matches, setMatches] = useState(loadSurveyData().matches);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const progressPercent = Math.round(((currentQuestion + 1) / questions.length) * 100);
 

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

    const handleFindMatches = () => {
        const newMatches = findBestCareers(userVector);
        setMatches(newMatches);
        localStorage.setItem("matches", JSON.stringify(newMatches));
    };

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

    const handleResetSurvey = () => {
        setUserVector([0, 0, 0, 0, 0]);
        setSelectedOptions({});
        setMatches([]);
        setCurrentQuestion(0);
        localStorage.removeItem("userVector");
        localStorage.removeItem("selectedOptions");
        localStorage.removeItem("matches");
    };

    const getTopThreeSpheres = (userVector) => {
        const spheres = [
            "Water and Fisheries",
            "Forests, Land, and Wildlife",
            "Government, Law, and Treaty Protection",
            "Cultural and Tribal Resources",
            "Data and Technology",
        ];
    
        return userVector
            .map((score, index) => ({ name: spheres[index], score })) // Pair names with scores
            .sort((a, b) => b.score - a.score) // Sort in descending order
            .slice(0, 3); // Get top 3
    };

    const [flippedCard, setFlippedCard] = useState(null);
    
    
      const spheres = [
        "Water and Fisheries",
        "Forests, Land, and Wildlife",
        "Government, Law, and Treaty Protection",
        "Cultural and Tribal Resources",
        "Data and Technology",
      ];
    
      const sphereColors = {
        "Water and Fisheries": "#8cb0bc",
        "Forests, Land, and Wildlife": "#627943",
        "Government, Law, and Treaty Protection": "#9f90a2",
        "Cultural and Tribal Resources": "#acb659",
        "Data and Technology": "#36505d",
      };
    
      const getTextColor = (backgroundHex) => {
        const hex = backgroundHex.replace("#", "");
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
      
        return brightness > 150
        ? darkenHex(backgroundHex, 100) // light background → darken text
        : lightenHex(backgroundHex, 150); // dark background → lighten text
      };
    
      const darkenHex = (hex, amount = 20) => {
        const color = hex.replace("#", "");
        const r = Math.max(0, parseInt(color.substring(0, 2), 16) - amount);
        const g = Math.max(0, parseInt(color.substring(2, 4), 16) - amount);
        const b = Math.max(0, parseInt(color.substring(4, 6), 16) - amount);
        return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
      };
    
      const lightenHex = (hex, amount = 40) => {
        const color = hex.replace("#", "");
        const r = Math.min(255, parseInt(color.substring(0, 2), 16) + amount);
        const g = Math.min(255, parseInt(color.substring(2, 4), 16) + amount);
        const b = Math.min(255, parseInt(color.substring(4, 6), 16) + amount);
        return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
      };

      const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
      };

      const getTopSphereColor = (career) => {
        const maxIndex = career.vector.indexOf(Math.max(...career.vector));
        const topSphere = spheres[maxIndex];
        return sphereColors[topSphere] || "#000"; // fallback to black
      };

    const getRandomImage = (careerId) => {
        const index = Math.abs(careerId.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)) % careerImages.length;
        return careerImages[index]; // Assign a consistent random image based on career ID
        };

    useEffect(() => {
        // Save the state to localStorage whenever it changes
        localStorage.setItem("userVector", JSON.stringify(userVector));
        localStorage.setItem("selectedOptions", JSON.stringify(selectedOptions));
    }, [userVector, selectedOptions]);

    return (
        <>
            {matches.length === 0 ? (
                <SurveyContainer>
                    {/* Progress Bar */}
                    <div className="progress-bar-wrapper">
                    <div className="progress-bar-container">
                        <div
                        className="progress-bar"
                        style={{ width: `${progressPercent}%` }}
                        ></div>
                    </div>
                    <span className="progress-percent">{progressPercent}%</span>
                    </div>

    
                    <ToastContainer />
    
                    {/* Animated Question */}
                    {questions.length > 0 && questions[currentQuestion] && (
                        <motion.h2 
                            key={currentQuestion}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            transition={{ duration: 0.5 }}
                        >
                            {questions[currentQuestion].question}
                        </motion.h2>
                    )}
    
                    {/* Answer Options */}
                    <div>
                        {questions.length > 0 && questions[currentQuestion] && questions[currentQuestion].options.map((option, index) => (
                            <OptionButton
                                key={index}
                                selected={selectedOptions[currentQuestion] === index}
                                onClick={() => handleAnswer(option.vector, currentQuestion, index)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {option.text}
                            </OptionButton>
                        ))}
                    </div>
    
                    {/* Navigation Buttons */}
                    <Navigation>
                        <button 
                            onClick={handlePrevious} 
                            disabled={currentQuestion === 0}
                            style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
                        >
                            <FaArrowLeft style={{ marginRight: "5px" }} />
                            Previous
                        </button>
                        
                        {currentQuestion < questions.length - 1 ? (
                            <button 
                                onClick={handleNext}
                                style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
                            >
                                Next
                                <FaArrowRight style={{ marginLeft: "5px" }} />
                            </button>
                        ) : (
                            <button 
                                onClick={handleFindMatches}
                                style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
                            >
                                Find My Career Matches
                                <FaCheckCircle style={{ marginLeft: "5px" }} />
                            </button>
                        )}
                    </Navigation>
                </SurveyContainer>
            ) : (
                <ResultsContainer>
                    <div style={{ position: "relative", backgroundColor: "#edfcff", textAlign: "center", width: "100%" }}>
                    <img src="/resultsBanner.png" alt="Mountains and Trees Colorful Sillouette with Results Text" className="full-width-image fade-in"/>
                    </div>
                    <div className="match-results">
                    <h1 style={{fontSize: "4vw", marginTop: 0}}>Top Career Matches</h1>
                        {/* Career Matches Section */}
                        <div className="match-cards-container">
                            {matches.map((career) => (
                                <div
                                    key={career.id}
                                    className={`career-card ${flippedCard === career.id ? "flipped" : ""}`}
                                    onClick={() => setFlippedCard(flippedCard === career.id ? null : career.id)}
                                    style={{
                                    boxShadow: `0 8px 12px ${getTopSphereColor(career)}`,
                                    transition: "box-shadow 0.3s ease",
                                    }}
                                >
                                              <div className="career-card-inner">
                                                <div className="career-card-front" data-tooltip-content="Click to flip" data-tooltip-id="card-tooltip" data-tooltip-place="bottom">
                                                  <img src={getRandomImage(career.id)} alt={career.title} />
                                                  <h2 style={{fontFamily:"Nunito, sans-serif"}}>{career.title}</h2>
                                                </div>
                                                <div className="career-card-back" 
                                                style={{
                                                  backgroundColor: getTopSphereColor(career),
                                                  color: getTextColor(getTopSphereColor(career)),
                                                }}>
                                                  <h2 style={{fontFamily:"Nunito, sans-serif", fontSize: "2vw"}}>{career.title}</h2>
                                                  <p>{career.duties ? truncateText(career.duties, 200) : "No description available"}...</p>
                                                  <p><strong>Skills:</strong> {career.skills ? truncateText(career.skills, 200) : "No description available"}</p>
                                                  <Link to={`/career/${career.id}`} className="learn-more">
                                                    Learn More
                                                  </Link>
                                                </div>
                                              </div>
                                            </div>
                                            
                            ))}
                        </div>
                        <Tooltip id="card-tooltip" className="custom-tooltip" />
    
                        {/* Radar Chart Section */}
                        <div className="interest-section">
                            <h1 style={{fontSize: "4vw"}}>More About Your Interests</h1>
                            <RadarChart userVector={userVector} careerMatches={matches}/>
                        </div>

                        <div className="top-spheres-section">
                            <h1 style={{fontSize: "4vw"}}>Your Top 3 Spheres of Interest</h1>
                            <SpheresResults userVector={userVector} />
                        </div>

                    </div>
                
                    {/* Restart Survey Button */}
                    <ResetButton onClick={handleResetSurvey}>
                        <FaRedoAlt style={{ marginRight: "5px" }} />
                        Restart Survey
                    </ResetButton>
                </ResultsContainer>
            )}
        </>
    );
    
};

export default Survey;

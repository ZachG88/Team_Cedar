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

export default questions;
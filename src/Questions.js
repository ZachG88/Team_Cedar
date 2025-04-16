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
            },
            {
                question: "Which of these sounds most exciting to you?",
                options: [
                  { text: "Measuring river health and tracking fish", vector: [0.4, 0.2, 0, 0, 0.1] },
                  { text: "Tagging animals and learning their behavior", vector: [0.2, 0.4, 0, 0, 0.1] },
                  { text: "Writing rules or plans to protect land", vector: [0.1, 0.1, 0.4, 0, 0.1] },
                  { text: "Teaching youth about culture and nature", vector: [0, 0.2, 0.1, 0.4, 0] },
                  { text: "Mapping or tracking data with software", vector: [0, 0, 0, 0, 0.5] }
                ]
              },
              {
                question: "Would you enjoy gathering stories from elders about land and water?",
                options: [
                  { text: "Yes, very much", vector: [0.2, 0.2, 0.1, 0.4, 0.1] },
                  { text: "Maybe a little", vector: [0.1, 0.1, 0, 0.2, 0.1] },
                  { text: "Not really", vector: [0, 0, 0, 0, 0] }
                ]
              },
              {
                question: "How do you feel about long-term projects (like multi-year research or restoration)?",
                options: [
                  { text: "Love the idea of building something over time", vector: [0.2, 0.2, 0.2, 0.2, 0.2] },
                  { text: "Would rather work on quick and visible results", vector: [0.3, 0.2, 0.1, 0.1, 0.1] }
                ]
              },
              {
                question: "Which describes you best?",
                options: [
                  { text: "Hands-on learner", vector: [0.3, 0.3, 0.1, 0.1, 0] },
                  { text: "Problem solver with data and tools", vector: [0.1, 0.1, 0.1, 0, 0.5] },
                  { text: "Strong communicator and organizer", vector: [0.1, 0, 0.3, 0.3, 0.1] }
                ]
              },
              {
                question: "What motivates you the most?",
                options: [
                  { text: "Protecting fish and water", vector: [0.4, 0.1, 0, 0, 0.1] },
                  { text: "Caring for forests and animals", vector: [0.1, 0.4, 0, 0, 0.1] },
                  { text: "Defending Indigenous rights", vector: [0, 0, 0.3, 0.3, 0] },
                  { text: "Building tools and systems that help others", vector: [0, 0, 0, 0.1, 0.4] }
                ]
              },
              {
                question: "Do you like working with maps and spatial data?",
                options: [
                  { text: "Yes, I like digital tools like maps", vector: [0.1, 0.1, 0.1, 0, 0.5] },
                  { text: "I prefer working in the field", vector: [0.3, 0.3, 0.1, 0.2, 0] }
                ]
              },
              {
                question: "Which group do you see yourself supporting most?",
                options: [
                  { text: "Scientists and conservationists", vector: [0.3, 0.4, 0, 0, 0.2] },
                  { text: "Tribal governments and leaders", vector: [0, 0, 0.4, 0.2, 0.2] },
                  { text: "Cultural preservation teams", vector: [0, 0, 0.2, 0.5, 0.1] },
                  { text: "Tech and data teams", vector: [0, 0, 0, 0.1, 0.5] }
                ]
              },
              {
                question: "How important is your culture in your future work?",
                options: [
                  { text: "Very important, it guides everything I do", vector: [0.1, 0.1, 0.1, 0.6, 0.1] },
                  { text: "Somewhat important", vector: [0.1, 0.1, 0.1, 0.3, 0.1] },
                  { text: "Not a main focus", vector: [0, 0, 0, 0, 0] }
                ]
              },
              {
                question: "Would you enjoy flying drones or using sensors to track environmental health?",
                options: [
                  { text: "Yes, I like high-tech tools", vector: [0, 0, 0, 0, 0.5] },
                  { text: "Maybe, if I got some training", vector: [0, 0, 0, 0, 0.3] },
                  { text: "No, I prefer basic tools", vector: [0, 0, 0, 0, 0] }
                ]
              },
              {
                question: "Are you interested in improving access to clean water in Indigenous communities?",
                options: [
                  { text: "Yes, this is very important to me", vector: [0.5, 0.1, 0.1, 0.2, 0.1] },
                  { text: "Somewhat", vector: [0.3, 0.1, 0.1, 0.1, 0.1] },
                  { text: "Not really", vector: [0, 0, 0, 0, 0] }
                ]
              },
              {
                question: "What kind of teamwork do you prefer?",
                options: [
                  { text: "Working outdoors with a crew", vector: [0.4, 0.3, 0, 0.1, 0] },
                  { text: "Collaborating remotely using tech", vector: [0, 0, 0, 0.1, 0.5] },
                  { text: "Organizing events or community meetings", vector: [0, 0.1, 0.3, 0.4, 0] }
                ]
              },
              {
                question: "How comfortable are you speaking or presenting in front of others?",
                options: [
                  { text: "Very comfortable", vector: [0.1, 0.1, 0.3, 0.3, 0.1] },
                  { text: "Somewhat comfortable", vector: [0.1, 0.1, 0.2, 0.2, 0.1] },
                  { text: "I prefer working quietly", vector: [0.2, 0.2, 0.1, 0.1, 0.1] }
                ]
              }
        ];

export default questions;
import { useState, useRef, useEffect } from 'react';

const AboutMeChatbot = () => {
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Siddhu Parasa. Ask about my skills, experience, or projects.",
      sender: 'bot'
    }
  ]);
  const [input, setInput] = useState('');
  const [userInteracted, setUserInteracted] = useState(false);
  const messagesEndRef = useRef(null);

  const aboutMe = {
    hi: {
      examples: ["hi", "hello", "hey", "greetings"],
      response: "👋 Hello! I'm Siddhu Parasa, a final-year B.Tech student specializing in AI and Full Stack Development.",
      emotion: "friendly"
    },
    about_me: {
      examples: ["tell me about yourself", "who are you?", "your background"],
      response: "🤖 I'm Siddhu Parasa, passionate about AI, Machine Learning, and building scalable web applications. I love turning ideas into real software solutions.",
      emotion: "passionate"
    },
    skills: {
      examples: ["your skills", "technical skills", "programming languages you know"],
      response: "💻 I’m skilled in Python, C, C++, frontend (React, HTML, CSS, JavaScript), backend (Node.js, Express), and AI/ML frameworks like TensorFlow, PyTorch, OpenCV, and Scikit-learn.",
      emotion: "proud"
    },
    experience: {
      examples: ["your experience", "work history", "projects you've worked on"],
      response: "🛠️ I have worked on AI-driven projects like Smart Scene for video summarization and AI Interview Coach,an ACM Winter School participant that makes me to learn about building Explainable AI and Robust intelligence and also i worked as social media and content creator at MLSA (Microsoft) PVPSIT chapter.",
      emotion: "professional"
    },
    projects: {
      examples: ["your projects", "portfolio", "show me your work"],
      response: "📂 You can explore my GitHub (@siddhuparasa) for projects including Smart Scene, Work Grid, and various AI experiments.",
      emotion: "enthusiastic"
    },
    education: {
      examples: ["your education", "academic background", "college"],
      response: "🎓 I am currently pursuing my final year in Computer Science at PVPSIT, aiming to graduate in 2026.",
      emotion: "nostalgic"
    },
    achievements: {
      examples: ["your achievements", "awards", "milestones"],
      response: "🏆 I was selected for ACM Winter School 2024 that is on Building Explainable AI and Robust Intelligence , Social media and content creator at Microsoft Learn Student Ambassador at PVPSIT chapter.",
      emotion: "proud"
    },
    hobbies: {
      examples: ["your hobbies", "what do you do in free time?", "interests"],
      response: "♟️ I enjoy competitive chess, badminton, exploring UI/UX design, and reading tech blogs.",
      emotion: "happy"
    },
    philosophy: {
      examples: ["your philosophy", "what drives you?", "motivation"],
      response: "💡 I believe in creating technology that is intuitive, impactful, and accessible. Continuous learning and innovation drive me forward.",
      emotion: "passionate"
    },
    future_goals: {
      examples: ["your future plans", "what's next?", "goals"],
      response: "🚀 I aim to deepen my expertise in AI and full-stack development, contribute to impactful projects, and eventually start my own tech venture.",
      emotion: "hopeful"
    },
    contact: {
      examples: ["contact info", "how to reach you", "connect with you"],
      response: "📧 You can reach me at siddhuparasa99@gmail.com or connect via LinkedIn: linkedin.com/in/siddhu-parasa.",
      emotion: "friendly"
    },
    
    future_goals: {
    examples: ["your future plans", "what's next?", "goals"],
    response: "🚀 I aim to deepen my expertise in AI and full-stack development, contribute to impactful projects, and eventually start my own tech venture.",
    emotion: "hopeful"
  },
   strengths: {
    examples: ["your strengths", "what are you good at?", "best qualities?"],
    response: "I’m good at analytical thinking, problem-solving, and adapting quickly to new technologies. I’m also a strong communicator and team player.",
    emotion: "confident"
  },
  weaknesses: {
    examples: ["your weaknesses", "areas to improve", "what do you struggle with?"],
    response: "Sometimes, I tend to be a perfectionist, which can slow me down. But I’m learning to balance quality with efficiency.",
    emotion: "honest"
  },
    fallback: {
      examples: [],
      response: "❓ Sorry, I didn't get that. Ask me about my skills, projects, experience, achievements, hobbies, education, future goals,strengths,weaknesses or anything else for tech insights!",
      emotion: "neutral"
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const getBotResponse = (query) => {
    if (query.match(/skill|technolog|stack|language/)) return aboutMe.skills;
    if (query.match(/experience|work|job|internship/)) return aboutMe.experience;
    if (query.match(/project|github|portfolio/)) return aboutMe.projects;
    if (query.match(/education|degree|study|college/)) return aboutMe.education;
    if (query.match(/contact|reach|email|linkedin/)) return aboutMe.contact;
    if (query.match(/achievement|award|hackathon|recognition/)) return aboutMe.achievements;
    if (query.match(/hobby|interest|free time|leisure/)) return aboutMe.hobbies;
    if (query.match(/personal|goal|dream|passion|philosophy|motivation/)) return aboutMe.philosophy;
    if (query.match(/future|plan|next|goal/)) return aboutMe.future_goals;
    if (query.match(/tech|technology|ai|trends|future/)) return aboutMe.tech_trends;
    if (query.match(/coding|programming|learn|improve/)) return aboutMe.coding_advice;
    return aboutMe.fallback;
  };

  const handleSend = () => {
    if (!input.trim()) return;

    setUserInteracted(true);
    const trimmedInput = input.trim();
    const userMessage = { text: trimmedInput, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    setTimeout(() => {
      const query = trimmedInput.toLowerCase();
      const response = getBotResponse(query);
      const botMessages = [{ text: response.response, sender: 'bot' }];
      setMessages(prev => [...prev, ...botMessages]);
    }, 500);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  useEffect(() => {
    if (userInteracted) scrollToBottom();
  }, [messages]);

  return (
    <div className="chatbot">
      <div className="chatbot-messages">
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="chatbot-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask about me..."
        />
        <button onClick={handleSend} aria-label="Send message">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="currentColor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AboutMeChatbot;

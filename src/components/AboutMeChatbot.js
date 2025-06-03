import { useState, useRef, useEffect } from 'react';

const AboutMeChatbot = () => {
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Siddhu Parasa. Ask about my skills, experience, or projects.",
      sender: 'bot'
    }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  // Information database
  const aboutMe = {
    skills: "I'm skilled in Python, C, C++, frontend development (HTML, CSS, JavaScript), backend development (Node.js, Express.js), and building AI-powered solutions. I'm also exploring AI, Machine Learning, and the MERN stack.",
    experience: "I’ve contributed to real-world mini-projects including Smart Scene (an AI-powered video summarizer and object detection tool), Work Grid (a collaborative task management platform), and an AI-powered job interview preparation coach. I’m also part of the Social Media and Content Creation Teams at Microsoft Learn Student Ambassadors (MLSA) - PVPSIT.",
    projects: "Check my GitHub (@siddhuparasa) for projects like Smart Scene, Work Grid, and iPhone Time Widget.",
    education: "I'm pursuing a CSE degree final year at PVPSIT. I will graduate in 2026.",
    contact: "Email me at siddhuparasa99@gmail.com or connect with me on LinkedIn.",
    achievements: "  I am  selected to participate in the ACM Winter School 2024 on  BUilding Explainable AI and Robust intelligence systems. I am a Microsoft Learn Student Ambassador (MLSA) social media content creator at PVPSIT chapter.",
    hobbies: "In my free time, I enjoy exploring new designs of web pages, playing badminton, and playing chess",
    default: "I can tell you about my skills, experience, projects, education, contact info, achievements, or hobbies. What would you like to know?"
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
    return aboutMe.default;
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const trimmedInput = input.trim();
    const userMessage = { text: trimmedInput, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    setTimeout(() => {
      const query = trimmedInput.toLowerCase();
      const response = getBotResponse(query);
      setMessages(prev => {
        const newMessages = [...prev, { text: response, sender: 'bot' }];
        setTimeout(scrollToBottom, 100);
        return newMessages;
      });
    }, 500);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  useEffect(() => {
    scrollToBottom();
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
        <button onClick={handleSend}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="currentColor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        </button>
      </div>

      
    </div>
  );
};

export default AboutMeChatbot;

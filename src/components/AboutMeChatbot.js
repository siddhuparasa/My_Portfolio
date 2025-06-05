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
     skills: {
      response: "My technical skillset includes:\n\n★ Python, C, C++\n★ Frontend (React, HTML/CSS/JS)\n★ Backend (Node.js, Express)\n★ AI/ML frameworks like TensorFlow, PyTorch,openCV, Scikit-learn, NLP,matplotlib\n★ MERN stack development",
     
      emotion: 'proud'
    },
    experience: {
      response: "My journey includes:\n\n🔹 Smart Scene - AI video summarization\n🔹 Work Grid - Collaborative task platform\n🔹 AI Interview Coach\n🔹 Microsoft Learn Student Ambassador\n🔹 ACM Winter School participant",
      
      emotion: 'professional'
    },
    projects: {
      response: "Check my GitHub (@siddhuparasa) for:\n\n💻 Smart Scene - AI video analysis\n💻 Work Grid - Team productivity tool\n💻 iPhone Time Widget\n💻 Several AI experiments",
     
      emotion: 'enthusiastic'
    },

    education: {
      response: "I'm currently in my final year pursuing Computer Science at PVPSIT, graduating in 2026.",
      followUp: "Want to know about my academic achievements?",
      emotion: 'nostalgic'
    },
    contact: {
      response: "Let's connect!\n\n📧 siddhuparasa99@gmail.com\n🔗 LinkedIn: linkedin.com/in/siddhu-parasa",
      followUp: "I respond quickly to emails!",
      emotion: 'friendly'
    },
    achievements: {
      response: "Some milestones:\n\n🏆 Selected for ACM Winter School 2024\n🏆 Microsoft Learn Student Ambassador\n🏆 Social Media Lead at PVPSIT",
      followUp: "I'm particularly proud of my AI research!",
      emotion: 'proud'
    },
    hobbies: {
      response: "When I'm not coding:\n\n♟ Competitive chess player\n🏸 Badminton enthusiast\n🎨 UI/UX design explorer\n📚 Tech blog reader",
      followUp: "We could discuss chess strategies sometime!",
      emotion: 'happy'
    },
    personal: {
      response: "I'm passionate about creating technology that solves real problems while being intuitive and beautiful. I believe in continuous learning and pushing boundaries!",
      followUp: "What drives you?",
      emotion: 'passionate'
    },
    default: {
      response: "I can share about my:\n\n• Technical skills\n• Projects\n• Experience\n• Education\n• Contact info\n• Achievements\n• Hobbies\n\nWhat interests you most?",
      followUp: "",
      emotion: 'neutral'
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

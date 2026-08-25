import React, { useEffect, useRef, useState } from "react";

function AboutMeChatbot() {
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Siddhu's portfolio assistant. Ask me about his skills, projects, education, or experience.",
      sender: "bot",
    },
  ]);

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const quickQuestions = [
    "What are your skills?",
    "Tell me about your projects",
    "What is your education?",
    "How can I contact you?",
  ];

  /*
   * Portfolio knowledge
   */
  const aboutMe = {
    skills: {
      keywords: [
        "skill",
        "skills",
        "technology",
        "technologies",
        "tech stack",
        "stack",
        "programming",
        "languages",
      ],
      response:
        "Siddhu works across GenAI, Agentic AI, RAG, Computer Vision, Deep Learning, and full-stack development. His core technologies include Python, C++, Java, JavaScript, React, Node.js, Flask, LangChain, LLMs, RAG, YOLO, PyTorch, TensorFlow, MongoDB, and MySQL.",
    },

    genai: {
      keywords: [
        "genai",
        "generative ai",
        "generative",
        "agentic",
        "agentic ai",
        "llm",
        "llms",
        "langchain",
      ],
      response:
        "Siddhu focuses on Generative AI and Agentic AI, including LLM applications, RAG systems, prompt engineering, and LangChain-based AI workflows.",
    },

    computerVision: {
      keywords: [
        "computer vision",
        "deep learning",
        "yolo",
        "resnet",
        "cnn",
        "image",
        "video",
      ],
      response:
        "His Computer Vision work includes object detection, video understanding, and deep learning. Projects such as Smart Scene use YOLOv7 to identify important objects and generate focused video summaries.",
    },

    resink: {
      keywords: [
        "resink",
        "research assistant",
        "research paper",
        "research papers",
      ],
      response:
        "RESINK is an AI research assistant built with LangChain. It analyzes research papers from PDF uploads or URLs, generates 10 structured research insights, and discovers related foundational papers using the Semantic Scholar API.",
    },

    clario: {
      keywords: [
        "clario",
        "document summarization",
        "content generation",
        "claude",
      ],
      response:
        "CLARIO is a Generative AI platform for document summarization and content generation. It uses Claude AI APIs and custom prompt engineering to generate structured and audience-aware responses.",
    },

    psybot: {
      keywords: [
        "psybot",
        "psycho bot",
        "psychology chatbot",
        "psychology",
      ],
      response:
        "PsyBot is a RAG-based psychology chatbot built around a 9,846-entry psychology Q&A dataset. It uses Hugging Face models and semantic retrieval to provide responses grounded in relevant psychological context.",
    },

    summariv: {
      keywords: [
        "summariv",
        "multimodal",
        "multimodal rag",
        "video question",
        "video qa",
      ],
      response:
        "SummariV is a multimodal RAG system for video question answering. It combines audio, visual, and textual information extracted from videos to retrieve relevant context and generate answers.",
    },

    smartScene: {
      keywords: [
        "smart scene",
        "video summarization",
        "yolov7",
        "object detection",
        "coco",
      ],
      response:
        "Smart Scene is an AI video summarization system using YOLOv7 object detection. It calculates clip importance using object confidence and object weights against a threshold, while also allowing users to select objects from the COCO dataset for personalized summaries.",
    },

    flightPlanner: {
      keywords: [
        "flight route",
        "flight planner",
        "dijkstra",
        "flight route planner",
      ],
      response:
        "Flight Route Planner is a C++ graph algorithm project that uses Dijkstra's algorithm to calculate both the fastest and cheapest routes between major airports in Andhra Pradesh.",
    },

    education: {
      keywords: [
        "education",
        "college",
        "degree",
        "btech",
        "b.tech",
        "study",
        "academic",
      ],
      response:
        "Siddhu is a final-year B.Tech student in Computer Science at PVPSIT and is focused on AI, GenAI, and software development.",
    },

    experience: {
      keywords: [
        "experience",
        "work experience",
        "work",
        "internship",
        "career",
      ],
      response:
        "Siddhu's experience is primarily project-driven, with work across AI, GenAI, RAG, Computer Vision, and full-stack development. He has also contributed to student technology communities and technical activities.",
    },

    achievements: {
      keywords: [
        "achievement",
        "achievements",
        "award",
        "awards",
        "acm",
        "winter school",
        "mlsa",
        "microsoft",
      ],
      response:
        "Siddhu was selected for ACM Winter School 2024 on Building Explainable AI and Robust Intelligence. He has also contributed as a Social Media and Content Creator with the Microsoft Learn Student Ambassadors chapter at PVPSIT.",
    },

    contact: {
      keywords: [
        "contact",
        "email",
        "mail",
        "linkedin",
        "reach",
        "connect",
      ],
      response:
        "You can contact Siddhu at siddhuparasa99@gmail.com or connect with him on LinkedIn at linkedin.com/in/siddhu-parasa.",
    },

    hobbies: {
      keywords: [
        "hobby",
        "hobbies",
        "interest",
        "interests",
        "free time",
      ],
      response:
        "Outside technology, Siddhu enjoys competitive chess, badminton, UI/UX design, and exploring technology-related content.",
    },

    about: {
      keywords: [
        "about you",
        "about yourself",
        "who are you",
        "tell me about you",
        "tell me about yourself",
      ],
      response:
        "Siddhu is a final-year Computer Science student focused on AI and software engineering. His work combines Generative AI, Agentic AI, RAG, Computer Vision, and full-stack development.",
    },
  };

  /*
   * Find the best response
   */
  const getBotResponse = (query) => {
    const normalizedQuery = query
      .toLowerCase()
      .trim()
      .replace(/[?!.,]/g, "");

    if (
      /^(hi|hello|hey|hii|good morning|good evening)$/.test(
        normalizedQuery
      )
    ) {
      return "Hi! 👋 Ask me about Siddhu's skills, projects, education, or experience.";
    }

    if (normalizedQuery.includes("thank")) {
      return "You're welcome! Feel free to ask anything about the portfolio.";
    }

    /*
     * Check specific projects first.
     */
    const priorityCategories = [
      "resink",
      "clario",
      "psybot",
      "summariv",
      "smartScene",
      "flightPlanner",
      "genai",
      "computerVision",
      "skills",
      "education",
      "experience",
      "achievements",
      "contact",
      "hobbies",
      "about",
    ];

    for (const category of priorityCategories) {
      const data = aboutMe[category];

      const matched = data.keywords.some((keyword) =>
        normalizedQuery.includes(keyword)
      );

      if (matched) {
        return data.response;
      }
    }

    return "I can tell you about Siddhu's skills, GenAI and Agentic AI work, projects, education, experience, achievements, or contact information. Try asking one of those.";
  };

  /*
   * Scroll to latest message
   */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  /*
   * Send message
   */
  const handleSend = (messageText = input) => {
    const trimmedInput = messageText.trim();

    if (!trimmedInput || isTyping) {
      return;
    }

    setMessages((prev) => [
      ...prev,
      {
        text: trimmedInput,
        sender: "user",
      },
    ]);

    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = getBotResponse(trimmedInput);

      setMessages((prev) => [
        ...prev,
        {
          text: response,
          sender: "bot",
        },
      ]);

      setIsTyping(false);
    }, 450);
  };

  /*
   * Enter key
   */
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="chatbot">

      {/* Header */}
      <div className="chatbot-header">
        <div className="chatbot-header-info">

          <div className="chatbot-avatar">
            S
          </div>

          <div>
            <h3>Siddhu's Assistant</h3>

            <span className="chatbot-status">
              <span className="status-dot"></span>
              Available
            </span>
          </div>

        </div>
      </div>

      {/* Messages */}
      <div className="chatbot-messages">

        {messages.length === 1 && (
          <div className="chatbot-quick-actions">
            {quickQuestions.map((question) => (
              <button
                key={question}
                onClick={() => handleSend(question)}
                className="quick-question"
              >
                {question}
              </button>
            ))}
          </div>
        )}

        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender}`}
          >
            {message.sender === "bot" && (
              <div className="message-avatar">
                S
              </div>
            )}

            <div className="message-content">
              {message.text}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="message bot">

            <div className="message-avatar">
              S
            </div>

            <div className="message-content typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>

          </div>
        )}

        <div ref={messagesEndRef} />

      </div>

      {/* Input */}
      <div className="chatbot-input">

        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask about Siddhu..."
          disabled={isTyping}
        />

        <button
          onClick={() => handleSend()}
          disabled={!input.trim() || isTyping}
          aria-label="Send message"
          className="chatbot-send"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
          >
            <path
              fill="currentColor"
              d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
            />
          </svg>
        </button>

      </div>

      <div className="chatbot-footer">
        Portfolio assistant
      </div>

    </div>
  );
}

export default AboutMeChatbot;
import React, { useRef } from "react";
import { FiExternalLink } from "react-icons/fi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function ProjectVideo({ src, alt }) {
  return (
    <div className="project-video-wrapper">
      <video
        className="project-video"
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={alt}
      />
    </div>
  );
}

function Projects() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const offset = direction === "left" ? -380 : 380;

      scrollRef.current.scrollBy({
        left: offset,
        behavior: "smooth",
      });
    }
  };

  const projects = [
  {
    name: "RESINK",
    category: "AI Research Assistant",
    description:
      "LangChain-powered AI research assistant that analyzes research papers from PDF uploads or URLs and generates 10 structured research insights. It also retrieves related foundational papers through the Semantic Scholar API.",
    video: `${process.env.PUBLIC_URL}/assets/RESINK_DEMO_1.mp4`,
    link: "https://resink.streamlit.app/",
    linkText: "Live Demo",
    tags: [
      "Python",
      "LangChain",
      "Groq",
      "Semantic Scholar",
      "Streamlit",
    ],
  },

  {
    name: "CLARIO",
    category: "Generative AI Platform",
    description:
      "Generative AI platform for document summarization and content generation, using Claude AI APIs and custom prompt engineering to produce structured and audience-aware responses.",
    video: `${process.env.PUBLIC_URL}/assets/Clario_demo.mp4`,
    link: "https://getclario.vercel.app/",
    linkText: "Live Demo",
    tags: [
      "React",
      "Generative AI",
      "Claude AI",
      "API Integration",
      "Prompt Engineering",
    ],
  },

  {
    name: "PsychoBot",
    category: "RAG Psychology Chatbot",
    description:
      "RAG-based psychology chatbot built using a 9,846-entry psychology Q&A dataset. Hugging Face models are used for semantic retrieval, enabling the system to ground responses in relevant psychological context.",
    video: `${process.env.PUBLIC_URL}/assets/psybot_demo.mp4`,
    link: "https://psy-bot-livid.vercel.app/",
    linkText: "Live Demo",
    tags: [
      "Python",
      "RAG",
      "Hugging Face",
      "Sentence-BERT",
      "LangChain",
      "LLM",
    ],
  },

  {
    name: "SummariV",
    category: "Multimodal RAG Video Q&A",
    description:
      "Multimodal RAG system that understands audio, visual, and textual information from videos. It combines speech transcription, visual analysis, and semantic retrieval to answer questions using relevant information  and provide the grounded video clip from the full video related to the user question.",
    link: "https://colab.research.google.com/drive/1Z2G7h9Gx2OJOSHbo0AVOPDQIjZjNL4Vi?usp=sharing",
    linkText: "View Project",
    tags: [
      "Python",
      "Multimodal RAG",
      "Whisper",
      "BLIP",
      "Sentence-BERT",
      "FLAN-T5",
    ],
  },

  {
    name: "Smart Scene",
    category: "AI Video Summarization",
    description:
      "YOLOv7-based video summarization system that identifies important clips using object detection and a formula-based importance score combining object confidence and object weight against a defined threshold. Users can also select objects from the COCO dataset to generate personalized summaries.",
    link:
      "https://github.com/siddhuparasa/smart_scene",
    linkText: "View Project",
    tags: [
      "Python",
      "YOLOv7",
      "Object Detection",
      "COCO Dataset",
      "OpenCV",
    ],
  },

  {
  name: "Flight Route Planner",
  category: "C++ Algorithmic Project",
  description:
    "C++ flight route planner that uses Dijkstra's algorithm to find the fastest and cheapest routes between major airports in Andhra Pradesh. It models flight duration and cost using an adjacency-list graph and reconstructs the optimal route for each criterion.",
  link: "https://github.com/siddhuparasa/Flight_Root_Planner",
  linkText: "View Project",
  tags: [
    "C++",
    "Dijkstra's Algorithm",
    "Graph Algorithms",
    "Data Structures",
  ],
},
];

  return (
    <section id="projects" className="projects">
      <div className="container">

        <h2 className="section-title">
          <span className="accent-text"></span>
          Featured Projects
        </h2>

        <p className="projects-subtitle">
          A selection of AI, GenAI, RAG, computer vision, and full-stack
          projects I've built.
        </p>

        <div className="projects-scroll-wrapper">

          <button
            className="scroll-btn scroll-left"
            onClick={() => scroll("left")}
            aria-label="Scroll projects left"
          >
            <FaChevronLeft />
          </button>

          <button
            className="scroll-btn scroll-right"
            onClick={() => scroll("right")}
            aria-label="Scroll projects right"
          >
            <FaChevronRight />
          </button>

          <div className="projects-grid" ref={scrollRef}>
            {projects.map((project, index) => (
              <article
                className={`project-card ${
                  project.video ? "project-card-featured" : ""
                }`}
                key={project.name}
              >

                {/* Automatic Demo Video */}
                {project.video && (
                  <ProjectVideo
                    src={project.video}
                    alt={`${project.name} project demo`}
                  />
                )}

                {/* Project Header */}
                <div className="project-header">

                  <div className="project-icon">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      aria-hidden="true"
                    >
                      <rect
                        width="40"
                        height="40"
                        rx="8"
                        fill={`url(#gradient-${index})`}
                      />

                      <defs>
                        <linearGradient
                          id={`gradient-${index}`}
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop
                            offset="0%"
                            stopColor={
                              index % 2 === 0
                                ? "#04fcc2"
                                : "#0066ff"
                            }
                          />

                          <stop
                            offset="100%"
                            stopColor={
                              index % 2 === 0
                                ? "#0066ff"
                                : "#04fcc2"
                            }
                          />
                        </linearGradient>
                      </defs>

                      <text
                        x="20"
                        y="25"
                        textAnchor="middle"
                        fill="white"
                        fontFamily="Arial"
                        fontSize="14"
                        fontWeight="bold"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </text>
                    </svg>
                  </div>

                  <div className="project-heading-content">
                    <span className="project-category">
                      {project.category}
                    </span>

                    <h3 className="project-title">
                      {project.name}
                    </h3>
                  </div>

                </div>

                {/* Description */}
                <p className="project-description">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="project-tag"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Link */}
                {project.link &&
                  !project.link.includes("YOUR_") && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label={`${project.linkText} for ${project.name}`}
                    >
                      <span>{project.linkText}</span>
                      <FiExternalLink className="link-icon" />
                    </a>
                  )}

              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;
import { Fragment } from "react";

export default function Projects() {
  const ProjectContainer = ({ title, subtitle, tools, img, link }) => (
    <div className="projects-container">
      <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
        <div className="image-section">
          <img src={img} alt="Project Image" />
        </div>
        <div className="projects-header">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>
        <div className="work-badges">
          {tools.map((tool, index) => (
            <div className="work-badge" key={index}>{tool}</div>
          ))}
        </div>
      </a>
    </div>
  );

  const projects = [
    {
      title: "TLDW - Best Build with Co:Here",
      subtitle: "Summarizing and classifying YouTube videos",
      tools: ["Web Scraping", "AI", "NLP", "React", "Django"],
      img: "tldw.png",
      link: "https://devpost.com/software/tldw-too-long-didn-t-watch",
    },
    {
      title: "BrewMates - Coffee Chat App",
      subtitle: "Empowering students with tools to approach networking events confidently.",
      tools: [
        "React",
        "Cohere API",
        "QR Code Scanner",
        "HTML",
        "CSS",
        "Firebase",
        "Figma",
      ],
      img: "brewmates.png",
      link: "https://devpost.com/software/brewmates", // Replace with actual link
    },
    {
      title: "Email Scraping Bot - Metaverse Group",
      subtitle:
        "Automating lead generation and optimizing email campaigns for B2B sales outreach.",
      tools: ["Python", "Selenium", "Excel", "PowerBI", "A/B Testing"],
      img: "bot.png",
      link: "https://github.com/JasmineGu2/scrapeEmail", // Replace with actual link
    },
    {
      title: "The Compass Food Bank VBA",
      subtitle: "Automating task scheduling with VBA",
      tools: ["Excel VBA", "Automation", "Salesforce"],
      img: "compass.png",
      link: "https://thecompass.ca/", // Replace with actual link
    },
    {
      title: "Royal Bank of Canada Design Thinking Project",
      subtitle: "User-centric design and research for LEAP",
      tools: ["Design Thinking", "UX Research"],
      img: "leap.png",
      link: "https://www.figma.com/file/TItO4qnPpXbOTbgmQntyPH/Untitled?type=design&node-id=0%3A1&mode=design&t=b7TGhkGp8WEKgZFX-1", // Replace with actual link
    },
    {
      title: "My UberEats Project - Ivey Product Society",
      subtitle: "Educational bootcamp for product design",
      tools: ["Figma", "Product Design", "Team Leadership"],
      img: "ubereats.png",
      link: "https://www.figma.com/proto/uQoQufP7QYdcJpW1jxI7nQ/UberEats-Slides?page-id=0%3A1&node-id=18-11323&starting-point-node-id=18%3A11323&scaling=min-zoom&show-proto-sidebar=1&mode=design&t=ltxlPmzZ6nlexlNy-1", // Replace with actual link
    },
  ];

  return (
    <Fragment>
      <div className="section">
        <h3>Side Projects</h3>
        <p>I love building projects focused on making solutions that work and have impact.</p>
      </div>
      <div className="grid-container">
        {projects.map((project, index) => (
          <ProjectContainer key={index} {...project} />
        ))}
      </div>
    </Fragment>
  );
}

"use client"
import { Fragment } from "react";
import styled from "styled-components";

export default function Work() {
  const WorkContainer = ({ title, company, date, skills, description, img, link }) => (
    <div className="work-container">
    {img && <div className="work-image" style={{ backgroundImage: `url(${img})` }} />}
      <div className="work-text">
      <div className="work-header">
      <h2 className="work-title">{title}</h2>
        <h3 className="work-company">{company}</h3>
        <p className="work-date">{date}</p>
      </div>
        <div className="work-badges">
          {skills.map((skill, index) => (
            <div className="work-badge" key={index}>{skill}</div>
          ))}
        </div>
        <p className="work-description">
          {description}{" "}
        </p>
      </div>
    </div>
  );

  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Intuit",
      date: "May 2024 - Sep 2024",
      skills: [
        "JavaScript",
        "HTML",
        "CSS",
        "React",
        "TypeScript",
        "REST API",
        "Jest",
      ],
      description:
        "Designed UI and functionality for 10+ components including accordion styles, UI animations, and tables for TurboTax USA product. Reduced developer overhead by 45% through refactoring and redesigning code architecture.",
      img: "intuit.png",
      link: { url: "https://turbotax.intuit.com/", text: "TurboTax USA" },
    },
    {
      title: "Full-Stack Engineer Intern",
      company: "LaurelSpace",
      date: "Sep 2023 - Dec 2023",
      skills: ["React", "TypeScript", "CSS", "Django", "PostgreSQL", "Stripe API"],
      description:
        "Developed CRM web and mobile hybrid software for childcare providers, integrating email automation and payment systems to reduce administrative efforts by 40%. Improved user satisfaction by 30% through reusable components and UX design.",
      img: "laurelspace.png",
      link: { url: "#", text: "LaurelSpace CRM" },
    },
    {
      title: "Solutions Engineer Intern",
      company: "OMERS",
      date: "May 2023 - Aug 2023",
      skills: [
        "ServiceNow",
        "UX Design",
        "Process Flows",
        "QA Testing",
        "Dashboards",
      ],
      description:
        "Enhanced enterprise processes by 60-70% through designing and programming functionality of 8+ software solutions, improving productivity by 15% with data visualization dashboards.",
      img: "omers.png",
      link: { url: "#", text: "OMERS Solutions" },
    },
    {
      title: "Developer and Data Analyst Intern",
      company: "Metaverse Group",
      date: "Nov 2022 - May 2023",
      skills: ["Python", "Selenium", "Excel VBA", "MixMax"],
      description:
        "Programmed a bot scraper increasing B2B outreach by 500%, generating 900+ leads. Optimized sales processes with data cleaning, testing, and email strategy analysis.",
      img: "metaverse.png",
      link: { url: "#", text: "Metaverse Bot" },
    },
  ];

  return (
    <div className="container-bg">
        <div className="section">
          <h3> Work Experience </h3>
          <p> Diverse set of experiences working in various tech roles from big-tech to startups</p>
        </div>
        {experiences.map((experience, index) => (
          <WorkContainer key={index} {...experience} />
        ))}
    </div>
  );
}

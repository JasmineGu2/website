"use client"
import { Fragment } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 50px auto;
  padding: 0 20px;
  max-width: 1000px;
`;

const StyledWorkContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  background-color: #112240;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledImageAndBadges = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

const StyledWorkImage = styled.div`
  background-size: cover;
  background-position: center;
  width: 200px;
  height: 200px;
  border-radius: 10px;
`;

const StyledBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  width: 200px; /* Matches the image width */
`;

const StyledBadge = styled.span`
  background-color: #64ffda;
  color: #112240;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 5px;
`;

const StyledWorkText = styled.div`
  flex: 2;
  padding-left: 20px;

  @media (max-width: 768px) {
    padding-left: 0;
    text-align: center;
  }
`;

const StyledTitle = styled.h4`
  font-size: 1.2rem;
  color: #ccd6f6;
  margin-bottom: 5px;
`;

const StyledCompany = styled.h2`
  font-size: 1.5rem;
  color: #64ffda;
  margin-bottom: 5px;
`;

const StyledDate = styled.p`
  font-size: 0.9rem;
  color: #a8b2d1;
  margin-bottom: 10px;
`;

const StyledDescription = styled.p`
  font-size: 1rem;
  color: #a8b2d1;
  line-height: 1.5;

  a {
    color: #64ffda;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function Work() {
  const WorkContainer = ({ title, company, date, skills, description, img, link }) => (
    <StyledWorkContainer>
      {/* Image and Badges Section */}
      <StyledImageAndBadges>
        {img && <StyledWorkImage style={{ backgroundImage: `url(${img})` }} />}
        <StyledBadges>
          {skills.map((skill, index) => (
            <StyledBadge key={index}>{skill}</StyledBadge>
          ))}
        </StyledBadges>
      </StyledImageAndBadges>

      {/* Text Section */}
      <StyledWorkText>
        <StyledTitle>{title}</StyledTitle>
        <StyledCompany>{company}</StyledCompany>
        <StyledDate>{date}</StyledDate>
        <StyledDescription>
          {description}{" "}
          {link && (
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.text}
            </a>
          )}
        </StyledDescription>
      </StyledWorkText>
    </StyledWorkContainer>
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
      link: { url: "#", text: "TurboTax USA" },
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
    <Fragment>
      <StyledContainer>
        {experiences.map((experience, index) => (
          <WorkContainer key={index} {...experience} />
        ))}
      </StyledContainer>
    </Fragment>
  );
}

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import blog from "../../Assets/Projects/blog.jpg"
import bmi from "../../Assets/Projects/bmi.jpg"
import bookstore from "../../Assets/Projects/bookstore.jpg"
import competitiveprogramming from "../../Assets/Projects/competitiveprogramming.jpg"
import socialmedia from "../../Assets/Projects/socialmedia.jpg"
import tour2 from "../../Assets/Projects/tour2.jpg"
import gender from "../../Assets/Projects/gender2.jpg"
import eye from "../../Assets/Projects/eye2.jpg"
import blockchain from "../../Assets/Projects/blockchain.jpg"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects that I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blockchain}
              isBlog={false}
              title="Blockchain Development at ChromaWay"
              description="Currently developing decentralized applications (dApps) using Chromia's Rell programming language and Postchain architecture. Working on Web3 technologies including smart contract creation and decentralized storage solutions."
              ghLink="https://chromaway.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookstore}
              isBlog={false}
              title="ERP System Development at ConDigital"
              description="As a Full Stack Engineer, I designed and developed user interfaces, implemented server-side logic, and contributed to comprehensive ERP system development. Collaborated with cross-functional teams to ship new features."
              ghLink="https://github.com/fuad-miftah"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={competitiveprogramming}
              isBlog={false}
              title="Vertex Platform - A2SV"
              description="Backend Engineer for the Vertex project, a data structure and algorithm learning platform with AI-powered interview features. Built with offline/online capabilities and collaborated with former Google engineers."
              ghLink="https://github.com/fuad-miftah"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={socialmedia}
              isBlog={false}
              title="Social Media API - Eskalate"
              description="Backend Engineer Intern working with .NET and PostgreSQL using clean architecture. Implemented CQRS pattern, Entity Framework, SignalR for real-time notifications, and achieved 87% API test coverage."
              ghLink="https://github.com/ibsa-abraham-a2sv/aastu-socialmedia-api-team-2"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Personal Blog Webapp using Node.js"
              description="Full-stack personal blog webapp built with Node.js, Express.js, EJS templating engine, and MongoDB. Features Google OAuth integration for seamless login and signup functionality."
              ghLink="https://github.com/fuad-miftah/personal-blog-webapp-node.js"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gender}
              isBlog={false}
              title="Gender Classification using Voice"
              description="Machine learning model for gender detection using voice analysis. Utilizes voice pattern recognition to determine gender, enhancing applications like voice assistants and user verification systems."
              ghLink="https://colab.research.google.com/drive/1uzuaQmxM2NUtC2UC-aFBZOnr9WMptSpI?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tour2}
              isBlog={false}
              title="Full Stack Tour and Travel Website"
              description="Comprehensive tour and travel platform built with PHP, HTML, CSS, and JavaScript. Features car booking, hotel reservations, tour guide selection, and tourist attraction exploration for Ethiopia."
              ghLink="https://github.com/SectionB-SWEG2012Batch-G3/Tour-and-Travel-Full-Stack-WebDevTeam"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eye}
              isBlog={false}
              title="Trachoma Detection System"
              description="Mobile app integrated trachoma detection system using image analysis and machine learning. Enables early intervention for eye disease through automated identification and analysis."
              ghLink="https://github.com/natiyeshi/clearSight"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

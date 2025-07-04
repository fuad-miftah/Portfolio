import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">

          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Fuad Miftah </span>
            from <span className="purple"> Addis Ababa, Ethiopia.</span>
            <br /> I am a passionate software engineer with expertise in full-stack development and emerging blockchain technologies. 
            Currently working as a <span className="purple">Blockchain Developer at ChromaWay</span>, 
            where I develop decentralized applications (dApps) using Chromia's Rell programming language and Web3 technologies.
            <br />
          </p>
          <p style={{ textAlign: "justify" }}>
            Previously, I worked as a <span className="purple">Full Stack Engineer at ConDigital</span> where I designed and developed 
            user interfaces, implemented server-side logic, and contributed to ERP system development. I also served as a 
            <span className="purple"> Backend Engineer at Africa to Silicon Valley (A2SV)</span>, backed by Google, where I worked on the 
            Vertex project - a data structure and algorithm learning platform with AI-powered interview features.
          </p>
          <p style={{ textAlign: "justify" }}>
            As an active member of <span className="purple">A2SV</span>, I've been part of a community that has successfully placed over 50 students 
            in top tech companies including <span className="purple">Google, Amazon, LinkedIn, Palantir, Databricks, and Bloomberg.</span> 
            Through this program, I've solved <span className="purple">over 600</span> data structure and algorithm problems 
            on platforms like LeetCode and Codeforces, strengthening my problem-solving skills and algorithmic thinking.
            <br />
            <br />
            When I'm not coding, you can find me:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring the latest blockchain and Web3 technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Contributing to open-source projects and the developer community
            </li>
            <li className="about-activity">
              <ImPointRight /> Enjoying football matches (Proud Manchester United supporter)
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new places and cultures through travel
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Building innovative solutions that bridge traditional and decentralized technologies!"{" "}
          </p>
          <footer className="blockquote-footer">Fuad Miftah</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

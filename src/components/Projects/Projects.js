import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import mapty from "../../Assets/Projects/mapty.png";
import birthday from "../../Assets/Projects/birthday.png";
import color from "../../Assets/Projects/color.png";
import jobPortal from "../../Assets/Projects/jobs-portal.png";
import urlShortener from "../../Assets/Projects/url-shortener.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <h1 style={{ color: "white" }}>Projects</h1>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={urlShortener}
              isBlog={false}
              title="URL Shortener"
              description="This Application for shortening lengthy url to short one and created using Mern stack "
              ghLink="https://github.com/shaheermohamed/url-shortener"
              demoLink="https://url-shortener-b9u8.onrender.com"
              projectType=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jobPortal}
              isBlog={false}
              title="Job Portal"
              description="This Application for searching jobs "
              ghLink="https://github.com/shaheermohamed/job-portals"
              demoLink="https://job-portals-client.onrender.com/"
              projectType=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mapty}
              isBlog={false}
              title="Mapty"
              description="Application shows current location of yours and you can mark Running or Cycling activity on maps and it is store in local storage and retrieve from locastrogae also"
              ghLink="https://github.com/shaheermohamed/Mapty"
              demoLink="https://mapty-javascript-udemy.netlify.app/"
              projectType=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={birthday}
              isBlog={false}
              title="Birthay reminder"
              description="is shows future coming birthday"
              ghLink="https://github.com/shaheermohamed/React-Birthday_reminder_useState"
              demoLink="https://birthday-reminderusestate.netlify.app/"
              projectType=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={color}
              isBlog={false}
              title="color generator "
              description="user can generator different color shades and pick them also,created using react js"
              ghLink="https://github.com/shaheermohamed/react-color-generator"
              demoLink="https://colorr-generatorr-reactjs.netlify.app/"
              projectType=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

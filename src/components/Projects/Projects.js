import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import mapty from "../../Assets/Projects/mapty.png";
import birthday from "../../Assets/Projects/birthday.png";
import color from "../../Assets/Projects/color.png";
import jobPortal from "../../Assets/Projects/jobs-portal.png";
import urlShortener from "../../Assets/Projects/url-shortener.png";
import loko from "../../Assets/Projects/loko.png";
import mercheWeb from "../../Assets/Projects/merche.png";
import mercheApp from "../../Assets/Projects/merche-business-app.png";
import fakhra from "../../Assets/Projects/fakhra.png";
import sayartak from "../../Assets/Projects/sayartak.png";
import mediaone from "../../Assets/Projects/mediaOne.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <h1 style={{ color: "white" }}>Projects</h1>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mediaone}
              isBlog={false}
              title="MediaOne TV Malayalam News App- (Coderythm technology)"
              description="MediaOne is an app designed for reading news and watching videos. I worked on both the React Native app and its admin dashboard. I developed the entire admin dashboard and created various APIs for the MediaOne app. The technologies used include React Native, React.js, Node.js, Express.js, MongoDB,Ant Design,Tailwind Css, and a serverless backend realm with MongoDB"
              ghLink=""
              demoLink="https://play.google.com/store/apps/details?id=com.mediaone.mobile.android"
              projectType=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sayartak}
              isBlog={false}
              title="Sayartak.Jo- (Coderythm technology)"
              description="Sayartak.Jo is an innovative application revolutionizing car maintenance in Amman, offering services throughout the week. I contributed to both the mobile application and its admin dashboard. The technologies utilized include React Native, React.js, Bootstrap, MongoDB, and MongoDB Realm serverless technologies."
              ghLink=""
              demoLink="https://play.google.com/store/apps/details?id=com.sayyartak.customer"
              projectType=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mercheApp}
              isBlog={false}
              title="Merche Business App- (Coderythm technology)"
              description="Merche Business App for adding products to E-commerce. The technologies used in this project include React Native, MongoDB, a serverless backend with MongoDB Realm"
              ghLink=""
              demoLink="https://www.merche.app/p/YAZA"
              projectType=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mercheWeb}
              isBlog={false}
              title="Merche - (Coderythm technology)"
              description="Merche is an e-commerce web application aimed at supporting small businesses. I developed this project end-to-end, which includes a customer web app, a provider web app, and an admin web app. Additionally, I created an admin dashboard to monitor overall progress. The technologies used in this project include React.js, MongoDB, a serverless backend with MongoDB Realm, and a payment gateway."
              ghLink=""
              demoLink="https://www.merche.app/p/YAZA"
              projectType=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={loko}
              isBlog={false}
              title="Loko - (Coderythm technology)"
              description="This is E-commerce Web Application that targeting home business in UAE.Developed a comprehensive e-commerce solution, which includes a customer web app, provider web app, and admin web app. Technologies utilized in this project include React.js for the frontend, Material UI for design components, MongoDB for the database, MongoDB Realm for serverless backend services,Node js,Express js and Stripe for the payment gateway."
              ghLink=""
              demoLink="https://www.shop.loko.ae/"
              projectType=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fakhra}
              isBlog={false}
              title="Fakhra Perfumes- (Coderythm technology)"
              description="Fakhra Perfumes offers high-quality perfumes delivered across the United Arab Emirates. I worked on the React Native app for this project, with the backend powered by WooCommerce. The technologies used include React Native and WooCommerce"
              ghLink=""
              demoLink="https://play.google.com/store/apps/details?id=com.fakhraperfumes.fakhra"
              projectType=""
            />
          </Col>
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

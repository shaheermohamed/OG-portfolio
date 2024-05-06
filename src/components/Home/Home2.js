import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import my from "../../Assets/my.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a experienced Full Stack Developer with a passion for
              building responsive and user-friendly web and mobile applications
              <br />
              <br />I have extensive experience with a wide range of
              technologies for full-stack web and mobile app development
              <br />
              <br />
              Frontend Technologies : &nbsp;
              <i>
                <b className="purple">
                  React JS ,React Native, Javascript, HTML5, CSS, Bootstrap,
                  Material UI, Tailwind CSS, Ant Design
                </b>
              </i>
              <br />
              <br />
              Backend Technologies : &nbsp;
              <i>
                <b className="purple">
                  Serverless (MongoDB Realm), Node JS, Express JS{" "}
                </b>
              </i>
              <br />
              <br />
              Database & Server Tools : &nbsp;
              <i>
                <b className="purple">
                  MongoDB, Google Cloud Platform, AWS, Firebase, Heroku, Netlify
                </b>
              </i>
              <br />
              <br />
              Project Management Tools : &nbsp;
              <i>
                <b className="purple">Jira, Slack</b>
              </i>
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                style={{ padding: "10px" }}
                src={my}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="red">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/shaheermohamed"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mohamed-shaheer-c-p-75238a1b1/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/s.o.u.m.y.a_j.i.t/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

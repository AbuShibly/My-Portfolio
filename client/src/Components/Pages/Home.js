import { React, useEffect, useState } from "react";
import axios from "axios";
import "../Assets/Styles/animate.css";
import Profile from "../Assets/Images/profile5.png";
import Codingimg from "../Assets/Images/Codeimg.jpeg";
import Testimg from "../Assets/Images/santhanam.jpg";
import Testimg2 from "../Assets/Images/sathik.jpg";
import Testimg3 from "../Assets/Images/Akthar.jpg";
import Crudimg from "../Assets/Images/Crudimg.png";
import Techimg from "../Assets/Images/Techimg.jpg";
import Resume from "../Assets/Images/resume.pdf";
import { FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiReact, SiMongodb, SiGithub } from "react-icons/si";
import { ImQuotesLeft, ImLinkedin } from "react-icons/im";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  FloatingLabel,
} from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AnimatedCursor from "react-animated-cursor";

const Home = () => {
  // For Fadein Animation
  useEffect(() => {
    const handleScroll = () => {
      const pageTop = window.scrollY;
      const pageBottom = pageTop + window.innerHeight;
      const tags = document.querySelectorAll(".fadein");

      tags.forEach((tag) => {
        if (tag.getBoundingClientRect().top < pageBottom) {
          tag.classList.add("visible");
        } else {
          tag.classList.remove("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // For Form Submission
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const formData = {
    userName: name,
    userEmail: email,
    userMessage: message,
  };
  const formSubmission = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.info("Please Fill All Fields", {
        position: "top-center",
        type: "warning",
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "light",
      });
      return;
    }
    if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-z]+$/.test(email)) {
      toast.info("Enter Valid Email", {
        position: "top-center",
        type: "warning",
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "light",
      });
      return;
    }

    // Dummy Message
    if (name || email || message) {
      toast.info("Message Sent Successfull", {
        position: "top-right",
        type: "success",
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "light",
      });
      return;
    }

    // Data Submission
    const URL = "http://localhost:5000/post";
    await axios
      .post(URL, formData)
      .then((res) => {
        console.log(res.config.data);
        if (res.status === 200) {
          toast.info(`${res.data.Message}`, {
            position: "top-right",
            type: "success",
            autoClose: 3000,
            closeOnClick: true,
            pauseOnHover: true,
            theme: "light",
          });
        }
      })
      .catch((err) => {
        console.log("This Is The Error", err);
      });
  };

  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={60}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "#FF4500",
        }}
        outerStyle={{
          border: "3px solid #00CED1",
          backgroundColor: "transparent",
        }}
        trailingSpeed={12}
        clickables={["button", "a", ".testimonial-card", ".card-style"]}
      />

      <div className="container-main">
        <div id="home" className="main-section">
          <Container>
            <Row className="pt-5">
              <Col>
                <h3 className="sub-name">Hello, I'am</h3>
                {/* <h1 className="main-name">Abu Shibly</h1> */}
                <div class="dropping-texts main-name mb-5">
                  <div>Mohamed</div>
                  <div>Abubacker</div>
                  <div>Shibly</div>
                </div>
                <div className="mt-4 animate-button">
                  <a href="#footer" className="button12">
                    <em> </em>
                    <span>Get In Touch</span>
                  </a>
                </div>
                <div className="mt-5 rounded d-flex flex-column align-items-center align-items-sm-start">
                  <img
                    className="rounded img-fluid "
                    src={Codingimg}
                    alt="Coding-img"
                    width={300}
                  />
                </div>
              </Col>
              <Col className="d-flex justify-content-center align-items-center">
                <img src={Profile} alt="My-Profile" width={300} />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="strength-section">
          <Container className="py-5">
            <Row className="fadein d-flex flex-column flex-md-row gap-3 my-3">
              <p className="section-title mb-4">MY STRENGHTS</p>
              <Col>
                <h4 className="text-white fs-3">Ambition</h4>
                <p className="text-white m-0 inner-para">
                  I am focused on mastering both front-end and back-end
                  frameworks like React and Node.js. I aim to become a master in
                  full stack development and continuously learn more about the
                  field.
                </p>
              </Col>
              <Col>
                <h4 className="text-white fs-3">Precision</h4>
                <p className="text-white m-0 inner-para">
                  I prioritize precision through accurate, well-documented
                  coding and comprehensive testing strategies. These practices
                  ensure I deliver precise and reliable solutions, showcasing my
                  commitment to quality and excellence.
                </p>
              </Col>
              <Col>
                <h4 className="text-white fs-3">Assertive</h4>
                <p className="text-white m-0 inner-para">
                  In my professional journey, I prioritize assertiveness for
                  effective collaboration, confidently expressing diverse
                  viewpoints and maintaining clear boundaries.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <div id="about" className="about-section">
          <Container className="py-5">
            <p className="fadein section-title mb-4">A BIT ABOUT ME</p>
            <h3 className="fadein sub-name mb-4">Who Am I?</h3>
            <p className="fadein m-0">
              Hi I'm Mohamed Abubacker Shibly. Highly skilled MERN Stack Web
              Developer with extensive experience in designing, developing, and
              deploying web applications. Proficient in both front-end and
              back-end technologies, with expertise in creating intuitive user
              interfaces and robust server-side architectures.Demonstrated
              ability to use modern JavaScript frameworks for responsive and
              scalable applications. Strong collaborator in cross-functional
              teams, dedicated to staying updated with industry trends to
              enhance development practices and deliver innovative solutions.
            </p>
            <Row className="fadein d-flex flex-column flex-md-row gap-3 mx-3 my-5 align-items-center">
              <Col
                xs={6}
                md
                style={{ color: "#D03813" }}
                id="card-animate"
                className="card-style py-5"
              >
                <div>
                  <FaHtml5 className="fs-1" />
                </div>
                <p className="lang-name">HTML</p>
              </Col>
              <Col
                xs={6}
                md
                style={{ color: "#254BDD" }}
                id="card-animate"
                className="card-style py-5 "
              >
                <div>
                  <FaCss3Alt className="fs-1" />
                </div>
                <p className="lang-name">CSS</p>
              </Col>
              <Col
                xs={6}
                md
                style={{ color: "#F7D724" }}
                id="card-animate"
                className="card-style py-5 "
              >
                <div>
                  <SiJavascript className="fs-1" />
                </div>
                <p className="lang-name">Javascript</p>
              </Col>
              <Col
                xs={6}
                md
                style={{ color: "#04D8F7" }}
                id="card-animate"
                className="card-style py-5 "
              >
                <div>
                  <SiReact className="fs-1" />
                </div>
                <p className="lang-name">React</p>
              </Col>
              <Col
                xs={6}
                md
                style={{ color: "#509941" }}
                id="card-animate"
                className="card-style py-5"
              >
                <div>
                  <FaNodeJs className="fs-1" />
                </div>
                <p className="lang-name">NodeJS</p>
              </Col>
              <Col
                xs={6}
                md
                style={{ color: "#5CAF4D" }}
                id="card-animate"
                className="card-style py-5"
              >
                <div>
                  <SiMongodb className="fs-1" />
                </div>
                <p className="lang-name">MongoDB</p>
              </Col>
            </Row>

            <Row className="fadein d-flex justify-content-center">
              <Col className="col-9 resume-download text-center py-4">
                <h3 className="text-white">
                  Click Here To Download My Resume..!
                </h3>
                <div className="mt-4 download-btn">
                  <a target="_blank" href={Resume} className="btnfos btnfos-1">
                    <svg>
                      <rect
                        x="0"
                        y="0"
                        fill="none"
                        width="100%"
                        height="100%"
                      />
                    </svg>
                    Download
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div id="education" className="education-section">
          <Container className="py-5">
            <Row className="d-flex flex-column flex-md-row education-inner">
              <Col className="fadein d-flex flex-column gap-4 mb-5">
                <p className="section-title m-0">Education</p>
                <div className="pe-5">
                  <h4 className="text-white fs-3">
                    St.Thomas Mat Hr Sec School
                  </h4>
                  <p className="text-white m-0 inner-para">
                    I completed my high school education at St. Thomas Matric
                    Higher Secondary School in 2020, achieving 61.8% marks. This
                    milestone reflects my dedication and consistent effort. My
                    education has equipped me with a solid foundation and the
                    skills needed to pursue further opportunities.
                  </p>
                </div>
                <div className="pe-5">
                  <h4 className="text-white fs-3">The New College</h4>
                  <p className="text-white m-0 inner-para">
                    I completed my Bachelor's degree at The New College in 2023,
                    achieving 70.22% marks. This accomplishment highlights my
                    commitment to academic excellence and continuous
                    improvement. My higher education has provided me with
                    valuable knowledge and skills, preparing me for future
                    challenges and opportunities.
                  </p>
                </div>
              </Col>
              <Col className="fadein d-flex flex-column gap-4 mb-5">
                <p className="section-title m-0">Courses</p>
                <div className="pe-5">
                  <h4 className="text-white fs-3">Guvi</h4>
                  <p className="text-white m-0 inner-para">
                    I completed my JavaScript course at GUVI in 2023. This
                    achievement showcases my proficiency in modern web
                    development and my dedication to expanding my technical
                    skills. The course has provided me with practical experience
                    and a solid foundation in JavaScript, enhancing my readiness
                    for future projects.
                  </p>
                </div>
                <div className="pe-5">
                  <h4 className="text-white fs-3">Ability Coding</h4>
                  <p className="text-white m-0 inner-para">
                    I completed my FullStack Bootcamp at Ability Coding in 2024.
                    This intensive program honed my skills in both front-end and
                    back-end development, reflecting my commitment to mastering
                    comprehensive coding techniques. The bootcamp provided me
                    with hands-on experience and a robust understanding of
                    FullStack development, preparing me for diverse
                    technological challenges.
                  </p>
                </div>
              </Col>
            </Row>
            <Container className="fadein testimonial-section">
              <h3 className="sub-name text-white mt-5 mb-4 text-center">
                What Mentors Say
              </h3>
              <div className="d-flex flex-column flex-md-row gap-4 justify-content-center align-items-center">
                <div className="testimonial-card">
                  <span class="layer"></span>
                  <div className="testi-top z-3">
                    <ImQuotesLeft className="quote fs-2 mb-3 z-3" />
                    <p className="testi-para mb-3 z-3">
                      Your proficiency in front-end and back-end development
                      using essential technologies has been instrumental in our
                      projects. Your collaborative nature and adaptability make
                      you an indispensable team member. Your efforts are deeply
                      valued. 🌟
                    </p>
                  </div>
                  <div className="testi-bottom z-3">
                    <img
                      src={Testimg}
                      alt="Testimonial-img"
                      width={50}
                      height={50}
                      className="rounded-circle bg-dark mb-3 z-3"
                    />
                    <p className="testi-name section-title m-0 z-3">
                      Santhanam
                    </p>
                    <p className="testi-pos m-0 z-3">Course Mentor</p>
                  </div>
                </div>
                <div className="testimonial-card">
                  <div class="layer"></div>
                  <div className="testi-top z-3">
                    <ImQuotesLeft className="quote fs-2 mb-3 z-3" />
                    <p className="testi-para mb-3 z-3">
                      Your expertise in front-end and back-end development with
                      key technologies has greatly contributed to our projects.
                      Your problem-solving abilities and clean coding practices
                      are invaluable. Your teamwork, adaptability, and overall
                      contributions are highly appreciated. 😇
                    </p>
                  </div>
                  <div className="testi-bottom z-3">
                    <img
                      src={Testimg2}
                      alt="Testimonial-img"
                      width={50}
                      height={50}
                      className="rounded-circle bg-dark mb-3 z-3"
                    />
                    <p className="testi-name section-title m-0 z-3">Sathik</p>
                    <p className="testi-pos m-0 z-3">Course Mentor</p>
                  </div>
                </div>
                <div className="testimonial-card">
                  <div class="layer"></div>
                  <div className="testi-top z-3">
                    <ImQuotesLeft className="quote fs-2 mb-3 z-3" />
                    <p className="testi-para mb-3 z-3">
                      Your adeptness in front-end and back-end development using
                      essential technologies has significantly enriched our
                      projects. Your collaborative spirit and adaptability are
                      highly valued attributes. Your contributions are greatly
                      appreciated. 👨‍🏫
                    </p>
                  </div>
                  <div className="testi-bottom z-3">
                    <img
                      src={Testimg3}
                      alt="Testimonial-img"
                      width={50}
                      height={50}
                      className="rounded-circle bg-dark mb-3 z-3"
                    />
                    <p className="testi-name section-title m-0 z-3">Akthar</p>
                    <p className="testi-pos m-0 z-3">Professor</p>
                  </div>
                </div>
              </div>
            </Container>
          </Container>
        </div>
        <div id="project" className="project-section">
          <Container className="py-5">
            <div className="projects">
              <h3 className="fadein sub-name text-dark">My Works</h3>
              <Row className="fadein projects-row mt-3 mx-0">
                <Col className="d-flex flex-column flex-md-row align-items-center gap-3">
                  <a
                    className="text-decoration-none "
                    href="https://github.com/AbuShibly/FullStack-WebApp.git"
                    target="_blank"
                  >
                    <Card
                      style={{
                        width: "18rem",
                        height: "20rem",
                        backgroundColor: "#272E30",
                        color: "white",
                      }}
                    >
                      <Card.Img
                        variant="top"
                        className="card-img"
                        src={Crudimg}
                      />
                      <Card.Body>
                        <Card.Text>Web App</Card.Text>
                        <Card.Title>FullStack-Crud</Card.Title>
                      </Card.Body>
                    </Card>
                  </a>
                  <a
                    className="text-decoration-none"
                    href="#"
                    // target="_blank"
                  >
                    <Card
                      style={{
                        width: "18rem",
                        height: "20rem",
                        backgroundColor: "#272E30",
                        color: "white",
                      }}
                    >
                      <Card.Img
                        variant="top"
                        className="card-img"
                        src={Techimg}
                      />
                      <Card.Body>
                        <Card.Text>Web App</Card.Text>
                        <Card.Title>Vintage Tech</Card.Title>
                      </Card.Body>
                      <span class="blinking">Progress </span>
                    </Card>
                  </a>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div id="footer" className="footer-section">
          <Container className="py-5">
            <div className="fadein d-flex flex-column flex-md-row">
              <div className="personal-info bg-dark py-5 px-4">
                <h3 className="text-white">GET IN TOUCH</h3>
                <div className="phone pt-4">
                  <p className="text-white m-0 inner-para">Phone</p>
                  <p className="m-0 pt-1">
                    <a href="tel:+91 6383322643">+91 63833 22643</a>
                  </p>
                </div>
                <div className="mail py-4">
                  <p className="text-white m-0 inner-para">Drop Your Message</p>
                  <p className="m-0 pt-1">
                    <a href="mailto:shibly.uniq@gmail.com">
                      Shibly.uniq@gmail.com
                    </a>
                  </p>
                </div>
                <div className="d-flex gap-3">
                  <a target="_blank" href="https://github.com/AbuShibly">
                    <SiGithub className="social-icon fs-4" />
                  </a>
                  <a
                    target="_blank"
                    href="http://www.linkedin.com/in/abushibly"
                  >
                    <ImLinkedin className="social-icon fs-4" />
                  </a>
                </div>
              </div>
              <div className="contact-form bg-white">
                <Form className="p-5">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Enter Your Name :"
                    className="mb-4"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Enter Name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </FloatingLabel>

                  <FloatingLabel
                    controlId="floatingInput"
                    label="Enter Your Email :"
                    className="mb-4"
                  >
                    <Form.Control
                      type="email"
                      placeholder="Enter Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FloatingLabel>

                  <FloatingLabel
                    controlId="floatingInput"
                    label="Enter Your Message :"
                    className="mb-4"
                  >
                    <Form.Control
                      as="textarea"
                      placeholder="Enter Message"
                      rows={3}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </FloatingLabel>

                  <div className="mt-4">
                    <button onClick={formSubmission} className="footer-button">
                      <span className="btn-text">Submit</span>
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </Container>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Home;

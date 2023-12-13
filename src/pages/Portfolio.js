import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import { Icon } from "@iconify/react";
import { ReactComponent as Graphic } from "../images/svg/graphicDesigning1.svg";
import { ReactComponent as WebDevelopment } from "../images/svg/webDevelopment1.svg";
import { ReactComponent as WebDesign } from "../images/svg/web design.svg";
import { ReactComponent as UiUX } from "../images/svg/uiux.svg";
import { Link, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import "../scss/Portfolio.scss";

const cardsData = [
  {
    id: 1,
    title: "Grocered",
    image: "/images/works/grocered.png",
    link: "https://grocered.in/",
  },
  {
    id: 2,
    title: "Archmary Studio",
    image: "/images/works/archmary.png",
    link: "https://archmary.com/",
  },
  {
    id: 3,
    title: "Nexus.ai",
    image: "/images/works/Nexusai.png",
    link: "#",
  },
];

export const Myportfolio = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Attach the handleScroll function to the window's scroll event
  window.addEventListener("scroll", handleScroll);

  const navigate = useNavigate();

  const handleAllWorksClick = () => {
    navigate("/all-works");
  };
  const handleTestimonialClick = () => {
    navigate("/all-testimonial");
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume/SayanResume.pdf";
    link.download = "SayanResume.pdf";
    link.click();
  };

  return (
    <>
      <Header />
      <div className="firrst" id="section-1">
        <div className="infoDiv">
          <div className="hey">Hey There 🙋‍♂️ I am</div>
          <h2 className="myName">Sayan Sarkar</h2>
          <div className="typewriting">
            <p>a</p>
            <div className="type">
              <Typewriter
                options={{
                  strings: [
                    "Web Designer",
                    "Web Developer",
                    "UI/UX designer",
                    "Graphic Designer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
          <div className="bio">
            Passionate web developer, designer, and UI/UX enthusiast, creating
            visually stunning and user-centric digital experiences.
          </div>
          <div className="btn">
            <button onClick={downloadResume}>Download CV</button>
          </div>
          <div className="connecSocialMedia">
            <div className="connect">Connect With Me</div>
            <div className="socialmediaIcons">
              <a
                href="https://www.instagram.com/sayansarkarrr/"
                target="_blank"
                rel="noreferrer "
              >
                <div className="Instagram icon">
                  <Icon icon="skill-icons:instagram" />
                </div>
              </a>
              <a
                href="https://www.facebook.com/sayan.sarkar.9634340/"
                target="_blank"
                rel="noreferrer "
              >
                <div className="Facebook icon">
                  <Icon icon="devicon:facebook" />
                </div>
              </a>
              <a
                href="https://twitter.com/CoderSledge?t=QnFLicjlEhszlHSafTYQlQ&s=09"
                target="_blank"
                rel="noreferrer"
              >
                <div className="Twitter icon">
                  <Icon icon="devicon:twitter" />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/sayansarkar002/"
                target="_blank"
                rel="noreferrer "
              >
                <div className="Linkedin icon">
                  <Icon icon="devicon:linkedin" />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="homeImg">
          <img src="../images/pics/software.svg" alt="" />
        </div>
      </div>

      <div className="aboutInfo" id="section-2">
        <div className="about">
          <div className="aboutName">About Me</div>
          <div className="Line"></div>
        </div>

        <div className="h2">Skills I have</div>
        <div className="aboutBio">
          I am a versatile developer and designer, to transform your ideas into
          captivating digital experiences with a unique blend of technical
          prowess and creative flair.
        </div>

        <div className="experience-skills">
          <div className="container">
            <div className="skill">
              <div className="skillPic">
                <Icon icon="vscode-icons:file-type-html" className="icon" />
              </div>
              <div className="skillName">HTML</div>
            </div>

            <div className="skill">
              <div className="skillPic">
                <Icon icon="vscode-icons:file-type-css" className="icon" />
              </div>
              <div className="skillName">CSS</div>
            </div>

            <div className="skill">
              <div className="skillPic">
                <Icon icon="logos:javascript" className="icon" />
              </div>
              <div className="skillName">Javascript</div>
            </div>

            <div className="skill">
              <div className="skillPic">
                <Icon icon="devicon:react" className="icon" />
              </div>
              <div className="skillName">React.js</div>
            </div>

            <div className="skill">
              <div className="skillPic">
                <Icon icon="devicon:figma" className="icon" />
              </div>
              <div className="skillName">Figma</div>
            </div>

            <div className="skill">
              <div className="skillPic">
                <Icon icon="skill-icons:photoshop" className="icon" />
              </div>
              <div className="skillName">Photoshop</div>
            </div>

            <div className="skill">
              <div className="skillPic">
                <Icon icon="skill-icons:xd" className="icon" />
              </div>
              <div className="skillName">Adobe Xd</div>
            </div>

            <div className="skill">
              <div className="skillPic">
                <Icon icon="devicon:canva" className="icon" />
              </div>
              <div className="skillName">Canva</div>
            </div>
          </div>
        </div>
      </div>

      {/* Service */}

      <div className="servicInfo" id="section-3">
        <div className="serviceName">
          <div className="name">
            <div className="heading">Services</div>
            <div className="Line"></div>
          </div>
          <div className="serviceIprovide">Service I Provide</div>
        </div>

        <div className="services">
          <div className="service">
            <div className="serviceLogo">
              <div className="bg">
                <div className="icon">
                  <Graphic />
                </div>
              </div>
            </div>
            <div className="serviceName">Graphic Design</div>
            <div className="serviceDesc">
              Passionate graphic designer with a flair for creativity,
              delivering visually stunning designs that captivate and inspire.
            </div>
          </div>
          <div className="service">
            <div className="serviceLogo">
              <div className="bg">
                <div className="icon">
                  <WebDevelopment className="fill" />
                </div>
              </div>
            </div>
            <div className="serviceName">Web Development</div>
            <div className="serviceDesc">
              I am a skilled web developer, specializing in creating dynamic and
              visually appealing websites that enhance user experiences.
            </div>
          </div>
          <div className="service">
            <div className="serviceLogo">
              <div className="bg">
                <div className="icon">
                  <UiUX className="fill" />
                </div>
              </div>
            </div>
            <div className="serviceName">UI/UX</div>
            <div className="serviceDesc">
              I am a passionate UI/UX designer, dedicated to creating seamless
              and visually appealing experiences that delight users.
            </div>
          </div>
          <div className="service">
            <div className="serviceLogo">
              <div className="bg">
                <div className="icon">
                  <WebDesign className="fill" />
                </div>
              </div>
            </div>
            <div className="serviceName">Web Designing</div>
            <div className="serviceDesc">
              I am a skilled web designer, creating captivating online
              experiences through intuitive interfaces and visually stunning
              designs.
            </div>
          </div>
        </div>
      </div>

      {/* Projects */}

      <div className="portfolioWorks" id="section-4">
        <div className="portfolioLine">
          <div className="heading">Portfolio</div>
          <div className="Line"></div>
        </div>
        <div className="recentWorks">
          <div className="heading">Recent Works</div>
          <div className="Link">
            <button onClick={handleAllWorksClick} className="butn">
              See All
            </button>
          </div>
        </div>
        <Box sx={{ mt: 4 }}>
          {cardsData.map((card) => (
            <Card key={card.id} sx={{ mt: 4, boxShadow: 1 }}>
              <CardMedia
                component="img"
                height="140"
                image={card.image}
                alt={card.title}
              />

              <div className="flex">
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {card.title}
                  </Typography>
                </CardContent>
                <div className="flex">
                  <Button
                    className="btn"
                    component={Link}
                    to={card.link}
                    target="_blank"
                  >
                    Link
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </Box>
      </div>

      {/* Experience */}

      <div className="experienceInfo" id="section-5">
        <div className="experienceLine">
          <div className="heading">Education & Experience</div>
          <div className="Line"></div>
        </div>

        <div className="experience">
          <div className="heading">My Resume</div>
        </div>

        <div className="experienxes-educations">
          <div className="eachExperience">
            <div className="lineDots"></div>
            <div className="position">
              <div className="flex right">
                <div className="dots"></div>
                <div className="names">
                  <div className="position">Frontend Developer</div>
                  <div className="company">Grocered | Goalpara</div>
                  <div className="years">
                    <div className="date">2021-2022</div>
                  </div>
                  <div className="desc">
                    I am a skilled front-end developer with a focus on creating
                    intuitive and responsive web applications, dedicated to
                    enhancing user experiences at Grocered.
                  </div>
                </div>
              </div>
              <div className="flex left">
                <div className="dots dotleft"></div>
                <div className="names">
                  <div className="position">Web Designer</div>
                  <div className="company">Archmary Studio | Guwahati</div>
                  <div className="years1">
                    <div className="date">Dec 2022 - March 2023</div>
                  </div>
                  <div className="desc justyright">
                    As a skilled web designer, I thrive at Archmary Studio,
                    shaping immersive digital journeys by seamlessly blending
                    aesthetics and user-centered design principles.
                  </div>
                </div>
              </div>
              <div className="flex right">
                <div className="dots"></div>
                <div className="names">
                  <div className="position">
                    Bachelor of Computer Application
                  </div>
                  <div className="company">
                    Assam Down Town University | Guwahati
                  </div>
                  <div className="years">
                    <div className="date">2020-2023</div>
                  </div>
                  <div className="desc">
                    I am a Bachelor of Computer Application graduate from Assam
                    Downtown University, equipped with the knowledge and skills
                    to develop innovative solutions and contribute to the
                    digital realm with my expertise
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial */}

      <div className="testimonialInfo" id="section-6">
        <div className="paddingMargin">
          <div className="heading">
            <div className="name">Testimonial</div>
            <div className="Line"></div>
          </div>
          <div className="clientSay">What Client Say?</div>
          <div className="Link">
            <button className="butn" onClick={handleTestimonialClick}>
              See All
            </button>
          </div>

          <div className="width">
            <div className="box">
              <div className="first">
                <div className="profile">
                  <img
                    src="../images/testimonial/ashiqdey.jpg  "
                    alt="profile"
                  ></img>
                </div>
                <div className="info">
                  <div className="nameStars">
                    <div className="name">
                      Ashiq Dey <p>Software Developer</p>
                    </div>
                    <div className="stars">
                      <Icon icon="emojione:star" />
                      <Icon icon="emojione:star" />
                      <Icon icon="emojione:star" />
                      <Icon icon="emojione:star" />
                      <Icon icon="emojione:star" />
                    </div>
                  </div>
                  <div className="position"></div>
                </div>
              </div>
              <div className="second">
                <div className="feedback">
                  Sayan is an exceptional web developer with an impeccable eye
                  for detail. His expertise in coding and design results in
                  visually stunning and highly functional websites. A true
                  professional who consistently delivers exceptional work.
                  Highly recommended.
                </div>
              </div>
            </div>

            <div className="box">
              <div className="first">
                <div className="profile">
                  <img
                    src="../images/testimonial/archmary.jpg"
                    alt="profile"
                  ></img>
                </div>
                <div className="info">
                  <div className="nameStars">
                    <div className="name">
                      Archmary Studio <p>Architect Designer</p>
                    </div>
                    <div className="stars">
                      <Icon icon="emojione:star" />
                      <Icon icon="emojione:star" />
                      <Icon icon="emojione:star" />
                      <Icon icon="emojione:star" />
                      <Icon icon="emojione:star" />
                    </div>
                  </div>
                  <div className="position"></div>
                </div>
              </div>
              <div className="second">
                <div className="feedback">
                  Thank you for creating an outstanding website for Archmary
                  Studio. Your design captures our brand essence and showcases
                  our portfolio beautifully. The seamless user experience
                  reflects our professionalism and creativity. We appreciate
                  your exceptional work in establishing our strong online
                  presence.
                </div>
              </div>
            </div>
            <div className="box">
              <div className="first">
                <div className="profile">
                  <img
                    src="../images/testimonial/soumik.jpg"
                    alt="profile"
                  ></img>
                </div>
                <div className="info">
                  <div className="nameStars">
                    <div className="name">
                      Soumik Sarkar <p>Engineer</p>
                    </div>
                    <div className="stars">
                      <Icon icon="emojione:star" />
                      <Icon icon="emojione:star" />
                      <Icon icon="emojione:star" />
                      <Icon icon="emojione:star" />
                      <Icon icon="emojione:star" />
                    </div>
                  </div>
                  <div className="position"></div>
                </div>
              </div>
              <div className="second">
                <div className="feedback">
                  I would Like to express my gratitude towards you as you have
                  delivered fabulous work, a logo for my project its sexy but
                  there is a little color problem but thats ok no doubt its
                  perfect.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us */}

      <div className="contactInfo" id="section-7">
        <div className="heading">
          <div className="name">Contact with Me</div>
          <div className="Line"></div>
        </div>

        <div className="haveProject">Have a Project in Mind?</div>

        <div className="contactFormDetails">
          <div className="details">
            <div className="contactForm">
              <div className="container">
                {/* <form action="../api/contact_us.php" method="POST">
                  <div className="inputs">
                    <div className="fullName">
                      <div className="names">
                        <Icon icon="mdi:user-outline" className="icon" />
                        <Icon icon="pepicons-pencil:line-y" className="line" />
                        <input
                          type="text"
                          name="name"
                          className="fname"
                          placeholder="First Name"
                        />
                      </div>
                      <div className="names">
                        <Icon icon="mdi:user-outline" className="icon" />
                        <Icon icon="pepicons-pencil:line-y" className="line" />

                        <input
                          type="text"
                          name="name"
                          className="lname"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="names">
                      <Icon icon="mdi:email-outline" className="icon" />
                      <Icon icon="pepicons-pencil:line-y" className="line" />
                      <input
                        type="email"
                        name="email"
                        className="email"
                        placeholder="Email"
                      />
                    </div>

                    <div className="names">
                      <Icon icon="mdi:phone-outline" className="icon" />
                      <Icon icon="pepicons-pencil:line-y" className="line" />
                      <input
                        type="number"
                        name="number"
                        className="phone"
                        placeholder="Phone No."
                      />
                    </div>
                    <div className="namess">
                      <Icon icon="mdi:message-outline" className="icon" />
                      <Icon icon="pepicons-pencil:line-y" className="line" />
                      <textarea
                        type="text"
                        name="message"
                        className="message"
                        placeholder="Message"
                      />
                    </div>

                    <div className="btn">
                      <button>
                        <span>SUBMIT NOW</span>
                        <Icon
                          icon="ic:baseline-greater-than"
                          className="iconBtn"
                        />
                      </button>
                    </div>
                  </div>
                </form> */}

                <div className="contact">
                  <div className="address box">
                    <div className="icon">
                      <Icon icon="ic:round-home" />
                    </div>
                    <div className="info">
                      <div className="xxcc">
                        <div className="head">Address</div>
                        <div className="infoContact">
                          <a
                            href="https://maps.app.goo.gl/TACxQ7np8SU3aN3dA"
                            target="_blank"
                            rel="noreferrer"
                          >
                            {" "}
                            Abhayapuri, Bongaigaon, Assam, Pin- 783384
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="emailMe box">
                    <div className="icon">
                      <Icon icon="ic:round-phone" />
                    </div>
                    <div className="info">
                      <div className="xxcc">
                        <div className="head">Call Me</div>
                        <div className="infoContact">
                          <a href="tel:8011658412">+91 8011658412</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="phoneNumber box">
                    <div className="icon">
                      <Icon icon="ic:round-email" />
                    </div>
                    <div className="info">
                      <div className="xxcc">
                        <div className="head">Email Me</div>
                        <div className="infoContact">
                          <a href="mailto:sledgecoder@gmail.com">
                            sledgecoder@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      {/* Back to top */}
      <button
        className={`back-to-top-button ${showButton ? "show" : ""}`}
        onClick={scrollToTop}
      >
        <Icon icon="ph:arrow-up-bold" className="backToTop" />
      </button>
    </>
  );
};

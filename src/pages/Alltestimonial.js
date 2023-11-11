import React from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import "../scss/Alltestimonial.scss";

export const Testimonial = () => {
  const navigate = useNavigate();

  const handleTestimonialClick = () => {
    navigate("/home");
  };
  return (
    <>
      <div className="testimonialInfos">
        <div className="header" onClick={handleTestimonialClick}>
          <Icon icon="maki:arrow" className="arrow" />
        </div>
        <div className="heading">
          <div className="name">All Testimonial</div>
          <div className="Line"></div>
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
                Sayan is an exceptional web developer with an impeccable eye for
                detail. His expertise in coding and design results in visually
                stunning and highly functional websites. A true professional who
                consistently delivers exceptional work. Highly recommended.
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
                Studio. Your design captures our brand essence and showcases our
                portfolio beautifully. The seamless user experience reflects our
                professionalism and creativity. We appreciate your exceptional
                work in establishing our strong online presence.
              </div>
            </div>
          </div>
          <div className="box">
            <div className="first">
              <div className="profile">
                <img src="../images/testimonial/soumik.jpg" alt="profile"></img>
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
          <div className="box">
            <div className="first">
              <div className="profile">
                <img
                  src="../images/testimonial/swagata.jpeg"
                  alt="profile"
                ></img>
              </div>
              <div className="info">
                <div className="nameStars">
                  <div className="name">
                    Swagata Sarkar <p>Pharmacist</p>
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
                Thank you for you exceptional work and the website that you have
                developed for my startup its perfect. Thank You❤️❤️
              </div>
            </div>
          </div>

          <div className="box">
            <div className="first">
              <div className="profile">
                <img
                  src="../images/testimonial/khusbhu.jpg"
                  alt="profile"
                ></img>
              </div>
              <div className="info">
                <div className="nameStars">
                  <div className="name">
                    Khusbhu Sultana <p>Makeup Artist</p>
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
                I wanted to express my gratitude for your help...I really
                appreciate your work... Thank you so much for the excellent
                work...🌸
              </div>
            </div>
          </div>

          <div className="box">
            <div className="first">
              <div className="profile">
                <img src="../images/testimonial/tanzim.jpg" alt="profile"></img>
              </div>
              <div className="info">
                <div className="nameStars">
                  <div className="name">
                    Ariyandesigns <p>Graphic Designer</p>
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
                I wanted to thank you from the bottom of my heart for the
                fantastic website you made for my graphic design portfolio. My
                expectations were surpassed by the use and appealing design.
                Your skill and professionalism deserve the highest praise. I
                appreciate you realising my vision!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

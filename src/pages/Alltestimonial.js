// import React from "react";
// import { Marquee } from "@/components/";
// import { Icon } from "@iconify/react";
// import { useNavigate } from "react-router-dom";
// import "../scss/Alltestimonial.scss";

// const testimonialData = [
//   {
//     name: "Ashiq Dey",
//     role: "Software Developer",
//     stars: 5,
//     feedback:
//       "Sayan is an exceptional web developer with an impeccable eye for detail. His expertise in coding and design results in visually stunning and highly functional websites. A true professional who consistently delivers exceptional work. Highly recommended.",
//     imageSrc: "../images/testimonial/ashiqdey.jpg",
//   },
//   {
//     name: "Archmary Studio",
//     role: "Architect Designer",
//     stars: 5,
//     feedback:
//       "Thank you for creating an outstanding website for Archmary Studio. Your design captures our brand essence and showcases our portfolio beautifully. The seamless user experience reflects our professionalism and creativity. We appreciate your exceptional work in establishing our strong online presence.",
//     imageSrc: "../images/testimonial/archmary.jpg",
//   },
//   {
//     name: "Soumik Sarkar",
//     role: "Engineer",
//     stars: 5,
//     feedback:
//       "I would like to express my gratitude towards you as you have delivered fabulous work, a logo for my project. It's great, but there is a little color problem, but that's okay, no doubt it's perfect.",
//     imageSrc: "../images/testimonial/soumik.jpg",
//   },
//   {
//     name: "Swagata Sarkar",
//     role: "Pharmacist",
//     stars: 5,
//     feedback:
//       "Thank you for your exceptional work and the website that you have developed for my startup. It's perfect. Thank You ❤️❤️",
//     imageSrc: "../images/testimonial/swagata.jpeg",
//   },
//   {
//     name: "Khusbhu Sultana",
//     role: "Makeup Artist",
//     stars: 5,
//     feedback:
//       "I wanted to express my gratitude for your help. I really appreciate your work. Thank you so much for the excellent work... 🌸",
//     imageSrc: "../images/testimonial/khusbhu.jpg",
//   },
//   {
//     name: "Ariyandesigns",
//     role: "Graphic Designer",
//     stars: 5,
//     feedback:
//       "I wanted to thank you from the bottom of my heart for the fantastic website you made for my graphic design portfolio. My expectations were surpassed by the use and appealing design. Your skill and professionalism deserve the highest praise. I appreciate you realizing my vision!",
//     imageSrc: "../images/testimonial/tanzim.jpg",
//   },
// ];

// export const Testimonial = () => {
//   const navigate = useNavigate();

//   const handleTestimonialClick = () => {
//     navigate("/home");
//   };

//   return (
//     <div className="testimonialInfos">
//       <div className="header" onClick={handleTestimonialClick}>
//         <Icon icon="maki:arrow" className="arrow" />
//       </div>
//       <div className="heading">
//         <div className="name">All Testimonial</div>
//         <div className="Line"></div>
//       </div>
//       <Marquee vertical repeat={3} className="marquee-container">
//         {testimonialData.map((testimonial, index) => (
//           <div key={index} className="marquee-item">
//             <div className="box">
//               <div className="first">
//                 <div className="profile">
//                   <img
//                     src={testimonial.imageSrc}
//                     alt="profile"
//                     className="profile-img"
//                   />
//                 </div>
//                 <div className="info">
//                   <div className="nameStars">
//                     <div className="name">
//                       {testimonial.name} <p>{testimonial.role}</p>
//                     </div>
//                     <div className="stars">
//                       {Array.from({ length: testimonial.stars }, (_, i) => (
//                         <Icon key={i} icon="emojione:star" />
//                       ))}
//                     </div>
//                   </div>
//                   <div className="position"></div>
//                 </div>
//               </div>
//               <div className="second">
//                 <div className="feedback">{testimonial.feedback}</div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Marquee>
//     </div>
//   );
// };

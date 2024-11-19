import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Icon } from "@iconify/react";

import "../scss/Allworks.scss";

const cardsData = [
  {
    id: 1,
    title: "HR Management System",
    image: "../images/works/hrms.png",
    link: "",
  },
  {
    id: 2,
    title: "Typing Website",
    image: "/images/works/TypingWebsite.png",
    link: "https://typing-test-app-2d074.web.app",
  },
  {
    id: 3,
    title: "CraneBuffer Calculation",
    image: "../images/works/cranebuffer.png",
    link: "https://calculation.cranebuffer.com/",
  },
  {
    id: 4,
    title: "VK Car Repo System",
    image: "../images/works/Vkcarrepo.png",
    link: "",
  },
  {
    id: 5,
    title: "Nexusai",
    image: "../images/works/Nexusai.png",
    link: "https://nexusai-two.vercel.app/",
  },
  {
    id: 6,
    title: "Wedding Site",
    image: "../images/works/wedding.png",
    link: "https://weeding-site-prw2.vercel.app/",
  },
  {
    id: 7,
    title: "Grocered",
    image: "../images/works/grocered.png",
    link: "https://grocered.in/",
  },
  {
    id: 8,
    title: "Google Mapr",
    image: "../images/works/googlemapr.png",
    link: "https://googlemapr.netlify.app/",
  },
  {
    id: 9,
    title: "Joke Generator",
    image: "../images/works/jokes.png",
    link: "https://jokes-generators.netlify.app/",
  },
  {
    id: 10,
    title: "Todo List",
    image: "../images/works/Todolist.png",
    link: "https://todolist-sayanchandrasarkar.vercel.app/",
  },
  {
    id: 11,
    title: "Loan Calculator",
    image: "../images/works/loancalculator.png",
    link: "https://aloancalculator.netlify.app/",
  },
  {
    id: 12,
    title: "Music Player",
    image: "../images/works/musicplayer.png",
    link: "https://musiccally.netlify.app/",
  },
  // {
  //   id: 13,
  //   title: "Logistic Tracking System",
  //   image: "../images/works/logistic.jpg",
  //   link: "#",
  // },
];

export const AllWorksPage = () => {
  const navigate = useNavigate();

  const handleAllWorksClick = () => {
    navigate("/home");
  };
  return (
    <>
      <div className="allWorksInfo">
        <div className="header" onClick={handleAllWorksClick}>
          <Icon icon="maki:arrow" className="arrow" />
        </div>
        <div className="heading">
          <div className="name">All Works</div>
          <div className="Line"></div>
        </div>
        <div className="container">
          <Box sx={{ mt: 4 }}>
            {cardsData.map((card) => (
              <Card key={card.id} sx={{ mt: 4, boxShadow: 1 }}>
                <CardMedia
                  component="img"
                  heght="140"
                  image={card.image}
                  alt={card.title}
                />

                <div className="flex">
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {card.title}
                    </Typography>
                  </CardContent>
                  <div className="flex">
                    <Button
                      className="btn"
                      component={Link}
                      to={card.link}
                      target="_blank"
                      disabled={!card.link}
                    >
                      Link
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </Box>
        </div>
      </div>
    </>
  );
};

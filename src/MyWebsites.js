import blanche from "../src/assets/website-images/blanche.png";

const websites = [
  {
    id: 1,
    name: "Blanche Hair Salon",
    type: "Salon & Beauty",
    category: "salon-beauty",
    description:
      "A modern and elegant website for a hair salon, featuring a sleek design and easy navigation.",
    image: blanche,
    link: "https://blanche-hair-salon.netlify.app/",
    location: "Freiburg, Germany",
    tags: ["React", "Responsive", "Booking System", "CSS", "JavaScript"],
    latest:true,
    live_demo:"https://blanche-hair-saloon.netlify.app/",
  },
  {
    id: 2,
    name: "Another Website",
    type: "Other",
    category: "other",
    description: "A simple and clean website for a small business.",
    image: null,
    link: "https://another-website.netlify.app/",
    location: "Berlin, Germany",
    tags: ["React","HTML", "CSS", "JavaScript", "Responsive"],
    latest:false,
    live_demo:"https://another-website.netlify.app/",
  },
];

export default websites;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { urlFor, client } from "../../client";
import { images } from "../../constants";

// const abouts = [
//   {
//     title: "UI/UX Design",
//     description: "I design beautiful interfaces",
//     imgUrl: images.about01,
//   },

//   {
//     title: "Web Development",
//     description: "I build beautiful websites",
//     imgUrl: images.about02,
//   },

//   {
//     title: "Mobile Development",
//     description: "I build beautiful apps",
//     imgUrl: images.about03,
//   },

//   {
//     title: "Branding",
//     description: "I build beautiful brands",
//     imgUrl: images.about04,
//   },

//   {
//     title: "Digital Marketing",
//     description: "I build beautiful campaigns",
//     imgUrl: images.about01,
//   },
// ];

const About = () => {
  // Using sanity.io
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    // Fetch data from sanity.io and set it to the state (abouts)
    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        I Know that <span>Great Dev</span> <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

// export default About;

// Using high level component
// --------------------------
export default AppWrap(About, "about");
// MotionWrap(About, "app__about"),
// "about"
// "app__whitebg"
// );

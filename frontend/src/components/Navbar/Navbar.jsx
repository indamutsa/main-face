import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

// All the images that we are going to use in the website
import { images } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    // We are going to nav tag to contain the logo and the links that will be useful for the user to navigate through the website
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      {/* This is unordered list will loop through the navbar links that we need */}
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            {/* We are preceding item with # to enable navigation based on id that goes to specified section by a click */}
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      {/* A mobile navigation bar */}
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {/* This is the mobile navigation bar that will be visible on mobile devices */}
        {toggle && (
          // We are going to use framer motion to animate the mobile navigation bar
          <motion.div
            // The sliding length of the mobile navigation bar
            whileInView={{ x: [300, 0] }}
            // The transition of the mobile navigation bar
            transition={{ duration: 0.85, ease: "easeIn" }}
          >
            <HiX onClick={() => setToggle(false)} />

            {/* This is unordered list will loop through the navbar links that we need */}
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

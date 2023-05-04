import React, { useState, useEffect } from "react";
import { ImMenu } from "react-icons/im";

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  return (
    <div className={isSticky ? "Nav-css change" : "Nav-css"}>
      <ImMenu />
      <div className="Logo">
        <img src="logo.jpg" />
      </div>
      <div style={{ color: "blue" }}> address</div>
    </div>
  );
};

export default Navbar;

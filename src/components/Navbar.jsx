import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close, mylogo2 } from "../assets";
const Navbar = () => {
  const [active, setActive] = useState("");
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={mylogo2}
            alt="logo"
            className="w-9 h-9 object-contain "
            style={{ width: "20%" }}
          />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Khouloud <span>|Javascript</span>
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

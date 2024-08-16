import React from "react";
import { FaLinkedin, FaGithub, FaXTwitter, FaInstagram } from "react-icons/fa6";
import SiteLogo from "../../assets/SiteLogo.png";

const Navbar = () => {
  return (
    <nav className="mb-18 flex items-center justify-between py-2">
      <div className="flex flex-shrink-0 p-2 items-center">
        <img
          className="mx-2 w-20"
          src={SiteLogo}
          alt="Harminder-Singh-Saini"
          width="150px"
          height="150px"
        ></img>
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://github.com/harmindersaini94">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/harmindersaini94/">
          <FaLinkedin />
        </a>
        <a href="https://x.com/hssaini_11">
          <FaXTwitter />
        </a>
        <a href="https://www.instagram.com/hssaini.11/">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

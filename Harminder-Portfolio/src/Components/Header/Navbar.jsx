import React from 'react'
import {Link} from 'react-router-dom'
import { FaLinkedin, FaGithub, FaXTwitter, FaInstagram   } from "react-icons/fa6";
import logoPortfolio from '../../assets/portofolio-Logo.jpg'
import porLogo from '../../assets/porLogo.png'
import SiteLogo from '../../assets/SiteLogo.png'
import { FaHome } from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className='mb-18 flex items-center justify-between py-2'>
        <div className='flex flex-shrink-0 p-2 items-center'>
            <img className='mx-2 w-20' src={SiteLogo} alt='Harminder-Singh-Saini' width='150px' height='150px'></img>
        </div>

        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <FaGithub />
        <FaLinkedin />
        <FaXTwitter />
        <FaInstagram />
        </div>

        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <FaGithub />
        <FaLinkedin />
        <FaXTwitter />
        <FaInstagram />
        </div>
            {/* <Link to="/">HSS</Link>
            <Link to="https://github.com/harmindersaini94"><FaGithub /></Link>
            <Link to="https://www.linkedin.com/in/harmindersaini94/"><FaLinkedin /></Link>
            <Link to="https://x.com/i/flow/login"><FaXTwitter /></Link>
            <Link to="https://www.instagram.com/"><FaInstagram /></Link> */}

    </nav>
  )
}

export default Navbar
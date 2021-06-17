import * as React from "react"
import { Link } from "gatsby"

import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';

const Layout = ({ children }) => {
  return (
    <div className="global-wrapper">
      <header class="header">
        <div class="icons">
          
          <a href="#">
            <GiHamburgerMenu id="header-hamburger-icon" size="1.5em"/>
          </a>
            
          <a href="https://github.com/DanStevensonCO/" target="_blank">
            <AiOutlineGithub id="header-github-icon" size="1.5em" />
          </a>

          <a href="https://twitter.com/DanStevensonCO/" target="_blank">
            <FiTwitter id="header-twitter-icon" size="1.5em" />
          </a>

          <a href="https://linkedin.com/in/DanStevensonCO/" target="_blank">
            <AiOutlineLinkedin id="header-linkedin-icon" size="1.5em" />
          </a>
        </div>
        <h1>Dan Stevenson</h1>
      </header>
      <main class="content">{children}</main>
    </div>
  )
}

export default Layout

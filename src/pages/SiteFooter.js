// src/pages/SiteFooter.js
import React from 'react'
import { NavLink } from 'react-router-dom'
import Spacer from '../app/images/spacer.png'

const SiteFooter = () => {

  // ending copyright year is current year
  const GetCurrentYear = () => {
    const currDate = new Date();
    const currYear = currDate.getFullYear();
    return (
      <span><strong>{currYear}</strong> </span>
    );
  }

  return (
    <div>
      <br />
      <footer className="footer has-background-link-light">
        <div className="content has-text-centered">
            <p>
              <strong>Inspirational Movie Quotes</strong><br />
              Yet <a href="http://www.ryanhunter.ca/code/">another</a> <strong>demo project</strong> by <a href="http://www.ryanhunter.ca/">Ryan Hunter</a>, demonstrating React.js, dotenv, <a href="https://reacttraining.com/react-router/">React Router</a>, Google Maps <a href="https://developers.google.com/maps/documentation">API</a>, <a href="https://fontawesome.com/">FontAwesome</a> 5 fonts, and the fantastic <a href="https://bulma.io/">Bulma</a> CSS framework.
              <strong>Filler text</strong> kindly supplied by <a href="https://pirateipsum.me/">PirateIpsum.me</a>. Color, and basic web info references supplied by <a href="https://www.colorhexa.com/">ColorHexa</a>, Mozilla Developer Network - <a href="https://developer.mozilla.org/en-US/docs/Web">MDN</a> and <a href="https://www.w3schools.com/">W3Schools</a>.
              <br />
              This source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
              <br />Copyright &copy; 2015 - <GetCurrentYear /> | All rights reserved.
            </p>

            <p>
              <NavLink to="/">Home</NavLink>	<img src={Spacer} alt="" />
              <NavLink to="/services">Services</NavLink> <img src={Spacer} alt="" />
              <NavLink to="/about">About</NavLink> <img src={Spacer} alt="" />
              <NavLink to="/resources">Resources</NavLink>  <img src={Spacer} alt="" />
              <NavLink to="/contact">Contact</NavLink>
            </p>
        </div>
      </footer>
    </div>
  )
}

export default SiteFooter;
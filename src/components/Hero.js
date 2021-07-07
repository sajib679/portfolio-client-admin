import React from "react";
import SocialLinks from "../constants/socialLinks";
import image from "../assets/hero-img.jpg";
const Hero = () => {
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <img alt="" src={image} data-aos="fade-down" className="hero-img " />
        <article
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          className="hero-info "
        >
          {/* animated bounceInLeft animated bounceInDown */}
          <div>
            <h1 className="textFocusIn"> I'm Shajib</h1>
            <h4> Web & Mobile Application Developer</h4>
            <h4> Digital Marketer</h4>
            <h4>
              Founder&nbsp;
              <a href="https://www.facebook.com/dreampsychology">
                Dream Psychology
              </a>
              &nbsp;&&nbsp;
              <a href="https://www.facebook.com/techpartner360">TechPartner</a>
            </h4>

            <a href="tel:01710588202" className="btn">
              Call Now
            </a>
            <SocialLinks />
          </div>
        </article>
      </div>
    </header>
  );
};

export default Hero;

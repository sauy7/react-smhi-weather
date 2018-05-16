import React from 'react';
import MoreSectionHeader from "../MoreSectionHeader/MoreSectionHeader";
import css from './About.css';

const About = () => {
  return (
    <section>
      <MoreSectionHeader name="About" />
      <div className={css.About}>
        <p>About this application...</p>
        <p>Credits:</p>
        <ul>
          <li>SMHI</li>
          <li>Sunrise Sunset</li>
          <li>Open Street Maps</li>
        </ul>
      </div>
    </section>
  );
};

export default About;

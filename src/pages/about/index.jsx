import React from 'react';
import Link from 'gatsby-link';

import ContentPage from '../../components/content-page';
import Meta from '../../components/meta';
import OutboundLink from '../../components/outbound-link';
import Wrapper from '../../components/wrapper';

import ahmSrc from './img/ahm.png';
import inlightSrc from './img/inlight.png';
import lighthouseSrc from './img/lighthouse.png';


import styles from './styles.module.css';

const About = ({ location }) => (
  <ContentPage>
    <Meta title="About" location={location} />
    <Wrapper>
      <div className={styles.about}>
        <section className={styles.intro}>
          <h1>Hello world.</h1>
          <p>I’m a freelance software developer and geomatics engineer currently situated in Berlin, Germany. I’ve been in the industry since 2005.</p>
          <p>I studied Computer Science and Geomatic Engineering at The  University of Melbourne.</p>

          <p>On obtaining my degree, I became facinated by the world of underwater mapping and worked on one of first detailed underwater mapping expeditions in coastal Australia.</p>

          <p>After that I worked for the Australian Federal Government where I was responsible for the maintenance of the largest marine samples datasets in Australia.</p>

          <p>In 2009 I lead a team of volunteers through the mapping of the worst bushfires Australia had ever seen and received a <OutboundLink className={styles.link} to="https://www.pmc.gov.au/government/its-honour/national-emergency-medal" >National Emergency Medal</OutboundLink> from the Australian Government.</p>

          <p>I now work on a freelance basis working on both ideas of my own and others. If you have a project in mind, <Link to="/contact">get in touch</Link>.</p>
        </section>
        <aside className={styles.skills}>
          <div>
            <h3>Skills</h3>

            <h4>Presentation</h4>
            <p>Bootstrap, Css, Html, Less, Postcss, Sass, Stylus</p>

            <h4>Javascript</h4>
            <p>React, React Native, Redux, Webpack</p>

            <h4>Server</h4>
            <p>Node, PostgreSQL, Rails, Flask, Django</p>

            <h4>Other</h4>
            <p>CI/CD, Git, Docker</p>

            <h4>Data Engineering</h4>
            <p>AWS Stack, Elastic Map Reduce</p>
          </div>
        </aside>
      </div>

    </Wrapper>
  </ContentPage>
);

export default About;

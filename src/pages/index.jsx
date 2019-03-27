import React from 'react';
import Link from 'gatsby-link';
import OutboundLink from '../components/outbound-link';

import Fullscreen from '../components/fullscreen';
import Meta from '../components/meta';
import Wrapper from '../components/wrapper';

import styles from './styles.module.css';

const Index = ({ location }) => (
  <div>
    <Meta location={location} />
    <Fullscreen className={styles.intro} firstItem>
      <Wrapper>
        <h1>
          Hello. I’m Shoaib Burq (aka: sabman)
          <br />
          <br />
          I’m a software & geomatics engineer
          <br />
          <br />
          Check out my <Link className={styles.link} to="/work">work</Link>
        </h1>

        <p>
          You can also checkout my <OutboundLink className={styles.link} to="https://medium.com/@sabman">writings</OutboundLink>, <OutboundLink className={styles.link} to="https://github.com/sabman">code</OutboundLink>, <OutboundLink className={styles.link} to="https://soundcloud.com/sabman">music</OutboundLink>
        </p>
      </Wrapper>
    </Fullscreen>
  </div>
);

export default Index;

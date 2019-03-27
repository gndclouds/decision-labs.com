import React from 'react';

import Icon from '../icon';
import OutboundLink from '../outbound-link';

import styles from './styles.module.css';

const Contact = ({ title }) => (
  <div className={styles.contact}>
    <h1>{title || 'I like messages.'}</h1>
    <p className={styles.email}>
      Say hello and send an email:<br />
      <a href="mailto:saburq@gmail.com?subject=Hello%20Shoaib!" className={styles.link}>saburq@gmail.com</a>
    </p>
    <div className={styles.lineBreak} />
    <ul className={styles.social}>
      <li>
        <OutboundLink to="https://github.com/sabman/">
          <Icon name="github" /> code
        </OutboundLink>
      </li>
      <li>
        <OutboundLink to="https://scholar.google.com/citations?hl=en&view_op=list_works&user=Pg-Ik9AAAAAJ">
          <Icon name="googlescholar" /> papers
        </OutboundLink>
      </li>
      <li>
        <OutboundLink to="https://leanpub.com/u/sabman">
          <Icon name="leanpub" /> books
        </OutboundLink>
      </li>
      <li>
        <OutboundLink to="https://medium.com/@sabman/">
          <Icon name="medium" /> writings
        </OutboundLink>
      </li>
      <li>
        <OutboundLink to="https://www.goodreads.com/user/show/15529944-shoaib-burq">
          <Icon name="goodreads" /> reading
        </OutboundLink>
      </li>
      <li>
        <OutboundLink to="https://www.linkedin.com/in/shoaibburq/">
          <Icon name="linkedin" /> linkedin
        </OutboundLink>
      </li>
      <li>
        <OutboundLink to="https://twitter.com/sabman/">
          <Icon name="twitter" /> tweets
        </OutboundLink>
      </li>
      <li>
        <OutboundLink to="https://www.instagram.com/sabman">
          <Icon name="instagram" /> instagram
        </OutboundLink>
      </li>
      <li>
        <OutboundLink to="https://soundcloud.com/sabman">
          <Icon name="soundcloud" /> music
        </OutboundLink>
      </li>
    </ul>
  </div>
);

export default Contact;

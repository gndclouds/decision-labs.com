import React from 'react';

import Icon from '../icon';
import OutboundLink from '../outbound-link';

import styles from './styles.module.css';

const Contact = ({ title }) => (
  <div className={styles.contact}>
    <h1>{title || "Let's talk about Decision Science"}</h1>
    <p className={styles.email}>
      Say hello and send us an email:
      <br />
      <a
        href="mailto:team@decision-labs.com?subject=Hello!"
        className={styles.link}
      >
        team@decision-labs.com
      </a>
    </p>
    <div className={styles.lineBreak} />
    <ul className={styles.social}>
      <li>
        <OutboundLink to="https://cal.com/decision-labs" className={styles.bookingButton}>
          <Icon name="calender" /> Book a 30min meeting
        </OutboundLink>
      </li>
      <li>
        <OutboundLink to="https://www.linkedin.com/company/spacialdb-ug-decision-labs/">
          <Icon name="linkedin" /> LinkedIn
        </OutboundLink>
      </li>
      <li>
        <OutboundLink to="https://github.com/decision-labs/">
          <Icon name="github" /> GitHub
        </OutboundLink>
      </li>
    </ul>
  </div>
);

export default Contact;

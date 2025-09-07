import React from 'react';

import Icon from '../icon';
import OutboundLink from '../outbound-link';

import styles from './styles.module.css';

const Contact = ({ title }) => (
  <div className={styles.contact}>
    <div className={styles.contactContent}>
      <div className={styles.contactHeader}>
        <h1>{title || "Ready to transform your data challenges?"}</h1>
        <p className={styles.subtitle}>
          Let's discuss how our AI-powered solutions can drive your next breakthrough.
        </p>
      </div>
      
      <div className={styles.contactActions}>
        <div className={styles.primaryAction}>
          <OutboundLink to="https://cal.com/decision-labs" className={styles.bookingButton}>
            <Icon name="calender" />
            <span>Book a Discovery Call</span>
          </OutboundLink>
          <p className={styles.actionNote}>30-minute consultation • Free • No commitment</p>
        </div>
        
        <div className={styles.divider}>
          <span>or</span>
        </div>
        
        <div className={styles.contactInfo}>
          <p className={styles.emailText}>Send us an email directly:</p>
          <a
            href="mailto:team@decision-labs.com?subject=Hello from Decision Labs website"
            className={styles.emailLink}
          >
            team@decision-labs.com
          </a>
        </div>
      </div>
      
      <div className={styles.socialLinks}>
        <p className={styles.followText}>Follow our work</p>
        <div className={styles.socialIcons}>
          <OutboundLink to="https://www.linkedin.com/company/spacialdb-ug-decision-labs/" className={styles.socialLink}>
            <Icon name="linkedin" />
            <span>LinkedIn</span>
          </OutboundLink>
          <OutboundLink to="https://github.com/decision-labs/" className={styles.socialLink}>
            <Icon name="github" />
            <span>GitHub</span>
          </OutboundLink>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;

import React from 'react';
import OutboundLink from '../outbound-link';
import Wrapper from '../wrapper';

import styles from './styles.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <Wrapper>
      <div className={styles.footerContent}>
        <div className={styles.companyInfo}>
          <div className={styles.logo}>Decision Labs</div>
          <p className={styles.tagline}>
            AI-driven solutions for complex challenges
          </p>
        </div>
        
        <div className={styles.footerLinks}>
          <div className={styles.linkSection}>
            <h4>Legal</h4>
            <ul>
              <li>
                <OutboundLink to="https://geobase.app/impressum">
                  Impressum
                </OutboundLink>
              </li>
              <li>
                <OutboundLink to="https://geobase.app/agb">
                  Terms & Conditions
                </OutboundLink>
              </li>
            </ul>
          </div>
          
          <div className={styles.linkSection}>
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="mailto:team@decision-labs.com">
                  team@decision-labs.com
                </a>
              </li>
              <li>
                <OutboundLink to="https://cal.com/decision-labs">
                  Book a Call
                </OutboundLink>
              </li>
            </ul>
          </div>
          
          <div className={styles.linkSection}>
            <h4>Follow</h4>
            <ul>
              <li>
                <OutboundLink to="https://www.linkedin.com/company/spacialdb-ug-decision-labs/">
                  LinkedIn
                </OutboundLink>
              </li>
              <li>
                <OutboundLink to="https://github.com/decision-labs/">
                  GitHub
                </OutboundLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <p>© 2025 SpacialDB UG. All rights reserved.</p>
      </div>
    </Wrapper>
  </footer>
);

export default Footer;

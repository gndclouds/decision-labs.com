import React from "react";
import Link from "gatsby-link";
import OutboundLink from "../components/outbound-link";

import Fullscreen from "../components/fullscreen";
import Meta from "../components/meta";
import Wrapper from "../components/wrapper";

import styles from "./styles.module.css";

const Index = ({ location }) => (
  <div>
    <Meta location={location} />
    <Fullscreen className={styles.intro} firstItem>
      <Wrapper>
        <h1>Decision Labs Consulting</h1>

        <p>
          Digital Transformation, Advance Analytics, Data Science, Decision
          Science
        </p>
      </Wrapper>
    </Fullscreen>
  </div>
);

export default Index;

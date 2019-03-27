import React from "react";
import Link from "gatsby-link";

import ContentPage from "../../components/content-page";
import Meta from "../../components/meta";
import OutboundLink from "../../components/outbound-link";
import Wrapper from "../../components/wrapper";

import ahmSrc from "./img/ahm.png";
import inlightSrc from "./img/inlight.png";
import lighthouseSrc from "./img/lighthouse.png";

import styles from "./styles.module.css";

const About = ({ location }) => (
  <ContentPage>
    <Meta title="About" location={location} />
    <Wrapper>
      <div className={styles.about}>
        <section className={styles.intro}>
          <h1>About Decision Labs</h1>
          <p>
            We help our clients achieve efficiencies through digital
            transformation, develop analytics and data science capabilities.
          </p>
        </section>
        <aside className={styles.skills}>
          <div>
            <h3>Our Process</h3>

            <h4>1. Scoping & Architecture Design</h4>
            <p>
              First, we need to understand your problem better. Once we
              determine there is a fit for Machine Learning, we will work
              closely together to prepare a roadmap, review the scientific
              literature, and determine requirements.
            </p>

            <h4>2. Data Collection & Exploration</h4>
            <p>
              Machine Learning needs data. If you have data needed to train the
              models, we will perform an exploratory analysis phase to find
              patterns and correlations. If you don't, we will collect the data
              for you using online sources (if possible).
            </p>

            <h4>3. Model Development</h4>
            <p>
              We run thousands of experiments in parallel to develop a machine
              learning model. A model is the core of a machine learning system -
              trained on historical data it can predict the future trends or
              understand the semantics of a text.
            </p>

            <h4>4. Full-stack application development</h4>
            <p>
              We integrate the model with a REST API or a front-end application,
              developing all necessary features to access the model in an
              user-friendly way. Scalable and with the state-of-the-art
              security.
            </p>
          </div>
        </aside>
      </div>
    </Wrapper>
  </ContentPage>
);

export default About;

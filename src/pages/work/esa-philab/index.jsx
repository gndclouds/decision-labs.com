import React from "react";
import projects from "../../../data/projects";

import OutboundLink from "../../../components/outbound-link";
import {
  ProjectDescription,
  ProjectIntro,
  ProjectPage
} from "../../../components/project";

import styles from "./styles.module.css";

const ESAPhilab = ({ location }) => {
  const project = projects.find(p => p.slug === "esa-philab");

  const image = (
    <div className={styles.image}>
      <img src={project.cover} alt={project.title} />
    </div>
  );

  return (
    <ProjectPage project={project} location={location}>
      <ProjectIntro project={project} media={image} />
      
      <ProjectDescription>
        <h3>Earth Observation Deepfake Detection</h3>
        <p>
          In collaboration with the European Space Agency's Φ-Lab (Phi-Lab), Decision Labs 
          is pioneering research into detecting manipulated satellite imagery and developing 
          benchmark models for earth observation authenticity verification.
        </p>
        
        <h3>Research Focus</h3>
        <ul>
          <li><strong>Deepfake Detection:</strong> Advanced algorithms for identifying manipulated satellite images</li>
          <li><strong>Benchmark Development:</strong> Creating standardized datasets for model evaluation</li>
          <li><strong>Authenticity Verification:</strong> Methods for verifying genuine earth observation data</li>
          <li><strong>ESA Collaboration:</strong> Direct partnership with European space research initiatives</li>
          <li><strong>Open Science:</strong> Contributing to open research and reproducible methods</li>
        </ul>

        <h3>Scientific Impact</h3>
        <p>
          This research addresses critical challenges in the era of AI-generated content, 
          ensuring the integrity of satellite data used for scientific research, policy 
          making, and public information.
        </p>

        <div className={styles.cta}>
          <OutboundLink to={project.links.website}>
            Learn About ESA Φ-Lab →
          </OutboundLink>
        </div>
      </ProjectDescription>
    </ProjectPage>
  );
};

export default ESAPhilab;

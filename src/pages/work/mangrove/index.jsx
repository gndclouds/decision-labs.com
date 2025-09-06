import React from "react";
import projects from "../../../data/projects";

import OutboundLink from "../../../components/outbound-link";
import {
  ProjectDescription,
  ProjectIntro,
  ProjectPage
} from "../../../components/project";

import styles from "./styles.module.css";

const Mangrove = ({ location }) => {
  const project = projects.find(p => p.slug === "mangrove");

  const image = (
    <div className={styles.image}>
      <img src={project.cover} alt={project.title} />
    </div>
  );

  return (
    <ProjectPage project={project} location={location}>
      <ProjectIntro project={project} media={image} />
      
      <ProjectDescription>
        <h3>Global Mangrove Monitoring</h3>
        <p>
          Decision Labs contributes to global mangrove ecosystem monitoring initiatives, 
          supporting conservation efforts and carbon markets through advanced digital 
          Measurement, Reporting, and Verification (dMRV) technologies.
        </p>
        
        <h3>Monitoring Capabilities</h3>
        <ul>
          <li><strong>Satellite Monitoring:</strong> Continuous tracking of mangrove forest changes</li>
          <li><strong>Carbon Assessment:</strong> Quantifying carbon sequestration in mangrove ecosystems</li>
          <li><strong>dMRV Systems:</strong> Digital measurement, reporting, and verification workflows</li>
          <li><strong>Conservation Support:</strong> Data-driven insights for protection strategies</li>
          <li><strong>Carbon Markets:</strong> Supporting verified carbon credit generation</li>
        </ul>

        <h3>Global Impact</h3>
        <p>
          Our work supports international conservation efforts and climate action by 
          providing accurate, scalable monitoring solutions for one of the world's 
          most important carbon-storing ecosystems.
        </p>

        <div className={styles.cta}>
          <OutboundLink to={project.links.website}>
            Learn About Mangrove Conservation →
          </OutboundLink>
        </div>
      </ProjectDescription>
    </ProjectPage>
  );
};

export default Mangrove;

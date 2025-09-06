import React from "react";
import projects from "../../../data/projects";

import OutboundLink from "../../../components/outbound-link";
import {
  ProjectDescription,
  ProjectIntro,
  ProjectPage
} from "../../../components/project";

import styles from "./styles.module.css";

const NCCDrone = ({ location }) => {
  const project = projects.find(p => p.slug === "ncc-drone");

  const image = (
    <div className={styles.image}>
      <img src={project.cover} alt={project.title} />
    </div>
  );

  return (
    <ProjectPage project={project} location={location}>
      <ProjectIntro project={project} media={image} />
      
      <ProjectDescription>
        <h3>Construction Monitoring Revolution</h3>
        <p>
          NCC Drone Services transforms construction monitoring in the Middle East by 
          seamlessly integrating drone technology with Enterprise Resource Planning (ERP) 
          and Geographic Information Systems (GIS) for streamlined project management.
        </p>
        
        <h3>Integration Capabilities</h3>
        <ul>
          <li><strong>Drone Data Processing:</strong> Automated processing of aerial survey data</li>
          <li><strong>ERP Integration:</strong> Direct connection with construction management systems</li>
          <li><strong>GIS Mapping:</strong> Real-time spatial data visualization and analysis</li>
          <li><strong>Progress Monitoring:</strong> Automated construction progress tracking</li>
          <li><strong>Reporting Automation:</strong> Streamlined reporting workflows</li>
        </ul>

        <div className={styles.cta}>
          <OutboundLink to={project.links.website}>
            Learn More →
          </OutboundLink>
        </div>
      </ProjectDescription>
    </ProjectPage>
  );
};

export default NCCDrone;

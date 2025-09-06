import React from "react";
import projects from "../../../data/projects";

import OutboundLink from "../../../components/outbound-link";
import Wrapper from "../../../components/wrapper";
import {
  ProjectDescription,
  ProjectIntro,
  ProjectPage
} from "../../../components/project";

import styles from "./styles.module.css";

const KPASIS = ({ location }) => {
  const project = projects.find(p => p.slug === "kp-asis");

  const image = (
    <div className={styles.image}>
      <img src={project.cover} alt={project.title} />
    </div>
  );

  return (
    <ProjectPage project={project} location={location}>
      <ProjectIntro project={project} media={image} />
      
      <ProjectDescription>
        <h3>Agricultural Statistics Platform</h3>
        <p>
          KP-ASIS is a comprehensive agricultural statistics platform developed for 
          Pakistan's Khyber Pakhtunkhwa province with funding from the Asian Development Bank. 
          The system integrates satellite data, field surveys, and mobile workflows to 
          modernize agricultural data collection and analysis.
        </p>
        
        <h3>System Components</h3>
        <ul>
          <li><strong>Satellite Integration:</strong> Real-time agricultural monitoring using earth observation data</li>
          <li><strong>Field Surveys:</strong> Mobile-first data collection tools for agricultural officers</li>
          <li><strong>Mobile Workflows:</strong> Offline-capable applications for rural data collection</li>
          <li><strong>Analytics Dashboard:</strong> Real-time insights for policy makers and planners</li>
          <li><strong>Data Integration:</strong> Seamless integration with existing government systems</li>
        </ul>

        <h3>Impact</h3>
        <p>
          The platform significantly improves the accuracy and timeliness of agricultural 
          statistics, enabling better policy decisions and resource allocation for 
          sustainable agricultural development in the region.
        </p>

        <div className={styles.cta}>
          <OutboundLink to={project.links.website}>
            Learn More About KP-ASIS →
          </OutboundLink>
        </div>
      </ProjectDescription>
    </ProjectPage>
  );
};

export default KPASIS;

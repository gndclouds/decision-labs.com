import React from "react";
import projects from "../../../data/projects";

import OutboundLink from "../../../components/outbound-link";
import {
  ProjectDescription,
  ProjectIntro,
  ProjectPage
} from "../../../components/project";

import styles from "./styles.module.css";

const KYCA = ({ location }) => {
  const project = projects.find(p => p.slug === "kyca");

  const image = (
    <div className={styles.image}>
      <img src={project.cover} alt={project.title} />
    </div>
  );

  return (
    <ProjectPage project={project} location={location}>
      <ProjectIntro project={project} media={image} />
      
      <ProjectDescription>
        <h3>Community-Driven Urban Data</h3>
        <p>
          Know Your City Academy (KYCA) Data Commons is a collaborative platform developed 
          with the Slum Dwellers International (SDI) network to build civic data commons 
          through participatory mapping and community-led data collection initiatives.
        </p>
        
        <h3>Platform Features</h3>
        <ul>
          <li><strong>Participatory Mapping:</strong> Community-led spatial data collection tools</li>
          <li><strong>Data Commons:</strong> Open platform for sharing urban development data</li>
          <li><strong>Policy Advocacy:</strong> Evidence-based tools for community advocacy</li>
          <li><strong>Collaboration Tools:</strong> Multi-stakeholder engagement platforms</li>
          <li><strong>SDI Integration:</strong> Direct connection with global slum upgrading networks</li>
        </ul>

        <h3>Community Impact</h3>
        <p>
          The platform empowers informal settlement communities to collect, analyze, and 
          advocate using their own data, leading to more inclusive urban development policies 
          and improved living conditions.
        </p>

        <div className={styles.cta}>
          <OutboundLink to={project.links.website}>
            Explore KYCA Platform →
          </OutboundLink>
        </div>
      </ProjectDescription>
    </ProjectPage>
  );
};

export default KYCA;

import React from "react";
import projects from "../../../data/projects";

import OutboundLink from "../../../components/outbound-link";
import {
  ProjectDescription,
  ProjectIntro,
  ProjectPage
} from "../../../components/project";

import styles from "./styles.module.css";

const KuvaSitael = ({ location }) => {
  const project = projects.find(p => p.slug === "kuva-sitael");

  const image = (
    <div className={styles.image}>
      <img src={project.cover} alt={project.title} />
    </div>
  );

  return (
    <ProjectPage project={project} location={location}>
      <ProjectIntro project={project} media={image} />
      
      <ProjectDescription>
        <h3>On-Orbit Satellite Applications</h3>
        <p>
          Strategic partnerships with Kuva Space (Finland) and SITAEL (Italy) to explore 
          cutting-edge satellite data applications and develop innovative in-orbit 
          processing workflows for next-generation earth observation missions.
        </p>
        
        <h3>Collaboration Areas</h3>
        <ul>
          <li><strong>Kuva Space Partnership:</strong> Hyperspectral satellite data applications</li>
          <li><strong>SITAEL Collaboration:</strong> In-orbit processing and edge computing</li>
          <li><strong>Data Applications:</strong> Novel use cases for satellite-derived insights</li>
          <li><strong>Processing Workflows:</strong> Efficient on-orbit data processing pipelines</li>
          <li><strong>Technology Transfer:</strong> Commercial applications of space research</li>
        </ul>

        <h3>Innovation Focus</h3>
        <p>
          These partnerships drive innovation in satellite technology, from advanced 
          sensor applications to autonomous in-space data processing, pushing the 
          boundaries of what's possible with earth observation.
        </p>

        <div className={styles.cta}>
          <OutboundLink to={project.links.website}>
            Learn More About Our Research →
          </OutboundLink>
        </div>
      </ProjectDescription>
    </ProjectPage>
  );
};

export default KuvaSitael;

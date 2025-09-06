import React from "react";
import projects from "../../../data/projects";

import OutboundLink from "../../../components/outbound-link";
import {
  ProjectDescription,
  ProjectIntro,
  ProjectPage
} from "../../../components/project";

import styles from "./styles.module.css";

const Earthna = ({ location }) => {
  const project = projects.find(p => p.slug === "earthna");

  const image = (
    <div className={styles.image}>
      <img src={project.cover} alt={project.title} />
    </div>
  );

  return (
    <ProjectPage project={project} location={location}>
      <ProjectIntro project={project} media={image} />
      
      <ProjectDescription>
        <h3>Urban Greening for Climate Resilience</h3>
        <p>
          At the Earthna Summit 2025 in Doha, Decision Labs showcased cutting-edge EarthGPT 
          simulations demonstrating how urban greening interventions can reduce surface 
          temperatures and improve climate resilience in urban environments.
        </p>
        
        <h3>Research Highlights</h3>
        <ul>
          <li><strong>Surface Temperature Analysis:</strong> Quantifying urban heat island effects</li>
          <li><strong>Greening Interventions:</strong> Modeling impact of vegetation on microclimates</li>
          <li><strong>Climate Resilience:</strong> Assessing adaptation strategies for urban areas</li>
          <li><strong>EarthGPT Simulations:</strong> AI-powered environmental modeling</li>
          <li><strong>Policy Applications:</strong> Evidence-based urban planning recommendations</li>
        </ul>

        <h3>Summit Impact</h3>
        <p>
          The research presented at Earthna Summit contributes to global discussions on 
          sustainable urban development and demonstrates practical applications of AI 
          in environmental planning and climate adaptation.
        </p>

        <div className={styles.cta}>
          <OutboundLink to={project.links.website}>
            Visit Earthna →
          </OutboundLink>
        </div>
      </ProjectDescription>
    </ProjectPage>
  );
};

export default Earthna;

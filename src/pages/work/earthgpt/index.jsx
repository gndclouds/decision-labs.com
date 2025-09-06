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

const EarthGPT = ({ location }) => {
  const project = projects.find(p => p.slug === "earthgpt");

  const image = (
    <div className={styles.image}>
      <img src={project.cover} alt={project.title} />
    </div>
  );

  return (
    <ProjectPage project={project} location={location}>
      <ProjectIntro project={project} media={image} />
      
      <ProjectDescription>
        <h3>Revolutionary Earth Observation</h3>
        <p>
          EarthGPT transforms how we interact with satellite data and climate models. 
          By combining natural language processing with advanced earth observation analytics, 
          we're making complex geospatial insights accessible to policy analysts, journalists, 
          and researchers worldwide.
        </p>
        
        <h3>Core Capabilities</h3>
        <ul>
          <li><strong>Natural Language Queries:</strong> Ask questions about satellite data in plain English</li>
          <li><strong>Vision Transformers:</strong> Advanced computer vision for satellite image analysis</li>
          <li><strong>LLM Integration:</strong> Large language models for contextual understanding</li>
          <li><strong>RAG Pipelines:</strong> Retrieval-augmented generation for accurate responses</li>
          <li><strong>Climate Data:</strong> Integration with major climate and weather models</li>
        </ul>

        <h3>Use Cases</h3>
        <p>
          EarthGPT serves diverse applications from environmental monitoring and disaster response 
          to agricultural planning and urban development. The platform enables users to query 
          complex datasets without requiring technical expertise in remote sensing or GIS.
        </p>

        <div className={styles.cta}>
          <OutboundLink to={project.links.website}>
            Try EarthGPT →
          </OutboundLink>
        </div>
      </ProjectDescription>
    </ProjectPage>
  );
};

export default EarthGPT;

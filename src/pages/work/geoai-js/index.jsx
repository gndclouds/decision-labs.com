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

const GeoAIJS = ({ location }) => {
  const project = projects.find(p => p.slug === "geoai-js");

  const image = (
    <div className={styles.image}>
      <img src={project.cover} alt={project.title} />
    </div>
  );

  return (
    <ProjectPage project={project} location={location}>
      <ProjectIntro project={project} media={image} />
      
      <ProjectDescription>
        <h3>Client-Side Geospatial AI</h3>
        <p>
          GeoAI.js brings the power of HuggingFace transformers.js models directly 
          to the browser and Node.js environments. This revolutionary toolkit enables 
          developers to run geospatial AI models client-side, reducing server costs 
          and improving privacy.
        </p>
        
        <h3>Key Features</h3>
        <ul>
          <li><strong>Browser-Native:</strong> Run AI models directly in web browsers</li>
          <li><strong>Node.js Support:</strong> Server-side geospatial processing capabilities</li>
          <li><strong>HuggingFace Integration:</strong> Access to pre-trained transformer models</li>
          <li><strong>Live Demos:</strong> Interactive examples and tutorials</li>
          <li><strong>Developer-Friendly:</strong> Comprehensive documentation and APIs</li>
        </ul>

        <h3>Use Cases</h3>
        <p>
          From real-time satellite image classification to client-side geospatial 
          analysis, GeoAI.js democratizes access to advanced AI capabilities without 
          requiring expensive cloud infrastructure or specialized hardware.
        </p>

        <div className={styles.cta}>
          <OutboundLink to={project.links.website}>
            Explore GeoAI.js →
          </OutboundLink>
        </div>
      </ProjectDescription>
    </ProjectPage>
  );
};

export default GeoAIJS;

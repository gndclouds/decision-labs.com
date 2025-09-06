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

const Verisat = ({ location }) => {
  const project = projects.find(p => p.slug === "verisat");

  const image = (
    <div className={styles.image}>
      <img src={project.cover} alt={project.title} />
    </div>
  );

  return (
    <ProjectPage project={project} location={location}>
      <ProjectIntro project={project} media={image} />
      
      <ProjectDescription>
        <h3>Satellite Image Authenticity</h3>
        <p>
          Verisat.ai addresses the growing challenge of manipulated satellite imagery 
          in an era of deepfakes and digital misinformation. Our platform provides 
          journalists, analysts, and verification organizations with advanced tools 
          to detect fake or altered satellite images.
        </p>
        
        <h3>Detection Technology</h3>
        <ul>
          <li><strong>Noise Pattern Analysis:</strong> Advanced algorithms to detect manipulation artifacts</li>
          <li><strong>FFT Fingerprinting:</strong> Frequency domain analysis for authenticity verification</li>
          <li><strong>Patch-Level Detection:</strong> Granular analysis of image inconsistencies</li>
          <li><strong>Machine Learning:</strong> Deep learning models trained on authentic satellite data</li>
          <li><strong>Metadata Verification:</strong> Cross-reference with known satellite parameters</li>
        </ul>

        <h3>Applications</h3>
        <p>
          Verisat.ai supports fact-checkers, news organizations, and intelligence analysts 
          in verifying the authenticity of satellite imagery used in reporting conflict, 
          environmental changes, and geopolitical events.
        </p>

        <div className={styles.cta}>
          <OutboundLink to={project.links.website}>
            Verify Images with Verisat →
          </OutboundLink>
        </div>
      </ProjectDescription>
    </ProjectPage>
  );
};

export default Verisat;

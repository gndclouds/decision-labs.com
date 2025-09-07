import React from 'react';
import Link from 'gatsby-link';

import ProjectPage from '../../../components/project/page';
import ProjectIntro from '../../../components/project/intro';
import ProjectDescription from '../../../components/project/description';
import Wrapper from '../../../components/wrapper';

import projects from '../../../data/projects';

import styles from './styles.module.css';

const project = projects.find(p => p.slug === "geoai-js");

const GeoAIJSPage = ({ location }) => (
  <ProjectPage project={project} location={location}>
    <ProjectIntro
      project={project}
      media={
        project.cover && (
          <div className={styles.media}>
            <img 
              src={project.cover} 
              alt={project.title}
              className={styles.image}
            />
          </div>
        )
      }
    />
    
    <ProjectDescription>
      <h2>Overview</h2>
      <p>{project.description}</p>
      
      <h2>Key Features</h2>
      <ul>
        <li>Browser-native geospatial AI processing</li>
        <li>HuggingFace transformers.js integration</li>
        <li>Client-side machine learning models</li>
        <li>Node.js and browser compatibility</li>
        <li>Live interactive demos and documentation</li>
        <li>Zero-dependency geospatial AI toolkit</li>
      </ul>
      
      <h2>Technical Capabilities</h2>
      <ul>
        <li>JavaScript-native tensor operations</li>
        <li>WebGL-accelerated model inference</li>
        <li>Geospatial data preprocessing utilities</li>
        <li>Real-time satellite image analysis</li>
        <li>Privacy-first client-side processing</li>
      </ul>
      
      {project.links && project.links.website && (
        <div className={styles.links}>
          <a 
            href={project.links.website} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.websiteLink}
          >
            Try GeoAI.js →
          </a>
        </div>
      )}
      
      <div className={styles.navigation}>
        <Link to="/work">← Back to all projects</Link>
      </div>
    </ProjectDescription>
  </ProjectPage>
);

export default GeoAIJSPage;

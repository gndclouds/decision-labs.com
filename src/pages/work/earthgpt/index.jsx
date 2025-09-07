import React from 'react';
import Link from 'gatsby-link';

import ProjectPage from '../../../components/project/page';
import ProjectIntro from '../../../components/project/intro';
import ProjectDescription from '../../../components/project/description';
import Wrapper from '../../../components/wrapper';

import projects from '../../../data/projects';

import styles from './styles.module.css';

const project = projects.find(p => p.slug === "earthgpt");

const EarthGPTPage = ({ location }) => (
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
      
      <h2>Key Capabilities</h2>
      <ul>
        <li>Natural language queries for satellite data</li>
        <li>Climate model integration and analysis</li>
        <li>Vision Transformer (ViT) models for image analysis</li>
        <li>Large Language Model integration</li>
        <li>RAG (Retrieval-Augmented Generation) pipelines</li>
        <li>Real-time environmental insights</li>
      </ul>
      
      {project.links && project.links.website && (
        <div className={styles.links}>
          <a 
            href={project.links.website} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.websiteLink}
          >
            Try EarthGPT →
          </a>
        </div>
      )}
      
      <div className={styles.navigation}>
        <Link to="/work">← Back to all projects</Link>
      </div>
    </ProjectDescription>
  </ProjectPage>
);

export default EarthGPTPage;


import React from 'react';
import Link from 'gatsby-link';

import ProjectPage from '../../../components/project/page';
import ProjectIntro from '../../../components/project/intro';
import ProjectDescription from '../../../components/project/description';
import Wrapper from '../../../components/wrapper';

import projects from '../../../data/projects';

import styles from './styles.module.css';

const project = projects.find(p => p.slug === "geobase");

const GeobasePage = ({ location }) => (
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
        <li>PostGIS-enabled database with geospatial querying</li>
        <li>Vector and raster tile server capabilities</li>
        <li>STAC (SpatioTemporal Asset Catalog) integration</li>
        <li>Scalable cloud-native architecture</li>
        <li>RESTful API with real-time capabilities</li>
      </ul>
      
      {project.links && project.links.website && (
        <div className={styles.links}>
          <a 
            href={project.links.website} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.websiteLink}
          >
            Visit Geobase →
          </a>
        </div>
      )}
      
      <div className={styles.navigation}>
        <Link to="/work">← Back to all projects</Link>
      </div>
    </ProjectDescription>
  </ProjectPage>
);

export default GeobasePage;


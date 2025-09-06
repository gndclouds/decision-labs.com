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

const Geobase = ({ location }) => {
  const project = projects.find(p => p.slug === "geobase");

  const image = (
    <div className={styles.image}>
      <img src={project.cover} alt={project.title} />
    </div>
  );

  return (
    <ProjectPage project={project} location={location}>
      <ProjectIntro project={project} media={image} />
      
      <ProjectDescription>
        <h3>Overview</h3>
        <p>
          Geobase is a comprehensive geospatial backend-as-a-service platform that extends 
          Supabase with powerful geospatial capabilities. Built for developers who need to 
          integrate location intelligence into their applications without the complexity 
          of managing geospatial infrastructure.
        </p>
        
        <h3>Key Features</h3>
        <ul>
          <li><strong>PostGIS Integration:</strong> Full PostgreSQL with PostGIS for advanced spatial queries</li>
          <li><strong>Vector Tile Server:</strong> High-performance vector tile serving for web maps</li>
          <li><strong>Raster Tile Server:</strong> Satellite imagery and raster data delivery</li>
          <li><strong>STAC Integration:</strong> SpatioTemporal Asset Catalog for earth observation data</li>
          <li><strong>Cloud-Native:</strong> Scalable infrastructure designed for modern applications</li>
        </ul>

        <h3>Technology Stack</h3>
        <p>
          Geobase leverages modern cloud-native technologies including Docker containers, 
          Kubernetes orchestration, and high-performance geospatial databases. The platform 
          provides RESTful APIs and real-time subscriptions for seamless integration.
        </p>

        <div className={styles.cta}>
          <OutboundLink to={project.links.website}>
            Explore Geobase Platform →
          </OutboundLink>
        </div>
      </ProjectDescription>
    </ProjectPage>
  );
};

export default Geobase;

import React from 'react';
import Link from 'gatsby-link';
import Meta from '../../components/meta';
import Contact from '../../components/contact';
import Wrapper from '../../components/wrapper';

import projects from '../../data/projects';

import styles from './styles.module.css';

const Work = ({ location }) => {
  // Group projects by category
  const productProjects = projects.filter(p => p.className === 'product');
  const consultingProjects = projects.filter(p => p.className === 'consulting');
  const researchProjects = projects.filter(p => p.className === 'research');
  const domainProjects = projects.filter(p => p.className === 'domain');

  const ProjectCard = ({ project, index }) => (
    <Link to={`/work/${project.slug}`} className={styles.projectCard}>
      <div className={styles.projectImageContainer}>
        {project.cover && (
          <img 
            src={project.cover} 
            alt={project.title}
            className={styles.projectImage}
          />
        )}
        <div className={styles.projectOverlay}>
          <span className={styles.projectType}>
            {project.className.charAt(0).toUpperCase() + project.className.slice(1)}
          </span>
        </div>
      </div>
      <div className={styles.projectContent}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectSummary}>{project.summary}</p>
        <div className={styles.projectMeta}>
          <span className={styles.viewProject}>View Project →</span>
        </div>
      </div>
    </Link>
  );

  const ProjectSection = ({ title, description, projects, sectionClass, icon }) => (
    <section className={`${styles.section} ${sectionClass}`}>
      <Wrapper>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionIcon}>{icon}</div>
          <h2 className={styles.sectionTitle}>{title}</h2>
          <p className={styles.sectionDescription}>{description}</p>
        </div>
        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </Wrapper>
    </section>
  );

  return (
    <div className={styles.workPage}>
      <Meta 
        title="Work" 
        description="Geospatial AI products, consulting services, and research collaborations by Decision Labs." 
        location={location} 
      />

      {/* Hero Section */}
      <section className={styles.hero}>
        <Wrapper>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Our AI Products</h1>
            <p className={styles.heroSubtitle}>
              Innovative AI-driven products that solve complex challenges and 
              transform data into actionable insights across industries.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>{productProjects.length}</div>
                <div className={styles.statLabel}>AI Products</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>50+</div>
                <div className={styles.statLabel}>Models Trained</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>12+</div>
                <div className={styles.statLabel}>Active Deployments</div>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>

      {/* Products Section */}
      <ProjectSection
        title="AI Products"
        description="Innovative AI platforms and tools that solve complex data challenges"
        projects={productProjects}
        sectionClass={styles.productsSection}
        icon="🚀"
      />

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <Wrapper>
          <Contact title="Ready to transform your geospatial challenges?" />
        </Wrapper>
      </section>
    </div>
  );
};

export default Work;

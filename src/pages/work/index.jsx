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
            <h1 className={styles.heroTitle}>Our Work</h1>
            <p className={styles.heroSubtitle}>
              From AI-powered products to cutting-edge research, we're advancing 
              the field of geospatial intelligence through innovative solutions.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>{productProjects.length}</div>
                <div className={styles.statLabel}>AI Products</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>{consultingProjects.length}</div>
                <div className={styles.statLabel}>Consulting Projects</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>{researchProjects.length}</div>
                <div className={styles.statLabel}>Research Collaborations</div>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>

      {/* Products Section */}
      <ProjectSection
        title="AI Products"
        description="Innovative geospatial AI platforms and tools that democratize earth observation data"
        projects={productProjects}
        sectionClass={styles.productsSection}
        icon="🚀"
      />

      {/* Consulting Section */}
      <ProjectSection
        title="Consulting Services"
        description="Custom solutions for governments, organizations, and enterprises seeking geospatial insights"
        projects={consultingProjects}
        sectionClass={styles.consultingSection}
        icon="🏢"
      />

      {/* Research Section */}
      <ProjectSection
        title="Research Collaborations"
        description="Partnerships with leading institutions advancing the science of earth observation"
        projects={researchProjects}
        sectionClass={styles.researchSection}
        icon="🔬"
      />

      {/* Domain Section */}
      <ProjectSection
        title="Domain Applications"
        description="Real-world applications demonstrating the impact of geospatial AI across industries"
        projects={domainProjects}
        sectionClass={styles.domainSection}
        icon="🌍"
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

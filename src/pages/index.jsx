import React from 'react';
import Link from 'gatsby-link';

import Fullscreen from '../components/fullscreen';
import Meta from '../components/meta';
import Wrapper from '../components/wrapper';

import projects from '../data/projects';
import styles from './styles.module.css';

// Featured projects - selecting the most impactful ones
const featuredProjects = [
  // Temporarily disabled until individual project pages are fixed
].filter(Boolean);

const Index = ({ location }) => (
  <div>
    <Meta location={location} />
    <Fullscreen className={styles.intro} firstItem>
      <Wrapper>
        <h1>Solving the World's Most Complex Challenges</h1>

        <p className={styles.heroSubtitle}>
          <em>We build AI-driven products, train custom models, and create intelligent systems that turn complex data into actionable insights. From concept to deployment.</em>
        </p>

        <div className={styles.heroMetrics}>
          <div className={styles.metric}>
            <div className={styles.metricNumber}>12+</div>
            <div className={styles.metricLabel}>AI Products Built</div>
          </div>
          <div className={styles.metric}>
            <div className={styles.metricNumber}>50+</div>
            <div className={styles.metricLabel}>Models Trained</div>
          </div>
          <div className={styles.metric}>
            <div className={styles.metricNumber}>3</div>
            <div className={styles.metricLabel}>Research Partnerships</div>
          </div>
        </div>

        <div className={styles.heroActions}>
          <a
            href="https://cal.com/decision-labs"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Book a Discovery Call
          </a>
          <Link to="/work" className={styles.ctaButtonSecondary}>
            View Our Work
          </Link>
        </div>

        <div className={styles.scrollIndicator}>
          <span>scroll down</span>
          <div className={styles.scrollArrow} />
        </div>
      </Wrapper>
    </Fullscreen>

    <section className={styles.featuredSection}>
      <Wrapper>
        <div className={styles.featuredHeader}>
          <div className={styles.sectionNumber}>01</div>
          <h2>Featured Projects</h2>
          <p><em>Custom AI solutions, model training, and intelligent systems that solve real-world problems</em></p>
        </div>

        <div className={styles.projectGrid}>
          {featuredProjects.map((project) => {
            // Map project types to expertise areas
            const getExpertiseAreas = (slug) => {
              switch (slug) {
                case 'geobase': return ['Backend Engineering', 'Cloud Infrastructure'];
                case 'earthgpt': return ['LLM Integration', 'AI Analytics'];
                case 'verisat': return ['Computer Vision', 'Model Training'];
                case 'spendmapp': return ['Data Engineering', 'Analytics Platform'];
                case 'geoai-js': return ['JavaScript AI', 'Model Deployment'];
                case 'kp-asis': return ['Data Systems', 'Mobile Apps'];
                case 'esa-philab': return ['Research', 'Deep Learning'];
                case 'mangrove': return ['AI Models', 'Monitoring Systems'];
                default: return ['AI Solutions'];
              }
            };

            return (
              <Link
                key={project.slug}
                to={`/work/${project.slug}`}
                className={styles.projectCard}
              >
                <div className={styles.projectCardImage}>
                  {project.cover && (
                    <img
                      src={project.cover}
                      alt={project.title}
                      className={styles.projectImage}
                    />
                  )}
                  <div className={styles.projectOverlay}>
                    <div className={styles.expertiseTags}>
                      {getExpertiseAreas(project.slug).map(tag => (
                        <span key={tag} className={styles.expertiseTag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={styles.projectCardContent}>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <span className={styles.projectLink}>
                    Learn More &rarr;
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className={styles.viewAllProjects}>
          <Link to="/work" className={styles.viewAllButton}>
            View All Projects
          </Link>
          <div className={styles.projectsCta}>
            <p>Ready to transform your data challenges into opportunities?</p>
            <a
              href="https://cal.com/decision-labs"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.bookCallButton}
            >
              Book a Discovery Call
            </a>
          </div>
        </div>
      </Wrapper>
    </section>

    <section className={styles.testimonialSection}>
      <Wrapper>
        <div className={styles.testimonial}>
          <blockquote>
            &ldquo;Decision Labs transformed our data infrastructure and helped us make
            sense of complex urban planning challenges. Their expertise in geospatial
            analytics delivered insights that directly informed policy decisions.&rdquo;
          </blockquote>
          <div className={styles.testimonialAuthor}>
            <strong>Planning Authority</strong>
            <span>Government Partner</span>
          </div>
        </div>
      </Wrapper>
    </section>

    <section className={styles.clientsSection}>
      <Wrapper>
        <div className={styles.clientsHeader}>
          <div className={styles.sectionNumber}>02</div>
          <h2>Trusted by</h2>
        </div>

        <div className={styles.clientsGrid}>
          <div className={styles.clientLogo}>
            <span>Government Agencies</span>
          </div>
          <div className={styles.clientLogo}>
            <span>Planning Authorities</span>
          </div>
          <div className={styles.clientLogo}>
            <span>Urban Analytics</span>
          </div>
          <div className={styles.clientLogo}>
            <span>Research Institutions</span>
          </div>
          <div className={styles.clientLogo}>
            <span>Tech Startups</span>
          </div>
          <div className={styles.clientLogo}>
            <span>Financial Services</span>
          </div>
        </div>
      </Wrapper>
    </section>

    <section className={styles.capabilitiesSection}>
      <Wrapper>
        <div className={styles.capabilitiesHeader}>
          <div className={styles.sectionNumber}>03</div>
          <h2>Our Expertise</h2>
          <p><em>Where data science meets real-world impact</em></p>
        </div>

        <div className={styles.capabilitiesGrid}>
          <div className={styles.capabilityCard}>
            <h3>Advanced Analytics</h3>
            <p>Transform raw data into actionable insights with statistical modeling and predictive analytics.</p>
          </div>
          <div className={styles.capabilityCard}>
            <h3>Artificial Intelligence</h3>
            <p>Deploy machine learning solutions that automate decisions and uncover hidden patterns.</p>
          </div>
          <div className={styles.capabilityCard}>
            <h3>Geospatial Intelligence</h3>
            <p>Leverage location-based data to understand spatial relationships and urban dynamics.</p>
          </div>
          <div className={styles.capabilityCard}>
            <h3>Data Visualization</h3>
            <p>Create compelling visual narratives that communicate complex data clearly to stakeholders.</p>
          </div>
        </div>
      </Wrapper>
    </section>
  </div>
);

export default Index;

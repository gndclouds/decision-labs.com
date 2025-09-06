import React from 'react';
import Link from 'gatsby-link';

import Fullscreen from '../components/fullscreen';
import Meta from '../components/meta';
import Wrapper from '../components/wrapper';

import projects from '../data/projects';
import styles from './styles.module.css';

// Featured projects - selecting the most impactful ones
const featuredProjects = [
  projects.find(p => p.slug === 'geobase'),
  projects.find(p => p.slug === 'earthgpt'),
  projects.find(p => p.slug === 'verisat'),
  projects.find(p => p.slug === 'spendmapp'),
].filter(Boolean);

const Index = ({ location }) => (
  <div>
    <Meta location={location} />
    <Fullscreen className={styles.intro} firstItem>
      <Wrapper>
        <div className={styles.heroContent}>
          <div className={styles.heroMain}>
            <h1>AI-Powered Products for Real-World Impact</h1>

            <p className={styles.heroSubtitle}>
              We specialize in building intelligent products that harness AI and geospatial data. 
              From model training and deployment to full-stack product development, we turn complex 
              data challenges into scalable solutions.
            </p>

            <div className={styles.expertiseAreas}>
              <div className={styles.expertiseItem}>
                <div className={styles.expertiseIcon}>🤖</div>
                <h3>AI Model Development</h3>
                <p>Custom machine learning models for computer vision, NLP, and geospatial analysis</p>
              </div>
              <div className={styles.expertiseItem}>
                <div className={styles.expertiseIcon}>🚀</div>
                <h3>Product Engineering</h3>
                <p>Full-stack development of AI-powered SaaS platforms and applications</p>
              </div>
              <div className={styles.expertiseItem}>
                <div className={styles.expertiseIcon}>🌍</div>
                <h3>Geospatial Intelligence</h3>
                <p>Satellite data processing, earth observation, and location-based insights</p>
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
          </div>

          <div className={styles.scrollIndicator}>
            <span>scroll down</span>
            <div className={styles.scrollArrow} />
          </div>
        </div>
      </Wrapper>
    </Fullscreen>

    <section className={styles.featuredSection}>
      <Wrapper>
        <div className={styles.featuredHeader}>
          <div className={styles.sectionNumber}>01</div>
          <h2>Featured Projects</h2>
          <p><em>Building AI-powered geospatial products and providing cutting-edge consulting for global impact</em></p>
        </div>

        <div className={styles.projectGrid}>
          {featuredProjects.map((project) => {
            // Map project types to expertise areas
            const getExpertiseAreas = (slug) => {
              switch (slug) {
                case 'geobase': return ['Geospatial Backend', 'Cloud Infrastructure'];
                case 'earthgpt': return ['AI Analytics', 'Earth Observation'];
                case 'verisat': return ['AI Verification', 'Computer Vision'];
                case 'spendmapp': return ['Economic Analytics', 'Data Visualization'];
                case 'geoai-js': return ['JavaScript AI', 'Geospatial ML'];
                case 'kp-asis': return ['Agricultural Stats', 'Satellite Data'];
                case 'esa-philab': return ['Research', 'Deepfake Detection'];
                case 'mangrove': return ['Environmental AI', 'Conservation'];
                default: return ['Data Science'];
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

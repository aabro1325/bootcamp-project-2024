import React from 'react';
import styles from './portfolioContent.module.css';
import Link from "next/link";

type PortfolioContentProps = {
  projects?: { slug: string; title: string; description: string }[]; // Made projects optional
};

const PortfolioContent: React.FC<PortfolioContentProps> = ({ projects = [] }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.portfolioTitle}>Portfolio</h1>
      <div className={styles.projectContainer}>
        {projects.map((project) => (
          <div key={project.slug} className={styles.project}>
            <h2 className={styles.projectName}>{project.title}</h2>
            <p className={styles.projectDescription}>{project.description}</p>
            <Link href={`/portfolio/${project.slug}`} className={styles.button}>Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioContent;

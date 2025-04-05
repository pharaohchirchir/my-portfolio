import React from 'react';
import styles from './Skills.module.css';

const Skills = () => {
  const skills = ['Python', 'SQL', 'Power BI', 'Excel', 'Tableau', 'Data Cleaning', 'Machine Learning'];

  return (
    <section className={styles.skills} id="skills">
      <h2>Skills</h2>
      <ul className={styles.list}>
        {skills.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;

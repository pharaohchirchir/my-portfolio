import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.content}>
        <h1>Transforming Raw Data<br />
        Into Strategic Insights</h1>
        <p>I help businesses make data-driven decisions through analytics and visualization.</p>
        <a href="#projects" className={styles.cta}>View My Work</a>
        <br />
        <a href="https://chirchirp.github.io/resume/" target="_blank" className={styles.cta}>View My Resume</a>
        
      </div>
    </section>
  );
};

export default Hero;

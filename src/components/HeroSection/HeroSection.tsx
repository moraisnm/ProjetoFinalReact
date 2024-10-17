import React from 'react';
import styles from './HeroSection.module.css';
import useImages from '../../hooks/useImages';

const Hero: React.FC = () => {
    const { images, loading, error } = useImages();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading images: {error.message}</div>;
    if (!images) return <div>No images available</div>;

    return (
        <section className={styles.hero}>
            <img src={images.heroImage} alt="Hero" className={styles.heroImage} />
            <div className={styles.additionalContent}>
                <h2>Clever designs, delivered free</h2>
                <button className={styles.shopBedroom}>Shop Bedroom</button>
            </div>
            <div className={styles.heroText}>
                <h1>Clever designs, delivered free</h1>
            </div>
        </section>
    );
};

export default Hero;

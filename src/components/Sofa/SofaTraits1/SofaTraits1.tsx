import React from 'react';
import styles from './SofaTraits1.module.css';
import useImages from '../../../hooks/useImages';

const SofaTraits1: React.FC = () => {
    const { images, loading, error } = useImages();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading video: {error.message}</div>;
    if (!images) return null;

    return (
        <div className={styles.traitsContainer}>
            <div className={styles.traitsContent}>
                <video className={styles.traitsVideo} controls>
                    <source src={images.sofaVideo1} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className={styles.traitsTextContainer}>
                    <h2 className={styles.traitsTitle}>Durable enough for everyday drama</h2>
                    <p className={styles.traitsText}>
                        Each and every component of our furniture is selected for durability, from the galvanized steel latches to the precision-milled Baltic Birch frame. The fabric is inherently scratch-resistant, thanks to an incredibly tight weave, which makes it perfect for pets and their parents.
                    </p>
                    <div className={styles.additionalTraits}>
                        <div className={styles.trait}>
                            <h3 className={styles.traitTitle}>Low carbon footprint</h3>
                            <p className={styles.traitText}>Fabric made from upcycled materials</p>
                        </div>
                        <div className={styles.trait}>
                            <h3 className={styles.traitTitle}>Sustainable wood</h3>
                            <p className={styles.traitText}>Sourced from responsibly managed forests</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SofaTraits1;
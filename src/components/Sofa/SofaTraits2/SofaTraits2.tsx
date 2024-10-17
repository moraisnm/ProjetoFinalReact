import React from 'react';
import styles from './SofaTraits2.module.css';
import useImages from '../../../hooks/useImages';

const SofaTraits2: React.FC = () => {
    const { images, loading, error } = useImages();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading video: {error.message}</div>;
    if (!images) return null;

    return (
        <div className={styles.traitsContainer}>
            <div className={styles.traitsContent}>
                <div className={styles.traitsTextContainer}>
                    <h2 className={styles.traitsTitle}>Don't sweat the spills</h2>
                    <p className={styles.traitsText}>
                        Our olefin fabric is stain-resistant thanks to a deep dyeing process that colors each individual strand to the core, as opposed to other fibers that have little pores that absorb stains. You can even spray spills with a water and bleach solution (yes, we said bleach) and blot it out to clean stains.
                    </p>
                    <div className={styles.additionalTraits}>
                        <div className={styles.trait}>
                            <h3 className={styles.traitTitle}>Non toxic</h3>
                            <p className={styles.traitText}>Zero chemical additives or treatments</p>
                        </div>
                        <div className={styles.trait}>
                            <h3 className={styles.traitTitle}>Zero PFCs</h3>
                            <p className={styles.traitText}>Fabric free of dangerous formaldehydes</p>
                        </div>
                    </div>
                </div>
                <video className={styles.traitsVideo} controls>
                    <source src={images.sofaVideo2} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default SofaTraits2;
import React from 'react';
import styles from './KeyFeatures.module.css';
import useImages from '../../../hooks/useImages';

const KeyFeatures: React.FC = () => {
    const { images, loading, error } = useImages();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading images: {error.message}</div>;
    if (!images) return null;

    const featureImages = [
        images.featureImage1,
        images.featureImage2,
        images.featureImage3,
        images.featureImage4,
        images.featureImage5,
    ];
    const featureTitles = ['Customizable', 'Frame', 'Hardware', 'Charger', 'Legs'];

    return (
        <div className={styles.featuresContainer}>
            <h2 className={styles.featuresTitle}>Key Features</h2>
            <div className={styles.icons}>
                {featureImages.map((image, index) => (
                    <div key={index} className={styles.feature}>
                        <img src={image} alt={featureTitles[index]} className={styles.icon} />
                        <p className={styles.subtitle}>{featureTitles[index]}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default KeyFeatures;
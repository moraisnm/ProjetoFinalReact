import React from 'react';
import styles from './SofaRecommendations.module.css';
import useImages from '../../../hooks/useImages';

const SofaRecommendations: React.FC = () => {
  const { images, loading, error } = useImages();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading images: {error.message}</div>;
  if (!images || !images.recommendationImages) return null;

  const recommendationImages = images.recommendationImages;

  return (
    <div className={styles.recommendationsContainer}>
      <h2 className={styles.recommendationsTitleText}>Here's what else our designers recommend</h2>
      <div className={styles.recommendationsContent}>
        {recommendationImages.map((imageSrc, index) => (
          <div key={index} className={styles.recommendationsItem}>
            <img
              src={imageSrc}
              alt={`Recommendation ${index + 1}`}
              className={styles.recommendationsItemImage}
            />
            <div className={styles.recommendationsText}>
              <h3 className={styles.recommendationsItemTitle}>Nomad Sofa</h3>
              <p className={styles.recommendationsItemDescription}>$1595 or as low as $100/mo</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SofaRecommendations;
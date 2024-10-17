import React from 'react';
import styles from './Commnents.module.css';
import useImages from '../../hooks/useImages';

const Reviews: React.FC = () => {
  const { images, loading, error } = useImages();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading images: {error.message}</div>;
  if (!images) return null;

  const reviewImageUrl = images.reviewsImage;

  return (
    <section className={styles.review}>
      <div className={styles.textContainer}>
        <h3>NOMAD</h3>
        <p><b>The Ambid</b> system works beautifully. It's comfortable, absolutely solid, and looks great.</p>
        <button>SHOP NOW</button>
      </div>
      <div className={styles.imageContainer}>
        {reviewImageUrl && <img src={reviewImageUrl} alt="Product Image" />}
      </div>
    </section>
  );
};

export default Reviews;
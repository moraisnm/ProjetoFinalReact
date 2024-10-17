import React from 'react';
import styles from './VideoSection.module.css';
import useImages from '../../hooks/useImages';

const VideoSection: React.FC = () => {
  const { images, loading, error } = useImages();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading video: {error.message}</div>;
  if (!images) return null;

  return (
    <div className={styles.videoContainer}>
      <h2 className={styles.title}>Modular, easy-to-move design</h2>
      <div className={styles.videoWrapper}>
        <video className={styles.video} controls>
          <source src={images.backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <button className={styles.shopButton}>SHOP SEATING</button>
    </div>
  );
};

export default VideoSection;
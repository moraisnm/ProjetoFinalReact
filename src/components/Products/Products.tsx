import React from 'react';
import styles from './Products.module.css';
import useImages from '../../hooks/useImages';

const ImageGrid: React.FC = () => {
    const { images, loading, error } = useImages();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading images: {error.message}</div>;
    if (!images || !images.imagesGrid || !Array.isArray(images.imagesGrid)) return null;

    const labels = ['Seating', 'Outdoor', 'Storage', 'Bedroom', 'Tables', 'Rugs'];

    return (
        <section className={styles.imageGrid}>
            {images.imagesGrid.map((imageSrc: string, index: number) => (
                <div key={index} className={styles.gridItem}>
                    <img src={imageSrc} alt={`Image ${index + 1}`} />
                    <div className={styles.overlay}>{labels[index]}</div>
                </div>
            ))}
        </section>
    );
};

export default ImageGrid;

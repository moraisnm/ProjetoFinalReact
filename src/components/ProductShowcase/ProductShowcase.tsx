import React from 'react';
import styles from './ProductShowcase.module.css';
import useImages from '../../hooks/useImages';

const ProductShowcase: React.FC = () => {
    const { images, loading, error } = useImages();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading images: {error.message}</div>;
    if (!images || !Array.isArray(images.grid2)) return null;

    return (
        <section className={styles.productShowcase}>
            <h1>Clever designs, delivered free</h1>
            <div className={styles.productGrid}>
                {images.grid2.map((imageUrl, index) => (
                    <div key={index} className={styles.productItem}>
                        <img src={imageUrl} alt={`Product Image ${index + 1}`} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductShowcase;
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductsSeating.module.css';
import useImages from '../../hooks/useImages';

const ProductsGrid: React.FC = () => {
    const { images, loading, error } = useImages();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading images: {error.message}</div>;
    if (!images || !Array.isArray(images.recommendationImages)) return null;

    const replicatedImages = Array(9).fill(images.recommendationImages).flat().slice(0, 9);

    return (
        <div className={styles.gridContainer}>
            <h2 className={styles.title}>All Seating</h2>
            <p className={styles.description}>
                The main feature of any living room is always going to be the seating. Pick and choose your seating styles to build the perfect place to relax. Unwind by yourself, spend time with your family, or entertain guests, all in ultimate comfort.
            </p>
            <div className={styles.grid}>
                {replicatedImages.map((imageSrc, index) => (
                    <div className={styles.gridItem} key={index}>
                        <Link to="/details">
                            <img src={imageSrc} alt={`Product ${index + 1}`} />
                        </Link>
                        <div className={styles.productInfo}>
                            <h3 className={styles.productTitle}>Nomad Sofa</h3>
                            <p className={styles.productPrice}>$1595 or as low as $100/mo</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className={styles.seeMoreButton}>SEE MORE</button>
        </div>
    );
};

export default ProductsGrid;
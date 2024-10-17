import React, { useState } from 'react';
import styles from './ImageSlider.module.css';
import useImages from '../../hooks/useImages';

const Slider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { images, loading, error } = useImages();

    const nextSlide = () => {
        if (images && images.carouselImages) {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.carouselImages.length);
        }
    };

    const prevSlide = () => {
        if (images && images.carouselImages) {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + images.carouselImages.length) % images.carouselImages.length);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading images: {error.message}</div>;
    if (!images || !Array.isArray(images.carouselImages)) return <div>No images available</div>;

    return (
        <div className={styles.sliderContainer}>
            <h2 className={styles.title}>Shop these real-life spaces</h2>
            <button className={`${styles.sliderButton} ${styles.prev}`} onClick={prevSlide}>‹</button>
            <div className={styles.slider}>
                {images.carouselImages.map((imagePath, index) => (
                    <div
                        className={`${styles.sliderItem} ${index >= currentIndex && index < currentIndex + 4 ? styles.active : ''}`}
                        key={index}
                        style={{ transform: `translateX(-${currentIndex * 25}%)` }}
                    >
                        <img src={imagePath} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
            <button className={`${styles.sliderButton} ${styles.next}`} onClick={nextSlide}>›</button>
        </div>
    );
};

export default Slider;

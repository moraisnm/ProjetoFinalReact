import React from 'react';
import styles from './InformationGeneral.module.css';
import useImages from '../../hooks/useImages';

interface ImagesData {
    bannerImages?: string[];
    [key: string]: any;
}

const isImagesData = (data: any): data is ImagesData => {
    return 'bannerImages' in data;
};

const Banner: React.FC = () => {
    const { images, loading, error } = useImages();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading images: {error.message}</div>;
    if (!images || !isImagesData(images)) return null;

    const imagesData: ImagesData = images;

    return (
        <section className={styles.banner}>
            {imagesData.bannerImages && imagesData.bannerImages.map((imageSrc, index) => (
                <div key={index} className={styles.bannerItem}>
                    <img src={imageSrc} alt={`Banner Image ${index + 1}`} className={styles.bannerImage} />
                    <div className={styles.text}>
                        <h3>{getBannerTitle(index)}</h3>
                        <p>{getBannerDescription(index)}</p>
                    </div>
                </div>
            ))}
        </section>
    );
};

const getBannerTitle = (index: number): string => {
    switch (index) {
        case 0:
            return "Fast & free shipping";
        case 1:
            return "Modular, Easy-to-Move Design";
        case 2:
            return "Durable, Premium Materials";
        default:
            return "";
    }
};

const getBannerDescription = (index: number): string => {
    switch (index) {
        case 0:
            return "Every single order ships for free. No minimums, no tiers, no fine print whatsoever.";
        case 1:
            return "Our innovative modular design is driven by the belief that furniture should fit this home, and the next one.";
        case 2:
            return "We use materials like sustainably-forested wood, strengthened steel hardware, and top-grain Italian leather.";
        default:
            return "";
    }
};

export default Banner;
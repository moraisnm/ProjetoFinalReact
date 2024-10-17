import React from 'react';
import styles from './Sofa.module.css';
import ColorCircles from './ColorCircles/ColorCircles';
import SofaDimensions from './SofaDimensions/SofaDimensions';
import AboutSofa from './InformationSofa/InformationSofa';
import KeyFeatures from './KeyFeatures/KeyFeatures';
import SofaTraits1 from './SofaTraits1/SofaTraits1';
import SofaTraits2 from './SofaTraits2/SofaTraits2';
import SofaRecommendations from './SofaRecomendations/SofaRecommendations';
import useImages from '../../hooks/useImages';

interface SofaProps {
  name: string;
  price: string;
}

const Sofa: React.FC<SofaProps> = ({ name, price }) => {
  const { images, loading, error } = useImages();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading images: {error.message}</div>;
  if (!images) return null;

  return (
    <div className={styles.sofaContainer}>
      <div className={styles.sofaTitle}>
        <h1 className={styles.collectionName}>Nomad Collection</h1>
      </div>
      <div className={styles.sofaContent}>
        <div className={styles.imageSection}>
          <img src={images.sofaImage} alt={name} className={styles.sofaImage} />
          <div className={styles.rectangles}>
            {[...Array(5)].map((_, index) => (
              <div key={index} className={styles.rectangle}></div>
            ))}
          </div>
          <SofaDimensions />
          <AboutSofa />
          <KeyFeatures />
          <SofaTraits1 />
          <SofaTraits2 />
          <SofaRecommendations />
        </div>
        <div className={styles.sofaDetails}>
          <h2 className={styles.sofaName}>Block Nomad Sofa</h2>
          <p className={styles.sofaPrice}>{price} + Free Shipping</p>
          <p className={styles.fabricColor}>Fabric Color - Navy Blue</p>
          <ColorCircles />
          <div className={styles.additionalDetails}>
            <div className={styles.detailSection}>
              <h3 className={styles.detailTitle}>Arm Style</h3>
              <div className={styles.icons}>
                {images.armStyleIcon1 && <img src={images.armStyleIcon1} alt="Arm Style 1" className={styles.icon} />}
                {images.armStyleIcon2 && <img src={images.armStyleIcon2} alt="Arm Style 2" className={styles.icon} />}
              </div>
            </div>
            <div className={styles.detailSection}>
              <h3 className={styles.detailTitle}>Flip Back Cushions</h3>
              <div className={styles.icons}>
                {images.flipBackIcon1 && <img src={images.flipBackIcon1} alt="Flip Back Cushion 1" className={styles.icon} />}
                {images.flipBackIcon2 && <img src={images.flipBackIcon2} alt="Flip Back Cushion 2" className={styles.icon} />}
              </div>
            </div>
          </div>
          <h3 className={styles.detailTitle}>Upgrades</h3>
          <div className={styles.upgradesList}>
            <label className={styles.upgradeItem}>
              <input type="checkbox" className={styles.checkbox} />
              Moveable chaise + $495
            </label>
            <label className={styles.upgradeItem}>
              <input type="checkbox" className={styles.checkbox} />
              Ottoman + $345
            </label>
            <label className={styles.upgradeItem}>
              <input type="checkbox" className={styles.checkbox} />
              Lumbar Pillows + $135
            </label>
            <label className={styles.upgradeItem}>
              <input type="checkbox" className={styles.checkbox} />
              Sleep Kit + $295
            </label>
          </div>
          <button className={styles.addToCartButton}>ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default Sofa;
import React from 'react';
import styles from './InformationSofa.module.css';

const AboutSofa: React.FC = () => {
    return (
        <div className={styles.aboutContainer}>
            <h2 className={styles.aboutTitle}>About this piece</h2>
            <p className={styles.aboutText}>
                The ideal three-seat sofa featuring one seat with a chaise lounge addition, one seat with an ottoman, and one seat for the chiropractor who loves to sit upright with their feet on the floor. Like everything we make, our modular design is incredibly easy to move and packed with all the clever, life-changing features you expect from Burrow, starting with a built-in USB charger.
            </p>
            <div className={styles.features}>
                <div className={styles.feature}>
                    <h3 className={styles.featureTitle}>Customizable</h3>
                    <p className={styles.featureText}>
                        Create your ideal sectional sofa with five fabric colors, six leg finishes, and three armrest heights. You can even swap the reversible back cushions: one side is tufted for a classic look, the other smooth and contemporary.
                    </p>
                </div>
                <div className={styles.feature}>
                    <h3 className={styles.featureTitle}>Adaptable</h3>
                    <p className={styles.featureText}>
                        Rest easy with the knowledge that your new furniture can grow and expand with your life, thanks to the universal, modular design of our Nomad Collection.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutSofa;
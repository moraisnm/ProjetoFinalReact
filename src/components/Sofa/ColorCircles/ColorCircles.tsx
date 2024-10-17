import React from 'react';
import styles from './ColorCircles.module.css';

const colors = ['#011F89', '#3D8901', '#890109', '#3D8901', '#131313', '#131313'];

const ColorCircles: React.FC = () => {
    return (
        <div className={styles.colorCircles}>
            {colors.map((color, index) => (
                <div
                    key={index}
                    className={styles.circle}
                    style={{ backgroundColor: color }}
                ></div>
            ))}
        </div>
    );
};

export default ColorCircles;
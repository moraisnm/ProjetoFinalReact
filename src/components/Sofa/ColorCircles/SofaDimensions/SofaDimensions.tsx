import React from 'react';
import styles from './SofaDimensions.module.css';
import dimensionsImage from '../../assets/image10.jpg';

const SofaDimensions: React.FC = () => {
    return (
        <div className={styles.dimensionsContainer}>
            <h2 className={styles.dimensionsTitle}>Dimensions:</h2>
            <div className={styles.dimensionsContent}>
                <table className={styles.dimensionsTable}>
                    <tbody>
                        <tr>
                            <td>General Dimensions</td>
                            <td>86" L x 61" D x 33" H</td>
                        </tr>
                        <tr>
                            <td>Seat Height</td>
                            <td>17"</td>
                        </tr>
                        <tr>
                            <td>Arm Height</td>
                            <td>23"</td>
                        </tr>
                        <tr>
                            <td>Chaise Length</td>
                            <td>13"</td>
                        </tr>
                        <tr>
                            <td>Seat Depth</td>
                            <td>134"</td>
                        </tr>
                        <tr>
                            <td>Chaise Seat Depth</td>
                            <td>11"</td>
                        </tr>
                        <tr>
                            <td>Leg Height</td>
                            <td>7”</td>
                        </tr>
                        <tr>
                            <td>Ottoman Dimensions</td>
                            <td>26" L x 26" W x 17" H</td>
                        </tr>
                    </tbody>
                </table>
                <img src={dimensionsImage} alt="Sofa Dimensions" className={styles.dimensionsImage} />
            </div>
        </div>
    );
};

export default SofaDimensions;
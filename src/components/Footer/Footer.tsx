import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.notifications}>
        <div className={styles.newsletter}>
          <input type="email" placeholder="Sign Up For Enthralling Couch Reads" className={styles.newsletterInput} />
          <button className={styles.newsletterButton}>SUBSCRIBE</button>
        </div>
        <div className={styles.socialMedia}>
          <a href="https://www.facebook.com" className={styles.socialIcon} target="_blank" aria-label="Facebook">
            <img src="/public/images/facebook.svg" alt="Facebook" />
          </a>
          <a href="https://www.instagram.com" className={styles.socialIcon} target="_blank" aria-label="Instagram">
            <img src="/public/images/instagram.svg" alt="Instagram" />
          </a>
          <a href="https://www.whatsapp.com" className={styles.socialIcon} target="_blank" aria-label="WhatsApp">
            <img src="/public/images/whatsapp.svg" alt="WhatsApp" />
          </a>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.footerColumn}>
          <h3>Shopping Services</h3>
          <ul className={styles.bottomList}>
            <li><a href="#">Schedule Consultation</a></li>
            <li><a href="#">Showrooms</a></li>
            <li><a href="#">Trade Program</a></li>
            <li><a href="#">Outlet</a></li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h3>About</h3>
          <ul className={styles.bottomList}>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Reviews</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Financing</a></li>
            <li><a href="#">Patents</a></li>
            <li><a href="#">Our Blog</a></li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h3>Resources</h3>
          <ul className={styles.bottomList}>
            <li><a href="#">Look Up Order Status</a></li>
            <li><a href="#">Assembly Instructions</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Shipping & Delivery</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Refer a Friend</a></li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h3>Contact Customer Experience</h3>
          <ul className={styles.bottomList}>
            <li>Email <a href="mailto:support@template.com">support@template.com</a></li>
            <li>Text: 224-628-7769</li>
            <li>Hours:</li>
            <li>Monday to Friday — 10a to 8p EST</li>
            <li>Saturday to Sunday — 10a to 2p EST</li>
          </ul>
        </div>
      </div>
      <div className={styles.footerLegal}>
        <div className={styles.footerLegalLeft}>
          <p>© 2023 Template</p>
          <p>Terms - Accessibility - Sitemap - Privacy</p>
        </div>
        <div className={styles.footerLegalRight}>
          <p>15 W 27th Street, 9th Floor New York, NY, 10001</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
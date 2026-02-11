// Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerTop}>
        <div style={styles.footerSection}>
          <h3 style={styles.footerHeading}>Contact Us</h3>
          <p style={styles.footerText}>Email:shubhamtiwari9508@gmail.com</p>
          <p style={styles.footerText}>Phone: +91 9508612294</p>
        </div>

        <div style={styles.footerSection}>
          <h3 style={styles.footerHeading}>Quick Links</h3>
          <ul style={styles.footerList}>
            <li style={styles.footerListItem}>Home</li>
            <li style={styles.footerListItem}>About</li>
            <li style={styles.footerListItem}>Privacy Policy</li>
            <li style={styles.footerListItem}>Terms of Service</li>
            <li style={styles.footerListItem}>Support</li>
          </ul>
        </div>

        <div style={styles.footerSection}>
          <h3 style={styles.footerHeading}>Follow Us</h3>
          <div style={styles.socialLinks}>
            <a href="https://www.linkedin.com/in/shubham-tiwari-28b39a32b" style={styles.socialLink}>
              LinkedIn
            </a>
            <a href="https://github.com/Shubhamtiwari9509" style={styles.socialLink}>
              Git Hub 
            </a>
            <a href="https://instagram.com" style={styles.socialLink}>
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div style={styles.footerBottom}>
        <p style={styles.footerText}>© 2026 Shubh GPT. All rights reserved.</p>
        <p style={styles.footerText}>Powered by Shubh GPT Technologies</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "20px 20px",
   // marginTop: "40px",
  },
  footerTop: {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    marginBottom: "30px",
  },
  footerSection: {
    width: "30%",
  },
  footerHeading: {
    fontSize: "1.4rem",
    fontWeight: "600",
    marginBottom: "15px",
  },
  footerText: {
    fontSize: "1rem",
    marginBottom: "10px",
  },
  footerList: {
    listStyleType: "none",
    padding: "0",
  },
  footerListItem: {
    fontSize: "1rem",
    marginBottom: "8px",
    color: "#bbb",
  },
  socialLinks: {
    display: "flex",
    flexDirection: "column",
  },
  socialLink: {
    color: "#00e0ff",
    fontSize: "1rem",
    textDecoration: "none",
    marginBottom: "10px",
  },
  footerBottom: {
    textAlign: "center",
    fontSize: "1rem",
    color: "#bbb",
  },

  
  '@media (max-width: 768px)': {
    footerTop: {
      flexDirection: "column",
      alignItems: "center",
    },
    footerSection: {
      width: "80%",
      marginBottom: "20px",
    },
  },
};

export default Footer;

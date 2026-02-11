import React from "react";
import shubhamtiwari from "./shubhamtiwari.jpeg";

const About = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>About Shubh GPT</h1>
        <p style={styles.subtitle}>Your Personal AI Assistant</p>
      </header>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>What is Shubh GPT?</h2>
        <p style={styles.sectionContent}>
          Shubh GPT is an advanced AI-powered assistant built to help you with
          various tasks, from answering questions to helping you stay organized
          in your personal and professional life. With fast response times and a
          friendly interface, Shubh GPT makes AI technology accessible to
          everyone.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Features</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Fast and responsive chatbot</li>
          <li style={styles.listItem}>Context-aware conversations</li>
          <li style={styles.listItem}>Seamless integration with multiple platforms</li>
          <li style={styles.listItem}>Personalized suggestions based on usage</li>
          <li style={styles.listItem}>24/7 support</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Benefits</h2>
        <p style={styles.sectionContent}>
          With Shubh GPT, you can automate everyday tasks, get answers quickly,
          and boost your productivity. It helps save time and effort, allowing
          you to focus on more important things in life.
        </p>
        <p style={styles.sectionContent}>
          Whether you're a student, professional, or entrepreneur, Shubh GPT
          adapts to your needs and provides reliable assistance every step of
          the way.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Meet the  Developer</h2>
        <div style={styles.teamContainer}>
          <div style={styles.teamMember}>
            <img
              src={shubhamtiwari}  
              alt="Shubham Tiwari"
              style={styles.teamImage}
            />
            <h3 style={styles.teamMemberName}>Shubham Tiwari</h3>
             
          </div>
             </div>
        
      </section>

      <footer style={styles.footer}>
        <p style={styles.footerText}>© 2026 Shubh GPT. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Roboto', sans-serif",
    margin: "0 auto",
    padding: "20px",
    maxWidth: "1200px",
    backgroundColor: "#f4f4f9",
    color: "#333",
  },
  header: {
    textAlign: "center",
    marginBottom: "40px",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#555",
  },
  section: {
    marginBottom: "30px",
  },
  sectionTitle: {
    fontSize: "2rem",
    fontWeight: "600",
    color: "#4e4e4e",
    marginBottom: "10px",
  },
  sectionContent: {
    fontSize: "1.1rem",
    color: "#666",
    lineHeight: "1.6",
  },
  list: {
    listStyleType: "disc",
    paddingLeft: "20px",
  },
  listItem: {
    fontSize: "1.1rem",
    marginBottom: "8px",
  },
  teamContainer: {
   margin:"0 0 0 40%"
  },
  teamMember: {
    textAlign: "center",
    width: "30%",
  },
  teamImage: {
    borderRadius: "50%",
    width: "150px",
    height: "150px",
    objectFit: "cover",
    marginBottom: "10px",
  },
  teamMemberName: {
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  teamMemberRole: {
    fontSize: "1rem",
    color: "#777",
  },
  footer: {
    textAlign: "center",
    marginTop: "50px",
  },
  footerText: {
    fontSize: "1rem",
    color: "#999",
  },

  
  '@media (max-width: 768px)': {
    container: {
      padding: "10px",
    },
    title: {
      fontSize: "2rem",
    },
    subtitle: {
      fontSize: "1rem",
    },
    sectionTitle: {
      fontSize: "1.5rem",
    },
    sectionContent: {
      fontSize: "1rem",
    },
    teamContainer: {
      flexDirection: "column",
      alignItems: "center",
    },
    teamMember: {
      width: "80%",
      marginBottom: "20px",
    },
  },
};

export default About;

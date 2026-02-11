 import React from "react";
import landing_img from './landing__img.png'
import { useNavigate } from "react-router-dom";
const Home = () => {
 const navigate=useNavigate();
  const goChat=(e)=>{
    e.preventDefault();
    navigate("/chatpage");
  };
  return (
    <div style={styles.container}>
      {/* <div style={styles.card}>
        <h1 style={styles.title}>🤖 Shubh GPT</h1>
        <p style={styles.subtitle}>
          Smart. Fast. Your Personal AI Assistant.
        </p> */}

        {/* <div style={styles.buttons}>
          <button style={styles.primaryBtn}>Get Started</button>
          <button style={styles.secondaryBtn}>Learn More</button>
        </div> */}
         <button onClick={goChat} style={styles.primaryBtn}>Get Started</button>
      {/* </div> */}
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    width: "100%",
    backgroundImage:`url(${landing_img})`,
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    // justifyContent: "center",
     alignItems: "center",
     padding: "18% 0 0 21%",
  },


  card: {
    width: "100%",
    maxWidth: "420px",
    padding: "35px 25px",
    borderRadius: "18px",
    background: "rgba(255, 255, 255, 0.12)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    textAlign: "center",
    color: "#fff",
    boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
  },

  title: {
    fontSize: "2.4rem",
    marginBottom: "10px",
    fontWeight: "700",
  },

  subtitle: {
    fontSize: "1.05rem",
    opacity: 0.9,
    marginBottom: "25px",
  },

  buttons: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  primaryBtn: {
    padding: "14px",
    fontSize: "1rem",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    background: "linear-gradient(135deg, #00e0ff, #6a5cff)",
    color: "#000",
    fontWeight: "bold",
  },

  secondaryBtn: {
    padding: "14px",
    fontSize: "1rem",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.4)",
    cursor: "pointer",
    background: "transparent",
    color: "#fff",
  },
};

export default Home;


 
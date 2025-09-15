import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/images/bg.jpg')", // put bg.jpg in public/images
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.4)", // Darkens image for contrast
          zIndex: 0,
        }}
      ></div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, color: "#fff", padding: "2rem" }}>
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            textShadow: "3px 3px 8px rgba(0,0,0,0.8)",
            marginBottom: "1rem",
          }}
        >
          GreenHouse
        </h1>
        <p
          style={{
            fontSize: "1.3rem",
            maxWidth: "600px",
            margin: "0 auto 2rem auto",
            textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
            lineHeight: "1.6",
          }}
        >
          GreenHouse sells easy-care houseplants to brighten your home and purify
          the air. Fresh plants, fast delivery.
        </p>
        <button
          onClick={() => navigate("/products")}
          style={{
            backgroundColor: "#4CAF50",
            border: "none",
            padding: "0.9rem 2.2rem",
            fontSize: "1.2rem",
            borderRadius: "8px",
            cursor: "pointer",
            color: "#fff",
            fontWeight: "600",
            boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default LandingPage;

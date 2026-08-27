import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  const [resumeData, setResumeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("./resumeData.json")
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao carregar dados do currículo");
        return res.json();
      })
      .then((data) => {
        setResumeData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao obter dados:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#090d16",
        color: "#38bdf8",
        gap: "16px"
      }}>
        <div style={{
          width: "48px",
          height: "48px",
          border: "4px solid rgba(56, 189, 248, 0.2)",
          borderTopColor: "#38bdf8",
          borderRadius: "50%",
          animation: "spin 1s linear infinite"
        }}></div>
        <p style={{ fontFamily: "Outfit, sans-serif", fontSize: "1.1rem", fontWeight: "600" }}>
          Carregando portfólio...
        </p>
        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  if (!resumeData) {
    return (
      <div style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#090d16",
        color: "#f8fafc",
        padding: "20px",
        textAlign: "center"
      }}>
        <p>Não foi possível carregar as informações do portfólio. Recarregue a página.</p>
      </div>
    );
  }

  return (
    <div className="App">
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Resume data={resumeData.resume} />
      <Portfolio data={resumeData.portfolio} />
      <Contact data={resumeData.main} />
      <Footer data={resumeData.main} />
    </div>
  );
}

export default App;


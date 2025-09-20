import React, { useEffect, useState } from "react";

function App() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = date.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedTime = date.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Inter', 'Roboto', sans-serif",
      }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(255, 255, 255, 0.25)",
          borderRadius: "20px",
          padding: "40px 32px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
          textAlign: "center",
          maxWidth: "420px",
          width: "100%",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: 800,
            marginBottom: "24px",
            background: "linear-gradient(135deg, #00d4ff, #007bff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Welcome to CHARUSAT 🎉
        </h1>

        <div
          style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            color: "#fff",
            marginBottom: "12px",
            textShadow: "0 2px 6px rgba(0,0,0,0.3)",
          }}
        >
          📅 {formattedDate}
        </div>

        <div
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            color: "#fff",
            textShadow: "0 2px 8px rgba(0,0,0,0.4)",
            letterSpacing: "1px",
          }}
        >
          ⏰ {formattedTime}
        </div>
      </div>
    </div>
  );
}

export default App;

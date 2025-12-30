import React, { useState } from "react";

const Poll = () => {
  const [votes, setVotes] = useState([0, 0, 0, 0]);

  const vote = (index) => {
    const newVotes = [...votes];
    newVotes[index]++;
    setVotes(newVotes);
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1 style={styles.heading}>📊 Classroom Live Poll</h1>
        <p style={styles.question}>Which topic do you want to revise?</p>

        <button style={styles.button} onClick={() => vote(0)}>AI Basics</button>
        <button style={styles.button} onClick={() => vote(1)}>Machine Learning</button>
        <button style={styles.button} onClick={() => vote(2)}>Deep Learning</button>
        <button style={styles.button} onClick={() => vote(3)}>Data Science</button>

        <h2 style={styles.resultTitle}>Live Results</h2>
        <div style={styles.results}>
          <p>AI Basics: {votes[0]}</p>
          <p>Machine Learning: {votes[1]}</p>
          <p>Deep Learning: {votes[2]}</p>
          <p>Data Science: {votes[3]}</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  body: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    fontFamily: "Arial, sans-serif",
  },
  container: {
    background: "#1f2933",
    padding: "25px",
    borderRadius: "12px",
    width: "360px",
    textAlign: "center",
    color: "#fff",
    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
  },
  heading: {
    marginBottom: "10px",
  },
  question: {
    fontSize: "18px",
    marginBottom: "15px",
  },
  button: {
    width: "100%",
    padding: "10px",
    margin: "6px 0",
    fontSize: "16px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#4ade80",
    color: "#000",
  },
  resultTitle: {
    marginTop: "15px",
  },
  results: {
    textAlign: "left",
    marginTop: "10px",
  },
};

export default Poll;

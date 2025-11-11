import React from "react";
import { useNavigate } from "react-router-dom";
import "./ShowBlog.css";

const ShowBlog = () => {
  const navigate = useNavigate();
  const blogData = JSON.parse(localStorage.getItem("blogData"));

  if (!blogData) {
    return (
      <div className="no-blog">
        <h2>No blog found.</h2>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    );
  }

  // ✅ Save Blog as Text File
  const handleSave = () => {
    const content = `Title: ${blogData.title}\n\n${blogData.content}`;
    const blob = new Blob([content], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${blogData.title}.txt`;
    link.click();
    URL.revokeObjectURL(link.href);
  };

  // ✅ Print Blog
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="show-container">
      <div className="blog-hero">
        <img src={blogData.image} alt={blogData.title} className="hero-img" />
        <div className="hero-overlay">
          <h1>{blogData.title}</h1>
          <p className="hero-date">
            📅 Posted on{" "}
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>

      <div className="blog-content-section">
        <p className="intro">{blogData.content}</p>

        {/* ✅ Work-Life Balance */}
        {blogData.title === "Work-Life Balance" && (
          <>
            <h2>Why Work-Life Balance Matters</h2>
            <p>
              Maintaining a healthy work-life balance is essential for your
              overall happiness and performance.
            </p>

            <h2>Practical Tips for Balance ⚖️</h2>
            <ul className="tips-list">
              <li>Set clear work boundaries.</li>
              <li>Prioritize self-care.</li>
              <li>Learn to say no.</li>
              <li>Focus on results, not hours.</li>
              <li>Disconnect digitally.</li>
            </ul>

            <blockquote className="quote">
              “Don’t get so busy making a living that you forget to make a life.”  
              <br />— Dolly Parton
            </blockquote>
          </>
        )}

        {/* ✅ Healthy Eating Habits */}
        {blogData.title === "Healthy Eating Habits" && (
          <>
            <h2>Why Healthy Eating Matters</h2>
            <p>
              The food you eat shapes your health, mood, and energy.
            </p>

            <h2>Practical Nutrition Tips 🥗</h2>
            <ul className="tips-list">
              <li>Eat colorful fruits & vegetables.</li>
              <li>Stay hydrated throughout the day.</li>
              <li>Choose whole, unprocessed foods.</li>
              <li>Eat mindfully — savor every bite.</li>
              <li>Plan meals ahead to avoid junk food.</li>
            </ul>

            <blockquote className="quote">
              “Let food be thy medicine and medicine be thy food.”  
              <br />— Hippocrates
            </blockquote>
          </>
        )}

        {/* ✅ Fitness Motivation */}
        {blogData.title === "Fitness Motivation" && (
          <>
            <h2>Why Exercise Matters 💪</h2>
            <p>
              Physical activity keeps your body strong and your mind sharp.
            </p>

            <ul className="tips-list">
              <li>Set realistic fitness goals.</li>
              <li>Find motivation from within.</li>
              <li>Make it fun — dance, hike, play!</li>
              <li>Stay consistent with your routine.</li>
              <li>Celebrate progress, not perfection.</li>
            </ul>

            <blockquote className="quote">
              “It’s not about being the best. It’s about being better than you were yesterday.”
            </blockquote>
          </>
        )}

        {/* ✅ Morning Routines */}
        {blogData.title === "Morning Routines" && (
          <>
            <h2>Start Your Day Right ☀️</h2>
            <p>
              A great morning routine sets a positive tone for your day.
            </p>

            <ul className="tips-list">
              <li>Wake up early and avoid rushing.</li>
              <li>Avoid your phone first thing.</li>
              <li>Move your body — stretch or walk.</li>
              <li>Plan your top 3 goals for the day.</li>
              <li>Practice gratitude before you start.</li>
            </ul>

            <blockquote className="quote">
              “Either you run the day or the day runs you.”  
              <br />— Jim Rohn
            </blockquote>
          </>
        )}

        {/* ✅ Mindfulness & Meditation */}
        {blogData.title === "Mindfulness & Meditation" && (
          <>
            <h2>Being Present in the Moment 🌼</h2>
            <p>
              Mindfulness is about focusing on the present without judgment. It
              reduces stress and brings peace.
            </p>

            <h2>Daily Mindfulness Practices</h2>
            <ul className="tips-list">
              <li>Take slow, deep mindful breaths.</li>
              <li>Observe your thoughts — don’t react.</li>
              <li>Eat slowly and enjoy your food.</li>
              <li>Take digital breaks daily.</li>
              <li>Write down 3 things you’re grateful for.</li>
            </ul>

            <blockquote className="quote">
              “The present moment is filled with joy and happiness. If you are attentive, you will see it.”  
              <br />— Thich Nhat Hanh
            </blockquote>

            <h2>Meditation for Calm 🧘‍♂️</h2>
            <p>
              Meditation helps quiet your thoughts and build mental clarity.
            </p>

            <ul className="tips-list">
              <li>Find a quiet place and sit comfortably.</li>
              <li>Focus on your breath — inhale, exhale slowly.</li>
              <li>Let thoughts come and go peacefully.</li>
              <li>Be consistent — 5–10 minutes a day works wonders.</li>
              <li>Try guided sessions using YouTube or apps.</li>
            </ul>

            <blockquote className="quote">
              “The thing about meditation is: you become more and more you.”  
              <br />— David Lynch
            </blockquote>
          </>
        )}
      </div>

      <div className="button-group">
        <button className="back-btn" onClick={() => navigate("/")}>
          ← Back to Home
        </button>
        <button className="save-btn" onClick={handleSave}>
          💾 Save Blog
        </button>
        <button className="print-btn" onClick={handlePrint}>
          🖨️ Print Blog
        </button>
      </div>
    </div>
  );
};

export default ShowBlog;

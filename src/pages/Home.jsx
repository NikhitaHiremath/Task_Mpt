import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import logo from "../assets/logo.png";

import worklife from "../assets/worklife.jpg";
import healthy from "../assets/healthy.jpg";
import morning from "../assets/morning.jpg";
import fitness from "../assets/fitness.jpg";
import meditation from "../assets/meditation.jpg";

const Home = () => {
  const [blog, setBlog] = useState({ title: "", content: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("blogData", JSON.stringify(blog));
    navigate("/show");
  };

  const topics = [
    {
      title: "Work-Life Balance",
      content:
        "Learn how to maintain a healthy balance between work and personal life through mindful habits and time management.",
      image: worklife,
    },
    {
      title: "Healthy Eating Habits",
      content:
        "Discover easy ways to make nutritious food choices every day for long-term energy and wellness.",
      image: healthy,
    },
    {
      title: "Morning Routines",
      content:
        "Kickstart your mornings with positivity, mindfulness, and routines that set you up for success.",
      image: morning,
    },
    {
      title: "Fitness Motivation",
      content:
        "Find inspiration to stay consistent with your workouts and enjoy the process of getting fit.",
      image: fitness,
    },
    {
      title: "Mindfulness & Meditation",
      content:
        "Explore techniques to calm your mind, reduce stress, and find peace in the present moment.",
      image: meditation,
    },
  ];

  const openBlog = (topic) => {
    localStorage.setItem("blogData", JSON.stringify(topic));
    navigate("/show");
  };

  return (
    <>
      {/* Header Section */}
     <section className="hero-section">
  <div className="hero-content">
    <img src={logo} alt="Logo" className="hero-logo" />
    <h1>Lifestyle & Wellness</h1>
    <p>Live Healthy. Feel Happy. Stay Balanced.</p>
  </div>
</section>


      {/* Blog Form */}
      <form className="blog-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter blog title..."
          value={blog.title}
          onChange={(e) => setBlog({ ...blog, title: e.target.value })}
          required
        />
        <textarea
          placeholder="Write your blog here..."
          value={blog.content}
          onChange={(e) => setBlog({ ...blog, content: e.target.value })}
          required
        ></textarea>
        <button type="submit" className="show-btn">
          Show Blog
        </button>
      </form>

      {/* Blog Cards */}
      <div className="blog-cards">
        {topics.map((topic, i) => (
          <div key={i} className="blog-card" onClick={() => openBlog(topic)}>
            <img src={topic.image} alt={topic.title} className="blog-img" />
            <div className="blog-content">
              <h3>{topic.title}</h3>
              <p>{topic.content.slice(0, 80)}...</p>
              <button className="read-btn">Read More</button>
            </div>
          </div>
        ))}
      </div>

      {/* Wellness Insights Section */}
      <section className="insights-section">
        <h2>🌿 Wellness Insights</h2>
        <p>
          A healthy lifestyle isn't just about diet or fitness — it's about
          balance, mindfulness, and making small, sustainable choices that bring
          you joy and peace.
        </p>

        <div className="insight-grid">
          <div className="insight-box">
            <h3>🧠 Mental Wellness</h3>
            <p>
              Practice gratitude and self-reflection daily. Even 10 minutes of
              mindfulness can improve focus, reduce stress, and enhance
              happiness.
            </p>
          </div>
          <div className="insight-box">
            <h3>💪 Physical Activity</h3>
            <p>
              Move your body every day — whether it’s yoga, walking, or dancing.
              Consistency matters more than intensity.
            </p>
          </div>
          <div className="insight-box">
            <h3>🍎 Nutrition</h3>
            <p>
              Choose whole, colorful foods. Nourish your body with real
              ingredients — not restrictions.
            </p>
          </div>
          <div className="insight-box">
            <h3>🌞 Mindful Living</h3>
            <p>
              Slow down and savor small moments — your morning coffee, a sunset,
              or a chat with a loved one.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Lifestyle & Wellness | Designed with 💚
          for healthy living.
        </p>
      </footer>
    </>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import "../styles/HomePageDark.css";

const looks = [
  { id: 1, name: "Winter Look", image: "/images/store.png" },
  { id: 2, name: "Street Fit", image: "/images/collec.png" },
  { id: 3, name: "Minimal", image: "/images/unic.png" },
  { id: 4, name: "Trendy", image: "/images/Trendy.png" },
  { id: 5, name: "Classic", image: "/images/store.png" },
];

const HomePage = () => {
  const navigate = useNavigate();
  const [activeLook, setActiveLook] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActiveLook((p) => (p + 1) % looks.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const goPrev = () => setActiveLook((p) => (p - 1 + looks.length) % looks.length);
  const goNext = () => setActiveLook((p) => (p + 1) % looks.length);

  return (
    <Layout title="Home - Ecommerce">
      <section className="heroDark heroFull">
        <div className="heroMain">
          <div className="heroCopy">
            <div className="badge">New collection 2026</div>
            <h1 className="heroTitle">
              Where style speaks, trends resonate, fashion flourishes
            </h1>
            <p className="heroSub">
              Discover curated outfits and everyday essentials. Browse categories and add to cart in seconds.
            </p>
            <div className="heroBtns">
              <button className="solidBtn" onClick={() => navigate("/category")}>
                Shop now
              </button>
              <button className="ghostBtn" onClick={() => navigate("/cart")}>
                View cart
              </button>
            </div>
          </div>

          <div className="lookStrip">
            <button className="navArrow" onClick={goPrev} aria-label="Previous">‹</button>
            <div className="lookList">
              {looks.map((l, idx) => (
                <button
                  key={l.id}
                  className={`lookCard ${idx === activeLook ? "lookCardActive" : ""}`}
                  onClick={() => setActiveLook(idx)}
                >
                  <img src={l.image} alt={l.name} />
                  <div className="lookName">{l.name}</div>
                </button>
              ))}
            </div>
            <button className="navArrow" onClick={goNext} aria-label="Next">›</button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;

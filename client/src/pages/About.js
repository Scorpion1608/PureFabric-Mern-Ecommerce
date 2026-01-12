import React from "react";
import Layout from "../components/Layout/Layout";
import "../styles/AboutUs.css";

const About = () => {
  return (
    <Layout title="About Us - Ecommerce App">
      <div className="about-container">
        <div className="about-wrapper">
          
          {/* LEFT IMAGE */}
          <div className="about-image">
            {/* Replace src with your own image */}
            <img
              src="/images/AboutUs.png"
              alt="About our company"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="about-content">
            <h1>About Our Company</h1>

            <p>
              Welcome to <strong>PureFabric</strong>, your trusted destination
              for high-quality products at affordable prices. We focus on
              delivering a smooth, secure, and enjoyable shopping experience.
            </p>

            <p>
              Our mission is to bridge the gap between quality and convenience.
              From fashion to essentials, we carefully curate products that meet
              your expectations.
            </p>

            <ul>
              <li>✅ High-quality Apparels</li>
              <li>✅ Secure payments</li>
              <li>✅ Fast delivery</li>
              <li>✅ Customer-first support</li>
            </ul>

            <div className="about-actions">
              <a href="/contact" className="btn-primary">
                Contact Us
              </a>
              <a href="/policy" className="btn-secondary">
                Privacy Policy
              </a>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default About;

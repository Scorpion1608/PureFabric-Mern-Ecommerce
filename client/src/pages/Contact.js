import React from "react";
import Layout from "../components/Layout/Layout";
import "../styles/ContactUs.css";

const About = () => {
  return (
    <Layout title="Privacy Policy - Ecommerce App">
      <div className="about-container">
        <div className="about-wrapper">
          
          {/* LEFT IMAGE */}
          <div className="about-image">
            {/* Replace src with your own image */}
            <img
              src="/images/ContactUs.png"
              alt="Contact Us"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="about-content">
            <h1>Contact US</h1>

            <p>
              We’re here to help!
Have questions about your order, sizing, shipping, or returns? Reach out to us anytime and our support team will be happy to assist you
            </p>

            <h2>Get in Touch</h2>

            <p>
              📧 Email Support - 
            support@PureFabric.com
            
            (We respond within 24 – 48 business hours 🕰️)
             <strong>📞Phone / WhatsApp Support</strong> - +91-1800-999-000
            Available: Monday – Saturday | 10:00 AM – 6:00 PM |
            
            
            🏢 Office Address - 
            PureFabric
            Sector-22
            Noida, 
            UttarPradesh – 
            249478
            India
            </p>

            <ul>
              <li>✅ Order tracking</li>
              <li>✅ Exchanges or returns</li>
              <li>✅ Delivery delays</li>
              <li>✅ Email Us with your <strong>Order ID</strong> for  quick resolution.</li>
            </ul>

            <div className="about-actions">
              <a href="/contact" className="btn-primary">
                Privay Policy
              </a>
              <a href="/policy" className="btn-primary">
                About Us 
              </a>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default About;
